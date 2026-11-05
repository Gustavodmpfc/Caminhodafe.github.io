import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { UserPlus } from 'lucide-react-native';
import AppButton from '../components/AppButton';
import InfoCard from '../components/InfoCard';
import ScreenHeader from '../components/ScreenHeader';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../services/supabase';
import { commonStyles } from '../styles/commonStyles';
import { theme } from '../styles/theme';
import { getFriendlyAuthError } from '../utils/authErrors';
import { getRegistrationValidationError } from '../utils/authValidation';

export default function RegisterScreen({ navigation }) {
  const { ensureUserProfile, refreshProfile } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  async function handleRegister() {
    setError('');
    setNotice('');
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    const validationError = getRegistrationValidationError({
      name: cleanName,
      email: cleanEmail,
      password,
    });

    if (validationError) {
      setError(validationError);
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não conferem.');
      return;
    }

    setLoading(true);

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: cleanEmail,
        password,
        options: {
          data: {
            nome: cleanName,
            tipo_usuario: 'aluno',
          },
        },
      });

      if (signUpError) {
        setError(getFriendlyAuthError(signUpError));
        return;
      }

      const userId = data.user?.id;
      if (!userId) {
        setError('Não foi possível criar a conta. Verifique se o e-mail já está cadastrado e tente entrar.');
        return;
      }

      if (data.user.identities?.length === 0) {
        setError('Este e-mail já possui cadastro. Faça login para acessar sua conta.');
        return;
      }

      if (!data.session) {
        setNotice('Conta criada. Verifique seu e-mail e confirme o cadastro antes de entrar.');
        return;
      }

      const createdProfile = await ensureUserProfile(data.user);

      if (!createdProfile) {
        setError('A conta foi criada, mas não foi possível salvar o perfil. Verifique a configuração do Supabase.');
        return;
      }

      await refreshProfile(data.user);
    } catch (registerError) {
      setError(getFriendlyAuthError(registerError));
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView style={commonStyles.screen} contentContainerStyle={commonStyles.container}>
      <ScreenHeader title="Crie sua conta" subtitle="Depois do cadastro, informe o código da sua paróquia ou comunidade." />
      <TextInput style={styles.input} placeholder="Nome completo" autoComplete="name" value={name} onChangeText={setName} />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry autoComplete="new-password" value={password} onChangeText={setPassword} />
      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        secureTextEntry
        autoComplete="new-password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {notice ? <Text style={styles.notice}>{notice}</Text> : null}
      <View style={styles.action}>
        <AppButton title="Criar conta" icon={UserPlus} loading={loading} onPress={handleRegister} />
      </View>
      <InfoCard title="Regras do cadastro" description="Use um nome sem números, um e-mail válido e uma senha de pelo menos 6 caracteres com uma letra minúscula e um número." tone="gold" />
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
  notice: {
    color: theme.colors.primary,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: theme.spacing.sm,
  },
  action: {
    marginVertical: theme.spacing.md,
  },
});
