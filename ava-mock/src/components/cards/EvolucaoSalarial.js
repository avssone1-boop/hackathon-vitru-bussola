import { evolucaoSalarialData } from '../../data/dashboard.js';

export function createCardEvolucaoSalarial() {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <div class="card-header">
      <h3>Evolução Salarial</h3>
    </div>
    <div class="card-body">
      <div class="salary-chart">
        <div class="chart-y-axis">
          <span>3%</span>
          <span>0.5%</span>
          <span>0%</span>
        </div>
        <div class="salary-area">
          ${evolucaoSalarialData.semestres.map(s => `
            <div class="salary-bar-container">
              <div class="salary-bar"></div>
              <span class="bar-label">${s.periodo}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="chart-legend salary-legend">
        <p class="semester-label">Semestre</p>
        <span class="legend-item"><span class="legend-color legend-evolucao-aluno"></span> Evolução Aluno</span>
        <span class="legend-item"><span class="legend-color legend-evolucao-curso"></span> Evolução Curso</span>
      </div>
    </div>
  `;

  return card;
}
