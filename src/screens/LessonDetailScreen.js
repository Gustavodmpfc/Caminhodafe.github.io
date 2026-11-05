import { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { CircleHelp, CheckCircle2 } from 'lucide-react-native';
import AppButton from '../components/AppButton';
import InfoCard from '../components/InfoCard';
import ScreenHeader from '../components/ScreenHeader';
import YoutubePlayerComponent from '../components/YoutubePlayerComponent';
import { activities } from '../data/mockData';
import useLearningProgress from '../hooks/useLearningProgress';
import { commonStyles } from '../styles/commonStyles';
import { theme } from '../styles/theme';

export default function LessonDetailScreen({ route, navigation }) {
  const { lessons, loading, error, updateLessonProgress } = useLearningProgress();
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState('');
  const lesson = lessons.find((item) => item.id === route.params?.lessonId);

  async function handleMarkAsStudied() {
    setSaving(true);
    setSaveError('');

    try {
      await updateLessonProgress(lesson.id, { percentual: 100, concluida: true });
    } catch (saveError) {
      setSaveError(saveError instanceof Error ? saveError.message : 'Não foi possível salvar seu progresso.');
    } finally {
      setSaving(false);
    }
  }

  if (!lesson) {
    return (
      <ScrollView style={commonStyles.screen} contentContainerStyle={commonStyles.container}>
        <ScreenHeader title="Aula não encontrada" subtitle="Esta aula não está disponível na trilha." />
        <InfoCard title="Conteúdo indisponível" description="Volte à lista de aulas e escolha uma atividade disponível." />
        <AppButton title="Voltar às aulas" onPress={() => navigation.goBack()} />
      </ScrollView>
    );
  }

  const hasQuiz = activities.some((activity) => activity.aula_id === lesson.id);

  return (
    <ScrollView style={commonStyles.screen} contentContainerStyle={commonStyles.container}>
      <ScreenHeader title={lesson.titulo} subtitle={lesson.modulo} />
      {error ? <InfoCard title="Progresso indisponível" description={error} /> : null}
      <YoutubePlayerComponent videoId={lesson.video_youtube_id} />
      <InfoCard title="Resumo da aula" description={lesson.descricao}>
        <Text style={styles.body}>
          Reflita sobre o tema, anote suas dúvidas e converse com seu catequista no próximo encontro.
        </Text>
      </InfoCard>
      {hasQuiz ? (
        <AppButton title="Responder quiz" icon={CircleHelp} onPress={() => navigation.navigate('Quiz', { lessonId: lesson.id })} />
      ) : (
        <InfoCard title="Quiz em preparação" description="Esta aula ainda não tem atividade cadastrada." />
      )}
      <Text style={styles.space} />
      {saveError ? <Text style={styles.error}>{saveError}</Text> : null}
      <AppButton
        title={lesson.concluida ? 'Aula estudada' : 'Marcar como estudada'}
        icon={CheckCircle2}
        variant="secondary"
        loading={saving}
        disabled={lesson.concluida || saving || loading}
        onPress={handleMarkAsStudied}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    color: theme.colors.text,
    fontSize: 15,
    lineHeight: 22,
    marginTop: theme.spacing.sm,
  },
  space: {
    height: theme.spacing.sm,
  },
  error: {
    color: theme.colors.danger,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: theme.spacing.sm,
  },
});
