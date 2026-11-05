export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function getRegistrationValidationError({ name, email, password }) {
  if (!name || !email || !password) {
    return 'Preencha nome, e-mail e senha.';
  }

  if (/\d/.test(name)) {
    return 'O nome não pode conter números.';
  }

  if (!isValidEmail(email)) {
    return 'Informe um e-mail válido.';
  }

  if (password.length < 6) {
    return 'A senha precisa ter pelo menos 6 caracteres.';
  }

  if (!/[a-z]/.test(password)) {
    return 'A senha precisa conter pelo menos uma letra minúscula.';
  }

  if (!/\d/.test(password)) {
    return 'A senha precisa conter pelo menos um número.';
  }

  return '';
}
