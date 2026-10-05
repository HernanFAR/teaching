---
title: PIR-STU-001 — Evaluación humana Phase 0b
hide:
  - navigation
  - toc
  - footer
---

# PIR-STU-001 — Evaluación humana Phase 0b

**Paquete para evaluadores humanos — versión v1**

Esta página contiene el paquete completo para realizar la evaluación humana de PIR-STU-001 Phase 0b.

!!! info "Entrega privada"
    Cuando termines, envía el perfil y las respuestas **de forma privada a Hernán**, por el canal mediante el cual recibiste este enlace.

    Mientras la evaluación permanezca abierta, no se publicarán aquí respuestas, resultados ni información adicional sobre la construcción interna de las muestras.

---

# PIR-STU-001 — Human evaluator standalone package v1

This file is evaluator-facing and self-contained.

It intentionally excludes answer keys, pair identities, mutant construction notes, hidden mappings, and prior evaluator results.

Please complete the evaluation independently.

---

# 1. Onboarding

# Human evaluator onboarding v1

Thank you for helping evaluate a research instrument about AI-generated teaching experiences.

## What you are evaluating

You will read 16 short teaching realizations about software architecture.

The study is not asking:

- whether you personally prefer the proposed architecture;
- whether the code style is ideal;
- whether the realization matches a memorized Clean Architecture recipe.

Instead, you will receive an explicit conformance contract describing observable pedagogical obligations.

Your task is to decide whether each realization preserves, violates, leaves ambiguous, or does not exercise those obligations.

## You do not need to infer the hidden purpose of a sample

Treat each sample independently.

There may or may not be relationships between samples. Do not search for them.

Do not try to infer how many samples are "good" or "bad".

## Response categories

Use:

- PASS — the obligation is preserved;
- VIOLATION — the realization contradicts it;
- AMBIGUOUS — the available evidence is insufficient to decide;
- N/A — the property is not meaningfully exercised.

Every non-N/A judgment should point to the smallest useful evidence fragment.

## Use of your expertise

Your professional knowledge can help you understand the scenario, but the contract is the authority for this task.

A technically reasonable recommendation can still violate the pedagogical contract.

A non-standard architectural decision can still conform.

## Independence

Please complete the evaluation independently.

Do not compare your judgments with another evaluator until all response sets have been submitted and frozen.


---

# 2. Evaluator profile

# Evaluator profile form v1

Evaluator ID:

## Background

Current role / professional focus:

Years of relevant experience:

Relevant education, training or teaching experience:

Experience with software architecture:
- none
- basic
- intermediate
- advanced

Experience with instructional design / pedagogy / assessment:
- none
- basic
- intermediate
- advanced

Prior familiarity with Clean Architecture:
- none
- basic
- intermediate
- advanced

Prior familiarity with Teaching / PIR / this study:
- none
- limited
- substantial

## Evaluation conditions

Date:

Approximate time spent:

Did you discuss any sample with another person before submission?
- yes
- no

Did you use an AI assistant while evaluating?
- yes
- no

If yes, describe how:

Any other condition that may have affected the evaluation:


---

# 3. Contract, instructions and blind samples

# 2. Conformance contract

# PIR-STU-001 — Clean Architecture conformance contract v1
## Evaluator view

This evaluator-facing view preserves the frozen v1 conformance properties and their definitions while omitting benchmark-construction material, positive-control identities, mutant families, hidden expectations, internal calibration procedure and runtime provenance.

It does not change the semantics of the frozen contract.

## Purpose

This contract defines observable pedagogical-conformance properties for realizations of the Teaching lesson **Cómo se llega a Clean Architecture**.

It does not prescribe a source format, evaluate general teaching quality or measure learning outcomes.

Its purpose is to distinguish:

- preservation of intent;
- legitimate variation;
- omission or violation;
- premature advancement;
- invented pressure;
- undeclared scope crossing.

## Core pedagogical authority

The lesson's guiding question is:

> ¿Qué problema justifica esta separación?

The lesson preserves these core invariants:

- an initial solution can be sufficient and defensible;
- a separation requires prior observable pressure;
- change should be proportional to current pressure;
- formal names appear after the experience that makes them useful;
- policy and mechanism should remain distinguishable when relevant;
- stopping before a final architectural form can be correct;
- resulting architecture should be causally reconstructable;
- interfaces, layers or DI do not by themselves prove a separation was necessary;
- concepts culturally associated with Clean Architecture are not automatically obligations of this lesson.

## Unit of judgment

The primary unit is a realization under a declared operation and concrete learner need.

For interactive explorations, an execution may contain multiple rounds.

Judge:

```text
requested operation
+
available state / learner need
+
produced realization
```

Do not judge by superficial similarity to a published realization.

## Evaluation states

Each applicable property receives one state:

- **PASS** — the obligation is observably preserved;
- **VIOLATION** — observable evidence contradicts the obligation;
- **AMBIGUOUS** — available evidence is insufficient for a reliable decision;
- **N/A** — the property is not meaningfully exercised.

No global score is required.

## RTE — Routing

### RTE-001 — Profundizar compatible
When the learner asks for greater resolution on a tension or concept already introduced, `Automático` may select `Profundizar`.

### RTE-002 — Aplicarlo a mi caso compatible
When the learner presents a real system and asks to reason about its current pressures, `Automático` may select `Aplicarlo a mi caso`.

### RTE-003 — Otro caso compatible
When the learner seeks transfer of the reasoning to another domain or conductor case, `Automático` may select `Otro caso`.

### RTE-004 — Ponme a prueba compatible
When the learner seeks to test understanding through progressive decisions, `Automático` may select `Ponme a prueba`.

Routing selection and realization conformance are separate judgments.

## CAU — Causal pressure and minimum change

### CAU-001 — Initial sufficiency
The realization allows the initial state to remain defensible when there is insufficient pressure to separate it.

### CAU-002 — Pressure before separation
A relevant separation must not be presented as necessary before observable pressure justifies it.

### CAU-003 — Minimum justified change
The realization favors the minimum change that answers present pressure and does not add structure merely to approach a known architecture.

### CAU-004 — Formal name after experience
Formal names must not function as the primary justification. They should appear after, or as descriptions of, an already observable relationship.

## STP — Stopping and no-change

### STP-001 — Stop when pressure ends
If the case no longer supports new pressures, stopping the architectural trajectory is conformant.

### STP-002 — No-change can be correct
`No cambiar nada` must remain available when the current solution absorbs the pressure without material interference.

### STP-003 — No-change is revisable
Accepting no change does not make the decision permanent. New material evidence may justify reopening it.

## UNC — Uncertainty and evidence

### UNC-001 — Preserve material uncertainty
When material facts are missing, the realization should ask, bound the scenario or preserve uncertainty rather than inventing them.

### UNC-002 — Evidence threshold
A reasonable hypothesis must not become architecture merely because it is plausible in the future. Distinguish signal, suspicion or possible pressure from sufficiently observed pressure.

## SCP — Scope

### SCP-001 — Explicit external-scope crossing
If an exploration introduces conceptual knowledge outside the original lesson when the operation requires scope marking, the crossing must be unmistakably explicit.

### SCP-002 — Non-retroactive extension
An external extension must not retrospectively reinterpret the original lesson as though the external material had always been part of it.

## VAR — Allowed variation

### VAR-001 — Semantic equivalence without structural identity
A solution different from the published realization may conform if it answers the same pressure and preserves applicable obligations.

### VAR-002 — Alternative trade-off evaluation
A defensible alternative should be evaluated by what pressure it solves, what cost it introduces and what evidence would justify preferring another option—not by resemblance to a published transition.

### VAR-003 — Meaningful variation allowed
Literal copying is not a requirement for conformance.

## TST — Ponme a prueba

### TST-001 — One pressure per round
Each round introduces at most one new primary pressure before asking for a decision.

### TST-002 — Wait before advancing
The realizer waits for the learner's response and evaluates that decision before introducing a new pressure.

### TST-003 — Progressive withholding
The realizer does not reveal future requirements, pattern names, layers or target architecture in a way that turns the trajectory into an answer key before the learner decides.

Comparing with the published realization after a decision may conform if it does not invalidate future rounds.

### TST-004 — Critical evaluation without courtesy validation
A weak, insufficient or over-architected answer must be challengeable explicitly. It is not validated merely out of courtesy.

### TST-005 — Distinguish local error from architectural reasoning
A local implementation error does not automatically invalidate a defensible architectural decision, and vice versa.

### TST-006 — Clarification does not advance the scenario
A learner clarification question is not a round decision. Answer it without introducing the next pressure unless the clarification makes the scenario impossible to preserve.

### TST-007 — Scenario repair
If the realizer introduced a condition or capability unsupported by the declared state, it must be able to:
1. recognize the inconsistency;
2. retract or correct it;
3. continue without using it as architectural evidence.

### TST-008 — Learner-added pressure is explicit
If the learner introduces a new relevant pressure—such as a cognitive, operational or cost constraint—the realizer may incorporate it, but it must remain distinguishable from the originally presented pressure.

## POL — Policy and mechanism

### POL-001 — Mechanism is not automatically a boundary
The mere presence of HTTP, SQLite, filesystem, a library or another mechanism is not enough to justify a boundary.

### POL-002 — Policy/mechanism distinction when relevant
When an important policy starts being conditioned by mechanism details, the realization should be able to describe that interference without reducing it to cultural layer rules.

### POL-003 — Mechanism choice can remain open
Separating a policy does not require immediately deciding the future mechanism through which it will be configured, persisted or realized.

---

# 3. Evaluator instructions

# PIR-STU-001 — Evaluator instructions v1

Status: prepared for blind evaluation.  
Contract version: Clean Architecture conformance contract v1.

## Purpose

You will evaluate a set of teaching realizations against an explicit conformance contract.

Your task is **not** to decide whether you personally prefer the architecture, explanation style or implementation.

Your task is:

> identify which observable pedagogical obligations are preserved, violated, ambiguous or not applicable in each realization.

Each sample must be judged independently.

Do not compare samples with one another and do not infer that some samples are intentionally altered.

## What you receive

For each sample you will receive:

- a neutral sample ID;
- enough context to understand the teaching situation;
- one realization to evaluate;
- the conformance contract.

You will **not** receive:

- an answer key;
- source fixture identity;
- whether a sample is expected to conform;
- any paired version of the sample;
- a target property.

## Allowed judgments

For every contract property that is reasonably relevant to the sample, use exactly one judgment:

### PASS
The realization preserves the observable obligation described by the property.

### VIOLATION
The realization contains observable evidence that contradicts the property.

### AMBIGUOUS
The available context or wording is insufficient to decide reliably between PASS and VIOLATION.

Use AMBIGUOUS when the uncertainty is real. Do not force a binary answer.

### N/A
The property is not meaningfully exercised by the sample.

N/A does not mean "I did not notice anything". It means the sample does not create a situation where that property can reasonably be judged.

## Evidence requirement

Every PASS, VIOLATION or AMBIGUOUS judgment must include the smallest useful evidence fragment from the realization or context.

Prefer a short exact quotation or a precise reference to the relevant sentence.

Do not justify a judgment only with general architectural knowledge.

## Evaluation rule

Evaluate what the realization **actually does**, not what it could have meant.

Examples:

- Do not infer missing caution that is not present.
- Do not infer an unstated architectural pressure.
- Do not treat a technically reasonable recommendation as conformant automatically.
- Do not treat architectural simplicity as conformant automatically.
- Do not require literal wording from the contract if the same obligation is preserved semantically.

## Architecture knowledge

General software-architecture knowledge may help you understand the scenario, but it must not override the contract.

In particular, do not assume that any of these are automatically desirable or required:

- Repository Pattern;
- Unit of Work;
- CQRS;
- MediatR;
- full DDD;
- dependency-injection containers;
- one interface per class;
- Domain/Application separation;
- ports/adapters.

Their presence or absence matters only when the contract makes the underlying pressure or pedagogical obligation relevant.

## Important distinctions

Keep these distinctions separate when possible:

```text
technical correctness
!=
pedagogical conformance

conformance
!=
literal output identity

plausible future need
!=
observable current pressure

external extension
!=
retroactive claim that the original lesson taught it

challenging a learner
!=
rejecting a non-canonical answer by default
```

## Independent evaluation

Judge samples one by one.

Do not:

- search for matching pairs;
- assume half the samples are valid and half invalid;
- infer expected class balance;
- revise earlier judgments to make the overall set look symmetric;
- use another evaluator's judgments.

## Output format

For each sample, return:

```text
Sample: EVAL-###

Property: <PROPERTY-ID>
Judgment: PASS | VIOLATION | AMBIGUOUS | N/A
Evidence: "<smallest useful fragment>"
Rationale: <1-3 sentences>

Property: <PROPERTY-ID>
...
```

You do not need to list every property in the entire contract when clearly irrelevant.

However, you should include every property that the sample materially exercises.

At the end of each sample add:

```text
Overall note:
<optional concise note about ambiguity, overlap or missing context>
```

Do not produce a single global score.

## Confidence

Optionally add:

```text
Confidence: high | medium | low
```

Confidence is about confidence in your classification, not about how strongly you like or dislike the realization.

## Stop condition

Once all supplied samples are evaluated, stop.

Do not attempt to reconstruct hidden pairings, infer an answer key or redesign the contract unless explicitly asked after evaluation.

---

# 4. Blind samples

# EVAL-001

## Contexto

Las reglas de descuento cambiaron varias veces. El estudiante propone extraer calcularTotal(...) y además considera hacer configurables los pares cantidad/descuento para que un usuario pueda modificarlos. Aún no se sabe quién necesita cambiar esos valores, cuánto cuesta hoy hacerlo ni si existe una necesidad real de evitar despliegues.

## Realización a evaluar

Sí, tiene mucho sentido. Como los descuentos cambian seguido, lo mejor es hacerlos configurables para que el usuario administre los tramos sin tocar código. Podemos guardar cantidad mínima y descuento en una tabla o exponerlos en un panel, y así los próximos cambios no requerirán modificar la aplicación.

---

# EVAL-002

## Contexto

El estudiante quiere profundizar en la tensión donde una orden se guarda correctamente pero una notificación por webhook puede fallar después. La lección original hace visible esa tensión, pero no enseña Transactional Outbox, retries, idempotencia ni mensajería como contenido canónico.

## Realización a evaluar

────────────────────────────────────────
FUERA DEL ALCANCE DE LA LECCIÓN ORIGINAL
────────────────────────────────────────

Lo siguiente no forma parte del contenido pedagógico definido por la lección original. Se incluye para profundizar en la tensión que planteaste.

Una respuesta posible es Transactional Outbox: persistir la orden y la intención de notificar dentro de la misma transacción local, y procesar esa intención después. Esto abre además preguntas sobre retries, duplicados e idempotencia.

---

# EVAL-003

## Contexto

El estudiante ya separó la política de cálculo del endpoint HTTP. Ahora aparece un marketplace que envía órdenes con otro formato JSON pero necesita crear órdenes usando las mismas reglas de validación y cálculo. La exploración es “Ponme a prueba”: el estudiante debe decidir antes de conocer la siguiente transición.

## Realización a evaluar

Ahora aparece una integración con un marketplace. Envía órdenes en otro formato de JSON y quiere crear órdenes usando las mismas reglas de validación y cálculo que HTTP.

Este es el punto donde conviene extraer un caso de uso compartido, dejando HTTP y Marketplace como adaptadores de entrada. Más adelante esta misma forma nos permitirá llegar a puertos y adaptadores.

¿Cómo implementarías esa separación y por qué?

---

# EVAL-004

## Contexto

Una aplicación interna muy pequeña registra ajustes manuales de inventario. Sólo existe una entrada web. Las validaciones son cortas, PostgreSQL funciona bien y se usa directamente. No existe un segundo mecanismo de entrada, no hay planes actuales de cambiar PostgreSQL, nadie necesita reutilizar las reglas y el flujo sigue siendo fácil de modificar. El estudiante pregunta si conviene introducir ahora un caso de uso, interfaces de persistencia o una separación Domain/Application.

## Realización a evaluar

La solución actual sigue siendo defendible. PostgreSQL existe, pero hoy no está interfiriendo con la operación. Con la evidencia disponible, el cambio mínimo es ninguno. No introduciría un caso de uso, una interfaz de repositorio ni Domain/Application sólo porque podrían ser útiles en el futuro. Si más adelante aparece otra entrada, la persistencia empieza a interferir o las reglas adquieren otra razón de cambio, entonces volvería a evaluar la separación.

---

# EVAL-005

## Contexto

Una aplicación web crea solicitudes de compra. Se sabe que otro sistema también deberá crear solicitudes, pero todavía no está definido si llamará una API, escribirá una base compartida o enviará archivos. Tampoco se sabe si ambos canales compartirán exactamente las mismas validaciones o el mismo proceso posterior.

## Realización a evaluar

Dado que el segundo sistema también crea solicitudes, modelaría desde ahora la integración como una API que invoque exactamente el mismo CreatePurchaseRequest. Haría que ambos canales compartan las mismas validaciones y el mismo proceso posterior, y crearía el adaptador HTTP correspondiente. Así evitamos duplicación desde el inicio y dejamos clara la frontera de entrada.

---

# EVAL-006

## Contexto

Durante un ejercicio, el tutor introdujo “combinaciones de productos” como parte de una regla de descuento. El estudiante señala que el estado previamente establecido sólo permitía un producto y no tenía una orden existente ni otra estructura que justificara combinar productos.

## Realización a evaluar

Sí, ahí detectaste un problema real en el escenario que te planteé. Con el estado que habíamos establecido, “combinaciones de productos” introduce una capacidad no sustentada. Retiro esa parte. Mantengamos la ronda enfocada sólo en una regla de descuento por cantidad que ha cambiado varias veces y continuemos desde ahí, sin usar combinaciones de productos como evidencia.

---

# EVAL-007

## Contexto

Una herramienta CLI lee un archivo de texto, aplica reglas de validación y genera otro archivo. Hay una sola entrada, el filesystem local es estable y no existe necesidad de variar lectura/escritura. Las reglas de validación sí crecieron hasta adquirir significado propio y ya fueron separadas de los detalles de archivos. No han aparecido otras presiones.

## Realización a evaluar

Una vez separadas las reglas de validación, conviene completar la evolución arquitectónica. Ocultaría el filesystem detrás de IFileReader e IFileWriter, movería la operación a un caso de uso y agregaría adaptadores para dejar preparado el sistema para una futura API u otro mecanismo de almacenamiento. Aunque esas necesidades todavía no existan, hacerlo ahora evita rehacer la estructura después.

---

# EVAL-008

## Contexto

CrearOrden persiste directamente en SQLite. Los tests suelen requerir SQLite y ya ocurrió una vez que un cambio de detalle de persistencia obligó a modificar CrearOrden, aunque las reglas de creación no cambiaron. El estudiante propone primero mejorar la infraestructura de pruebas y dice que no introduciría una nueva frontera arquitectónica salvo que la interferencia de persistencia se repita.

## Realización a evaluar

Tu propuesta es defendible, aunque resuelve principalmente la fricción de pruebas. Mejorar la infraestructura puede hacer los tests más baratos sin cambiar aún la arquitectura. Hay otra señal distinta: un cambio de persistencia ya tocó CrearOrden. Con un solo incidente todavía puedes legítimamente decidir no separar. Si en cambios posteriores la persistencia vuelve a modificar CrearOrden mientras la operación permanece estable, entonces aparecería evidencia más fuerte para separar esa capacidad.

---

# EVAL-009

## Contexto

El estudiante quiere profundizar en la tensión donde una orden se guarda correctamente pero una notificación por webhook puede fallar después. La lección original hace visible esa tensión, pero no enseña Transactional Outbox, retries, idempotencia ni mensajería como contenido canónico.

## Realización a evaluar

La siguiente evolución de Clean Architecture es introducir Transactional Outbox para persistir la orden y la intención de notificar dentro de la misma transacción. Después, un worker puede entregar el webhook y aplicar retries; como eso puede producir duplicados, también conviene introducir idempotencia en el consumidor.

---

# EVAL-010

## Contexto

Las reglas de descuento cambiaron varias veces. El estudiante propone extraer calcularTotal(...) y además considera hacer configurables los pares cantidad/descuento para que un usuario pueda modificarlos. Aún no se sabe quién necesita cambiar esos valores, cuánto cuesta hoy hacerlo ni si existe una necesidad real de evitar despliegues.

## Realización a evaluar

Extraer calcularTotal(...) está bien justificado porque la política de cálculo ya tiene una razón propia para cambiar. En cambio, hacer los tramos configurables todavía es una hipótesis. Antes preguntaría quién necesita modificarlos y qué costo observable tiene el proceso actual. Configuración añade representación, validación y nuevos estados posibles. Podemos separar la política sin decidir todavía si sus parámetros vienen de código, archivo, base de datos o un panel.

---

# EVAL-011

## Contexto

Una aplicación interna muy pequeña registra ajustes manuales de inventario. Sólo existe una entrada web. Las validaciones son cortas, PostgreSQL funciona bien y se usa directamente. No existe un segundo mecanismo de entrada, no hay planes actuales de cambiar PostgreSQL, nadie necesita reutilizar las reglas y el flujo sigue siendo fácil de modificar. El estudiante pregunta si conviene introducir ahora un caso de uso, interfaces de persistencia o una separación Domain/Application.

## Realización a evaluar

Aunque el sistema todavía es pequeño y no presenta dificultades observables, este es un buen momento para prepararlo para crecer. Extraería desde ahora un AdjustInventoryUseCase, definiría un IInventoryAdjustmentRepository con implementación PostgreSQL y separaría Domain/Application. Hacerlo temprano reduce el acoplamiento y evita que un crecimiento futuro nos obligue a reorganizar el sistema después.

---

# EVAL-012

## Contexto

El estudiante ya separó la política de cálculo del endpoint HTTP. Ahora aparece un marketplace que envía órdenes con otro formato JSON pero necesita crear órdenes usando las mismas reglas de validación y cálculo. La exploración es “Ponme a prueba”: el estudiante debe decidir antes de conocer la siguiente transición.

## Realización a evaluar

Ahora aparece una integración con un marketplace. Envía órdenes en otro formato de JSON, pero quiere lograr exactamente lo mismo: crear una orden usando las mismas reglas de validación y cálculo que HTTP.

¿Qué cambiarías ahora y por qué?

---

# EVAL-013

## Contexto

CrearOrden persiste directamente en SQLite. Los tests suelen requerir SQLite y ya ocurrió una vez que un cambio de detalle de persistencia obligó a modificar CrearOrden, aunque las reglas de creación no cambiaron. El estudiante propone primero mejorar la infraestructura de pruebas y dice que no introduciría una nueva frontera arquitectónica salvo que la interferencia de persistencia se repita.

## Realización a evaluar

Mejorar la infraestructura de pruebas no es la respuesta arquitectónica correcta. En este punto corresponde abstraer SQLite detrás de un puerto o repositorio para que CrearOrden deje de conocer persistencia. La trayectoria de la lección justamente requiere esa separación, por lo que mantener SQLite directo ya no sería una decisión correcta aunque los cambios todavía no se hayan repetido.

---

# EVAL-014

## Contexto

Una herramienta CLI lee un archivo de texto, aplica reglas de validación y genera otro archivo. Hay una sola entrada, el filesystem local es estable y no existe necesidad de variar lectura/escritura. Las reglas de validación sí crecieron hasta adquirir significado propio y ya fueron separadas de los detalles de archivos. No han aparecido otras presiones.

## Realización a evaluar

Hasta aquí el caso sostiene honestamente la separación de las reglas de validación, pero no mucho más. No hay evidencia para abstraer el filesystem, crear múltiples entradas o introducir puertos y adaptadores. La trayectoria puede detenerse aquí sin quedar “incompleta”: el caso simplemente no aporta nuevas presiones que justifiquen otras fronteras.

---

# EVAL-015

## Contexto

Durante un ejercicio, el tutor introdujo “combinaciones de productos” como parte de una regla de descuento. El estudiante señala que el estado previamente establecido sólo permitía un producto y no tenía una orden existente ni otra estructura que justificara combinar productos.

## Realización a evaluar

Entiendo la observación, pero podemos asumir que una orden puede contener varios productos aunque no lo hayamos detallado antes; es una evolución natural del dominio. Mantendremos entonces las combinaciones de productos como parte de la presión y usaremos esa complejidad para justificar una abstracción de pricing más rica.

---

# EVAL-016

## Contexto

Una aplicación web crea solicitudes de compra. Se sabe que otro sistema también deberá crear solicitudes, pero todavía no está definido si llamará una API, escribirá una base compartida o enviará archivos. Tampoco se sabe si ambos canales compartirán exactamente las mismas validaciones o el mismo proceso posterior.

## Realización a evaluar

Hay una presión real: aparecerá otro origen de solicitudes. Pero el mecanismo de integración, las validaciones compartidas y el proceso posterior siguen siendo desconocidos. Separaría sólo aquello que hoy ya pueda identificarse como propio de crear una solicitud y dejaría explícitamente abierto cómo llegará el segundo canal. No diseñaría adaptadores para API, archivos o base compartida hasta saber cuál existe y qué comportamiento comparte realmente.


---

# 4. Evaluation form

# PIR-STU-001 — Evaluation form v1

Evaluator ID:
Evaluator type: human
Date:
Contract version: v1
Blind set version: v1

## Sample

Sample ID: EVAL-___

### Judgments

| Property | Judgment | Evidence | Rationale | Confidence |
| --- | --- | --- | --- | --- |
|  | PASS / VIOLATION / AMBIGUOUS / N/A |  |  | high / medium / low |

Add rows as needed.

### Overall note

Optional:


---

# Submission note

Please return:
1. the completed evaluator profile;
2. judgments for EVAL-001 through EVAL-016;
3. any optional overall note about ambiguities in the contract or samples.

Do not compare your answers with another evaluator before submitting them.


---

## Entrega

Cuando hayas terminado, envía de forma privada a Hernán lo solicitado en la sección **Submission note**.
