import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { CheckCircle2, RotateCcw } from 'lucide-react-native';
import AppButton from '../components/AppButton';
import InfoCard from '../components/InfoCard';
import ScreenHeader from '../components/ScreenHeader';
import useLearningProgress from '../hooks/useLearningProgress';
import { commonStyles } from '../styles/commonStyles';
import { theme } from '../styles/theme';

const encouragement = [
  'Quase lá! Releia o resumo da aula, assista ao vídeo de novo e tente outra vez. Cada tentativa ajuda você a aprender.',
  'Não desanime! Errar faz parte do caminho. Respire fundo, revise a aula e continue praticando.',
  'Continue praticando! Você está no caminho certo, e a fé também se constrói com perseverança.',
];

export default function QuizScreen({ route, navigation }) {
  const { activities, lessons, activityState, error, loading, submitAnswer } = useLearningProgress();
  const [selected, setSelected] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [wrongCount, setWrongCount] = useState(0);
  const [lastResult, setLastResult] = useState(null);
  const [focusId, setFocusId] = useState(null);

  const lessonId = route.params?.lessonId;
  const lesson = lessons.find((item) => item.id === lessonId);
  const lessonActivities = activities.filter((item) => item.aula_id === lessonId);
  // Primeira atividade ainda não acertada; se todas foram acertadas, mostra a última.
  // Enquanto o feedback de uma resposta está na tela, mantém aquela atividade em foco.
  const activity =
    lessonActivities.find((item) => item.id === focusId) ||
    lessonActivities.find((item) => !activityState[item.id]?.acertou) ||
    lessonActivities[lessonActivities.length - 1];
  const hasMore = lessonActivities.some((item) => !activityState[item.id]?.acertou);
  const state = activity ? activityState[activity.id] : null;
  const solved = Boolean(state?.acertou);
  const wrong = !solved && lastResult === 'wrong';
  const lessonLocked = !lesson || lesson.status === 'locked';

  async function handleSubmit() {
    if (selected === null || !activity || solved || submitting) return;
    setSubmitting(true);
    setSubmitError('');
    setFocusId(activity.id);

    try {
      const result = await submitAnswer(activity, selected);
      if (result.acertou) {
        setLastResult('correct');
      } else {
        setLastResult('wrong');
        setWrongCount((count) => count + 1);
      }
    } catch (saveError) {
      setSubmitError(saveError instanceof Error ? saveError.message : 'Não foi possível registrar sua resposta.');
    } finally {
      setSubmitting(false);
    }
  }

  function handleRetry() {
    setSelected(null);
    setLastResult(null);
  }

  function handleNext() {
    setSelected(null);
    setLastResult(null);
    setFocusId(null);
  }

  if (!activity || lessonLocked) {
    return (
      <ScrollView style={commonStyles.screen} contentContainerStyle={commonStyles.container}>
        <ScreenHeader
          title="Atividade indisponível"
          subtitle={lessonLocked && activity ? 'Conclua a aula anterior para liberar este quiz.' : 'Esta aula ainda não possui um quiz cadastrado.'}
        />
        <InfoCard title="Nenhuma atividade disponível" description="Volte ao conteúdo da aula ou escolha outra aula da trilha." />
        <AppButton title="Voltar" onPress={() => navigation.goBack()} />
      </ScrollView>
    );
  }

  const locked = solved || wrong || loading || submitting;
  const chosen = solved ? state?.ultima?.resposta : selected;

  return (
    <ScrollView style={commonStyles.screen} contentContainerStyle={commonStyles.container}>
      <ScreenHeader title="Quiz da aula" subtitle={activity.pergunta} />
      {error ? <InfoCard title="Progresso indisponível" description={error} /> : null}
      <View style={styles.options}>
        {activity.alternativas.map((option, index) => (
          <Pressable
            key={`${activity.id}-${index}`}
            accessibilityRole="radio"
            accessibilityState={{ checked: chosen === index, disabled: locked }}
            disabled={locked}
            onPress={() => setSelected(index)}
            style={[
              styles.option,
              chosen === index && styles.selected,
              solved && chosen === index && styles.correct,
              wrong && selected === index && styles.wrongOption,
            ]}
          >
            <Text style={styles.optionText}>
              {String.fromCharCode(65 + index)}. {option}
            </Text>
          </Pressable>
        ))}
      </View>

      {solved ? (
        <InfoCard
          title="Resposta correta!"
          description={
            lesson?.concluida
              ? `Aula concluída${lesson.xp ? ` — você ganhou ${lesson.xp} XP` : ''}. Seu progresso foi atualizado.`
              : 'Seu progresso nesta aula foi atualizado.'
          }
          tone="gold"
        />
      ) : null}

      {wrong ? (
        <InfoCard
          title="Continue praticando"
          description={encouragement[(wrongCount - 1) % encouragement.length]}
        />
      ) : null}
      {submitError ? <Text style={styles.error}>{submitError}</Text> : null}

      {solved ? (
        hasMore ? (
          <AppButton title="Próxima atividade" icon={CheckCircle2} onPress={handleNext} />
        ) : (
          <AppButton title="Voltar à trilha" icon={CheckCircle2} onPress={() => navigation.navigate('Lessons')} />
        )
      ) : wrong ? (
        <AppButton title="Tentar novamente" icon={RotateCcw} onPress={handleRetry} />
      ) : (
        <AppButton
          title="Confirmar resposta"
          icon={CheckCircle2}
          loading={submitting}
          disabled={loading || selected === null}
          onPress={handleSubmit}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  options: {
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  },
  option: {
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
  },
  selected: {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.softGreen,
  },
  correct: {
    borderColor: theme.colors.success,
    borderWidth: 2,
  },
  wrongOption: {
    borderColor: theme.colors.accent,
    backgroundColor: '#FFF8E8',
  },
  optionText: {
    color: theme.colors.text,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
  },
  error: {
    color: theme.colors.danger,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: theme.spacing.sm,
  },
});
