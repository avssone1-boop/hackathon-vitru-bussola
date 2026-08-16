const { datastore } = require('../config/datastore');

const KIND = 'Resposta';

class RespostaRepository {
  /**
   * Salva as respostas do questionário de um estudante
   */
  async save(estudanteId, respostas) {
    const key = datastore.key(KIND);

    const entity = {
      key,
      data: {
        estudanteId: String(estudanteId),
        respostas: JSON.stringify(respostas),
        totalPerguntas: respostas.length,
        createdAt: new Date().toISOString(),
      },
    };

    await datastore.save(entity);
    return { id: key.id, estudanteId, respostas, createdAt: entity.data.createdAt };
  }

  /**
   * Busca respostas mais recentes de um estudante
   */
  async findByEstudanteId(estudanteId) {
    const query = datastore
      .createQuery(KIND)
      .filter('estudanteId', '=', String(estudanteId))
      .order('createdAt', { descending: true })
      .limit(1);

    const [entities] = await datastore.runQuery(query);
    if (entities.length === 0) return null;

    const e = entities[0];
    return {
      id: e[datastore.KEY].id,
      estudanteId: e.estudanteId,
      respostas: JSON.parse(e.respostas),
      totalPerguntas: e.totalPerguntas,
      createdAt: e.createdAt,
    };
  }

  /**
   * Busca respostas de múltiplos estudantes
   */
  async findMany(estudanteIds) {
    if (!estudanteIds || estudanteIds.length === 0) return [];

    const query = datastore
      .createQuery(KIND)
      .filter('estudanteId', 'IN', estudanteIds.map(String))
      .order('createdAt', { descending: true });

    const [entities] = await datastore.runQuery(query);

    // Mais recente de cada estudante
    const seen = new Set();
    const results = [];
    for (const e of entities) {
      if (!seen.has(e.estudanteId)) {
        seen.add(e.estudanteId);
        results.push({
          id: e[datastore.KEY].id,
          estudanteId: e.estudanteId,
          respostas: JSON.parse(e.respostas),
          totalPerguntas: e.totalPerguntas,
          createdAt: e.createdAt,
        });
      }
    }
    return results;
  }

  /**
   * Lista todas as respostas (para métricas)
   */
  async findAll(limit = 200) {
    const query = datastore
      .createQuery(KIND)
      .order('createdAt', { descending: true })
      .limit(limit);

    const [entities] = await datastore.runQuery(query);

    return entities.map(e => ({
      id: e[datastore.KEY].id,
      estudanteId: e.estudanteId,
      respostas: JSON.parse(e.respostas),
      totalPerguntas: e.totalPerguntas,
      createdAt: e.createdAt,
    }));
  }
}

module.exports = new RespostaRepository();
