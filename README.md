# Bússola de Carreira — Vitru

MVP para ajudar estudantes EAD a transformar dúvidas de carreira em um objetivo, um plano viável e uma primeira ação. A metodologia foi aplicada em oito etapas, com recomendação explicável, controle do estudante e acompanhamento agregado.

## O que foi implementado

- jornada completa do aluno em oito etapas;
- comparação de caminhos profissionais com justificativas;
- objetivo, etapas e próxima ação editáveis;
- recomendações de cursos, projetos, mentoria e apoio;
- acompanhamento da ativação do plano em até 30 dias;
- painel gestor agregado, sem score individual de risco;
- identidade visual Vitru em roxo `#1D1934` e amarelo `#FFC629`;
- evidências visuais e documentação da metodologia.

## Executar localmente

O frontend não requer instalação de dependências:

```bash
python3 -m http.server 4173 --directory ava-mock
```

Acesse:

- AVA: `http://127.0.0.1:4173/`
- Bússola: `http://127.0.0.1:4173/bussola.html`
- Painel agregado: `http://127.0.0.1:4173/gestor.html`

É possível abrir diretamente uma etapa para demonstração, por exemplo: `bussola.html?etapa=4`.

## Estrutura

```text
ava-mock/              Frontend HTML, CSS e JavaScript
backend/               API Express herdada da base original
docs/                  Metodologia, conceito e evidências
vercel.json            Deploy estático do diretório ava-mock
```

## Documentação

- [Metodologia em 8 etapas](docs/METODOLOGIA-8-ETAPAS.md)
- [Evidências de validação](docs/EVIDENCIAS-VALIDACAO.md)
- [Conceito visual](docs/design/conceito-bussola-8-etapas.png)

## Métrica principal do MVP

**Percentual de estudantes que concluem ao menos uma etapa do plano em até 30 dias.**

## Observações

- O protótipo usa dados demonstrativos e `localStorage`.
- O backend herdado permanece como referência e ainda não está conectado à nova jornada.
- Antes de uso real, implementar autenticação, consentimento, política de retenção e integração institucional.

Base original: [andre-developer12/hackathon-vitru](https://github.com/andre-developer12/hackathon-vitru).
