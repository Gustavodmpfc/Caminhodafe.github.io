import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { AuthProvider } from './src/context/AuthContext';
import { LearningProgressProvider } from './src/context/LearningProgressContext';
import { theme } from './src/styles/theme';

export default function App() {
  return (
    <AuthProvider>
      <LearningProgressProvider>
        <NavigationContainer>
          <StatusBar style="dark" backgroundColor={theme.colors.background} />
          <AppNavigator />
        </NavigationContainer>
      </LearningProgressProvider>
    </AuthProvider>
  );
}
