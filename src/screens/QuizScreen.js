import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { CheckCircle2 } from 'lucide-react-native';
import AppButton from '../components/AppButton';
import InfoCard from '../components/InfoCard';
import ScreenHeader from '../components/ScreenHeader';
import { activities as sourceActivities } from '../data/mockData';
import useLearningProgress from '../hooks/useLearningProgress';
import { commonStyles } from '../styles/commonStyles';
import { theme } from '../styles/theme';

export default function QuizScreen({ route, navigation }) {
  const { activities, error, loading, submitAnswer } = useLearningProgress();
  const [selected, setSelected] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const activity = sourceActivities.find((item) => item.aula_id === route.params?.lessonId);
  const attempt = activity ? activities[activity.id] : null;
  const answered = Boolean(attempt);

  async function handleSubmit() {
    if (selected === null || !activity || answered) return;
    setSubmitting(true);
    setSubmitError('');

    try {
      await submitAnswer(activity, selected);
    } catch (saveError) {
      setSubmitError(saveError instanceof Error ? saveError.message : 'Não foi possível registrar sua resposta.');
    } finally {
      setSubmitting(false);
    }
  }

  if (!activity) {
    return (
      <ScrollView style={commonStyles.screen} contentContainerStyle={commonStyles.container}>
        <ScreenHeader title="Atividade indisponível" subtitle="Esta aula ainda não possui um quiz cadastrado." />
        <InfoCard title="Nenhuma atividade encontrada" description="Volte ao conteúdo da aula ou escolha outra aula da trilha." />
        <AppButton title="Voltar à aula" onPress={() => navigation.goBack()} />
      </ScrollView>
    );
  }

  return (
    <ScrollView style={commonStyles.screen} contentContainerStyle={commonStyles.container}>
      <ScreenHeader title="Quiz da aula" subtitle={activity.pergunta} />
      {error ? <InfoCard title="Respostas salvas indisponíveis" description={error} /> : null}
      <View style={styles.options}>
        {activity.alternativas.map((option, index) => (
          <Pressable
            key={`${activity.id}-${index}`}
            accessibilityRole="radio"
            accessibilityState={{ checked: (answered ? attempt.resposta : selected) === index, disabled: answered || loading || submitting }}
            disabled={answered || loading || submitting}
            onPress={() => setSelected(index)}
            style={[
              styles.option,
              (answered ? attempt.resposta : selected) === index && styles.selected,
              answered && index === activity.resposta_correta && styles.correct,
            ]}
          >
            <Text style={styles.optionText}>
              {String.fromCharCode(65 + index)}. {option}
            </Text>
          </Pressable>
        ))}
      </View>

      {answered ? (
        <InfoCard
          title={attempt.acertou ? 'Resposta correta' : 'Continue estudando'}
          description="Sua resposta foi registrada. Esta atividade permite apenas uma tentativa."
          tone={attempt.acertou ? 'gold' : 'default'}
        />
      ) : null}
      {submitError ? <Text style={styles.error}>{submitError}</Text> : null}

      <AppButton
        title={answered ? 'Ver meu progresso' : 'Confirmar resposta'}
        icon={CheckCircle2}
        loading={submitting}
        disabled={loading || (!answered && selected === null)}
        onPress={answered ? () => navigation.navigate('Progress') : handleSubmit}
      />
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
