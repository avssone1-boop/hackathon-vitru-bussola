import { bussolaDiagnostico } from '../data/bussola.js';

const personaEmojis = {
  Acelerador: '🚀',
  Construtor: '🏗️',
  Realizador: '🏆',
  Explorador: '🧭'
};

const perguntas = [
  {
    id: 1,
    texto: "O que te motivou a começar este curso?",
    opcoes: [
      { label: "Quero crescer na carreira e ganhar mais", persona: "Acelerador" },
      { label: "Quero construir uma vida mais estável para minha família", persona: "Construtor" },
      { label: "Quero provar para mim mesmo que sou capaz", persona: "Realizador" },
      { label: "Estou tentando descobrir o que quero para minha vida", persona: "Explorador" }
    ]
  },
  {
    id: 2,
    texto: "Como está sua rotina de estudos atualmente?",
    opcoes: [
      { label: "Consigo estudar todos os dias, tenho disciplina", valor: "alta" },
      { label: "Estudo algumas vezes por semana quando dá", valor: "media" },
      { label: "Tenho muita dificuldade de encontrar tempo", valor: "baixa" },
      { label: "Quase não tenho conseguido estudar", valor: "critica" }
    ]
  },
  {
    id: 3,
    texto: "Quantas horas por semana você consegue dedicar aos estudos?",
    opcoes: [
      { label: "Mais de 10 horas", valor: 12 },
      { label: "Entre 6 e 10 horas", valor: 8 },
      { label: "Entre 2 e 5 horas", valor: 4 },
      { label: "Menos de 2 horas", valor: 1 }
    ]
  },
  {
    id: 4,
    texto: "Você já pensou em desistir do curso?",
    opcoes: [
      { label: "Não, estou motivado(a)", valor: false },
      { label: "Já pensei, mas estou tentando continuar", valor: true },
      { label: "Penso frequentemente nisso", valor: true },
      { label: "Estou praticamente decidido(a) a parar", valor: true }
    ]
  },
  {
    id: 5,
    texto: "Como você prefere estudar?",
    opcoes: [
      { label: "Vídeos curtos e objetivos", formato: "assincrono", tipo: "video_curto" },
      { label: "Leitura com exercícios práticos", formato: "assincrono", tipo: "pratica_curta" },
      { label: "Aulas ao vivo com interação", formato: "sincrono", tipo: "aula_ao_vivo" },
      { label: "Projetos e desafios práticos", formato: "assincrono", tipo: "projeto" }
    ]
  },
  {
    id: 6,
    texto: "O que mais te preocupa em relação ao curso?",
    opcoes: [
      { label: "Não saber se estou no curso certo", preocupacao: "carreira" },
      { label: "Não ter tempo suficiente para dar conta", preocupacao: "tempo" },
      { label: "Dificuldade financeira para manter", preocupacao: "financeiro" },
      { label: "Sentir que estou sozinho(a) nessa jornada", preocupacao: "isolamento" }
    ]
  }
];

function renderPergunta(pergunta, index, total) {
  return `
    <div class="pergunta-container">
      <div class="pergunta-progress">
        <div class="pergunta-progress-bar" style="width: ${((index + 1) / total) * 100}%"></div>
      </div>
      <p class="pergunta-counter">Pergunta ${index + 1} de ${total}</p>
      <h3 class="pergunta-texto">${pergunta.texto}</h3>
      <div class="opcoes-list">
        ${pergunta.opcoes.map((opcao, i) => `
          <button class="opcao-btn" data-index="${i}">
            ${opcao.label}
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

function renderResultadoAluno(diagnostico) {
  const d = diagnostico;
  const emoji = personaEmojis[d.estudante.persona_predominante] || '🧭';

  // Pegar top 3 potenciais
  const topPotenciais = Object.entries(d.perfil_potencial)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);

  return `
    <div class="resultado-aluno">
      <div class="resultado-header">
        <span class="resultado-emoji">${emoji}</span>
        <h3>Seu Perfil: ${d.estudante.persona_predominante}</h3>
      </div>

      <p class="resultado-frase">"${d.estudante.pensamento_chave}"</p>

      <div class="resultado-section">
        <h4>✨ Seus pontos fortes</h4>
        <div class="pontos-fortes">
          ${topPotenciais.map(([key, val]) => `
            <div class="ponto-forte-item">
              <span class="ponto-nome">${key.charAt(0).toUpperCase() + key.slice(1)}</span>
              <div class="ponto-barra-bg">
                <div class="ponto-barra-fill" style="width: ${val * 100}%"></div>
              </div>
              <span class="ponto-valor">${(val * 100).toFixed(0)}%</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="resultado-section">
        <h4>🎯 Áreas sugeridas para você</h4>
        <div class="areas-sugeridas">
          ${d.areas_impacto_sugeridas.map(area => `
            <span class="area-tag">${area}</span>
          `).join('')}
        </div>
      </div>

      <div class="resultado-section resultado-parecer">
        <h4>💬 O que percebemos sobre você</h4>
        <p>${d.resumo_parecer}</p>
      </div>

      <button class="btn-fechar-resultado" id="fecharResultado">Entendi, obrigado! 🙌</button>
    </div>
  `;
}

export function createBussolaModal() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'bussolaModal';

  let currentPergunta = 0;
  const respostas = [];

  function renderCurrentStep() {
    const container = overlay.querySelector('.modal-container');

    if (currentPergunta < perguntas.length) {
      // Mostra pergunta
      container.innerHTML = `
        <div class="modal-header">
          <div class="modal-title-area">
            <span class="modal-logo">🧭</span>
            <h2>Bússola</h2>
          </div>
          <button class="modal-close" id="closeBussola">&times;</button>
        </div>
        <div class="modal-body">
          ${renderPergunta(perguntas[currentPergunta], currentPergunta, perguntas.length)}
        </div>
      `;

      // Eventos dos botões de opção
      container.querySelectorAll('.opcao-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.index);
          respostas.push({
            pergunta: perguntas[currentPergunta].id,
            resposta: perguntas[currentPergunta].opcoes[idx]
          });
          currentPergunta++;
          renderCurrentStep();
        });
      });
    } else {
      // Mostra resultado do aluno
      container.innerHTML = `
        <div class="modal-header">
          <div class="modal-title-area">
            <span class="modal-logo">🧭</span>
            <h2>Bússola — Seu Diagnóstico</h2>
          </div>
          <button class="modal-close" id="closeBussola">&times;</button>
        </div>
        <div class="modal-body">
          ${renderResultadoAluno(bussolaDiagnostico)}
        </div>
      `;

      container.querySelector('#fecharResultado')?.addEventListener('click', () => {
        overlay.classList.remove('active');
        // Reset para próxima abertura
        currentPergunta = 0;
        respostas.length = 0;
      });
    }

    // Fechar
    container.querySelector('#closeBussola')?.addEventListener('click', () => {
      overlay.classList.remove('active');
      currentPergunta = 0;
      respostas.length = 0;
    });
  }

  overlay.innerHTML = `<div class="modal-container"></div>`;

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
      currentPergunta = 0;
      respostas.length = 0;
    }
  });

  // Observer para quando o modal abrir
  const observer = new MutationObserver(() => {
    if (overlay.classList.contains('active')) {
      renderCurrentStep();
    }
  });
  observer.observe(overlay, { attributes: true, attributeFilter: ['class'] });

  return overlay;
}

export function openBussolaModal() {
  const modal = document.getElementById('bussolaModal');
  if (modal) {
    modal.classList.add('active');
  }
}
