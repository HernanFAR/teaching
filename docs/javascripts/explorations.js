(() => {
  const roots = document.querySelectorAll("[data-teaching-exploration]");

  for (const root of roots) {
    const modeButtons = [...root.querySelectorAll("[data-exploration-mode]")];
    const need = root.querySelector("[data-exploration-need]");
    const prepare = root.querySelector("[data-exploration-prepare]");
    const output = root.querySelector("[data-exploration-output]");
    const result = root.querySelector("[data-exploration-result]");
    const copy = root.querySelector("[data-exploration-copy]");
    const status = root.querySelector("[data-exploration-status]");
    const selectedLabel = root.querySelector("[data-exploration-selected]");

    let selected = null;

    const setStatus = (message) => {
      if (status) status.textContent = message;
    };

    const choose = (button) => {
      selected = button;
      for (const candidate of modeButtons) {
        const active = candidate === button;
        candidate.setAttribute("aria-pressed", String(active));
        candidate.classList.toggle("teaching-exploration__mode--selected", active);
      }

      if (selectedLabel) {
        selectedLabel.textContent = button.dataset.explorationLabel || button.textContent.trim();
      }

      setStatus("");
    };

    for (const button of modeButtons) {
      button.addEventListener("click", () => choose(button));
    }

    if (modeButtons.length > 0) choose(modeButtons[0]);

    prepare?.addEventListener("click", async () => {
      const concreteNeed = need?.value.trim() ?? "";

      if (!selected) {
        setStatus("Selecciona una exploración.");
        return;
      }

      if (!concreteNeed) {
        setStatus("Escribe qué necesitas entender con esta exploración.");
        need?.focus();
        return;
      }

      const source = selected.dataset.promptSrc;

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

      try {
        await navigator.clipboard.writeText(output.value);
        setStatus("Texto copiado. Puedes pegarlo en el LLM que prefieras.");
      } catch {
        output.focus();
        output.select();
        setStatus("No pudimos copiar automáticamente. El texto quedó seleccionado para copiarlo manualmente.");
      }
    });
  }
})();
