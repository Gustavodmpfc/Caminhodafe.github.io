import { createElement } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Video } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../styles/theme';

export default function YoutubePlayerComponent({ videoId }) {
  if (!videoId) {
    return (
      <LinearGradient colors={[theme.colors.softGold, '#FFFFFF']} style={styles.placeholder}>
        <Video size={28} color={theme.colors.primaryDark} />
        <Text style={styles.placeholderTitle}>Vídeo em breve</Text>
        <Text style={styles.placeholderText}>Esta aula ainda não possui vídeo cadastrado.</Text>
      </LinearGradient>
    );
  }

  return (
    <View style={styles.card}>
      <View style={styles.playerWrap}>
        {createElement('iframe', {
          title: 'Vídeo da aula no YouTube',
          src: `https://www.youtube.com/embed/${encodeURIComponent(videoId)}`,
          allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
          allowFullScreen: true,
          referrerPolicy: 'strict-origin-when-cross-origin',
          style: styles.iframe,
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: theme.radius.md,
    overflow: 'hidden',
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: theme.spacing.md,
    ...theme.shadows.soft,
  },
  playerWrap: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: '#000000',
  },
  iframe: {
    display: 'block',
    width: '100%',
    height: '100%',
    border: 0,
  },
  placeholder: {
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.md,
    minHeight: 170,
    ...theme.shadows.soft,
  },
  placeholderTitle: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: '800',
    marginTop: theme.spacing.sm,
    textAlign: 'center',
  },
  placeholderText: {
    color: theme.colors.muted,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 4,
    textAlign: 'center',
  },
});
