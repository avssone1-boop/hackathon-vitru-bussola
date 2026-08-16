# AVA Mock + Bússola — Hackathon

Mock do AVA (UNIASSELVI) integrado com a **Bússola**, solução de permanência e engajamento estudantil no EAD.

## Como rodar

> Usa ES Modules — precisa de um servidor HTTP local.

```bash
# Opção 1: Node.js
npx serve .

# Opção 2: Python
python -m http.server 8080

# Opção 3: VS Code Live Server
```

Acesse: [http://localhost:8080](http://localhost:8080)

## Páginas

| Página | URL | Descrição |
|--------|-----|-----------|
| AVA do Aluno | `/index.html` | Dashboard do aluno com modal da Bússola |
| Painel do Gestor | `/gestor.html` | Dashboard completo de métricas e risco |

## Fluxo da Bússola

```
Aluno abre o AVA
    → Clica em "🧭 Bússola — Conte-nos sobre você"
    → Modal abre com perguntas guiadas (6 etapas)
    → Ao final, vê seu perfil simplificado (persona, pontos fortes, áreas sugeridas)

Gestor acessa /gestor.html
    → Vê KPIs (total alunos, em risco, retenção, engajamento)
    → Distribuição de personas
    → Evolução mensal de risco
    → Preocupações principais
    → Tabela de alunos em risco
    → Ações sugeridas pela IA com prioridade
```

## Estrutura do projeto

```
ava-mock/
├── index.html                        # AVA do Aluno
├── gestor.html                       # Dashboard do Gestor
├── README.md
│
├── src/
│   ├── main.js                       # Entry point - AVA do aluno
│   ├── gestor.js                     # Entry point - Painel do gestor
│   ├── data/
│   │   ├── menu.js                   # Menu lateral do AVA
│   │   ├── dashboard.js              # Dados do dashboard do aluno
│   │   ├── bussola.js                # Resultado simulado da IA
│   │   └── gestorData.js             # Dados do painel do gestor
│   └── components/
│       ├── Sidebar.js
│       ├── Header.js
│       ├── BussolaModal.js           # Modal de perguntas + resultado
│       ├── charts/
│       │   └── BarChart.js
│       └── cards/
│           ├── EvolucaoSemestre.js
│           ├── EvolucaoCurso.js
│           ├── EvolucaoSalarial.js
│           ├── Pendencias.js
│           ├── Notificacoes.js
│           └── Avisos.js
│
└── styles/
    ├── main.css                      # Importa todos
    ├── base.css
    ├── sidebar.css
    ├── header.css
    ├── dashboard.css
    ├── cards.css
    ├── charts.css
    ├── modal.css                     # Modal da Bússola
    ├── gestor.css                    # Painel do gestor
    └── responsive.css
```

## Tecnologias

- HTML5, CSS3, JavaScript vanilla (ES Modules)
- Zero dependências externas
- SVG para gráficos radar
- CSS Grid + Flexbox para layout
