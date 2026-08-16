import { createBarChart } from '../charts/BarChart.js';
import { evolucaoSemestreData } from '../../data/dashboard.js';

export function createCardEvolucaoSemestre() {
  const card = document.createElement('div');
  card.className = 'card';

  const labels = evolucaoSemestreData.disciplinas.map(d => d.codigo);

  card.innerHTML = `
    <div class="card-header">
      <h3>Evolução Semestre <span class="semester-badge">${evolucaoSemestreData.semestre} ▼</span></h3>
    </div>
    <div class="card-body">
      ${createBarChart(evolucaoSemestreData.disciplinas, labels)}
      <div class="chart-info">
        <p>${evolucaoSemestreData.concluido.toFixed(2)}% concluído</p>
        <p>${evolucaoSemestreData.aproveitamento.toFixed(2)}% aproveitamento</p>
      </div>
    </div>
  `;

  return card;
}
