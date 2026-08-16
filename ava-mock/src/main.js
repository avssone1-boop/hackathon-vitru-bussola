import { createSidebar } from './components/Sidebar.js';
import { createHeader } from './components/Header.js';
import { createCardEvolucaoSemestre } from './components/cards/EvolucaoSemestre.js';
import { createCardEvolucaoCurso } from './components/cards/EvolucaoCurso.js';
import { createCardEvolucaoSalarial } from './components/cards/EvolucaoSalarial.js';
import { createCardPendencias } from './components/cards/Pendencias.js';
import { createCardNotificacoes } from './components/cards/Notificacoes.js';
import { createCardAvisos } from './components/cards/Avisos.js';

function render() {
  const app = document.getElementById('app');

  // Sidebar
  app.appendChild(createSidebar());

  // Main content
  const main = document.createElement('main');
  main.className = 'main-content';

  // Header
  main.appendChild(createHeader());

  // Dashboard
  const dashboard = document.createElement('div');
  dashboard.className = 'dashboard';

  // Entrada fixa da Bússola no portal acadêmico.
  const bussolaBtn = document.createElement('a');
  bussolaBtn.className = 'btn-bussola';
  bussolaBtn.href = 'bussola.html';
  bussolaBtn.setAttribute('aria-label', 'Abrir Bússola de Carreira para encontrar apoio');
  bussolaBtn.innerHTML = '<strong>Bússola de Carreira</strong><span>Preciso de apoio</span>';

  // Top row - Gráficos
  const topRow = document.createElement('div');
  topRow.className = 'dashboard-row';
  topRow.appendChild(createCardEvolucaoSemestre());
  topRow.appendChild(createCardEvolucaoCurso());
  topRow.appendChild(createCardEvolucaoSalarial());
  dashboard.appendChild(topRow);

  // Bottom row - Informações
  const bottomRow = document.createElement('div');
  bottomRow.className = 'dashboard-row';
  bottomRow.appendChild(createCardPendencias());
  bottomRow.appendChild(createCardNotificacoes());
  bottomRow.appendChild(createCardAvisos());
  dashboard.appendChild(bottomRow);

  main.appendChild(dashboard);
  app.appendChild(main);
  app.appendChild(bussolaBtn);
}

document.addEventListener('DOMContentLoaded', render);
