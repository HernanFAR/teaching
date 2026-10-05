/*
 * PIR-STU-001 Phase 0b — browser flow self-check
 *
 * Usage:
 * 1. Open the published evaluation page.
 * 2. Open DevTools > Console.
 * 3. Paste this file contents and press Enter.
 *
 * The script exercises the real DOM and the real wizard behavior.
 * It intentionally fills the evaluation forms with synthetic test data.
 * Reload the page afterwards to return to a clean state.
 */

(async () => {
  const PREFIX = "[PIR-STU-001 self-check]";

  const pass = (message) => console.log(`${PREFIX} ✅ ${message}`);
  const info = (message) => console.log(`${PREFIX} ℹ️ ${message}`);
  const fail = (message, details) => {
    console.error(`${PREFIX} ❌ ${message}`, details ?? "");
    throw new Error(message);
  };

  const assert = (condition, message, details) => {
    if (!condition) fail(message, details);
    pass(message);
  };

  const wait = (ms = 50) => new Promise((resolve) => setTimeout(resolve, ms));

  const dispatchValue = (element, value) => {
    element.value = value;
    element.dispatchEvent(new Event("input", { bubbles: true }));
    element.dispatchEvent(new Event("change", { bubbles: true }));
  };

  const wizard = document.querySelector("[data-pir-eval-wizard]");
  assert(wizard, "Existe el wizard de evaluación.");

  const tabs = [...wizard.querySelectorAll("[data-eval-tab]")];
  const panels = [...wizard.querySelectorAll("[data-eval-panel]")];

  assert(tabs.length === 16, "Existen 16 tabs EVAL.", tabs.length);
  assert(panels.length === 16, "Existen 16 panels EVAL.", panels.length);

  const output = document.querySelector("[data-eval-output]");
  const outputText = output?.querySelector("[data-eval-output-text]");
  const outputStatus = output?.querySelector("[data-output-status]");
  const copyButton = output?.querySelector("[data-copy-eval-output]");

  assert(output && outputText && outputStatus && copyButton, "Existe la salida consolidada de la evaluación.");

  const getForm = (index) => panels[index].querySelector("[data-eval-form]");
  const getNext = (index) => getForm(index).querySelector("[data-next-eval]");
  const getPrev = (index) => getForm(index).querySelector("[data-prev-eval]");

  const rows = (form) => [...form.querySelectorAll("[data-judgment]")];

  const fillRow = (row, {
    property = "CAU-001",
    judgment = "PASS",
    evidence = "Evidencia sintética de prueba.",
    rationale = "Fundamento sintético de prueba.",
    confidence = "alta"
  } = {}) => {
    dispatchValue(row.querySelector('[data-field="property"]'), property);
    dispatchValue(row.querySelector('[data-field="judgment"]'), judgment);
    dispatchValue(row.querySelector('[data-field="evidence"]'), evidence);
    dispatchValue(row.querySelector('[data-field="rationale"]'), rationale);
    dispatchValue(row.querySelector('[data-field="confidence"]'), confidence);
  };

  const completeEval = async (index, options = {}) => {
    const form = getForm(index);
    assert(form, `Existe formulario para EVAL-${String(index + 1).padStart(3, "0")}.`);

    const firstRow = rows(form)[0];
    fillRow(firstRow, options);

    await wait();

    assert(
      getNext(index) && !getNext(index).disabled,
      `El botón de avance se habilita al completar EVAL-${String(index + 1).padStart(3, "0")}.`
    );
  };

  info("Comprobando estado inicial…");

  assert(!tabs[0].disabled, "EVAL-001 está disponible al inicio.");
  assert(tabs.slice(1).every((tab) => tab.disabled), "EVAL-002..016 parten bloqueados.");
  assert(getNext(0).disabled, "Siguiente EVAL parte deshabilitado.");
  assert(copyButton.disabled, "Copiar respuesta parte deshabilitado.");

  info("Comprobando validación y desbloqueo secuencial…");

  await completeEval(0, {
    property: "CAU-002",
    judgment: "PASS",
    evidence: "La realización introduce una separación tras una presión observable.",
    rationale: "Juicio sintético para probar validación.",
    confidence: "alta"
  });

  getNext(0).click();
  await wait(120);

  assert(!tabs[1].disabled, "EVAL-002 se desbloquea después de completar EVAL-001.");
  assert(!panels[1].hidden, "El wizard avanza visualmente a EVAL-002.");

  info("Comprobando retroceso y re-bloqueo por edición incompleta…");

  const prev2 = getPrev(1);
  assert(prev2, "EVAL-002 tiene botón Anterior.");
  prev2.click();
  await wait(120);

  assert(!panels[0].hidden, "Anterior vuelve a EVAL-001.");

  const eval1Form = getForm(0);
  const eval1Evidence = rows(eval1Form)[0].querySelector('[data-field="evidence"]');
  dispatchValue(eval1Evidence, "");
  await wait();

  assert(getNext(0).disabled, "Editar EVAL-001 y dejarlo incompleto vuelve a bloquear el avance.");

  dispatchValue(eval1Evidence, "Evidencia restaurada.");
  await wait();

  assert(!getNext(0).disabled, "Restaurar el campo vuelve a habilitar el avance.");

  getNext(0).click();
  await wait(120);

  info("Comprobando N/A sin evidencia…");

  await completeEval(1, {
    property: "RTE-001",
    judgment: "N/A",
    evidence: "",
    rationale: "La propiedad no se ejercita materialmente en esta muestra.",
    confidence: "media"
  });

  assert(!getNext(1).disabled, "N/A puede completarse sin evidencia.");

  info("Comprobando múltiples propiedades en una muestra…");

  const form2 = getForm(1);
  const addButton = form2.querySelector("[data-add-judgment]");
  assert(addButton, "Existe Agregar otra propiedad.");

  addButton.click();
  await wait();

  assert(rows(form2).length === 2, "Agregar otra propiedad crea una segunda fila.");

  fillRow(rows(form2)[1], {
    property: "SCP-001",
    judgment: "PASS",
    evidence: "La extensión fuera de alcance se declara explícitamente.",
    rationale: "Segunda propiedad sintética para validar serialización múltiple.",
    confidence: "alta"
  });

  await wait();
  assert(!getNext(1).disabled, "Dos propiedades completas mantienen habilitado el avance.");

  getNext(1).click();
  await wait(120);

  info("Completando EVAL-003..016 con datos sintéticos…");

  for (let index = 2; index < 16; index += 1) {
    await completeEval(index, {
      property: index % 2 === 0 ? "CAU-001" : "VAR-003",
      judgment: index % 3 === 0 ? "AMBIGUOUS" : "PASS",
      evidence: `Evidencia sintética para EVAL-${String(index + 1).padStart(3, "0")}.`,
      rationale: "Fundamento sintético para verificar el flujo end-to-end.",
      confidence: index % 2 === 0 ? "alta" : "media"
    });

    getNext(index).click();
    await wait(90);
  }

  info("Comprobando salida final…");

  assert(!copyButton.disabled, "Copiar respuesta se habilita al completar las 16 muestras.");
  assert(!outputText.hidden, "El texto consolidado se hace visible.");
  assert(outputText.value.trim().length > 0, "La respuesta consolidada contiene texto.");

  for (let index = 1; index <= 16; index += 1) {
    const id = `EVAL-${String(index).padStart(3, "0")}`;
    assert(outputText.value.includes(`Muestra: ${id}`), `La salida contiene ${id}.`);
  }

  assert(
    outputText.value.includes("Propiedad: RTE-001") &&
      outputText.value.includes("Propiedad: SCP-001"),
    "La salida preserva múltiples propiedades de una misma muestra."
  );

  assert(
    !outputText.value.includes('Evidencia: ""'),
    "La salida no genera una línea de evidencia vacía para N/A."
  );

  assert(
    /16\s*\/\s*16|16 de 16|16 muestras están completas/i.test(outputStatus.textContent),
    "El estado final informa que las 16 muestras están completas.",
    outputStatus.textContent
  );

  console.group(`${PREFIX} Resultado`);
  console.log("✅ Flujo completo verificado.");
  console.log("✅ Bloqueo y desbloqueo secuencial.");
  console.log("✅ Retroceso.");
  console.log("✅ Re-bloqueo tras edición incompleta.");
  console.log("✅ N/A sin evidencia.");
  console.log("✅ Múltiples propiedades.");
  console.log("✅ Serialización de 16 EVAL.");
  console.log("✅ Respuesta consolidada lista para copiar.");
  console.log("ℹ️ Recarga la página para limpiar los datos sintéticos.");
  console.groupEnd();
})();
