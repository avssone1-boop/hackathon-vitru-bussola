# Design QA — integração premium da Bússola

## Fontes de verdade

- Fonte visual selecionada: `docs/design/conceito-bussola-premium-opcao-3.png` (1487 × 1058 px).
- Fonte funcional: `docs/referencias/BUSSOLA_CODEX_FRONTEND_BRIEF.md`.
- Implementação: `frontend/`, rota `/#/result`.
- Captura da implementação: `docs/evidencias/frontend-v3/resultado-integrado-desktop.jpg` (1265 × 712 px).
- Comparação conjunta: `docs/evidencias/frontend-v3/comparacao-solucao-integrada.jpg` (1280 × 720 px).

## Estado e normalização

- Estado: perfil “Crescimento e transformação profissional”, fase atual “Explicar”.
- Viewport CSS: 1280 × 720 px; área útil capturada pelo navegador: 1265 × 712 px; DPR 2.
- A referência foi normalizada com `object-fit: contain` no mesmo painel da captura para comparação de composição, proporção, densidade e hierarquia.
- Fonte e implementação também foram abertas separadamente em resolução original para verificar tipografia, bordas, ícones e pequenos textos.
- Não foi necessário um recorte focado separado: o layout não usa imagem editorial, tabela densa ou detalhe de marca que dependa de comparação pixel a pixel; os elementos críticos permanecem legíveis nas capturas originais.

## Findings

Não restam diferenças P0, P1 ou P2 acionáveis.

| Superfície obrigatória | Resultado | Evidência |
|---|---|---|
| Fontes e tipografia | Aprovado | Inter, pesos editoriais, títulos de grande escala, labels em caixa alta e textos mínimos de 12 px preservam a hierarquia premium. |
| Espaçamento e layout | Aprovado | Cabeçalho, trilho lateral, conteúdo principal, card de devolutiva e ritmo vertical reproduzem a composição da referência. |
| Cores e tokens | Aprovado | Ameixa, branco, lavanda e amarelo de precisão foram mapeados para tokens existentes; sem gradientes ou sombras decorativas. |
| Imagens e ativos | Aprovado | A fonte visual não exige fotografia ou ilustração; Lucide continua sendo usado para ícones funcionais e não há placeholders, emoji ou SVG artesanal. |
| Copy e conteúdo | Aprovado | O conteúdo mudou de apoio genérico para perfil explicável e próximo passo porque o brief atual é a fonte funcional. A linguagem evita diagnóstico e previsão de evasão. |
| Responsividade | Aprovado | Em 390 × 844 px, o trilho vira progresso “Fase 2 de 5”, os cards empilham e não há corte horizontal. |
| Acessibilidade | Aprovado | Ordem semântica, `aria-current`, foco visível, controles de 44 px e `prefers-reduced-motion` preservados. |
| Interações | Aprovado | Tarefa alternou para `aria-pressed=true`, o assistente abriu como diálogo e o console permaneceu sem erros. |

## Histórico da comparação

1. A versão funcional anterior preservava a paleta premium, mas não a anatomia principal da opção escolhida. O resultado ocupava uma coluna única, sem o trilho visual da jornada. A correção introduziu `JourneyRail` e `JourneyShell` com cinco fases metodológicas.
2. O trilho antigo de oito etapas não foi restaurado. A avaliação continua com uma pergunta por tela; o novo trilho aparece somente em resultado, primeiro passo e acompanhamento.
3. A primeira verificação mobile mostrou “Privacidade e dados” quebrando em duas linhas por causa do limite de 82 px. O limite foi removido e o controle passou a permanecer em uma linha a 390 px.
4. O indicador amarelo da fase atual estava encostado na borda do painel. Foi movido para dentro do trilho para coincidir com a referência.
5. A captura pós-correção foi comparada com a referência no arquivo `comparacao-solucao-integrada.jpg`.

## Diferenças intencionais

- O trilho tem cinco fases — Entender, Explicar, Personalizar, Agir e Acompanhar — em vez das oito etapas do conceito antigo.
- A área principal mostra o perfil de apoio e seus motivadores, não duas opções de atendimento, porque essa é a devolutiva definida pelo brief atual.
- O perfil do estudante permanece Arthur Martins, consistente com os dados demonstrativos da aplicação.
- O produto é apresentado como “Bússola · apoio à jornada”, evitando restringi-lo apenas à carreira.

## Follow-up polish

- P3: dividir o bundle principal por rota antes de produção para eliminar o aviso de 537,74 kB antes de gzip.

final result: passed
