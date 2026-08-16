export const perguntas = [
  {
    id: 1,
    categoria: "SEU NORTE",
    titulo: "Quando você imagina sua vida depois da faculdade, qual mudança mais importa?",
    subtitulo: "Não existe resposta certa. Queremos entender o que faz esse esforço valer a pena para você.",
    opcoes: [
      { letra: "A", label: "Conquistar uma posição profissional melhor", descricao: "Crescer, assumir novos desafios e ampliar oportunidades.", persona: "Acelerador" },
      { letra: "B", label: "Ter mais estabilidade financeira", descricao: "Construir segurança para mim e para quem depende de mim.", persona: "Construtor" },
      { letra: "C", label: "Realizar algo importante para mim", descricao: "Concluir a graduação tem um significado pessoal profundo.", persona: "Realizador" },
      { letra: "D", label: "Descobrir uma área com a qual eu me identifique", descricao: "Ainda estou entendendo que caminho combina comigo.", persona: "Explorador" }
    ]
  },
  {
    id: 2,
    categoria: "SUA REALIDADE",
    titulo: "Quanto tempo você consegue reservar para estudar em uma semana comum?",
    subtitulo: "Vamos montar uma jornada possível — não uma rotina idealizada.",
    opcoes: [
      { letra: "A", label: "Até 2 horas", descricao: "Minha rotina muda bastante ou está no limite.", valor: 2 },
      { letra: "B", label: "De 3 a 5 horas", descricao: "Preciso de atividades curtas e flexíveis.", valor: 4 },
      { letra: "C", label: "De 6 a 10 horas", descricao: "Consigo manter uma rotina semanal.", valor: 8 },
      { letra: "D", label: "Mais de 10 horas", descricao: "Tenho espaço para uma trilha mais intensa.", valor: 12 }
    ]
  },
  {
    id: 3,
    categoria: "MOMENTO ATUAL",
    titulo: "O que mais dificulta continuar estudando hoje?",
    subtitulo: "Sua resposta serve para oferecer apoio. Ela não reduz suas oportunidades.",
    opcoes: [
      { letra: "A", label: "Não consigo organizar o tempo", descricao: "Trabalho, família e estudo competem pela mesma energia.", preocupacao: "tempo" },
      { letra: "B", label: "Não enxergo onde o curso vai me levar", descricao: "As disciplinas parecem desconectadas do meu futuro.", preocupacao: "carreira" },
      { letra: "C", label: "Tenho dificuldade para acompanhar algumas matérias", descricao: "Preciso reforçar uma base antes de avançar.", preocupacao: "academico" },
      { letra: "D", label: "Estou pensando seriamente em desistir", descricao: "Quero rever minha jornada com alguém.", intencaoDesistencia: true }
    ]
  },
  {
    id: 4,
    categoria: "SEU POTENCIAL",
    titulo: "Em que tipo de atividade você costuma sentir mais realização?",
    subtitulo: "Isso nos ajuda a escolher uma experiência que mostre seu potencial em ação.",
    opcoes: [
      { letra: "A", label: "Resolver um problema difícil", descricao: "Investigar causas, testar caminhos e chegar a uma resposta.", potencial: "analise" },
      { letra: "B", label: "Criar ou construir alguma coisa", descricao: "Transformar uma ideia em algo que funciona.", potencial: "criatividade" },
      { letra: "C", label: "Organizar uma situação confusa", descricao: "Dar estrutura, criar ordem e fazer o grupo avançar.", potencial: "organizacao" },
      { letra: "D", label: "Ajudar pessoas a avançar", descricao: "Escutar, colaborar e melhorar a experiência de alguém.", potencial: "colaboracao" }
    ]
  },
  {
    id: 5,
    categoria: "SEU JEITO DE AVANÇAR",
    titulo: "Qual experiência faria você aprender melhor agora?",
    subtitulo: "Você poderá mudar essa preferência quando quiser.",
    opcoes: [
      { letra: "A", label: "Um desafio prático e curto", descricao: "Quero testar algo e ver resultado rapidamente.", formato: "pratica_curta" },
      { letra: "B", label: "Um projeto dividido em pequenas etapas", descricao: "Gosto de progresso claro e previsível.", formato: "projeto_etapas" },
      { letra: "C", label: "Conversar com alguém da área", descricao: "Quero entender possibilidades antes de escolher.", formato: "mentoria" },
      { letra: "D", label: "Aprender junto com outras pessoas", descricao: "A troca me ajuda a manter o ritmo.", formato: "colaborativo" }
    ]
  },
  {
    id: 6,
    categoria: "PRÓXIMO DESTINO",
    titulo: "Hoje, quão claro está o caminho profissional que você quer seguir?",
    subtitulo: "Clareza não é certeza. É apenas saber qual próximo passo vale experimentar.",
    opcoes: [
      { letra: "A", label: "Tenho uma carreira ou empresa em mente", descricao: "Quero uma rota objetiva até esse destino.", clareza: "alta" },
      { letra: "B", label: "Conheço a área, mas não o cargo", descricao: "Preciso emergir as portas de entrada.", clareza: "media" },
      { letra: "C", label: "Tenho alguns interesses, mas estou em dúvida", descricao: "Quero comparar caminhos sem decidir agora.", clareza: "baixa" },
      { letra: "D", label: "Estou completamente perdido(a)", descricao: "Preciso começar entendendo possibilidades.", clareza: "nenhuma" }
    ]
  }
];
