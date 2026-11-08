import AsyncStorage from '@react-native-async-storage/async-storage';
import { isSupabaseConfigured, supabase } from './supabase';

// Contas reais (Supabase Auth) gravam no banco. Contas de demonstração
// (admin de testes / login de desenvolvimento) não têm usuário no banco,
// então guardam as tentativas somente neste aparelho/navegador.

const localKey = (userId) => `@caminho-da-fe:tentativas:v2:${encodeURIComponent(userId || 'anonymous')}`;

function friendlyError(error, fallback) {
  const code = error?.code;
  const message = String(error?.message || '');

  if (code === 'PGRST202' || code === 'PGRST205' || code === '42P01' || code === '42883') {
    return 'O banco ainda não tem as tabelas de progresso. Execute a migration 20261108000000_learning_progress.sql no Supabase.';
  }
  if (/failed to fetch|network/i.test(message)) {
    return 'Falha de conexão. Verifique sua internet e tente novamente.';
  }
  if (/sess[aã]o n[aã]o encontrada|jwt/i.test(message)) {
    return 'Sua sessão expirou. Saia e entre novamente.';
  }
  return message || fallback;
}

function normalizeAttempt(row) {
  return {
    atividade_id: String(row.atividade_id),
    resposta: Number(row.resposta),
    acertou: Boolean(row.acertou),
    criado_em: row.criado_em || new Date().toISOString(),
  };
}

async function readLocal(userId) {
  const saved = await AsyncStorage.getItem(localKey(userId));
  if (!saved) return [];

  let parsed;
  try {
    parsed = JSON.parse(saved);
  } catch {
    throw new Error('Os dados de progresso salvos neste aparelho estão inválidos.');
  }
  if (!Array.isArray(parsed)) {
    throw new Error('Os dados de progresso salvos neste aparelho estão inválidos.');
  }
  return parsed
    .filter((row) => row && typeof row.atividade_id === 'string' && Number.isInteger(row.resposta))
    .map(normalizeAttempt);
}

export async function loadAttempts({ userId, remote }) {
  if (!remote) return readLocal(userId);

  if (!isSupabaseConfigured) throw new Error('Banco não configurado.');

  const { data, error } = await supabase
    .from('tentativas_atividades')
    .select('atividade_id, resposta, acertou, criado_em')
    .eq('usuario_id', userId)
    .order('criado_em', { ascending: true });

  if (error) throw new Error(friendlyError(error, 'Não foi possível carregar seu progresso.'));
  return (data || []).map(normalizeAttempt);
}

function validateAnswer(activity, answerIndex) {
  if (
    !activity?.id ||
    !activity.aula_id ||
    !Array.isArray(activity.alternativas) ||
    !Number.isInteger(answerIndex) ||
    answerIndex < 0 ||
    answerIndex >= activity.alternativas.length
  ) {
    throw new Error('Não foi possível registrar esta resposta.');
  }
}

// Envia a resposta. No modo remoto quem corrige é o servidor (função
// registrar_tentativa); no modo local a correção usa o gabarito do app.
// Retorna { acertou, jaConcluida, attempt } — `attempt` é null quando nada novo foi gravado.
export async function submitAttempt({ userId, remote, activity, answerIndex }) {
  validateAnswer(activity, answerIndex);

  if (remote) {
    const { data, error } = await supabase.rpc('registrar_tentativa', {
      p_atividade_id: activity.id,
      p_resposta: answerIndex,
    });
    if (error) throw new Error(friendlyError(error, 'Não foi possível registrar sua resposta.'));

    const acertou = Boolean(data?.acertou);
    if (data?.ja_concluida) return { acertou: true, jaConcluida: true, attempt: null };

    return {
      acertou,
      jaConcluida: false,
      attempt: normalizeAttempt({
        atividade_id: activity.id,
        resposta: answerIndex,
        acertou,
        criado_em: data?.criado_em,
      }),
    };
  }

  if (!Number.isInteger(activity.resposta_correta)) {
    throw new Error('Não foi possível registrar esta resposta.');
  }

  const attempts = await readLocal(userId);
  if (attempts.some((item) => item.atividade_id === activity.id && item.acertou)) {
    return { acertou: true, jaConcluida: true, attempt: null };
  }

  const attempt = normalizeAttempt({
    atividade_id: activity.id,
    resposta: answerIndex,
    acertou: answerIndex === activity.resposta_correta,
    criado_em: new Date().toISOString(),
  });
  await AsyncStorage.setItem(localKey(userId), JSON.stringify([...attempts, attempt]));
  return { acertou: attempt.acertou, jaConcluida: false, attempt };
}
