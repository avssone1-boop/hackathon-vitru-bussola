import { createBarChart } from '../charts/BarChart.js';
import { evolucaoCursoData } from '../../data/dashboard.js';

export function createCardEvolucaoCurso() {
  const card = document.createElement('div');
  card.className = 'card';

  const labels = evolucaoCursoData.semestres.map(s => s.periodo);

  card.innerHTML = `
    <div class="card-header">
      <h3>Evolução Curso</h3>
    </div>
    <div class="card-body">
      ${createBarChart(evolucaoCursoData.semestres, labels)}
      <div class="chart-info">
        <p>${evolucaoCursoData.concluido.toFixed(2)}% concluído</p>
      </div>
    </div>
  `;

  return card;
}
