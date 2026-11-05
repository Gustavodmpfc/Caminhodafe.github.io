import { ScrollView, StyleSheet, Text, View } from 'react-native';
import InfoCard from '../components/InfoCard';
import ProgressBar from '../components/ProgressBar';
import ScreenHeader from '../components/ScreenHeader';
import useLearningProgress from '../hooks/useLearningProgress';
import { formatPercent } from '../utils/formatters';
import { commonStyles } from '../styles/commonStyles';
import { theme } from '../styles/theme';

export default function ProgressScreen() {
  const { lessons, error } = useLearningProgress();
  const completed = lessons.filter((lesson) => lesson.concluida).length;
  const average = lessons.length
    ? lessons.reduce((sum, lesson) => sum + lesson.percentual, 0) / lessons.length
    : 0;

  return (
    <ScrollView style={commonStyles.screen} contentContainerStyle={commonStyles.container}>
      <ScreenHeader title="Meu progresso" subtitle={`${completed} de ${lessons.length} aulas concluídas`} />
      {error ? <InfoCard title="Progresso salvo indisponível" description={error} /> : null}
      <InfoCard title="Progresso geral" description={formatPercent(average)}>
        <View style={styles.progressWrap}>
          <ProgressBar value={average} />
        </View>
      </InfoCard>

      {lessons.map((lesson) => (
        <InfoCard key={lesson.id} title={lesson.titulo} description={lesson.modulo}>
          <Text style={styles.percent}>{formatPercent(lesson.percentual)}</Text>
          <ProgressBar value={lesson.percentual} />
        </InfoCard>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  progressWrap: {
    marginTop: theme.spacing.md,
  },
  percent: {
    color: theme.colors.primaryDark,
    fontSize: 16,
    fontWeight: '800',
    marginVertical: theme.spacing.sm,
  },
});
