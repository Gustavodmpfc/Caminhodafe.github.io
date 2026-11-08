// Regras de progresso do aluno (lógica pura, sem dependência de React/Supabase).
//
// - Uma atividade (quiz) só conta quando existe ao menos uma tentativa CORRETA.
// - O percentual de uma aula = atividades acertadas / atividades da aula.
// - Uma aula só fica "concluída" quando todas as suas atividades foram acertadas.
// - O progresso geral considera apenas as aulas que já têm conteúdo (atividades),
//   então ele cresce sozinho conforme novos quizzes forem cadastrados.
// - Uma aula só desbloqueia quando a anterior foi concluída.

export const XP_PER_LEVEL = 100;

// Trilhas exibidas no perfil. Cada trilha agrupa aulas da lista principal.
export const journeyTracks = [
  { id: 'boas-vindas', title: 'Boas-vindas', lessonIds: ['aula-1', 'aula-2', 'aula-3', 'aula-4', 'aula-5'] },
  { id: 'oracoes', title: 'Orações', lessonIds: ['aula-10', 'aula-51', 'aula-52', 'aula-53'] },
  { id: 'biblia', title: 'Bíblia', lessonIds: ['aula-11', 'aula-12', 'aula-13', 'aula-14'] },
  { id: 'missa', title: 'Missa', lessonIds: ['aula-37', 'aula-38', 'aula-39', 'aula-40'] },
  { id: 'mandamentos', title: 'Mandamentos', lessonIds: ['aula-17', 'aula-49'] },
  { id: 'sacramentos', title: 'Sacramentos', lessonIds: ['aula-41', 'aula-42', 'aula-43', 'aula-44', 'aula-45', 'aula-46', 'aula-47', 'aula-48'] },
  { id: 'comunidade', title: 'Comunidade', lessonIds: ['aula-31', 'aula-32', 'aula-33', 'aula-34', 'aula-35', 'aula-36'] },
  { id: 'presenca', title: 'Presença', lessonIds: [], soon: true },
];

function dayKey(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function buildProgress({ lessons, activities, attempts }) {
  const safeAttempts = Array.isArray(attempts) ? attempts : [];

  const correctActivityIds = new Set(
    safeAttempts.filter((attempt) => attempt.acertou).map((attempt) => attempt.atividade_id)
  );
  const attemptCount = {};
  const lastAttempt = {};
  for (const attempt of safeAttempts) {
    attemptCount[attempt.atividade_id] = (attemptCount[attempt.atividade_id] || 0) + 1;
    lastAttempt[attempt.atividade_id] = attempt;
  }

  const activityState = {};
  for (const activity of activities) {
    activityState[activity.id] = {
      acertou: correctActivityIds.has(activity.id),
      tentativas: attemptCount[activity.id] || 0,
      ultima: lastAttempt[activity.id] || null,
    };
  }

  const ordered = [...lessons].sort((a, b) => a.ordem - b.ordem);
  const computed = [];
  let previousCompleted = true;

  for (const lesson of ordered) {
    const lessonActivities = activities.filter((activity) => activity.aula_id === lesson.id);
    const total = lessonActivities.length;
    const correct = lessonActivities.filter((activity) => correctActivityIds.has(activity.id)).length;
    const disponivel = total > 0;
    const percentual = disponivel ? Math.round((correct / total) * 100) : 0;
    const concluida = disponivel && correct === total;
    const desbloqueada = disponivel && previousCompleted;

    computed.push({
      ...lesson,
      percentual,
      concluida,
      disponivel,
      desbloqueada,
      totalAtividades: total,
      atividadesConcluidas: correct,
      status: concluida ? 'completed' : desbloqueada ? 'current' : 'locked',
    });

    previousCompleted = concluida;
  }

  const available = computed.filter((lesson) => lesson.disponivel);
  const overall = available.length
    ? available.reduce((sum, lesson) => sum + lesson.percentual, 0) / available.length
    : 0;
  const completedCount = computed.filter((lesson) => lesson.concluida).length;
  const xp = computed.filter((lesson) => lesson.concluida).reduce((sum, lesson) => sum + (lesson.xp || 0), 0);
  const days = new Set(safeAttempts.map((attempt) => dayKey(attempt.criado_em)).filter(Boolean)).size;

  const byId = Object.fromEntries(computed.map((lesson) => [lesson.id, lesson]));
  const tracks = journeyTracks.map((track) => {
    if (track.soon) return { ...track, progress: 0, status: 'soon' };
    const trackLessons = track.lessonIds.map((id) => byId[id]).filter((lesson) => lesson?.disponivel);
    if (!trackLessons.length) return { ...track, progress: 0, status: 'locked' };
    const progress = Math.round(
      trackLessons.reduce((sum, lesson) => sum + lesson.percentual, 0) / trackLessons.length
    );
    const status = progress >= 100 ? 'unlocked' : progress > 0 ? 'progress' : 'unlocked';
    return { ...track, progress, status };
  });

  return {
    lessons: computed,
    activityState,
    overall,
    completedCount,
    availableCount: available.length,
    xp,
    level: Math.floor(xp / XP_PER_LEVEL) + 1,
    days,
    tracks,
    startedTracks: tracks.filter((track) => track.progress > 0).length,
  };
}
