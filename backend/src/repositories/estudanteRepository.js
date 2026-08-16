const { datastore } = require('../config/datastore');

const KIND = 'Estudante';

class EstudanteRepository {
  async save(data) {
    const key = data.id
      ? datastore.key([KIND, datastore.int(data.id)])
      : datastore.key(KIND);

    const entity = {
      key,
      data: {
        nome: data.nome,
        email: data.email,
        curso: data.curso,
        semestre: data.semestre,
        createdAt: data.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    };

    await datastore.save(entity);
    return { id: key.id || key.name, ...entity.data };
  }

  async findById(id) {
    const key = datastore.key([KIND, datastore.int(id)]);
    const [entity] = await datastore.get(key);
    if (!entity) return null;
    return { id: key.id, ...entity };
  }

  /**
   * Busca múltiplos estudantes por array de IDs
   */
  async findMany(ids) {
    if (!ids || ids.length === 0) return [];
    const keys = ids.map(id => datastore.key([KIND, datastore.int(id)]));
    const [entities] = await datastore.get(keys);
    return entities
      .filter(e => e !== undefined && e !== null)
      .map(e => ({ id: e[datastore.KEY].id, ...e }));
  }

  async findAll(limit = 50, cursor = null) {
    let query = datastore.createQuery(KIND).limit(limit);
    if (cursor) query = query.start(cursor);

    const [entities, info] = await datastore.runQuery(query);
    const estudantes = entities.map(e => ({
      id: e[datastore.KEY].id,
      ...e,
    }));

    return {
      estudantes,
      nextCursor: info.moreResults !== 'NO_MORE_RESULTS' ? info.endCursor : null,
    };
  }

  async delete(id) {
    const key = datastore.key([KIND, datastore.int(id)]);
    await datastore.delete(key);
    return { deleted: true, id };
  }
}

module.exports = new EstudanteRepository();
