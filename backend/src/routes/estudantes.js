const { Router } = require('express');
const estudanteRepository = require('../repositories/estudanteRepository');

const router = Router();

// GET /api/estudantes
router.get('/', async (req, res) => {
  try {
    const { limit, cursor } = req.query;
    const result = await estudanteRepository.findAll(
      limit ? parseInt(limit) : 50,
      cursor || null
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/estudantes/:id
router.get('/:id', async (req, res) => {
  try {
    const estudante = await estudanteRepository.findById(req.params.id);
    if (!estudante) return res.status(404).json({ error: 'Estudante não encontrado' });
    res.json(estudante);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/estudantes/many — Busca múltiplos por IDs
router.post('/many', async (req, res) => {
  try {
    const { ids } = req.body;
    if (!ids || !Array.isArray(ids)) {
      return res.status(400).json({ error: 'ids (array) é obrigatório' });
    }
    const estudantes = await estudanteRepository.findMany(ids);
    res.json(estudantes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/estudantes
router.post('/', async (req, res) => {
  try {
    const { nome, email, curso, semestre } = req.body;
    if (!nome || !email) {
      return res.status(400).json({ error: 'Nome e email são obrigatórios' });
    }
    const estudante = await estudanteRepository.save({ nome, email, curso, semestre });
    res.status(201).json(estudante);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /api/estudantes/:id
router.delete('/:id', async (req, res) => {
  try {
    const result = await estudanteRepository.delete(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
