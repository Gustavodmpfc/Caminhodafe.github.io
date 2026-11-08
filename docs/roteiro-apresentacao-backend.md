# Roteiro de apresentação: backend do Caminho da Fé

Este roteiro foi escrito para apresentar o estado atual do projeto sem confundir funcionalidades do Supabase com dados de demonstração locais.

## Resumo em uma frase

O aplicativo usa Supabase Auth para contas reais, persiste perfil e vínculo de paróquia no Supabase, e registra no servidor as respostas de quiz. O catálogo de aulas ainda usa dados de exemplo; acessos de demonstração guardam progresso somente no dispositivo ou navegador.

## Preparação antes de apresentar

### Demonstração local sem conta real

No PowerShell, na pasta do projeto:

```powershell
$env:EXPO_PUBLIC_ENABLE_DEV_LOGIN = "true"
npx expo start --web
```

Abra o endereço local mostrado pelo Expo, selecione **Entrar** e depois **Entrar como aluno demo**. O acesso demo só existe em desenvolvimento; não é uma conta do Supabase e não aparece na exportação de produção.

Para limpar o progresso de demonstração entre apresentações, limpe os dados do site no navegador. No app, limpe os dados do aplicativo ou use uma instalação/perfil de teste separado.

### Demonstração com Supabase

Use somente um projeto de teste, nunca uma conta ou base de produção durante a apresentação. Antes de começar:

1. Confirme que `EXPO_PUBLIC_SUPABASE_URL` e `EXPO_PUBLIC_SUPABASE_ANON_KEY` apontam para o projeto de teste.
2. Confirme que as migrations de autenticação/paróquias e `20261108000000_learning_progress.sql` foram aplicadas e que as tabelas existem.
3. Crie previamente uma conta de teste e uma paróquia ativa com um código de acesso conhecido.
4. Teste login e vínculo com a paróquia antes da apresentação.
5. Nunca coloque ou compartilhe uma chave `service_role` no aplicativo, no navegador ou nos slides.

O cadastro também depende da configuração de confirmação de e-mail do Supabase. Se estiver ativada, o e-mail precisa ser acessível durante a demonstração.

## Fala sugerida (cerca de 5 minutos)

### 1. Arquitetura (40 segundos)

> “O front-end é feito em React Native com Expo e pode rodar na web e no celular. Contas reais usam Supabase Auth; o perfil e o vínculo de paróquia são persistidos no Supabase. Respostas dos quizzes são corrigidas pelo servidor e sincronizadas para contas reais. O catálogo de aulas ainda é de demonstração.”

Referências para mostrar no editor:

- Cliente do Supabase: `src/services/supabase.js`
- Sessão e perfil: `src/context/AuthContext.js`
- Modelo documentado: `docs/supabase-model.md`

### 2. Fluxo de autenticação (1 minuto)

> “O aluno cria uma conta ou entra com e-mail e senha. A sessão fica persistida pelo cliente Supabase/AsyncStorage. Depois do login, o aplicativo carrega o perfil do usuário e decide qual tela abrir.”

Demonstre, de preferência com uma conta descartável no projeto de teste:

1. Entrar com credenciais inválidas e observar a mensagem de erro.
2. Entrar com a conta de teste.
3. Mostrar o direcionamento para o vínculo da paróquia quando ainda não há `paroquia_id`.

Referências no código: `src/screens/LoginScreen.js`, `src/screens/RegisterScreen.js` e `src/context/AuthContext.js`.

### 3. Vínculo com a paróquia (1 minuto)

> “Após autenticar, o aluno informa o código da paróquia. Uma função RPC valida o código e associa a paróquia ativa ao perfil sem expor ao cliente uma consulta para enumerar códigos.”

Demonstre um código válido e, se estiver preparado no banco de teste, um código inválido.

**Pré-requisito:** a função `vincular_paroquia(text)` e as políticas RLS precisam estar aplicadas no projeto Supabase de teste.

Referência: `src/screens/ParishCodeScreen.js`.

### 4. Atividade e persistência de progresso (1 minuto)

Para uma conta Supabase real, com a migration de progresso aplicada:

1. Abra **Aulas** e escolha uma aula disponível.
2. Responda incorretamente e confirme que pode tentar novamente.
3. Acerte o quiz e confira a atualização da trilha e do progresso.
4. Recarregue o app ou entre em outro dispositivo para validar a sincronização.

> “Para contas reais, o servidor corrige e grava as respostas; o progresso é reconstruído a partir delas. O acesso temporário da equipe e o aluno demo usam armazenamento local e não sincronizam.”

Referências: `src/services/learningProgress.js`, `src/hooks/useLearningProgress.js` e `src/data/mockData.js`.

## Testes para demonstrar

### Verificações realizadas nesta atualização

- Exportação web com `npm run build:web`: concluída sem erro.
- A tela inicial e o formulário de cadastro abriram no navegador local.
- Cálculos de tentativa incorreta, desbloqueio da próxima aula, conclusão, XP e progresso geral passaram nos testes locais.
- A URL do projeto Supabase respondeu, mas as tabelas `usuarios`, `paroquias`, `atividades` e `tentativas_atividades` ainda retornam 404. As migrations precisam ser aplicadas antes de validar o backend remoto.

Essas verificações não incluem cadastro/login com uma conta real nem a execução das migrations no banco remoto.

### Checklist manual do backend (requer Supabase de teste)

- [ ] Login com senha errada é recusado.
- [ ] Login com conta de teste cria/restaura uma sessão.
- [ ] Perfil existente é carregado após login.
- [ ] Código válido associa o aluno à paróquia ativa.
- [ ] Código inválido não associa uma paróquia.
- [ ] Um usuário não consegue consultar ou alterar dados de outro usuário, conforme as políticas RLS configuradas.
- [ ] Logout encerra a sessão.

Não há atualmente uma suíte de testes automatizados configurada no `package.json`. Não diga que os itens acima passaram se não os executar no projeto Supabase de teste antes da apresentação.

## Perguntas que podem surgir

**As respostas do quiz ficam no banco?**
Sim para contas Supabase reais, depois de aplicar `20261108000000_learning_progress.sql`. A correção acontece no banco e o gabarito não é consultável pelo app. Acesso demo continua local.

**O app funciona sem internet?**
O acesso demo e o conteúdo de exemplo podem funcionar localmente depois que o app carrega. Login e operações no Supabase precisam de conexão.

**O catequista publica comunicados por esta tela?**
Não nesta versão demonstrativa. A tela contém conteúdo e controles simulados; o painel do catequista deve ficar em uma aplicação web separada.

**Como os dados de alunos são isolados?**
No modo Supabase, isso deve ser garantido por políticas RLS no banco. A política precisa ser testada com duas contas diferentes; a interface sozinha não garante isolamento.

**O que falta para um backend completo?**
Aplicar as migrations no projeto hospedado e testar com contas reais; integrar o catálogo de aulas, comunicados e demais dados; e adicionar testes automatizados de serviços e políticas.

## Encerramento sugerido

> “A autenticação, o perfil, o vínculo de paróquia e as respostas de quiz já têm integração com Supabase no código. O próximo passo é aplicar as migrations no projeto hospedado, validar o fluxo com contas reais e integrar outros dados da plataforma.”
