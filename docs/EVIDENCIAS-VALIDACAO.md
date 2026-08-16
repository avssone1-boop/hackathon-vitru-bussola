# Evidências de implementação e validação

## Escopo validado

| Verificação | Resultado |
|---|---|
| Sintaxe dos módulos JavaScript | Aprovada com `node --check` |
| Renderização das oito etapas | Aprovada; todas exibiram título, conteúdo e ações |
| Overlay de erro nas oito etapas | Não detectado |
| Navegação 1 → 2 | Aprovada por interação real no navegador |
| Troca de caminho profissional | Aprovada; explicação e objetivo foram atualizados |
| Edição do objetivo | Aprovada; valor reapareceu no plano |
| Conclusão da primeira ação | Aprovada; status mudou para “Concluída” e pôde ser reaberto |
| Confirmação do plano | Aprovada; acompanhamento mudou para “Seu plano está ativo” |
| Painel gestor | Aprovado; visão agregada, uma tabela e nenhum texto de risco de desistência |
| Entrada pelo AVA | Aprovada; botão fixo “Bússola de Carreira — Preciso de apoio” |

## Refinamentos incrementais do MVP

| Critério de aceite | Evidência | Resultado |
|---|---|---|
| Entrada integrada ao portal | Botão fixo “Bússola de Carreira — Preciso de apoio”, com `position: fixed`, 220 × 58 px no desktop e `z-index: 600` | Aprovado |
| Consentimento antes da jornada | Diálogo informa finalidade, ausência de classificação/predição e oferece “Continuar”, “Agora não” e explicação de dados | Aprovado; não adiciona etapa à metodologia |
| Limite de recomendações | A etapa 7 renderiza exatamente duas opções priorizadas | Aprovado |
| Confirmação de apoio | O apoio só entra no plano após o diálogo “Confirmar solicitação de apoio?” | Aprovado |
| Ausência de envio real | Interface informa antes e depois da confirmação que nenhum contato foi enviado | Aprovado |
| Privacidade acessível | Área aberta pelo cabeçalho descreve dados, finalidade, limites e armazenamento local | Aprovado |
| Navegação por teclado | Foco inicial no diálogo, ciclo de `Tab`/`Shift+Tab`, fechamento por `Esc` e retorno de foco | Aprovado |
| Tamanho de alvos | Botões principais usam altura mínima de 46 px; entrada flutuante usa 52–58 px | Aprovado |
| Camadas | Cabeçalho 100, botão flutuante 600, backdrop 700, superfície 800, diálogo 900 e toast 1000 | Aprovado |
| Regressão do fluxo | Oito etapas preservadas e nenhum erro registrado no console durante o teste | Aprovado |

## Direção premium — opção 3

A opção visual escolhida foi aplicada como refinamento incremental, sem alterar a metodologia, os dados demonstrativos ou a arquitetura das oito etapas.

| Critério | Evidência | Resultado |
|---|---|---|
| Fidelidade à referência | Comparação lado a lado entre o conceito aprovado e a etapa 7 implementada | Aprovado |
| Hierarquia | Título em duas linhas, texto de apoio curto e duas recomendações agrupadas | Aprovado |
| Navegação lateral | Fundo lavanda claro, etapas concluídas com ícone e etapa atual marcada por linha amarela | Aprovado |
| Recomendações | Exatamente dois apoios em uma única superfície, com divisor e ações explícitas | Aprovado |
| Consentimento | Aviso apresentado como faixa informativa antes da ação de continuidade | Aprovado |
| Ações | Voltar com baixo destaque e “Revisar e continuar” como CTA primário | Aprovado |
| Alvos interativos | Todos os controles visíveis da etapa 7 medem pelo menos 44 px de altura | Aprovado |
| Ícones e tipografia | Inter e Material Symbols carregados; foco visível preservado | Aprovado |
| Confirmação e limite | Diálogo exibido antes da inclusão; total máximo validado em duas recomendações | Aprovado |
| Console | Nenhum erro durante navegação, privacidade e confirmação de apoio | Aprovado |

## Telas verificadas

1. “Vamos começar pela sua realidade de hoje”
2. “Explore caminhos que combinam com você”
3. “Defina um norte para esta fase”
4. “Seu plano começa a ganhar forma”
5. “Escolha o que realmente cabe na sua rotina”
6. “Transforme o plano em uma ação simples”
7. “Você não precisa fazer tudo sozinho”
8. “Revise, confirme e siga no seu ritmo” / “Seu plano está ativo”

## Evidências visuais

- [Conceito visual das oito etapas](design/conceito-bussola-8-etapas.png)
- [Etapa 2 — possíveis caminhos](evidencias/etapa-2-possiveis-caminhos.png)
- [Etapa 4 — plano explicável](evidencias/etapa-4-meu-plano.png)
- [Etapa 6 — primeira ação](evidencias/etapa-6-proximo-passo.png)
- [Etapa 8 — acompanhamento](evidencias/etapa-8-acompanhamento.png)
- [Painel gestor agregado](evidencias/painel-gestor-agregado.png)
- [Confirmação antes de adicionar apoio](evidencias/refinamento-apoio-confirmacao.png)
- [Referência escolhida — opção 3](design/conceito-bussola-premium-opcao-3.png)
- [Etapa 7 — implementação premium final](evidencias/bussola-premium-etapa-7-final-clean.png)
- [Comparação final lado a lado](evidencias/bussola-premium-comparacao-final.png)

## Conceito visual gerado

O conceito foi criado especificamente para este projeto com identidade Vitru (`#1D1934`, `#FFC629`, branco e lavanda), trilho de oito etapas, recomendação explicável, ação principal clara e variação mobile. O arquivo original gerado foi preservado e uma cópia foi adicionada em `docs/design/`.

## Limites do protótipo

- dados e recomendações são demonstrativos;
- não há autenticação nem sincronização com o backend;
- preferências ficam no navegador local;
- pedidos de apoio não disparam contato ou agendamento real;
- a integração com dados institucionais deve incluir consentimento, retenção mínima e exclusão.
