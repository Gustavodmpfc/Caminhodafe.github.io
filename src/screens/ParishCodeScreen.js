import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyRound, LogOut } from 'lucide-react-native';
import AppButton from '../components/AppButton';
import InfoCard from '../components/InfoCard';
import ScreenHeader from '../components/ScreenHeader';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../services/supabase';
import { commonStyles } from '../styles/commonStyles';
import { theme } from '../styles/theme';
import { getFriendlyAuthError } from '../utils/authErrors';

export default function ParishCodeScreen() {
  const { signOut, user, refreshProfile } = useAuth();
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleCodeSubmit() {
    setError('');
    const cleanCode = code.trim().toUpperCase();

    if (!cleanCode) {
      setError('Informe o código da paróquia.');
      return;
    }

    if (!user?.id) {
      setError('Sessão não encontrada. Faça login novamente.');
      return;
    }

    setLoading(true);
    try {
      const { error: parishError } = await supabase.rpc('vincular_paroquia', {
        p_codigo: cleanCode,
      });

      if (parishError) {
        setError(getFriendlyAuthError(parishError));
        return;
      }

      const updatedProfile = await refreshProfile(user.id);
      if (!updatedProfile) {
        setError('Paróquia vinculada, mas não foi possível carregar o perfil. Tente entrar novamente.');
      }
    } catch (submitError) {
      setError(getFriendlyAuthError(submitError));
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    await signOut();
  }

  return (
    <ScrollView style={commonStyles.screen} contentContainerStyle={commonStyles.container}>
      <ScreenHeader title="Código da paróquia" subtitle="Use o código entregue pelo catequista para vincular sua conta." />
      <TextInput
        style={styles.input}
        placeholder="Exemplo: FE2026"
        autoCapitalize="characters"
        value={code}
        onChangeText={setCode}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <View style={styles.actions}>
        <AppButton title="Vincular paróquia" icon={KeyRound} loading={loading} onPress={handleCodeSubmit} />
        <AppButton title="Sair da conta" icon={LogOut} variant="secondary" onPress={handleLogout} />
      </View>
      <InfoCard title="Como funciona" description="O servidor valida o código da paróquia e vincula a sua conta com segurança." tone="gold">
        <Text style={styles.note}>Depois disso, alunos entram direto no painel.</Text>
      </InfoCard>
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
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0,
  },
  error: {
    color: theme.colors.danger,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: theme.spacing.sm,
  },
  actions: {
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  },
  note: {
    color: theme.colors.muted,
    fontSize: 13,
    marginTop: theme.spacing.sm,
  },
});
