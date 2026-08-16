# Bússola de Carreira — metodologia em 8 etapas

## Objetivo

A Bússola ajuda o estudante EAD a transformar dúvidas sobre carreira e permanência em um plano curto, explicável e ajustável. O produto não prevê quem irá desistir e não limita oportunidades. Ele organiza escolhas declaradas pelo próprio estudante e facilita o acesso a experiências e apoios.

## Jornada aplicada

| Etapa | Necessidade atendida | Entrega para o estudante | Evidência no produto |
|---|---|---|---|
| 1. Meu momento | Compreender contexto, disponibilidade e força percebida | Registro do apoio prioritário, potencial e tempo semanal | Formulário com linguagem não julgadora e aviso de autonomia |
| 2. Possíveis caminhos | Explorar carreiras sem decidir imediatamente | Três caminhos comparáveis, rotina e justificativa | Cartões com “Por que apareceu” e sem pontuação de risco |
| 3. Meu objetivo | Definir um norte provisório | Objetivo profissional escrito pelo estudante | Campo editável, contador e opção de trocar o caminho |
| 4. Meu plano | Organizar uma rota viável | Plano com aprendizado, experiência e conexão | Painel “Por que recomendamos isso?” ligado às respostas |
| 5. Escolher etapas | Priorizar o que cabe na rotina | Uma ou mais ações selecionadas | Checklist editável, tempo estimado e recursos opcionais |
| 6. Próximo passo | Transformar intenção em ação | Ação concreta e data escolhida | Edição, conclusão/reabertura e foco na janela de 30 dias |
| 7. Pessoas e apoio | Reduzir isolamento e facilitar suporte | Até duas recomendações de apoio, com confirmação | Opções priorizadas; nenhum contato automático no protótipo |
| 8. Acompanhamento | Revisar e recalibrar a rota | Progresso, check-in e confirmação do plano | Edição, recomeço e ativação voluntária do plano |

## Produtos e serviços promovidos no MVP

Os itens são apresentados como recursos opcionais do plano, nunca como condição acadêmica:

- cursos introdutórios e trilhas curtas;
- projetos guiados para portfólio;
- oficinas práticas;
- tutoria e mentoria de carreira;
- apoio acadêmico;
- comunidade moderada de estudantes.

## Métrica principal

**Percentual de estudantes que concluem pelo menos uma etapa do plano em até 30 dias.**

Métricas auxiliares:

- início e conclusão de cada etapa;
- definição de objetivo;
- seleção de apoios com consentimento;
- retorno para editar ou recalibrar o plano;
- ativação agregada por curso ou coorte.

## Princípios de decisão

1. Participação voluntária e linguagem sem estigma.
2. Recomendação explicável a partir de respostas visíveis.
3. Controle do estudante para editar, pausar ou recomeçar.
4. Nenhum score individual de risco como resultado principal.
5. Painel gestor agregado, voltado a melhorar serviços e jornada.
6. Contato humano somente após escolha e consentimento.
7. Dados do protótipo são demonstrativos e não representam estudantes reais.
8. Consentimento é solicitado antes da jornada e pode ser recusado sem criar uma nona etapa.
9. Solicitações de apoio exigem confirmação explícita e o protótipo informa que nenhum contato real foi enviado.

## Aplicação técnica

- `ava-mock/src/bussola.js`: máquina de estado, navegação e interações das oito etapas.
- `ava-mock/src/data/metodologia.js`: conteúdo, caminhos, passos e serviços do MVP.
- `ava-mock/styles/bussola.css`: sistema visual Vitru e comportamento responsivo.
- `ava-mock/src/gestor.js`: painel agregado de adoção, ativação e demanda de apoio.
- `ava-mock/src/data/gestorData.js`: dados demonstrativos do painel.

O estado da jornada é persistido apenas no `localStorage` do navegador nesta versão do protótipo.
