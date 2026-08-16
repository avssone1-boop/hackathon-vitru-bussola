# Bússola — Front-end Design & Build Brief para Codex

## 0. Papel do Codex

Atue primeiro como **Senior Product Designer** e depois como **Senior Front-end Engineer**.

O objetivo é projetar e implementar uma experiência web de alta fidelidade para o **Bússola**, um agente de inteligência motivacional para estudantes do ensino superior EAD.

Não trate o produto como:
- teste psicológico clínico;
- chatbot genérico;
- dashboard administrativo;
- formulário burocrático;
- app infantil gamificado.

A experiência deve parecer uma conversa estruturada, confiável e humana que entende **o que move o estudante**, transforma respostas em um **perfil de apoio explicável** e então adapta a experiência do portal.

---

# 1. Objetivo da experiência

Criar um fluxo completo no qual o estudante:

1. entende rapidamente por que está sendo convidado a responder;
2. responde perguntas motivacionais com pouco esforço cognitivo;
3. percebe progresso sem ansiedade;
4. recebe uma devolutiva compreensível, sem rótulos deterministas;
5. entende seus principais motivadores e barreiras;
6. recebe uma próxima ação concreta;
7. consegue conversar com o Bússola quando precisar de orientação.

A interface deve reforçar a ideia:

> "A faculdade entende o que me trouxe até aqui e consegue me ajudar a continuar."

---

# 2. Referências visuais

Use as referências abaixo como **direção**, não como templates para copiar.

## A. Onboarding / Quiz

### Pinterest — Onboarding Quiz UI
https://www.pinterest.com/ideas/onboarding-quiz-ui/927003463254/

Usar como referência para:
- uma pergunta por etapa;
- progresso sempre visível;
- respostas grandes e clicáveis;
- baixa densidade de informação;
- sensação de avanço rápido.

### Pinterest — Onboarding screen / Quiz mobile app
https://www.pinterest.com/pin/onboarding-screen-ui-design-quiz-mobile-app--596093700704533308/

Usar como referência para:
- hierarquia pergunta → alternativas → ação;
- composição mobile;
- áreas de toque confortáveis;
- foco total na tarefa.

### Pinterest — Culinary Personality Quiz
https://www.pinterest.com/pin/culinary-personality-quiz-ui-travel-app-onboarding-this-elegant-multistep-form-asks-users-how-do-you-decide-where-to-dine-when-youre-on-vacation-wit-in-2025--982840318699928178/

Usar como referência para:
- personalidade sem infantilização;
- multi-step form;
- escolhas como cards;
- transições discretas.

---

## B. Portal / Resultado

### Pinterest — Student Dashboard UI Design
https://www.pinterest.com/ideas/student-dashboard-ui-design/931471126493/

Usar como referência para:
- hierarquia da área do aluno;
- agrupamento de informações;
- clareza de prioridades.

Não copiar dashboards com excesso de métricas.

### Pinterest — Education Learning Dashboard
https://www.pinterest.com/pin/education-learning-dashboard-ui-light-mode--149885493840913273/

Usar como referência para:
- layout claro;
- superfícies neutras;
- progressos;
- tarefas prioritárias.

---

## C. Agente / Conversação

### Pinterest — Chatbot UI Design
https://www.pinterest.com/ideas/chatbot-ui-design/917392977700/

### Pinterest — Conversational UI
https://www.pinterest.com/uxfromscratch/conversational-ui/

Usar como referência para:
- input persistente;
- sugestões de próximas ações;
- respostas estruturadas;
- coexistência entre chat e UI contextual.

Evitar interface clonada do ChatGPT.

---

# 3. Direção visual

## Personalidade

A interface deve ser:

- acolhedora sem parecer infantil;
- otimista sem usar gamificação excessiva;
- limpa;
- calma;
- jovem;
- contemporânea;
- confiável;
- bastante legível;
- acessível;
- orientada para ação.

Visualmente, aproximar-se de uma combinação entre:

**produto educacional premium + onboarding de produto de consumo + interface de IA discreta.**

---

# 4. Sistema visual

## Base

Utilizar:

- React;
- TypeScript;
- Vite;
- Tailwind CSS;
- shadcn/ui;
- Motion;
- Lucide;
- Recharts;
- React Hook Form;
- Zod.

Não instalar bibliotecas adicionais sem necessidade clara.

## Cores

Criar os tokens semanticamente.

Sugestão de direção:

```css
--background: #FFFFFF;
--surface: #F8F9FB;
--surface-subtle: #F3F4F6;

--text-primary: #171717;
--text-secondary: #626262;
--text-tertiary: #8A8A8A;

--border: #E7E7E7;

--brand: #6D5DFB;
--brand-hover: #5B4BE8;
--brand-soft: #F0EEFF;

--success: #268A57;
--warning: #B86A12;
--danger: #C74444;
```

A paleta final pode ser refinada durante a criação do conceito, mas deve permanecer clara e de alto contraste.

Não usar gradientes decorativos aleatórios.

---

# 5. Tipografia

Preferir fonte sans-serif contemporânea e altamente legível.

Sugestões:
- Inter;
- Geist;
- Manrope.

Hierarquia aproximada:

- Display: 40–48 px;
- H1: 32–40 px;
- H2: 24–28 px;
- H3: 18–20 px;
- Body: 16 px;
- Small: 14 px;
- Caption: 12–13 px.

Não usar texto abaixo de 12 px.

---

# 6. Geometria e espaçamento

## Radius

- controles: 10–12 px;
- cards: 16 px;
- superfícies principais: 20 px;
- pills apenas quando semanticamente necessárias.

## Espaçamento

Base de 4 px.

Principais valores:

```text
4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64
```

Evitar nested cards.

Sempre preferir:
- espaço;
- tipografia;
- agrupamento;
- hierarquia.

Antes de criar bordas e caixas extras.

---

# 7. Arquitetura da experiência

Criar os seguintes estados/telas.

---

## Tela 01 — Entrada

Objetivo:
explicar por que o estudante está respondendo.

Estrutura:

```text
[Bússola]

Queremos entender o que trouxe
você até aqui.

Em poucos minutos, vamos entender melhor seus objetivos,
o que pode dificultar sua jornada e como podemos apoiar você.

[ Começar ]

Leva cerca de poucos minutos.
Suas respostas ajudam a personalizar sua experiência.
```

Regras:
- layout muito limpo;
- uma ação primária;
- sem ilustração genérica ocupando metade da tela;
- pode existir uma pequena manifestação visual da marca.

---

## Tela 02 — Assessment

Desktop:

```text
┌────────────────────────────────────────────────────────────┐
│ Bússola                                      Etapa 4 de 10 │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                            │
│                 O que mais faria você                      │
│                 sentir que valeu a pena                    │
│                 começar esta faculdade?                    │
│                                                            │
│      ┌─────────────────────────────────────────────┐       │
│      │ Conseguir uma oportunidade melhor          │       │
│      └─────────────────────────────────────────────┘       │
│                                                            │
│      ┌─────────────────────────────────────────────┐       │
│      │ Crescer na profissão que já tenho          │       │
│      └─────────────────────────────────────────────┘       │
│                                                            │
│      ┌─────────────────────────────────────────────┐       │
│      │ Realizar um objetivo pessoal               │       │
│      └─────────────────────────────────────────────┘       │
│                                                            │
│      ← Voltar                              Continuar →      │
└────────────────────────────────────────────────────────────┘
```

### Comportamento

- uma pergunta por página;
- respostas selecionáveis;
- seleção claramente perceptível;
- permitir teclado;
- `Enter` pode avançar quando apropriado;
- nunca avançar acidentalmente na seleção;
- preservar respostas ao voltar;
- Motion entre as etapas;
- transição entre 180–280 ms;
- respeitar `prefers-reduced-motion`.

### Tipos de pergunta suportados

Criar componentes reutilizáveis para:
- escolha única;
- múltipla escolha;
- escala;
- ordenação simples;
- texto curto opcional.

As perguntas devem vir de dados/configuração, e não ser hardcoded em cada tela.

---

# 8. Modelo de dados da avaliação

Criar uma estrutura semelhante a:

```ts
type Question = {
  id: string
  title: string
  description?: string
  type: "single" | "multiple" | "scale" | "text"
  options?: QuestionOption[]
  required?: boolean
}

type QuestionOption = {
  id: string
  label: string
  value: string | number
}
```

Separar:
- conteúdo;
- interface;
- regra de scoring/classificação.

Não implementar lógica psicológica arbitrária no front.

Criar apenas mock de scoring para demonstrar o fluxo.

---

# 9. Estado intermediário

Depois da última resposta, não mostrar spinner genérico.

Criar uma transição curta:

```text
Entendendo o que importa para você...

[ indicador discreto ]

Estamos conectando seus objetivos,
expectativas e possíveis obstáculos.
```

Duração simulada curta.

Não fingir análise clínica.

---

# 10. Tela de resultado

A tela precisa ser explicável.

Não mostrar apenas:

> "Você é Persona X"

Estrutura:

```text
Seu perfil de apoio

Você parece estar buscando principalmente
crescimento e transformação profissional.

Sua motivação aparece com mais força quando você
consegue enxergar uma conexão clara entre o esforço
de hoje e uma oportunidade concreta no futuro.

[ Visualização dos vetores ]

Carreira          █████████░  88
Propósito         ███████░░░  72
Autonomia         ██████░░░░  63
Pertencimento     ████░░░░░░  41

O que pode ajudar você agora

01  Enxergar rapidamente o impacto das primeiras disciplinas.
02  Ter metas de curto prazo conectadas ao seu objetivo.
03  Receber ajuda antes que pequenas barreiras virem bloqueios.

[ Montar meu primeiro passo ]
```

### Visualização

Criar inicialmente barras horizontais.

Também criar um componente opcional `MotivationRadar` utilizando Recharts, mas não usar radar como visual principal se a legibilidade ficar pior.

---

# 11. Persona

As quatro personas devem ser tratadas como **perfis de apoio**, e não caixas absolutas.

Estrutura:

```ts
type SupportProfile = {
  id: string
  name: string
  shortDescription: string
  explanation: string
  strongestDrivers: string[]
  possibleBarriers: string[]
  recommendedActions: RecommendedAction[]
}
```

Evitar:
- estereótipos;
- "você é assim";
- linguagem diagnóstica;
- inferências que o estudante não forneceu.

Preferir:
- "suas respostas indicam";
- "neste momento";
- "parece ter mais peso";
- "podemos começar por".

---

# 12. Tela — Meu primeiro passo

Transformar o resultado em ação.

Exemplo:

```text
Vamos transformar seu objetivo
em um primeiro passo.

Seu objetivo
Conseguir uma oportunidade melhor.

Nesta semana

[ ] Conhecer a estrutura da primeira disciplina
[ ] Reservar dois períodos de estudo
[ ] Identificar onde pedir ajuda
[ ] Concluir a primeira atividade

Você não precisa resolver o semestre inteiro hoje.

[ Começar pela primeira atividade ]
```

O aluno deve sair do assessment com uma ação, não apenas um gráfico.

---

# 13. Home personalizada

Não criar dashboard cheio de indicadores.

Hierarquia:

```text
Bom dia, Arthur.

Seu próximo passo está claro.

┌──────────────────────────────────────────────┐
│ Continue de onde parou                       │
│ Fundamentos de...                            │
│                                             │
│ 38% ━━━━━━━━━░░░░░░░░░░░░                  │
│                                             │
│ [ Continuar ]                               │
└──────────────────────────────────────────────┘


Seu objetivo
Conquistar uma nova oportunidade profissional.

Próximas ações

01  Finalizar atividade inicial
02  Separar próximo horário de estudo
03  Tirar uma dúvida com o Bússola


[ Pergunte ao Bússola ]
```

Evitar:
- GPA;
- streak;
- ranking;
- pontos;
- badges;
- dezenas de métricas;

a menos que façam parte do produto real.

---

# 14. Bússola — Assistente

O agente deve coexistir com a aplicação.

Desktop:
- painel lateral ou drawer;
- aproximadamente 380–440 px.

Mobile:
- tela cheia.

Estrutura:

```text
Bússola

Como posso ajudar?

[ Como isso me aproxima do meu objetivo? ]
[ Estou com dificuldade para começar ]
[ Onde encontro minha próxima atividade? ]

──────────────────────────────────

Você:
Não consegui estudar esta semana.

Bússola:
Tudo bem. Pelo que você definiu no começo,
seu objetivo principal continua sendo...

Podemos reduzir o próximo passo.

[ Abrir atividade ]
[ Reorganizar meu plano ]

──────────────────────────────────

[ Pergunte alguma coisa...              ] [↑]
```

### Regra importante

Quando possível, respostas do agente devem conter UI estruturada:
- ação;
- recomendação;
- link interno;
- pequena lista;
- estado de progresso.

Não construir apenas bolhas de texto.

---

# 15. Componentes

Criar os componentes:

```text
AppShell
BrandMark
ProgressHeader

AssessmentFlow
QuestionRenderer
SingleChoiceQuestion
MultipleChoiceQuestion
ScaleQuestion
TextQuestion
AnswerCard

SupportProfileSummary
MotivationBars
MotivationRadar
RecommendationList

NextStepCard
ObjectiveCard
CourseProgress

CompassAssistant
AssistantMessage
AssistantSuggestion
AssistantAction

Button
IconButton
Progress
Textarea
```

Usar shadcn quando o componente base já existir.

Não criar primitivas desnecessárias do zero.

---

# 16. Motion

Motion deve reforçar:
- avanço;
- seleção;
- conclusão;
- foco.

Exemplos:

### Troca de pergunta

```text
current:
opacity 1 → 0
x 0 → -16

next:
opacity 0 → 1
x 16 → 0
```

### Seleção

- pequena mudança de border/background;
- scale máximo 1.01;
- duração 120–160 ms.

### Resultado

Revelar:
1. título;
2. explicação;
3. vetores;
4. recomendações.

Sem animações longas.

---

# 17. Responsividade

Priorizar:

### Desktop
1440 × 900

### Laptop
1280 × 800

### Mobile
390 × 844

Assessment deve continuar excelente em mobile.

No mobile:
- botão principal pode ficar sticky;
- respostas ocupam largura disponível;
- evitar header alto;
- manter pergunta no primeiro viewport sempre que possível.

---

# 18. Acessibilidade

Obrigatório:

- WCAG AA;
- contraste mínimo adequado;
- focus state visível;
- navegação completa por teclado;
- labels associados;
- aria apenas quando necessário;
- não depender apenas de cor;
- target confortável para toque;
- respeitar `prefers-reduced-motion`;
- mensagens de erro anunciadas corretamente.

---

# 19. Conteúdo

Tom:

- claro;
- direto;
- humano;
- não paternalista;
- não clínico;
- não julgador.

Evitar:

> "Descobrimos quem você realmente é."

Preferir:

> "Suas respostas mostram o que parece ter mais peso para você neste momento."

Evitar:

> "Seu problema é falta de disciplina."

Preferir:

> "Sua rotina pode estar tornando o primeiro passo mais difícil."

---

# 20. Estados obrigatórios

Implementar:

- loading;
- selected;
- hover;
- focus;
- disabled;
- validation error;
- transition;
- result;
- empty;
- assistant typing;
- assistant response;
- reduced motion.

---

# 21. Dados de demonstração

Criar mocks separados em:

```text
src/data/questions.ts
src/data/supportProfiles.ts
src/data/student.ts
src/data/recommendations.ts
```

Não espalhar mock data dentro dos componentes.

---

# 22. Estrutura sugerida

```text
src/
├── app/
│   ├── App.tsx
│   └── routes.tsx
│
├── components/
│   ├── ui/
│   ├── assessment/
│   ├── profile/
│   ├── student/
│   └── assistant/
│
├── data/
├── hooks/
├── lib/
├── styles/
└── types/
```

---

# 23. Rotas da demonstração

```text
/
└── onboarding

/assessment
└── perguntas

/result
└── perfil de apoio

/next-step
└── primeira ação

/home
└── experiência personalizada
```

O assistente deve poder ser aberto dentro de `/home`.

---

# 24. Restrições de design

NÃO fazer:

- glassmorphism genérico;
- neon;
- blobs decorativos;
- gradients aleatórios;
- bento grid só porque está na moda;
- dashboard administrativo;
- interface toda dentro de cards;
- ilustrações stock;
- emojis como principal identidade;
- gamificação infantil;
- gráfico sem função;
- excesso de badges/chips;
- texto excessivo;
- 3 CTAs competindo na mesma tela;
- sidebar administrativa no assessment;
- copiar ChatGPT.

---

# 25. Ordem de execução no Codex

## Fase 1 — Concept

Antes de programar:

1. Leia todo este documento.
2. Analise as referências.
3. Gere o conceito visual completo.
4. Cubra:
   - entrada;
   - assessment;
   - resultado;
   - primeiro passo;
   - home;
   - assistente.
5. Defina tokens.
6. Defina componentes.
7. Verifique desktop + mobile.

Não implemente até que a direção visual esteja coerente.

## Fase 2 — Design System

Extraia do conceito:

- cores;
- tipografia;
- spacing;
- radius;
- borders;
- shadows;
- componentes;
- estados;
- motion.

## Fase 3 — Implementação

Implemente com:
- React;
- TypeScript;
- Vite;
- Tailwind;
- shadcn/ui;
- Motion;
- Recharts.

Comece pelo fluxo:

```text
Entrada
   ↓
Assessment
   ↓
Resultado
   ↓
Primeiro passo
   ↓
Home
   ↓
Bússola
```

## Fase 4 — QA visual

Verifique:

- 1440 × 900;
- 1280 × 800;
- 390 × 844.

Compare implementação e conceito.

Corrija:
- spacing;
- tipografia;
- proporções;
- cores;
- estados;
- responsividade;
- foco;
- motion.

---

# 26. Critério de sucesso

O resultado precisa permitir que, em uma demonstração curta, alguém entenda imediatamente:

1. por que o aluno responde;
2. como o Bússola entende suas motivações;
3. como isso gera um perfil explicável;
4. como o perfil muda a experiência;
5. como essa mudança cria uma ação concreta;
6. como o agente continua apoiando o aluno.

A principal história do produto é:

```text
ENTENDER
   ↓
EXPLICAR
   ↓
PERSONALIZAR
   ↓
AGIR
   ↓
ACOMPANHAR
```

Se a interface não deixar essa sequência óbvia, simplifique.

---

# 27. Comando final

Construa uma experiência de produto, não uma apresentação do produto.

A interface deve ser demonstrável e navegável.

Use dados mock realistas.

Todas as ações principais devem funcionar localmente.

Mantenha o código modular e fácil de alterar durante o hackathon.

Priorize fidelidade visual, clareza de fluxo e qualidade de interação sobre quantidade de features.
