# Design QA — Bússola Frontend v2

## Fontes de verdade

- Brief funcional e de conteúdo: `docs/referencias/BUSSOLA_CODEX_FRONTEND_BRIEF.md`.
- Referência visual do produto anterior: `docs/referencias/bussola-metodologia-anterior.png` (1920 × 1250 px).
- Implementação: `frontend/`, rota inicial `/#/onboarding`.
- Comparação completa: `docs/evidencias/frontend-v2/comparacao-metodologia.png`.
- Comparação focada na avaliação: `docs/evidencias/frontend-v2/comparacao-foco-assessment.png`.

A imagem anterior foi usada como fonte para identidade, hierarquia tipográfica, superfícies, cores e nível de acabamento. A metodologia nela exibida não foi copiada porque o brief solicita explicitamente uma pergunta por página e baixa carga cognitiva.

## Método de captura e comparação

- Desktop validado em viewport CSS de 1280 × 720 px, DPR 2; a área útil registrada pelo navegador foi 1265 × 712 px por causa das barras do viewport.
- Mobile validado em viewport interna de 390 × 844 px e normalizado para 390 × 844 px.
- A referência e as capturas da implementação foram abertas em resolução original e colocadas juntas na mesma superfície antes da avaliação visual.
- Estados comparados: pergunta 1 selecionada, resultado calculado, home personalizada e assistente aberto.

## Comparação por superfície

| Superfície | Resultado | Evidência |
|---|---|---|
| Arquitetura da avaliação | Aprovado | O trilho lateral de oito etapas e o conjunto de perguntas simultâneas foram substituídos por uma pergunta por tela e progresso linear. |
| Identidade Vitru | Aprovado | Branco, ameixa, lavanda e amarelo de precisão permanecem como base visual. |
| Hierarquia | Aprovado | Pergunta, contexto, alternativas e ação aparecem em uma sequência de leitura única e calma. |
| Cards de resposta | Aprovado | Áreas grandes, estado selecionado inequívoco, borda fina e sem caixas aninhadas. |
| Tipografia | Aprovado | Inter, contraste de pesos e escala contemporânea preservados; nenhum texto abaixo de 12 px. |
| Espaçamento | Aprovado | Ritmo de 4 px, largura de leitura controlada e respiro maior do que na tela anterior. |
| Resultado | Aprovado | Perfil de apoio explicável, circunstancial e editável; quatro motivadores visíveis e recomendações relacionadas às respostas. |
| Próximo passo | Aprovado | A devolutiva termina em uma ação concreta para a semana, sem prometer permanência. |
| Home | Aprovado | Progresso, objetivo, próximas ações e perfil aparecem sem virar um dashboard de métricas. |
| Assistente | Aprovado | Drawer contextual com sugestões e ações estruturadas; não reproduz uma interface genérica de chat. |
| Responsividade | Aprovado | Cards empilham, CTA da avaliação fica acessível e o conteúdo não apresenta corte horizontal em 390 px. |
| Ícones e ativos | Aprovado | Lucide usado de forma consistente; não há emojis, símbolos improvisados, SVGs falsos ou imagens genéricas. |

## Ajustes realizados após as comparações

1. Remoção do trilho de oito etapas durante a avaliação para reduzir distração e reforçar uma pergunta por vez.
2. Separação da jornada em entender → explicar → personalizar → agir → acompanhar.
3. Correção de textos de 11 px para o mínimo de 12 px.
4. Correção de controles de 42 px para o mínimo de 44 px.
5. Inclusão de foco preso e retorno de foco nos diálogos de privacidade e no assistente.
6. Preservação de respostas ao voltar, sem avanço automático depois da seleção.

## Validação funcional e acessível

- As dez perguntas foram concluídas no navegador; a URL acompanhou de `q=0` a `q=9`.
- O estado sem resposta exibiu mensagem de validação antes de permitir avanço.
- O fluxo completo onboarding → avaliação → processamento → resultado → primeiro passo → home foi concluído.
- Seleção múltipla, escala, resposta opcional, checkbox de tarefa, privacidade e reinício foram exercitados.
- O assistente exibiu sugestão, estado de digitação e duas ações estruturadas.
- Diálogo de privacidade e assistente receberam foco inicial, ciclo de teclado e fechamento por `Esc`.
- Todos os controles visíveis mediram pelo menos 44 px; foco visível e `prefers-reduced-motion` estão implementados.
- Nenhum erro foi registrado no console durante o fluxo final.
- TypeScript, build Vite, preparação do bundle e quatro testes do worker foram aprovados.

## Evidências finais

- `docs/evidencias/frontend-v2/assessment-desktop-1280x720.jpg`
- `docs/evidencias/frontend-v2/resultado-desktop-1280x720.jpg`
- `docs/evidencias/frontend-v2/home-assistente-desktop-1280x720.jpg`
- `docs/evidencias/frontend-v2/assessment-mobile-390x844.jpg`
- `docs/evidencias/frontend-v2/home-mobile-390x844.jpg`

## Diferenças intencionais

- A navegação lateral anterior foi mantida apenas como histórico visual; ela não faz parte do assessment v2.
- A nova avaliação usa dez perguntas curtas configuradas em dados, mas apenas uma pergunta é renderizada por tela.
- Os quatro perfis representam necessidades de apoio e motivadores observados, não personalidades clínicas ou previsões de evasão.
- O amarelo aparece como acento de orientação e progresso, não como decoração.
- O protótipo usa dados demonstrativos e armazenamento local; nenhuma mensagem ou solicitação externa é enviada.

## Pendência não bloqueante

- P3: o bundle principal gera aviso de 535,79 kB antes de gzip. Divisão por rota pode ser aplicada antes de produção, sem impacto no MVP validado.

final result: passed
