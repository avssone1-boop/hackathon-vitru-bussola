import {
  resumoJornada,
  funilEtapas,
  demandaApoio,
  caminhosExplorados,
  cursosAgregados,
  acoesGestao,
} from './data/gestorData.js';

function renderKpis() {
  return `
    <section class="manager-kpis" aria-label="Indicadores principais">
      ${resumoJornada.map((item, index) => `
        <article class="manager-kpi ${index === 2 ? 'primary-kpi' : ''}">
          <span class="kpi-value">${item.valor}</span>
          <strong>${item.rotulo}</strong>
          <small>${item.detalhe}</small>
        </article>
      `).join('')}
    </section>
  `;
}

function renderFunnel() {
  const maior = funilEtapas[0].alunos;
  return `
    <article class="manager-card funnel-card">
      <div class="manager-card-heading"><div><span class="manager-kicker">JORNADA DE 8 ETAPAS</span><h2>Avanço pelo método</h2></div><span class="data-tag">Dados demonstrativos</span></div>
      <div class="funnel-list">
        ${funilEtapas.map((etapa) => `
          <div class="funnel-item">
            <span class="funnel-number">${etapa.id}</span>
            <span class="funnel-name">${etapa.nome}</span>
            <div class="funnel-track"><span style="width:${Math.round((etapa.alunos / maior) * 100)}%"></span></div>
            <strong>${etapa.alunos}</strong>
          </div>
        `).join('')}
      </div>
      <p class="manager-insight"><strong>Ponto de atenção:</strong> a maior transição a melhorar está entre “Meu objetivo” e “Meu plano”.</p>
    </article>
  `;
}

function renderBars(title, kicker, items) {
  return `
    <article class="manager-card compact-card">
      <span class="manager-kicker">${kicker}</span>
      <h2>${title}</h2>
      <div class="manager-bars">
        ${items.map((item) => `
          <div class="manager-bar-item">
            <div><span>${item.nome}</span><strong>${item.total} · ${item.percentual}%</strong></div>
            <div class="manager-bar-track"><span style="width:${item.percentual}%"></span></div>
          </div>
        `).join('')}
      </div>
    </article>
  `;
}

function renderTable() {
  return `
    <article class="manager-card manager-table-card">
      <div class="manager-card-heading"><div><span class="manager-kicker">VISÃO AGREGADA</span><h2>Ativação por curso</h2></div><span class="privacy-badge">Sem ranking individual</span></div>
      <div class="manager-table-wrap">
        <table class="manager-table">
          <thead><tr><th>Curso</th><th>Participantes</th><th>Com objetivo</th><th>Ativação em 30 dias</th><th>Apoio mais escolhido</th></tr></thead>
          <tbody>
            ${cursosAgregados.map((curso) => `
              <tr><td><strong>${curso.curso}</strong></td><td>${curso.participantes}</td><td>${curso.objetivo}</td><td><span class="activation-badge">${curso.ativacao}%</span></td><td>${curso.apoio}</td></tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </article>
  `;
}

function renderActions() {
  return `
    <article class="manager-card action-card">
      <span class="manager-kicker">DECISÕES COM EVIDÊNCIA</span>
      <h2>Próximas ações de apoio</h2>
      <div class="manager-actions">
        ${acoesGestao.map((acao, index) => `
          <div class="manager-action">
            <span class="action-number">0${index + 1}</span>
            <div><strong>${acao.titulo}</strong><p>${acao.evidencia}</p><small>${acao.responsavel} · ${acao.prazo}</small></div>
          </div>
        `).join('')}
      </div>
    </article>
  `;
}

function render() {
  const app = document.getElementById('gestor-app');
  app.innerHTML = `
    <header class="manager-header">
      <a class="manager-brand" href="index.html"><span>vitru</span><i></i><strong>Bússola · Gestão</strong></a>
      <a class="manager-back" href="index.html">Voltar ao AVA</a>
    </header>
    <main class="manager-main">
      <section class="manager-hero">
        <div><span class="manager-kicker">PAINEL DO MVP</span><h1>Da recomendação à primeira ação</h1><p>Acompanhe adoção, avanço e demanda por apoio para melhorar a experiência — sem classificar alunos por risco.</p></div>
        <div class="manager-metric"><span>Métrica principal</span><strong>51%</strong><small>concluíram ao menos uma etapa do plano em 30 dias</small></div>
      </section>
      ${renderKpis()}
      <section class="manager-grid main-grid">${renderFunnel()}<div class="side-stack">${renderBars('Apoios escolhidos', 'DEMANDA COM CONSENTIMENTO', demandaApoio)}${renderBars('Caminhos explorados', 'INTERESSES DECLARADOS', caminhosExplorados)}</div></section>
      ${renderTable()}
      ${renderActions()}
      <p class="manager-footnote">Protótipo com dados demonstrativos. Em produção, exibir apenas grupos com volume mínimo e respeitar consentimento, edição e exclusão das escolhas do aluno.</p>
    </main>
  `;
}

document.addEventListener('DOMContentLoaded', render);
