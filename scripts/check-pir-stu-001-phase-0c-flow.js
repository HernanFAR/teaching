/*
 * PIR-STU-001 Phase 0c — browser flow self-check
 *
 * Usage:
 * 1. Open:
 *    https://hernanfar.github.io/teaching/evaluations/pir-stu-001-phase-0c/
 * 2. Open DevTools > Console.
 * 3. Paste this file contents and press Enter.
 *
 * The script exercises the real DOM and the real wizard behavior.
 * It intentionally fills the evaluation forms with synthetic test data.
 * This test changes the page and its localStorage draft. Use "Reiniciar evaluación"
 * in section 4 after testing to remove the synthetic data.
 */

(async () => {
  const PREFIX = "[PIR-STU-001 Phase 0c self-check]";

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

  const wait = (ms = 60) => new Promise((resolve) => setTimeout(resolve, ms));

  const dispatchValue = (element, value) => {
    if (!element) fail("No se encontró un campo esperado.");
    element.value = value;
    element.dispatchEvent(new Event("input", { bubbles: true }));
    element.dispatchEvent(new Event("change", { bubbles: true }));
  };

  const wizard = document.querySelector("[data-pir-eval-wizard]");
  assert(wizard, "Existe el wizard de evaluación.");

  const tabs = [...wizard.querySelectorAll("[data-eval-tab]")];
  const panels = [...wizard.querySelectorAll("[data-eval-panel]")];

  const expectedIds = ["C02", "C03", "C06", "C13", "C14", "C18", "C23", "C31"];

  assert(tabs.length === 8, "Existen 8 tabs de casos.", tabs.length);
  assert(panels.length === 8, "Existen 8 panels de casos.", panels.length);
  assert(
    tabs.map((tab) => tab.dataset.evalTab).join(",") === expectedIds.join(","),
    "Los casos aparecen en el orden esperado.",
    tabs.map((tab) => tab.dataset.evalTab)
  );

  const output = document.querySelector("[data-eval-output]");
  const outputText = output?.querySelector("[data-eval-output-text]");
  const outputStatus = output?.querySelector("[data-output-status]");
  const copyButton = output?.querySelector("[data-copy-eval-output]");

  assert(output && outputText && outputStatus && copyButton, "Existe la salida consolidada.");

  const getForm = (index) => panels[index].querySelector("[data-eval-form]");
  const getNext = (index) => getForm(index)?.querySelector("[data-next-eval]");
  const getPrev = (index) => getForm(index)?.querySelector("[data-prev-eval]");
  const rows = (form) => [...form.querySelectorAll("[data-judgment]")];

  const fillRow = (row, {
    property = "CAU-001",
    judgment = "PASS",
    evidence = "Evidencia sintética de prueba.",
    rationale = "Fundamento sintético de prueba.",
    confidence = ""
  } = {}) => {
    dispatchValue(row.querySelector('[data-field="property"]'), property);
    dispatchValue(row.querySelector('[data-field="judgment"]'), judgment);
    dispatchValue(row.querySelector('[data-field="evidence"]'), evidence);
    dispatchValue(row.querySelector('[data-field="rationale"]'), rationale);
    dispatchValue(row.querySelector('[data-field="confidence"]'), confidence);
  };

  const completeCase = async (index, options = {}) => {
    const id = expectedIds[index];
    const form = getForm(index);

    assert(form, `Existe formulario para ${id}.`);

    const firstRow = rows(form)[0];
    fillRow(firstRow, options);

    await wait();

    assert(
      getNext(index) && !getNext(index).disabled,
      `El botón de avance se habilita al completar ${id}.`
    );
  };

  info("Comprobando configuración específica de Phase 0c…");

  assert(wizard.dataset.itemLabel === "Caso", "El wizard usa 'Caso' como etiqueta.");
  assert(wizard.dataset.confidenceRequired === "false", "Confianza está configurada como opcional.");
  assert(wizard.dataset.evidenceRequiredForNa === "true", "Evidencia sigue siendo obligatoria para N/A.");

  const c13Property = rows(getForm(3))[0].querySelector('[data-field="property"]');
  const c14Property = rows(getForm(4))[0].querySelector('[data-field="property"]');

  assert(c13Property.value === "TST-006", "C13 preselecciona TST-006.");
  assert(c14Property.value === "RTE-003", "C14 preselecciona RTE-003.");

  info("Comprobando estado inicial…");

  assert(!tabs[0].disabled, "C02 está disponible al inicio.");
  assert(tabs.slice(1).every((tab) => tab.disabled), "C03..C31 parten bloqueados.");
  assert(!getNext(0).disabled, "Siguiente caso está disponible para activar validación.");
  getNext(0).click();
  await wait();
  assert(!panels[0].hidden, "Un formulario vacío no permite avanzar.");
  assert(rows(getForm(0))[0].querySelectorAll(".is-required-missing").length > 0, "Los campos requeridos vacíos se marcan en rojo.");
  assert(rows(getForm(0))[0].querySelector('[data-field="property"]').getAttribute("aria-invalid") === "true", "El primer campo requerido anuncia su estado inválido.");
  assert(copyButton.disabled, "Copiar respuesta parte deshabilitado.");

  info("Comprobando avance con confianza vacía…");

  await completeCase(0, {
    property: "UNC-002",
    judgment: "VIOLATION",
    evidence: "Una segunda entrada es bastante probable.",
    rationale: "Juicio sintético para comprobar que confianza no es obligatoria.",
    confidence: ""
  });

  getNext(0).click();
  await wait(120);

  assert(!tabs[1].disabled, "C03 se desbloquea después de completar C02.");
  assert(!panels[1].hidden, "El wizard avanza visualmente a C03.");

  info("Comprobando retroceso desde caso prístino…");

  const prevC03 = getPrev(1);
  assert(prevC03, "C03 tiene botón Anterior.");
  prevC03.click();
  await wait(120);

  assert(!panels[0].hidden, "Anterior vuelve a C02.");

  info("Comprobando re-bloqueo por edición incompleta…");

  const c02Form = getForm(0);
  const c02Evidence = rows(c02Form)[0].querySelector('[data-field="evidence"]');

  dispatchValue(c02Evidence, "");
  await wait();

  getNext(0).click();
  await wait();
  assert(!panels[0].hidden, "Editar C02 y dejarlo incompleto impide avanzar.");
  assert(c02Evidence.classList.contains("is-required-missing"), "La evidencia faltante queda resaltada.");
  assert(c02Evidence.getAttribute("aria-invalid") === "true", "La evidencia faltante se anuncia como inválida.");

  dispatchValue(c02Evidence, "Evidencia restaurada.");
  await wait();

  assert(!c02Evidence.classList.contains("is-required-missing"), "Restaurar evidencia limpia el estado de error.");

  getNext(0).click();
  await wait(120);

  info("Comprobando que N/A también exige evidencia en 0c…");

  const c03Form = getForm(1);
  const c03Row = rows(c03Form)[0];

  fillRow(c03Row, {
    property: "RTE-001",
    judgment: "N/A",
    evidence: "",
    rationale: "La propiedad no se ejercita materialmente.",
    confidence: ""
  });

  await wait();

  getNext(1).click();
  await wait();
  assert(!panels[1].hidden, "N/A sin evidencia no permite avanzar en Phase 0c.");
  assert(c03Row.querySelector('[data-field="evidence"]').classList.contains("is-required-missing"), "N/A sin evidencia marca el campo requerido.");

  dispatchValue(
    c03Row.querySelector('[data-field="evidence"]'),
    "No existe una situación de profundización en este caso."
  );

  await wait();

  assert(!c03Row.querySelector('[data-field="evidence"]').classList.contains("is-required-missing"), "N/A con evidencia elimina el error.");

  info("Comprobando múltiples propiedades…");

  const addButton = c03Form.querySelector("[data-add-judgment]");
  assert(addButton, "Existe Agregar otra propiedad.");

  addButton.click();
  await wait();

  assert(rows(c03Form).length === 2, "Agregar otra propiedad crea una segunda fila.");
  const removeLast = c03Form.querySelector("[data-remove-last-judgment]");
  assert(removeLast && !removeLast.disabled, "Quitar última propiedad está disponible con dos filas.");
  removeLast.click();
  await wait();
  assert(rows(c03Form).length === 1, "Quitar última propiedad elimina sólo la última fila.");
  assert(removeLast.disabled, "No se puede quitar la fila base.");
  addButton.click();
  await wait();
  assert(rows(c03Form).length === 2, "Se puede volver a agregar la propiedad después de quitarla.");

  fillRow(rows(c03Form)[1], {
    property: "POL-003",
    judgment: "PASS",
    evidence: "Dejaría los valores en código por ahora.",
    rationale: "La elección del mecanismo futuro permanece abierta.",
    confidence: "alta"
  });

  await wait();

  assert(!getNext(1).disabled, "Dos propiedades completas mantienen habilitado el avance.");

  getNext(1).click();
  await wait(120);

  info("Completando C06..C31 con datos sintéticos…");

  const synthetic = [
    null,
    null,
    { property: "SCP-001", judgment: "PASS", evidence: "Podemos explorar Domain Events como extensión externa.", rationale: "El cruce de alcance se declara explícitamente.", confidence: "alta" },
    { property: "TST-006", judgment: "N/A", evidence: "No hay interacción con estudiante ni rondas.", rationale: "La propiedad indicada no se ejercita materialmente.", confidence: "" },
    { property: "RTE-003", judgment: "PASS", evidence: "La experiencia usa reservas.", rationale: "El cambio de dominio conserva la secuencia causal.", confidence: "media" },
    { property: "TST-006", judgment: "PASS", evidence: "No avanzamos todavía de ronda.", rationale: "La aclaración no introduce una nueva presión.", confidence: "" },
    { property: "POL-002", judgment: "VIOLATION", evidence: "no hace falta distinguir todavía qué parte es política y qué parte es mecanismo", rationale: "La realización evita una distinción materialmente relevante.", confidence: "alta" },
    { property: "TST-007", judgment: "PASS", evidence: "La retiro y no la usaré como evidencia.", rationale: "La condición inventada se reconoce, retira y deja de usarse.", confidence: "alta" }
  ];

  for (let index = 2; index < 8; index += 1) {
    await completeCase(index, synthetic[index]);
    getNext(index).click();
    await wait(100);
  }

  info("Comprobando salida final…");

  const profile = document.querySelector("[data-pir-evaluator-profile]");
  assert(profile, "Existe el perfil del evaluador.");
  assert(copyButton.disabled, "Completar los casos sin el perfil no habilita la copia.");

  const profileFields = [...profile.querySelectorAll("[data-profile-field][required]")];
  assert(profileFields.length > 0, "El perfil contiene campos obligatorios.");
  for (const field of profileFields) {
    const option = field.matches("select")
      ? [...field.options].find((candidate) => candidate.value.trim() !== "" && !candidate.disabled)
      : null;
    dispatchValue(field, option ? option.value : "Dato sintético de self-check");
  }
  await wait();
  assert(profileFields.every((field) => field.value.trim() !== ""), "Los campos obligatorios del perfil están completos.");


  assert(!copyButton.disabled, "Copiar respuesta se habilita al completar los 8 casos.");
  assert(!outputText.hidden, "El texto consolidado se hace visible.");
  assert(outputText.value.trim().length > 0, "La respuesta consolidada contiene texto.");

  for (const id of expectedIds) {
    assert(outputText.value.includes(`Caso: ${id}`), `La salida contiene ${id}.`);
  }

  assert(
    outputText.value.includes("Propiedad: RTE-001") &&
      outputText.value.includes("Propiedad: POL-003"),
    "La salida preserva múltiples propiedades de C03."
  );

  assert(
    outputText.value.includes("Caso: C02") &&
      !/Caso: C02[\s\S]*?Confianza:/m.test(
        outputText.value.split("\n\n---\n\n")[0]
      ),
    "Una respuesta sin confianza no serializa una línea vacía de Confianza."
  );

  assert(
    outputText.value.includes('Juicio: N/A') &&
      outputText.value.includes('Evidencia: "No existe una situación de profundización en este caso."'),
    "N/A conserva evidencia en la salida de Phase 0c."
  );

  assert(
    /8\s*\/\s*8|8 de 8|8 casos están completos/i.test(outputStatus.textContent),
    "El estado final informa que los 8 casos están completos.",
    outputStatus.textContent
  );

  console.group(`${PREFIX} Resultado`);
  console.log("✅ Flujo completo verificado.");
  console.log("✅ 8 casos en orden.");
  console.log("✅ Bloqueo y desbloqueo secuencial.");
  console.log("✅ Retroceso desde caso prístino.");
  console.log("✅ Re-bloqueo tras edición incompleta.");
  console.log("✅ Confianza opcional.");
  console.log("✅ N/A exige evidencia.");
  console.log("✅ Múltiples propiedades.");
  console.log("✅ C13 preselecciona TST-006.");
  console.log("✅ C14 preselecciona RTE-003.");
  console.log("✅ Serialización de 8 casos.");
  console.log("✅ Respuesta consolidada lista para copiar.");
  console.log("ℹ️ Usa «Reiniciar evaluación» en el paso 4 para borrar el borrador sintético de localStorage.");
  console.groupEnd();
})();
