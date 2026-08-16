export function createBarChart(data, labels) {
  const maxValue = 1.0;
  const yLabels = ['1.0', '0.8', '0.6', '0.4', '0.2', '0'];

  return `
    <div class="chart-placeholder">
      <div class="chart-y-axis">
        ${yLabels.map(l => `<span>${l}</span>`).join('')}
      </div>
      <div class="chart-area">
        <div class="chart-bars">
          ${data.map((item, i) => `
            <div class="bar-group">
              <div class="bar bar-aluno" style="height: ${Math.max((item.mediaAluno / maxValue) * 100, 3)}%"></div>
              <div class="bar bar-turma" style="height: ${Math.max((item.mediaTurma / maxValue) * 100, 3)}%"></div>
              <span class="bar-label">${labels[i]}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    <div class="chart-legend">
      <span class="legend-item"><span class="legend-color legend-aluno"></span> Média Aluno</span>
      <span class="legend-item"><span class="legend-color legend-turma"></span> Média Turma</span>
    </div>
  `;
}
