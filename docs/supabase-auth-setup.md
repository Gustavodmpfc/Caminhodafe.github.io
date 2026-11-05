# Configuracao do Supabase

O app usa o Supabase para autenticar contas, manter o perfil do aluno e vincular uma conta a uma paroquia. Atualmente, aulas, atividades e progresso continuam usando dados locais/de demonstracao.

## 1. Criar o projeto Supabase

1. Crie um projeto no [Supabase](https://supabase.com/dashboard) e aguarde o provisionamento terminar.
2. Em **Project Settings > API**, copie a **Project URL** e a chave publica **anon** (ou **publishable**). Nunca use `service_role` ou `secret` no front-end.
3. Atualize `supabaseUrl` e `supabaseAnonKey` em `src/services/supabase.js` com os dois valores do mesmo projeto.
4. Confirme que a URL abre e que o projeto esta ativo. Ela deve ter o formato `https://<project-ref>.supabase.co`.

## 2. Criar as tabelas, politicas e funcoes

Abra **SQL Editor** no projeto novo e execute o conteudo integral de:

```text
supabase/migrations/20261105160000_auth_and_parishes.sql
```

Essa migration cria `usuarios` e `paroquias`, o perfil automatico apos cadastro, politicas RLS para limitar a leitura ao proprio usuario/paroquia e a funcao `vincular_paroquia`, que valida o codigo no banco sem expor a lista de codigos a todos os alunos.

Execute-a uma vez em um projeto vazio. Ela nao e uma migration de atualizacao para tabelas preexistentes; se o projeto ja tiver tabelas com esses nomes, confira o esquema antes de rodar.

## 3. Configurar Auth e confirmacao de e-mail

Em **Authentication > URL Configuration**, configure:

- **Site URL**: `https://gustavodmpfc.github.io/Caminhodafe.github.io/`
- **Redirect URLs**: `https://gustavodmpfc.github.io/Caminhodafe.github.io/**`

Para desenvolvimento local, adicione tambem a URL que o Expo mostrar no terminal. Em **Authentication > Settings**, configure a senha para exigir pelo menos 6 caracteres. O formulario do app exige ainda letra minuscula e numero.

Se a confirmacao de e-mail estiver habilitada, o cadastro mostra um aviso para verificar a caixa de entrada. O link de confirmacao deve retornar ao site; depois, o aluno entra com o mesmo e-mail e senha. Para um teste inicial, e possivel desativar temporariamente **Authentication > Providers > Email > Confirm email**; nesse caso, proteja o projeto de teste adequadamente.

## 4. Criar uma paroquia para teste

Depois de executar a migration, rode no SQL Editor:

```sql
insert into public.paroquias (nome, cidade, codigo_acesso, status)
values ('Paroquia Demo', 'Sao Paulo', 'FE2026', 'ativa');
```

O aluno cria a conta, entra e informa `FE2026`. O codigo e comparado sem diferenciar maiusculas/minusculas ou espacos nas pontas.

## Validar o fluxo

1. Abra o site e cadastre uma conta com nome sem numeros, e-mail valido e senha que cumpra os requisitos.
2. Confirme o e-mail, se essa opcao estiver habilitada.
3. Entre com as mesmas credenciais.
4. Informe o codigo de paroquia ativo.
5. Na tabela `usuarios`, confirme que foi criado um perfil cujo `id` corresponde ao usuario em `auth.users` e que `paroquia_id` foi vinculado.
6. Teste com duas contas para confirmar que cada uma so consegue ler o proprio perfil.

Se o endereco `supabaseUrl` retornar erro de DNS, confira se o projeto continua ativo e se copiou a URL atual do mesmo projeto que forneceu a chave publica. A chave `anon` e publica e limitada pelas politicas RLS; nunca publique `service_role`.

## Escopo do backend atual

Somente autenticacao, perfil e vinculo de paroquia sao persistidos no Supabase nesta versao. A migration nao cria as tabelas futuras de turmas, aulas, atividades, comunicados, pagamentos ou progresso; essas partes da interface ainda usam mocks ou armazenamento local.
