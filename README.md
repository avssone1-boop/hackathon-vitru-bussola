# Bússola — Vitru

MVP de inteligência motivacional para estudantes EAD. A versão atual transforma uma conversa de dez perguntas curtas em um perfil de apoio explicável, uma próxima ação e uma experiência personalizada no portal — sem teste clínico, score de risco ou previsão de evasão.

## Frontend v2

- uma pergunta por tela, progresso visível e respostas preservadas ao voltar;
- quatro perfis de apoio explicáveis e circunstanciais;
- devolutiva com motivadores, barreiras e recomendações relacionadas às respostas;
- definição de um primeiro passo possível;
- home personalizada e assistente contextual;
- versões desktop e mobile acessíveis;
- identidade visual Vitru em ameixa, branco, lavanda e amarelo de precisão.

## Executar o frontend atual

```bash
cd frontend
pnpm install
pnpm dev
```

Acesse `http://127.0.0.1:4173/#/onboarding`.

Para validar a entrega:

```bash
pnpm typecheck
pnpm build
pnpm test:sites
```

## Protótipo anterior

O protótipo estático de oito etapas permanece em `ava-mock/bussola-legacy.html` apenas como histórico. `ava-mock/bussola.html` passa a encaminhar para a versão v2 publicada.

## Estrutura

```text
frontend/              Aplicação React, TypeScript e Vite
ava-mock/              Portal demonstrativo, legado e bundle público da v2
backend/               API Express herdada da base original
docs/                  Brief, referências, metodologia e evidências
vercel.json            Deploy estático do diretório ava-mock
```

## Documentação

- [Brief da metodologia atual](docs/referencias/BUSSOLA_CODEX_FRONTEND_BRIEF.md)
- [Evidências de validação](docs/EVIDENCIAS-VALIDACAO.md)
- [Design QA](design-qa.md)
- [Metodologia anterior em 8 etapas](docs/METODOLOGIA-8-ETAPAS.md)

## Métrica principal do MVP

**Percentual de estudantes que concluem a primeira ação recomendada em até 7 dias.**

## Observações

- O protótipo usa dados demonstrativos e `localStorage`.
- O backend herdado permanece como referência e ainda não está conectado à nova jornada.
- Antes de uso real, implementar autenticação, consentimento, política de retenção e integração institucional.

Base original: [andre-developer12/hackathon-vitru](https://github.com/andre-developer12/hackathon-vitru).
