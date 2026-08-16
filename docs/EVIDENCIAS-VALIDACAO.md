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
| Entrada pelo AVA | Aprovada; CTA “Bússola de Carreira — Construa seu plano em 8 etapas” |

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

## Conceito visual gerado

O conceito foi criado especificamente para este projeto com identidade Vitru (`#1D1934`, `#FFC629`, branco e lavanda), trilho de oito etapas, recomendação explicável, ação principal clara e variação mobile. O arquivo original gerado foi preservado e uma cópia foi adicionada em `docs/design/`.

## Limites do protótipo

- dados e recomendações são demonstrativos;
- não há autenticação nem sincronização com o backend;
- preferências ficam no navegador local;
- pedidos de apoio não disparam contato ou agendamento real;
- a integração com dados institucionais deve incluir consentimento, retenção mínima e exclusão.
