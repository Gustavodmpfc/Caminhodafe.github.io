import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { GraduationCap } from 'lucide-react-native';
import AppButton from '../components/AppButton';
import InfoCard from '../components/InfoCard';
import ScreenHeader from '../components/ScreenHeader';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../services/supabase';
import { commonStyles } from '../styles/commonStyles';
import { theme } from '../styles/theme';
import { getFriendlyAuthError } from '../utils/authErrors';
import { isValidEmail } from '../utils/authValidation';

export default function LoginScreen({ navigation }) {
  const { loginAsDevStudent, canUseDevLogin, refreshProfile } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleLogin() {
    setError('');

    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || !password) {
      setError('Informe e-mail e senha.');
      return;
    }

    if (!isValidEmail(cleanEmail)) {
      setError('Informe um e-mail válido.');
      return;
    }

    setLoading(true);
    try {
      const { data, error: loginError } = await supabase.auth.signInWithPassword({
        email: cleanEmail,
        password,
      });

      if (loginError) {
        setError(getFriendlyAuthError(loginError));
        return;
      }

      if (data.user) {
        await refreshProfile(data.user);
      }
    } catch (loginError) {
      setError(getFriendlyAuthError(loginError));
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView style={commonStyles.screen} contentContainerStyle={commonStyles.container}>
      <ScreenHeader title="Bem-vindo de volta" subtitle="Entre para acessar seu painel do Caminho da Fé." />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        autoComplete="current-password"
        value={password}
        onChangeText={setPassword}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <View style={styles.gap}>
        <AppButton title="Entrar" icon={GraduationCap} loading={loading} onPress={handleLogin} />
        {canUseDevLogin ? (
          <AppButton
            title="Entrar como aluno demo"
            variant="secondary"
            onPress={loginAsDevStudent}
          />
        ) : null}
        <AppButton title="Criar nova conta" variant="secondary" onPress={() => navigation.navigate('Register')} />
      </View>
      <InfoCard title="Acesso do catequizando" description="O app usa Supabase Auth e mantém a sessão do aluno salva no aparelho." />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    fontSize: 16,
  },
  error: {
    color: theme.colors.danger,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: theme.spacing.sm,
  },
  gap: {
    gap: theme.spacing.sm,
    marginVertical: theme.spacing.md,
  },
});
