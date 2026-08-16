import { pendencias } from '../../data/dashboard.js';

export function createCardPendencias() {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <div class="card-header">
      <h3>📋 Pendências <span class="count">(${pendencias.length})</span></h3>
      <button class="card-toggle">▲</button>
    </div>
    <div class="card-body">
      ${pendencias.map(p => `
        <div class="pendencia-item">
          <span class="pendencia-icon">${p.icon}</span>
          <span class="pendencia-text">${p.texto}</span>
          <span class="badge badge-red">!</span>
          <button class="pendencia-action">+</button>
        </div>
      `).join('')}
    </div>
  `;

  const toggleBtn = card.querySelector('.card-toggle');
  const body = card.querySelector('.card-body');
  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('collapsed');
    toggleBtn.textContent = body.classList.contains('collapsed') ? '▼' : '▲';
  });

  card.querySelectorAll('.pendencia-action').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      alert(`Abrindo detalhes: ${pendencias[index].texto}`);
    });
  });

  return card;
}
