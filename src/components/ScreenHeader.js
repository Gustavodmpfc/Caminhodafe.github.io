import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../styles/theme';

export default function ScreenHeader({ title, subtitle, compact = false }) {
  return (
    <View style={[styles.wrap, compact && styles.compact]}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: theme.spacing.md,
  },
  compact: {
    marginBottom: 8,
  },
  title: {
    color: theme.colors.text,
    fontSize: 26,
    fontWeight: '800',
  },
  subtitle: {
    color: theme.colors.muted,
    fontSize: 15,
    lineHeight: 22,
    marginTop: 4,
  },
});
