# Roteiro de apresentação: backend do Caminho da Fé

Este roteiro foi escrito para apresentar o estado atual do projeto sem confundir funcionalidades do Supabase com dados de demonstração locais.

## Resumo em uma frase

O aplicativo usa Supabase Auth e consultas ao Supabase para o fluxo de perfil e vínculo com paróquia; aulas e atividades ainda vêm de dados de exemplo, e o progresso/resultado do quiz é persistido localmente no dispositivo ou navegador.

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

1. Confirme que `src/services/supabase.js` tem a URL e a chave **anon/public** válidas do projeto de teste.
2. Confirme que as tabelas `usuarios` e `paroquias` existem e que as políticas de acesso permitem os fluxos demonstrados.
3. Crie previamente uma conta de teste e uma paróquia ativa com um código de acesso conhecido.
4. Teste login e vínculo com a paróquia antes da apresentação.
5. Nunca coloque ou compartilhe uma chave `service_role` no aplicativo, no navegador ou nos slides.

O cadastro também depende da configuração de confirmação de e-mail do Supabase. Se estiver ativada, o e-mail precisa ser acessível durante a demonstração.

## Fala sugerida (cerca de 5 minutos)

### 1. Arquitetura (40 segundos)

> “O front-end é feito em React Native com Expo e pode rodar na web e no celular. A autenticação usa Supabase Auth. Os dados de perfil e paróquia são consultados pelo cliente Supabase. Nesta versão, aulas e atividades ainda são mocks, e o progresso é local; portanto, não vou apresentar esses dados como se já estivessem sincronizados com o banco.”

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

> “Após autenticar, o aluno informa o código da paróquia. O aplicativo consulta uma paróquia ativa pelo código e associa o identificador ao perfil. O aluno então segue para o painel.”

Demonstre um código válido e, se estiver preparado no banco de teste, um código inválido.

**Limite de segurança a mencionar:** no código atual, a validação e a atualização são feitas diretamente pelo cliente consultando `paroquias` e atualizando `usuarios`. Isso depende de políticas RLS corretas. O fluxo seguro por RPC e a limitação de tentativas documentados no arquivo ZIP ainda não estão integrados a este repositório.

Referência: `src/screens/ParishCodeScreen.js`.

### 4. Atividade e persistência demonstrativa (1 minuto)

Se estiver usando o acesso demo:

1. Abra **Aulas** e escolha uma aula disponível.
2. Marque-a como estudada; o progresso deve refletir a alteração.
3. Abra o quiz, selecione uma resposta e confirme.
4. Volte à tela de progresso ou recarregue a página para mostrar que a resposta fica salva no mesmo navegador.

> “Essa persistência é local, por usuário e navegador/aparelho. A resposta não é enviada ao Supabase e ainda não sincroniza entre dispositivos.”

Referências: `src/services/learningProgress.js`, `src/hooks/useLearningProgress.js` e `src/data/mockData.js`.

## Testes para demonstrar

### Verificações já feitas no navegador

- Exportação web com `npm run build:web`: concluída sem erro.
- Teste de responsividade em 320, 360, 390, 768, 1024 e 1440 px: boas-vindas, login, cadastro, painel e quiz sem rolagem horizontal; campos de formulário visíveis.
- Trilha testada em 390 px; detalhe da aula em 320, 390 e 768 px, sem rolagem horizontal.
- Fluxo de demonstração local aberto no navegador: login demo, painel, trilha, detalhe da aula e quiz renderizaram.

Essas verificações são de interface e fluxo local; **não comprovam integração com um projeto Supabase real**.

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

Ainda não. O conteúdo é mock e as respostas/progresso são salvos no armazenamento local.

**O app funciona sem internet?**

O acesso demo e o conteúdo de exemplo podem funcionar localmente depois que o app carrega. Login e operações no Supabase precisam de conexão.

**O catequista publica comunicados por esta tela?**

Não nesta versão demonstrativa. A tela contém conteúdo e controles simulados; o painel do catequista deve ficar em uma aplicação web separada.

**Como os dados de alunos são isolados?**

No modo Supabase, isso deve ser garantido por políticas RLS no banco. A política precisa ser testada com duas contas diferentes; a interface sozinha não garante isolamento.

**O que falta para um backend completo?**

Integrar aulas, atividades, respostas e progresso ao Supabase; aplicar e testar migrations/RLS; mover o vínculo da paróquia para uma operação validada no servidor; e adicionar testes automatizados de serviços e políticas.

## Encerramento sugerido

> “A autenticação e o fluxo de perfil/paróquia já demonstram a integração com Supabase. A trilha e o progresso são uma etapa demonstrativa local. O próximo passo é centralizar esses dados no banco, validar as políticas de segurança e automatizar os testes de integração.”
