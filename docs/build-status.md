---
title: Estado de publicación
hide:
  - navigation
  - footer
---

# Estado de publicación

Usa el número de compilación del workflow **Documentation** para comprobar si terminó correctamente y si llegó a GitHub Pages.

<div class="teaching-card" id="build-status-card">
  <span class="teaching-eyebrow">Compilación</span>
  <strong>Consultar una ejecución</strong>
  <p>Ingresa el número que aparece como <code>#123</code> en GitHub Actions.</p>

  <form id="build-status-form" style="display:flex;gap:.75rem;align-items:end;flex-wrap:wrap">
    <label style="display:grid;gap:.35rem">
      <span>Número de compilación</span>
      <input id="build-number" type="number" min="1" inputmode="numeric" required
             placeholder="Ej. 184"
             style="font:inherit;padding:.55rem .7rem;border:1px solid var(--md-default-fg-color--lighter);border-radius:.2rem;background:var(--md-default-bg-color);color:var(--md-default-fg-color)">
    </label>
    <button class="md-button md-button--primary" type="submit">Verificar</button>
  </form>

  <div id="build-status-result" aria-live="polite" style="margin-top:1rem"></div>
</div>

<div class="teaching-card" style="margin-top:1rem">
  <span class="teaching-eyebrow">Publicado ahora</span>
  <strong id="published-build">Consultando…</strong>
  <span id="published-commit"></span>
</div>

<script>
(() => {
  const repo = "HernanFAR/teaching";
  const workflow = "docs.yml";
  const form = document.getElementById("build-status-form");
  const input = document.getElementById("build-number");
  const result = document.getElementById("build-status-result");
  const publishedBuild = document.getElementById("published-build");
  const publishedCommit = document.getElementById("published-commit");

  let published = null;

  const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);

  async function loadPublishedBuild() {
    const response = await fetch(new URL("../build.json", window.location.href), { cache: "no-store" });
    if (!response.ok) throw new Error("No se pudo leer build.json");
    published = await response.json();
    publishedBuild.textContent = `Build #${published.runNumber}`;
    publishedCommit.textContent = `${published.commit.slice(0, 7)} · ${published.builtAt}`;
  }

  async function findWorkflowRun(runNumber) {
    for (let page = 1; page <= 10; page++) {
      const url = `https://api.github.com/repos/${repo}/actions/workflows/${workflow}/runs?per_page=100&page=${page}`;
      const response = await fetch(url, { headers: { "Accept": "application/vnd.github+json" } });

      if (!response.ok) {
        if (response.status === 403) throw new Error("GitHub alcanzó temporalmente el límite de consultas. Intenta nuevamente más tarde.");
        throw new Error(`GitHub respondió ${response.status}`);
      }

      const data = await response.json();
      const run = data.workflow_runs.find(item => item.run_number === runNumber);
      if (run) return run;

      if (data.workflow_runs.length === 0) break;
      const smallest = Math.min(...data.workflow_runs.map(item => item.run_number));
      if (smallest < runNumber) break;
    }

    return null;
  }

  function renderRun(run, requested) {
    const isPublishedNow = published && published.runNumber === requested;
    const commit = run.head_sha ? run.head_sha.slice(0, 7) : "desconocido";
    const actionLink = `<a href="${escapeHtml(run.html_url)}" target="_blank" rel="noopener">Abrir ejecución en GitHub Actions</a>`;

    if (run.status !== "completed") {
      result.innerHTML = `🟡 <strong>Build #${requested} todavía está ${escapeHtml(run.status)}.</strong><br>${actionLink}`;
      return;
    }

    if (run.event === "pull_request") {
      const ok = run.conclusion === "success";
      result.innerHTML = `${ok ? "✅" : "❌"} <strong>Build #${requested} ${ok ? "compiló correctamente" : "falló"}.</strong><br>
        Fue una ejecución de Pull Request, por lo que <strong>no se publica en GitHub Pages</strong>.<br>
        Commit ${escapeHtml(commit)} · ${actionLink}`;
      return;
    }

    if (run.conclusion === "success") {
      result.innerHTML = `✅ <strong>Build #${requested} terminó correctamente y su despliegue finalizó.</strong><br>
        ${isPublishedNow
          ? "Es la versión publicada actualmente en GitHub Pages."
          : "Ya no es la versión publicada actualmente; una compilación posterior la reemplazó."}<br>
        Commit ${escapeHtml(commit)} · ${actionLink}`;
      return;
    }

    result.innerHTML = `❌ <strong>Build #${requested} terminó con estado ${escapeHtml(run.conclusion || "desconocido")}.</strong><br>
      No quedó publicado por esta ejecución.<br>
      Commit ${escapeHtml(commit)} · ${actionLink}`;
  }

  form.addEventListener("submit", async event => {
    event.preventDefault();
    const requested = Number.parseInt(input.value, 10);
    if (!Number.isInteger(requested) || requested < 1) return;

    result.textContent = `Buscando build #${requested}…`;

    try {
      if (!published) await loadPublishedBuild();
      const run = await findWorkflowRun(requested);

      if (!run) {
        result.innerHTML = `⚪ <strong>No encontré el build #${requested} entre las ejecuciones recientes.</strong><br>
          Puede ser muy antiguo o el número puede no corresponder al workflow Documentation.`;
        return;
      }

      renderRun(run, requested);
    } catch (error) {
      result.textContent = `No pude verificar la compilación: ${error.message}`;
    }
  });

  loadPublishedBuild().catch(() => {
    publishedBuild.textContent = "No se pudo determinar";
    publishedCommit.textContent = "El sitio actual no expone metadata de compilación.";
  });
})();
</script>
