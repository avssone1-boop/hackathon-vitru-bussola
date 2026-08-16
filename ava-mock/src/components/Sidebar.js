import { menuItems } from '../data/menu.js';

export function createSidebar() {
  const sidebar = document.createElement('aside');
  sidebar.className = 'sidebar';
  sidebar.id = 'sidebar';

  sidebar.innerHTML = `
    <div class="sidebar-logo">
      <div class="logo-placeholder">
        <strong>UNIASSELVI</strong>
        <p class="logo-subtitle">Conecta sua carreira futura</p>
      </div>
    </div>
    <nav class="sidebar-nav">
      ${menuItems.map((item, index) => `
        <a href="#" class="nav-item ${item.active ? 'active' : ''}" data-index="${index}">
          <span class="nav-icon">${item.icon}</span> ${item.label}
          ${item.submenu ? '<span class="arrow">›</span>' : ''}
        </a>
      `).join('')}
    </nav>
  `;

  sidebar.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      sidebar.querySelectorAll('.nav-item').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  return sidebar;
}
