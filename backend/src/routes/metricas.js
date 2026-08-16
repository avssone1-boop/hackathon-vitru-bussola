const { Router } = require('express');
const metricasRepository = require('../repositories/metricasRepository');
const diagnosticoRepository = require('../repositories/diagnosticoRepository');

const router = Router();

// GET /api/metricas — Métricas mais recentes (dashboard gestor)
router.get('/', async (req, res) => {
  try {
    const metricas = await metricasRepository.findLatest();
    if (!metricas) return res.status(404).json({ error: 'Nenhuma métrica encontrada' });
    res.json(metricas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/metricas/historico — Evolução mensal
router.get('/historico', async (req, res) => {
  try {
    const { limit } = req.query;
    const historico = await metricasRepository.findHistorico(limit ? parseInt(limit) : 12);
    res.json(historico);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/metricas/recalcular — Recalcula métricas com base nos diagnósticos atuais
router.post('/recalcular', async (req, res) => {
  try {
    const diagnosticos = await diagnosticoRepository.findAll(9999);
    const total = diagnosticos.length;

    if (total === 0) {
      return res.json({ message: 'Nenhum diagnóstico para calcular métricas' });
    }

    const comRisco = diagnosticos.filter(d => d.intencao_desistencia === true).length;
    const semRisco = total - comRisco;

    // Distribuição de personas
    const distribuicaoPersonas = {};
    diagnosticos.forEach(d => {
      const p = d.persona_predominante || 'Indefinido';
      distribuicaoPersonas[p] = (distribuicaoPersonas[p] || 0) + 1;
    });

    // Média de horas semanais como proxy de engajamento
    const totalHoras = diagnosticos.reduce((sum, d) => sum + (d.horas_semanais_estimadas || 0), 0);
    const mediaHoras = totalHoras / total;
    // Engajamento normalizado (10h+ = 100%)
    const mediaEngajamento = Math.min((mediaHoras / 10) * 100, 100);

    const metricas = {
      totalAlunos: total,
      comRisco,
      semRisco,
      taxaDesistencia: parseFloat(((comRisco / total) * 100).toFixed(1)),
      taxaRetencao: parseFloat(((semRisco / total) * 100).toFixed(1)),
      mediaEngajamento: parseFloat(mediaEngajamento.toFixed(1)),
      distribuicaoPersonas,
      preocupacoes: {},
    };

    const result = await metricasRepository.save(metricas);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
