import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CircleHelp } from 'lucide-react-native';
import AppButton from '../components/AppButton';
import InfoCard from '../components/InfoCard';
import ProgressBar from '../components/ProgressBar';
import ScreenHeader from '../components/ScreenHeader';
import YoutubePlayerComponent from '../components/YoutubePlayerComponent';
import useLearningProgress from '../hooks/useLearningProgress';
import { formatPercent } from '../utils/formatters';
import { commonStyles } from '../styles/commonStyles';
import { theme } from '../styles/theme';

export default function LessonDetailScreen({ route, navigation }) {
  const { lessons, loading, error } = useLearningProgress();
  const lesson = lessons.find((item) => item.id === route.params?.lessonId);

  if (!lesson) {
    return (
      <ScrollView style={commonStyles.screen} contentContainerStyle={commonStyles.container}>
        <ScreenHeader title="Aula não encontrada" subtitle="Esta aula não está disponível na trilha." />
        <InfoCard title="Conteúdo indisponível" description="Volte à lista de aulas e escolha uma atividade disponível." />
        <AppButton title="Voltar às aulas" onPress={() => navigation.goBack()} />
      </ScrollView>
    );
  }

  if (lesson.status === 'locked') {
    return (
      <ScrollView style={commonStyles.screen} contentContainerStyle={commonStyles.container}>
        <ScreenHeader title={lesson.titulo} subtitle={lesson.modulo} />
        <InfoCard
          title={lesson.disponivel ? 'Aula bloqueada' : 'Aula em breve'}
          description={
            lesson.disponivel
              ? 'Conclua o quiz da aula anterior para liberar esta aula.'
              : 'O conteúdo desta aula ainda está sendo preparado.'
          }
        />
        <AppButton title="Voltar às aulas" onPress={() => navigation.goBack()} />
      </ScrollView>
    );
  }

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
      <InfoCard
        title={lesson.concluida ? 'Aula concluída' : 'Seu progresso nesta aula'}
        description={
          lesson.concluida
            ? 'Você acertou o quiz desta aula. Parabéns!'
            : 'A aula é concluída quando você acerta o quiz.'
        }
      >
        <Text style={styles.percent}>{formatPercent(lesson.percentual)}</Text>
        <ProgressBar value={lesson.percentual} />
      </InfoCard>
      {lesson.disponivel ? (
        <AppButton
          title={lesson.concluida ? 'Rever quiz' : 'Responder quiz'}
          icon={CircleHelp}
          disabled={loading}
          onPress={() => navigation.navigate('Quiz', { lessonId: lesson.id })}
        />
      ) : (
        <InfoCard title="Quiz em preparação" description="Esta aula ainda não tem atividade cadastrada." />
      )}
      <View style={styles.space} />
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
  percent: {
    color: theme.colors.primaryDark,
    fontSize: 16,
    fontWeight: '800',
    marginVertical: theme.spacing.sm,
  },
  space: {
    height: theme.spacing.sm,
  },
});
