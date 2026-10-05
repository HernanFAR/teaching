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
