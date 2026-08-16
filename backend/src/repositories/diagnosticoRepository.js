const { datastore } = require('../config/datastore');

const KIND = 'Diagnostico';

class DiagnosticoRepository {
  /**
   * Salva o diagnóstico completo gerado pela IA para um estudante
   */
  async save(estudanteId, diagnostico) {
    const key = datastore.key(KIND);

    const entity = {
      key,
      data: {
        estudanteId: String(estudanteId),
        persona_predominante: diagnostico.estudante.persona_predominante,
        persona_secundaria: diagnostico.estudante.persona_secundaria,
        pensamento_chave: diagnostico.estudante.pensamento_chave,
        perfil_potencial: JSON.stringify(diagnostico.perfil_potencial),
        perfil_direcao: JSON.stringify(diagnostico.perfil_direcao),
        horas_semanais_estimadas: diagnostico.perfil_necessidades.horas_semanais_estimadas,
        suporte_prioritario: diagnostico.perfil_necessidades.suporte_prioritario,
        intencao_desistencia: diagnostico.perfil_necessidades.intencao_desistencia,
        formato_preferido: diagnostico.contexto_aprendizagem.formato_preferido,
        duracao_bloco_minutos: diagnostico.contexto_aprendizagem.duracao_bloco_minutos,
        tipo_atividade: diagnostico.contexto_aprendizagem.tipo_atividade,
        recomendacao_tutor: JSON.stringify(diagnostico.recomendacao_tutor),
        areas_impacto_sugeridas: JSON.stringify(diagnostico.areas_impacto_sugeridas),
        resumo_parecer: diagnostico.resumo_parecer,
        createdAt: new Date().toISOString(),
      },
    };

    await datastore.save(entity);
    return { id: key.id, estudanteId, ...diagnostico };
  }

  /**
   * Busca o diagnóstico mais recente de um estudante
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
    return this._mapEntity(e);
  }

  /**
   * Busca diagnósticos mais recentes de múltiplos estudantes
   */
  async findMany(estudanteIds) {
    if (!estudanteIds || estudanteIds.length === 0) return [];

    const query = datastore
      .createQuery(KIND)
      .filter('estudanteId', 'IN', estudanteIds.map(String))
      .order('createdAt', { descending: true });

    const [entities] = await datastore.runQuery(query);

    // Pega apenas o mais recente de cada estudante
    const seen = new Set();
    const results = [];
    for (const e of entities) {
      if (!seen.has(e.estudanteId)) {
        seen.add(e.estudanteId);
        results.push(this._mapEntity(e));
      }
    }
    return results;
  }

  _mapEntity(e) {
    return {
      id: e[datastore.KEY].id,
      estudanteId: e.estudanteId,
      estudante: {
        persona_predominante: e.persona_predominante,
        persona_secundaria: e.persona_secundaria,
        pensamento_chave: e.pensamento_chave,
      },
      perfil_potencial: JSON.parse(e.perfil_potencial),
      perfil_direcao: JSON.parse(e.perfil_direcao),
      perfil_necessidades: {
        horas_semanais_estimadas: e.horas_semanais_estimadas,
        suporte_prioritario: e.suporte_prioritario,
        intencao_desistencia: e.intencao_desistencia,
      },
      contexto_aprendizagem: {
        formato_preferido: e.formato_preferido,
        duracao_bloco_minutos: e.duracao_bloco_minutos,
        tipo_atividade: e.tipo_atividade,
      },
      recomendacao_tutor: JSON.parse(e.recomendacao_tutor),
      areas_impacto_sugeridas: JSON.parse(e.areas_impacto_sugeridas),
      resumo_parecer: e.resumo_parecer,
      createdAt: e.createdAt,
    };
  }

  /**
   * Lista todos os diagnósticos (para o painel do gestor)
   */
  async findAll(limit = 100) {
    const query = datastore
      .createQuery(KIND)
      .order('createdAt', { descending: true })
      .limit(limit);

    const [entities] = await datastore.runQuery(query);

    return entities.map(e => ({
      id: e[datastore.KEY].id,
      estudanteId: e.estudanteId,
      persona_predominante: e.persona_predominante,
      persona_secundaria: e.persona_secundaria,
      intencao_desistencia: e.intencao_desistencia,
      horas_semanais_estimadas: e.horas_semanais_estimadas,
      createdAt: e.createdAt,
    }));
  }

  /**
   * Busca todos os diagnósticos com intenção de desistência
   */
  async findComRisco() {
    const query = datastore
      .createQuery(KIND)
      .filter('intencao_desistencia', '=', true)
      .order('createdAt', { descending: true });

    const [entities] = await datastore.runQuery(query);

    return entities.map(e => ({
      id: e[datastore.KEY].id,
      estudanteId: e.estudanteId,
      persona_predominante: e.persona_predominante,
      horas_semanais_estimadas: e.horas_semanais_estimadas,
      suporte_prioritario: e.suporte_prioritario,
      recomendacao_tutor: JSON.parse(e.recomendacao_tutor),
      createdAt: e.createdAt,
    }));
  }
}

module.exports = new DiagnosticoRepository();
