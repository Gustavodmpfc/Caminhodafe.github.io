import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { lessons as sourceLessons } from '../data/mockData';
import { getLearningProgress, saveActivityAnswer, saveLessonProgress } from '../services/learningProgress';

export default function useLearningProgress() {
  const { user } = useAuth();
  const userId = user?.id || 'anonymous';
  const [storedProgress, setStoredProgress] = useState({ lessons: {}, activities: {} });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');

    getLearningProgress(userId)
      .then((progress) => {
        if (active) setStoredProgress(progress);
      })
      .catch((loadError) => {
        if (active) {
          setError(loadError instanceof Error ? loadError.message : 'Não foi possível carregar seu progresso salvo.');
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [userId]);

  const lessons = useMemo(
    () =>
      sourceLessons.map((lesson) => {
        const saved = storedProgress.lessons[lesson.id];
        if (!saved) return lesson;
        const percentual = Math.max(lesson.percentual, saved.percentual);
        const concluida = Boolean(lesson.concluida || saved.concluida);
        return {
          ...lesson,
          percentual,
          concluida,
          status: concluida
            ? 'completed'
            : lesson.status === 'locked'
              ? 'locked'
              : percentual > 0
                ? 'current'
                : lesson.status,
        };
      }),
    [storedProgress]
  );

  const updateLessonProgress = useCallback(
    async (lessonId, progress) => {
      const result = await saveLessonProgress(userId, lessonId, progress);
      setStoredProgress(result.state);
      setError('');
      return result.progress;
    },
    [userId]
  );

  const submitAnswer = useCallback(
    async (activity, answerIndex) => {
      const result = await saveActivityAnswer(userId, activity, answerIndex);
      setStoredProgress(result.state);
      setError('');
      return result.attempt;
    },
    [userId]
  );

  return {
    lessons,
    activities: storedProgress.activities,
    loading,
    error,
    updateLessonProgress,
    submitAnswer,
  };
}
