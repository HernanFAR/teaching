(() => {
  const roots = document.querySelectorAll("[data-teaching-exploration]");

  for (const root of roots) {
    const mode = root.querySelector("[data-exploration-mode]");
    const need = root.querySelector("[data-exploration-need]");
    const prepare = root.querySelector("[data-exploration-prepare]");
    const output = root.querySelector("[data-exploration-output]");
    const result = root.querySelector("[data-exploration-result]");
    const copy = root.querySelector("[data-exploration-copy]");
    const status = root.querySelector("[data-exploration-status]");
    const help = root.querySelector("[data-exploration-help]");

    const updateModeHelp = () => {
      const selectedOption = mode?.selectedOptions?.[0];
      if (help && selectedOption) {
        help.textContent = selectedOption.dataset.description ?? "";
      }
    };

    const setStatus = (message) => {
      if (status) status.textContent = message;
    };

    mode?.addEventListener("change", updateModeHelp);
    updateModeHelp();

    prepare?.addEventListener("click", async () => {
      const concreteNeed = need?.value.trim() ?? "";
      const selectedOption = mode?.selectedOptions?.[0];
      const source = selectedOption?.dataset.promptSrc;

      if (!concreteNeed) {
        setStatus("Escribe qué te gustaría entender.");
        need?.focus();
        return;
      }

      if (!source) {
        setStatus("No pudimos determinar cómo preparar esta exploración.");
        return;
      }

      try {
        prepare.disabled = true;
        setStatus("Preparando la exploración…");

        const response = await fetch(source);
        if (!response.ok) throw new Error("prompt source unavailable");

        const guidance = (await response.text()).trim();
        const composed = [
          guidance,
          "",
          "## Necesidad concreta del estudiante",
          "",
          concreteNeed
        ].join("\n");

        if (output) output.value = composed;
        if (result) result.hidden = false;
        setStatus("Exploración preparada. Revísala antes de copiarla.");
        output?.focus();
      } catch {
        setStatus("No pudimos cargar el texto orientativo de esta exploración.");
      } finally {
        prepare.disabled = false;
      }
    });

    copy?.addEventListener("click", async () => {
      if (!output?.value) return;

      const originalLabel = copy.textContent;

      try {
        await navigator.clipboard.writeText(output.value);
        copy.textContent = "Copiado ✓";
        copy.disabled = true;
        setStatus("Texto copiado. Puedes pegarlo en el LLM que prefieras.");

        window.setTimeout(() => {
          copy.textContent = originalLabel;
          copy.disabled = false;
        }, 1600);
      } catch {
        output.focus();
        output.select();
        setStatus("No pudimos copiar automáticamente. El texto quedó seleccionado para copiarlo manualmente.");
      }
    });
  }
})();


/* Reusable copyable response templates */
(() => {
  const roots = document.querySelectorAll("[data-teaching-copy-template]");

  for (const root of roots) {
    const button = root.querySelector("[data-copy-template-button]");
    const source = root.querySelector("[data-copy-template-source]");
    const status = root.querySelector("[data-copy-template-status]");

    button?.addEventListener("click", async () => {
      const value = source?.value ?? "";
      if (!value) return;

      const originalLabel = button.textContent;

      const fallbackCopy = () => {
        const temporary = document.createElement("textarea");
        temporary.value = value;
        temporary.setAttribute("readonly", "");
        temporary.style.position = "fixed";
        temporary.style.opacity = "0";
        document.body.appendChild(temporary);
        temporary.select();
        const copied = document.execCommand("copy");
        temporary.remove();
        return copied;
      };

      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(value);
        } else if (!fallbackCopy()) {
          throw new Error("clipboard unavailable");
        }

        button.textContent = "Copiado ✓";
        button.disabled = true;
        if (status) status.textContent = "Plantilla copiada. Puedes pegarla donde prefieras para completarla.";

        window.setTimeout(() => {
          button.textContent = originalLabel;
          button.disabled = false;
        }, 1600);
      } catch {
        if (status) status.textContent = "No pudimos copiar automáticamente. Intenta nuevamente desde otro navegador.";
      }
    });
  }
})();


/* PIR evaluator wizard */
(() => {
  const wizard = document.querySelector("[data-pir-eval-wizard]");
  if (!wizard) return;

  const tabs = [...wizard.querySelectorAll("[data-eval-tab]")];
  const panels = [...wizard.querySelectorAll("[data-eval-panel]")];
  const progressLabel = wizard.querySelector("[data-progress-label]");
  const progressBar = wizard.querySelector("[data-progress-bar]");
  const output = document.querySelector("[data-eval-output]");
  const outputText = output?.querySelector("[data-eval-output-text]");
  const outputStatus = output?.querySelector("[data-output-status]");
  const copyOutput = output?.querySelector("[data-copy-eval-output]");
  const state = new Map();
  let currentIndex = 0;

  const judgmentTemplate = () => {
    const wrapper = document.createElement("div");
    wrapper.className = "pir-eval-judgment";
    wrapper.dataset.judgment = "";
    wrapper.innerHTML = `
      <div class="pir-eval-field">
        <label>Propiedad <span aria-hidden="true">*</span></label>
        <select data-field="property" required>
          <option value="">Selecciona…</option>
          <optgroup label="RTE — Enrutamiento">
            <option value="RTE-001">RTE-001 — Profundizar compatible</option>
            <option value="RTE-002">RTE-002 — Aplicarlo a mi caso compatible</option>
            <option value="RTE-003">RTE-003 — Otro caso compatible</option>
            <option value="RTE-004">RTE-004 — Ponme a prueba compatible</option>
          </optgroup>
          <optgroup label="CAU — Presión causal y cambio mínimo">
            <option value="CAU-001">CAU-001 — Suficiencia inicial</option>
            <option value="CAU-002">CAU-002 — Presión antes de separar</option>
            <option value="CAU-003">CAU-003 — Cambio mínimo justificado</option>
            <option value="CAU-004">CAU-004 — Nombre formal después de la experiencia</option>
          </optgroup>
          <optgroup label="STP — Detención y ausencia de cambio">
            <option value="STP-001">STP-001 — Detenerse cuando termina la presión</option>
            <option value="STP-002">STP-002 — No cambiar puede ser correcto</option>
            <option value="STP-003">STP-003 — No cambiar es revisable</option>
          </optgroup>
          <optgroup label="UNC — Incertidumbre y evidencia">
            <option value="UNC-001">UNC-001 — Preservar la incertidumbre material</option>
            <option value="UNC-002">UNC-002 — Umbral de evidencia</option>
          </optgroup>
          <optgroup label="SCP — Alcance">
            <option value="SCP-001">SCP-001 — Cruce explícito de alcance externo</option>
            <option value="SCP-002">SCP-002 — Extensión no retroactiva</option>
          </optgroup>
          <optgroup label="VAR — Variación permitida">
            <option value="VAR-001">VAR-001 — Equivalencia semántica sin identidad estructural</option>
            <option value="VAR-002">VAR-002 — Evaluación de alternativas por sus compromisos</option>
            <option value="VAR-003">VAR-003 — Se permite variación significativa</option>
          </optgroup>
          <optgroup label="TST — Ponme a prueba">
            <option value="TST-001">TST-001 — Una presión por ronda</option>
            <option value="TST-002">TST-002 — Esperar antes de avanzar</option>
            <option value="TST-003">TST-003 — Retención progresiva de información</option>
            <option value="TST-004">TST-004 — Evaluación crítica sin validación por cortesía</option>
            <option value="TST-005">TST-005 — Distinguir error local de razonamiento arquitectónico</option>
            <option value="TST-006">TST-006 — Una aclaración no avanza el escenario</option>
            <option value="TST-007">TST-007 — Reparación del escenario</option>
            <option value="TST-008">TST-008 — La presión agregada por el estudiante es explícita</option>
          </optgroup>
          <optgroup label="POL — Política y mecanismo">
            <option value="POL-001">POL-001 — El mecanismo no es automáticamente una frontera</option>
            <option value="POL-002">POL-002 — Distinción política/mecanismo cuando sea relevante</option>
            <option value="POL-003">POL-003 — La elección del mecanismo puede permanecer abierta</option>
          </optgroup>
        </select>
      </div>
      <div class="pir-eval-field">
        <label>Juicio <span aria-hidden="true">*</span></label>
        <select data-field="judgment" required>
          <option value="">Selecciona…</option>
          <option>PASS</option>
          <option>VIOLATION</option>
          <option>AMBIGUOUS</option>
          <option>N/A</option>
        </select>
      </div>
      <div class="pir-eval-field pir-eval-field--wide">
        <label>Evidencia <span aria-hidden="true">*</span></label>
        <textarea data-field="evidence" rows="2" placeholder="Fragmento útil más pequeño" required></textarea>
      </div>
      <div class="pir-eval-field pir-eval-field--wide">
        <label>Fundamento <span aria-hidden="true">*</span></label>
        <textarea data-field="rationale" rows="3" placeholder="1–3 oraciones" required></textarea>
      </div>
      <div class="pir-eval-field">
        <label>Confianza <span aria-hidden="true">*</span></label>
        <select data-field="confidence" required>
          <option value="">Selecciona…</option>
          <option>alta</option>
          <option>media</option>
          <option>baja</option>
        </select>
      </div>
      <button type="button" class="pir-eval-judgment__remove" data-remove-judgment>Quitar propiedad</button>
    `;
    return wrapper;
  };

  const syncEvidenceRequirement = (row) => {
    const judgment = row.querySelector('[data-field="judgment"]')?.value ?? "";
    const evidence = row.querySelector('[data-field="evidence"]');
    if (!evidence) return;

    const required = judgment !== "N/A";
    evidence.required = required;
    evidence.closest(".pir-eval-field")?.classList.toggle("is-optional", !required);
  };

  const rowIsComplete = (row) => {
    syncEvidenceRequirement(row);
    return [...row.querySelectorAll("[required]")].every((field) => field.value.trim() !== "");
  };

  const formIsComplete = (form) => {
    const rows = [...form.querySelectorAll("[data-judgment]")];
    return rows.length > 0 && rows.every(rowIsComplete);
  };

  const serializeForm = (form, evalId) => {
    const rows = [...form.querySelectorAll("[data-judgment]")].map((row) => ({
      property: row.querySelector('[data-field="property"]').value.trim(),
      judgment: row.querySelector('[data-field="judgment"]').value.trim(),
      evidence: row.querySelector('[data-field="evidence"]').value.trim(),
      rationale: row.querySelector('[data-field="rationale"]').value.trim(),
      confidence: row.querySelector('[data-field="confidence"]').value.trim()
    }));
    const note = form.querySelector("[data-overall-note]")?.value.trim() ?? "";
    return { evalId, rows, note };
  };

  const formatEval = ({ evalId, rows, note }) => {
    const properties = rows.map((row) => [
      `Propiedad: ${row.property}`,
      `Juicio: ${row.judgment}`,
      ...(row.evidence ? [`Evidencia: "${row.evidence}"`] : []),
      `Fundamento: ${row.rationale}`,
      `Confianza: ${row.confidence}`
    ].join("\n")).join("\n\n");

    return [
      `Muestra: ${evalId}`,
      "",
      properties,
      ...(note ? ["", "Nota general:", note] : [])
    ].join("\n");
  };

  const updateRemoveButtons = (form) => {
    const rows = [...form.querySelectorAll("[data-judgment]")];
    rows.forEach((row) => {
      const remove = row.querySelector("[data-remove-judgment]");
      if (remove) remove.hidden = rows.length === 1;
    });
  };

  const updateForm = (form) => {
    form.querySelectorAll("[data-judgment]").forEach(syncEvidenceRequirement);
    const evalId = form.dataset.evalForm;
    const complete = formIsComplete(form);
    const next = form.querySelector("[data-next-eval]");
    const status = form.querySelector("[data-eval-status]");

    if (next) next.disabled = !complete;
    if (status) {
      status.textContent = complete
        ? "Muestra completa. Puedes continuar o revisar tus respuestas."
        : "Completa todos los campos obligatorios para continuar.";
    }

    const previous = state.get(evalId);
    if (!complete) {
      state.delete(evalId);
    } else {
      state.set(evalId, serializeForm(form, evalId));
    }

    if (previous || complete) updateProgress();
  };

  const updateProgress = () => {
    const completed = state.size;
    const total = panels.length;
    if (progressLabel) progressLabel.textContent = `${completed} de ${total} completadas`;
    if (progressBar) progressBar.style.width = `${(completed / total) * 100}%`;

    tabs.forEach((tab, index) => {
      const evalId = tab.dataset.evalTab;
      tab.classList.toggle("is-complete", state.has(evalId));
      const canReach = index === 0 || state.has(panels[index - 1]?.dataset.evalPanel) || state.has(evalId);
      tab.disabled = !canReach;
    });

    const allComplete = completed === total;
    if (copyOutput) copyOutput.disabled = !allComplete;
    if (outputText) {
      outputText.hidden = !allComplete;
      if (allComplete) {
        outputText.value = panels
          .map((panel) => state.get(panel.dataset.evalPanel))
          .filter(Boolean)
          .map(formatEval)
          .join("\n\n---\n\n");
      }
    }
    if (outputStatus) {
      outputStatus.textContent = allComplete
        ? "Las 16 muestras están completas. La respuesta está lista para copiar."
        : `Completa las 16 muestras para generar la respuesta final (${completed}/${total}).`;
    }
  };

  const showPanel = (index) => {
    const currentForm = panels[currentIndex]?.querySelector("[data-eval-form]");
    if (index !== currentIndex && currentForm && !formIsComplete(currentForm)) {
      currentForm.querySelector("[data-eval-status]")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    currentIndex = index;
    tabs.forEach((tab, i) => {
      const active = i === index;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    panels.forEach((panel, i) => {
      const active = i === index;
      panel.hidden = !active;
      panel.classList.toggle("is-active", active);
    });
    panels[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      if (!tab.disabled) showPanel(index);
    });
  });

  panels.forEach((panel, index) => {
    const form = panel.querySelector("[data-eval-form]");
    if (!form) return;

    form.addEventListener("input", () => updateForm(form));
    form.addEventListener("change", () => updateForm(form));

    form.querySelector("[data-add-judgment]")?.addEventListener("click", () => {
      const list = form.querySelector("[data-judgments]");
      list?.appendChild(judgmentTemplate());
      updateRemoveButtons(form);
      updateForm(form);
      list?.lastElementChild?.querySelector("input")?.focus();
    });

    form.addEventListener("click", (event) => {
      const remove = event.target.closest("[data-remove-judgment]");
      if (!remove) return;
      remove.closest("[data-judgment]")?.remove();
      updateRemoveButtons(form);
      updateForm(form);
    });

    form.querySelector("[data-prev-eval]")?.addEventListener("click", () => {
      if (index > 0) showPanel(index - 1);
    });

    form.querySelector("[data-next-eval]")?.addEventListener("click", () => {
      updateForm(form);
      if (!formIsComplete(form)) return;

      if (index < panels.length - 1) {
        showPanel(index + 1);
      } else {
        updateProgress();
        document.querySelector("#respuesta-evaluacion")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    updateRemoveButtons(form);
    updateForm(form);
  });

  copyOutput?.addEventListener("click", async () => {
    if (!outputText?.value) return;
    const original = copyOutput.textContent;
    try {
      await navigator.clipboard.writeText(outputText.value);
      copyOutput.textContent = "Copiado ✓";
      window.setTimeout(() => copyOutput.textContent = original, 1600);
    } catch {
      outputText.hidden = false;
      outputText.focus();
      outputText.select();
    }
  });

  updateProgress();
})();
