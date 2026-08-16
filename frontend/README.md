# Frontend Bússola v2

Aplicação navegável construída a partir de `../docs/referencias/BUSSOLA_CODEX_FRONTEND_BRIEF.md`.

## Fluxo

`onboarding → assessment → processing → result → next-step → home → assistant`

Rotas:

- `/#/onboarding`
- `/#/assessment?q=0`
- `/#/processing`
- `/#/result`
- `/#/next-step`
- `/#/home`

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

## Validação

```bash
pnpm typecheck
pnpm build
pnpm test:sites
```

## Organização

- `src/data`: perguntas, recomendações, perfis de apoio e estudante demonstrativo.
- `src/hooks`: estado compartilhado, respostas, tarefas e `localStorage`.
- `src/components/assessment`: renderização dos quatro tipos de pergunta.
- `src/components/profile`: explicação do perfil e motivadores.
- `src/components/student`: progresso, objetivo e primeiro passo.
- `src/components/assistant`: drawer contextual e ações estruturadas.
- `src/screens`: páginas da jornada.
- `src/styles.css`: tokens semânticos e responsividade.

Os quatro perfis são categorias de apoio explicáveis, não rótulos psicológicos. Recomendações e conteúdos são demonstrativos; o protótipo não envia mensagens, agenda atendimentos nem prevê evasão.
