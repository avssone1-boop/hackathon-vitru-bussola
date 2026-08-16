# Design QA — Bússola premium

## Fontes de verdade

- Referência escolhida: `docs/design/conceito-bussola-premium-opcao-3.png` (1487 × 1058 px).
- Implementação: `ava-mock/bussola.html?etapa=7`.
- Evidência final: `docs/evidencias/bussola-premium-etapa-7-final-clean.png` (1265 × 1015 px).
- Comparação normalizada: `docs/evidencias/bussola-premium-comparacao-final.png`.

## Estado comparado

- Etapa 7 — Pessoas e apoio.
- Tutoria de carreira selecionada.
- Apoio acadêmico disponível como segunda recomendação.
- Nenhuma mensagem ou agendamento real é disparado pelo protótipo.

## Método

A referência e a implementação foram abertas com inspeção visual em resolução original. A captura da implementação foi feita no navegador integrado, em viewport de 1280 × 720 px e escala CSS, usando captura de página completa. As duas imagens foram colocadas na mesma superfície de comparação, com a referência normalizada para 1265 px de largura.

## Comparação por superfície

| Superfície | Resultado | Observação |
|---|---|---|
| Cabeçalho | Aprovado | Marca, nome do produto, privacidade e perfil mantêm a estrutura da referência. |
| Navegação lateral | Aprovado | Fundo lavanda, oito etapas, estados concluído/atual/futuro e acento amarelo preservados. |
| Tipografia | Aprovado | Inter, título em duas linhas, contraste de pesos e rótulos em caixa alta alinhados ao conceito. |
| Layout e espaçamento | Aprovado | Proporção do trilho, início do conteúdo, agrupamento das recomendações e respiro vertical equivalentes. |
| Cores e bordas | Aprovado | Branco, ameixa, lavanda e amarelo usados com bordas finas e sem sombras excessivas. |
| Recomendações | Aprovado | Duas opções em uma superfície única, divisor central, monogramas e ações com 56 px de altura. |
| Consentimento | Aprovado | Faixa discreta com ícone de escudo e linguagem de confirmação explícita. |
| Rodapé | Aprovado | Ação de voltar com baixo destaque e CTA ameixa alinhado à direita. |
| Ícones | Aprovado | Material Symbols carregado; não há símbolos improvisados ou emojis. |
| Responsividade | Aprovado | Regras mobile-first preservam conteúdo, empilham recomendações e mantêm duas ações acessíveis. |

## Ajustes realizados após a primeira comparação

1. Redução proporcional do trilho lateral para aproximar o início do conteúdo da referência.
2. Limite do título ajustado para manter a quebra em duas linhas.
3. Remoção do destaque lateral indevido na recomendação selecionada.
4. Aumento das linhas de recomendação e dos botões para equilibrar densidade e área de toque.
5. Rodapé simplificado, removendo dica secundária e transformando “Voltar” em ação de baixo destaque.

## Validação funcional e acessível

- As oito etapas renderizaram seus títulos corretos e atualizaram a URL de `?etapa=1` a `?etapa=8`.
- A área “Privacidade e dados” abriu em diálogo.
- A inclusão de apoio exibiu confirmação antes de alterar o plano.
- O estado de limite foi validado com exatamente duas recomendações selecionadas.
- Todos os controles visíveis na etapa 7 mediram pelo menos 44 px de altura.
- Regra de foco visível presente e fonte de ícones carregada.
- Nenhum erro registrado no console durante o fluxo validado.

## Diferenças intencionais

- O conteúdo funcional existente foi preservado mesmo quando o conceito era apenas visual.
- O texto principal permanece “Você não precisa fazer tudo sozinho”; o CTA foi alinhado ao conceito como “Revisar e continuar”.
- O layout mobile foi mantido por breakpoints do produto existente, sem criar novas rotas ou funcionalidades.

final result: passed
