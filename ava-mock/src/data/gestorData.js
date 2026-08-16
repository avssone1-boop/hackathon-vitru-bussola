export const resumoJornada = [
  { valor: '321', rotulo: 'Alunos iniciaram a Bússola', detalhe: '+18% nas últimas 4 semanas' },
  { valor: '75%', rotulo: 'Definiram um objetivo', detalhe: '242 alunos' },
  { valor: '51%', rotulo: 'Ativaram o plano em 30 dias', detalhe: '163 concluíram uma ação' },
  { valor: '31%', rotulo: 'Escolheram algum apoio', detalhe: '98 pedidos com consentimento' },
];

export const funilEtapas = [
  { id: 1, nome: 'Meu momento', alunos: 321 },
  { id: 2, nome: 'Possíveis caminhos', alunos: 292 },
  { id: 3, nome: 'Meu objetivo', alunos: 276 },
  { id: 4, nome: 'Meu plano', alunos: 242 },
  { id: 5, nome: 'Escolher etapas', alunos: 221 },
  { id: 6, nome: 'Próximo passo', alunos: 205 },
  { id: 7, nome: 'Pessoas e apoio', alunos: 163 },
  { id: 8, nome: 'Acompanhamento', alunos: 142 },
];

export const demandaApoio = [
  { nome: 'Tutoria de carreira', total: 46, percentual: 47 },
  { nome: 'Apoio acadêmico', total: 31, percentual: 32 },
  { nome: 'Comunidade de estudantes', total: 21, percentual: 21 },
];

export const caminhosExplorados = [
  { nome: 'Dados e decisão', total: 94, percentual: 39 },
  { nome: 'Projetos e operações', total: 82, percentual: 34 },
  { nome: 'Pessoas e serviços', total: 66, percentual: 27 },
];

export const cursosAgregados = [
  { curso: 'Administração', participantes: 78, objetivo: 62, ativacao: 55, apoio: 'Tutoria de carreira' },
  { curso: 'Pedagogia', participantes: 69, objetivo: 49, ativacao: 46, apoio: 'Comunidade de estudantes' },
  { curso: 'Ciências Contábeis', participantes: 58, objetivo: 47, ativacao: 53, apoio: 'Apoio acadêmico' },
  { curso: 'Engenharia de Produção', participantes: 51, objetivo: 39, ativacao: 49, apoio: 'Apoio acadêmico' },
  { curso: 'Serviço Social', participantes: 42, objetivo: 31, ativacao: 45, apoio: 'Tutoria de carreira' },
];

export const acoesGestao = [
  {
    titulo: 'Abrir novos horários de tutoria de carreira',
    evidencia: '47% das escolhas de apoio foram para tutoria individual.',
    responsavel: 'Núcleo de Carreiras',
    prazo: 'Próximos 7 dias',
  },
  {
    titulo: 'Revisar a transição entre objetivo e plano',
    evidencia: '34 alunos interromperam a jornada entre as etapas 3 e 4.',
    responsavel: 'Produto + Pedagógico',
    prazo: 'Próxima sprint',
  },
  {
    titulo: 'Testar lembrete voluntário da primeira ação',
    evidencia: 'A ativação em 30 dias está em 51%; meta inicial do MVP: 60%.',
    responsavel: 'CRM Educacional',
    prazo: 'Experimento de 14 dias',
  },
];
