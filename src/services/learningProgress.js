import AsyncStorage from '@react-native-async-storage/async-storage';

const emptyState = () => ({ lessons: {}, activities: {} });
const storageKey = (userId) => `@caminho-da-fe:learning:${encodeURIComponent(userId || 'anonymous')}`;

export async function getLearningProgress(userId) {
  const saved = await AsyncStorage.getItem(storageKey(userId));
  if (!saved) return emptyState();

  const parsed = JSON.parse(saved);
  if (
    !parsed ||
    typeof parsed !== 'object' ||
    !parsed.lessons ||
    typeof parsed.lessons !== 'object' ||
    !parsed.activities ||
    typeof parsed.activities !== 'object'
  ) {
    throw new Error('Os dados de progresso salvos estão inválidos.');
  }

  for (const progress of Object.values(parsed.lessons)) {
    if (
      !progress ||
      typeof progress !== 'object' ||
      !Number.isFinite(progress.percentual) ||
      typeof progress.concluida !== 'boolean'
    ) {
      throw new Error('Os dados de progresso das aulas estão inválidos.');
    }
  }

  for (const attempt of Object.values(parsed.activities)) {
    if (
      !attempt ||
      typeof attempt !== 'object' ||
      !Number.isInteger(attempt.resposta) ||
      typeof attempt.acertou !== 'boolean'
    ) {
      throw new Error('Os dados de respostas salvos estão inválidos.');
    }
  }

  return parsed;
}

export async function saveLessonProgress(userId, lessonId, { percentual, concluida = false }) {
  const state = await getLearningProgress(userId);
  const current = state.lessons[lessonId] || {};
  const next = {
    percentual: Math.max(Number(current.percentual) || 0, Math.min(100, Math.max(0, Number(percentual) || 0))),
    concluida: Boolean(current.concluida || concluida),
  };

  const updated = {
    ...state,
    lessons: { ...state.lessons, [lessonId]: next },
  };
  await AsyncStorage.setItem(storageKey(userId), JSON.stringify(updated));
  return { state: updated, progress: next };
}

export async function saveActivityAnswer(userId, activity, answerIndex) {
  if (
    !activity?.id ||
    !activity.aula_id ||
    !Array.isArray(activity.alternativas) ||
    !Number.isInteger(activity.resposta_correta) ||
    activity.resposta_correta < 0 ||
    activity.resposta_correta >= activity.alternativas.length ||
    !Number.isInteger(answerIndex) ||
    answerIndex < 0 ||
    answerIndex >= activity.alternativas.length
  ) {
    throw new Error('Não foi possível registrar esta resposta.');
  }

  const state = await getLearningProgress(userId);
  const previous = state.activities[activity.id];
  if (previous) return { state, attempt: previous };

  const attempt = {
    resposta: answerIndex,
    acertou: answerIndex === activity.resposta_correta,
  };
  const currentProgress = state.lessons[activity.aula_id] || {};
  const nextProgress = {
    percentual: Math.max(Number(currentProgress.percentual) || 0, 80),
    concluida: Boolean(currentProgress.concluida),
  };
  const updated = {
    ...state,
    lessons: { ...state.lessons, [activity.aula_id]: nextProgress },
    activities: { ...state.activities, [activity.id]: attempt },
  };

  await AsyncStorage.setItem(storageKey(userId), JSON.stringify(updated));
  return { state: updated, attempt };
}
