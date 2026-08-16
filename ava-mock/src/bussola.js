import {
  etapasMetodologia,
  opcoesMomento,
  caminhos,
  passosPlano,
  apoios,
  estadoInicial,
} from './data/metodologia.js';

const STORAGE_KEY = 'vitru-bussola-plano-v2';
const CONSENT_KEY = 'vitru-bussola-consent-v1';
const RECOMMENDATION_LIMIT = 2;

function carregarEstado() {
  try {
    const salvo = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const estado = { ...estadoInicial, ...salvo };
    const recommendedIds = apoios.slice(0, RECOMMENDATION_LIMIT).map((apoio) => apoio.id);
    estado.apoiosSelecionados = (estado.apoiosSelecionados || [])
      .filter((id) => recommendedIds.includes(id))
      .slice(0, RECOMMENDATION_LIMIT);
    return estado;
  } catch {
    return { ...estadoInicial };
  }
}

let state = carregarEstado();
let activeDialog = localStorage.getItem(CONSENT_KEY) === 'accepted' ? null : 'consent';
let pendingSupportId = null;
let dialogReturnTarget = null;
let lastFocusSelector = null;
const etapaNaUrl = Number(new URLSearchParams(window.location.search).get('etapa'));
if (etapaNaUrl >= 1 && etapaNaUrl <= 8) state.etapa = etapaNaUrl;

function escapeHTML(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function salvarEstado() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function caminhoSelecionado() {
  return caminhos.find((item) => item.id === state.caminho) || caminhos[0];
}

function passosSelecionados() {
  return passosPlano.filter((passo) => state.passosSelecionados.includes(passo.id));
}

function apoioSelecionado(id) {
  return state.apoiosSelecionados.includes(id);
}

function renderHeader() {
  return `
    <header class="app-header">
      <a class="vitru-brand" href="index.html" aria-label="Voltar ao AVA Vitru">
        <span class="vitru-wordmark">vitru</span>
        <span class="brand-divider" aria-hidden="true"></span>
        <span class="product-name">Bússola de Carreira</span>
      </a>
      <div class="header-actions">
        <a class="help-link" href="#principios">Como funciona</a>
        <button class="help-link header-button" type="button" data-action="open-privacy">Privacidade e dados</button>
        <div class="profile" aria-label="Perfil de Marina Rocha">
          <span class="profile-avatar">MR</span>
          <span class="profile-copy"><strong>Marina Rocha</strong><small>Administração</small></span>
        </div>
      </div>
    </header>
  `;
}

function renderRail() {
  return `
    <aside class="journey-rail" aria-label="Etapas da Bússola">
      <div class="rail-intro">
        <span class="eyebrow rail-eyebrow">SUA JORNADA</span>
        <h2>Um passo de cada vez</h2>
        <p>Você pode voltar, revisar e ajustar suas escolhas quando quiser.</p>
      </div>
      <nav class="stage-nav">
        ${etapasMetodologia.map((etapa) => {
          const active = etapa.id === state.etapa;
          const done = etapa.id < state.etapa || (state.planoConfirmado && etapa.id === 8);
          return `
            <button
              class="stage-nav-item ${active ? 'active' : ''} ${done ? 'done' : ''}"
              data-go-stage="${etapa.id}"
              aria-current="${active ? 'step' : 'false'}"
              type="button"
            >
              <span class="stage-number">${done ? '<span class="material-symbols-rounded" aria-hidden="true">check</span>' : etapa.id}</span>
              <span class="stage-copy"><strong>${etapa.nome}</strong><small>${etapa.apoio}</small></span>
            </button>
          `;
        }).join('')}
      </nav>
      <div class="rail-principle" id="principios">
        <strong>Você está no controle</strong>
        <p>As sugestões apoiam sua decisão. Elas não limitam oportunidades.</p>
      </div>
    </aside>
  `;
}

function renderMobileProgress() {
  const atual = etapasMetodologia[state.etapa - 1];
  return `
    <div class="mobile-progress">
      <div><span>${state.etapa} de 8</span><strong>${atual.nome}</strong></div>
      <div class="progress-track" aria-label="${state.etapa} de 8 etapas"><span style="width:${state.etapa * 12.5}%"></span></div>
    </div>
  `;
}

function renderOptionGroup({ label, name, options, selected, compact = false }) {
  return `
    <fieldset class="choice-group">
      <legend>${label}</legend>
      <div class="choice-list ${compact ? 'compact' : ''}">
        ${options.map((option) => `
          <label class="choice-card ${selected === option.id ? 'selected' : ''}">
            <input type="radio" name="${name}" value="${option.id}" ${selected === option.id ? 'checked' : ''}>
            <span class="choice-indicator" aria-hidden="true"></span>
            <span><strong>${option.titulo}</strong>${option.descricao ? `<small>${option.descricao}</small>` : ''}</span>
          </label>
        `).join('')}
      </div>
    </fieldset>
  `;
}

function renderStage1() {
  return `
    <section class="stage-section">
      <div class="stage-heading">
        <span class="eyebrow">ETAPA 1 · MEU MOMENTO</span>
        <h1>Vamos começar pela sua realidade de hoje</h1>
        <p>Não existe resposta certa. Estas escolhas só ajudam a montar uma rota que faça sentido para você.</p>
      </div>
      <div class="form-stack">
        ${renderOptionGroup({
          label: 'O que mais ajudaria você a continuar avançando agora?',
          name: 'necessidade',
          options: opcoesMomento.necessidade,
          selected: state.necessidade,
        })}
        <div class="two-column-fields">
          ${renderOptionGroup({
            label: 'Qual força você mais reconhece em si?',
            name: 'potencial',
            options: opcoesMomento.potenciais,
            selected: state.potencial,
            compact: true,
          })}
          ${renderOptionGroup({
            label: 'Quanto tempo cabe na sua semana?',
            name: 'tempo',
            options: opcoesMomento.tempo,
            selected: state.tempo,
            compact: true,
          })}
        </div>
      </div>
    </section>
  `;
}

function renderStage2() {
  return `
    <section class="stage-section">
      <div class="stage-heading">
        <span class="eyebrow">ETAPA 2 · POSSÍVEIS CAMINHOS</span>
        <h1>Explore caminhos que combinam com você</h1>
        <p>São possibilidades para comparar, não uma decisão definitiva. Abra cada opção e escolha a que vale investigar primeiro.</p>
      </div>
      <div class="path-list">
        ${caminhos.map((caminho) => {
          const selected = state.caminho === caminho.id;
          const evidence = caminho.evidencias[state.potencial];
          return `
            <article class="path-card ${selected ? 'selected' : ''}">
              <div class="path-card-top">
                <span class="path-monogram" aria-hidden="true">${caminho.titulo.split(' ').slice(-1)[0].charAt(0)}</span>
                <div class="path-main-copy"><span class="card-kicker">${caminho.area}</span><h2>${caminho.titulo}</h2><p>${caminho.descricao}</p></div>
                <label class="path-selector"><input type="radio" name="caminho" value="${caminho.id}" ${selected ? 'checked' : ''}><span>${selected ? 'Escolhido' : 'Explorar'}</span></label>
              </div>
              <div class="path-details">
                <p><strong>No dia a dia:</strong> ${caminho.rotina}</p>
                <p class="evidence-line"><strong>Por que apareceu:</strong> ${evidence}</p>
              </div>
            </article>
          `;
        }).join('')}
      </div>
      <p class="privacy-note">Nenhum caminho é ocultado pelas suas respostas. Você pode revisar todas as opções.</p>
    </section>
  `;
}

function renderStage3() {
  const caminho = caminhoSelecionado();
  return `
    <section class="stage-section narrow-stage">
      <div class="stage-heading">
        <span class="eyebrow">ETAPA 3 · MEU OBJETIVO</span>
        <h1>Defina um norte para esta fase</h1>
        <p>Um objetivo dá direção ao plano, mas não prende você a uma escolha. Escreva com suas palavras e ajuste quando precisar.</p>
      </div>
      <div class="objective-card">
        <span class="card-kicker">CAMINHO EM EXPLORAÇÃO</span>
        <div class="selected-path-summary"><span class="path-monogram">${caminho.titulo.split(' ').slice(-1)[0].charAt(0)}</span><div><strong>${caminho.titulo}</strong><small>${caminho.area}</small></div><button class="text-button" type="button" data-go-stage="2">Trocar caminho</button></div>
        <label class="field-label" for="objetivo">Meu objetivo profissional</label>
        <textarea id="objetivo" name="objetivo" rows="3" maxlength="140">${escapeHTML(state.objetivo)}</textarea>
        <div class="field-help"><span>Exemplo: “Quero explorar uma atuação em dados e construir minha primeira experiência prática.”</span><span id="objectiveCount">${state.objetivo.length}/140</span></div>
      </div>
      <div class="autonomy-card"><strong>Este objetivo é seu</strong><p>A Bússola organiza sugestões a partir dele. Você pode editar, pausar ou recomeçar o plano sem impacto acadêmico.</p></div>
    </section>
  `;
}

function renderStage4() {
  const caminho = caminhoSelecionado();
  const evidencia = caminho.evidencias[state.potencial];
  const necessidade = opcoesMomento.necessidade.find((item) => item.id === state.necessidade);
  return `
    <section class="stage-section">
      <div class="stage-heading">
        <span class="eyebrow">ETAPA 4 · MEU PLANO</span>
        <h1>Seu plano começa a ganhar forma</h1>
        <p>Organizamos ações de aprendizado, experiência e conexão para aproximar você do objetivo.</p>
      </div>
      <div class="content-with-aside">
        <div>
          <div class="goal-strip"><div><span>SEU OBJETIVO PROFISSIONAL</span><strong>${escapeHTML(state.objetivo)}</strong></div><button class="text-button" type="button" data-go-stage="3">Editar</button></div>
          <div class="plan-list">
            ${passosPlano.map((passo, index) => `
              <article class="plan-item">
                <span class="plan-index">0${index + 1}</span>
                <div class="plan-copy"><span class="plan-horizon">${passo.horizonte}</span><h2>${passo.titulo}</h2><p>${passo.descricao}</p><span class="tag">${passo.tipo}</span></div>
                <span class="plan-status">Sugerida</span>
              </article>
            `).join('')}
          </div>
        </div>
        <aside class="explanation-card">
          <span class="explanation-mark material-symbols-rounded" aria-hidden="true">info</span>
          <h2>Por que recomendamos isso?</h2>
          <p>O plano combina suas respostas com experiências ligadas ao caminho de ${caminho.titulo}.</p>
          <ul>
            <li>${evidencia}</li>
            <li>Você informou ter ${state.tempo === '2' ? 'até 2 horas' : state.tempo === '4' ? 'de 3 a 5 horas' : 'de 6 a 10 horas'} por semana.</li>
            <li>Sua prioridade atual é: ${necessidade.titulo.toLowerCase()}.</li>
          </ul>
          <button class="text-button explanation-link" type="button" data-go-stage="1">Ajustar minhas respostas</button>
          <div class="explanation-note">Nada é definitivo: revise objetivo e plano quando quiser.</div>
        </aside>
      </div>
    </section>
  `;
}

function renderStage5() {
  const caminho = caminhoSelecionado();
  return `
    <section class="stage-section">
      <div class="stage-heading">
        <span class="eyebrow">ETAPA 5 · ESCOLHER ETAPAS</span>
        <h1>Escolha o que realmente cabe na sua rotina</h1>
        <p>Comece com uma ou mais ações. Menos etapas bem escolhidas costumam funcionar melhor do que um plano impossível.</p>
      </div>
      <div class="selection-summary"><strong>${state.passosSelecionados.length} de ${passosPlano.length} etapas escolhidas</strong><span>Tempo sugerido: ${state.passosSelecionados.length * 2}h no primeiro mês</span></div>
      <div class="step-selection-list">
        ${passosPlano.map((passo, index) => {
          const selected = state.passosSelecionados.includes(passo.id);
          const product = caminho.produtos[Math.min(index, caminho.produtos.length - 1)];
          return `
            <label class="selectable-step ${selected ? 'selected' : ''}">
              <input type="checkbox" name="passo" value="${passo.id}" ${selected ? 'checked' : ''}>
              <span class="checkbox-ui">${selected ? '<span class="material-symbols-rounded" aria-hidden="true">check</span>' : ''}</span>
              <span class="step-order">${index + 1}</span>
              <span class="step-select-copy"><span class="plan-horizon">${passo.horizonte}</span><strong>${passo.titulo}</strong><small>${passo.descricao}</small><span class="product-chip">${product}</span></span>
            </label>
          `;
        }).join('')}
      </div>
      <p class="privacy-note">Produtos e serviços aparecem como recursos opcionais do plano, não como condição para continuar no curso.</p>
    </section>
  `;
}

function renderStage6() {
  return `
    <section class="stage-section narrow-stage">
      <div class="stage-heading">
        <span class="eyebrow">ETAPA 6 · PRÓXIMO PASSO</span>
        <h1>Transforme o plano em uma ação simples</h1>
        <p>Escolha algo que você consiga começar. Concluir a primeira ação em até 30 dias é a principal medida de sucesso deste MVP.</p>
      </div>
      <div class="next-action-card ${state.acaoConcluida ? 'completed' : ''}">
        <div class="next-action-head"><span class="card-kicker">SUA PRÓXIMA AÇÃO</span>${state.acaoConcluida ? '<span class="status-success">Concluída</span>' : '<span class="status-pending">A fazer</span>'}</div>
        <label class="field-label" for="proximaAcao">O que você vai fazer?</label>
        <textarea id="proximaAcao" name="proximaAcao" rows="3" maxlength="160">${escapeHTML(state.proximaAcao)}</textarea>
        <label class="field-label" for="dataAcao">Quando pretende concluir?</label>
        <input class="date-input" type="date" id="dataAcao" name="dataAcao" value="${state.dataAcao}">
        <button class="primary-button full-button" type="button" data-action="toggle-complete">${state.acaoConcluida ? 'Reabrir esta ação' : 'Marcar como concluída'}</button>
      </div>
      <div class="metric-card"><span class="metric-number">30</span><div><strong>dias para ativar o plano</strong><p>A métrica principal acompanha quantos alunos concluem ao menos uma etapa nesse período.</p></div></div>
    </section>
  `;
}

function renderStage7() {
  const recommendedSupports = apoios.slice(0, RECOMMENDATION_LIMIT);
  return `
    <section class="stage-section">
      <div class="stage-heading">
        <span class="eyebrow">ETAPA 7 · PESSOAS E APOIO</span>
        <h1>Você não precisa fazer tudo sozinho</h1>
        <p>Estas são as duas opções de apoio mais úteis para este momento. Nenhum contato acontece antes da sua confirmação.</p>
      </div>
      <div class="support-grid">
        ${recommendedSupports.map((apoio) => {
          const selected = apoioSelecionado(apoio.id);
          return `
            <article class="support-card ${selected ? 'selected' : ''}">
              <span class="support-monogram">${apoio.titulo.charAt(0)}</span>
              <div class="support-copy">
                <strong>${apoio.titulo}</strong>
                <p>${apoio.descricao}</p>
                <small>${apoio.formato}</small>
              </div>
              <div class="support-choice">
                <span class="support-check">${selected ? '<span class="material-symbols-rounded" aria-hidden="true">check</span> No seu plano' : 'Recomendado'}</span>
                <button class="secondary-button support-action" type="button" aria-pressed="${selected}" data-action="${selected ? 'remove-support' : 'request-support'}" data-support-id="${apoio.id}">
                  ${selected ? 'Remover do plano' : 'Selecionar apoio'}
                </button>
              </div>
            </article>
          `;
        }).join('')}
      </div>
      <div class="consent-card"><span class="consent-icon material-symbols-rounded" aria-hidden="true">shield</span><div><strong>Contato com consentimento</strong><p>Ao avançar, você apenas salva suas preferências. Nenhuma mensagem ou agendamento será enviado neste protótipo.</p></div></div>
    </section>
  `;
}

function renderDialog() {
  if (!activeDialog) return '';

  if (activeDialog === 'consent') {
    return `
      <div class="dialog-backdrop">
        <section class="bussola-dialog" role="dialog" aria-modal="true" aria-labelledby="consent-title" aria-describedby="consent-description">
          <span class="dialog-eyebrow">ANTES DE COMEÇAR</span>
          <h2 id="consent-title">Você decide como participar</h2>
          <p id="consent-description">Suas respostas serão usadas para personalizar seu plano e apresentar opções de apoio. Elas não serão usadas para classificar você ou prever desistência.</p>
          <div class="dialog-actions stacked-actions">
            <button class="primary-button" type="button" data-action="accept-consent" data-dialog-primary>Continuar</button>
            <button class="secondary-button" type="button" data-action="decline-consent">Agora não</button>
            <button class="text-button" type="button" data-action="open-privacy">Como meus dados serão usados?</button>
          </div>
        </section>
      </div>
    `;
  }

  if (activeDialog === 'support') {
    const apoio = apoios.find((item) => item.id === pendingSupportId);
    if (!apoio) return '';
    return `
      <div class="dialog-backdrop">
        <section class="bussola-dialog" role="dialog" aria-modal="true" aria-labelledby="support-dialog-title" aria-describedby="support-dialog-description">
          <span class="dialog-eyebrow">CONFIRMAÇÃO</span>
          <h2 id="support-dialog-title">Confirmar solicitação de apoio?</h2>
          <p id="support-dialog-description">Nenhuma solicitação foi enviada ainda. Ao confirmar, <strong>${apoio.titulo}</strong> será adicionado ao seu plano.</p>
          <div class="dialog-support-summary"><strong>${apoio.titulo}</strong><span>${apoio.formato}</span></div>
          <p class="dialog-note">Neste protótipo, a confirmação apenas simula o encaminhamento.</p>
          <div class="dialog-actions">
            <button class="secondary-button" type="button" data-action="close-dialog">Voltar e revisar</button>
            <button class="primary-button" type="button" data-action="confirm-support" data-dialog-primary>Confirmar</button>
          </div>
        </section>
      </div>
    `;
  }

  return `
    <div class="dialog-backdrop">
      <section class="bussola-dialog" role="dialog" aria-modal="true" aria-labelledby="privacy-title" aria-describedby="privacy-description">
        <span class="dialog-eyebrow">PRIVACIDADE E DADOS</span>
        <h2 id="privacy-title">Seus dados apoiam suas escolhas</h2>
        <div id="privacy-description" class="privacy-dialog-copy">
          <p>A Bússola usa somente as respostas que você declara sobre seu momento, objetivo, disponibilidade e preferências.</p>
          <p>Esses dados personalizam seu plano e as opções de apoio. Eles não são usados para classificar você, prever evasão ou limitar oportunidades.</p>
          <p>Neste protótipo, as informações ficam salvas apenas neste navegador.</p>
        </div>
        <div class="dialog-actions">
          <button class="primary-button" type="button" data-action="close-dialog" data-dialog-primary>Fechar</button>
        </div>
      </section>
    </div>
  `;
}

function renderStage8() {
  const concluidas = state.acaoConcluida ? 1 : 0;
  const total = Math.max(state.passosSelecionados.length, 1);
  const percentual = Math.round((concluidas / total) * 100);
  return `
    <section class="stage-section">
      <div class="stage-heading">
        <span class="eyebrow">ETAPA 8 · ACOMPANHAMENTO</span>
        <h1>${state.planoConfirmado ? 'Seu plano está ativo' : 'Revise, confirme e siga no seu ritmo'}</h1>
        <p>O acompanhamento existe para adaptar a rota à sua realidade — não para cobrar uma trajetória perfeita.</p>
      </div>
      <div class="tracking-grid">
        <article class="progress-card">
          <div class="progress-ring" style="--progress:${percentual * 3.6}deg"><span>${percentual}%</span></div>
          <div><span class="card-kicker">PROGRESSO DO PRIMEIRO MÊS</span><h2>${concluidas} de ${total} etapas concluídas</h2><p>${state.acaoConcluida ? 'Você já transformou o plano em experiência.' : 'Comece pela ação definida na etapa anterior.'}</p><button class="text-button" type="button" data-go-stage="6">Revisar próximo passo</button></div>
        </article>
        <article class="checkin-card">
          <span class="card-kicker">CHECK-IN RÁPIDO</span>
          <h2>Como você se sente em relação ao plano?</h2>
          <div class="feeling-options">
            ${[
              ['confiante', 'Confiante para continuar'],
              ['ajustar', 'Preciso ajustar algumas etapas'],
              ['conversar', 'Quero conversar com alguém'],
            ].map(([id, label]) => `<label class="feeling-option ${state.percepcao === id ? 'selected' : ''}"><input type="radio" name="percepcao" value="${id}" ${state.percepcao === id ? 'checked' : ''}><span>${label}</span></label>`).join('')}
          </div>
        </article>
      </div>
      <div class="plan-review-card">
        <div><span class="card-kicker">SEU NORTE ATUAL</span><h2>${escapeHTML(state.objetivo)}</h2><p>${caminhoSelecionado().titulo} · ${state.passosSelecionados.length} etapas · ${state.apoiosSelecionados.length} apoio(s) selecionado(s)</p></div>
        <button class="secondary-button" type="button" data-go-stage="3">Editar plano</button>
      </div>
      <div class="final-actions">
        <button class="text-button danger-text" type="button" data-action="reset-plan">Recomeçar meu plano</button>
        <button class="primary-button" type="button" data-action="confirm-plan">${state.planoConfirmado ? 'Plano confirmado' : 'Confirmar e ativar meu plano'}</button>
      </div>
    </section>
  `;
}

const stageRenderers = [renderStage1, renderStage2, renderStage3, renderStage4, renderStage5, renderStage6, renderStage7, renderStage8];

function podeAvancar() {
  if (state.etapa === 1) return Boolean(state.necessidade && state.potencial && state.tempo);
  if (state.etapa === 2) return Boolean(state.caminho);
  if (state.etapa === 3) return state.objetivo.trim().length >= 8;
  if (state.etapa === 5) return state.passosSelecionados.length > 0;
  if (state.etapa === 6) return Boolean(state.proximaAcao.trim() && state.dataAcao);
  return true;
}

function renderFooter() {
  if (state.etapa === 8) return '';
  const nextLabel = state.etapa === 7 ? 'Revisar e continuar' : 'Continuar';
  return `
    <footer class="stage-footer">
      <button class="secondary-button" type="button" data-action="previous" ${state.etapa === 1 ? 'disabled' : ''}><span class="material-symbols-rounded" aria-hidden="true">arrow_back</span><span>Voltar</span></button>
      <span class="footer-hint">Suas escolhas ficam salvas neste dispositivo.</span>
      <button class="primary-button" type="button" data-action="next" ${podeAvancar() ? '' : 'disabled'}><span>${nextLabel}</span><span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span></button>
    </footer>
  `;
}

function render() {
  const app = document.getElementById('bussola-app');
  const renderStage = stageRenderers[state.etapa - 1];
  app.innerHTML = `
    ${renderHeader()}
    <div class="app-layout">
      ${renderRail()}
      <main class="journey-main">
        ${renderMobileProgress()}
        ${renderStage()}
        ${renderFooter()}
      </main>
    </div>
    <div class="toast" id="toast" role="status" aria-live="polite"></div>
    ${renderDialog()}
  `;
  document.body.classList.toggle('dialog-open', Boolean(activeDialog));
  document.title = `${etapasMetodologia[state.etapa - 1].nome} — Bússola Vitru`;
  window.scrollTo({ top: 0, behavior: 'instant' });
  if (activeDialog) requestAnimationFrame(() => document.querySelector('[data-dialog-primary]')?.focus());
}

function abrirDialog(dialog, supportId = null, returnTarget = null, focusSelector = null) {
  activeDialog = dialog;
  pendingSupportId = supportId;
  dialogReturnTarget = returnTarget;
  lastFocusSelector = focusSelector;
  render();
}

function fecharDialog() {
  const returnTarget = dialogReturnTarget;
  const focusSelector = lastFocusSelector;
  activeDialog = returnTarget;
  pendingSupportId = null;
  dialogReturnTarget = null;
  lastFocusSelector = null;
  render();
  if (!activeDialog && focusSelector) requestAnimationFrame(() => document.querySelector(focusSelector)?.focus());
}

function irParaEtapa(etapa) {
  const nextStage = Math.min(8, Math.max(1, Number(etapa)));
  state.etapa = nextStage;
  salvarEstado();
  const url = new URL(window.location.href);
  url.searchParams.set('etapa', String(nextStage));
  history.replaceState({}, '', url);
  render();
}

function mostrarToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 2600);
}

document.addEventListener('click', (event) => {
  const stageButton = event.target.closest('[data-go-stage]');
  if (stageButton) {
    irParaEtapa(stageButton.dataset.goStage);
    return;
  }

  const actionButton = event.target.closest('[data-action]');
  if (!actionButton) return;
  const action = actionButton.dataset.action;

  if (action === 'accept-consent') {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    fecharDialog();
    return;
  }
  if (action === 'decline-consent') {
    window.location.href = 'index.html';
    return;
  }
  if (action === 'open-privacy') {
    const openedFromConsent = activeDialog === 'consent';
    abrirDialog('privacy', null, openedFromConsent ? 'consent' : null, openedFromConsent ? null : '.header-button[data-action="open-privacy"]');
    return;
  }
  if (action === 'close-dialog') {
    fecharDialog();
    return;
  }
  if (action === 'request-support') {
    abrirDialog('support', actionButton.dataset.supportId, null, `[data-support-id="${actionButton.dataset.supportId}"]`);
    return;
  }
  if (action === 'confirm-support' && pendingSupportId) {
    state.apoiosSelecionados = [...new Set([...state.apoiosSelecionados, pendingSupportId])];
    salvarEstado();
    fecharDialog();
    mostrarToast('Apoio adicionado ao seu plano. Nenhum contato foi enviado.');
    return;
  }
  if (action === 'remove-support') {
    state.apoiosSelecionados = state.apoiosSelecionados.filter((id) => id !== actionButton.dataset.supportId);
    salvarEstado();
    render();
    mostrarToast('Apoio removido do seu plano.');
    return;
  }

  if (action === 'previous') irParaEtapa(state.etapa - 1);
  if (action === 'next' && podeAvancar()) irParaEtapa(state.etapa + 1);
  if (action === 'toggle-complete') {
    state.acaoConcluida = !state.acaoConcluida;
    salvarEstado();
    render();
    mostrarToast(state.acaoConcluida ? 'Ação concluída. Seu progresso foi atualizado.' : 'Ação reaberta no seu plano.');
  }
  if (action === 'confirm-plan') {
    state.planoConfirmado = true;
    salvarEstado();
    render();
    mostrarToast('Plano confirmado. Você poderá recalibrá-lo quando quiser.');
  }
  if (action === 'reset-plan') {
    state = { ...estadoInicial, passosSelecionados: [...estadoInicial.passosSelecionados], apoiosSelecionados: [...estadoInicial.apoiosSelecionados] };
    salvarEstado();
    irParaEtapa(1);
  }
});

document.addEventListener('change', (event) => {
  const { name, value, checked } = event.target;
  if (['necessidade', 'potencial', 'tempo', 'percepcao'].includes(name)) state[name] = value;
  if (name === 'caminho') {
    state.caminho = value;
    const caminho = caminhoSelecionado();
    state.objetivo = `Atuar como ${caminho.titulo}`;
  }
  if (name === 'passo') {
    state.passosSelecionados = checked
      ? [...new Set([...state.passosSelecionados, value])]
      : state.passosSelecionados.filter((id) => id !== value);
  }
  if (name === 'dataAcao') state.dataAcao = value;
  salvarEstado();
  render();
});

document.addEventListener('input', (event) => {
  if (event.target.name === 'objetivo') {
    state.objetivo = event.target.value;
    const counter = document.getElementById('objectiveCount');
    if (counter) counter.textContent = `${state.objetivo.length}/140`;
  }
  if (event.target.name === 'proximaAcao') state.proximaAcao = event.target.value;
  salvarEstado();
});

document.addEventListener('DOMContentLoaded', render);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && activeDialog && activeDialog !== 'consent') {
    fecharDialog();
    return;
  }

  if (event.key === 'Tab' && activeDialog) {
    const dialog = document.querySelector('.bussola-dialog');
    if (!dialog) return;
    const focusable = [...dialog.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled])')];
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});
