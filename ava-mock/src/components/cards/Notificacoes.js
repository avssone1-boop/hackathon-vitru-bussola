export function createCardNotificacoes() {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <div class="card-header">
      <h3>🔔 Notificações <span class="ver-todos">(Ver todos)</span></h3>
      <button class="card-toggle">▲</button>
    </div>
    <div class="card-body notificacoes-empty">
      <div class="empty-state">
        <div class="empty-icon">🔄</div>
        <p>Nenhuma notificação!</p>
      </div>
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
