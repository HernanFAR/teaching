(() => {
  const roots = document.querySelectorAll("[data-teaching-exploration]");

  const recordActivity = (event, explorationMode) => {
    window.TDidactaAccounts?.track?.(event, {
      lessonId: window.TDidactaAccounts.currentLessonId?.() ?? null,
      explorationMode: explorationMode || null
    });
  };

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
        recordActivity("exploration_prepared", selectedOption?.value || selectedOption?.textContent?.trim());
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
        recordActivity("exploration_copied", mode?.value || mode?.selectedOptions?.[0]?.textContent?.trim());

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
  const profile = document.querySelector("[data-pir-evaluator-profile]");
  const profileStatus = profile?.querySelector("[data-profile-status]");
  const profileCurrentDate = profile?.querySelector("[data-profile-current-date]");
  const currentDate = new Intl.DateTimeFormat("es-CL", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
  if (profileCurrentDate) profileCurrentDate.textContent = currentDate;
  const state = new Map();
  const itemLabel = wizard.dataset.itemLabel || "Muestra";
  const itemLabelPlural = wizard.dataset.itemLabelPlural || "muestras";
  const completedWord = wizard.dataset.completedWord || "completadas";
  const completeWordSingular = wizard.dataset.completeWordSingular || "completa";
  const completeWordPlural = wizard.dataset.completeWordPlural || "completas";
  const pluralArticle = wizard.dataset.pluralArticle || "Las";
  const confidenceRequired = wizard.dataset.confidenceRequired !== "false";
  const evidenceRequiredForNa = wizard.dataset.evidenceRequiredForNa === "true";
  let currentIndex = 0;
  let initializing = true;
  const draftKey = `tdidacta:evaluation-draft:v1:${window.location.pathname}:${panels.map((panel) => panel.dataset.evalPanel).join(",")}`;
  const rowFields = ["property", "judgment", "confidence", "evidence", "rationale"];

  const saveDraft = () => {
    if (initializing) return;
    const draft = {
      version: 1,
      currentIndex,
      forms: panels.map((panel) => {
        const form = panel.querySelector("[data-eval-form]");
        return {
          id: form?.dataset.evalForm,
          dirty: form?.dataset.dirty === "true",
          rows: [...(form?.querySelectorAll("[data-judgment]") ?? [])].map((row) =>
            Object.fromEntries(rowFields.map((field) => [field, row.querySelector(`[data-field="${field}"]`)?.value ?? ""]))
          ),
          note: form?.querySelector("[data-overall-note]")?.value ?? ""
        };
      }),
      profile: [...(profile?.querySelectorAll("[data-profile-field]") ?? [])].map((field) => ({
        name: field.dataset.profileField,
        value: field.value
      }))
    };
    try {
      window.localStorage.setItem(draftKey, JSON.stringify(draft));
    } catch {
      // A blocked or full browser store must not prevent evaluation.
    }
  };

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
      <div class="pir-eval-field">
        <label>Confianza ${confidenceRequired ? '<span aria-hidden="true">*</span>' : '<span class="pir-eval-field__optional">opcional</span>'}</label>
        <select data-field="confidence" ${confidenceRequired ? "required" : ""}>
          <option value="">Selecciona…</option>
          <option>alta</option>
          <option>media</option>
          <option>baja</option>
        </select>
      </div>
      <div class="pir-eval-field pir-eval-field--wide">
        <label>Evidencia <span aria-hidden="true">*</span></label>
        <textarea data-field="evidence" rows="1" placeholder="Fragmento útil más pequeño" required></textarea>
      </div>
      <div class="pir-eval-field pir-eval-field--wide">
        <label>Fundamento <span aria-hidden="true">*</span></label>
        <textarea data-field="rationale" rows="2" placeholder="1–3 oraciones" required></textarea>
      </div>
    `;
    return wrapper;
  };

  const syncEvidenceRequirement = (row) => {
    const judgment = row.querySelector('[data-field="judgment"]')?.value ?? "";
    const evidence = row.querySelector('[data-field="evidence"]');
    if (!evidence) return;

    const required = evidenceRequiredForNa || judgment !== "N/A";
    evidence.required = required;
    evidence.closest(".pir-eval-field")?.classList.toggle("is-optional", !required);
  };

  const rowIsComplete = (row) => {
    syncEvidenceRequirement(row);
    return [...row.querySelectorAll("[required]")].every((field) => field.value.trim() !== "");
  };

  const showRequiredErrors = (form) => {
    const fields = [...form.querySelectorAll("[data-judgment] [required]")];
    fields.forEach((field) => {
      const invalid = !field.value.trim();
      field.classList.toggle("is-required-missing", invalid);
      field.setAttribute("aria-invalid", String(invalid));
    });
    const first = fields.find((field) => !field.value.trim());
    if (first) first.focus();
    return !first;
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

  const profileIsComplete = () =>
    !profile || [...profile.querySelectorAll("[required]")].every((field) => field.value.trim() !== "");

  const formatProfile = () => {
    if (!profile) return "";

    const value = (name) => profile.querySelector(`[data-profile-field="${name}"]`)?.value.trim() ?? "";
    return [
      "Perfil del evaluador",
      "",
      `Rol actual / enfoque profesional: ${value("role")}`,
      `Años de experiencia relevante: ${value("experienceYears")}`,
      `Educación, formación o experiencia docente relevante: ${value("education")}`,
      "",
      `Experiencia con arquitectura de software: ${value("architectureExperience")}`,
      `Experiencia con diseño instruccional / pedagogía / evaluación: ${value("pedagogyExperience")}`,
      `Familiaridad previa con Clean Architecture: ${value("cleanArchitectureFamiliarity")}`,
      `Familiaridad previa con Teaching / PIR / este estudio: ${value("studyFamiliarity")}`,
      "",
      `Fecha: ${currentDate}`,
      `Tiempo aproximado dedicado: ${value("duration")}`,
      "",
      `¿Conversaste alguna muestra o caso con otra persona antes del envío?: ${value("discussedWithOthers")}`,
      `¿Usaste un asistente de IA durante la evaluación?: ${value("usedAi")}`,
      ...(value("aiUsageDescription") ? [`Si respondiste que sí, describe cómo: ${value("aiUsageDescription")}`] : []),
      ...(value("otherConditions") ? [`Cualquier otra condición que pueda haber afectado la evaluación: ${value("otherConditions")}`] : [])
    ].join("\n");
  };

  const formatEval = ({ evalId, rows, note }) => {
    const properties = rows.map((row) => [
      `Propiedad: ${row.property}`,
      `Juicio: ${row.judgment}`,
      ...(row.evidence ? [`Evidencia: "${row.evidence}"`] : []),
      `Fundamento: ${row.rationale}`,
      ...(row.confidence ? [`Confianza: ${row.confidence}`] : [])
    ].join("\n")).join("\n\n");

    return [
      `${itemLabel}: ${evalId}`,
      "",
      properties,
      ...(note ? ["", "Nota general:", note] : [])
    ].join("\n");
  };

  const updateRemoveButtons = (form) => {
    const remove = form.querySelector("[data-remove-last-judgment]");
    if (remove) remove.disabled = form.querySelectorAll("[data-judgment]").length <= 1;
  };

  const updateForm = (form) => {
    form.querySelectorAll("[data-judgment]").forEach(syncEvidenceRequirement);
    const evalId = form.dataset.evalForm;
    const complete = formIsComplete(form);
    const next = form.querySelector("[data-next-eval]");
    const status = form.querySelector("[data-eval-status]");
    const legend = form.querySelector("[data-eval-legend]");

    if (next) next.disabled = false;
    if (status) {
      status.textContent = complete
        ? `${itemLabel} ${completeWordSingular}. Puedes continuar o revisar tus respuestas.`
        : "Completa todos los campos obligatorios para continuar.";
    }
    if (legend) {
      legend.textContent = complete
        ? `Respuesta de ${evalId}, lista para continuar`
        : `Respuesta de ${evalId}, completa para continuar`;
    }

    const previous = state.get(evalId);
    if (!complete) {
      state.delete(evalId);
    } else {
      state.set(evalId, serializeForm(form, evalId));
    }

    if (previous || complete) updateProgress();
    if (form.dataset.validationAttempted === "true") {
      form.querySelectorAll("[data-judgment] [required], .is-required-missing").forEach((field) => {
        const invalid = field.required && !field.value.trim();
        field.classList.toggle("is-required-missing", invalid);
        if (invalid) field.setAttribute("aria-invalid", "true");
        else field.removeAttribute("aria-invalid");
      });
    }
    saveDraft();
  };

  const updateProgress = () => {
    const completed = state.size;
    const total = panels.length;
    if (progressLabel) progressLabel.textContent = `${completed} de ${total} ${completedWord}`;
    if (progressBar) progressBar.style.width = `${(completed / total) * 100}%`;

    tabs.forEach((tab, index) => {
      const evalId = tab.dataset.evalTab;
      tab.classList.toggle("is-complete", state.has(evalId));
      const canReach = index === 0 || state.has(panels[index - 1]?.dataset.evalPanel) || state.has(evalId);
      tab.disabled = !canReach;
    });

    const allComplete = completed === total;
    const profileComplete = profileIsComplete();
    if (copyOutput) copyOutput.disabled = !(allComplete && profileComplete);
    if (outputText) {
      outputText.hidden = !(allComplete && profileComplete);
      if (allComplete && profileComplete) {
        const evaluationText = panels
          .map((panel) => state.get(panel.dataset.evalPanel))
          .filter(Boolean)
          .map(formatEval)
          .join("\n\n---\n\n");
        const profileText = formatProfile();
        outputText.value = profileText
          ? [profileText, evaluationText].join("\n\n---\n\n")
          : evaluationText;
      }
    }
    if (outputStatus) {
      outputStatus.textContent = allComplete && profileComplete
        ? `${pluralArticle} ${total} ${itemLabelPlural} y el perfil están completos. La respuesta está lista para copiar.`
        : allComplete
          ? "Los casos están completos. Completa el perfil del evaluador para habilitar la respuesta final."
          : `Completa los ${total} ${itemLabelPlural} para generar la respuesta final (${completed}/${total}).`;
    }
    if (profileStatus) {
      profileStatus.textContent = profileComplete
        ? "Perfil completo. Se incluirá automáticamente en la respuesta final."
        : "Completa los campos obligatorios. El perfil se incorporará automáticamente a la respuesta final.";
    }
  };

  const showPanel = (index) => {
    const currentForm = panels[currentIndex]?.querySelector("[data-eval-form]");
    const leavingCurrent = index !== currentIndex;

    if (leavingCurrent && currentForm && !formIsComplete(currentForm)) {
      const dirty = currentForm.dataset.dirty === "true";
      const movingForward = index > currentIndex;

      if (dirty || movingForward) {
        currentForm.querySelector("[data-eval-status]")?.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
    }

    currentIndex = index;
    saveDraft();
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

    form.dataset.dirty = "false";
    // Remove the old per-row controls in favor of one predictable undo action.
    form.querySelectorAll("[data-remove-judgment]").forEach((button) => button.remove());
    const actions = form.querySelector(".pir-eval-form__primary-actions");
    const add = form.querySelector("[data-add-judgment]");
    if (actions && add) {
      const removeLast = document.createElement("button");
      removeLast.type = "button";
      removeLast.className = "md-button";
      removeLast.dataset.removeLastJudgment = "";
      removeLast.textContent = "Quitar última propiedad";
      add.after(removeLast);
      removeLast.addEventListener("click", () => {
        const rows = form.querySelectorAll("[data-judgment]");
        if (rows.length <= 1) return;
        rows[rows.length - 1].remove();
        form.dataset.dirty = "true";
        updateRemoveButtons(form);
        updateForm(form);
        add.focus();
      });
    }

    form.addEventListener("input", () => {
      form.dataset.dirty = "true";
      updateForm(form);
    });

    form.addEventListener("change", () => {
      form.dataset.dirty = "true";
      updateForm(form);
    });

    form.querySelector("[data-add-judgment]")?.addEventListener("click", () => {
      const list = form.querySelector("[data-judgments]");
      list?.appendChild(judgmentTemplate());
      form.dataset.dirty = "true";
      updateRemoveButtons(form);
      updateForm(form);
      list?.lastElementChild?.querySelector("select, input")?.focus();
    });

    form.querySelector("[data-prev-eval]")?.addEventListener("click", () => {
      if (index > 0) showPanel(index - 1);
    });

    form.querySelector("[data-next-eval]")?.addEventListener("click", () => {
      updateForm(form);
      if (!formIsComplete(form)) {
        form.dataset.validationAttempted = "true";
        showRequiredErrors(form);
        return;
      }
      form.dataset.validationAttempted = "false";
      form.querySelectorAll(".is-required-missing").forEach((field) => {
        field.classList.remove("is-required-missing");
        field.removeAttribute("aria-invalid");
      });

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

  profile?.addEventListener("input", () => { updateProgress(); saveDraft(); });
  profile?.addEventListener("change", () => { updateProgress(); saveDraft(); });

  // Each evaluation has an independent browser-only draft. Restore incomplete rows too.
  try {
    const saved = JSON.parse(window.localStorage.getItem(draftKey) || "null");
    if (saved?.version === 1 && Array.isArray(saved.forms) &&
        saved.forms.length === panels.length &&
        saved.forms.every((entry, index) => entry.id === panels[index].dataset.evalPanel)) {
      saved.forms.forEach((entry, index) => {
        const form = panels[index].querySelector("[data-eval-form]");
        const list = form?.querySelector("[data-judgments]");
        if (!form || !list || !Array.isArray(entry.rows) || !entry.rows.length) return;
        while (list.children.length < entry.rows.length) list.appendChild(judgmentTemplate());
        while (list.children.length > entry.rows.length && list.children.length > 1) list.lastElementChild.remove();
        [...list.querySelectorAll("[data-judgment]")].forEach((row, rowIndex) => {
          for (const field of rowFields) {
            const input = row.querySelector(`[data-field="${field}"]`);
            const value = entry.rows[rowIndex]?.[field];
            if (input && typeof value === "string") input.value = value;
          }
        });
        const note = form.querySelector("[data-overall-note]");
        if (note && typeof entry.note === "string") note.value = entry.note;
        form.dataset.dirty = entry.dirty ? "true" : "false";
        updateRemoveButtons(form);
        updateForm(form);
      });
      if (Array.isArray(saved.profile)) {
        for (const entry of saved.profile) {
          const field = [...(profile?.querySelectorAll("[data-profile-field]") ?? [])]
            .find((candidate) => candidate.dataset.profileField === entry.name);
          if (field && typeof entry.value === "string") field.value = entry.value;
        }
      }
      // Keep the restored position reachable under the existing navigation contract.
      const savedIndex = Number.isInteger(saved.currentIndex) ? saved.currentIndex : 0;
      if (savedIndex >= 0 && savedIndex < panels.length) {
        const form = panels[savedIndex]?.querySelector("[data-eval-form]");
        if (savedIndex === 0 || state.has(panels[savedIndex - 1]?.dataset.evalPanel) ||
            (form?.dataset.dirty === "true" && savedIndex > 0)) {
          currentIndex = savedIndex;
          tabs.forEach((tab, index) => {
            tab.classList.toggle("is-active", index === currentIndex);
            tab.setAttribute("aria-selected", String(index === currentIndex));
            tab.tabIndex = index === currentIndex ? 0 : -1;
          });
          panels.forEach((panel, index) => {
            panel.hidden = index !== currentIndex;
            panel.classList.toggle("is-active", index === currentIndex);
          });
        }
      }
    }
  } catch {
    // Invalid or inaccessible drafts are ignored; the blank form remains usable.
  }
  initializing = false;

  const reset = document.createElement("button");
  reset.type = "button";
  reset.className = "md-button";
  reset.textContent = "Reiniciar evaluación";
  reset.dataset.resetEvaluation = "";
  output?.querySelector("[data-eval-reset-container]")?.appendChild(reset);
  reset.addEventListener("click", () => {
    if (!window.confirm("¿Eliminar todo el avance guardado de esta evaluación? Esta acción no se puede deshacer.")) return;
    try { window.localStorage.removeItem(draftKey); } catch {}
    panels.forEach((panel) => {
      const form = panel.querySelector("[data-eval-form]");
      if (!form) return;
      form.reset();
      const list = form.querySelector("[data-judgments]");
      while (list?.children.length > 1) list.lastElementChild.remove();
      form.querySelector("[data-overall-note]")?.setRangeText?.("");
      const note = form.querySelector("[data-overall-note]");
      if (note) note.value = "";
      form.dataset.dirty = "false";
      updateRemoveButtons(form);
    });
    profile?.reset?.();
    state.clear();
    currentIndex = 0;
    tabs.forEach((tab, index) => {
      tab.classList.toggle("is-active", index === 0);
      tab.setAttribute("aria-selected", String(index === 0));
      tab.tabIndex = index === 0 ? 0 : -1;
    });
    panels.forEach((panel, index) => {
      panel.hidden = index !== 0;
      panel.classList.toggle("is-active", index === 0);
      const form = panel.querySelector("[data-eval-form]");
      if (form) updateForm(form);
    });
    updateProgress();
    try { window.localStorage.removeItem(draftKey); } catch {}
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


/* PIR evaluator guided demonstration */
(() => {
  const demos = document.querySelectorAll("[data-pir-eval-demo]");
  if (!demos.length) return;

  const defaultSteps = [
    {
      field: "context",
      title: "1. Lee primero el contexto",
      description: "Antes de tocar el formulario, identifica qué hechos están realmente establecidos. La evaluación depende de lo que el caso muestra, no de lo que podría suponerse fuera de él.",
      apply: () => {}
    },
    {
      field: "property",
      title: "2. Identifica la propiedad",
      description: "Ahora selecciona la obligación del contrato que el caso realmente pone en juego. No tienes que marcar propiedades que el caso no ejercita.",
      apply: ({ property }) => { property.value = "CAU-002"; }
    },
    {
      field: "judgment",
      title: "3. Emite el juicio",
      description: "Decide si la evidencia preserva, viola, deja ambigua o no ejercita la propiedad. En este ejemplo, la separación se propone antes de existir una presión observable.",
      apply: ({ judgment }) => { judgment.value = "VIOLATION"; }
    },
    {
      field: "evidence",
      title: "4. Señala la evidencia mínima",
      description: "Copia sólo el fragmento necesario para reconstruir tu decisión. No hace falta volver a contar todo el caso.",
      apply: ({ evidence }) => {
        evidence.value = "agregar una capa adicional únicamente porque quizá en el futuro aparezca otro canal";
      }
    },
    {
      field: "rationale",
      title: "5. Explica el fundamento",
      description: "Une la evidencia con la propiedad en una explicación breve: por qué ese fragmento sostiene el juicio elegido.",
      apply: ({ rationale }) => {
        rationale.value = "La separación se propone por una posibilidad futura, no por una presión observable presente. Por eso contradice CAU-002.";
      }
    },
    {
      field: "confidence",
      title: "6. Indica tu confianza",
      description: "La confianza expresa cuán seguro estás de tu juicio. No reemplaza la evidencia ni el fundamento.",
      apply: ({ confidence }) => { confidence.value = "alta"; }
    },
    {
      field: "note",
      title: "7. Usa la nota general sólo si aporta algo",
      description: "Este campo es opcional. Sirve para registrar ambigüedad, solapamiento entre propiedades o contexto faltante. En este ejemplo no hace falta escribir nada.",
      apply: () => {}
    },
    {
      field: "actions",
      title: "8. Continúa o agrega otra propiedad",
      description: "Si el caso ejercita otra propiedad, usa “Agregar otra propiedad”. Cuando ya registraste todas las propiedades relevantes y los campos obligatorios están completos, continúa al siguiente caso.",
      apply: () => {}
    }
  ];

  const phase0cSteps = [
    {
      field: "context",
      title: "1. Lee primero el contexto",
      description: "Empieza por los hechos y restricciones que el caso establece. No completes huecos con supuestos externos.",
      apply: () => {}
    },
    {
      field: "realization",
      title: "2. Lee la realización a evaluar",
      description: "Ahora observa qué decisión o recomendación propone realmente la realización. El juicio se hace sobre esa respuesta dentro del contexto dado.",
      apply: () => {}
    },
    {
      field: "property",
      title: "3. Identifica la propiedad",
      description: "Selecciona cada propiedad del contrato que el caso ejercita materialmente. No reduzcas todo el caso a un único juicio global.",
      apply: ({ property }) => { property.value = "CAU-002"; }
    },
    {
      field: "judgment",
      title: "4. Emite el juicio",
      description: "Clasifica esa propiedad como PASS, VIOLATION, AMBIGUOUS o N/A según lo que muestran juntos el contexto y la realización.",
      apply: ({ judgment }) => { judgment.value = "VIOLATION"; }
    },
    {
      field: "evidence",
      title: "5. Señala la evidencia mínima",
      description: "Registra el fragmento útil más pequeño que permita reconstruir el juicio sin volver a copiar todo el caso.",
      apply: ({ evidence }) => {
        evidence.value = "Como quizá en el futuro aparezca otro canal de entrada, extraería ahora la operación";
      }
    },
    {
      field: "rationale",
      title: "6. Explica el fundamento",
      description: "Une propiedad, evidencia y juicio en una explicación breve. El fundamento debe hacer visible por qué esa evidencia sostiene tu clasificación.",
      apply: ({ rationale }) => {
        rationale.value = "La separación se propone por una posibilidad futura y no por una presión observable presente, por lo que contradice CAU-002.";
      }
    },
    {
      field: "confidence",
      title: "7. Confianza es opcional",
      description: "Si te resulta útil, indica cuán seguro estás de tu juicio. En Phase 0c este campo es opcional y no bloquea el avance.",
      apply: ({ confidence }) => { confidence.value = "alta"; }
    },
    {
      field: "note",
      title: "8. Usa la nota general sólo si aporta algo",
      description: "La nota general también es opcional. Úsala para registrar una observación transversal del caso que no pertenezca a un juicio concreto.",
      apply: () => {}
    },
    {
      field: "actions",
      title: "9. Agrega propiedades o continúa",
      description: "Si el caso ejercita otra propiedad, agrégala como un juicio separado. Cuando hayas registrado todas las propiedades relevantes, continúa al siguiente caso.",
      apply: () => {}
    }
  ];

  for (const demo of demos) {
    const start = demo.querySelector("[data-demo-start]");
    const header = demo.querySelector(".pir-eval-demo__header");
    const stage = demo.querySelector("[data-demo-stage]");
    const next = demo.querySelector("[data-demo-next]");
    const cancel = demo.querySelector("[data-demo-cancel]");
    const title = demo.querySelector("[data-demo-title]");
    const description = demo.querySelector("[data-demo-description]");
    const stepLabel = demo.querySelector("[data-demo-step-label]");
    const status = demo.querySelector("[data-demo-status]");
    const guide = demo.querySelector("[data-demo-guide]");
    const guideHome = guide?.parentElement ?? null;
    const guideAnchor = guide ? document.createComment("pir-eval-demo-guide-home") : null;
    if (guide && guideAnchor) guide.before(guideAnchor);

    const syncGuidePlacement = () => {
      if (!guide || !guideAnchor || !guideHome) return;
      const desktop = window.matchMedia("(min-width: 56rem)").matches;

      if (desktop && guide.parentElement !== document.body) {
        guide.classList.add("md-typeset");
        document.body.appendChild(guide);
      } else if (!desktop && guide.parentElement === document.body) {
        guide.classList.remove("md-typeset");
        guideAnchor.after(guide);
      }
    };
    const steps = demo.dataset.demoVariant === "phase-0c" ? phase0cSteps : defaultSteps;
    const dots = [...demo.querySelectorAll("[data-demo-dot]")];
    const fields = Object.fromEntries(
      [...demo.querySelectorAll("[data-demo-field]")].map((field) => [field.dataset.demoField, field])
    );
    fields.context ??= demo.querySelector(".pir-eval-demo__scenario");
    fields.actions = demo.querySelector(".pir-eval-form__primary-actions");
    const inputs = Object.fromEntries(
      [...demo.querySelectorAll("[data-demo-input]")].map((input) => [input.dataset.demoInput, input])
    );
    let index = 0;

    const reset = () => {
      Object.values(inputs).forEach((input) => { input.value = ""; });
      Object.values(fields).filter(Boolean).forEach((field) => field.classList.remove("is-demo-focus", "is-demo-complete"));
      dots.forEach((dot) => dot.classList.remove("is-active", "is-complete"));
      index = 0;
      if (status) status.textContent = "Completa todos los campos obligatorios para continuar.";
      if (cancel) cancel.hidden = true;
      if (next) {
        next.hidden = false;
        next.textContent = "Siguiente";
      }
    };

    const showIntroduction = () => {
      Object.values(fields).filter(Boolean).forEach((field) => field.classList.remove("is-demo-focus", "is-demo-complete"));
      dots.forEach((dot) => dot.classList.remove("is-active", "is-complete"));
      if (stepLabel) stepLabel.textContent = "Demostración guiada";
      if (title) title.textContent = "¿Quieres ver cómo se responde?";
      if (description) description.textContent = "Te mostraremos una respuesta ficticia paso a paso. Primero leeremos el contexto y después completaremos el formulario exactamente con la misma lógica que usarás en la evaluación real.";
      if (cancel) cancel.hidden = false;
      if (next) {
        next.hidden = false;
        next.textContent = "Iniciar";
      }
    };

    const closeIntroduction = () => {
      if (stage) stage.hidden = true;
      if (header) header.hidden = false;
      if (start) {
        start.textContent = "Ver demostración";
        start.disabled = false;
      }
      if (guide && guideAnchor && guideHome && guide.parentElement === document.body) {
        guide.classList.remove("md-typeset");
        guideAnchor.after(guide);
      }
      reset();
    };

    const render = () => {
      const step = steps[index];
      steps.slice(0, index + 1).forEach((completedStep) => completedStep.apply(inputs));

      Object.entries(fields).forEach(([name, field]) => {
        if (!field) return;
        const stepIndex = steps.findIndex((candidate) => candidate.field === name);
        field.classList.toggle("is-demo-focus", stepIndex === index);
        field.classList.toggle("is-demo-complete", stepIndex >= 0 && stepIndex < index);
      });

      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === index);
        dot.classList.toggle("is-complete", dotIndex < index);
      });

      if (title) title.textContent = step.title;
      if (description) description.textContent = step.description;
      if (stepLabel) stepLabel.textContent = `Paso ${index + 1} de ${steps.length}`;
      if (status && index >= 4) status.textContent = "Los campos obligatorios de esta respuesta ya están completos.";

      if (index === steps.length - 1 && next) next.textContent = "Terminar";

      const active = fields[step.field];
      if (active) {
        active.scrollIntoView({ behavior: "smooth", block: "center" });

        const focusTarget =
          active.matches("input, select, textarea, button")
            ? active
            : active.querySelector("select, textarea, input, button");

        window.setTimeout(() => {
          focusTarget?.focus({ preventScroll: true });
        }, 260);
      }
    };

    start?.addEventListener("click", () => {
      reset();
      if (header) header.hidden = true;
      start.textContent = "Demostración abierta";
      start.disabled = true;

      const desktop = window.matchMedia("(min-width: 56rem)").matches;
      if (!desktop && stage) stage.hidden = false;

      syncGuidePlacement();
      showIntroduction();
    });

    cancel?.addEventListener("click", closeIntroduction);

    window.addEventListener("resize", syncGuidePlacement);

    next?.addEventListener("click", () => {
      if (next.textContent === "Cerrar") {
        closeIntroduction();
        return;
      }

      if (next.textContent === "Iniciar") {
        if (stage) stage.hidden = false;
        if (cancel) cancel.hidden = true;
        next.textContent = "Siguiente";
        index = 0;
        render();
        fields.context?.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }

      if (index < steps.length - 1) {
        index += 1;
        render();
        return;
      }

      Object.values(fields).filter(Boolean).forEach((field) => {
        field.classList.remove("is-demo-focus");
        field.classList.add("is-demo-complete");
      });
      dots.forEach((dot) => {
        dot.classList.remove("is-active");
        dot.classList.add("is-complete");
      });
      if (title) title.textContent = "Respuesta completa";
      if (description) description.textContent = "Eso es todo. El formulario real usa esta misma estructura: puedes agregar propiedades, completar cada juicio y continuar cuando los campos obligatorios estén listos.";
      if (stepLabel) stepLabel.textContent = "Demostración terminada";
      if (status) status.textContent = "Respuesta de demostración completa. Puedes continuar al siguiente caso.";
      if (next) {
        next.hidden = false;
        next.textContent = "Cerrar";
      }
    });
  }
})();

