import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { supabase } from '../services/supabase';

const AuthContext = createContext(null);
const canUseDevLogin = __DEV__ && process.env.EXPO_PUBLIC_ENABLE_DEV_LOGIN === 'true';
const canUseDemoAdmin = process.env.EXPO_PUBLIC_ENABLE_DEMO_ADMIN === 'true';

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [devUser, setDevUser] = useState(null);

  async function loadProfile(userOrId) {
    const userId = typeof userOrId === 'string' ? userOrId : userOrId?.id;

    if (!userId) {
      setProfile(null);
      return null;
    }

    const { data, error } = await supabase
      .from('usuarios')
      .select('*, paroquias(nome, cidade, codigo_acesso, status)')
      .eq('id', userId)
      .maybeSingle();

    if (error) {
      setProfile(null);
      return null;
    }

    if (data) {
      setProfile(data);
      return data;
    }

    if (typeof userOrId === 'object') {
      const createdProfile = await ensureUserProfile(userOrId);
      setProfile(createdProfile);
      return createdProfile;
    }

    setProfile(null);
    return null;
  }

  async function ensureUserProfile(user) {
    if (!user?.id) return null;

    const { data, error } = await supabase
      .from('usuarios')
      .select('*, paroquias(nome, cidade, codigo_acesso, status)')
      .eq('id', user.id)
      .maybeSingle();

    if (error) {
      return null;
    }

    return data || null;
  }

  useEffect(() => {
    let active = true;
    let profileLoadTimer;

    async function initSession() {
      const { data } = await supabase.auth.getSession();
      if (!active) return;

      setSession(data.session);
      if (data.session?.user) {
        await loadProfile(data.session.user);
      }
      setLoading(false);
    }

    initSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      if (!active) return;

      setSession(newSession);

      clearTimeout(profileLoadTimer);
      profileLoadTimer = setTimeout(async () => {
        try {
          if (newSession?.user) {
            await loadProfile(newSession.user);
          } else {
            setProfile(null);
          }
        } finally {
          if (active) setLoading(false);
        }
      }, 0);
    });

    return () => {
      active = false;
      clearTimeout(profileLoadTimer);
      listener.subscription.unsubscribe();
    };
  }, []);

  function loginAsDevStudent() {
    if (!canUseDevLogin) return;

    const demoUser = {
      id: 'dev-student',
      email: 'aluno.demo@local',
      user_metadata: {
        nome: 'Aluno Demo',
        tipo_usuario: 'aluno',
      },
    };

    setDevUser(demoUser);
    setProfile({
      id: demoUser.id,
      nome: 'Aluno Demo',
      email: 'admin',
      tipo_usuario: 'aluno',
      paroquia_id: 'dev-parish',
      paroquias: {
        nome: 'Paróquia Demo',
        cidade: 'Ambiente local',
        codigo_acesso: 'DEMO',
        status: 'ativa',
      },
    });
  }

  function loginAsDemoAdmin(email, password) {
    if (
      !canUseDemoAdmin
      || email.trim().toLowerCase() !== 'admin@gmail.com'
      || password !== 'admin123'
    ) {
      return false;
    }

    const demoUser = {
      id: 'demo-admin',
      email: 'admin@gmail.com',
      user_metadata: {
        nome: 'Administrador de Teste',
        tipo_usuario: 'admin_geral',
      },
    };

    setDevUser(demoUser);
    setProfile({
      id: demoUser.id,
      nome: demoUser.user_metadata.nome,
      email: demoUser.email,
      tipo_usuario: 'admin_geral',
      paroquia_id: 'demo-parish',
      paroquias: {
        nome: 'Paróquia de Demonstração',
        cidade: 'Ambiente de testes',
        codigo_acesso: 'DEMO',
        status: 'ativa',
      },
    });

    return true;
  }

  async function signOut() {
    setDevUser(null);
    setProfile(null);
    if (session) {
      await supabase.auth.signOut();
    }
    setSession(null);
  }

  const value = useMemo(() => {
    const activeUser = devUser || session?.user || null;

    return {
      session,
      user: activeUser,
      profile,
      loading,
      isLoggedIn: Boolean(activeUser),
      canUseDevLogin,
      canUseDemoAdmin,
      refreshProfile: loadProfile,
      ensureUserProfile,
      loginAsDevStudent,
      loginAsDemoAdmin,
      signOut,
      setProfile,
    };
  }, [session, devUser, profile, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth precisa ser usado dentro de AuthProvider');
  }
  return context;
}
