const { datastore } = require('../config/datastore');

const KIND = 'Metricas';

class MetricasRepository {
  /**
   * Salva snapshot de métricas (executado periodicamente ou após novo diagnóstico)
   */
  async save(metricas) {
    const key = datastore.key(KIND);

    const entity = {
      key,
      data: {
        totalAlunos: metricas.totalAlunos,
        comRisco: metricas.comRisco,
        semRisco: metricas.semRisco,
        taxaDesistencia: metricas.taxaDesistencia,
        taxaRetencao: metricas.taxaRetencao,
        mediaEngajamento: metricas.mediaEngajamento,
        distribuicaoPersonas: JSON.stringify(metricas.distribuicaoPersonas),
        preocupacoes: JSON.stringify(metricas.preocupacoes),
        createdAt: new Date().toISOString(),
      },
    };

    await datastore.save(entity);
    return { id: key.id, ...metricas, createdAt: entity.data.createdAt };
  }

  /**
   * Busca métricas mais recentes (para dashboard do gestor)
   */
  async findLatest() {
    const query = datastore
      .createQuery(KIND)
      .order('createdAt', { descending: true })
      .limit(1);

    const [entities] = await datastore.runQuery(query);
    if (entities.length === 0) return null;

    const e = entities[0];
    return {
      id: e[datastore.KEY].id,
      totalAlunos: e.totalAlunos,
      comRisco: e.comRisco,
      semRisco: e.semRisco,
      taxaDesistencia: e.taxaDesistencia,
      taxaRetencao: e.taxaRetencao,
      mediaEngajamento: e.mediaEngajamento,
      distribuicaoPersonas: JSON.parse(e.distribuicaoPersonas),
      preocupacoes: JSON.parse(e.preocupacoes),
      createdAt: e.createdAt,
    };
  }

  /**
   * Busca histórico de métricas (evolução mensal)
   */
  async findHistorico(limit = 12) {
    const query = datastore
      .createQuery(KIND)
      .order('createdAt', { descending: true })
      .limit(limit);

    const [entities] = await datastore.runQuery(query);

    return entities.map(e => ({
      id: e[datastore.KEY].id,
      totalAlunos: e.totalAlunos,
      comRisco: e.comRisco,
      taxaDesistencia: e.taxaDesistencia,
      taxaRetencao: e.taxaRetencao,
      createdAt: e.createdAt,
    })).reverse();
  }
}

module.exports = new MetricasRepository();
