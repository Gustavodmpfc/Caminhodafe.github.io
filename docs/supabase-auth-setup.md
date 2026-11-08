# Configuracao do Supabase

O Supabase persiste autenticacao, perfil, vinculo de paroquia e respostas dos quizzes de contas reais. Aulas, videos e comunicados ainda usam dados locais/de demonstracao. Contas temporarias de demonstracao salvam o progresso apenas neste navegador/aparelho.

## Executar o backend local

Requisitos: Docker Desktop iniciado e Node.js instalado. Na raiz do projeto:

```powershell
npx supabase start
npx supabase status -o env
```

O primeiro comando inicia o banco e os servicos locais, aplica as migrations em `supabase/migrations/` e inclui uma paroquia de teste com codigo `FE2026`. Copie os valores `API_URL` e `ANON_KEY` exibidos pelo segundo comando para um arquivo `.env` na raiz:

```text
EXPO_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
EXPO_PUBLIC_SUPABASE_ANON_KEY=valor_ANON_KEY_exibido_pelo_CLI
```

Tambem e possivel iniciar copiando `.env.example` para `.env` e substituindo a chave de exemplo. Reinicie o Expo depois de alterar as variaveis:

```powershell
npx expo start --web
```

Para testar em um emulador Android, use `http://10.0.2.2:54321` como URL da API; em um aparelho fisico, use o IP local do computador e permita as portas do Supabase no firewall. O endereco `127.0.0.1` funciona para web no proprio computador.

O `.env` esta ignorado pelo Git; nao inclua chaves ou credenciais nele em commits. Para confirmar o esquema local:

```powershell
npx supabase db lint
npx supabase status
```

`npx supabase db reset` reaplica as migrations e o seed, mas apaga os dados do banco **local**. Nao execute contra um banco que contenha dados que deseja manter.

## Usar um projeto Supabase hospedado

1. Crie ou selecione um projeto em [Supabase Dashboard](https://supabase.com/dashboard).
2. Em **Project Settings > API**, copie a Project URL e a chave publica `anon`/publishable do mesmo projeto. Nunca use `service_role` ou `secret` no aplicativo.
3. Configure `EXPO_PUBLIC_SUPABASE_URL` e `EXPO_PUBLIC_SUPABASE_ANON_KEY` no `.env` local. O workflow do Pages inclui uma URL e uma chave publica padrao; para usar outro projeto, sobrescreva-as em **Settings > Secrets and variables > Actions > Variables** do repositorio. Secrets ja configurados tambem continuam sendo aceitos.
4. Aplique `supabase/migrations/20261105160000_auth_and_parishes.sql` uma vez pelo SQL Editor do Dashboard, ou publique as migrations com o Supabase CLI vinculado ao projeto correto.
5. Aplique tambem `supabase/migrations/20261108000000_learning_progress.sql` no mesmo projeto para habilitar o progresso dos quizzes. Essa migration cria o gabarito no banco e a funcao que registra e corrige respostas no servidor.
6. Se desejar um codigo de teste no projeto hospedado, execute no SQL Editor:

```sql
insert into public.paroquias (nome, cidade, codigo_acesso, status)
values ('Paroquia Demo', 'Sao Paulo', 'FE2026', 'ativa');
```

A migration foi escrita para um projeto Supabase vazio. Antes de aplica-la em um projeto com tabelas `usuarios` ou `paroquias`, compare o esquema e faca backup.

## Configurar autenticacao hospedada

Em **Authentication > URL Configuration**, configure:

- **Site URL**: `https://gustavodmpfc.github.io/Caminhodafe.github.io/`
- **Redirect URLs**: `https://gustavodmpfc.github.io/Caminhodafe.github.io/**`

Para desenvolvimento, adicione a URL local apresentada pelo Expo. O projeto local permite cadastro sem confirmacao de e-mail; no projeto hospedado, escolha a politica de confirmacao em **Authentication > Providers > Email**. O formulario exige senha com ao menos seis caracteres, letra minuscula e numero.

O workflow do GitHub Pages injeta a URL e a chave publica do projeto no bundle web. A chave `anon`/publishable e visivel por definicao no navegador; a protecao dos dados depende de RLS. Nunca use `service_role` ou chaves `secret` no frontend nem nas variaveis de build.

## O que a migration cria

- `public.usuarios`: perfil vinculado a `auth.users`; um trigger cria automaticamente o perfil quando a conta e criada.
- `public.paroquias`: paróquias e codigos unicos, comparados sem diferenciar maiusculas/minusculas e espacos nas pontas.
- RLS: o usuario autenticado le somente o proprio perfil e a paroquia vinculada. O app nao recebe permissao para alterar perfil, papeis ou codigos.
- `public.vincular_paroquia(text)`: funcao autenticada valida o codigo e vincula a paroquia sem permitir enumerar codigos.
- `public.atividades` e `public.tentativas_atividades`: gabaritos ocultos do cliente e tentativas legiveis apenas pelo proprio aluno. `public.registrar_tentativa(text, integer)` valida e corrige cada resposta no banco.
- `supabase/seed.sql`: cria a paroquia `FE2026` somente no banco local.

## Validar o fluxo

1. Inicie o Supabase local, configure `.env` com `API_URL` e `ANON_KEY` mostrados pelo CLI e reinicie o Expo.
2. Crie uma conta com nome, e-mail e senha validos. O perfil deve aparecer em `usuarios`.
3. Entre com essa conta e vincule `FE2026`.
4. Confirme que o perfil mostra o nome e o e-mail do cadastro, que `paroquia_id` foi preenchido em `usuarios` e que o painel do aluno abre.
5. Responda um quiz, recarregue a pagina e confirme que a resposta e o progresso continuam salvos.
6. Crie uma segunda conta e confirme que ela nao consegue ler o perfil nem as tentativas da primeira.

Se as chamadas falharem, confira `npx supabase status`, as variaveis do `.env`, a migration aplicada e a saida do Expo. Nao use a chave `service_role` no aplicativo.

## Escopo

Autenticacao, perfil, vinculo de paroquia e respostas dos quizzes de contas reais sao persistidos no Supabase nesta versao. Turmas, catalogo de aulas, videos, comunicados e pagamentos ainda sao demonstrativos ou locais.
