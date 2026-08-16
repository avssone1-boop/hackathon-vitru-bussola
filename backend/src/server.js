const express = require('express');
const cors = require('cors');

const estudantesRoutes = require('./routes/estudantes');
const diagnosticosRoutes = require('./routes/diagnosticos');
const metricasRoutes = require('./routes/metricas');

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Rotas
app.use('/api/estudantes', estudantesRoutes);
app.use('/api/diagnosticos', diagnosticosRoutes);
app.use('/api/metricas', metricasRoutes);

// Start
app.listen(PORT, () => {
  console.log(`🧭 Bússola Backend rodando em http://localhost:${PORT}`);
  console.log(`   Endpoints:`);
  console.log(`   - GET  /api/health`);
  console.log(`   - CRUD /api/estudantes`);
  console.log(`   - POST /api/diagnosticos`);
  console.log(`   - GET  /api/diagnosticos/risco`);
  console.log(`   - GET  /api/metricas`);
  console.log(`   - POST /api/metricas/recalcular`);
});
