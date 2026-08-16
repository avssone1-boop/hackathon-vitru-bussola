# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Direção durável do Bússola

- Use `../docs/referencias/BUSSOLA_CODEX_FRONTEND_BRIEF.md` como fonte de verdade funcional e de conteúdo.
- Preserve a linguagem visual Vitru aprovada: branco, ameixa, lavanda e amarelo apenas como acento de precisão.
- O assessment deve exibir uma pergunta por vez; não concentrar várias perguntas em uma única tela e não usar o trilho antigo de oito etapas dentro da avaliação.
- Trate personas como perfis de apoio explicáveis e circunstanciais, nunca como rótulos psicológicos.
- A história principal precisa permanecer: entender → explicar → personalizar → agir → acompanhar.
- Combine a metodologia atual com a direção premium da referência `../docs/referencias/bussola-metodologia-anterior.png`: use o trilho das cinco fases apenas nas telas de devolutiva, ação e acompanhamento; nunca reintroduza o trilho antigo de oito etapas no assessment.
