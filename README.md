# Caminho da Fe

Prototipo em React Native com Expo SDK 54 para o catequizando, com exportacao para web e aplicativo mobile.

## Recursos atuais

- Autenticacao real com Supabase Auth
- Cadastro de aluno na tabela `usuarios`
- Login com `supabase.auth.signInWithPassword`
- Sessao persistida com AsyncStorage
- Validacao de codigo da paroquia pela tabela `paroquias`
- Navegacao protegida por sessao e vinculo com paroquia
- Aulas, comunicados e dados de catequistas ainda usam conteudo de demonstracao
- Respostas de quiz de contas Supabase sao corrigidas no servidor e sincronizadas; o modo demo guarda progresso localmente
- Player responsivo do YouTube na web e player nativo no aplicativo

## Como instalar

```bash
npm install
```

As dependencias principais para Supabase no React Native sao:

```bash
npx expo install @react-native-async-storage/async-storage react-native-url-polyfill
npm install @supabase/supabase-js
```

## Como rodar

```bash
npx expo start
```

### Publicar no GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` gera a versao web e a publica neste mesmo repositorio:

```text
https://github.com/Gustavodmpfc/Caminhodafe.github.io
```

O endereco publico do site sera:

```text
https://gustavodmpfc.github.io/Caminhodafe.github.io/
```

Para habilitar a publicacao automatica:

1. Coloque o codigo e o workflow no repositorio `Gustavodmpfc/Caminhodafe.github.io`.
2. No repositorio, acesse **Settings > Pages** e selecione **GitHub Actions** como metodo de publicacao.
3. Envie as alteracoes para o branch `main`. O workflow compila e publica o site automaticamente usando as permissoes `GITHUB_TOKEN`; nao precisa criar PAT nem secret.
4. Acompanhe a execucao em **Actions** e confirme que o workflow terminou com sucesso.

Para gerar os arquivos web localmente:

```bash
npm run build:web
```

## Como acessar

Para um roteiro curto de apresentação, instruções de demo e checklist de testes, consulte [`docs/roteiro-apresentacao-backend.md`](docs/roteiro-apresentacao-backend.md).

### Acesso com conta

1. Na tela inicial, escolha **Criar conta** e informe nome, e-mail e senha.
   O nome nao pode conter numeros; o e-mail deve ser valido; a senha precisa ter pelo menos 6 caracteres, uma letra minuscula e um numero.
2. Se o Supabase exigir confirmacao, abra o link enviado por e-mail para retornar ao site e confirmar a conta.
3. Entre com o e-mail e a senha cadastrados.
4. No primeiro acesso, informe o codigo fornecido pela paroquia. Depois do vinculo, o app abre o painel do aluno.

Contas e autenticacao sao gerenciadas pelo Supabase configurado em `.env` localmente e pelas Actions variables (ou secrets legados) na publicacao. O app e voltado ao aluno; o painel do catequista e acessado em uma aplicacao web separada.

### Acesso de demonstracao local

Para testar sem uma conta real, crie um arquivo `.env` na raiz com:

```text
EXPO_PUBLIC_ENABLE_DEV_LOGIN=true
```

Reinicie o Expo depois de alterar essa variavel e execute `npx expo start`. Na tela **Entrar**, use **Entrar como aluno demo**. Esse acesso usa dados locais de demonstracao, nao autentica no Supabase e so aparece em desenvolvimento (`__DEV__`); ele nao existe na exportacao de producao. O antigo acesso fixo `admin/admin` foi removido.

O progresso e as respostas do modo demonstracao ficam salvos no armazenamento local do navegador/aparelho e nao sao sincronizados entre dispositivos.

### Acesso temporario de administrador na web

Enquanto o projeto Supabase correto ainda nao estiver configurado, o GitHub Pages aceita este acesso temporario para abrir o fluxo normal do app:

- E-mail: `admin@gmail.com`
- Senha: `admin123`

Esse login cria somente uma sessao temporaria em memoria no navegador e abre as telas normais do app. Nao cria uma conta Supabase; a sessao desaparece ao recarregar a pagina. Cadastros e logins com outros e-mails usam Supabase Auth quando o backend estiver configurado. Como o site e publico, as credenciais do atalho tambem sao publicas: use apenas para facilitar o acesso da equipe, nunca para proteger informacoes. Para desativar, remova `EXPO_PUBLIC_ENABLE_DEMO_ADMIN: 'true'` da etapa de build em `.github/workflows/deploy-pages.yml` e publique novamente.

Para testar pelo celular:

1. Instale o Expo Go.
2. Deixe celular e computador na mesma rede Wi-Fi.
3. Escaneie o QR Code mostrado pelo Expo.

Para testar no emulador Android:

1. Abra o emulador pelo Android Studio.
2. Rode `npx expo start`.
3. Pressione `a` no terminal.

## Teste de responsividade web

Validacao manual feita no navegador com viewports de **320, 360, 390, 768, 1024 e 1440 px**. Boas-vindas, login, cadastro, painel do aluno e quiz foram verificados em todas as larguras; trilha e detalhe da aula foram verificados em 390 px, e o detalhe tambem em 320 e 768 px. Nas larguras verificadas, as paginas nao apresentaram rolagem horizontal e os campos de formulario ficaram visiveis.

Para repetir o teste:

1. Execute `npm run build:web` e sirva a pasta `dist` em um servidor web local.
2. Abra a pagina no navegador e use as ferramentas de desenvolvedor para testar as larguras da tabela acima.
3. Para testar as telas autenticadas, inicie o Expo em desenvolvimento com `EXPO_PUBLIC_ENABLE_DEV_LOGIN=true` e entre como aluno demo.

## Configurar Supabase

Configure o banco local com Docker Desktop e o Supabase CLI:

```text
npx supabase start
npx supabase status -o env
```

Copie `API_URL` e `ANON_KEY` exibidos pelo CLI para `.env` na raiz do projeto:

```text
EXPO_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
EXPO_PUBLIC_SUPABASE_ANON_KEY=valor_ANON_KEY_exibido_pelo_CLI
```

O `.env.example` pode ser copiado para iniciar esse arquivo. O `.env` e ignorado pelo Git. Nunca use `service_role` ou `secret` no aplicativo.

O CLI aplica automaticamente a migration e o seed local, que cria uma paroquia de teste com codigo `FE2026`. Para um projeto hospedado, configure as mesmas variaveis no `.env` ou como Actions secrets e aplique a migration no Supabase:

```text
supabase/migrations/20261106150000_auth_and_parishes.sql
```

Veja [docs/supabase-auth-setup.md](docs/supabase-auth-setup.md) para os passos completos. Sem as variaveis de ambiente, login e cadastro reais exibem uma mensagem de configuracao; o app nao tenta usar um endereco Supabase inexistente fixado no codigo.

## Escopo atual do Supabase

- `usuarios`
- `paroquias`

As outras tabelas listadas em `docs/supabase-model.md` sao parte do modelo futuro e ainda nao sao usadas para persistir as telas demonstrativas.

## Regras de navegacao

- Usuario sem login ve apenas boas-vindas, login e cadastro.
- Usuario logado como aluno sem `paroquia_id` vai para `ParishCodeScreen`.
- Usuario logado como aluno com `paroquia_id` vai para `StudentDashboardScreen`.
- Este app mobile e focado no aluno/catequizando. O painel do catequista deve ficar em uma aplicacao web separada.

## Onde editar

- Cores e estilo: `src/styles/theme.js`
- Navegacao: `src/navigation/AppNavigator.js`
- Supabase: `src/services/supabase.js`
- Contexto de autenticacao: `src/context/AuthContext.js`
- Dados mockados: `src/data/mockData.js`
- Telas: `src/screens`

## Video do YouTube nas aulas

No aplicativo nativo, o player usa a biblioteca:

```bash
npm install react-native-youtube-iframe
```

Ela usa WebView por baixo. No Expo, mantenha tambem:

```bash
npx expo install react-native-webview
```

O componente nativo reutilizavel fica em:

```text
src/components/YoutubePlayerComponent.js
```

Na web, o Expo seleciona automaticamente `src/components/YoutubePlayerComponent.web.js`, que incorpora o video em um iframe responsivo do YouTube.

Para trocar o video de uma aula, edite apenas o ID no campo `video_youtube_id`.

Exemplo em `src/data/mockData.js` ou futuramente na tabela `aulas` do Supabase:

```js
video_youtube_id: '2PuFyjAs7JA'
```

Use somente o ID do YouTube, nao o link completo. Para este link:

```text
https://www.youtube.com/watch?v=2PuFyjAs7JA
```

O ID correto e:

```text
2PuFyjAs7JA
```

Se `video_youtube_id` estiver vazio, a aula mostra o placeholder "Video em breve".

## Progresso de aulas e quizzes

- Respostas de quiz de contas Supabase sao corrigidas no servidor e gravadas em `tentativas_atividades`. O gabarito fica em `atividades`, sem leitura direta pelo aplicativo.
- Uma resposta errada pode ser tentada novamente; acertar conclui a atividade e atualiza o progresso da aula, a jornada, XP e dias de atividade.
- O login temporario da equipe e o acesso de desenvolvimento guardam o progresso somente no armazenamento local deste navegador/aparelho. Nao sincronizam entre dispositivos.
- Em um projeto Supabase novo, aplique primeiro `supabase/migrations/20261105160000_auth_and_parishes.sql` e depois `supabase/migrations/20261108000000_learning_progress.sql` antes de testar quizzes com contas reais.
- O workflow do Pages usa uma URL e chave publica do Supabase por padrao. Para trocar de projeto, defina `EXPO_PUBLIC_SUPABASE_URL` e `EXPO_PUBLIC_SUPABASE_ANON_KEY` nas **Actions variables** do repositorio (secrets existentes tambem continuam aceitos). Nunca configure uma chave `service_role` no aplicativo ou no workflow de build web.
