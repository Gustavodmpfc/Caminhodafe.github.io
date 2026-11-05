import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ScreenHeader from '../components/ScreenHeader';
import TrailLessonCard from '../components/TrailLessonCard';
import TopProgressCard from '../components/TopProgressCard';
import useLearningProgress from '../hooks/useLearningProgress';

const ROW_HEIGHT = 190;
const HEADER_HEIGHT = 210;
const REWARD_HEIGHT = 250;
const BG_IMAGE_RATIO = 2.5;

export default function LessonsScreen({ navigation }) {
  const { lessons, error } = useLearningProgress();
  const { width: screenWidth } = useWindowDimensions();
  const bgTileHeight = screenWidth * BG_IMAGE_RATIO;
  const insets = useSafeAreaInsets();
  const topPadding = Math.max(insets.top + 12, 44);
  const totalContentHeight =
    topPadding + HEADER_HEIGHT + (error ? 54 : 0) + lessons.length * ROW_HEIGHT + REWARD_HEIGHT;
  const tileCount = Math.ceil(totalContentHeight / bgTileHeight);

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ width: screenWidth, height: totalContentHeight }}>
        <View style={styles.background} pointerEvents="none">
          {Array.from({ length: tileCount }).map((_, index) => (
            <Image
              key={`trail-bg-${index}`}
              source={require('../assets/trail-bg.png')}
              style={[
                styles.backgroundTile,
                { top: index * bgTileHeight, width: screenWidth, height: bgTileHeight },
              ]}
              resizeMode="cover"
            />
          ))}
          <View style={styles.sunGlow} />
        </View>

        <View style={styles.content}>
          <View style={[styles.headerPanel, { paddingTop: topPadding }]}>
            <ScreenHeader
              title="Trilha da catequese"
              subtitle="Avance na sua jornada de fé"
              compact
            />

            <TopProgressCard compact />
          </View>

          <View style={styles.trailContainer}>
            {error ? <Text style={styles.progressError}>{error}</Text> : null}
            {lessons.map((lesson, index) => (
              <TrailLessonCard
                key={lesson.id}
                lesson={lesson}
                screenWidth={screenWidth}
                index={index}
                onPress={() =>
                  navigation.navigate('LessonDetail', { lessonId: lesson.id })
                }
              />
            ))}
          </View>

          <View style={styles.rewardBox}>
            <Text style={styles.rewardText}>
              🎁 Complete todas as etapas e ganhe um prêmio especial!
            </Text>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#C5D9A8',
  },

  content: {
    flex: 1,
  },

  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#C5D9A8',
    overflow: 'hidden',
  },

  backgroundTile: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.75,
  },

  headerPanel: {
    backgroundColor: '#F4F1E8',
    paddingHorizontal: 20,
    paddingBottom: 18,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    elevation: 3,
    shadowColor: '#5B554A',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },

  sunGlow: {
    position: 'absolute',
    top: 36,
    right: -44,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#F4DF8A',
    opacity: 0.28,
  },

  trailContainer: {
    width: '100%',
    marginTop: 8,
  },

  rewardBox: {
    marginHorizontal: 20,
    marginTop: 96,
    marginBottom: 40,
    backgroundColor: '#FFFFFFEE',
    padding: 20,
    borderRadius: 25,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },

  rewardText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#3A3A3A',
    textAlign: 'center',
  },
  progressError: {
    color: '#8D3434',
    backgroundColor: '#FFF1EF',
    borderRadius: 12,
    marginHorizontal: 20,
    marginVertical: 8,
    padding: 12,
    fontSize: 13,
    fontWeight: '700',
  },
});
