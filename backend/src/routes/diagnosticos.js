const { Router } = require('express');
const diagnosticoRepository = require('../repositories/diagnosticoRepository');
const respostaRepository = require('../repositories/respostaRepository');

const router = Router();

// POST /api/diagnosticos — Salva respostas + diagnóstico gerado pela IA
router.post('/', async (req, res) => {
  try {
    const { estudanteId, respostas, diagnostico } = req.body;

    if (!estudanteId || !diagnostico) {
      return res.status(400).json({ error: 'estudanteId e diagnostico são obrigatórios' });
    }

    // Salva as respostas do questionário
    if (respostas && respostas.length > 0) {
      await respostaRepository.save(estudanteId, respostas);
    }

    // Salva o diagnóstico completo
    const result = await diagnosticoRepository.save(estudanteId, diagnostico);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/diagnosticos/estudante/:estudanteId — Diagnóstico mais recente do aluno
router.get('/estudante/:estudanteId', async (req, res) => {
  try {
    const diagnostico = await diagnosticoRepository.findByEstudanteId(req.params.estudanteId);
    if (!diagnostico) return res.status(404).json({ error: 'Diagnóstico não encontrado' });
    res.json(diagnostico);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/diagnosticos — Lista todos (gestor)
router.get('/', async (req, res) => {
  try {
    const { limit } = req.query;
    const diagnosticos = await diagnosticoRepository.findAll(limit ? parseInt(limit) : 100);
    res.json(diagnosticos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/diagnosticos/many — Busca diagnósticos de múltiplos estudantes
router.post('/many', async (req, res) => {
  try {
    const { estudanteIds } = req.body;
    if (!estudanteIds || !Array.isArray(estudanteIds)) {
      return res.status(400).json({ error: 'estudanteIds (array) é obrigatório' });
    }
    const diagnosticos = await diagnosticoRepository.findMany(estudanteIds);
    res.json(diagnosticos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/diagnosticos/risco — Todos com intenção de desistência
router.get('/risco', async (req, res) => {
  try {
    const emRisco = await diagnosticoRepository.findComRisco();
    res.json(emRisco);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
