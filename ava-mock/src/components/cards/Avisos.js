import { avisos } from '../../data/dashboard.js';

export function createCardAvisos() {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <div class="card-header">
      <h3>⚠️ Avisos <span class="ver-todos">(Ver todos)</span></h3>
      <button class="card-toggle">▲</button>
    </div>
    <div class="card-body">
      ${avisos.map(a => `
        <div class="aviso-item">
          <span class="aviso-date">${a.data}</span>
          <span class="aviso-dot dot-orange"></span>
          <span class="aviso-text">${a.texto}</span>
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

  return card;
}
