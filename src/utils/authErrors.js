export function getFriendlyAuthError(error) {
  const message = String(error?.message || error || '').toLowerCase();

  if (!message) return 'Não foi possível concluir a ação. Tente novamente.';
  if (message.includes('invalid login') || message.includes('invalid credentials')) {
    return 'E-mail ou senha incorretos.';
  }
  if (message.includes('email') && message.includes('invalid')) {
    return 'Informe um e-mail válido.';
  }
  if (message.includes('password') || message.includes('senha')) {
    return 'A senha precisa ter pelo menos 6 caracteres.';
  }
  if (message.includes('user already registered')) {
    return 'Este e-mail já está cadastrado. Tente fazer login.';
  }
  if (message.includes('already') || message.includes('duplicate') || message.includes('unique')) {
    return 'Este e-mail já está cadastrado.';
  }
  if (message.includes('failed to fetch') || message.includes('network')) {
    return 'Falha de conexão. Verifique sua internet e tente novamente.';
  }
  if (message.includes('row-level security') || message.includes('permission')) {
    return 'Cadastro criado no Auth, mas o perfil foi bloqueado pelas políticas RLS da tabela usuários.';
  }

  return error?.message || 'Algo deu errado. Verifique os dados e tente novamente.';
}
