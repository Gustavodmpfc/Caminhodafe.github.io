export const currentUser = {
  id: 'user-1',
  nome: 'Ana Clara Santos',
  email: 'ana@email.com',
  tipo_usuario: 'aluno',
  paroquia: 'Paróquia São José',
  turma: 'Catequese 2026 - Crisma',
  acesso: 'ativo',
};

export const parish = {
  id: 'paroquia-1',
  nome: 'Paróquia São José',
  cidade: 'São Paulo',
  codigo_acesso: 'FE2026',
  status: 'ativa',
};

// percentual / concluida / status / desbloqueada são recalculados em src/utils/progress.js
// a partir das respostas do aluno; os valores abaixo são apenas o estado inicial.
export const lessons = [
  {
    id: 'aula-1',
    titulo: 'O que é a catequese?',
    descricao: 'Iniciamos nossa jornada compreendendo a catequese como um verdadeiro caminho de conhecimento, encontro e aproximação com Deus. Ela vai muito além de frequentar aulas semanais ou simplesmente memorizar orações.Trata-se de uma caminhada contínua de aprendizagem e amadurecimento na fé cristã, concebida para nos ajudar a conhecer Jesus Cristo em profundidade, compreender seus ensinamentos e colocá-los em prática na nossa rotina diária. Ao longo deste percurso catequético, estudamos a Bíblia, os sacramentos, a Igreja, a oração e os valores fundamentais do cristianismo. Contudo, o convite central é desenvolver uma relação pessoal com Deus, reconhecendo com gratidão o seu amor e a sua presença viva na nossa história. Nesse contexto, a Crisma representa um momento decisivo, pois convida o jovem e o adulto a assumirem a própria fé de forma consciente e responsável. É importante lembrar que a catequese não se encerra no dia da celebração do sacramento; ela é apenas o ponto de partida para uma vida inteira de compromisso com Cristo e com a comunidade. Afinal, a catequese não se resume a aprender informações sobre Deus, mas sim a aprender a caminhar diariamente com Ele.',
    video_youtube_id: '2PuFyjAs7JA',
    ordem: 1,
    modulo: 'INTRODUÇÃO À FÉ',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '12 min',
    xp: 20,
    status: 'locked',
    desbloqueada: true,
  },
  {
    id: 'aula-2',
    titulo: 'Por que buscar a Deus?',
    descricao: 'Para compreender a importância da busca por Deus, precisamos primeiro reconhecer o desejo profundo que habita o coração humano: a busca por sentido para a existência. Em variados momentos da vida, todos nós nos deparamos com inquietações fundamentais, perguntando-nos quem realmente somos, qual é o nosso propósito neste mundo e o que pode trazer a verdadeira felicidade. Essas perguntas são parte essencial da condição humana e evidenciam nossa sede de amor e de significado. Na fé cristã, Deus nos é revelado exatamente como Aquele que dá sentido pleno à existência e nos oferece um amor incondicional, que não depende de nossas conquistas, méritos ou falhas. Buscar a Deus significa abrir o coração com confiança para conhecê-lo e permitir que seus ensinamentos norteiem nossas escolhas diárias. Essa busca concreta se realiza no dia a dia por meio da oração, da leitura atenta da Bíblia, da vivência em comunidade e das atitudes de amor ao próximo. Deus não está distante de nossas dores ou alegrias; Ele se faz presente em nossa história e nos convida continuamente a construir com Ele uma relação de profunda confiança. Diante disso, vale a pena refletir: de que maneira você tem procurado encontrar sentido e propósito para a sua própria vida?',
    video_youtube_id: '',
    ordem: 2,
    modulo: 'INTRODUÇÃO À FÉ',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '18 min',
    xp: 20,
    status: 'locked',
    desbloqueada: true,
  },
  {
    id: 'aula-3',
    titulo: 'Quem é Deus?',
    descricao: 'Conhecer a Deus é descobri-lo como Pai, Criador e fonte inesgotável de todo o amor. Para os cristãos, Ele é o princípio de toda a criação e a origem da própria vida. Longe de ser apenas uma força impessoal ou uma energia distante, Deus é um Pai amoroso que nos conhece individualmente, acolhe nossas fragilidades e caminha ao nosso lado. As Sagradas Escrituras o revelam como Aquele que cria, cuida, orienta e permanece eternamente fiel ao seu povo. A fé católica professa a verdade de que existe um único Deus em três Pessoas distintas: Pai, Filho e Espírito Santo, o mistério da Santíssima Trindade. O Pai é o Criador de tudo; o Filho é Jesus Cristo, que se fez homem para nos salvar; e o Espírito Santo é o Consolador que habita em nós e nos fortalece na caminhada. Compreender quem é Deus implica reconhecer que a sua presença manifesta amor, misericórdia, justiça e esperança, convidando-nos a viver em comunhão fraterna com Ele e com nossos irmãos. Conhecer a Deus é, acima de tudo, aprender a reconhecer o seu amor cuidadoso nas pequenas situações da vida cotidiana.',
    video_youtube_id: '',
    ordem: 3,
    modulo: 'INTRODUÇÃO À FÉ',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 30,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-4',
    titulo: 'Deus nos ama primeiro',
    descricao: 'Um dos ensinamentos mais marcantes da fé cristã é que o amor de Deus é totalmente gratuito e precede qualquer mérito humano. Ele é essencialmente diferente das relações comerciais ou do afeto baseado em trocas e interesses. Deus nos ama simplesmente porque somos seus filhos e filhas, independentemente do nosso desempenho, de nossas limitações ou dos erros que cometemos ao longo do caminho. Antes mesmo de pensarmos em procurá-lo, Ele já nos conhecia e nos cercava com o seu carinho. Nas páginas da Bíblia, contemplamos inúmeras passagens que mostram essa iniciativa amorosa de Deus, culminando nas atitudes de Jesus, que acolhia os marginalizados, perdoava os arrependidos e ensinava que cada pessoa tem um valor inestimável diante do Pai. Essa gratuidade do amor divino não significa que nossas ações sejam irrelevantes; ao contrário, quando tomamos consciência de tão grande amor, somos impulsionados a transformar o nosso estilo de vida, procurando agir com bondade, respeito, perdão e solidariedade. O amor de Deus é um presente valioso que acolhemos com gratidão e que somos enviados a partilhar com todos à nossa volta.',
    video_youtube_id: '',
    ordem: 4,
    modulo: 'INTRODUÇÃO À FÉ',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '16 min',
    xp: 30,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-5',
    titulo: 'A criação: dom de Deus',
    descricao: 'Ao contemplo o mundo que nos cerca, somos chamados a reconhecer a criação como um presente radiante de Deus e a assumir a responsabilidade humana pelo seu cuidado. O livro do Gênesis narra poeticamente como Deus trouxe à existência o céu, a terra, as plantas, os animais e toda a diversidade da vida. Essa mensagem bíblica deixa claro que a natureza e o universo não são frutos do acaso sem valor, mas sim um dom confiado à custódia da humanidade. A criação inteira reflete a grandeza, a beleza e a generosidade do Criador, tornando os recursos naturais e os seres vivos parte de uma obra sagrada que exige consideração e respeito. Como seguidores de Cristo, recebemos a missão de proteger o meio ambiente, combater o desperdício, respeitar a vida animal e utilizar os bens da terra de forma ética e sustentável. Cuidar da casa comum é uma das formas mais concretas de expressar nossa gratidão e louvor a Deus. Sabendo que o mundo é esse presente divino, o que você pode fazer na sua rotina para cuidar melhor dele?',
    video_youtube_id: '',
    ordem: 5,
    modulo: 'INTRODUÇÃO À FÉ',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '14 min',
    xp: 40,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-6',
    titulo: 'O ser humano criado à imagem de Deus',
    descricao: 'A antropologia cristã fundamenta-se no princípio de que todo ser humano é dotado de uma dignidade inalienável e de um valor sagrado por ter sido criado à imagem e semelhança de Deus. Conforme ensina o livro do Gênesis, essa verdade significa que qualquer pessoa, independentemente de sua condição social, aparência, origem, etnia ou capacidades, merece ser tratada com absoluto respeito e consideração. Ser feito à imagem de Deus implica também ser dotado da capacidade de amar, raciocinar, realizar escolhas conscientes, construir vínculos comunitários e assumir responsabilidades. A liberdade que nos foi concedida nos permite tomar decisões autônomas, mas exige de nós discernimento sobre o impacto e as consequências de nossas ações. O próprio Jesus demonstrou essa verdade em sua vida terrestre, ao aproximar-se e dignificar os mais vulneráveis, os doentes, os pobres e aqueles que a sociedade do seu tempo descartava. Respeitar o próximo em suas diferenças é reconhecer e honrar a própria imagem de Deus refletida em cada irmão e irmã.',
    video_youtube_id: '',
    ordem: 6,
    modulo: 'INTRODUÇÃO À FÉ',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 20,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-7',
    titulo: 'O pecado e o afastamento de Deus',
    descricao: 'Para compreender o drama do pecado, é preciso percebê-lo como uma escolha livre que fere o amor e fragiliza nossa relação com Deus, com o próximo e conosco mesmos. Na fé cristã, o pecado se concretiza quando optamos por agir de forma contrária à verdade, à justiça e à vontade divina, manifestando-se por meio do egoísmo, da mentira, da violência, do desrespeito e da indiferença diante das necessidades do outro. O relato bíblico de Adão e Eva ilustra de forma simbólica a tentação de autossuficiência da humanidade, a falta de confiança em Deus e as consequências dolorosas da desobediência, que geram divisão e quebra de harmonia nas relações humanas. No entanto, o centro do anúncio cristão não é a condenação, mas a esperança: Deus jamais desiste do ser humano e nos oferece continuamente o seu perdão e a oportunidade de recomeçar. Por meio de Jesus Cristo, recebemos um convite constante à conversão, que consiste em reconhecer humildemente nossas falhas e redirecionar nossos caminhos em busca de atitudes renovadas. Lembre-se de que reconhecer um erro é sempre o primeiro e decisivo passo para aprender com ele e escolher uma vida melhor.',
    video_youtube_id: '',
    ordem: 7,
    modulo: 'INTRODUÇÃO À FÉ',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 20,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-8',
    titulo: 'Deus promete a salvação',
    descricao: 'Apesar dos desvios e das infidelidades ao longo da história, Deus jamais abandonou a humanidade à sua própria sorte. Desde os primórdios da narrativa bíblica, percebemos a determinação do amor de Deus em restaurar a comunhão rompida e em oferecer ao ser humano um caminho seguro de salvação. Essa trajetória amorosa é denominada História da Salvação e desenrola-se por meio de momentos marcantes, como a aliança com Noé, o chamado pedagógico de Abraão, a libertação do povo escravizado no Egito sob a liderança de Moisés e as exortações corajosas dos profetas. Todos esses fatos históricos e espirituais convergiam e preparavam o terreno para a vinda de Jesus Cristo, acolhido pelos cristãos como o Salvador prometido e a plenitude da revelação. A salvação oferecida por Deus garante a possibilidade de vivermos desde já em profunda comunhão com Ele, perdoados de nossas faltas e com a esperança firme da vida eterna. A História da Salvação nos ensina que Deus permanece eternamente fiel, mesmo nos momentos de maior escuridão.',
    video_youtube_id: '',
    ordem: 8,
    modulo: 'INTRODUÇÃO À FÉ',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 20,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-9',
    titulo: 'A fé como resposta a Deus',
    descricao: 'Entender a natureza da fé é descobri-la não como uma adesão teórica a um conjunto de dogmas, mas como uma atitude de confiança total, escuta e resposta amorosa ao chamado de Deus. Ter fé significa entregar-se nas mãos do Pai, crer em sua bondade imutável e empenhar-se em viver em conformidade com o Evangelho. Ela vai além de simplesmente admitir intelectualmente que Deus existe; a fé é um relacionamento vivo que molda e transforma nossas escolhas do dia a dia. Abraão sobressai nas Escrituras como um grande modelo dessa virtude, pois teve a coragem de sair de sua terra sem conhecer todos os detalhes do destino, fiado apenas na promessa divina. A vida de fé requer de nós disponibilidade para aprender, humildade para reconhecer limitações e perseverança para confiar mesmo em tempos de incerteza. Concretizamos a fé no cotidiano quando decidimos agir com integridade, perdoar as ofensas, respeitar os outros e manter a coerência com os valores cristãos. A fé só se torna autêntica e viva quando ganha corpo em nossas atitudes diárias.',
    video_youtube_id: '',
    ordem: 9,
    modulo: 'INTRODUÇÃO À FÉ',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 20,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-10',
    titulo: 'A oração como diálogo com Deus',
    descricao: 'A vida espiritual é sustentada pela prática da oração, entendida como um diálogo filial e um encontro íntimo de amizade com Deus. Pela oração, abrimos o coração para expressar gratidão, apresentar pedidos e apreensões, pedir perdão pelas nossas falhas ou simplesmente repousar na presença amorosa do Senhor. Não há uma fórmula única para rezar: podemos empregar as orações tradicionais da Igreja, como o Pai-Nosso e a Ave-Maria, formular preces espontâneas com nossas próprias palavras ou meditar em silêncio a partir da Palavra de Deus. O próprio Jesus dava o exemplo ao buscar constantemente momentos de recolhimento e intimidade com o Pai, mostrando que a oração deve ser o sopro de vida do cristão. É importante compreender que rezar não significa dobrar a vontade de Deus aos nossos desejos pessoais, mas alinhar o nosso coração ao d’Ele, obtendo a luz e a força necessárias para enfrentar os desafios da vida. Que tal reservar alguns momentos do seu dia para conversar honestamente com Deus e agradecer-lhe por seu cuidado diário?',
    video_youtube_id: '',
    ordem: 10,
    modulo: 'INTRODUÇÃO À FÉ',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 20,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-11',
    titulo: 'O que é a Bíblia?',
    descricao: 'Aprofundando nosso conhecimento sobre as fontes da fé, abordamos a Bíblia como o livro sagrado dos cristãos, no qual está registrada a memória do relacionamento entre Deus e a humanidade. Trata-se de uma verdadeira biblioteca sagrada que reúne relatos históricos, códigos de leis, poesias, preces, profecias, cartas pastorais e o testemunho definitivo sobre a vida e a pregação de Jesus. A Igreja ensina que a Sagrada Escritura é inspirada pelo Espírito Santo, embora escrita por autores humanos reais. Por essa razão, a Bíblia possui uma dupla dimensão: é plenamente humana, pois reflete as linguagens, épocas e culturas de quem a redigiu, e é plenamente divina, pois comunica com fidelidade a mensagem salvífica de Deus. Percorrendo suas páginas, entramos em contato com a criação, a saga do povo de Israel e o Evangelho de Jesus Cristo, encontrando ali o rumo para a nossa missão. Ler a Bíblia com frequência é uma oportunidade inestimável para escutar a voz de Deus e obter sabedoria para as nossas decisões.',
    video_youtube_id: '',
    ordem: 11,
    modulo: 'A BÍBLIA E A HISTÓRIA DA SALVAÇÃO',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 25,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-12',
    titulo: 'Antigo e Novo Testamento',
    descricao: 'Para ler adequadamente a Bíblia Católica, é preciso compreender a sua estrutura fundamental, dividida entre o Antigo e o Novo Testamento. O Antigo Testamento é composto por 46 livros que narram a criação do universo, a formação e a história do povo de Israel, as alianças estabelecidas por Deus, os Mandamentos, os escritos de sabedoria e a pregação profética que mantinha viva a esperança na vinda do Messias. Já o Novo Testamento é constituído por 27 livros que testemunham o cumprimento dessa promessa em Jesus Cristo, contendo os quatro Evangelhos, os Atos dos Apóstolos, as Epístolas de Paulo e de outros apóstolos e o livro do Apocalipse. Essas duas grandes partes não se opõem, mas se completam harmoniosamente na História da Salvação: o Antigo Testamento prepara e prefigura a chegada do Salvador, enquanto o Novo Testamento nos revela Jesus como o centro e o ápice de toda a revelação divina. Conhecer a unidade do Antigo e do Novo Testamento nos ajuda a admirar a pedagogia amorosa de Deus ao longo dos séculos.',
    video_youtube_id: '',
    ordem: 12,
    modulo: 'A BÍBLIA E A HISTÓRIA DA SALVAÇÃO',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 25,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-13',
    titulo: 'Como encontrar uma passagem bíblica',
    descricao: 'O manuseio da Bíblia exige a aprendizagem de um sistema simples de localização de textos, que organiza o conteúdo em livros, capítulos e versículos. Para encontrar qualquer trecho, identificamos primeiro a abreviatura ou o nome do livro desejado. O número colocado antes da vírgula indica o capítulo, ao passo que os números colocados após a vírgula indicam os versículos específicos. Por exemplo, a citação "João 3, 16" orienta o leitor a abrir o Evangelho segundo São João, ir ao capítulo 3 e ler o versículo 16. Dominar essa técnica é fundamental para acompanhar os encontros catequéticos, participar ativamente da Liturgia da Palavra durante as celebrações comunitárias e realizar a leitura orante pessoal. Além da busca mecânica, é essencial analisar o contexto da passagem, observando quem fala, a quem a mensagem se dirige e qual o ensinamento central oferecido. Faça a experiência de escolher uma passagem bíblica hoje mesmo e refletir sobre como aplicar essa mensagem na sua vida.',
    video_youtube_id: '',
    ordem: 13,
    modulo: 'A BÍBLIA E A HISTÓRIA DA SALVAÇÃO',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 25,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-14',
    titulo: 'A Bíblia na vida do cristão',
    descricao: 'A Palavra de Deus não foi registrada para permanecer guardada como um documento histórico antiquado; ela é luz viva para guiar as decisões e escolhas cotidianas do cristão. A leitura assídua das Escrituras oferece critérios seguros para agir com amor, perdão, justiça, humildade e solidariedade nos ambientes da família, da escola, do trabalho e das amizades. No entanto, a leitura bíblica exige um esforço constante de reflexão crítica e oração: não basta a simples decodificação das palavras, sendo necessário absorver o espírito da mensagem e traduzi-lo em atos concretos. A fé católica ensina ainda que a interpretação da Bíblia deve ser feita em comunhão com a Tradição e o Magistério da Igreja, garantindo que a verdade do Evangelho seja preservada. A Palavra de Deus tem o poder de transformar nossa realidade à medida que permitimos que ela modele nossas atitudes e convicções.',
    video_youtube_id: '',
    ordem: 14,
    modulo: 'A BÍBLIA E A HISTÓRIA DA SALVAÇÃO',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 25,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-15',
    titulo: 'Abraão e a confiança em Deus',
    descricao: 'Ao olhar para o Antigo Testamento, a figura de Abraão sobressai como o grande pai na fé e um modelo paradigmático de confiança em Deus. Quando Deus o chamou para deixar sua terra natal e seus parentes rumo a uma região desconhecida, prometendo-lhe fazer dele uma grande nação, Abraão obedeceu prontamente, sem exigir garantias prévias sobre o futuro. Sua jornada evidencia que caminhar com Deus exige desapego, disponibilidade de coração e coragem para escutar o chamado divino. Deus selou com ele uma aliança solene e, apesar de todas as dificuldades biológicas e da idade avançada de Abraão e de sua esposa Sara, a promessa se cumpriu com o nascimento de Isaac. A trajetória patriarcal nos ensina que ter fé não significa possuir controle sobre todos os acontecimentos, mas sim caminhar com a certeza de que Deus é fiel para cumprir o que prometeu. A exemplo de Abraão, somos desafiados a depositar nossa vida nas mãos de Deus, mesmo quando o horizonte parecer incerto.',
    video_youtube_id: '',
    ordem: 15,
    modulo: 'A BÍBLIA E A HISTÓRIA DA SALVAÇÃO',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 25,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-16',
    titulo: 'Moisés e a libertação do povo',
    descricao: 'A experiência do Êxodo revela a identidade de Deus como Aquele que escuta o clamor dos oprimidos e intervém na história para libertar seu povo. Diante da dor e da escravidão vividas pelos israelitas no Egito, Deus chamou Moisés e lhe confiou a difícil missão de confrontar o faraó e conduzir a nação rumo à liberdade. O episódio da travessia do Mar Vermelho eternizou-se como o grande sinal da salvação de Deus, que protegeu e alimentou o povo ao longo de sua dura caminhada pelo deserto. Foi nesse contexto de provação que os israelitas aprenderam a depender da providência divina e selaram a Aliança no Monte Sinai. A vida de Moisés nos oferece lições profundas de liderança comunitária, mansidão, obediência e coragem, reafirmando que Deus não permanece indiferente diante das injustiças humanas. Vivenciar a fé cristã significa também comprometer-se na promoção da dignidade, da liberdade e da justiça para com todas as pessoas.',
    video_youtube_id: '',
    ordem: 16,
    modulo: 'A BÍBLIA E A HISTÓRIA DA SALVAÇÃO',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 25,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-17',
    titulo: 'Os Dez Mandamentos',
    descricao: 'No Monte Sinai, Deus entregou a Moisés os Dez Mandamentos, conhecidos como o Decálogo, instituindo as cláusulas fundamentais da Aliança com o povo de Israel. Longe de constituírem um mero conjunto de proibições opressivas, as Tábuas da Lei foram dadas como um roteiro seguro para preservar a liberdade recém-conquistada e garantir uma convivência comunitária harmoniosa e justa. Os três primeiros mandamentos ordenam a relação do ser humano com Deus — colocando-o no centro da vida, respeitando seu santo nome e guardando o dia do Senhor —, enquanto os sete seguintes regulam os deveres fraternos, como honrar os pais, defender a vida, guardar a pureza, não roubar, não mentir e combater a cobiça. Jesus não veio abolir esses preceitos, mas sim levá-los à perfeição, mostrando que o núcleo de todos eles é o amor a Deus e ao próximo. Os mandamentos permanecem como balizas indispensáveis para a construção de uma sociedade estruturada sobre a verdade e o respeito mútuo.',
    video_youtube_id: '',
    ordem: 17,
    modulo: 'A BÍBLIA E A HISTÓRIA DA SALVAÇÃO',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 25,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-18',
    titulo: 'Os profetas e a voz de Deus',
    descricao: 'A história espiritual de Israel foi fortemente marcada pela atuação dos profetas, homens vocacionados por Deus para atuar como testemunhas da sua verdade junto ao povo e aos reis. O papel dos profetas não era o de prever o futuro de forma mágica, mas sim o de interpretar o presente à luz da vontade de Deus, denunciando com coragem a idolatria, a exploração dos pobres, a corrupção e o formalismo religioso. Figuras como Isaías, Jeremias, Ezequiel e Amós convocavam com veemência a nação ao arrependimento e à conversão sincera. Além da denúncia, os profetas consolavam o povo nos momentos de exílio e sofrimento, anunciando a esperança de uma Aliança Nova e a vinda do Messias Salvador. Hoje, pelo batismo, cada cristão compartilha do múnus profético de Cristo, sendo chamado a erguer a voz contra as injustiças, defender os vulneráveis e testemunhar a verdade do Evangelho na sociedade.',
    video_youtube_id: '',
    ordem: 18,
    modulo: 'A BÍBLIA E A HISTÓRIA DA SALVAÇÃO',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 25,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-19',
    titulo: 'Maria no plano de Deus',
    descricao: 'No mistério da salvação, a Virgem Maria ocupa um lugar absolutamente singular por ter sido escolhida para ser a Mãe do Filho de Deus. Quando o anjo Gabriel lhe anunciou o plano divino, Maria respondeu com um "sim" humilde, corajoso e incondicional, colocando toda a sua vida à disposição do Criador. Sua atitude demonstra a mais alta expressão de fé, humildade e confiança na providência. Ao longo dos anos, Maria acompanhou Jesus silenciosamente, desde a simplicidade da manjedoura em Belém, passando pelo primeiro milagre nas Bodas de Caná, até a fidelidade dolorosa ao pé da cruz no Calvário. Após a ressurreição, esteve unida em oração com os apóstolos no Cenáculo, aguardando o Espírito Santo. A Igreja Venera Maria como modelo exemplar de discípula e mãe espiritual de todos os crentes. A vida de Nossa Senhora nos inspira a acolher prontamente a Palavra de Deus e a servir aos irmãos com total dedicação.',
    video_youtube_id: '',
    ordem: 19,
    modulo: 'A BÍBLIA E A HISTÓRIA DA SALVAÇÃO',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 25,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-20',
    titulo: 'A promessa do Salvador',
    descricao: 'A trajetória do Antigo Testamento pode ser compreendida como uma longa e paciente preparação pedagógica para o nascimento de Jesus Cristo. Por meio dos profetas, Deus manteve acesa a chama da esperança no coração do povo de Israel, prometendo o envio de um Messias libertador que estabeleceria um reino definitivo de paz, justiça e reconciliação. As profecias delineavam a figura de um Ungido de Deus que traria alívio aos quebrantados e reconciliaria a humanidade com seu Criador. Na perspectiva cristã, todas essas antigas promessas atingiram o seu cumprimento pleno na pessoa e na missão de Jesus de Nazaré. Compreender essa profunda continuidade histórica nos ajuda a ver que a encarnação de Cristo não foi um fato improvisado, mas sim o ápice do plano eterno do amor de Deus. Essa espera paciente nos ensina a cultivar a virtude da esperança e a preparar o nosso coração para acolher continuamente a presença de Jesus em nossas vidas.',
    video_youtube_id: '',
    ordem: 20,
    modulo: 'A BÍBLIA E A HISTÓRIA DA SALVAÇÃO',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 25,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-21',
    titulo: 'Quem é Jesus Cristo?',
    descricao: 'Entrando no coração do Cristianismo, contemplamos a pessoa de Jesus Cristo como o centro absoluto da nossa fé. A doutrina da Igreja professa que Jesus é o Filho Unigênito de Deus, verdadeiro Deus e verdadeiro homem, que assumiu a nossa carne para nos revelar o rosto amoroso do Pai e nos resgatar da morte e do pecado. Durante a sua vida pública, Jesus percorreu a Galileia e a Judeia anunciando o Reino de Deus, ensinando com autoridade, realizando sinais milagrosos e acolhendo com ternura os doentes, os pecadores e os marginalizados. Através de suas palavras e atitudes, Ele demonstrou que Deus não é um juiz distante, mas um Pai próximo que deseja estabelecer um relacionamento íntimo com a humanidade. Conhecer a Jesus Cristo implica não apenas estudar sobre a sua vida histórica, mas aderir à sua pessoa e seguir os seus passos, praticando ativamente a justiça, o perdão e a caridade. Quem entra em contato vivo com Jesus é irresistivelmente impulsionado a transformar seu modo de pensar, falar e agir.',
    video_youtube_id: '',
    ordem: 21,
    modulo: 'JESUS CRISTO E SEUS ENSINAMENTOS',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 30,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-22',
    titulo: 'O nascimento de Jesus',
    descricao: 'A celebração do nascimento de Jesus remete-nos ao mistério inefável da encarnação, no qual o Criador do universo se faz frágil e humano. Os Evangelhos relatam que Jesus nasceu na cidade de Belém, fruto do "sim" de Maria, e foi deitado em uma simples manjedoura por não haver lugar para a sua família nas hospedarias. A Igreja celebra este acontecimento marcante na solenidade do Natal, recordando-nos da humildade de um Deus que se despoja de sua grandeza para se aproximar da nossa pequenez. A encarnação revela que a vida humana foi dignificada de forma suprema, pois o Filho de Deus experimentou nossas alegrias, dores, cansaços e limitações. O nascimento de Jesus nos ensina que o verdadeiro poder de Deus não se manifesta na ostentação do luxo ou da força militar, mas na simplicidade do amor e do serviço. Contemplar o presépio é um convite constante para abrir espaço para Cristo e para os irmãos mais necessitados em nosso coração.',
    video_youtube_id: '',
    ordem: 22,
    modulo: 'JESUS CRISTO E SEUS ENSINAMENTOS',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 30,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-23',
    titulo: 'Jesus anuncia o Reino de Deus',
    descricao: 'O tema central da pregação de Jesus foi a proclamação do Reino de Deus. Essa expressão não designava um território geográfico ou um regime político, mas sim o domínio soberano do amor, da justiça, da paz e da misericórdia no coração da humanidade e na história. Jesus ensinava que o Reino de Deus já estava acontecendo em meio às pessoas e convidava todos a mudarem de vida para acolhê-lo. Esse Reino manifesta-se concretamente onde quer que a dignidade humana seja promovida, onde haja partilha com os necessitados, reconciliação entre os inimigos e defesa da verdade. Cada gesto de acolhimento e solidariedade que praticamos hoje é uma antecipação do Reino, que se desenvolve misteriosamente na história até alcançar sua plenitude definitiva na vida eterna. A mensagem de Jesus nos provoca a questionar: que ações práticas podemos adotar para tornar o nosso ambiente um reflexo vivo dos valores do Reino de Deus?',
    video_youtube_id: '',
    ordem: 23,
    modulo: 'JESUS CRISTO E SEUS ENSINAMENTOS',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 30,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-24',
    titulo: 'As parábolas de Jesus',
    descricao: 'Para ensinar verdades profundas sobre o Reino de Deus de maneira acessível, Jesus servia-se frequentemente de parábolas. Essas breves narrativas utilizavam elementos do cotidiano — como a agricultura, a pesca, a busca por objetos perdidos e as relações familiares — para fazer pensar e questionar os valores do mundo. Entre as mais famosas, destacam-se a Parábola do Bom Samaritano, que define o amor ao próximo sem fronteiras; a Parábola do Filho Pródigo, que revela o coração infinitamente misericordioso do Pai; e a Parábola do Semeador, que descreve as variadas disposições do coração humano ao acolher a Palavra. As parábolas não são simples historinhas morais, mas convites provocativos a uma mudança real de vida e de mentalidade. Elas nos mostram que a sabedoria de Deus pode ser descoberta e vivenciada nas situações mais simples do nosso dia a dia.',
    video_youtube_id: '',
    ordem: 24,
    modulo: 'JESUS CRISTO E SEUS ENSINAMENTOS',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 30,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-25',
    titulo: 'Os milagres de Jesus',
    descricao: 'Nas narrativas evangélicas, os milagres operados por Jesus — como as curas de enfermos, as expulsões de demônios, as multiplicações de pães e o domínio sobre as forças da natureza — ocupam um lugar destacado. Longe de serem meros espetáculos de poder para impressionar as multidões, esses atos extraordinários eram sinais visíveis da chegada do Reino de Deus e da compaixão de Jesus pelas dores humanas. Ao curar um leproso ou um cego, Jesus não restaurava apenas a saúde física, mas devolvia à pessoa a sua dignidade social e religiosa, reintegrando-a na comunidade. Ao alimentar a multidão faminta, ensinava o valor da partilha e o cuidado integral pela pessoa humana. Os milagres confirmavam a autoridade messiânica de Jesus e despertavam a fé dos seus seguidores. A exemplo do Mestre, os cristãos são chamados a cultivar a sensibilidade e a compaixão diante dos sofrimentos daqueles que os cercam.',
    video_youtube_id: '',
    ordem: 25,
    modulo: 'JESUS CRISTO E SEUS ENSINAMENTOS',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 30,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-26',
    titulo: 'Jesus chama discípulos',
    descricao: 'No início de sua vida pública, Jesus não quis agir sozinho, mas chamou homens e mulheres para o seguirem, viverem em comunidade e participarem da sua missão. Entre eles, destacou-se o grupo dos Doze Apóstolos, a quem Ele confiou a responsabilidade de liderar e dar continuidade ao anúncio do Evangelho. Ser discípulo de Jesus significava caminhar com Ele, aprender com seu modo de vida, assimilar seus ensinamentos e assumir os seus sentimentos. Esse chamado ao discipulado continua ressoando hoje para cada um de nós: ser cristão no mundo contemporâneo é encarnar o estilo de vida de Jesus na família, na escola, no trabalho e na vida pública. A missão da Igreja necessita da diversidade de dons de todos os batizados; cada pessoa é convidada a colocar suas capacidades a serviço de Deus e do próximo. Como você pode responder hoje ao convite de Jesus para ser seu discípulo missionário?',
    video_youtube_id: '',
    ordem: 26,
    modulo: 'JESUS CRISTO E SEUS ENSINAMENTOS',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 30,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-27',
    titulo: 'O mandamento do amor',
    descricao: 'Quando interrogado sobre qual seria o maior de todos os mandamentos da Lei, Jesus resumiu a essência de sua mensagem no amor incondicional: amar a Deus de todo o coração, de toda a alma e de com todo o entendimento, e amar ao próximo como a si mesmo. Esse duplo mandamento constitui a espinha dorsal e o critério definitivo de autenticidade da vida cristã. Amar a Deus significa colocar a sua vontade em primeiro lugar e confiar plenamente em seu cuidado; amar o próximo implica respeitar a dignidade de cada ser humano, acolher as diferenças, perdoar as ofensas e agir com solidariedade real. Jesus elevou a exigência desse mandamento ao nos dar o seu próprio exemplo como medida: "Amai-vos uns aos outros como Eu vos amei". O amor cristão não se reduz a um sentimento passageiro, mas traduz-se em decisões concretas e em atitudes diárias de doação e serviço.',
    video_youtube_id: '',
    ordem: 27,
    modulo: 'JESUS CRISTO E SEUS ENSINAMENTOS',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 30,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-28',
    titulo: 'Jesus e o perdão',
    descricao: 'A misericórdia e a oferta do perdão são marcas registradas do ministério de Jesus. Ele rompeu as barreiras do preconceito ao aproximar-se dos pecadores públicos e das pessoas marginalizadas pela religiosidade oficial de seu tempo, oferecendo-lhes uma vida nova. O encontro transformador com o cobrador de impostos Zaqueu exemplifica essa dinamização: ao ser acolhido por Jesus sem prévia condenação, Zaqueu sentiu-se movido a reparar os seus erros e a partilhar seus bens com os pobres. O perdão evangélico não equivale a fechar os olhos ao erro ou tolerar a injustiça, mas consiste em libertar o coração do rancor, renunciar à vingança e oferecer ao offending a possibilidade real de reconciliação. Jesus nos ensina que, assim como dependemos diariamente do perdão misericordioso de Deus, devemos nos dispor a perdoar nossos irmãos sem impor limites. O perdão é o caminho por excelência para a cura dos relacionamentos e para a paz interior.',
    video_youtube_id: '',
    ordem: 28,
    modulo: 'JESUS CRISTO E SEUS ENSINAMENTOS',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 30,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-29',
    titulo: 'A Última Ceia',
    descricao: 'Na véspera de sua paixão, reunido com os apóstolos no Cenáculo para a celebração da Páscoa, Jesus realizou atos proféticos que selaram para sempre a fé cristã. Antecipando o sacrifício de sua vida na cruz, Ele tomou o pão, abençoou-o, partiu-o e o entregou aos seus discípulos, identificando-o com o seu Corpo. Do mesmo modo, tomou o cálice com vinho e o ofereceu como o seu Sangue, o Sangue da Nova e Eterna Aliança. A Igreja reconhece nesse momento solene a instituição do Sacramento da Eucaristia, onde Cristo se torna real, verdadeira e substancialmente presente sob as espécies do pão e do vinho. Na mesma noite, Jesus lavou os pés dos apóstolos, realizando um gesto próprio de escravos para ensinar que no seu Reino a verdadeira autoridade e grandeza se medem pelo serviço humilde. Participar da Eucaristia exige de cada cristão o compromisso ético de curvar-se para servir o próximo no amor.',
    video_youtube_id: '',
    ordem: 29,
    modulo: 'JESUS CRISTO E SEUS ENSINAMENTOS',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 30,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-30',
    titulo: 'Paixão, morte e ressurreição de Jesus',
    descricao: 'O mistério pascal — composto pela paixão, morte e ressurreição de Jesus — é o ápice da História da Salvação e o coração da fé cristã. Enfrentando a injustiça dos tribunais humanos, a tortura e a execução dolorosa na cruz, Jesus permaneceu totalmente fiel à sua missão e ao amor pelo Pai e pela humanidade, perdoando inclusive os seus algozes. Sua morte trágica, contudo, não foi o capítulo final: ao terceiro dia, por poder divino, Jesus ressuscitou vitorioso sobre a morte e o pecado. A ressurreição é a grande notícia do Evangelho, a garantia de que o mal e a dor não têm a palavra definitiva e a confirmação de que a vida eterna está aberta a todos os crentes. A celebração anual da Páscoa e a comemoração semanal no domingo renovam na Igreja a certeza da esperança e o compromisso de testemunhar que a vida venceu a morte. A ressurreição de Cristo nos encoraja a acreditar que nenhuma situação de dor é definitiva e que sempre é possível ressurgir para uma vida nova.',
    video_youtube_id: '',
    ordem: 30,
    modulo: 'JESUS CRISTO E SEUS ENSINAMENTOS',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 30,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-31',
    titulo: 'O que é a Igreja?',
    descricao: 'Ao estudarmos a dimensão comunitária da fé, descobrimos que a Igreja não é simplesmente uma construção de pedra ou uma instituição puramente humana, mas sim o Povo de Deus, o Corpo Místico de Cristo e a comunidade de todos os batizados que crêem em Jesus. Fundada sobre a pregação de Cristo e impulsionada no mundo pela força do Espírito Santo, a Igreja tem como vocação reunir os fiéis para celebrar os sacramentos, escutar a Palavra, vivenciar a fraternidade e servir ao mundo, especialmente aos mais pobres. A Igreja Católica estrutura-se de forma universal e local em dioceses e paróquias, mantendo a unidade de fé e doutrina sob a solicitude pastoral do Papa e dos Bispos. Cada batizado possui um lugar e uma missão insubstituível nessa grande família. Por isso, ser membro ativo da Igreja significa superar o individualismo e participar ativamente da vida comunitária, oferecendo seus dons para o crescimento do Reino de Deus.',
    video_youtube_id: '',
    ordem: 31,
    modulo: 'IGREJA E COMUNIDADE',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 35,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-32',
    titulo: 'Pentecostes e o Espírito Santo',
    descricao: 'A consolidação da Igreja missionária deu-se no evento extraordinário de Pentecostes, quando o Espírito Santo descendeu sobre a Virgem Maria e os apóstolos reunidos em oração no Cenáculo. Os Atos dos Apóstolos narram que o Espírito manifestou-se como vento impetuoso e línguas de fogo, transformando profundamente aqueles homens que antes se encontravam atemorizados e trancados por medo das autoridades. Repletos do Espírito Santo, os discípulos saíram publicamente pelas ruas de Jerusalém anunciando com audácia as maravilhas de Deus em diversas línguas, conseguindo a conversão de milhares de pessoas. Pentecostes é considerado o nascimento público da Igreja e a confirmação de que a missão evangelizadora é conduzida pela Terceira Pessoa da Santíssima Trindade. Esse mesmo Espírito continua a ser derramado sobre nós, concedendo-nos os seus dons e dons charismáticos para podermos viver a fé com coragem, sabedoria e amor no mundo de hoje.',
    video_youtube_id: '',
    ordem: 32,
    modulo: 'IGREJA E COMUNIDADE',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 35,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-33',
    titulo: 'A missão dos apóstolos',
    descricao: 'Após o Pentecostes, os apóstolos assumiram plenamente o mandato de Jesus de ir por todo o mundo e fazer discípulos entre todas as nações. Com a força e a luz do Espírito Santo, eles espalharam-se pelas regiões do Mediterrâneo, fundando comunidades cristãs, enfrentando perseguições e mantendo-se fiéis até o martírio. Destacam-se as figuras de São Pedro, rocha sobre a qual Cristo edificou a Igreja, e de São Paulo, o grande Apóstolo dos Gentios, cujas viagens missionárias e cartas doutrinárias foram decisivas para a expansão e consolidação do cristianismo no mundo greco-romano. A entrega abnegada dos primeiros discípulos permitiu que a fé chegasse até nós através dos séculos. O exemplo dos apóstolos recorda a todo cristão crismado que o batismo nos constitui missionários e que devemos dar testemunho de Jesus Cristo no cotidiano através de nossas atitudes, palavras e compromisso com o bem. Anunciar a mensagem do Evangelho é a missão de toda a Igreja e a razão de ser de cada crente.',
    video_youtube_id: '',
    ordem: 33,
    modulo: 'IGREJA E COMUNIDADE',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 35,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-34',
    titulo: 'A comunidade cristã',
    descricao: 'O dinamismo da fé cristã ganha força na vivência comunitária, inspirada pelo modelo das primeiras comunidades relatado no livro dos Atos dos Apóstolos. Os primeiros cristãos caracterizavam-se por manterem-se unidos no amor fraterno, partilhando os seus bens com os necessitados, perseverando nas orações e escutando assiduamente os ensinamentos dos apóstolos. Essa experiência pioneira demonstra que a fé precisa ser testemunhada em ações concretas de solidariedade e ajuda mútua. A comunidade cristã autêntica deve constituir-se como um espaço caloroso de acolhimento, respeito e participação ativa, onde os dons de cada membro são colocados a serviço do bem comum. Ela tem também a nobre responsabilidade de estender a mão aos que se encontram afastados, criando oportunidades para que todos se sintam integrados no caminho de fé. Lembremo-nos de que uma comunidade se torna verdadeiramente forte e madura quando seus membros superam o egoísmo e aprendem a partilhar a vida.',
    video_youtube_id: '',
    ordem: 34,
    modulo: 'IGREJA E COMUNIDADE',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 35,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-35',
    titulo: 'A paróquia como casa da comunidade',
    descricao: 'No âmbito local, a paróquia destaca-se como a expressão mais próxima do mistério da Igreja na vida dos fiéis. Ela é a comunidade de batizados confiada ao cuidado pastoral de um pároco, em comunhão com o bispo diocesano, constituindo um polo dinâmico de celebração, formação espiritual, fraternidade e caridade. É no ambiente paroquial que as famílias recebem os sacramentos, os jovens e adultos participam da catequese, a comunidade se reúne para a celebração dominical e se organizam as diversas pastoralis, movimentos e obras sociais. A vitalidade paroquial depende diretamente do engajamento corresponsável de todos os batizados, que são chamados a colocar seus talentos humanos e espirituais a serviço da evangelização. A paróquia é verdadeiramente a casa da fé e a família de Deus, uma edificação viva que se constrói diariamente com o compromisso generoso de cada um de nós.',
    video_youtube_id: '',
    ordem: 35,
    modulo: 'IGREJA E COMUNIDADE',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 35,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-36',
    titulo: 'O catequista e a caminhada de fé',
    descricao: 'No processo de maturidade cristã, a figura do catequista desempenha um papel de especial relevância como testemunha e acompanhante na caminhada com Jesus Cristo. O ministério do catequista vai muito além do simples ensino acadêmico de doutrinas religiosos: trata-se de um serviço evangelizador que visa introduzir o catequizando no mistério do amor de Deus, oferecendo suporte humano, promovendo reflexões e incentivando a inserção viva na comunidade. Para exercer essa vocação com frutuosidade, o catequista busca testemunhar no seu próprio dia a dia a beleza do Evangelho, atuando com paciência, escuta atenta, respeito e espírito de serviço. Todavia, a catequese é uma via de mão dupla; o catequista caminha ao lado, mas cabe ao próprio catequizando abrir o coração, interrogar com sinceridade e cultivar o seu relacionamento pessoal com Deus. A forma mais convincente e eficaz de ensinar a fé é procurá-la viver em atos e atitudes.',
    video_youtube_id: '',
    ordem: 36,
    modulo: 'IGREJA E COMUNIDADE',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 35,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-37',
    titulo: 'A missa: encontro com Jesus',
    descricao: 'O coração da vida litúrgica da Igreja bate no ritmo do Sacrifício Eucarístico, no qual a comunidade se reúne para encontrar-se com o Senhor ressuscitado. Na Santa Missa, o povo de Deus se edifica pela escuta atenta da Palavra nas Escrituras e pela participação no Banquete da Eucaristia, atualizando sacramentalmente o mistério da paixão, morte e ressurreição de Cristo. Longe de constituir um mero ritual frio ou uma obrigação social enfadonha, a missa é o ápice da comunhão dos fiéis entre si e com Deus, renovando as energias espirituais para o testemunho cristão na sociedade. Participar da celebração eucarística com verdadeira piedade exige de nós atenção de espírito, atitude de adoração e genuína abertura para nos deixarmos transformar pela graça de Cristo. A missa é o lugar por excelência para nos encontrarmos com Jesus e renovarmos a nossa fidelidade aos seus ensinamentos.',
    video_youtube_id: '',
    ordem: 37,
    modulo: 'IGREJA E COMUNIDADE',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 35,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-38',
    titulo: 'Partes da missa',
    descricao: 'Para participar de maneira consciente, ativa e frutuosa da celebração eucarística, é essencial compreender a estrutura litúrgica que compõe a Santa Missa, dividida articuladamente em quatro momentos fundamentais: Ritos Iniciais, Liturgia da Palavra, Liturgia Eucarística e Ritos Finais. Os Ritos Iniciais reúnem a assembleia com o canto de entrada, a saudação trinitária, o ato penitencial e a oração da coleta, preparando os corações. Na Liturgia da Palavra, Deus fala ao seu povo por meio das leituras do Antigo e Novo Testamento, do Salmo responsorial e do Santo Evangelho, sendo a mensagem aplicada à vida concreta por meio da homilia do presidente da celebração. Segue-se a Liturgia Eucarística, o momento central no qual se apresentam os dons do pão e do vinho, reza-se a Solene Oração Eucarística com a consagração e distribui-se a Santa Comunhão aos fiéis dispostos. Por fim, nos Ritos Finais, a comunidade acolhe a bênção solene e recebe o envio missionário para dar testemunho do que celebrou. Conhecer essa estrutura nos ajuda a rezar a missa com maior profundidade interior.',
    video_youtube_id: '',
    ordem: 38,
    modulo: 'IGREJA E COMUNIDADE',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 35,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-39',
    titulo: 'O ano litúrgico',
    descricao: 'Ao longo de doze meses, a Igreja conduz seus filhos por uma caminhada pedagógica mediante o Ano Litúrgico, através do qual celebra-se a totalidade do mistério de Jesus Cristo. O ciclo inicia-se no Advento, tempo de sóbria expectativa e preparação para a celebração da Encarnação no Natal. Após o Tempo do Natal, a Igreja vivencia a Quaresma, percurso de quarenta dias marcado pelo jejum, esmola e oração, convocando o povo à conversão interior em vista da Páscoa. O Tríduo Pascal e o Tempo Pascal constituem o cume do ano, no qual se exulta pela vitória de Cristo sobre a morte, culminando na solenidade de Pentecostes. A maior parte do ano é preenchida pelo Tempo Comum, no qual aprofunda-se o ensinamento cotidiano e o seguimento do Mestre. Ao longo dessa caminhada, intercalam-se as festas em honra à Santíssima Virgem Maria e aos Santos. Vivenciar o Ano Litúrgico permite-nos alinhar o ritmo do nosso tempo humano ao ritmo da vida de Cristo.',
    video_youtube_id: '',
    ordem: 39,
    modulo: 'IGREJA E COMUNIDADE',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 35,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-40',
    titulo: 'Símbolos e gestos da fé católica',
    descricao: 'A celebração dos mistérios da fé faz uso constante de uma rica linguagem simbólica e corporal que auxilia o ser humano a expressar realidades espirituais invisíveis. Entre os gestos mais significativos, o Sinal da Cruz reafirma nossa pertença à Santíssima Trindade, enquanto a genuflexão diante do tabernáculo expressa adoração amorosa à presença real de Cristo na Eucaristia. Símbolos visíveis como a água benta trazem à memória a graça do Batismo; as velas acesas apontam para Cristo como a Luz do Mundo; e o altar sobressai como o centro de convergência da ação litúrgica e mesa da refeição sagrada. É importante também esclarecer a correta doutrina sobre o uso das imagens sacras: a Igreja Católica venera as representações dos santos e de Maria como exemplos de fidelidade e amizade divina, reservando a adoração absoluta unicamente a Deus. O conhecimento consciente dessas atitudes e símbolos torna nossa participação litúrgica muito mais rica, compreensível e devota.',
    video_youtube_id: '',
    ordem: 40,
    modulo: 'IGREJA E COMUNIDADE',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 35,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-41',
    titulo: 'O que são os sacramentos?',
    descricao: 'Entrando no estudo dos mistérios da fé, definimos os sacramentos como sinais sensíveis e eficazes da graça divina, instituídos por Jesus Cristo e confiados à Igreja para santificar as diversas etapas da vida humana. Por meio desses canais de salvação, o próprio Espírito Santo atua de forma invisível mas real, comunicando a vida de Deus a cada crente. A Igreja Católica celebra sete sacramentos, tradicionalmente divididos em três grupos orgânicos: os Sacramentos da Iniciação Cristã (Batismo, Crisma e Eucaristia), que fundamentam a vida espiritual; os Sacramentos de Cura (Reconciliação e Unção dos Enfermos), que restauram e confortam as fragilidades humanas; e os Sacramentos a Serviço da Comunhão e da Missão (Ordem e Matrimônio), que edificam o Povo de Deus. Cada um deles transmite uma graça específica e fortalece nossa união com Cristo e com a comunidade eclesial. Os sacramentos são verdadeiros presentes de Deus que sustentam a nossa caminhada da terra para o céu.',
    video_youtube_id: '',
    ordem: 41,
    modulo: 'OS SACRAMENTOS',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 40,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-42',
    titulo: 'Batismo: nascimento para a vida cristã',
    descricao: 'O Batismo sobressai como a porta de entrada para a vida espiritual e o fundamento de toda a existência cristã, inserindo a pessoa no Corpo Místico de Cristo que é a Igreja. O rito essencial realiza-se pela efusão da água na cabeça do batizando ou imersão, associada à invocação solene do Pai, do Filho e do Espírito Santo. O simbolismo dos elementos é profundo: a água purifica do pecado original e concede a vida nova de filho adoptivo de Deus; a vestes branca manifesta a dignidade imaculada do renascido; e a vela acesa no Círio Pascal exorta o batizado a caminhar como filho da luz. Quando conferido na infância, os pais e padrinhos comprometem-se formalmente em educar a criança na fé da Igreja, a qual deverá ser assumida livre e conscientemente na maturidade. O Batismo é o marco inicial de uma trajetória radiante que precisa ser permanentemente nutrida pela oração, pela vida comunitária e pelo testemunho ético.',
    video_youtube_id: '',
    ordem: 42,
    modulo: 'OS SACRAMENTOS',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 40,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-43',
    titulo: 'Eucaristia: Jesus se dá como alimento',
    descricao: 'A Eucaristia ocupa um lugar único como a fonte e o ápice de toda a vida da Igreja, sendo o sacramento no qual Jesus se entrega a si mesmo como alimento espiritual. No momento supremo da oração eucarística, por meio do ministério do sacerdote e da ação oculta do Espírito Santo, opera-se o mistério da transubstanciação: a substância do pão e do vinho converte-se de fato no Corpo, Sangue, Alma e Divindade de Nosso Senhor Jesus Cristo, permanecendo inalteradas apenas as aparências ou espécies acidentais. Ao aproximar-se do altar para comungar, o cristão une-se de maneira profunda com o seu Senhor, recebendo o sustento necessário para vencer as tentações e crescer nas virtudes. A comunhão eucarística não é um privilégio individual, mas um forte apelo à fraternidade, à partilha com os necessitados e ao compromisso de ser Eucaristia fracionada para os outros no serviço diário. Receber Cristo na comunhão é assumir corajosamente o compromisso de viver e amar como Ele amou.',
    video_youtube_id: '',
    ordem: 43,
    modulo: 'OS SACRAMENTOS',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 40,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-44',
    titulo: 'Reconciliação: o sacramento do perdão',
    descricao: 'Consciente das fragilidades e quedas ao longo do caminho, Cristo confiou à sua Igreja o sacramento da Reconciliação — também denominado Penintência ou Confissão — como o remédio eficaz para a cura das feridas do pecado e restauração da graça santificante. Através deste sacramento, o fiel arrenpendido obtém o perdão divino e reconcilia-se com Deus e com a comunidade eclesial, da qual se havia afastado. O itinerário espiritual de uma boa confissão exige cinco passos fundamentais: o minucioso exame de consciência, a dor sincera pelo pecado cometido (contrição), o firme propósito de não mais pecar, a acusação clara dos pecados ao sacerdote na confissão auricular e o cumprimento da satisfação ou penitência prescrita. Longe de ser um tribunal de condenação, a confissão é um abraço terno de misericórdia onde Deus nos acolhe e restaura a nossa dignidade. Sempre que reconhecemos nossos erros com humildade, Deus nos estende a mão para recomeçar.',
    video_youtube_id: '',
    ordem: 44,
    modulo: 'OS SACRAMENTOS',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 40,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-45',
    titulo: 'Crisma: força do Espírito Santo',
    descricao: 'A Crisma ou Confirmação consolida e aperfeiçoa a graça batismal, conferindo ao cristão uma efusão plenária do Espírito Santo para torná-lo uma testemunha corajosa e madura de Jesus Cristo no mundo. A celebração é ordinariamente presidida pelo bispo, que impõe as mãos sobre os confirmandos invocando o Paráclito e unge a fronte de cada um com o Santo Crisma — óleo perfumado consagrado na Quinta-feira Santa —, pronunciando as palavras da promessa. Ao receber o selo do Espírito, o crismando vincula-se mais intimamente à Igreja e assume a responsabilidade de defender e difundir a fé pela palavra e pelo exemplo de vida. A recepção da Crisma não sinaliza a "formatura" ou o término da formação cristã, mas sim a passagem para um engajamento adulto na missão evangelizadora. A Crisma representa o grande envio para viver a fé com discernimento, responsabilidade e verdadeiro compromisso eclesial.',
    video_youtube_id: '',
    ordem: 45,
    modulo: 'OS SACRAMENTOS',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 40,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-46',
    titulo: 'Matrimônio e vocação ao amor',
    descricao: 'O sacramento do Matrimônio eleva a união natural entre um homem e uma mulher batizados à dignidade de aliança sagrada, espelhando o amor fiel, indissolúvel e fecundo entre Cristo e a sua Igreja. Ao trocarem o consentimento diante de Deus e dos ministros da Igreja, os esposos prometem-se fidelidade mútua, amor incondicional e apoio contínuo na saúde e na doença, na alegria e na tristeza, abrindo-se generosamente à procriação e educação cristã dos filhos. O lar constituído pelo Matrimônio torna-se uma "Igreja Doméstica", um espaço privilegiado onde se aprende o perdão, o diálogo, o respeito e a vivência da oração comunitária. O amor conjugal autêntico não pode fundamentar-se apenas no entusiasmo emotivo efêmero, mas sim numa decisão amadurecida de doação diária e paciência diante das intempéries. Amar verdadeiramente exige assumir responsabilidades sólidas e cultivar o bem do outro ao longo de toda a vida.',
    video_youtube_id: '',
    ordem: 46,
    modulo: 'OS SACRAMENTOS',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 40,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-47',
    titulo: 'Ordem e serviço ao povo de Deus',
    descricao: 'Para apascentar e aumentar continuamente o seu Povo, Cristo instituiu na Igreja o sacramento da Ordem, através do qual alguns homens batizados são configurados a Cristo Cabeça e Esposo por uma unção especial, tornando-se ministros ordenados. Esse sacramento desenvolve-se em três graus hierárquicos distintos e complementares: o Diaconato, voltado prioritariamente para o serviço da caridade, da proclamação da Palavra e do altar; o Presbiterado, cujos padres atuam como cooperadores dos bispos na celebração dos sacramentos e no pastoreio das paróquias; e o Episcopado, cuja plenitude capacita os bispos para governar, ensinar e santificar as Igrejas particulares. A missão do ministro ordenado não deve jamais ser interpretada como conquista de privilégio ou poder humano, mas sim como uma entrega total ao serviço do Evangelho. Todos os batizados encontram na dedicação dos sacerdotes um ponto de referência para exercerem suas próprias vocações laicais na sociedade.',
    video_youtube_id: '',
    ordem: 47,
    modulo: 'OS SACRAMENTOS',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 40,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-48',
    titulo: 'Unção dos enfermos: Deus cuida dos que sofrem',
    descricao: 'O olhar compassivo de Jesus para com os doentes manifesta-se de modo tocante no sacramento da Unção dos Enfermos, instituído para trazer alívio físico, conforto espiritual e a graça da fortaleza àqueles que enfrentam enfermidades graves, debilidade avançada pela velhice ou iminência de intervenções cirúrgicas de risco. Na celebração, o presbítero unge a fronte e as mãos do doente com o óleo consagrado, acompanhado por orações que suplicam o alívio das dores e a remissão dos pecados. É fundamental desmistificar a visão ultrapassada que encara a Unção apenas como um rito derradeiro à beira da morte (a antiga "extrema-unção"), compreendendo-a como um sacramento de vida que restaura a esperança e fortalece a alma na provação. A comunidade cristã é chamada a imitar esse cuidado, visitando os doentes e oferecendo apoio solidário às suas famílias. Cuidar com ternura daqueles que sofrem é tocar de forma tangível no próprio Cristo.',
    video_youtube_id: '',
    ordem: 48,
    modulo: 'OS SACRAMENTOS',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 40,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-49',
    titulo: 'Os mandamentos na vida diária',
    descricao: 'A vivência dos Dez Mandamentos transcende a antiguidade do Antigo Testamento, permanecendo como um guia ético extremamente atual e indispensável para a orientação das condutas humanas cotidianas. Longe de representarem uma camisa de força de proibições, os preceitos do Decálogo são cercas de proteção que preservam a nossa liberdade autêntica e promovem a justiça social. Na prática do dia a dia, aplicar os mandamentos significa optar firmemente pela verdade no falar, respeitar inviolavelmente a vida humana desde a concepção até a morte natural, cultivar a honestidade nos negócios e estudos, honrar os laços familiares e afastar do coração o vírus da inveja e da cobiça. Jesus insiste que a observância da Lei só atinge a perfeição quando motivada pelo amor sincero a Deus e aos irmãos. As pequenas escolhas éticas que realizamos todos os dias são o teste conclusivo do nosso alinhamento com a vontade do Pai.',
    video_youtube_id: '',
    ordem: 49,
    modulo: 'VIDA CRISTÃ E VALORES DO EVANGELHO',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 40,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-50',
    titulo: 'As bem-aventuranças',
    descricao: 'No Sermão da Montanha, retratado no Evangelho de São Mateus, Jesus apresenta as Bem-Aventuranças como a magna carta do Reino e o perfil interior de todo o seu verdadeiro discípulo. Ao proclamar felizes os pobres em espírito, os mansos, os que choram, os famintos de justiça, os misericordiosos, os puros de coração, os pacificadores e os perseguidos por causa da justiça, o Mestre subverte completamente a lógica mundana baseada no sucesso material, no poder e na autossuficiência. As Bem-Aventuranças revelam que a felicidade plena não pode ser comprada, mas nasce de uma alma sintonizada com o coração de Deus e voltada para a edificação do bem. Elas constituem um espelho para a vida cristã, convocando-nos a transformar as estruturas do nosso ambiente através da não-violência, do perdão e do serviço aos desamparados. A verdadeira e duradoura alegria é a recompensa daqueles que decidem viver segundo o Evangelho.',
    video_youtube_id: '',
    ordem: 50,
    modulo: 'VIDA CRISTÃ E VALORES DO EVANGELHO',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 40,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-51',
    titulo: 'O Pai-Nosso',
    descricao: 'A oração por excelência da vida cristã é o Pai-Nosso, ensinado diretamente por Jesus quando os seus discípulos lhe pediram que os ensinasse a rezar. Esta prece perfeita sintetiza em poucas palavras tudo o que podemos e devemos desejar espiritualmente e materialmente. Ao iniciá-la invocando a Deus como "Pai Nosso", tomamos consciência imediata da nossa filiação divina e da nossa fraternidade universal com todos os seres humanos. As três primeiras petições voltam-se para a glória de Deus — a santificação do seu Nome, a vinda do seu Reino e a realização da sua Vontade na terra —, ao passo que as quatro seguintes apresentam as nossas carências diárias: o pão corporal e espiritual, o perdão das ofensas (condicionado à nossa disposição de perdoar os devedores), o socorro contra as tentações e a libertação de todo o mal. Rezar o Pai-Nosso com sinceridade exige que assumamos a responsabilidade de viver como verdadeiros filhos de Deus e irmãos atenciosos.',
    video_youtube_id: '',
    ordem: 51,
    modulo: 'ORAÇÃO E ESPIRITUALIDADE',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 50,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-52',
    titulo: 'A Ave-Maria',
    descricao: 'Dentre as orações marianas mais queridas da tradição católica, a Ave-Maria destaca-se por sua sólida fundamentação bíblica e pelo seu tom de filial confiança na intercessão da Mãe de Deus. A primeira parte da oração combina as palavras inspiradas do Arcanjo Gabriel no dia da Anunciação com a saudação entusiasmada de Santa Isabel por ocasião da Visitação, reconhecendo Maria como a mulher infinitamente agraciada por Deus e bendita entre todas. A segunda parte foi formulada pela Igreja no calor da devoção dos fiéis, suplicando a intercessão da Santa Mãe de Deus em favor de todos os pecadores no presente e na hora decisiva da morte. A veneração prestada a Maria difere essencialmente da adoração reservada estritamente à Santíssima Trindade: veneramos a Virgem por sua cooperação exemplar na salvação. Rezar a Ave-Maria é colocarmo-nos na escola de humildade e disponibilidade daquela que soube dizer um "sim" irrestrito a Deus.',
    video_youtube_id: '',
    ordem: 52,
    modulo: 'ORAÇÃO E ESPIRITUALIDADE',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 50,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-53',
    titulo: 'O terço e a meditação da vida de Jesus',
    descricao: 'O Santo Terço sobressai como um tesouro de espiritualidade contemplativa ao alcance de todos os fiéis, unindo a vocalização compassada de orações simples à meditação profunda dos mistérios da vida de Jesus e de Maria. Dividido em quatro conjuntos contemplativos — os Mistérios Gozosos (a infância do Senhor), Luminosos (a vida pública e pregadora), Dolorosos (a paixão e morte na cruz) e Gloriosos (a ressurreição e glorificação) —, o terço permite-nos percorrer todo o Evangelho pelos olhos amorosos de Nossa Senhora. A repetição sequencial das Ave-Marias e Pai-Nossos não deve decair numa rotina mecânica ou num palavreado sem alma, mas funcionar como uma música de fundo que pacifica a mente para a contemplação dos mistérios divinos. Seja rezado na solitude do quarto, em família ou no grupo paroquial, o terço é uma poderosa arma espiritual que acalma o coração e nos conecta com a presença divina no meio da agitação diária.',
    video_youtube_id: '',
    ordem: 53,
    modulo: 'ORAÇÃO E ESPIRITUALIDADE',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 50,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-54',
    titulo: 'Santos: amigos de Deus',
    descricao: 'A doutrina da Comunhão dos Santos recorda-nos que a Igreja se estende para além dos limites terrestres, estando unida aos crentes que já alcançaram a glória do céu. Os santos são homens e mulheres comuns de todas as épocas e condições sociais que acolheram a graça de Deus e viveram os ensinamentos do Evangelho de modo extraordinário e heroico. A Igreja declara solenemente a santidade de alguns por meio da canonização, oferecendo figuras luminosas como São Francisco de Assis, Santa Teresa de Calcutá, Santo Antônio e Santa Teresinha para nossa inspiração. Os católicos não adoram os santos, mas os veneram como irmãos mais velhos na fé e pedem a sua intercessão junto de Deus. A vida dos santos prova que a santidade é um chamado universal dirigido a todos os batizados, possível de ser alcançado nas pequenas ações cotidianas feitas com grande amor e fidelidade.',
    video_youtube_id: '',
    ordem: 54,
    modulo: 'ORAÇÃO E ESPIRITUALIDADE',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 50,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-55',
    titulo: 'Caridade e serviço ao próximo',
    descricao: 'A virtude teologal da caridade constitui a prova de fogo e a expressão máxima de uma fé viva e autêntica. Ser cristão exige traduzir o amor sentimental em gestos práticos de compaixão, generosidade e serviço voluntário às pessoas que se encontram em situação de vulnerabilidade material ou espiritual. A vida de Jesus foi um contínuo ato de caridade: Ele estendeu a mão aos leprosos, alimentou as multidões famintas e declarou categoricamente que no julgamento final seremos avaliados pelo que tivermos feito aos seus irmãos menorzinhos. A caridade não se restringe a grandes doações financeiras; ela desabrocha sobretudo nos gestos de escuta atenta a quem sofre, na partilha de conhecimentos, na paciência com os limites alheios e no engajamento nos trabalhos comunitários. As pastorais e obras sociais da Igreja dependem do empenho de cada batizado para continuar sendo o rosto caridoso de Cristo no mundo. A fé torna-se visível quando o amor sai da teoria e vira ação.',
    video_youtube_id: '',
    ordem: 55,
    modulo: ' MISSÃO CRISTÃ E VIDA EM SOCIEDADE',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 50,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-56',
    titulo: 'Perdão e reconciliação na família e na comunidade',
    descricao: 'A convivência diária entre os seres humanos está inevitavelmente sujeita a mal-entendidos, atritos, choques de opinião e ofensas que podem ferir gravemente as relações interpessoais. No ambiente doméstico, na escola, no trabalho ou na vida comunitária, a única força capaz de romper o ciclo destrutivo do rancor e da vingança é o exercício persistente do perdão e do diálogo sincero. Seguir as pegadas de Cristo exige cultivar um coração predisposto à reconciliação, capaz de dar o primeiro passo para restaurar as pontes quebradas pela mágoa. É preciso esclarecer que perdoar não significa fingir passivamente que a injustiça não ocorreu, tampouco expor-se voluntariamente a agressões recorrentes; perdoar é uma decisão de libertar a própria alma do veneno do ressentimento e dar oportunidade ao outro de reparar o dano e mudar de conduta. A pacificação de uma sociedade começa quando aprendemos a reconhecer humildemente nossas falhas e a pedir perdão.',
    video_youtube_id: '',
    ordem: 56,
    modulo: ' MISSÃO CRISTÃ E VIDA EM SOCIEDADE',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 50,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-57',
    titulo: 'Cuidar da criação',
    descricao: "A responsabilidade socioambiental é uma exigência ética que emana diretamente da fé na criação e foi enfaticamente recordada ao mundo pelo Papa Francisco na Encíclica Laudato Si'. O planeta Terra é a nossa casa comum um dom maravilhoso confiado por Deus à humanidade para ser guardado e cultivado com Sabedoria e Justiça para o bem das gerações presentes e futuras. O estilo de vida consumista, a degradação ambiental, o desperdício irresponsável de água e alimentos e a poluição ferem gravemente o plano do Criador e afetam prioritariamente as populações mais empobrecidas do planeta. A conversão ecológica exige de cada cristão escolhas cotidianas sustentáveis, como a reciclagem de resíduos, o uso consciente da energia, a preservação da fauna e da flora e o combate à cultura do descarte. Cuidar do meio ambiente é um ato de profunda gratidão a Deus e de amor concreto às futuras gerações.",
    video_youtube_id: '',
    ordem: 57,
    modulo: ' MISSÃO CRISTÃ E VIDA EM SOCIEDADE',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 50,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-58',
    titulo: 'Ser cristão na escola, em casa e na internet',
    descricao: 'A coerência de vida é a marca registrada do cristão genuíno, cujos valores evangélicos devem brilhar em todos os cantos da sua existência, e não apenas nas dependências do templo religioso. No ambiente familiar, ser cristão traduz-se no respeito filial, no auxílio prestativo nas tarefas domésticas e no diálogo sereno; na escola ou faculdade, manifesta-se na honestidade acadêmica, no combate firme ao bullying, no respeito aos professores e na integração dos colegas marginalizados. Nos dias atuais, o ambiente digital e as redes sociais tornaram-se um vasto campo de missão e de testemunho ético: o jovem e o adulto de fé devem distanciar-se da disseminação de notícias falsas (fake news), de agressões verbais, de discursos de ódio ou do desrespeito à intimidade alheia. O olhar atento do cristão busca agir com idoneidade moral em qualquer circunstância, inclusive no anonimato das telas. Que mudanças você faria em seu comportamento digital ou escolar se Jesus estivesse fisicamente ao seu lado?',
    video_youtube_id: '',
    ordem: 58,
    modulo: ' MISSÃO CRISTÃ E VIDA EM SOCIEDADE',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 50,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-59',
    titulo: 'Vocação: Deus chama cada pessoa',
    descricao: 'A doutrina sobre a vocação afirma a verdade libertadora de que ninguém está no mundo por acaso; cada ser humano é amado por Deus e possui um chamado singular para colocar a sua vida a serviço do amor e da construção do bem. Todos partilham de uma vocação universal primária: a busca da santidade e o exercício da caridade na fraternidade. No entanto, esse chamado especifica-se em variadas formas de vida na Igreja e no mundo: na vocação matrimonial e familiar, na vida consagrada e religiosa, no ministério ordenado sacerdotal ou no compromisso laical engajado na transformação da ordem temporal. Descobrir o próprio caminho vocacional requer oração constante, discernimento interior, conhecimento das próprias aptidões e acompanhamento espiritual. Vocação não é simplesmente a escolha de uma carreira profissional lucrativa, mas sim a descoberta apaixonada da forma como Deus deseja que sirvamos ao próximo. Quais são os dons que você recebeu e como os colocará a serviço do mundo?',
    video_youtube_id: '',
    ordem: 59,
    modulo: ' MISSÃO CRISTÃ E VIDA EM SOCIEDADE',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 50,
    status: 'locked',
    desbloqueada: false,
  },
  {
    id: 'aula-60',
    titulo: 'Minha caminhada continua',
    descricao: 'Chegamos ao encerramento deste percurso de 60 aulas de preparação para a Crisma, no qual tivemos a oportunidade de percorrer os fundamentos do conhecimento de Deus, as páginas da História da Salvação, os ensinamentos de Jesus, o mistério da Igreja, a graça dos Sacramentos e a ética do Reino. O Sacramento da Confirmação que em breve será recebido ratifica com autoridade a graça do vosso Batismo e imprime no vosso ser a marca indelével do Espírito Santo, enviando-vos como apóstolos e testemunhas do Evangelho no mundo. Contudo, é vital fixar na mente e no coração que a celebração do sacramento não representa o fim da jornada ou a "aposentadoria" dos estudos da fé, mas justamente o início de uma vida cristã adulta, responsável e comprometida. A caminhada prossegue diariamente sustentada pela oração assídua, pela participação viva na Santa Missa dominical, pelo estudo contínuo das Escrituras e pelo engajamento nas pastorais e ações sociais da comunidade. O desafio a partir de agora é fazer frutificar tudo o que foi aprendido, sendo sal da terra e luz do mundo sob a guia constante do Espírito Santo. A Crisma fortalece a sua missão permanente de viver, testemunhar e partilhar o amor incondicional de Jesus Cristo.',
    video_youtube_id: '',
    ordem: 60,
    modulo: ' MISSÃO CRISTÃ E VIDA EM SOCIEDADE',
    ativo: true,
    percentual: 0,
    concluida: false,
    duracao: '15 min',
    xp: 60,
    status: 'locked',
    desbloqueada: false,
  },
];


export const activities = [
  // AULA 1 - O que é a catequese?
  {
    id: 'atividade-1',
    aula_id: 'aula-1',
    pergunta: 'Qual é o principal objetivo da catequese?',
    alternativas: ['Ensinar apenas orações decoradas', 'Promover o encontro com Deus e o crescimento na fé', 'Preparar somente para provas religiosas', 'Ensinar regras de convivência'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-2',
    aula_id: 'aula-1',
    pergunta: 'A catequese deve ser compreendida como:',
    alternativas: ['Uma obrigação sem significado', 'Um curso que termina na Crisma', 'Um caminho de aprendizagem e encontro com Deus', 'Uma atividade exclusiva dos padres'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-3',
    aula_id: 'aula-1',
    pergunta: 'O que aprendemos durante a catequese?',
    alternativas: ['Somente histórias antigas', 'A Bíblia, os sacramentos e os ensinamentos de Jesus', 'Apenas músicas religiosas', 'Somente regras da Igreja'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-4',
    aula_id: 'aula-1',
    pergunta: 'Qual é a importância da Crisma?',
    alternativas: ['Encerrar definitivamente a vida religiosa', 'Substituir o Batismo', 'Fortalecer a fé e o compromisso cristão', 'Dispensar a participação na Igreja'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-5',
    aula_id: 'aula-1',
    pergunta: 'A catequese termina quando recebemos a Crisma?',
    alternativas: ['Sim, porque já aprendemos tudo', 'Não, a caminhada de fé continua', 'Sim, porque não precisamos mais da Igreja', 'Não, mas somente os padres continuam aprendendo'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-6',
    aula_id: 'aula-1',
    pergunta: 'Qual atitude demonstra que estamos vivendo os ensinamentos da catequese?',
    alternativas: ['Desrespeitar as pessoas', 'Ignorar quem precisa de ajuda', 'Praticar o amor e o respeito ao próximo', 'Pensar somente em nossos interesses'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-7',
    aula_id: 'aula-1',
    pergunta: 'A catequese busca ajudar o cristão a:',
    alternativas: ['Conhecer Jesus e viver seus ensinamentos', 'Evitar qualquer convivência comunitária', 'Aprender somente datas religiosas', 'Substituir a oração por atividades'],
    resposta_correta: 0,
  },

  // AULA 2 - Por que buscar a Deus?
  {
    id: 'atividade-8',
    aula_id: 'aula-2',
    pergunta: 'Por que as pessoas procuram a Deus?',
    alternativas: ['Apenas por obrigação', 'Em busca de sentido, amor e felicidade', 'Para evitar responsabilidades', 'Somente para receber recompensas materiais'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-9',
    aula_id: 'aula-2',
    pergunta: 'O que significa buscar a Deus?',
    alternativas: ['Ignorar seus ensinamentos', 'Procurar apenas benefícios pessoais', 'Conhecê-lo e desenvolver uma relação de confiança', 'Afastar-se da comunidade'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-10',
    aula_id: 'aula-2',
    pergunta: 'Qual das atitudes representa uma forma de buscar a Deus?',
    alternativas: ['Praticar a oração e ler a Bíblia', 'Desrespeitar o próximo', 'Agir sempre com egoísmo', 'Ignorar os ensinamentos de Jesus'],
    resposta_correta: 0,
  },
  {
    id: 'atividade-11',
    aula_id: 'aula-2',
    pergunta: 'Segundo a fé cristã, Deus é:',
    alternativas: ['Uma realidade distante e indiferente', 'A fonte do amor e do sentido da vida', 'Alguém que se importa somente com pessoas perfeitas', 'Uma criação humana'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-12',
    aula_id: 'aula-2',
    pergunta: 'A busca por Deus pode acontecer:',
    alternativas: ['Somente dentro da igreja', 'Apenas durante a catequese', 'Na oração, na comunidade e nas atitudes diárias', 'Somente em momentos difíceis'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-13',
    aula_id: 'aula-2',
    pergunta: 'O que a fé pode oferecer diante das dificuldades?',
    alternativas: ['A certeza de que nunca teremos problemas', 'Esperança e força para enfrentar situações difíceis', 'A garantia de realizar todos os desejos', 'A possibilidade de evitar qualquer responsabilidade'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-14',
    aula_id: 'aula-2',
    pergunta: 'Qual pergunta representa uma busca por sentido na vida?',
    alternativas: ['Como posso evitar ajudar os outros?', 'Como posso ignorar minhas responsabilidades?', 'Qual é meu propósito e como posso viver melhor?', 'Como posso deixar de aprender?'],
    resposta_correta: 2,
  },

  // AULA 3 - Quem é Deus?
  {
    id: 'atividade-15',
    aula_id: 'aula-3',
    pergunta: 'Como a fé cristã apresenta Deus?',
    alternativas: ['Como um ser indiferente', 'Como Pai, Criador e fonte do amor', 'Como uma força sem relação com a humanidade', 'Como alguém que abandona seus filhos'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-16',
    aula_id: 'aula-3',
    pergunta: 'O que significa Santíssima Trindade?',
    alternativas: ['Três deuses diferentes', 'Um Deus em três Pessoas: Pai, Filho e Espírito Santo', 'Três religiões diferentes', 'Um Deus dividido em três partes'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-17',
    aula_id: 'aula-3',
    pergunta: 'Quem é o Filho na Santíssima Trindade?',
    alternativas: ['Moisés', 'João Batista', 'Jesus Cristo', 'Abraão'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-18',
    aula_id: 'aula-3',
    pergunta: 'Qual é a missão do Espírito Santo?',
    alternativas: ['Afastar as pessoas de Deus', 'Fortalecer e orientar os cristãos', 'Substituir Jesus', 'Impedir a oração'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-19',
    aula_id: 'aula-3',
    pergunta: 'Qual característica representa Deus na fé cristã?',
    alternativas: ['Egoísmo', 'Indiferença', 'Misericórdia', 'Injustiça'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-20',
    aula_id: 'aula-3',
    pergunta: 'O que significa reconhecer Deus como Criador?',
    alternativas: ['Acreditar que o mundo não possui valor', 'Reconhecer que toda a criação tem sua origem em Deus', 'Afirmar que a natureza não merece cuidado', 'Desconsiderar a vida humana'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-21',
    aula_id: 'aula-3',
    pergunta: 'Como podemos demonstrar que conhecemos o amor de Deus?',
    alternativas: ['Praticando o amor e a misericórdia', 'Desrespeitando as pessoas', 'Agindo com orgulho', 'Ignorando quem precisa de ajuda'],
    resposta_correta: 0,
  },

  // AULA 4 - Deus nos ama primeiro
  {
    id: 'atividade-22',
    aula_id: 'aula-4',
    pergunta: 'O amor de Deus depende de nossas conquistas?',
    alternativas: ['Sim, somente pessoas perfeitas são amadas', 'Sim, depende de nossa riqueza', 'Não, Deus nos ama gratuitamente', 'Sim, depende de nossa posição social'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-23',
    aula_id: 'aula-4',
    pergunta: 'O que significa dizer que Deus nos ama primeiro?',
    alternativas: ['Que precisamos merecer seu amor', 'Que sua iniciativa de amar não depende de nossos méritos', 'Que somente algumas pessoas são amadas', 'Que Deus espera que sejamos perfeitos'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-24',
    aula_id: 'aula-4',
    pergunta: 'Como Jesus demonstrava o amor de Deus?',
    alternativas: ['Rejeitando os necessitados', 'Acolhendo e ajudando as pessoas', 'Ignorando os pecadores', 'Valorizando apenas os ricos'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-25',
    aula_id: 'aula-4',
    pergunta: 'Qual atitude demonstra que compreendemos o amor de Deus?',
    alternativas: ['Compartilhar o amor com outras pessoas', 'Desprezar quem pensa diferente', 'Agir com egoísmo', 'Evitar ajudar os necessitados'],
    resposta_correta: 0,
  },
  {
    id: 'atividade-26',
    aula_id: 'aula-4',
    pergunta: 'O amor de Deus nos convida a:',
    alternativas: ['Viver sem responsabilidade', 'Ignorar os ensinamentos de Jesus', 'Transformar nossas atitudes por meio do bem', 'Buscar somente interesses pessoais'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-27',
    aula_id: 'aula-4',
    pergunta: 'O que a misericórdia de Deus representa?',
    alternativas: ['Ausência de amor', 'Acolhimento, perdão e compaixão', 'Rejeição das pessoas', 'Indiferença diante dos erros'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-28',
    aula_id: 'aula-4',
    pergunta: 'Qual é a melhor maneira de compartilhar o amor de Deus?',
    alternativas: ['Por meio de atitudes de respeito, perdão e solidariedade', 'Somente falando sobre religião', 'Evitando o contato com outras pessoas', 'Julgando os erros dos outros'],
    resposta_correta: 0,
  },

  // AULA 5 - A criação: dom de Deus
  {
    id: 'atividade-29',
    aula_id: 'aula-5',
    pergunta: 'Como a Bíblia apresenta a criação?',
    alternativas: ['Como algo sem importância', 'Como um presente de Deus confiado à humanidade', 'Como algo que não precisa de cuidado', 'Como uma realidade sem valor'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-30',
    aula_id: 'aula-5',
    pergunta: 'Qual livro da Bíblia apresenta a narrativa da criação?',
    alternativas: ['Apocalipse', 'Gênesis', 'Salmos', 'Atos dos Apóstolos'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-31',
    aula_id: 'aula-5',
    pergunta: 'Qual é a responsabilidade do ser humano diante da criação?',
    alternativas: ['Explorar os recursos sem limites', 'Destruir os ambientes naturais', 'Cuidar e preservar a natureza', 'Ignorar os problemas ambientais'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-32',
    aula_id: 'aula-5',
    pergunta: 'Qual atitude demonstra cuidado com a criação?',
    alternativas: ['Desperdiçar água', 'Jogar lixo nos rios', 'Evitar o desperdício e preservar a natureza', 'Destruir áreas verdes'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-33',
    aula_id: 'aula-5',
    pergunta: 'Por que devemos respeitar os animais e as plantas?',
    alternativas: ['Porque fazem parte da criação de Deus', 'Porque possuem valor apenas econômico', 'Porque não podem ser substituídos por máquinas', 'Porque não possuem relação com a vida humana'],
    resposta_correta: 0,
  },
  {
    id: 'atividade-34',
    aula_id: 'aula-5',
    pergunta: 'Cuidar do meio ambiente representa:',
    alternativas: ['Uma atitude sem relação com a fé', 'Uma forma de demonstrar gratidão ao Criador', 'Uma obrigação exclusiva dos governos', 'Uma atividade sem importância'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-35',
    aula_id: 'aula-5',
    pergunta: 'O que significa utilizar os recursos naturais de maneira consciente?',
    alternativas: ['Consumir sem considerar as consequências', 'Evitar qualquer utilização da natureza', 'Utilizar os recursos com responsabilidade e evitar desperdícios', 'Priorizar apenas o consumo individual'],
    resposta_correta: 2,
  },

  // AULA 6 - O ser humano criado à imagem de Deus
  {
    id: 'atividade-36',
    aula_id: 'aula-6',
    pergunta: 'O que significa ser criado à imagem e semelhança de Deus?',
    alternativas: ['Ter a mesma aparência física de Deus', 'Possuir dignidade e capacidade de amar e escolher', 'Ser superior a todas as pessoas', 'Não cometer erros'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-37',
    aula_id: 'aula-6',
    pergunta: 'Todas as pessoas possuem dignidade?',
    alternativas: ['Somente as pessoas religiosas', 'Somente as pessoas adultas', 'Sim, independentemente de suas diferenças', 'Somente as pessoas com boas condições financeiras'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-38',
    aula_id: 'aula-6',
    pergunta: 'Qual atitude respeita a dignidade humana?',
    alternativas: ['Praticar preconceito', 'Humilhar quem é diferente', 'Respeitar todas as pessoas', 'Ignorar quem precisa de ajuda'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-39',
    aula_id: 'aula-6',
    pergunta: 'O que nossa liberdade exige?',
    alternativas: ['Ausência de consequências', 'Responsabilidade pelas escolhas', 'Falta de respeito às regras', 'Direito de prejudicar os outros'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-40',
    aula_id: 'aula-6',
    pergunta: 'Como Jesus tratava as pessoas excluídas?',
    alternativas: ['Com desprezo', 'Com indiferença', 'Com acolhimento e respeito', 'Com discriminação'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-41',
    aula_id: 'aula-6',
    pergunta: 'Qual capacidade humana está relacionada à imagem de Deus?',
    alternativas: ['A capacidade de amar e construir relacionamentos', 'A capacidade de dominar outras pessoas', 'A ausência de sentimentos', 'A necessidade de competir sempre'],
    resposta_correta: 0,
  },
  {
    id: 'atividade-42',
    aula_id: 'aula-6',
    pergunta: 'Por que devemos valorizar a vida humana?',
    alternativas: ['Porque somente algumas vidas possuem importância', 'Porque cada pessoa possui dignidade diante de Deus', 'Porque todas as pessoas pensam da mesma maneira', 'Porque ninguém possui limitações'],
    resposta_correta: 1,
  },

  // AULA 7 - O pecado e o afastamento de Deus
  {
    id: 'atividade-43',
    aula_id: 'aula-7',
    pergunta: 'O que é o pecado segundo a fé cristã?',
    alternativas: ['Uma escolha contrária ao amor e à vontade de Deus', 'Uma atitude de solidariedade', 'Uma demonstração de respeito', 'Uma forma de oração'],
    resposta_correta: 0,
  },
  {
    id: 'atividade-44',
    aula_id: 'aula-7',
    pergunta: 'Qual história bíblica apresenta Adão e Eva?',
    alternativas: ['A multiplicação dos pães', 'A criação e a desobediência humana', 'O nascimento de Jesus', 'A saída do Egito'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-45',
    aula_id: 'aula-7',
    pergunta: 'Quais relações podem ser prejudicadas pelo pecado?',
    alternativas: ['Somente as relações profissionais', 'Somente as relações familiares', 'A relação com Deus, com o próximo e consigo mesmo', 'Apenas a relação com a natureza'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-46',
    aula_id: 'aula-7',
    pergunta: 'O que significa conversão?',
    alternativas: ['Ignorar os próprios erros', 'Reconhecer os erros e procurar mudar de atitude', 'Culpar sempre outras pessoas', 'Abandonar a comunidade'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-47',
    aula_id: 'aula-7',
    pergunta: 'O que Deus oferece ao ser humano mesmo diante do pecado?',
    alternativas: ['Somente condenação', 'Indiferença', 'Misericórdia, perdão e possibilidade de recomeço', 'Afastamento definitivo'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-48',
    aula_id: 'aula-7',
    pergunta: 'Qual atitude demonstra arrependimento?',
    alternativas: ['Repetir os erros sem preocupação', 'Reconhecer o erro e procurar reparar o dano', 'Esconder sempre a verdade', 'Culpar os outros'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-49',
    aula_id: 'aula-7',
    pergunta: 'Por meio de quem Deus oferece a salvação à humanidade?',
    alternativas: ['Por meio de Jesus Cristo', 'Por meio de reis antigos', 'Por meio dos bens materiais', 'Por meio da riqueza'],
    resposta_correta: 0,
  },

  // AULA 8 - Deus promete a salvação
  {
    id: 'atividade-50',
    aula_id: 'aula-8',
    pergunta: 'O que é a História da Salvação?',
    alternativas: ['A história dos reis de diferentes países', 'A história da relação de Deus com a humanidade', 'A história das guerras antigas', 'A história da criação das religiões'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-51',
    aula_id: 'aula-8',
    pergunta: 'Qual é a mensagem principal da promessa de salvação?',
    alternativas: ['Deus abandonou a humanidade', 'Deus deseja restaurar a relação com seus filhos', 'Somente algumas pessoas podem ser amadas', 'A humanidade não precisa de Deus'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-52',
    aula_id: 'aula-8',
    pergunta: 'Qual personagem bíblico recebeu de Deus a promessa de uma grande descendência?',
    alternativas: ['Abraão', 'Pilatos', 'Herodes', 'Judas'],
    resposta_correta: 0,
  },
  {
    id: 'atividade-53',
    aula_id: 'aula-8',
    pergunta: 'Quem conduziu o povo de Israel para fora do Egito?',
    alternativas: ['Davi', 'Moisés', 'Salomão', 'Pedro'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-54',
    aula_id: 'aula-8',
    pergunta: 'Qual era uma das missões dos profetas?',
    alternativas: ['Afastar o povo de Deus', 'Anunciar a mensagem divina e chamar à conversão', 'Construir exércitos', 'Substituir os sacerdotes'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-55',
    aula_id: 'aula-8',
    pergunta: 'Quem é apresentado pelos cristãos como o Salvador prometido?',
    alternativas: ['Moisés', 'Abraão', 'Jesus Cristo', 'João Batista'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-56',
    aula_id: 'aula-8',
    pergunta: 'O que a História da Salvação demonstra?',
    alternativas: ['Que Deus permanece fiel à humanidade', 'Que Deus não acompanha seu povo', 'Que a fé não possui importância', 'Que a salvação depende apenas de riquezas'],
    resposta_correta: 0,
  },

  // AULA 9 - A fé como resposta a Deus
  {
    id: 'atividade-57',
    aula_id: 'aula-9',
    pergunta: 'O que significa ter fé?',
    alternativas: ['Acreditar somente no que podemos ver', 'Confiar em Deus e procurar viver seus ensinamentos', 'Nunca ter dúvidas', 'Ignorar a Palavra de Deus'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-58',
    aula_id: 'aula-9',
    pergunta: 'Qual personagem bíblico é conhecido como exemplo de confiança em Deus?',
    alternativas: ['Abraão', 'Pilatos', 'Herodes', 'Judas'],
    resposta_correta: 0,
  },
  {
    id: 'atividade-59',
    aula_id: 'aula-9',
    pergunta: 'O que a história de Abraão nos ensina?',
    alternativas: ['Que devemos conhecer todas as respostas antes de agir', 'Que confiar em Deus exige fé e disponibilidade', 'Que devemos evitar mudanças', 'Que a fé não exige atitudes'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-60',
    aula_id: 'aula-9',
    pergunta: 'Como podemos demonstrar nossa fé no cotidiano?',
    alternativas: ['Agindo com honestidade e solidariedade', 'Mentindo para conseguir vantagens', 'Desrespeitando os outros', 'Ignorando as necessidades das pessoas'],
    resposta_correta: 0,
  },
  {
    id: 'atividade-61',
    aula_id: 'aula-9',
    pergunta: 'A fé exige disposição para:',
    alternativas: ['Aprender, confiar e reconhecer nossas limitações', 'Nunca escutar outras pessoas', 'Evitar qualquer responsabilidade', 'Desistir diante das dificuldades'],
    resposta_correta: 0,
  },
  {
    id: 'atividade-62',
    aula_id: 'aula-9',
    pergunta: 'Qual é a relação entre fé e atitudes?',
    alternativas: ['Não existe relação entre elas', 'A fé deve aparecer também nas atitudes', 'A fé depende somente de palavras', 'As atitudes não possuem importância'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-63',
    aula_id: 'aula-9',
    pergunta: 'O que significa responder ao chamado de Deus?',
    alternativas: ['Ignorar a vida em comunidade', 'Caminhar com fé, amor e responsabilidade', 'Fazer tudo sozinho', 'Evitar os ensinamentos de Jesus'],
    resposta_correta: 1,
  },

  // AULA 10 - A oração como diálogo com Deus
  {
    id: 'atividade-64',
    aula_id: 'aula-10',
    pergunta: 'O que é a oração?',
    alternativas: ['Uma obrigação sem significado', 'Uma forma de encontro e diálogo com Deus', 'Uma atividade exclusiva dos sacerdotes', 'Uma maneira de conseguir tudo o que desejamos'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-65',
    aula_id: 'aula-10',
    pergunta: 'O que podemos fazer durante a oração?',
    alternativas: ['Somente pedir coisas materiais', 'Agradecer, pedir ajuda e conversar com Deus', 'Pensar apenas em nossas conquistas', 'Ignorar os problemas dos outros'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-66',
    aula_id: 'aula-10',
    pergunta: 'Qual destas é uma oração tradicional ensinada na Igreja Católica?',
    alternativas: ['Pai-Nosso', 'Hino nacional', 'Juramento escolar', 'Código de leis'],
    resposta_correta: 0,
  },
  {
    id: 'atividade-67',
    aula_id: 'aula-10',
    pergunta: 'O que Jesus ensinou sobre a oração?',
    alternativas: ['Que devemos rezar somente em público', 'Que a oração fortalece nossa relação com o Pai', 'Que não precisamos conversar com Deus', 'Que a oração deve ser realizada apenas em datas especiais'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-68',
    aula_id: 'aula-10',
    pergunta: 'É possível rezar de diferentes maneiras?',
    alternativas: ['Não, existe apenas uma oração permitida', 'Sim, por meio de orações tradicionais, palavras próprias e silêncio', 'Somente utilizando livros', 'Apenas durante a missa'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-69',
    aula_id: 'aula-10',
    pergunta: 'A oração garante que todos os nossos desejos serão realizados?',
    alternativas: ['Sim, sempre', 'Somente quando rezamos muitas vezes', 'Não, ela nos ajuda a confiar em Deus e encontrar força', 'Sim, desde que rezemos em voz alta'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-70',
    aula_id: 'aula-10',
    pergunta: 'Qual atitude ajuda a desenvolver uma vida de oração?',
    alternativas: ['Reservar momentos para estar com Deus', 'Rezar somente quando precisamos de algo', 'Evitar momentos de silêncio', 'Abandonar a leitura da Bíblia'],
    resposta_correta: 0,
  },
];

export const activities = [
  // AULA 11 — O que é a Bíblia?
  {
    id: 'atividade-71',
    aula_id: 'aula-11',
    pergunta: 'O que é a Bíblia?',
    alternativas: [
      'Um livro de histórias inventadas',
      'A Palavra de Deus escrita por inspiração divina',
      'Um livro que fala apenas sobre Jesus',
      'Um conjunto de regras escolares'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-72',
    aula_id: 'aula-11',
    pergunta: 'Qual é a principal finalidade da Bíblia?',
    alternativas: [
      'Ensinar somente fatos históricos',
      'Substituir todos os livros de estudo',
      'Transmitir a mensagem de Deus e orientar a fé',
      'Contar histórias sem relação com a vida'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-73',
    aula_id: 'aula-11',
    pergunta: 'Quem inspirou os autores dos livros bíblicos?',
    alternativas: [
      'O Espírito Santo',
      'Os reis de Israel',
      'Os governantes romanos',
      'Os primeiros comerciantes'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-74',
    aula_id: 'aula-11',
    pergunta: 'A Bíblia é formada por quantos grandes testamentos?',
    alternativas: [
      'Um',
      'Três',
      'Quatro',
      'Dois'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-75',
    aula_id: 'aula-11',
    pergunta: 'Como podemos aproveitar melhor a leitura da Bíblia?',
    alternativas: [
      'Lendo sem prestar atenção',
      'Lendo, refletindo e procurando colocar seus ensinamentos em prática',
      'Decorando todas as páginas',
      'Lendo apenas quando somos obrigados'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-76',
    aula_id: 'aula-11',
    pergunta: 'Qual destes livros faz parte da Bíblia?',
    alternativas: [
      'O Pequeno Príncipe',
      'Dom Quixote',
      'Gênesis',
      'A Ilha do Tesouro'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-77',
    aula_id: 'aula-11',
    pergunta: 'Por que a Bíblia é importante para os cristãos?',
    alternativas: [
      'Porque ajuda a conhecer Deus e sua mensagem',
      'Porque apresenta somente regras antigas',
      'Porque substitui a oração',
      'Porque deve ser lida apenas pelos padres'
    ],
    resposta_correta: 0,
  },

  // AULA 12 — Antigo e Novo Testamento
  {
    id: 'atividade-78',
    aula_id: 'aula-12',
    pergunta: 'Em quais partes principais a Bíblia está dividida?',
    alternativas: [
      'Livros históricos e livros modernos',
      'Antigo e Novo Testamento',
      'Primeiro e segundo Evangelho',
      'Cartas e orações'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-79',
    aula_id: 'aula-12',
    pergunta: 'O que encontramos principalmente no Antigo Testamento?',
    alternativas: [
      'Somente a história dos apóstolos',
      'A vida de Jesus após a ressurreição',
      'A história do povo de Deus e a preparação para a vinda do Salvador',
      'A história da Igreja atual'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-80',
    aula_id: 'aula-12',
    pergunta: 'O que o Novo Testamento apresenta?',
    alternativas: [
      'A criação dos animais',
      'A história dos primeiros reis de Israel apenas',
      'Somente os Dez Mandamentos',
      'A vida, os ensinamentos de Jesus e o início da Igreja'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-81',
    aula_id: 'aula-12',
    pergunta: 'Qual livro abre o Antigo Testamento?',
    alternativas: [
      'Gênesis',
      'Mateus',
      'Apocalipse',
      'Atos dos Apóstolos'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-82',
    aula_id: 'aula-12',
    pergunta: 'Qual livro abre o Novo Testamento?',
    alternativas: [
      'Salmos',
      'Mateus',
      'Êxodo',
      'Gênesis'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-83',
    aula_id: 'aula-12',
    pergunta: 'Qual é a relação entre o Antigo e o Novo Testamento?',
    alternativas: [
      'Eles apresentam mensagens completamente sem relação',
      'O Novo Testamento substitui a necessidade de conhecer o Antigo',
      'Ambos fazem parte da história da salvação',
      'O Antigo Testamento não faz parte da Bíblia cristã'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-84',
    aula_id: 'aula-12',
    pergunta: 'Quantos Evangelhos existem no Novo Testamento?',
    alternativas: [
      'Dois',
      'Três',
      'Cinco',
      'Quatro'
    ],
    resposta_correta: 3,
  },

  // AULA 13 — Como encontrar uma passagem bíblica
  {
    id: 'atividade-85',
    aula_id: 'aula-13',
    pergunta: 'Como normalmente é indicada uma passagem bíblica?',
    alternativas: [
      'Pelo nome do livro, capítulo e versículo',
      'Pelo nome do autor e número da página apenas',
      'Pela data em que foi escrita',
      'Pelo tamanho do texto'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-86',
    aula_id: 'aula-13',
    pergunta: 'Na referência João 3,16, o número 3 representa:',
    alternativas: [
      'O terceiro livro da Bíblia',
      'O capítulo',
      'O versículo',
      'A página'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-87',
    aula_id: 'aula-13',
    pergunta: 'Na referência João 3,16, o número 16 representa:',
    alternativas: [
      'O capítulo',
      'O livro',
      'O versículo',
      'A quantidade de capítulos'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-88',
    aula_id: 'aula-13',
    pergunta: 'O que devemos fazer primeiro para encontrar uma passagem bíblica?',
    alternativas: [
      'Abrir em qualquer página e adivinhar',
      'Procurar somente pelo número do versículo',
      'Ler o último livro da Bíblia',
      'Localizar o livro indicado na referência'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-89',
    aula_id: 'aula-13',
    pergunta: 'O que significa a abreviação Gn em uma referência bíblica?',
    alternativas: [
      'Gênesis',
      'Gálatas',
      'Gênese dos Evangelhos',
      'Governo de Israel'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-90',
    aula_id: 'aula-13',
    pergunta: 'Por que é importante aprender a localizar passagens bíblicas?',
    alternativas: [
      'Para terminar a leitura mais rápido',
      'Para encontrar e estudar os textos com autonomia',
      'Para evitar a leitura dos textos completos',
      'Para decorar os números sem compreender a mensagem'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-91',
    aula_id: 'aula-13',
    pergunta: 'Ao encontrar uma passagem bíblica, qual atitude é mais adequada?',
    alternativas: [
      'Ignorar o contexto do texto',
      'Ler somente o título',
      'Ler com atenção e refletir sobre a mensagem',
      'Escolher apenas as palavras mais fáceis'
    ],
    resposta_correta: 2,
  },

  // AULA 14 — A Bíblia na vida do cristão
  {
    id: 'atividade-92',
    aula_id: 'aula-14',
    pergunta: 'Como a Bíblia pode ajudar na vida de um cristão?',
    alternativas: [
      'Ensinando a evitar todas as pessoas',
      'Mostrando que somente algumas pessoas merecem respeito',
      'Impedindo que o cristão faça perguntas',
      'Orientando escolhas e atitudes de acordo com a fé'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-93',
    aula_id: 'aula-14',
    pergunta: 'Qual atitude demonstra que alguém coloca a Palavra de Deus em prática?',
    alternativas: [
      'Ajudar quem precisa e tratar as pessoas com respeito',
      'Ignorar quem pensa diferente',
      'Desrespeitar os familiares',
      'Espalhar comentários ofensivos'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-94',
    aula_id: 'aula-14',
    pergunta: 'Qual é uma boa maneira de incluir a Bíblia na rotina?',
    alternativas: [
      'Ler apenas uma vez na vida',
      'Reservar momentos para ler e refletir sobre seus ensinamentos',
      'Deixar a Bíblia guardada sem nunca abrir',
      'Ler somente quando houver uma prova'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-95',
    aula_id: 'aula-14',
    pergunta: 'O que significa refletir sobre a Palavra de Deus?',
    alternativas: [
      'Contar quantas palavras existem no texto',
      'Ler sem pensar no significado',
      'Pensar sobre a mensagem e como aplicá-la à vida',
      'Memorizar o texto sem compreendê-lo'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-96',
    aula_id: 'aula-14',
    pergunta: 'Qual ensinamento de Jesus encontramos na Bíblia?',
    alternativas: [
      'A importância de buscar riquezas acima de tudo',
      'A necessidade de vencer todas as pessoas',
      'A obrigação de nunca ajudar desconhecidos',
      'O amor a Deus e ao próximo'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-97',
    aula_id: 'aula-14',
    pergunta: 'A leitura bíblica deve estar ligada a qual atitude?',
    alternativas: [
      'À oração e à prática do bem',
      'À competição com outras pessoas',
      'Ao julgamento dos outros',
      'À busca por reconhecimento'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-98',
    aula_id: 'aula-14',
    pergunta: 'Quando um ensinamento bíblico nos convida a perdoar, o que podemos fazer?',
    alternativas: [
      'Guardar ressentimento para sempre',
      'Buscar a reconciliação e agir com misericórdia',
      'Espalhar o conflito',
      'Ignorar a situação sem refletir'
    ],
    resposta_correta: 1,
  },

  // AULA 15 — Abraão e a confiança em Deus
  {
    id: 'atividade-99',
    aula_id: 'aula-15',
    pergunta: 'Por que Abraão é conhecido na tradição bíblica?',
    alternativas: [
      'Por ter construído o Templo de Jerusalém',
      'Por ter sido um dos apóstolos de Jesus',
      'Por sua fé e confiança em Deus',
      'Por ter escrito os quatro Evangelhos'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-100',
    aula_id: 'aula-15',
    pergunta: 'O que Deus pediu a Abraão?',
    alternativas: [
      'Que construísse uma grande cidade',
      'Que se tornasse rei do Egito',
      'Que abandonasse sua fé',
      'Que deixasse sua terra e partisse para a terra que Deus lhe mostraria'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-101',
    aula_id: 'aula-15',
    pergunta: 'Qual era o nome da esposa de Abraão?',
    alternativas: [
      'Sara',
      'Rebeca',
      'Raquel',
      'Ester'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-102',
    aula_id: 'aula-15',
    pergunta: 'Qual foi o filho de Abraão e Sara, anunciado por Deus?',
    alternativas: [
      'Jacó',
      'Isaac',
      'José',
      'Moisés'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-103',
    aula_id: 'aula-15',
    pergunta: 'O que podemos aprender com a história de Abraão?',
    alternativas: [
      'Que devemos desistir diante das dificuldades',
      'Que a fé elimina a necessidade de agir',
      'Que confiar em Deus também significa caminhar com esperança',
      'Que somente pessoas perfeitas podem ter fé'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-104',
    aula_id: 'aula-15',
    pergunta: 'Qual promessa Deus fez a Abraão?',
    alternativas: [
      'Que ele nunca enfrentaria dificuldades',
      'Que seria dono de todo o mundo',
      'Que viveria para sempre na mesma cidade',
      'Que sua descendência seria numerosa e uma bênção para muitos povos'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-105',
    aula_id: 'aula-15',
    pergunta: 'Como Abraão respondeu ao chamado de Deus?',
    alternativas: [
      'Com confiança e obediência',
      'Com indiferença',
      'Recusando qualquer mudança',
      'Procurando substituir Deus por outros deuses'
    ],
    resposta_correta: 0,
  },

  // AULA 16 — Moisés e a libertação do povo
  {
    id: 'atividade-106',
    aula_id: 'aula-16',
    pergunta: 'Qual povo Moisés foi chamado por Deus para libertar?',
    alternativas: [
      'Os romanos',
      'Os israelitas',
      'Os gregos',
      'Os persas'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-107',
    aula_id: 'aula-16',
    pergunta: 'Em qual país o povo hebreu vivia como escravo antes do Êxodo?',
    alternativas: [
      'Babilônia',
      'Grécia',
      'Egito',
      'Roma'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-108',
    aula_id: 'aula-16',
    pergunta: 'Como Deus chamou a atenção de Moisés no deserto?',
    alternativas: [
      'Por meio de uma tempestade',
      'Por meio de um rio que secou',
      'Por meio de uma estrela',
      'Por meio de uma sarça que ardia sem se consumir'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-109',
    aula_id: 'aula-16',
    pergunta: 'Qual é o nome da saída dos israelitas do Egito?',
    alternativas: [
      'Êxodo',
      'Pentecostes',
      'Ressurreição',
      'Ascensão'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-110',
    aula_id: 'aula-16',
    pergunta: 'Quem era o governante do Egito que resistiu à libertação dos israelitas?',
    alternativas: [
      'César',
      'Faraó',
      'Herodes',
      'Salomão'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-111',
    aula_id: 'aula-16',
    pergunta: 'O que a história de Moisés ensina sobre Deus?',
    alternativas: [
      'Que Deus abandona quem sofre',
      'Que Deus se preocupa apenas com os governantes',
      'Que Deus ouve o sofrimento de seu povo e o acompanha',
      'Que a liberdade não tem importância'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-112',
    aula_id: 'aula-16',
    pergunta: 'Qual atitude de Moisés foi importante para sua missão?',
    alternativas: [
      'Pensar somente em seus próprios interesses',
      'Ignorar o chamado recebido',
      'Desistir de ajudar o povo',
      'Aceitar a missão de conduzir o povo à liberdade'
    ],
    resposta_correta: 3,
  },

  // AULA 17 — Os Dez Mandamentos
  {
    id: 'atividade-113',
    aula_id: 'aula-17',
    pergunta: 'Segundo a tradição bíblica, quem recebeu os Dez Mandamentos de Deus?',
    alternativas: [
      'Moisés',
      'Abraão',
      'Davi',
      'Pedro'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-114',
    aula_id: 'aula-17',
    pergunta: 'Onde Moisés recebeu os Dez Mandamentos?',
    alternativas: [
      'No Monte das Oliveiras',
      'No Monte Sinai',
      'Em Belém',
      'No Rio Jordão'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-115',
    aula_id: 'aula-17',
    pergunta: 'Qual é o principal objetivo dos Dez Mandamentos?',
    alternativas: [
      'Criar competição entre as pessoas',
      'Impedir qualquer tipo de convivência',
      'Orientar a relação com Deus e com o próximo',
      'Garantir riqueza a todos'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-116',
    aula_id: 'aula-17',
    pergunta: 'Qual mandamento ensina a respeitar pai e mãe?',
    alternativas: [
      'Não matarás',
      'Não furtarás',
      'Não levantarás falso testemunho',
      'Honrar pai e mãe'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-117',
    aula_id: 'aula-17',
    pergunta: 'Qual atitude está de acordo com os Dez Mandamentos?',
    alternativas: [
      'Dizer a verdade e respeitar os outros',
      'Mentir para conseguir vantagens',
      'Pegar algo que pertence a outra pessoa',
      'Tratar as pessoas com injustiça'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-118',
    aula_id: 'aula-17',
    pergunta: 'Os três primeiros mandamentos estão relacionados principalmente a:',
    alternativas: [
      'O trabalho e o descanso',
      'O amor e o respeito a Deus',
      'A alimentação',
      'A organização das cidades'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-119',
    aula_id: 'aula-17',
    pergunta: 'Como os cristãos devem viver os mandamentos?',
    alternativas: [
      'Somente quando alguém estiver observando',
      'Apenas durante as celebrações religiosas',
      'Com amor, responsabilidade e respeito no dia a dia',
      'Somente quando for conveniente'
    ],
    resposta_correta: 2,
  },

  // AULA 18 — Os profetas e a voz de Deus
  {
    id: 'atividade-120',
    aula_id: 'aula-18',
    pergunta: 'Qual era a missão dos profetas na Bíblia?',
    alternativas: [
      'Governar todos os povos',
      'Construir cidades e palácios',
      'Criar novas religiões',
      'Transmitir a mensagem de Deus e chamar o povo à fidelidade'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-121',
    aula_id: 'aula-18',
    pergunta: 'Qual destes personagens é um profeta bíblico?',
    alternativas: [
      'Isaías',
      'Pilatos',
      'Herodes',
      'Caifás'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-122',
    aula_id: 'aula-18',
    pergunta: 'O que os profetas denunciavam quando o povo se afastava de Deus?',
    alternativas: [
      'A prática da oração',
      'A injustiça e a falta de fidelidade',
      'A ajuda aos necessitados',
      'O respeito entre as pessoas'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-123',
    aula_id: 'aula-18',
    pergunta: 'Qual profeta foi chamado por Deus ainda jovem?',
    alternativas: [
      'Jonas',
      'Elias',
      'Jeremias',
      'Daniel'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-124',
    aula_id: 'aula-18',
    pergunta: 'O que significa ser uma voz profética nos dias de hoje?',
    alternativas: [
      'Prever todos os acontecimentos futuros',
      'Falar apenas sobre assuntos religiosos',
      'Criticar todas as pessoas',
      'Defender a justiça, a verdade e a dignidade humana'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-125',
    aula_id: 'aula-18',
    pergunta: 'Qual era uma das mensagens frequentes dos profetas?',
    alternativas: [
      'Voltar para Deus e praticar a justiça',
      'Buscar poder acima de tudo',
      'Ignorar os mais pobres',
      'Abandonar a comunidade'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-126',
    aula_id: 'aula-18',
    pergunta: 'Como podemos ouvir a mensagem de Deus transmitida pelos profetas?',
    alternativas: [
      'Ignorando os ensinamentos bíblicos',
      'Lendo suas mensagens e refletindo sobre elas',
      'Procurando apenas histórias de reis',
      'Evitando qualquer reflexão sobre justiça'
    ],
    resposta_correta: 1,
  },

  // AULA 19 — Maria no plano de Deus
  {
    id: 'atividade-127',
    aula_id: 'aula-19',
    pergunta: 'Quem é Maria na fé cristã?',
    alternativas: [
      'Uma das primeiras apóstolas de Jesus',
      'A esposa de São Pedro',
      'A mãe de Jesus',
      'A irmã de João Batista'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-128',
    aula_id: 'aula-19',
    pergunta: 'Como Maria respondeu ao anúncio do anjo Gabriel?',
    alternativas: [
      'Recusou imediatamente',
      'Pediu para ser rainha',
      'Ignorou a mensagem',
      'Aceitou com fé e confiança na vontade de Deus'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-129',
    aula_id: 'aula-19',
    pergunta: 'Qual oração recorda o anúncio do anjo Gabriel a Maria?',
    alternativas: [
      'O Angelus',
      'O Credo de Niceia',
      'O Salmo 23',
      'O Glória'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-130',
    aula_id: 'aula-19',
    pergunta: 'Qual virtude de Maria é destacada no anúncio do anjo?',
    alternativas: [
      'O orgulho',
      'A humildade e a disponibilidade',
      'A busca por riquezas',
      'A vontade de poder'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-131',
    aula_id: 'aula-19',
    pergunta: 'Qual é o significado de Maria ser chamada de Mãe de Deus?',
    alternativas: [
      'Que Maria criou Deus',
      'Que Maria é uma deusa',
      'Que aquele que nasceu dela é Jesus Cristo, verdadeiro Deus e verdadeiro homem',
      'Que Maria existia antes de Deus'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-132',
    aula_id: 'aula-19',
    pergunta: 'O que Maria fez ao visitar sua prima Isabel?',
    alternativas: [
      'Foi pedir ajuda financeira',
      'Organizou uma festa para os discípulos',
      'Levou uma mensagem aos apóstolos',
      'Foi ao encontro de Isabel para ajudá-la e compartilhar sua alegria'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-133',
    aula_id: 'aula-19',
    pergunta: 'O que os cristãos podem aprender com Maria?',
    alternativas: [
      'A confiar em Deus e servir com amor',
      'A buscar reconhecimento acima de tudo',
      'A evitar ajudar outras pessoas',
      'A agir somente quando recebem recompensas'
    ],
    resposta_correta: 0,
  },

  // AULA 20 — A promessa do Salvador
  {
    id: 'atividade-134',
    aula_id: 'aula-20',
    pergunta: 'Quem é o Salvador prometido por Deus?',
    alternativas: [
      'Moisés',
      'Jesus Cristo',
      'Abraão',
      'João Batista'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-135',
    aula_id: 'aula-20',
    pergunta: 'Qual era a esperança do povo de Deus anunciada pelos profetas?',
    alternativas: [
      'A chegada de um novo rei que conquistaria todos os povos pela força',
      'A construção de um novo templo em Roma',
      'A vinda do Messias, que traria salvação',
      'O desaparecimento de todas as comunidades'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-136',
    aula_id: 'aula-20',
    pergunta: 'O que significa a palavra Messias?',
    alternativas: [
      'Mensageiro dos reis',
      'Construtor de templos',
      'Chefe dos soldados',
      'Ungido'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-137',
    aula_id: 'aula-20',
    pergunta: 'Qual profeta anunciou que o Messias nasceria em Belém?',
    alternativas: [
      'Miqueias',
      'Jonas',
      'Elias',
      'Samuel'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-138',
    aula_id: 'aula-20',
    pergunta: 'O que a promessa do Salvador revela sobre Deus?',
    alternativas: [
      'Que Deus abandona seu povo nas dificuldades',
      'Que Deus é fiel às suas promessas e deseja salvar seu povo',
      'Que Deus não se importa com a humanidade',
      'Que a salvação depende apenas da riqueza'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-139',
    aula_id: 'aula-20',
    pergunta: 'Qual é a relação entre a promessa do Salvador e o nascimento de Jesus?',
    alternativas: [
      'São acontecimentos sem relação',
      'Jesus foi escolhido somente por seus discípulos',
      'O nascimento de Jesus é reconhecido pelos cristãos como cumprimento da promessa de Deus',
      'A promessa foi cancelada antes do nascimento de Jesus'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-140',
    aula_id: 'aula-20',
    pergunta: 'Qual deve ser a resposta dos cristãos à promessa de salvação?',
    alternativas: [
      'A indiferença',
      'O medo de conhecer a Deus',
      'A rejeição ao próximo',
      'A fé, a esperança e a vivência do amor'
    ],
    resposta_correta: 3,
  },
];

export const activities = [
  // AULA 21 — Quem é Jesus Cristo?
  {
    id: 'atividade-141',
    aula_id: 'aula-21',
    pergunta: 'Quem é Jesus Cristo para os cristãos?',
    alternativas: [
      'Um profeta que viveu na Grécia',
      'Um rei que governou Roma',
      'O Filho de Deus e Salvador da humanidade',
      'Um dos primeiros apóstolos'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-142',
    aula_id: 'aula-21',
    pergunta: 'Quem é a mãe de Jesus?',
    alternativas: [
      'Isabel',
      'Marta',
      'Maria Madalena',
      'Maria'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-143',
    aula_id: 'aula-21',
    pergunta: 'Em qual cidade Jesus cresceu?',
    alternativas: [
      'Nazaré',
      'Belém',
      'Jerusalém',
      'Roma'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-144',
    aula_id: 'aula-21',
    pergunta: 'Qual é o significado do nome Emanuel, associado a Jesus?',
    alternativas: [
      'Rei dos reis',
      'Deus conosco',
      'Salvador dos romanos',
      'Mensageiro do templo'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-145',
    aula_id: 'aula-21',
    pergunta: 'Qual característica marcou a maneira de Jesus tratar as pessoas?',
    alternativas: [
      'O orgulho e a indiferença',
      'A busca por riquezas',
      'O amor, a misericórdia e a acolhida',
      'A preferência apenas pelos poderosos'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-146',
    aula_id: 'aula-21',
    pergunta: 'Qual é a principal mensagem da missão de Jesus?',
    alternativas: [
      'Ensinar as pessoas a buscar poder',
      'Criar um reino baseado em riquezas',
      'Separar as pessoas por sua condição social',
      'Anunciar o amor de Deus e a salvação'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-147',
    aula_id: 'aula-21',
    pergunta: 'Segundo a fé cristã, Jesus é:',
    alternativas: [
      'Verdadeiro Deus e verdadeiro homem',
      'Apenas um personagem simbólico',
      'Um anjo enviado por Deus',
      'Um governante do Império Romano'
    ],
    resposta_correta: 0,
  },

  // AULA 22 — O nascimento de Jesus
  {
    id: 'atividade-148',
    aula_id: 'aula-22',
    pergunta: 'Em qual cidade Jesus nasceu?',
    alternativas: [
      'Nazaré',
      'Belém',
      'Jerusalém',
      'Cafarnaum'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-149',
    aula_id: 'aula-22',
    pergunta: 'Quem eram os pais de Jesus na vida terrena?',
    alternativas: [
      'Abraão e Sara',
      'Zacarias e Isabel',
      'Maria e José',
      'Marta e Lázaro'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-150',
    aula_id: 'aula-22',
    pergunta: 'Onde Jesus foi colocado após seu nascimento?',
    alternativas: [
      'Em um trono',
      'Em uma cama de ouro',
      'Em um barco',
      'Em uma manjedoura'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-151',
    aula_id: 'aula-22',
    pergunta: 'Quem recebeu o anúncio do nascimento de Jesus nos campos?',
    alternativas: [
      'Os pastores',
      'Os soldados romanos',
      'Os comerciantes',
      'Os pescadores'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-152',
    aula_id: 'aula-22',
    pergunta: 'O que guiou os Magos até Jesus, segundo o relato bíblico?',
    alternativas: [
      'Uma coluna de fumaça',
      'Uma estrela',
      'Um rio',
      'Uma nuvem escura'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-153',
    aula_id: 'aula-22',
    pergunta: 'Qual é o significado da celebração do Natal para os cristãos?',
    alternativas: [
      'Comemorar o início do ano civil',
      'Celebrar a chegada dos Magos',
      'Celebrar o nascimento de Jesus',
      'Recordar a construção do primeiro templo'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-154',
    aula_id: 'aula-22',
    pergunta: 'O que a simplicidade do nascimento de Jesus nos ensina?',
    alternativas: [
      'Que somente pessoas importantes são amadas por Deus',
      'Que a riqueza é necessária para encontrar Deus',
      'Que devemos valorizar apenas as aparências',
      'Que a humildade e o amor são mais importantes que a riqueza'
    ],
    resposta_correta: 3,
  },

  // AULA 23 — Jesus anuncia o Reino de Deus
  {
    id: 'atividade-155',
    aula_id: 'aula-23',
    pergunta: 'O que significa o Reino de Deus na mensagem de Jesus?',
    alternativas: [
      'A presença e a ação de Deus, marcada pelo amor, justiça e paz',
      'Um território governado por soldados',
      'Um reino construído com riquezas',
      'Um lugar reservado apenas aos governantes'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-156',
    aula_id: 'aula-23',
    pergunta: 'Qual foi uma das principais mensagens anunciadas por Jesus?',
    alternativas: [
      'A importância de conquistar poder',
      'A conversão e a proximidade do Reino de Deus',
      'A necessidade de acumular bens',
      'A separação entre pessoas pobres e ricas'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-157',
    aula_id: 'aula-23',
    pergunta: 'Qual atitude ajuda a construir o Reino de Deus no cotidiano?',
    alternativas: [
      'Espalhar desentendimentos',
      'Ignorar quem precisa de ajuda',
      'Praticar a justiça, a solidariedade e o amor',
      'Buscar vantagens prejudicando os outros'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-158',
    aula_id: 'aula-23',
    pergunta: 'A quem Jesus dava atenção especial em sua missão?',
    alternativas: [
      'Somente aos líderes políticos',
      'Apenas aos comerciantes',
      'Somente aos ricos',
      'Aos pobres, doentes, excluídos e necessitados'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-159',
    aula_id: 'aula-23',
    pergunta: 'O que Jesus ensinava sobre o perdão?',
    alternativas: [
      'Que devemos estar dispostos a perdoar e buscar a reconciliação',
      'Que nunca devemos perdoar',
      'Que o perdão só vale para amigos',
      'Que devemos guardar ressentimento'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-160',
    aula_id: 'aula-23',
    pergunta: 'O Reino de Deus começa a ser vivido:',
    alternativas: [
      'Somente depois da morte',
      'Também nas atitudes de amor e justiça realizadas no presente',
      'Apenas dentro dos templos',
      'Somente por pessoas que ocupam cargos religiosos'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-161',
    aula_id: 'aula-23',
    pergunta: 'Qual frase resume o anúncio de Jesus sobre o Reino de Deus?',
    alternativas: [
      'Cada pessoa deve cuidar apenas de si',
      'O mais importante é vencer os outros',
      'Deus chama todos a viver no amor e na fraternidade',
      'A riqueza é o caminho para a felicidade'
    ],
    resposta_correta: 2,
  },

  // AULA 24 — As parábolas de Jesus
  {
    id: 'atividade-162',
    aula_id: 'aula-24',
    pergunta: 'O que são as parábolas de Jesus?',
    alternativas: [
      'Leis escritas pelos apóstolos',
      'Orações usadas somente nas missas',
      'Relatos históricos sobre os reis',
      'Histórias simples que ensinam mensagens espirituais'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-163',
    aula_id: 'aula-24',
    pergunta: 'Qual parábola ensina sobre a importância de ajudar quem precisa, independentemente de quem seja?',
    alternativas: [
      'O Bom Samaritano',
      'O Filho Pródigo',
      'Os Trabalhadores da Vinha',
      'O Semeador'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-164',
    aula_id: 'aula-24',
    pergunta: 'Na parábola do Filho Pródigo, qual atitude do pai representa o amor misericordioso?',
    alternativas: [
      'Recusar-se a ouvir o filho',
      'Receber o filho de volta com alegria e perdão',
      'Exigir que o filho nunca mais voltasse',
      'Expulsar o filho de casa'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-165',
    aula_id: 'aula-24',
    pergunta: 'Na parábola do Semeador, o que representa a semente?',
    alternativas: [
      'A riqueza material',
      'A força dos soldados',
      'A Palavra de Deus',
      'O poder dos governantes'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-166',
    aula_id: 'aula-24',
    pergunta: 'Qual é o objetivo das parábolas de Jesus?',
    alternativas: [
      'Confundir as pessoas',
      'Contar histórias sem ensinamentos',
      'Apresentar regras sem explicação',
      'Ajudar as pessoas a compreender verdades sobre Deus e a vida'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-167',
    aula_id: 'aula-24',
    pergunta: 'O que podemos aprender com a parábola da ovelha perdida?',
    alternativas: [
      'Que Deus se importa com cada pessoa e deseja acolhê-la',
      'Que algumas pessoas não merecem cuidado',
      'Que devemos abandonar quem erra',
      'Que somente os fortes são importantes'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-168',
    aula_id: 'aula-24',
    pergunta: 'Como podemos aprender com as parábolas de Jesus?',
    alternativas: [
      'Decorando apenas os nomes dos personagens',
      'Identificando a mensagem e aplicando-a em nossas atitudes',
      'Ignorando os ensinamentos',
      'Lendo sem refletir sobre o significado'
    ],
    resposta_correta: 1,
  },

  // AULA 25 — Os milagres de Jesus
  {
    id: 'atividade-169',
    aula_id: 'aula-25',
    pergunta: 'O que os milagres de Jesus revelam?',
    alternativas: [
      'O desejo de Jesus de ser famoso',
      'A superioridade de algumas pessoas',
      'O amor, a compaixão e o poder de Deus',
      'A importância das riquezas'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-170',
    aula_id: 'aula-25',
    pergunta: 'Qual foi um dos milagres realizados por Jesus em uma festa de casamento?',
    alternativas: [
      'A cura de um cego',
      'A multiplicação dos peixes',
      'A caminhada sobre o mar',
      'A transformação da água em vinho'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-171',
    aula_id: 'aula-25',
    pergunta: 'O que Jesus fez ao encontrar uma multidão com fome?',
    alternativas: [
      'Multiplicou pães e peixes para alimentar a multidão',
      'Mandou todos voltarem para casa sem comer',
      'Pediu que somente os ricos fossem alimentados',
      'Ignorou a necessidade das pessoas'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-172',
    aula_id: 'aula-25',
    pergunta: 'Qual atitude de Jesus aparece em muitos relatos de cura?',
    alternativas: [
      'Indiferença diante do sofrimento',
      'Compaixão por quem precisava de ajuda',
      'Busca por reconhecimento público',
      'Distanciamento dos necessitados'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-173',
    aula_id: 'aula-25',
    pergunta: 'Segundo os Evangelhos, o que Jesus fez diante da tempestade no mar?',
    alternativas: [
      'Abandonou os discípulos',
      'Pediu que todos saltassem do barco',
      'Acalmou o vento e o mar',
      'Construiu outro barco'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-174',
    aula_id: 'aula-25',
    pergunta: 'Os milagres de Jesus devem ser compreendidos como:',
    alternativas: [
      'Apresentações para divertir as pessoas',
      'Histórias sem relação com a fé',
      'Demonstrações de riqueza',
      'Sinais do Reino de Deus e de sua compaixão'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-175',
    aula_id: 'aula-25',
    pergunta: 'Qual deve ser nossa atitude diante dos ensinamentos de Jesus sobre cuidar dos necessitados?',
    alternativas: [
      'Praticar a solidariedade e ajudar conforme nossas possibilidades',
      'Esperar que outras pessoas resolvam tudo',
      'Ignorar o sofrimento ao nosso redor',
      'Ajudar somente quando houver recompensa'
    ],
    resposta_correta: 0,
  },

  // AULA 26 — Jesus chama discípulos
  {
    id: 'atividade-176',
    aula_id: 'aula-26',
    pergunta: 'O que significa ser discípulo de Jesus?',
    alternativas: [
      'Ser apenas alguém que conhece histórias bíblicas',
      'Seguir seus ensinamentos e procurar viver como Ele ensinou',
      'Ser obrigatoriamente um líder político',
      'Viver sem se relacionar com outras pessoas'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-177',
    aula_id: 'aula-26',
    pergunta: 'Quantos apóstolos Jesus escolheu de maneira especial?',
    alternativas: [
      'Sete',
      'Dez',
      'Doze',
      'Quinze'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-178',
    aula_id: 'aula-26',
    pergunta: 'Qual era a profissão de Pedro e André antes de seguirem Jesus?',
    alternativas: [
      'Agricultores',
      'Soldados',
      'Carpinteiros',
      'Pescadores'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-179',
    aula_id: 'aula-26',
    pergunta: 'O que Jesus pediu aos primeiros discípulos que eram pescadores?',
    alternativas: [
      'Que o seguissem e se tornassem pescadores de pessoas',
      'Que abandonassem toda convivência',
      'Que construíssem um palácio',
      'Que se tornassem governantes'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-180',
    aula_id: 'aula-26',
    pergunta: 'Qual discípulo era conhecido como cobrador de impostos antes de seguir Jesus?',
    alternativas: [
      'João',
      'Mateus',
      'Pedro',
      'André'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-181',
    aula_id: 'aula-26',
    pergunta: 'Qual atitude é importante para quem deseja seguir Jesus?',
    alternativas: [
      'Buscar vantagens pessoais em tudo',
      'Desprezar quem pensa diferente',
      'Ter fé, disposição para aprender e servir ao próximo',
      'Evitar qualquer compromisso com a comunidade'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-182',
    aula_id: 'aula-26',
    pergunta: 'O chamado de Jesus é dirigido:',
    alternativas: [
      'Somente aos doze apóstolos',
      'Apenas aos religiosos',
      'Somente aos adultos',
      'A todas as pessoas que desejam segui-lo'
    ],
    resposta_correta: 3,
  },

  // AULA 27 — O mandamento do amor
  {
    id: 'atividade-183',
    aula_id: 'aula-27',
    pergunta: 'Qual é o principal mandamento ensinado por Jesus?',
    alternativas: [
      'Amar a Deus e ao próximo',
      'Buscar riquezas acima de tudo',
      'Nunca conversar com desconhecidos',
      'Ser superior às outras pessoas'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-184',
    aula_id: 'aula-27',
    pergunta: 'Segundo Jesus, como devemos amar o próximo?',
    alternativas: [
      'Somente quando ele pensa igual a nós',
      'Como a nós mesmos',
      'Apenas quando recebemos algo em troca',
      'Somente quando somos observados'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-185',
    aula_id: 'aula-27',
    pergunta: 'Qual atitude demonstra o mandamento do amor?',
    alternativas: [
      'Espalhar fofocas',
      'Ignorar quem está triste',
      'Ajudar alguém que precisa de apoio',
      'Desrespeitar as diferenças'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-186',
    aula_id: 'aula-27',
    pergunta: 'O amor cristão deve ser praticado:',
    alternativas: [
      'Somente com familiares',
      'Apenas com pessoas conhecidas',
      'Somente durante a missa',
      'Com todas as pessoas, por meio de atitudes concretas'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-187',
    aula_id: 'aula-27',
    pergunta: 'Qual é a relação entre amar a Deus e amar o próximo?',
    alternativas: [
      'O amor a Deus deve se refletir no cuidado com as pessoas',
      'São atitudes que não têm relação',
      'Amar a Deus dispensa respeitar os outros',
      'O amor ao próximo é importante apenas em datas especiais'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-188',
    aula_id: 'aula-27',
    pergunta: 'Qual atitude contraria o mandamento do amor?',
    alternativas: [
      'Acolher quem está sozinho',
      'Humilhar alguém por suas diferenças',
      'Compartilhar o que temos',
      'Respeitar a opinião dos outros'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-189',
    aula_id: 'aula-27',
    pergunta: 'Como podemos viver o mandamento do amor na escola?',
    alternativas: [
      'Excluindo colegas',
      'Participando de brincadeiras que machucam os outros',
      'Respeitando os colegas e ajudando quem precisa',
      'Ignorando situações de injustiça'
    ],
    resposta_correta: 2,
  },

  // AULA 28 — Jesus e o perdão
  {
    id: 'atividade-190',
    aula_id: 'aula-28',
    pergunta: 'O que Jesus ensinou sobre o perdão?',
    alternativas: [
      'Que devemos perdoar somente uma vez',
      'Que o perdão é sinal de fraqueza',
      'Que nunca devemos conversar após um conflito',
      'Que devemos estar dispostos a perdoar com sinceridade'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-191',
    aula_id: 'aula-28',
    pergunta: 'Na oração do Pai-Nosso, pedimos a Deus que:',
    alternativas: [
      'Perdoe nossas ofensas assim como perdoamos a quem nos ofendeu',
      'Castigue todas as pessoas que erram',
      'Nos torne superiores aos outros',
      'Afaste de nós todas as responsabilidades'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-192',
    aula_id: 'aula-28',
    pergunta: 'Qual parábola de Jesus apresenta um pai que acolhe o filho arrependido?',
    alternativas: [
      'O Semeador',
      'O Filho Pródigo',
      'O Bom Samaritano',
      'A Ovelha Perdida'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-193',
    aula_id: 'aula-28',
    pergunta: 'O que significa perdoar alguém?',
    alternativas: [
      'Fingir que nada aconteceu em qualquer situação',
      'Aceitar que outras pessoas continuem fazendo mal',
      'Escolher não alimentar o ressentimento e buscar a reconciliação quando possível',
      'Esquecer todas as responsabilidades'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-194',
    aula_id: 'aula-28',
    pergunta: 'Quando cometemos um erro contra alguém, qual atitude demonstra arrependimento?',
    alternativas: [
      'Culpar outra pessoa',
      'Esconder o que aconteceu',
      'Repetir o mesmo erro sem refletir',
      'Reconhecer o erro, pedir desculpas e procurar mudar'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-195',
    aula_id: 'aula-28',
    pergunta: 'O perdão cristão significa que devemos aceitar situações de violência ou injustiça?',
    alternativas: [
      'Não. É possível perdoar e também buscar proteção e justiça',
      'Sim, devemos aceitar qualquer situação',
      'Sim, porque pedir ajuda demonstra falta de fé',
      'Não, porque o perdão nunca deve acontecer'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-196',
    aula_id: 'aula-28',
    pergunta: 'Qual é um fruto importante do perdão?',
    alternativas: [
      'Aumentar os conflitos',
      'Favorecer a paz e a reconstrução dos relacionamentos',
      'Criar novas rivalidades',
      'Impedir qualquer diálogo'
    ],
    resposta_correta: 1,
  },

  // AULA 29 — A Última Ceia
  {
    id: 'atividade-197',
    aula_id: 'aula-29',
    pergunta: 'O que foi a Última Ceia?',
    alternativas: [
      'Uma festa organizada pelos reis de Israel',
      'A primeira missa celebrada em Roma',
      'A refeição que Jesus partilhou com seus discípulos antes de sua paixão',
      'Uma celebração realizada após a ressurreição'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-198',
    aula_id: 'aula-29',
    pergunta: 'Quais elementos Jesus tomou durante a Última Ceia e relacionou à Eucaristia?',
    alternativas: [
      'Água e azeite',
      'Peixe e mel',
      'Frutas e leite',
      'Pão e vinho'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-199',
    aula_id: 'aula-29',
    pergunta: 'O que Jesus instituiu durante a Última Ceia?',
    alternativas: [
      'A Eucaristia',
      'O batismo de João',
      'A construção do Templo',
      'A festa de Pentecostes'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-200',
    aula_id: 'aula-29',
    pergunta: 'Qual gesto de Jesus durante a Última Ceia ensinou sobre o serviço?',
    alternativas: [
      'A entrega de uma coroa',
      'O lava-pés dos discípulos',
      'A construção de uma mesa',
      'A escolha de um novo rei'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-201',
    aula_id: 'aula-29',
    pergunta: 'O que Jesus pediu aos discípulos ao partilhar o pão?',
    alternativas: [
      'Que guardassem o pão para si',
      'Que deixassem de se reunir',
      'Que fizessem aquilo em sua memória',
      'Que abandonassem a comunidade'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-202',
    aula_id: 'aula-29',
    pergunta: 'Qual é uma mensagem importante da Última Ceia?',
    alternativas: [
      'A importância de acumular alimentos',
      'A necessidade de buscar posições de poder',
      'A separação entre os discípulos',
      'O amor, a partilha e o serviço'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-203',
    aula_id: 'aula-29',
    pergunta: 'Qual sacramento está especialmente ligado à Última Ceia?',
    alternativas: [
      'Eucaristia',
      'Matrimônio',
      'Crisma',
      'Unção dos Enfermos'
    ],
    resposta_correta: 0,
  },

  // AULA 30 — Paixão, morte e ressurreição de Jesus
  {
    id: 'atividade-204',
    aula_id: 'aula-30',
    pergunta: 'O que os cristãos celebram na Páscoa?',
    alternativas: [
      'O nascimento de Jesus',
      'A ressurreição de Jesus',
      'O início da criação',
      'A chegada dos Reis Magos'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-205',
    aula_id: 'aula-30',
    pergunta: 'O que significa a palavra Paixão na expressão Paixão de Cristo?',
    alternativas: [
      'A alegria do nascimento de Jesus',
      'A escolha dos primeiros discípulos',
      'O sofrimento e os acontecimentos que antecederam a morte de Jesus',
      'A viagem de Jesus para Nazaré'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-206',
    aula_id: 'aula-30',
    pergunta: 'Em qual dia da Semana Santa os cristãos recordam especialmente a Última Ceia?',
    alternativas: [
      'Domingo de Ramos',
      'Sexta-feira Santa',
      'Sábado Santo',
      'Quinta-feira Santa'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-207',
    aula_id: 'aula-30',
    pergunta: 'O que é recordado na Sexta-feira Santa?',
    alternativas: [
      'A paixão e a morte de Jesus na cruz',
      'O nascimento de Jesus',
      'A visita dos pastores',
      'A chegada do Espírito Santo em Pentecostes'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-208',
    aula_id: 'aula-30',
    pergunta: 'O que a ressurreição de Jesus representa para a fé cristã?',
    alternativas: [
      'O fim da esperança',
      'A vitória da vida sobre a morte e a esperança da salvação',
      'A derrota dos discípulos',
      'O encerramento da missão de Jesus'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-209',
    aula_id: 'aula-30',
    pergunta: 'Quem anunciou às mulheres que Jesus havia ressuscitado, segundo os relatos dos Evangelhos?',
    alternativas: [
      'Os soldados romanos',
      'Os comerciantes de Jerusalém',
      'Os anjos',
      'Os reis da região'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-210',
    aula_id: 'aula-30',
    pergunta: 'Qual mensagem a ressurreição de Jesus transmite aos cristãos?',
    alternativas: [
      'Que devemos viver com medo',
      'Que o amor não transforma a vida',
      'Que a esperança não tem importância',
      'Que a vida, a fé e a esperança vencem o desânimo'
    ],
    resposta_correta: 3,
  },
];

export const activities = [
  // AULA 31 — O que é a Igreja?
  {
    id: 'atividade-211',
    aula_id: 'aula-31',
    pergunta: 'O que é a Igreja para os cristãos?',
    alternativas: [
      'Apenas um edifício onde acontecem missas',
      'A comunidade de pessoas que seguem Jesus Cristo',
      'Uma organização formada somente por padres',
      'Um lugar destinado apenas a grandes celebrações'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-212',
    aula_id: 'aula-31',
    pergunta: 'Quem é considerado o fundador da Igreja?',
    alternativas: [
      'São Pedro sozinho',
      'Moisés',
      'Jesus Cristo',
      'São Paulo'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-213',
    aula_id: 'aula-31',
    pergunta: 'Qual é a missão principal da Igreja?',
    alternativas: [
      'Buscar poder político',
      'Acumular riquezas',
      'Substituir a família',
      'Anunciar o Evangelho e testemunhar o amor de Deus'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-214',
    aula_id: 'aula-31',
    pergunta: 'Quem faz parte da Igreja?',
    alternativas: [
      'Todos os batizados que formam a comunidade cristã',
      'Somente os padres e bispos',
      'Apenas os catequistas',
      'Somente as pessoas que trabalham na paróquia'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-215',
    aula_id: 'aula-31',
    pergunta: 'Qual destes elementos representa uma característica da Igreja?',
    alternativas: [
      'Competição entre seus membros',
      'Comunhão e união entre os cristãos',
      'Busca por vantagens pessoais',
      'Separação entre as pessoas'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-216',
    aula_id: 'aula-31',
    pergunta: 'Por que a Igreja é chamada de Povo de Deus?',
    alternativas: [
      'Porque é formada apenas por líderes',
      'Porque pertence a uma única família',
      'Porque reúne pessoas chamadas por Deus para viver a fé em comunidade',
      'Porque está presente somente em um país'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-217',
    aula_id: 'aula-31',
    pergunta: 'Como podemos participar da missão da Igreja?',
    alternativas: [
      'Ignorando as necessidades da comunidade',
      'Participando apenas quando recebemos algo',
      'Evitando ajudar outras pessoas',
      'Vivendo a fé, participando da comunidade e praticando a caridade'
    ],
    resposta_correta: 3,
  },

  // AULA 32 — Pentecostes e o Espírito Santo
  {
    id: 'atividade-218',
    aula_id: 'aula-32',
    pergunta: 'O que os cristãos celebram em Pentecostes?',
    alternativas: [
      'A vinda do Espírito Santo sobre os discípulos',
      'O nascimento de Jesus',
      'A criação do mundo',
      'A chegada dos Reis Magos'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-219',
    aula_id: 'aula-32',
    pergunta: 'Quantos dias após a Páscoa é celebrado Pentecostes?',
    alternativas: [
      'Trinta dias',
      'Cinquenta dias',
      'Setenta dias',
      'Cem dias'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-220',
    aula_id: 'aula-32',
    pergunta: 'Qual sinal apareceu sobre os discípulos no dia de Pentecostes?',
    alternativas: [
      'Estrelas brilhantes',
      'Uma grande chuva',
      'Línguas como de fogo',
      'Uma nuvem escura'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-221',
    aula_id: 'aula-32',
    pergunta: 'Qual é a missão do Espírito Santo na vida dos cristãos?',
    alternativas: [
      'Impedir as pessoas de fazer escolhas',
      'Substituir a necessidade de oração',
      'Afastar os cristãos da comunidade',
      'Fortalecer, orientar e conduzir os cristãos na fé'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-222',
    aula_id: 'aula-32',
    pergunta: 'Qual é um dos frutos do Espírito Santo?',
    alternativas: [
      'A paz',
      'O orgulho',
      'A inveja',
      'A intolerância'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-223',
    aula_id: 'aula-32',
    pergunta: 'O que mudou na atitude dos discípulos após Pentecostes?',
    alternativas: [
      'Eles abandonaram a missão',
      'Passaram a anunciar Jesus com coragem',
      'Deixaram de se reunir',
      'Decidiram não falar mais sobre a fé'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-224',
    aula_id: 'aula-32',
    pergunta: 'Como podemos reconhecer a ação do Espírito Santo em nossa vida?',
    alternativas: [
      'Quando buscamos vantagens prejudicando os outros',
      'Quando alimentamos conflitos',
      'Quando praticamos o amor, a paz e o bem',
      'Quando ignoramos a necessidade do próximo'
    ],
    resposta_correta: 2,
  },

  // AULA 33 — A missão dos apóstolos
  {
    id: 'atividade-225',
    aula_id: 'aula-33',
    pergunta: 'Quem eram os apóstolos?',
    alternativas: [
      'Governantes do Império Romano',
      'Profetas do Antigo Testamento',
      'Comerciantes de Jerusalém',
      'Discípulos escolhidos por Jesus para continuar sua missão'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-226',
    aula_id: 'aula-33',
    pergunta: 'Qual foi a missão dada por Jesus aos apóstolos?',
    alternativas: [
      'Anunciar o Evangelho e fazer discípulos',
      'Conquistar territórios',
      'Construir palácios',
      'Organizar o governo romano'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-227',
    aula_id: 'aula-33',
    pergunta: 'Qual apóstolo é tradicionalmente reconhecido como o primeiro líder da Igreja de Roma?',
    alternativas: [
      'João',
      'Pedro',
      'Tiago',
      'André'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-228',
    aula_id: 'aula-33',
    pergunta: 'Qual apóstolo ficou conhecido por anunciar o Evangelho a muitos povos?',
    alternativas: [
      'Judas Iscariotes',
      'Tomé',
      'Paulo',
      'Mateus'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-229',
    aula_id: 'aula-33',
    pergunta: 'Qual livro do Novo Testamento apresenta a expansão da missão dos apóstolos?',
    alternativas: [
      'Gênesis',
      'Êxodo',
      'Provérbios',
      'Atos dos Apóstolos'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-230',
    aula_id: 'aula-33',
    pergunta: 'Como os apóstolos demonstraram sua fé?',
    alternativas: [
      'Anunciando Jesus e testemunhando seus ensinamentos',
      'Buscando reconhecimento pessoal',
      'Evitando o contato com outras comunidades',
      'Abandonando a missão recebida'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-231',
    aula_id: 'aula-33',
    pergunta: 'Como podemos continuar a missão dos apóstolos atualmente?',
    alternativas: [
      'Guardando a fé somente para nós',
      'Compartilhando os valores do Evangelho por meio de palavras e atitudes',
      'Obrigando todos a pensar da mesma maneira',
      'Evitando participar da comunidade'
    ],
    resposta_correta: 1,
  },

  // AULA 34 — A comunidade cristã
  {
    id: 'atividade-232',
    aula_id: 'aula-34',
    pergunta: 'O que caracteriza uma comunidade cristã?',
    alternativas: [
      'A competição entre seus integrantes',
      'A busca individual por reconhecimento',
      'A união na fé, na oração e na partilha',
      'A ausência de colaboração'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-233',
    aula_id: 'aula-34',
    pergunta: 'Como os primeiros cristãos costumavam viver sua fé?',
    alternativas: [
      'Cada um cuidava somente de seus interesses',
      'Evitavam qualquer reunião',
      'Compartilhavam apenas com pessoas ricas',
      'Reuniam-se para rezar, ouvir os ensinamentos e partilhar'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-234',
    aula_id: 'aula-34',
    pergunta: 'Qual atitude fortalece a união de uma comunidade cristã?',
    alternativas: [
      'Ajudar e respeitar os outros membros',
      'Criar conflitos desnecessários',
      'Excluir quem pensa diferente',
      'Espalhar comentários ofensivos'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-235',
    aula_id: 'aula-34',
    pergunta: 'Qual livro bíblico descreve a vida das primeiras comunidades cristãs?',
    alternativas: [
      'Salmos',
      'Atos dos Apóstolos',
      'Levítico',
      'Cântico dos Cânticos'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-236',
    aula_id: 'aula-34',
    pergunta: 'Por que a participação de cada pessoa é importante na comunidade?',
    alternativas: [
      'Porque todos precisam ter o mesmo cargo',
      'Porque somente algumas pessoas podem colaborar',
      'Porque cada pessoa pode contribuir com seus dons e capacidades',
      'Porque a comunidade depende de uma única pessoa'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-237',
    aula_id: 'aula-34',
    pergunta: 'O que significa viver em comunhão?',
    alternativas: [
      'Concordar sempre com tudo',
      'Evitar qualquer conversa',
      'Pensar apenas nos próprios interesses',
      'Construir relações de união, respeito e colaboração'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-238',
    aula_id: 'aula-34',
    pergunta: 'Qual é uma forma de servir à comunidade cristã?',
    alternativas: [
      'Participar de ações solidárias e colaborar nas atividades',
      'Esperar que os outros façam tudo',
      'Ignorar as necessidades da paróquia',
      'Buscar benefícios pessoais'
    ],
    resposta_correta: 0,
  },

  // AULA 35 — A paróquia como casa da comunidade
  {
    id: 'atividade-239',
    aula_id: 'aula-35',
    pergunta: 'O que é uma paróquia?',
    alternativas: [
      'Uma escola particular',
      'Uma comunidade de fiéis confiada aos cuidados de um pároco',
      'Um grupo formado somente por padres',
      'Um edifício sem atividades comunitárias'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-240',
    aula_id: 'aula-35',
    pergunta: 'Quem geralmente é responsável pelo cuidado pastoral de uma paróquia?',
    alternativas: [
      'O prefeito',
      'O catequista',
      'O pároco',
      'O coordenador da escola'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-241',
    aula_id: 'aula-35',
    pergunta: 'Qual atividade pode acontecer em uma paróquia?',
    alternativas: [
      'Somente reuniões administrativas',
      'Apenas eventos esportivos',
      'Somente atividades escolares',
      'Missas, catequese, encontros de oração e ações solidárias'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-242',
    aula_id: 'aula-35',
    pergunta: 'Por que a paróquia é considerada a casa da comunidade?',
    alternativas: [
      'Porque é um espaço de acolhida, fé, convivência e serviço',
      'Porque pertence a uma única família',
      'Porque só recebe pessoas em datas especiais',
      'Porque é um lugar destinado apenas aos padres'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-243',
    aula_id: 'aula-35',
    pergunta: 'Como os fiéis podem colaborar com a paróquia?',
    alternativas: [
      'Evitando participar das atividades',
      'Participando das celebrações e ajudando nas ações comunitárias',
      'Deixando todas as responsabilidades para o pároco',
      'Participando apenas quando recebem alguma vantagem'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-244',
    aula_id: 'aula-35',
    pergunta: 'Qual é a importância da acolhida na paróquia?',
    alternativas: [
      'Separar as pessoas por sua condição social',
      'Permitir a participação somente de antigos membros',
      'Fazer com que todos se sintam respeitados e parte da comunidade',
      'Impedir a participação de visitantes'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-245',
    aula_id: 'aula-35',
    pergunta: 'A paróquia deve ser um espaço de:',
    alternativas: [
      'Disputa e competição',
      'Julgamento e exclusão',
      'Interesse individual',
      'Comunhão, acolhimento e missão'
    ],
    resposta_correta: 3,
  },

  // AULA 36 — O catequista e a caminhada de fé
  {
    id: 'atividade-246',
    aula_id: 'aula-36',
    pergunta: 'Qual é a principal missão do catequista?',
    alternativas: [
      'Acompanhar e ajudar outras pessoas a conhecer e viver a fé cristã',
      'Substituir os familiares na educação',
      'Obrigar todos a participar das celebrações',
      'Ensinar apenas informações históricas'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-247',
    aula_id: 'aula-36',
    pergunta: 'Qual atitude é importante para um catequista?',
    alternativas: [
      'Demonstrar superioridade',
      'Ter paciência, acolhimento e disposição para ensinar',
      'Evitar ouvir os catequizandos',
      'Impor opiniões sem diálogo'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-248',
    aula_id: 'aula-36',
    pergunta: 'O catequista deve ensinar por meio de:',
    alternativas: [
      'Somente regras decoradas',
      'Apenas textos difíceis',
      'Palavras, atitudes e testemunho de vida',
      'Competição entre os participantes'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-249',
    aula_id: 'aula-36',
    pergunta: 'Qual é a importância da formação do catequista?',
    alternativas: [
      'Garantir que nunca precise aprender mais',
      'Permitir que tome decisões por todos',
      'Substituir a participação na comunidade',
      'Aprofundar a fé e melhorar o acompanhamento dos catequizandos'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-250',
    aula_id: 'aula-36',
    pergunta: 'O que o catequista deve fazer quando um catequizando tem dúvidas?',
    alternativas: [
      'Ouvir com atenção e procurar orientar com respeito',
      'Ignorar a pergunta',
      'Fazer a pessoa sentir vergonha',
      'Proibir novas perguntas'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-251',
    aula_id: 'aula-36',
    pergunta: 'A caminhada de fé na catequese deve ser:',
    alternativas: [
      'Uma competição para descobrir quem sabe mais',
      'Um processo de aprendizado, convivência e crescimento espiritual',
      'Uma atividade sem relação com a vida cotidiana',
      'Uma obrigação sem espaço para reflexão'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-252',
    aula_id: 'aula-36',
    pergunta: 'Qual deve ser a relação entre catequista e catequizando?',
    alternativas: [
      'De competição',
      'De distância e indiferença',
      'De diálogo, respeito e acompanhamento',
      'De imposição e medo'
    ],
    resposta_correta: 2,
  },

  // AULA 37 — A missa: encontro com Jesus
  {
    id: 'atividade-253',
    aula_id: 'aula-37',
    pergunta: 'Qual é o significado da missa para os católicos?',
    alternativas: [
      'Uma reunião apenas social',
      'Uma apresentação cultural',
      'Um encontro destinado somente aos padres',
      'Uma celebração da fé e encontro com Jesus Cristo'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-254',
    aula_id: 'aula-37',
    pergunta: 'Qual sacramento é celebrado de maneira central na missa?',
    alternativas: [
      'Eucaristia',
      'Matrimônio',
      'Crisma',
      'Unção dos Enfermos'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-255',
    aula_id: 'aula-37',
    pergunta: 'O que os católicos fazem durante a missa?',
    alternativas: [
      'Participam apenas como espectadores',
      'Escutam a Palavra de Deus, rezam e participam da celebração eucarística',
      'Realizam somente atividades administrativas',
      'Conversam durante toda a celebração'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-256',
    aula_id: 'aula-37',
    pergunta: 'Por que a participação na missa é importante para os cristãos?',
    alternativas: [
      'Para competir com outras comunidades',
      'Para receber reconhecimento',
      'Para fortalecer a fé e a comunhão com Deus e com a comunidade',
      'Para cumprir uma atividade sem significado'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-257',
    aula_id: 'aula-37',
    pergunta: 'O que significa a palavra Eucaristia?',
    alternativas: [
      'Sacrifício dos discípulos',
      'Encontro dos apóstolos',
      'Celebração dos profetas',
      'Ação de graças'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-258',
    aula_id: 'aula-37',
    pergunta: 'Qual é a atitude adequada durante a missa?',
    alternativas: [
      'Participar com respeito, atenção e oração',
      'Conversar e atrapalhar os outros',
      'Ignorar as leituras',
      'Usar a celebração para fazer brincadeiras'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-259',
    aula_id: 'aula-37',
    pergunta: 'A missa fortalece a união dos cristãos porque:',
    alternativas: [
      'Cada pessoa participa isoladamente',
      'A comunidade se reúne para celebrar a mesma fé',
      'Somente os ministros participam',
      'Não existe participação dos fiéis'
    ],
    resposta_correta: 1,
  },

  // AULA 38 — Partes da missa
  {
    id: 'atividade-260',
    aula_id: 'aula-38',
    pergunta: 'Quais são as quatro partes principais da missa?',
    alternativas: [
      'Batismo, Crisma, Matrimônio e Ordem',
      'Natal, Quaresma, Páscoa e Advento',
      'Ritos Iniciais, Liturgia da Palavra, Liturgia Eucarística e Ritos Finais',
      'Oração, canto, silêncio e despedida'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-261',
    aula_id: 'aula-38',
    pergunta: 'Qual é a finalidade dos Ritos Iniciais?',
    alternativas: [
      'Encerrar a celebração',
      'Distribuir a Eucaristia',
      'Realizar o envio dos fiéis',
      'Reunir a comunidade e preparar os participantes para a celebração'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-262',
    aula_id: 'aula-38',
    pergunta: 'O que acontece principalmente na Liturgia da Palavra?',
    alternativas: [
      'São proclamadas as leituras bíblicas e o Evangelho',
      'Acontece o casamento dos fiéis',
      'São realizadas as despedidas',
      'É feita somente a coleta'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-263',
    aula_id: 'aula-38',
    pergunta: 'Em qual parte da missa acontece a consagração do pão e do vinho?',
    alternativas: [
      'Nos Ritos Iniciais',
      'Na Liturgia Eucarística',
      'Nos Ritos Finais',
      'Na acolhida'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-264',
    aula_id: 'aula-38',
    pergunta: 'Qual é a finalidade dos Ritos Finais?',
    alternativas: [
      'Iniciar as leituras',
      'Preparar as oferendas',
      'Concluir a celebração e enviar os fiéis para viver a missão cristã',
      'Realizar a consagração'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-265',
    aula_id: 'aula-38',
    pergunta: 'Quem proclama normalmente o Evangelho durante a missa?',
    alternativas: [
      'Qualquer visitante',
      'O grupo de música',
      'O comentarista',
      'O diácono ou o sacerdote'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-266',
    aula_id: 'aula-38',
    pergunta: 'Por que é importante conhecer as partes da missa?',
    alternativas: [
      'Para compreender melhor a celebração e participar conscientemente',
      'Para deixar de participar das orações',
      'Para substituir a leitura bíblica',
      'Para tornar a celebração uma competição'
    ],
    resposta_correta: 0,
  },

  // AULA 39 — O ano litúrgico
  {
    id: 'atividade-267',
    aula_id: 'aula-39',
    pergunta: 'O que é o ano litúrgico?',
    alternativas: [
      'O calendário das férias escolares',
      'O ciclo de celebrações que recorda os mistérios da vida de Cristo',
      'O calendário civil de um país',
      'Uma lista de aniversários dos santos'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-268',
    aula_id: 'aula-39',
    pergunta: 'Qual tempo litúrgico prepara os cristãos para o Natal?',
    alternativas: [
      'Quaresma',
      'Tempo Pascal',
      'Advento',
      'Tempo Comum'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-269',
    aula_id: 'aula-39',
    pergunta: 'Qual tempo litúrgico prepara os cristãos para a celebração da Páscoa?',
    alternativas: [
      'Advento',
      'Natal',
      'Tempo Comum',
      'Quaresma'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-270',
    aula_id: 'aula-39',
    pergunta: 'Qual é a cor litúrgica mais associada ao Advento e à Quaresma?',
    alternativas: [
      'Roxo',
      'Verde',
      'Branco',
      'Vermelho'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-271',
    aula_id: 'aula-39',
    pergunta: 'Qual cor litúrgica é muito utilizada no Tempo Comum?',
    alternativas: [
      'Roxo',
      'Verde',
      'Vermelho',
      'Preto'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-272',
    aula_id: 'aula-39',
    pergunta: 'O que a Igreja celebra durante o Tempo Pascal?',
    alternativas: [
      'A preparação para o nascimento de Jesus',
      'Somente a vida dos profetas',
      'A ressurreição de Jesus e o tempo pascal',
      'A criação do mundo'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-273',
    aula_id: 'aula-39',
    pergunta: 'Qual é o objetivo do ano litúrgico na vida dos cristãos?',
    alternativas: [
      'Substituir a leitura da Bíblia',
      'Organizar somente os dias de descanso',
      'Celebrar apenas datas históricas',
      'Ajudar a comunidade a acompanhar e viver os mistérios da fé ao longo do ano'
    ],
    resposta_correta: 3,
  },

  // AULA 40 — Símbolos e gestos da fé católica
  {
    id: 'atividade-274',
    aula_id: 'aula-40',
    pergunta: 'O que o sinal da cruz representa para os católicos?',
    alternativas: [
      'A fé na Santíssima Trindade e a lembrança da salvação em Cristo',
      'Apenas uma saudação social',
      'Um gesto sem significado religioso',
      'A lembrança dos reis antigos'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-275',
    aula_id: 'aula-40',
    pergunta: 'O que a água pode simbolizar na fé católica?',
    alternativas: [
      'A riqueza material',
      'A vida, a purificação e o Batismo',
      'O poder dos governantes',
      'A passagem do tempo'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-276',
    aula_id: 'aula-40',
    pergunta: 'O que a vela acesa simboliza nas celebrações católicas?',
    alternativas: [
      'A riqueza da comunidade',
      'A passagem das estações',
      'A luz de Cristo e a presença de Deus',
      'A autoridade dos líderes'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-277',
    aula_id: 'aula-40',
    pergunta: 'O que significa ajoelhar-se durante uma oração ou celebração?',
    alternativas: [
      'Demonstrar superioridade',
      'Indicar que a celebração terminou',
      'Substituir a participação nas orações',
      'Expressar adoração, reverência e humildade'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-278',
    aula_id: 'aula-40',
    pergunta: 'O que o pão e o vinho representam na celebração eucarística?',
    alternativas: [
      'Os sinais sacramentais do Corpo e do Sangue de Cristo',
      'Apenas alimentos de uma refeição comum',
      'Os presentes dos Reis Magos',
      'Os símbolos dos profetas'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-279',
    aula_id: 'aula-40',
    pergunta: 'Qual é o significado de fazer o sinal da cruz antes de uma oração?',
    alternativas: [
      'Mostrar que a oração será curta',
      'Recordar a fé na Santíssima Trindade',
      'Indicar que não precisamos prestar atenção',
      'Substituir todas as outras orações'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-280',
    aula_id: 'aula-40',
    pergunta: 'Por que os gestos e símbolos são importantes na fé católica?',
    alternativas: [
      'Porque substituem completamente a fé',
      'Porque servem apenas para decorar a igreja',
      'Porque ajudam a expressar e compreender realidades da fé',
      'Porque não possuem significado espiritual'
    ],
    resposta_correta: 2,
  },
];

export const activities = [
  // AULA 41 — O que são os sacramentos?
  {
    id: 'atividade-281',
    aula_id: 'aula-41',
    pergunta: 'O que são os sacramentos na Igreja Católica?',
    alternativas: [
      'Regras criadas para organizar as paróquias',
      'Sinais visíveis da graça de Deus, instituídos por Cristo e confiados à Igreja',
      'Orações realizadas somente pelos padres',
      'Celebrações sem significado espiritual'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-282',
    aula_id: 'aula-41',
    pergunta: 'Quantos sacramentos existem na Igreja Católica?',
    alternativas: [
      'Cinco',
      'Seis',
      'Sete',
      'Dez'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-283',
    aula_id: 'aula-41',
    pergunta: 'Qual destes é um sacramento da iniciação cristã?',
    alternativas: [
      'Matrimônio',
      'Unção dos Enfermos',
      'Ordem',
      'Batismo'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-284',
    aula_id: 'aula-41',
    pergunta: 'Quais são os três sacramentos da iniciação cristã?',
    alternativas: [
      'Batismo, Eucaristia e Crisma',
      'Matrimônio, Ordem e Batismo',
      'Reconciliação, Ordem e Unção',
      'Eucaristia, Matrimônio e Unção'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-285',
    aula_id: 'aula-41',
    pergunta: 'Qual é a principal finalidade dos sacramentos?',
    alternativas: [
      'Organizar eventos religiosos',
      'Comunicar a graça de Deus e fortalecer a vida cristã',
      'Substituir a oração pessoal',
      'Garantir que nunca teremos dificuldades'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-286',
    aula_id: 'aula-41',
    pergunta: 'Qual grupo reúne os sacramentos de cura?',
    alternativas: [
      'Batismo e Crisma',
      'Matrimônio e Ordem',
      'Reconciliação e Unção dos Enfermos',
      'Eucaristia e Batismo'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-287',
    aula_id: 'aula-41',
    pergunta: 'Como os sacramentos devem ser recebidos?',
    alternativas: [
      'Sem atenção ou preparação',
      'Apenas por obrigação social',
      'Somente quando alguém está observando',
      'Com fé, respeito e disposição para viver a graça recebida'
    ],
    resposta_correta: 3,
  },

  // AULA 42 — Batismo: nascimento para a vida cristã
  {
    id: 'atividade-288',
    aula_id: 'aula-42',
    pergunta: 'O que o Batismo representa na vida cristã?',
    alternativas: [
      'O nascimento para a vida cristã e a entrada na comunidade da Igreja',
      'A conclusão da caminhada de fé',
      'A escolha de uma profissão',
      'A participação em uma atividade escolar'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-289',
    aula_id: 'aula-42',
    pergunta: 'Qual elemento é utilizado normalmente no sacramento do Batismo?',
    alternativas: [
      'Óleo de cozinha',
      'Água',
      'Vinho',
      'Areia'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-290',
    aula_id: 'aula-42',
    pergunta: 'Em nome de quem a pessoa é batizada na Igreja Católica?',
    alternativas: [
      'Em nome dos apóstolos',
      'Em nome dos santos',
      'Em nome do Pai, do Filho e do Espírito Santo',
      'Em nome dos catequistas'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-291',
    aula_id: 'aula-42',
    pergunta: 'O que a vela acesa no Batismo simboliza?',
    alternativas: [
      'O início de uma festa',
      'A luz dos antigos profetas',
      'A importância da riqueza',
      'A luz de Cristo que ilumina a caminhada do batizado'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-292',
    aula_id: 'aula-42',
    pergunta: 'Qual é a função dos padrinhos no Batismo?',
    alternativas: [
      'Acompanhar e apoiar o batizado em sua caminhada de fé',
      'Substituir completamente a família',
      'Decidir todas as escolhas da pessoa batizada',
      'Organizar somente a comemoração'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-293',
    aula_id: 'aula-42',
    pergunta: 'Qual personagem bíblico batizou Jesus no Rio Jordão?',
    alternativas: [
      'São Pedro',
      'João Batista',
      'São Paulo',
      'Moisés'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-294',
    aula_id: 'aula-42',
    pergunta: 'O Batismo é considerado:',
    alternativas: [
      'Um sacramento que pode ser recebido várias vezes',
      'Uma celebração sem ligação com a Igreja',
      'O primeiro dos sacramentos da iniciação cristã e recebido uma única vez',
      'Um sacramento destinado apenas aos adultos'
    ],
    resposta_correta: 2,
  },

  // AULA 43 — Eucaristia: Jesus se dá como alimento
  {
    id: 'atividade-295',
    aula_id: 'aula-43',
    pergunta: 'O que os católicos celebram no sacramento da Eucaristia?',
    alternativas: [
      'A criação do mundo',
      'O nascimento de João Batista',
      'A escolha dos apóstolos',
      'A presença de Jesus Cristo no pão e no vinho consagrados'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-296',
    aula_id: 'aula-43',
    pergunta: 'Qual acontecimento está diretamente ligado à instituição da Eucaristia?',
    alternativas: [
      'A Última Ceia',
      'O nascimento de Jesus',
      'A visita dos Reis Magos',
      'A criação de Adão e Eva'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-297',
    aula_id: 'aula-43',
    pergunta: 'Quais são os elementos utilizados na celebração eucarística?',
    alternativas: [
      'Água e azeite',
      'Pão e vinho',
      'Leite e mel',
      'Frutas e sementes'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-298',
    aula_id: 'aula-43',
    pergunta: 'O que significa receber a Comunhão?',
    alternativas: [
      'Participar de uma refeição comum',
      'Receber uma lembrança da celebração',
      'Receber Jesus na Eucaristia e fortalecer a união com Ele',
      'Concluir a caminhada de fé'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-299',
    aula_id: 'aula-43',
    pergunta: 'Qual atitude é importante antes de receber a Eucaristia?',
    alternativas: [
      'Participar sem compreender o significado',
      'Pensar apenas na comemoração',
      'Ignorar a preparação espiritual',
      'Preparar-se com fé, oração e respeito, observando as orientações da Igreja'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-300',
    aula_id: 'aula-43',
    pergunta: 'Qual é o significado da palavra Comunhão?',
    alternativas: [
      'União com Cristo e com a comunidade cristã',
      'Separação entre os fiéis',
      'Competição entre os participantes',
      'Uma reunião sem relação com a fé'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-301',
    aula_id: 'aula-43',
    pergunta: 'Como a Eucaristia deve influenciar a vida cotidiana do cristão?',
    alternativas: [
      'Incentivando a busca por vantagens pessoais',
      'Inspirando atitudes de amor, partilha e serviço',
      'Afastando a pessoa da comunidade',
      'Ensinando a ignorar quem precisa de ajuda'
    ],
    resposta_correta: 1,
  },

  // AULA 44 — Reconciliação: o sacramento do perdão
  {
    id: 'atividade-302',
    aula_id: 'aula-44',
    pergunta: 'Qual é o principal objetivo do sacramento da Reconciliação?',
    alternativas: [
      'Realizar uma comemoração religiosa',
      'Substituir todos os outros sacramentos',
      'Receber o perdão de Deus e reconciliar-se com Ele e com a Igreja',
      'Evitar qualquer responsabilidade pelos próprios atos'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-303',
    aula_id: 'aula-44',
    pergunta: 'Como também é conhecido o sacramento da Reconciliação?',
    alternativas: [
      'Batismo',
      'Crisma',
      'Matrimônio',
      'Confissão'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-304',
    aula_id: 'aula-44',
    pergunta: 'Qual é uma etapa importante para receber o sacramento da Reconciliação?',
    alternativas: [
      'Reconhecer os próprios pecados e arrepender-se',
      'Culpar outras pessoas por todos os erros',
      'Esconder os próprios atos',
      'Ignorar a necessidade de mudança'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-305',
    aula_id: 'aula-44',
    pergunta: 'Quem administra normalmente o sacramento da Reconciliação?',
    alternativas: [
      'O catequista',
      'O sacerdote',
      'O padrinho',
      'Qualquer participante da missa'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-306',
    aula_id: 'aula-44',
    pergunta: 'O que é a penitência recebida na Confissão?',
    alternativas: [
      'Uma punição para humilhar a pessoa',
      'Uma tarefa sem significado',
      'Uma oração ou ação que ajuda a expressar arrependimento e conversão',
      'Uma forma de comprar o perdão'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-307',
    aula_id: 'aula-44',
    pergunta: 'Qual atitude demonstra uma verdadeira conversão?',
    alternativas: [
      'Continuar praticando os mesmos erros sem reflexão',
      'Esconder as próprias atitudes',
      'Esperar que os outros mudem primeiro',
      'Reconhecer os erros e procurar agir de maneira diferente'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-308',
    aula_id: 'aula-44',
    pergunta: 'O que o sacramento da Reconciliação nos ensina sobre Deus?',
    alternativas: [
      'Que Deus é misericordioso e oferece seu perdão',
      'Que Deus não aceita quem erra',
      'Que o perdão não é possível',
      'Que somente pessoas perfeitas podem se aproximar de Deus'
    ],
    resposta_correta: 0,
  },

  // AULA 45 — Crisma: força do Espírito Santo
  {
    id: 'atividade-309',
    aula_id: 'aula-45',
    pergunta: 'Qual é o principal significado do sacramento da Crisma?',
    alternativas: [
      'O início da vida escolar',
      'O fortalecimento da graça batismal pela ação do Espírito Santo',
      'A conclusão definitiva da vida cristã',
      'A escolha de uma profissão'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-310',
    aula_id: 'aula-45',
    pergunta: 'Qual símbolo é utilizado de maneira especial na Crisma?',
    alternativas: [
      'Uma coroa de ouro',
      'Uma vela de aniversário',
      'O óleo do Crisma',
      'Uma faixa branca'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-311',
    aula_id: 'aula-45',
    pergunta: 'Quem normalmente administra o sacramento da Crisma?',
    alternativas: [
      'O catequista',
      'O padrinho',
      'O coordenador da comunidade',
      'O bispo ou um sacerdote autorizado'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-312',
    aula_id: 'aula-45',
    pergunta: 'Qual é a relação entre Pentecostes e a Crisma?',
    alternativas: [
      'Ambos estão ligados à ação do Espírito Santo',
      'Não existe nenhuma relação',
      'Pentecostes celebra o nascimento de Jesus',
      'A Crisma substitui a celebração de Pentecostes'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-313',
    aula_id: 'aula-45',
    pergunta: 'Qual destes é um dom do Espírito Santo?',
    alternativas: [
      'Inveja',
      'Sabedoria',
      'Orgulho',
      'Egoísmo'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-314',
    aula_id: 'aula-45',
    pergunta: 'O que significa assumir a fé de maneira mais consciente na Crisma?',
    alternativas: [
      'Deixar de aprender sobre a religião',
      'Participar somente das festas religiosas',
      'Comprometer-se com a vivência do Evangelho e a missão cristã',
      'Não precisar mais participar da comunidade'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-315',
    aula_id: 'aula-45',
    pergunta: 'Qual atitude demonstra a ação do Espírito Santo na vida de um crismado?',
    alternativas: [
      'Buscar reconhecimento acima de tudo',
      'Ignorar as necessidades dos outros',
      'Criar divisões na comunidade',
      'Agir com coragem, amor e responsabilidade'
    ],
    resposta_correta: 3,
  },

  // AULA 46 — Matrimônio e vocação ao amor
  {
    id: 'atividade-316',
    aula_id: 'aula-46',
    pergunta: 'O que é o sacramento do Matrimônio?',
    alternativas: [
      'A união de um homem e uma mulher, em aliança de amor e fidelidade, segundo a doutrina católica',
      'Uma festa sem compromisso',
      'Uma cerimônia destinada apenas a reunir familiares',
      'Um contrato de trabalho'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-317',
    aula_id: 'aula-46',
    pergunta: 'Quais valores são fundamentais na vivência do Matrimônio?',
    alternativas: [
      'Competição e orgulho',
      'Amor, fidelidade, respeito e compromisso',
      'Indiferença e egoísmo',
      'Busca por vantagens pessoais'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-318',
    aula_id: 'aula-46',
    pergunta: 'Na celebração católica do Matrimônio, quem administra o sacramento?',
    alternativas: [
      'Os padrinhos',
      'O catequista',
      'Os próprios noivos, ao manifestarem livremente seu consentimento',
      'Os familiares do casal'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-319',
    aula_id: 'aula-46',
    pergunta: 'O que significa viver uma vocação ao amor?',
    alternativas: [
      'Pensar somente nos próprios desejos',
      'Evitar qualquer compromisso',
      'Buscar relacionamentos baseados em interesses materiais',
      'Construir relações de cuidado, respeito e doação'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-320',
    aula_id: 'aula-46',
    pergunta: 'Qual atitude fortalece a vida em família?',
    alternativas: [
      'O diálogo, o respeito e a colaboração',
      'A falta de comunicação',
      'A imposição de vontades',
      'A indiferença diante dos problemas'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-321',
    aula_id: 'aula-46',
    pergunta: 'Qual é a relação entre o amor de Deus e o amor vivido no Matrimônio?',
    alternativas: [
      'Não existe relação entre eles',
      'O amor conjugal é chamado a refletir a fidelidade e a doação de Deus',
      'O amor depende apenas de bens materiais',
      'O amor elimina a necessidade de respeito'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-322',
    aula_id: 'aula-46',
    pergunta: 'O Matrimônio é considerado pela Igreja Católica um sacramento de:',
    alternativas: [
      'Iniciação cristã',
      'Cura',
      'Serviço e comunhão',
      'Preparação para o Batismo'
    ],
    resposta_correta: 2,
  },

  // AULA 47 — Ordem e serviço ao povo de Deus
  {
    id: 'atividade-323',
    aula_id: 'aula-47',
    pergunta: 'O que é o sacramento da Ordem?',
    alternativas: [
      'Uma cerimônia de formatura',
      'Uma reunião de catequistas',
      'Uma celebração de casamento',
      'O sacramento pelo qual alguns fiéis são consagrados para o serviço ministerial na Igreja'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-324',
    aula_id: 'aula-47',
    pergunta: 'Quais são os três graus do sacramento da Ordem?',
    alternativas: [
      'Diaconato, presbiterado e episcopado',
      'Catequista, ministro e coordenador',
      'Bispo, papa e religioso',
      'Leitor, salmista e acólito'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-325',
    aula_id: 'aula-47',
    pergunta: 'Qual é a principal missão dos sacerdotes?',
    alternativas: [
      'Buscar reconhecimento social',
      'Servir à comunidade, celebrar os sacramentos e anunciar o Evangelho',
      'Governar cidades',
      'Organizar atividades comerciais'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-326',
    aula_id: 'aula-47',
    pergunta: 'Qual é a função principal dos bispos?',
    alternativas: [
      'Administrar escolas públicas',
      'Organizar somente eventos culturais',
      'Ensinar, santificar e governar pastoralmente a Igreja particular confiada a eles',
      'Substituir todos os catequistas'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-327',
    aula_id: 'aula-47',
    pergunta: 'Qual é uma das funções dos diáconos?',
    alternativas: [
      'Realizar qualquer sacramento sem autorização',
      'Substituir o bispo em todas as funções',
      'Governar toda a Igreja',
      'Servir à comunidade, especialmente na caridade, na Palavra e na liturgia'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-328',
    aula_id: 'aula-47',
    pergunta: 'O sacramento da Ordem está entre os sacramentos de:',
    alternativas: [
      'Serviço à comunhão e à missão dos fiéis',
      'Iniciação cristã',
      'Cura',
      'Preparação para o Batismo'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-329',
    aula_id: 'aula-47',
    pergunta: 'Qual atitude deve marcar a missão de quem recebe o sacramento da Ordem?',
    alternativas: [
      'Buscar poder e privilégios',
      'Viver o serviço, a dedicação e o cuidado com o povo de Deus',
      'Afastar-se da comunidade',
      'Colocar os interesses pessoais acima da missão'
    ],
    resposta_correta: 1,
  },

  // AULA 48 — Unção dos enfermos: Deus cuida dos que sofrem
  {
    id: 'atividade-330',
    aula_id: 'aula-48',
    pergunta: 'Qual é a finalidade do sacramento da Unção dos Enfermos?',
    alternativas: [
      'Substituir os tratamentos médicos',
      'Garantir que ninguém ficará doente',
      'Oferecer graça, conforto e força espiritual aos enfermos',
      'Ser realizado somente após a morte'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-331',
    aula_id: 'aula-48',
    pergunta: 'Quem pode receber a Unção dos Enfermos?',
    alternativas: [
      'Somente pessoas idosas sem doenças',
      'Qualquer pessoa que esteja participando de uma missa',
      'Somente crianças recém-nascidas',
      'Fiéis que enfrentam doença grave ou fragilidade relacionada à saúde'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-332',
    aula_id: 'aula-48',
    pergunta: 'Qual elemento é utilizado nesse sacramento?',
    alternativas: [
      'Óleo abençoado',
      'Água do mar',
      'Pão e vinho',
      'Areia'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-333',
    aula_id: 'aula-48',
    pergunta: 'Quem normalmente administra a Unção dos Enfermos?',
    alternativas: [
      'O catequista',
      'O sacerdote',
      'O padrinho',
      'Um familiar'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-334',
    aula_id: 'aula-48',
    pergunta: 'A Unção dos Enfermos deve ser recebida:',
    alternativas: [
      'Somente quando a pessoa não consegue mais falar',
      'Apenas nos últimos instantes de vida',
      'Quando há necessidade espiritual diante de uma doença grave ou fragilidade, sem esperar necessariamente o fim da vida',
      'Somente durante o Natal'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-335',
    aula_id: 'aula-48',
    pergunta: 'Qual é a relação entre a Unção dos Enfermos e os cuidados médicos?',
    alternativas: [
      'O sacramento substitui qualquer tratamento',
      'A pessoa deve abandonar os cuidados de saúde',
      'A oração impede a necessidade de acompanhamento médico',
      'O sacramento oferece apoio espiritual e pode ser recebido junto aos cuidados de saúde'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-336',
    aula_id: 'aula-48',
    pergunta: 'Qual atitude demonstra cuidado cristão com uma pessoa enferma?',
    alternativas: [
      'Oferecer companhia, respeito, oração e ajuda',
      'Evitar qualquer contato',
      'Fazer comentários que diminuam seu sofrimento',
      'Ignorar suas necessidades'
    ],
    resposta_correta: 0,
  },

  // AULA 49 — Os mandamentos na vida diária
  {
    id: 'atividade-337',
    aula_id: 'aula-49',
    pergunta: 'Qual é a importância dos mandamentos na vida cotidiana?',
    alternativas: [
      'Criar competição entre as pessoas',
      'Orientar escolhas e atitudes de amor, respeito e justiça',
      'Impedir a convivência social',
      'Garantir vantagens materiais'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-338',
    aula_id: 'aula-49',
    pergunta: 'Qual atitude está de acordo com o mandamento de não furtar?',
    alternativas: [
      'Pegar objetos sem autorização',
      'Ficar com algo encontrado sem procurar o dono',
      'Respeitar os bens e os direitos das outras pessoas',
      'Usar o trabalho de alguém sem reconhecer seu esforço'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-339',
    aula_id: 'aula-49',
    pergunta: 'Como podemos viver o mandamento de não levantar falso testemunho?',
    alternativas: [
      'Espalhando rumores',
      'Inventando histórias para prejudicar alguém',
      'Compartilhando informações sem verificar',
      'Falando a verdade e evitando falsas acusações'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-340',
    aula_id: 'aula-49',
    pergunta: 'Qual atitude demonstra respeito ao próximo?',
    alternativas: [
      'Ouvir e respeitar as pessoas, mesmo quando pensam diferente',
      'Humilhar quem discorda de nós',
      'Ignorar os sentimentos dos outros',
      'Espalhar comentários ofensivos'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-341',
    aula_id: 'aula-49',
    pergunta: 'Como podemos viver o mandamento de santificar o dia do Senhor?',
    alternativas: [
      'Ignorando qualquer momento de oração',
      'Participando da celebração, dedicando tempo a Deus e praticando o bem',
      'Usando o dia apenas para competir',
      'Evitando qualquer convivência familiar'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-342',
    aula_id: 'aula-49',
    pergunta: 'Qual atitude contraria o respeito à vida?',
    alternativas: [
      'Ajudar quem está em dificuldade',
      'Defender a dignidade humana',
      'Praticar violência e desrespeitar a dignidade das pessoas',
      'Cuidar de quem precisa'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-343',
    aula_id: 'aula-49',
    pergunta: 'Por que os mandamentos continuam importantes atualmente?',
    alternativas: [
      'Porque impedem qualquer mudança na sociedade',
      'Porque servem somente para pessoas religiosas',
      'Porque não possuem relação com a convivência',
      'Porque ajudam a construir relações mais justas e respeitosas'
    ],
    resposta_correta: 3,
  },

  // AULA 50 — As bem-aventuranças
  {
    id: 'atividade-344',
    aula_id: 'aula-50',
    pergunta: 'Onde Jesus apresentou as bem-aventuranças?',
    alternativas: [
      'No Sermão da Montanha',
      'Na Última Ceia',
      'No nascimento em Belém',
      'Durante a visita dos Reis Magos'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-345',
    aula_id: 'aula-50',
    pergunta: 'O que as bem-aventuranças ensinam?',
    alternativas: [
      'Que a riqueza é o maior objetivo da vida',
      'Que a verdadeira felicidade está ligada aos valores do Reino de Deus',
      'Que devemos buscar poder sobre os outros',
      'Que somente pessoas famosas são felizes'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-346',
    aula_id: 'aula-50',
    pergunta: 'Qual destas atitudes aparece nas bem-aventuranças?',
    alternativas: [
      'Orgulho',
      'Inveja',
      'Misericórdia',
      'Egoísmo'
    ],
    resposta_correta: 2,
  },
  {
    id: 'atividade-347',
    aula_id: 'aula-50',
    pergunta: 'Quem são chamados de pacificadores nas bem-aventuranças?',
    alternativas: [
      'Aqueles que evitam qualquer responsabilidade',
      'Aqueles que provocam conflitos',
      'Aqueles que buscam vencer discussões a qualquer custo',
      'Aqueles que trabalham pela paz e pela reconciliação'
    ],
    resposta_correta: 3,
  },
  {
    id: 'atividade-348',
    aula_id: 'aula-50',
    pergunta: 'O que significa ser pobre em espírito?',
    alternativas: [
      'Reconhecer a necessidade de Deus e viver com humildade',
      'Não possuir nenhum bem material obrigatoriamente',
      'Desprezar as pessoas',
      'Evitar qualquer responsabilidade'
    ],
    resposta_correta: 0,
  },
  {
    id: 'atividade-349',
    aula_id: 'aula-50',
    pergunta: 'Qual bem-aventurança está relacionada à busca pela justiça?',
    alternativas: [
      'Bem-aventurados os que acumulam riquezas',
      'Bem-aventurados os que têm fome e sede de justiça',
      'Bem-aventurados os que procuram poder',
      'Bem-aventurados os que ignoram o sofrimento'
    ],
    resposta_correta: 1,
  },
  {
    id: 'atividade-350',
    aula_id: 'aula-50',
    pergunta: 'Como podemos colocar as bem-aventuranças em prática?',
    alternativas: [
      'Buscando vantagens pessoais',
      'Ignorando as pessoas necessitadas',
      'Agindo com humildade, misericórdia, justiça e paz',
      'Criando conflitos na comunidade'
    ],
    resposta_correta: 2,
  },
];

export const activities = [
  // AULA 51 — O Pai-Nosso
  {
    id: 'atividade-351',
    aula_id: 'aula-51',
    pergunta: 'Quem ensinou a oração do Pai-Nosso aos seus discípulos?',
    alternativas: ['Moisés', 'Jesus', 'Abraão', 'Pedro'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-352',
    aula_id: 'aula-51',
    pergunta: 'Como começa a oração do Pai-Nosso?',
    alternativas: ['Ave, Maria', 'Glória ao Pai', 'Pai nosso que estais no céu', 'Senhor, tende piedade'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-353',
    aula_id: 'aula-51',
    pergunta: 'O que significa chamar Deus de Pai?',
    alternativas: ['Reconhecer seu amor e cuidado por nós', 'Dizer que Deus está distante', 'Mostrar que não precisamos de Deus', 'Pedir apenas coisas materiais'],
    resposta_correta: 0,
  },
  {
    id: 'atividade-354',
    aula_id: 'aula-51',
    pergunta: 'Quando rezamos pelo pão de cada dia, o que estamos pedindo?',
    alternativas: ['Somente alimentos especiais', 'Riqueza e luxo', 'Que nunca precisemos trabalhar', 'O necessário para viver e o sustento de cada dia'],
    resposta_correta: 3,
  },
  {
    id: 'atividade-355',
    aula_id: 'aula-51',
    pergunta: 'O que pedimos a Deus quando rezamos “perdoai as nossas ofensas”?',
    alternativas: ['Que Ele castigue todas as pessoas', 'Que perdoe nossas falhas e nos ajude a perdoar', 'Que não precisemos reconhecer nossos erros', 'Que sejamos melhores que os outros'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-356',
    aula_id: 'aula-51',
    pergunta: 'Qual atitude combina com a oração do Pai-Nosso?',
    alternativas: ['Guardar rancor', 'Ignorar quem precisa de ajuda', 'Praticar o perdão e confiar em Deus', 'Desrespeitar as pessoas'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-357',
    aula_id: 'aula-51',
    pergunta: 'O que pedimos ao rezar “livrai-nos do mal”?',
    alternativas: ['A proteção de Deus contra o mal e o pecado', 'Que nunca enfrentemos dificuldades', 'Que outras pessoas resolvam nossos problemas', 'Que possamos fazer tudo o que desejamos'],
    resposta_correta: 0,
  },

  // AULA 52 — A Ave-Maria
  {
    id: 'atividade-358',
    aula_id: 'aula-52',
    pergunta: 'A oração da Ave-Maria é dedicada a quem?',
    alternativas: ['Santa Isabel', 'Maria, mãe de Jesus', 'Marta de Betânia', 'Maria Madalena'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-359',
    aula_id: 'aula-52',
    pergunta: 'Qual personagem bíblico saudou Maria dizendo que ela era cheia de graça?',
    alternativas: ['Pedro', 'João Batista', 'O anjo Gabriel', 'Moisés'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-360',
    aula_id: 'aula-52',
    pergunta: 'Quem chamou Maria de bendita entre as mulheres?',
    alternativas: ['Isabel', 'Marta', 'Rute', 'Ana'],
    resposta_correta: 0,
  },
  {
    id: 'atividade-361',
    aula_id: 'aula-52',
    pergunta: 'Qual é a relação de Maria com Jesus?',
    alternativas: ['Foi sua discípula mais velha', 'Foi sua professora', 'Foi sua irmã', 'Foi sua mãe'],
    resposta_correta: 3,
  },
  {
    id: 'atividade-362',
    aula_id: 'aula-52',
    pergunta: 'O que os católicos pedem quando dizem “rogai por nós”?',
    alternativas: ['Que Maria substitua Deus', 'Que Maria interceda por nós junto a Deus', 'Que Maria realize tudo sem a participação de Deus', 'Que não precisemos rezar'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-363',
    aula_id: 'aula-52',
    pergunta: 'Em qual livro da Bíblia encontramos a saudação do anjo Gabriel a Maria?',
    alternativas: ['Gênesis', 'Êxodo', 'Evangelho de Lucas', 'Apocalipse'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-364',
    aula_id: 'aula-52',
    pergunta: 'Qual atitude de Maria é um exemplo para os cristãos?',
    alternativas: ['Sua confiança e disponibilidade para cumprir a vontade de Deus', 'Seu desejo de ser superior aos outros', 'Sua recusa em ajudar as pessoas', 'Sua falta de confiança'],
    resposta_correta: 0,
  },

  // AULA 53 — O terço e a meditação da vida de Jesus
  {
    id: 'atividade-365',
    aula_id: 'aula-53',
    pergunta: 'Qual é um dos principais objetivos de rezar o terço?',
    alternativas: ['Decorar palavras sem pensar', 'Pedir somente bens materiais', 'Meditar sobre a vida de Jesus com Maria', 'Substituir todas as celebrações da Igreja'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-366',
    aula_id: 'aula-53',
    pergunta: 'O que são os mistérios do terço?',
    alternativas: ['Histórias inventadas', 'Momentos importantes da vida de Jesus e de Maria', 'Regras de comportamento', 'Nomes de santos'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-367',
    aula_id: 'aula-53',
    pergunta: 'Quantos grupos tradicionais de mistérios existem no terço?',
    alternativas: ['Dois', 'Três', 'Cinco', 'Quatro'],
    resposta_correta: 3,
  },
  {
    id: 'atividade-368',
    aula_id: 'aula-53',
    pergunta: 'Qual grupo de mistérios recorda o nascimento e a infância de Jesus?',
    alternativas: ['Mistérios Gozosos', 'Mistérios Dolorosos', 'Mistérios Gloriosos', 'Mistérios Luminosos'],
    resposta_correta: 0,
  },
  {
    id: 'atividade-369',
    aula_id: 'aula-53',
    pergunta: 'Qual grupo de mistérios contempla a paixão e a morte de Jesus?',
    alternativas: ['Mistérios Luminosos', 'Mistérios Gozosos', 'Mistérios Dolorosos', 'Mistérios Gloriosos'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-370',
    aula_id: 'aula-53',
    pergunta: 'O que representa o uso das contas do terço?',
    alternativas: ['Uma forma de contar dinheiro', 'Um auxílio para acompanhar as orações', 'Uma obrigação de terminar rapidamente', 'Um objeto que substitui a Bíblia'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-371',
    aula_id: 'aula-53',
    pergunta: 'Como podemos rezar o terço de maneira mais consciente?',
    alternativas: ['Sem prestar atenção', 'Conversando durante toda a oração', 'Pensando apenas em terminar', 'Refletindo sobre cada mistério e seu significado'],
    resposta_correta: 3,
  },

  // AULA 54 — Santos: amigos de Deus
  {
    id: 'atividade-372',
    aula_id: 'aula-54',
    pergunta: 'Quem são os santos para a Igreja Católica?',
    alternativas: ['Pessoas que viveram a fé e são exemplos de amor a Deus e ao próximo', 'Pessoas que nunca cometeram erros', 'Pessoas que não precisavam de Deus', 'Personagens sem relação com a fé'],
    resposta_correta: 0,
  },
  {
    id: 'atividade-373',
    aula_id: 'aula-54',
    pergunta: 'Qual é a atitude dos católicos em relação aos santos?',
    alternativas: ['Adoram os santos como se fossem Deus', 'Ignoram seus exemplos', 'Veneram os santos e procuram aprender com suas vidas', 'Acreditam que os santos substituem Jesus'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-374',
    aula_id: 'aula-54',
    pergunta: 'O que significa dizer que os santos são exemplos de santidade?',
    alternativas: ['Que eram pessoas famosas', 'Que viveram procurando seguir os ensinamentos de Jesus', 'Que nunca enfrentaram dificuldades', 'Que não precisavam ajudar ninguém'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-375',
    aula_id: 'aula-54',
    pergunta: 'O que significa a comunhão dos santos?',
    alternativas: ['Uma reunião somente de sacerdotes', 'Uma festa realizada uma vez por ano', 'Uma lista de pessoas importantes', 'A união espiritual de todos os que pertencem a Cristo'],
    resposta_correta: 3,
  },
  {
    id: 'atividade-376',
    aula_id: 'aula-54',
    pergunta: 'Qual destas atitudes demonstra um caminho de santidade?',
    alternativas: ['Ajudar quem precisa e agir com amor', 'Humilhar os colegas', 'Buscar vantagens prejudicando os outros', 'Ignorar as necessidades da comunidade'],
    resposta_correta: 0,
  },
  {
    id: 'atividade-377',
    aula_id: 'aula-54',
    pergunta: 'Quem é chamado a buscar a santidade?',
    alternativas: ['Somente os padres', 'Somente as pessoas idosas', 'Todas as pessoas que desejam seguir Jesus', 'Somente pessoas que vivem em conventos'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-378',
    aula_id: 'aula-54',
    pergunta: 'Por que conhecer a história dos santos pode ajudar na caminhada de fé?',
    alternativas: ['Para competir com outras pessoas', 'Para conhecer exemplos de fé, coragem e caridade', 'Para aprender a nunca pedir ajuda', 'Para evitar participar da comunidade'],
    resposta_correta: 1,
  },

  // AULA 55 — Caridade e serviço ao próximo
  {
    id: 'atividade-379',
    aula_id: 'aula-55',
    pergunta: 'O que significa praticar a caridade?',
    alternativas: ['Ajudar somente quem pode retribuir', 'Dar presentes para receber elogios', 'Pensar apenas nas próprias necessidades', 'Demonstrar amor por meio de atitudes concretas'],
    resposta_correta: 3,
  },
  {
    id: 'atividade-380',
    aula_id: 'aula-55',
    pergunta: 'Qual ensinamento de Jesus está relacionado ao cuidado com o próximo?',
    alternativas: ['Amar o próximo como a si mesmo', 'Buscar sempre ser o primeiro', 'Ajudar somente os amigos', 'Evitar conviver com pessoas diferentes'],
    resposta_correta: 0,
  },
  {
    id: 'atividade-381',
    aula_id: 'aula-55',
    pergunta: 'Segundo o ensinamento de Jesus em Mateus 25, como podemos servi-lo?',
    alternativas: ['Acumulando riquezas', 'Ignorando quem sofre', 'Acolhendo e ajudando quem precisa', 'Julgando todas as pessoas'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-382',
    aula_id: 'aula-55',
    pergunta: 'Qual é um exemplo de caridade no cotidiano?',
    alternativas: ['Espalhar fofocas', 'Ajudar um colega com dificuldade', 'Excluir alguém de uma atividade', 'Desrespeitar os idosos'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-383',
    aula_id: 'aula-55',
    pergunta: 'Por que devemos ajudar as pessoas sem esperar recompensa?',
    alternativas: ['Para sermos considerados superiores', 'Para recebermos presentes depois', 'Para aparecer nas redes sociais', 'Porque o amor e o serviço devem ser sinceros'],
    resposta_correta: 3,
  },
  {
    id: 'atividade-384',
    aula_id: 'aula-55',
    pergunta: 'O que é solidariedade?',
    alternativas: ['Colocar-se ao lado de quem precisa e oferecer ajuda', 'Evitar qualquer responsabilidade', 'Pensar somente nos próprios interesses', 'Criticar quem enfrenta dificuldades'],
    resposta_correta: 0,
  },
  {
    id: 'atividade-385',
    aula_id: 'aula-55',
    pergunta: 'Como a comunidade cristã pode praticar a caridade?',
    alternativas: ['Ignorando os problemas sociais', 'Ajudando somente seus conhecidos', 'Organizando ações de apoio e acolhimento', 'Evitando contato com pessoas necessitadas'],
    resposta_correta: 2,
  },

  // AULA 56 — Perdão e reconciliação na família e na comunidade
  {
    id: 'atividade-386',
    aula_id: 'aula-56',
    pergunta: 'O que significa perdoar alguém?',
    alternativas: ['Fingir que nada aconteceu', 'Escolher não alimentar o ressentimento e buscar a paz', 'Concordar com tudo o que a pessoa faz', 'Esquecer imediatamente qualquer situação'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-387',
    aula_id: 'aula-56',
    pergunta: 'Qual atitude pode ajudar a resolver um conflito familiar?',
    alternativas: ['Gritar para vencer a discussão', 'Espalhar o problema para outras pessoas', 'Deixar de conversar para sempre', 'Dialogar com respeito e ouvir o outro'],
    resposta_correta: 3,
  },
  {
    id: 'atividade-388',
    aula_id: 'aula-56',
    pergunta: 'O que devemos fazer quando percebemos que machucamos alguém com nossas atitudes?',
    alternativas: ['Reconhecer o erro e pedir desculpas', 'Culpar outra pessoa', 'Fingir que não aconteceu', 'Repetir a mesma atitude'],
    resposta_correta: 0,
  },
  {
    id: 'atividade-389',
    aula_id: 'aula-56',
    pergunta: 'Por que é importante ouvir o outro durante uma reconciliação?',
    alternativas: ['Para preparar uma resposta ofensiva', 'Para provar que sempre estamos certos', 'Para compreender seus sentimentos e seu ponto de vista', 'Para evitar qualquer responsabilidade'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-390',
    aula_id: 'aula-56',
    pergunta: 'Perdoar significa aceitar que alguém continue fazendo algo que nos machuca?',
    alternativas: ['Sim, sempre devemos aceitar', 'Não, é possível perdoar e também estabelecer limites seguros', 'Sim, porque os limites impedem o perdão', 'Não, porque ninguém deve perdoar'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-391',
    aula_id: 'aula-56',
    pergunta: 'O que ajuda a reconstruir a confiança depois de um conflito?',
    alternativas: ['Promessas que nunca são cumpridas', 'Evitar qualquer conversa', 'Esconder os próprios erros', 'Atitudes sinceras e mudanças de comportamento'],
    resposta_correta: 3,
  },
  {
    id: 'atividade-392',
    aula_id: 'aula-56',
    pergunta: 'Qual ensinamento de Jesus inspira o perdão?',
    alternativas: ['Perdoar como desejamos ser perdoados', 'Guardar rancor de todos', 'Responder sempre com ofensas', 'Afastar todas as pessoas que erram'],
    resposta_correta: 0,
  },

  // AULA 57 — Cuidar da criação
  {
    id: 'atividade-393',
    aula_id: 'aula-57',
    pergunta: 'Por que os cristãos devem cuidar da natureza?',
    alternativas: ['Porque os recursos naturais são infinitos', 'Porque somente algumas pessoas dependem dela', 'Porque a criação é um dom de Deus que deve ser cuidado', 'Porque a natureza não precisa de proteção'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-394',
    aula_id: 'aula-57',
    pergunta: 'O que significa ser responsável pela criação?',
    alternativas: ['Usar os recursos sem limites', 'Proteger o meio ambiente e utilizar os recursos com responsabilidade', 'Desperdiçar água e energia', 'Ignorar a poluição'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-395',
    aula_id: 'aula-57',
    pergunta: 'Qual atitude contribui para cuidar do meio ambiente?',
    alternativas: ['Jogar lixo nos rios', 'Deixar torneiras abertas', 'Desperdiçar alimentos', 'Separar materiais recicláveis e reduzir o desperdício'],
    resposta_correta: 3,
  },
  {
    id: 'atividade-396',
    aula_id: 'aula-57',
    pergunta: 'Qual livro bíblico apresenta a criação do mundo?',
    alternativas: ['Gênesis', 'Êxodo', 'Atos dos Apóstolos', 'Apocalipse'],
    resposta_correta: 0,
  },
  {
    id: 'atividade-397',
    aula_id: 'aula-57',
    pergunta: 'O que significa ecologia integral?',
    alternativas: ['Cuidar somente das florestas', 'Proteger apenas os animais domésticos', 'Compreender que o cuidado ambiental está ligado à vida humana e social', 'Pensar somente no desenvolvimento econômico'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-398',
    aula_id: 'aula-57',
    pergunta: 'Qual documento do Papa Francisco aborda o cuidado com a casa comum?',
    alternativas: ['Rerum Novarum', 'Laudato Si’', 'Deus Caritas Est', 'Lumen Gentium'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-399',
    aula_id: 'aula-57',
    pergunta: 'Como podemos demonstrar respeito pela criação no dia a dia?',
    alternativas: ['Desperdiçando recursos', 'Destruindo áreas verdes', 'Poluindo os espaços públicos', 'Economizando água e cuidando dos espaços naturais'],
    resposta_correta: 3,
  },

  // AULA 58 — Ser cristão na escola, em casa e na internet
  {
    id: 'atividade-400',
    aula_id: 'aula-58',
    pergunta: 'Como um cristão pode demonstrar sua fé na escola?',
    alternativas: ['Respeitando colegas e professores e praticando o bem', 'Excluindo quem pensa diferente', 'Espalhando fofocas', 'Desrespeitando as regras'],
    resposta_correta: 0,
  },
  {
    id: 'atividade-401',
    aula_id: 'aula-58',
    pergunta: 'Qual atitude demonstra respeito dentro de casa?',
    alternativas: ['Ignorar as pessoas da família', 'Evitar qualquer colaboração', 'Ajudar nas tarefas e tratar todos com carinho', 'Responder sempre com agressividade'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-402',
    aula_id: 'aula-58',
    pergunta: 'Como devemos agir ao utilizar a internet?',
    alternativas: ['Compartilhar qualquer informação sem verificar', 'Agir com respeito, responsabilidade e cuidado', 'Ofender pessoas em comentários', 'Divulgar informações pessoais de outras pessoas'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-403',
    aula_id: 'aula-58',
    pergunta: 'O que fazer ao presenciar uma situação de bullying?',
    alternativas: ['Participar das provocações', 'Gravar e divulgar a situação', 'Ignorar sempre o que está acontecendo', 'Não apoiar as agressões e procurar ajuda de um adulto de confiança'],
    resposta_correta: 3,
  },
  {
    id: 'atividade-404',
    aula_id: 'aula-58',
    pergunta: 'Por que devemos proteger nossos dados pessoais na internet?',
    alternativas: ['Para preservar nossa privacidade e segurança', 'Para impedir qualquer amizade', 'Porque compartilhar senhas é obrigatório', 'Porque não existem riscos no ambiente digital'],
    resposta_correta: 0,
  },
  {
    id: 'atividade-405',
    aula_id: 'aula-58',
    pergunta: 'Qual atitude está de acordo com os ensinamentos de Jesus nas redes sociais?',
    alternativas: ['Espalhar notícias falsas', 'Humilhar pessoas em comentários', 'Publicar mensagens respeitosas e que promovam o bem', 'Compartilhar conteúdos ofensivos'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-406',
    aula_id: 'aula-58',
    pergunta: 'O que significa viver a fé no cotidiano?',
    alternativas: ['Falar de Deus, mas não praticar o bem', 'Colocar em prática o amor, o respeito e a honestidade', 'Ser gentil somente durante a missa', 'Ajudar apenas quando recebemos algo em troca'],
    resposta_correta: 1,
  },

  // AULA 59 — Vocação: Deus chama cada pessoa
  {
    id: 'atividade-407',
    aula_id: 'aula-59',
    pergunta: 'O que significa vocação na vida cristã?',
    alternativas: ['Escolher uma profissão apenas pelo salário', 'Ter uma habilidade especial para esportes', 'Seguir sempre a escolha dos amigos', 'Responder ao chamado de Deus para viver o amor e servir'],
    resposta_correta: 3,
  },
  {
    id: 'atividade-408',
    aula_id: 'aula-59',
    pergunta: 'Qual destas opções representa uma vocação na Igreja?',
    alternativas: ['Matrimônio', 'Competição', 'Fama', 'Riqueza'],
    resposta_correta: 0,
  },
  {
    id: 'atividade-409',
    aula_id: 'aula-59',
    pergunta: 'O que caracteriza a vocação ao sacerdócio?',
    alternativas: ['Buscar somente reconhecimento', 'Viver sem compromisso com a comunidade', 'Dedicar-se ao serviço de Deus e do povo por meio do ministério ordenado', 'Evitar participar da vida da Igreja'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-410',
    aula_id: 'aula-59',
    pergunta: 'O que é a vida consagrada?',
    alternativas: ['Uma vida dedicada exclusivamente ao trabalho profissional', 'Uma forma de vida dedicada a Deus por meio de compromissos religiosos', 'Uma atividade realizada somente aos domingos', 'Uma obrigação de todas as pessoas'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-411',
    aula_id: 'aula-59',
    pergunta: 'Qual atitude pode ajudar alguém a discernir sua vocação?',
    alternativas: ['Decidir sem refletir', 'Ignorar seus valores', 'Escolher apenas para agradar aos outros', 'Rezar, refletir e buscar orientação de pessoas de confiança'],
    resposta_correta: 3,
  },
  {
    id: 'atividade-412',
    aula_id: 'aula-59',
    pergunta: 'Qual é a importância dos dons e talentos pessoais na descoberta da vocação?',
    alternativas: ['Podem ser colocados a serviço de Deus e das outras pessoas', 'Devem ser usados somente para competir', 'Não têm nenhuma relação com a vida', 'Servem apenas para obter reconhecimento'],
    resposta_correta: 0,
  },
  {
    id: 'atividade-413',
    aula_id: 'aula-59',
    pergunta: 'O que todas as vocações cristãs têm em comum?',
    alternativas: ['A necessidade de seguir a mesma profissão', 'A obrigação de viver no mesmo lugar', 'O chamado ao amor, à fé e ao serviço', 'A busca por riqueza e fama'],
    resposta_correta: 2,
  },

  // AULA 60 — Minha caminhada continua
  {
    id: 'atividade-414',
    aula_id: 'aula-60',
    pergunta: 'A caminhada de fé termina quando concluímos a catequese?',
    alternativas: ['Sim, porque a catequese é toda a vida cristã', 'Não, a fé continua sendo vivida e desenvolvida ao longo da vida', 'Sim, porque não precisamos mais da comunidade', 'Não, mas somente os catequistas podem continuar'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-415',
    aula_id: 'aula-60',
    pergunta: 'Qual atitude ajuda a fortalecer a fé depois da catequese?',
    alternativas: ['Afastar-se de todas as pessoas', 'Deixar de rezar', 'Ignorar os ensinamentos de Jesus', 'Continuar rezando, aprendendo e participando da comunidade'],
    resposta_correta: 3,
  },
  {
    id: 'atividade-416',
    aula_id: 'aula-60',
    pergunta: 'Por que a participação na comunidade cristã é importante?',
    alternativas: ['Porque fortalece a fé e permite viver a fraternidade', 'Porque elimina todos os desafios', 'Porque substitui nossas responsabilidades', 'Porque serve apenas para encontrar amigos'],
    resposta_correta: 0,
  },
  {
    id: 'atividade-417',
    aula_id: 'aula-60',
    pergunta: 'Qual é o papel da oração na caminhada cristã?',
    alternativas: ['Servir somente para pedir coisas', 'Substituir todas as nossas atitudes', 'Fortalecer a relação com Deus e orientar nossas escolhas', 'Ser realizada apenas em momentos difíceis'],
    resposta_correta: 2,
  },
  {
    id: 'atividade-418',
    aula_id: 'aula-60',
    pergunta: 'Como podemos colocar em prática os ensinamentos aprendidos na catequese?',
    alternativas: ['Guardando tudo apenas na memória', 'Vivendo o amor, o perdão e o serviço ao próximo', 'Evitando ajudar outras pessoas', 'Julgando quem pensa diferente'],
    resposta_correta: 1,
  },
  {
    id: 'atividade-419',
    aula_id: 'aula-60',
    pergunta: 'O que significa ser missionário no dia a dia?',
    alternativas: ['Viajar obrigatoriamente para outros países', 'Falar de religião sem respeitar ninguém', 'Afastar-se da sociedade', 'Compartilhar o amor de Deus por meio de palavras e atitudes'],
    resposta_correta: 3,
  },
  {
    id: 'atividade-420',
    aula_id: 'aula-60',
    pergunta: 'Qual deve ser o compromisso de quem deseja continuar seguindo Jesus?',
    alternativas: ['Buscar viver seus ensinamentos e crescer na fé', 'Pensar somente nos próprios interesses', 'Abandonar a comunidade', 'Evitar qualquer responsabilidade'],
    resposta_correta: 0,
  },
];




export const students = [
  { id: 's1', nome: 'Ana Clara Santos', progresso: 72, ultimoAcesso: 'Hoje',   status: 'ativo'    },
  { id: 's2', nome: 'Pedro Henrique',   progresso: 48, ultimoAcesso: 'Ontem',  status: 'ativo'    },
  { id: 's3', nome: 'Mariana Costa',    progresso: 91, ultimoAcesso: 'Hoje',   status: 'ativo'    },
  { id: 's4', nome: 'Lucas Martins',    progresso: 18, ultimoAcesso: '7 dias', status: 'pendente' },
];

export const announcements = [
  {
    id: 'c1',
    titulo: 'Encontro presencial',
    mensagem: 'Nosso próximo encontro será sábado, às 15h, no salão paroquial.',
    data: '18/05/2026',
  },
  {
    id: 'c2',
    titulo: 'Material da semana',
    mensagem: 'Leia o resumo da aula 2 antes de responder o quiz.',
    data: '16/05/2026',
  },
];
