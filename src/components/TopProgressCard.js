import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import useLearningProgress from '../hooks/useLearningProgress';

export default function TopProgressCard({ compact = false }) {
  const { xp, days, level } = useLearningProgress();

  return (
    <View style={[styles.container, compact && styles.compactContainer]}>
      <View style={styles.item}>
        <Text style={styles.value}>{xp}</Text>
        <Text style={styles.label}>XP total</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.item}>
        <Text style={styles.value}>{days}</Text>
        <Text style={styles.label}>{days === 1 ? 'dia' : 'dias'}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.item}>
        <Text style={styles.value}>{level}</Text>
        <Text style={styles.label}>nível</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
    marginBottom: 30,
  },

  compactContainer: {
    marginBottom: 0,
  },

  item: {
    flex: 1,
    alignItems: 'center',
  },

  divider: {
    width: 1,
    height: 40,
    backgroundColor: '#E7DFD2',
  },

  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#497D52',
  },

  label: {
    marginTop: 4,
    color: '#777',
  },
});