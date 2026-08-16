export function createHeader() {
  const header = document.createElement('header');
  header.className = 'header';

  header.innerHTML = `
    <div class="header-left">
      <button class="menu-toggle" id="menuToggle">☰</button>
      <h1 class="header-title">AVA <span class="header-subtitle">Ambiente Virtual de Aprendizagem</span></h1>
    </div>
    <div class="header-right">
      <button class="header-icon" id="notifBtn">🔔</button>
      <button class="btn-sair" id="btnSair">Sair</button>
    </div>
  `;

  header.querySelector('#menuToggle').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
    document.querySelector('.main-content').classList.toggle('expanded');
  });

  header.querySelector('#btnSair').addEventListener('click', () => {
    if (confirm('Deseja realmente sair?')) {
      alert('Sessão encerrada.');
    }
  });

  header.querySelector('#notifBtn').addEventListener('click', () => {
    alert('Nenhuma notificação no momento.');
  });

  return header;
}
