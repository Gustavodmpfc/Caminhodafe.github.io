import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useAuth } from './AuthContext';
import { activities, lessons as sourceLessons } from '../data/mockData';
import { loadAttempts, submitAttempt } from '../services/learningProgress';
import { buildProgress } from '../utils/progress';

// Estado único de progresso compartilhado por todas as telas (início, aulas,
// quiz, perfil...). Assim, responder um quiz atualiza as barras em todo lugar.

const LearningProgressContext = createContext(null);

export function LearningProgressProvider({ children }) {
  const { user, isRemoteUser } = useAuth();
  const userId = user?.id || null;
  const [attempts, setAttempts] = useState([]);
  const [loading, setLoading] = useState(Boolean(userId));
  const [error, setError] = useState('');

  const reload = useCallback(async () => {
    if (!userId) {
      setAttempts([]);
      setError('');
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const loaded = await loadAttempts({ userId, remote: isRemoteUser });
      setAttempts(loaded);
      setError('');
    } catch (loadError) {
      setAttempts([]);
      setError(loadError instanceof Error ? loadError.message : 'Não foi possível carregar seu progresso.');
    } finally {
      setLoading(false);
    }
  }, [userId, isRemoteUser]);

  useEffect(() => {
    let active = true;
    setAttempts([]);
    setError('');

    if (!userId) {
      setLoading(false);
      return undefined;
    }

    setLoading(true);
    loadAttempts({ userId, remote: isRemoteUser })
      .then((loaded) => {
        if (active) setAttempts(loaded);
      })
      .catch((loadError) => {
        if (active) {
          setError(loadError instanceof Error ? loadError.message : 'Não foi possível carregar seu progresso.');
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [userId, isRemoteUser]);

  const submitAnswer = useCallback(
    async (activity, answerIndex) => {
      const result = await submitAttempt({ userId, remote: isRemoteUser, activity, answerIndex });
      if (result.attempt) {
        setAttempts((current) => [...current, result.attempt]);
      } else if (result.jaConcluida) {
        // Outra aba/dispositivo já concluiu: sincroniza com o banco.
        reload();
      }
      setError('');
      return { acertou: result.acertou };
    },
    [userId, isRemoteUser, reload]
  );

  const progress = useMemo(
    () => buildProgress({ lessons: sourceLessons, activities, attempts }),
    [attempts]
  );

  const value = useMemo(
    () => ({
      ...progress,
      activities,
      attempts,
      loading,
      error,
      reload,
      submitAnswer,
    }),
    [progress, attempts, loading, error, reload, submitAnswer]
  );

  return <LearningProgressContext.Provider value={value}>{children}</LearningProgressContext.Provider>;
}

export function useLearningProgressContext() {
  const context = useContext(LearningProgressContext);
  if (!context) {
    throw new Error('useLearningProgress precisa ser usado dentro de LearningProgressProvider');
  }
  return context;
}
