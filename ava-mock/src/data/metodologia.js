export const etapasMetodologia = [
  { id: 1, nome: 'Meu momento', apoio: 'Entender sua realidade atual' },
  { id: 2, nome: 'Possíveis caminhos', apoio: 'Explorar sem precisar decidir' },
  { id: 3, nome: 'Meu objetivo', apoio: 'Escolher um norte editável' },
  { id: 4, nome: 'Meu plano', apoio: 'Organizar uma rota possível' },
  { id: 5, nome: 'Escolher etapas', apoio: 'Priorizar o que cabe na rotina' },
  { id: 6, nome: 'Próximo passo', apoio: 'Transformar intenção em ação' },
  { id: 7, nome: 'Pessoas e apoio', apoio: 'Conectar serviços e pessoas' },
  { id: 8, nome: 'Acompanhamento', apoio: 'Revisar e recalibrar' },
];

export const opcoesMomento = {
  necessidade: [
    { id: 'direcao', titulo: 'Entender onde o curso pode me levar', descricao: 'Quero enxergar possibilidades profissionais concretas.' },
    { id: 'tempo', titulo: 'Organizar estudo, trabalho e vida pessoal', descricao: 'Preciso de um plano que caiba na minha semana.' },
    { id: 'conteudo', titulo: 'Ganhar confiança nas disciplinas', descricao: 'Quero reforçar uma base antes de avançar.' },
    { id: 'conexao', titulo: 'Conversar com alguém sobre minha jornada', descricao: 'Uma troca humana pode me ajudar a decidir.' },
  ],
  potenciais: [
    { id: 'analise', titulo: 'Investigar e resolver problemas' },
    { id: 'organizacao', titulo: 'Organizar processos e fazer acontecer' },
    { id: 'colaboracao', titulo: 'Escutar, orientar e trabalhar em equipe' },
  ],
  tempo: [
    { id: '2', titulo: 'Até 2 horas por semana' },
    { id: '4', titulo: 'De 3 a 5 horas por semana' },
    { id: '8', titulo: 'De 6 a 10 horas por semana' },
  ],
};

export const caminhos = [
  {
    id: 'dados',
    titulo: 'Analista de Dados',
    area: 'Dados e decisão',
    descricao: 'Transforma informações em respostas para apoiar decisões de negócio.',
    rotina: 'Investigar dados, criar análises e explicar descobertas para diferentes áreas.',
    combinaCom: ['analise', 'organizacao'],
    evidencias: {
      analise: 'Você disse que gosta de investigar e resolver problemas.',
      organizacao: 'Sua preferência por organizar situações ajuda a estruturar análises.',
      colaboracao: 'A comunicação com outras áreas faz parte do dia a dia dessa carreira.',
    },
    produtos: ['Curso Fundamentos de Dados', 'Projeto guiado de portfólio'],
  },
  {
    id: 'projetos',
    titulo: 'Analista de Projetos',
    area: 'Projetos e operações',
    descricao: 'Ajuda equipes a transformar objetivos em entregas organizadas e viáveis.',
    rotina: 'Planejar etapas, alinhar pessoas, acompanhar prazos e remover obstáculos.',
    combinaCom: ['organizacao', 'colaboracao'],
    evidencias: {
      analise: 'Seu olhar para problemas ajuda a antecipar obstáculos do projeto.',
      organizacao: 'Você indicou facilidade para organizar processos e fazer acontecer.',
      colaboracao: 'Você valoriza colaboração, essencial para alinhar diferentes equipes.',
    },
    produtos: ['Trilha Gestão de Projetos', 'Mentoria com profissional da área'],
  },
  {
    id: 'experiencia',
    titulo: 'Analista de Experiência',
    area: 'Pessoas e serviços',
    descricao: 'Melhora produtos e serviços a partir das necessidades das pessoas.',
    rotina: 'Ouvir usuários, mapear jornadas e colaborar na criação de soluções.',
    combinaCom: ['colaboracao', 'analise'],
    evidencias: {
      analise: 'Sua curiosidade ajuda a transformar relatos em oportunidades de melhoria.',
      organizacao: 'Organizar jornadas e aprendizados é uma parte importante dessa função.',
      colaboracao: 'Você escolheu escuta e colaboração como uma de suas forças.',
    },
    produtos: ['Oficina de Jornada do Usuário', 'Comunidade de projetos aplicados'],
  },
];

export const passosPlano = [
  {
    id: 'fundamentos',
    horizonte: 'Agora',
    titulo: 'Concluir Fundamentos de Dados',
    descricao: 'Curso introdutório de 2 horas, dividido em blocos curtos.',
    tipo: 'Aprendizado',
  },
  {
    id: 'projeto',
    horizonte: 'Próximos 30 dias',
    titulo: 'Criar uma análise para o portfólio',
    descricao: 'Projeto guiado com um problema realista e devolutiva.',
    tipo: 'Experiência',
  },
  {
    id: 'mentoria',
    horizonte: 'Depois',
    titulo: 'Conversar com alguém da área',
    descricao: 'Encontro de 20 minutos para validar dúvidas e próximos caminhos.',
    tipo: 'Conexão',
  },
];

export const apoios = [
  {
    id: 'tutoria-carreira',
    titulo: 'Tutoria de carreira',
    descricao: 'Conversa individual para revisar objetivo, possibilidades e plano.',
    formato: 'Online · 20 minutos',
  },
  {
    id: 'apoio-academico',
    titulo: 'Apoio acadêmico',
    descricao: 'Plantão para dúvidas e reforço de conteúdos essenciais.',
    formato: 'Online · horários flexíveis',
  },
  {
    id: 'comunidade',
    titulo: 'Comunidade de estudantes',
    descricao: 'Troca com colegas que também estão construindo uma nova direção.',
    formato: 'Grupo moderado · acesso contínuo',
  },
];

export const estadoInicial = {
  etapa: 1,
  necessidade: 'direcao',
  potencial: 'analise',
  tempo: '4',
  caminho: 'dados',
  objetivo: 'Atuar como Analista de Dados',
  passosSelecionados: ['fundamentos', 'projeto', 'mentoria'],
  proximaAcao: 'Concluir o primeiro módulo de Fundamentos de Dados',
  dataAcao: '2026-08-22',
  acaoConcluida: false,
  apoiosSelecionados: ['tutoria-carreira'],
  percepcao: 'confiante',
  planoConfirmado: false,
};
