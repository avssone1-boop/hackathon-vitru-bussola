# Bússola — Backend

API REST da Bússola com Google Cloud Datastore para armazenamento em tempo real.

## Setup

```bash
cd backend
npm install
```

### Autenticação com GCP

```bash
# Local: login com credenciais padrão
gcloud auth application-default login

# Ou: usar emulador local do Datastore
gcloud beta emulators datastore start
$(gcloud beta emulators datastore env-init)
```

### Variáveis de ambiente

```bash
cp .env.example .env
# Edite o .env com seu project ID
```

## Rodar

```bash
# Produção
npm start

# Desenvolvimento (auto-reload)
npm run dev
```

Servidor inicia em `http://localhost:3001`

## Endpoints

### Estudantes

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/estudantes` | Lista todos |
| GET | `/api/estudantes/:id` | Busca por ID |
| POST | `/api/estudantes` | Cria novo |
| DELETE | `/api/estudantes/:id` | Remove |

### Diagnósticos

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/api/diagnosticos` | Salva respostas + diagnóstico da IA |
| GET | `/api/diagnosticos` | Lista todos (gestor) |
| GET | `/api/diagnosticos/estudante/:id` | Mais recente do aluno |
| GET | `/api/diagnosticos/risco` | Todos com intenção de desistência |

### Métricas (Dashboard Gestor)

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/metricas` | Métricas mais recentes |
| GET | `/api/metricas/historico` | Evolução mensal |
| POST | `/api/metricas/recalcular` | Recalcula com base nos diagnósticos |

## Exemplo de POST /api/diagnosticos

```json
{
  "estudanteId": "123456",
  "respostas": [
    { "pergunta": 1, "resposta": { "label": "Quero crescer na carreira", "persona": "Acelerador" } },
    { "pergunta": 2, "resposta": { "label": "Estudo algumas vezes por semana", "valor": "media" } }
  ],
  "diagnostico": {
    "estudante": {
      "persona_predominante": "Acelerador",
      "persona_secundaria": "Construtor",
      "pensamento_chave": "Quero crescer e ter estabilidade."
    },
    "perfil_potencial": { "analise": 0.7, "criatividade": 0.5, "colaboracao": 0.6, "comunicacao": 0.8, "organizacao": 0.7, "protagonismo": 0.6 },
    "perfil_direcao": { "estabilidade": 0.8, "renda": 0.9, "flexibilidade": 0.6, "proposito": 0.5, "impacto": 0.4 },
    "perfil_necessidades": { "horas_semanais_estimadas": 8, "suporte_prioritario": "Mentoria de carreira", "intencao_desistencia": false },
    "contexto_aprendizagem": { "formato_preferido": "assincrono", "duracao_bloco_minutos": 30, "tipo_atividade": "video_curto" },
    "recomendacao_tutor": { "acao_prioritaria": "Apresentar trilha de carreira", "motivo": "Aluno motivado por renda", "abordagem_sugerida": "Conectar conteúdo com mercado de trabalho" },
    "areas_impacto_sugeridas": ["Gestão", "Vendas", "Liderança"],
    "resumo_parecer": "Estudante com forte motivação para crescimento profissional."
  }
}
```

## Estrutura

```
backend/
├── package.json
├── .env.example
├── README.md
└── src/
    ├── server.js                 # Express + rotas
    ├── config/
    │   └── datastore.js          # Conexão com Datastore
    ├── repositories/
    │   ├── estudanteRepository.js
    │   ├── diagnosticoRepository.js
    │   ├── respostaRepository.js
    │   └── metricasRepository.js
    └── routes/
        ├── estudantes.js
        ├── diagnosticos.js
        └── metricas.js
```
