---
title: PIR-STU-001 — Evaluación humana Phase 0c
hide:
  - navigation
  - footer
hide_support: true
---

# PIR-STU-001 — Evaluación humana Phase 0c

**Paquete para validación humana — versión v1**

Esta página contiene el paquete completo para realizar la evaluación humana de PIR-STU-001 Phase 0c.

!!! info "Entrega privada"
    Cuando termines, envía el perfil y las respuestas **de forma privada a Hernán**, por el canal mediante el cual recibiste este enlace.

---

## 1. Introducción {#introduccion}

<div class="teaching-grid teaching-grid--2" markdown>

<div class="teaching-card">
<span class="teaching-eyebrow">Material</span>
<strong>8 casos seleccionados</strong>
<span>Evaluarás C02, C03, C06, C13, C14, C18, C23 y C31 de forma independiente.</span>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">Tu tarea</span>
<strong>Aplicar el mismo contrato v1 de Phase 0b</strong>
<span>Para cada propiedad materialmente ejercitada, usa exactamente PASS, VIOLATION, AMBIGUOUS o N/A.</span>
</div>

</div>

<div class="teaching-grid teaching-grid--2" markdown>

<div class="teaching-card">
<span class="teaching-eyebrow">No reduzcas el caso</span>
<strong>No existe un juicio global “bueno/malo”</strong>
<span>La unidad de respuesta es cada propiedad materialmente ejercitada por el caso.</span>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">Entrega</span>
<strong>Juicio + evidencia + fundamento</strong>
<span>Incluye Property ID, Judgment, evidencia mínima útil y fundamento breve. La confianza es opcional.</span>
</div>

</div>

!!! warning "Evalúa de forma independiente"
    No intentes inferir por qué estos casos fueron seleccionados ni compares tus respuestas con otros evaluadores antes de entregar.

---

## 2. Perfil del evaluador {#perfil-evaluador}

Antes de comenzar, copia y completa el perfil que debe acompañar tu evaluación.

<div class="teaching-copy-template" data-teaching-copy-template>
  <div class="teaching-copy-template__body">
    <strong>Perfil del evaluador</strong>
    <span>Copia la plantilla, complétala y envíala junto con los 8 casos.</span>
  </div>
  <button type="button" class="md-button md-button--primary teaching-copy-template__button" data-copy-template-button>Copiar plantilla</button>
  <textarea hidden data-copy-template-source>ID del evaluador:

Rol actual / enfoque profesional:
Años de experiencia relevante:
Educación, formación o experiencia docente relevante:

Experiencia con arquitectura de software (elige una):
[ ] ninguna
[ ] básica
[ ] intermedia
[ ] avanzada

Experiencia con diseño instruccional / pedagogía / evaluación (elige una):
[ ] ninguna
[ ] básica
[ ] intermedia
[ ] avanzada

Familiaridad previa con Clean Architecture (elige una):
[ ] ninguna
[ ] básica
[ ] intermedia
[ ] avanzada

Familiaridad previa con Teaching / PIR / este estudio (elige una):
[ ] ninguna
[ ] limitada
[ ] sustancial

Fecha:
Tiempo aproximado dedicado:

¿Conversaste algún caso con otra persona antes del envío?
[ ] sí
[ ] no

¿Usaste un asistente de IA durante la evaluación?
[ ] sí
[ ] no

Si respondiste que sí, describe cómo:
</textarea>
  <span class="teaching-copy-template__status" data-copy-template-status aria-live="polite"></span>
</div>

---

## 3. Contrato, instrucciones y casos {#evaluacion}

### 3.1 Contrato de conformidad {#contrato}

**PIR-STU-001 — Contrato de conformidad de Clean Architecture v1**

Esta vista preserva las propiedades de conformidad congeladas de v1 y sus definiciones, mientras omite material de construcción del benchmark, identidades de controles positivos, familias de mutantes, expectativas ocultas, el procedimiento interno de calibración y la procedencia de ejecución.

No modifica la semántica del contrato congelado.

#### Cómo usar el contrato

<div class="teaching-flow">

<div class="teaching-flow__step teaching-flow__step--numbered">
<span class="teaching-flow__marker">1</span>
<strong>Identifica qué propiedades se ejercitan</strong>
<small>No todas las propiedades son relevantes para todas las muestras.</small>
</div>

<div class="teaching-flow__arrow" aria-hidden="true">→</div>

<div class="teaching-flow__step teaching-flow__step--numbered">
<span class="teaching-flow__marker">2</span>
<strong>Juzga la evidencia disponible</strong>
<small>Usa PASS, VIOLATION, AMBIGUOUS o N/A según lo que la realización realmente hace.</small>
</div>

<div class="teaching-flow__arrow" aria-hidden="true">→</div>

<div class="teaching-flow__step teaching-flow__step--numbered teaching-flow__step--accent">
<span class="teaching-flow__marker">3</span>
<strong>Señala la evidencia mínima</strong>
<small>Todo juicio distinto de N/A debe apuntar al fragmento útil más pequeño.</small>
</div>

</div>

#### Propósito

<div class="teaching-card">
<span class="teaching-eyebrow">Qué evalúa este contrato</span>
<strong>Conformidad pedagógica observable</strong>
<span>Distingue preservación de intención, variación legítima, violaciones, avance prematuro, presión inventada y cruces de alcance no declarados.</span>
</div>

No prescribe un formato de fuente, no evalúa la calidad general de enseñanza ni mide resultados de aprendizaje.

#### Autoridad pedagógica central

<div class="teaching-card">
<span class="teaching-eyebrow">Pregunta guía</span>
<strong>¿Qué problema justifica esta separación?</strong>
<span>La arquitectura debe poder reconstruirse desde las presiones que vuelven útil cada separación.</span>
</div>

La lección preserva estos invariantes centrales:

<div class="teaching-grid teaching-grid--2 teaching-grid--lateral-badges" markdown>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">1</span>
<strong>Suficiencia inicial</strong>
<span>Una solución inicial puede ser suficiente y defendible.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">2</span>
<strong>Presión observable</strong>
<span>Una separación requiere presión observable previa.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">3</span>
<strong>Cambio proporcional</strong>
<span>El cambio debe ser proporcional a la presión actual.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">4</span>
<strong>Nombres después de la experiencia</strong>
<span>Los nombres formales aparecen después de la experiencia que los vuelve útiles.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">5</span>
<strong>Política y mecanismo distinguibles</strong>
<span>Política y mecanismo deben seguir siendo distinguibles cuando sea relevante.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">6</span>
<strong>Detenerse puede ser correcto</strong>
<span>Detenerse antes de una forma arquitectónica final puede ser correcto.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">7</span>
<strong>Trayectoria reconstruible</strong>
<span>La arquitectura resultante debe poder reconstruirse causalmente.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">8</span>
<strong>La forma no prueba necesidad</strong>
<span>Interfaces, capas o DI no demuestran por sí solas que una separación fuera necesaria.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">9</span>
<strong>No todo concepto asociado es obligación</strong>
<span>Los conceptos culturalmente asociados con Clean Architecture no son automáticamente obligaciones de esta lección.</span>
</div>

</div>

#### Unidad de juicio

Evalúa la realización en relación con la operación solicitada y el estado o necesidad concreta disponible.

<div class="teaching-flow">

<div class="teaching-flow__step teaching-flow__step--numbered">
<span class="teaching-flow__marker">1</span>
<strong>Operación solicitada</strong>
<small>Qué se pidió hacer en esta interacción.</small>
</div>

<div class="teaching-flow__arrow" aria-hidden="true">→</div>

<div class="teaching-flow__step teaching-flow__step--numbered">
<span class="teaching-flow__marker">2</span>
<strong>Estado / necesidad</strong>
<small>Qué información y necesidad concreta estaban disponibles.</small>
</div>

<div class="teaching-flow__arrow" aria-hidden="true">→</div>

<div class="teaching-flow__step teaching-flow__step--numbered teaching-flow__step--accent">
<span class="teaching-flow__marker">3</span>
<strong>Realización producida</strong>
<small>Qué hizo efectivamente la realización frente a ese contexto.</small>
</div>

</div>

En exploraciones interactivas, una ejecución puede contener múltiples rondas. No evalúes por similitud superficial con una realización publicada.

#### Estados de evaluación

<div class="pir-judgment-grid">
  <div class="pir-judgment"><strong>PASS</strong><span>La obligación se preserva de forma observable.</span></div>
  <div class="pir-judgment"><strong>VIOLATION</strong><span>La evidencia observable contradice la obligación.</span></div>
  <div class="pir-judgment"><strong>AMBIGUOUS</strong><span>La evidencia disponible es insuficiente para una decisión confiable.</span></div>
  <div class="pir-judgment"><strong>N/A</strong><span>La propiedad no se ejercita de manera significativa.</span></div>
</div>

No se requiere un puntaje global.

=== "RTE"

    <section class="pir-contract-family pir-contract-family--tab" markdown>

    <div class="pir-contract-family__title">
    <strong>RTE — Enrutamiento</strong>
    </div>

    <div class="teaching-card">
    <span class="teaching-eyebrow">Qué protege esta familia</span>
    <strong>Compatibilidad entre la necesidad del estudiante y la ruta elegida</strong>
    <span>El enrutamiento se evalúa por la necesidad concreta del estudiante; su selección y la conformidad de la realización son juicios separados.</span>
    </div>

    <div class="pir-contract-criteria-grid" markdown>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">1</span>
    <strong>RTE-001 — Profundizar compatible</strong>
    <span>Cuando el estudiante pide mayor profundidad sobre una tensión o concepto ya introducido, `Automático` puede seleccionar `Profundizar`.</span>
    </div>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">2</span>
    <strong>RTE-002 — Aplicarlo a mi caso compatible</strong>
    <span>Cuando el estudiante presenta un sistema real y pide razonar sobre sus presiones actuales, `Automático` puede seleccionar `Aplicarlo a mi caso`.</span>
    </div>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">3</span>
    <strong>RTE-003 — Otro caso compatible</strong>
    <span>Cuando el estudiante busca transferir el razonamiento a otro dominio o caso conductor, `Automático` puede seleccionar `Otro caso`.</span>
    </div>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">4</span>
    <strong>RTE-004 — Ponme a prueba compatible</strong>
    <span>Cuando el estudiante busca poner a prueba su comprensión mediante decisiones progresivas, `Automático` puede seleccionar `Ponme a prueba`.</span>
    </div>

    </div>

    La selección de enrutamiento y la conformidad de la realización son juicios separados.

    </section>

=== "CAU"

    <section class="pir-contract-family pir-contract-family--tab" markdown>

    <div class="pir-contract-family__title">
    <strong>CAU — Presión causal y cambio mínimo</strong>
    </div>

    <div class="teaching-card">
    <span class="teaching-eyebrow">Qué protege esta familia</span>
    <strong>Que la arquitectura responda a presión observable</strong>
    <span>Una separación debe ganarse por la evidencia presente y responder con el cambio mínimo que esa presión justifica.</span>
    </div>

    <div class="pir-contract-criteria-grid" markdown>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">1</span>
    <strong>CAU-001 — Suficiencia inicial</strong>
    <span>La realización permite que el estado inicial siga siendo defendible cuando no existe presión suficiente para separarlo.</span>
    </div>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">2</span>
    <strong>CAU-002 — Presión antes de separar</strong>
    <span>Una separación relevante no debe presentarse como necesaria antes de que una presión observable la justifique.</span>
    </div>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">3</span>
    <strong>CAU-003 — Cambio mínimo justificado</strong>
    <span>La realización favorece el cambio mínimo que responde a la presión presente y no agrega estructura sólo para acercarse a una arquitectura conocida.</span>
    </div>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">4</span>
    <strong>CAU-004 — Nombre formal después de la experiencia</strong>
    <span>Los nombres formales no deben funcionar como justificación principal. Deben aparecer después de una relación ya observable, o como descripción de ella.</span>
    </div>

    </div>

    </section>

=== "STP"

    <section class="pir-contract-family pir-contract-family--tab" markdown>

    <div class="pir-contract-family__title">
    <strong>STP — Detención y ausencia de cambio</strong>
    </div>

    <div class="teaching-card">
    <span class="teaching-eyebrow">Qué protege esta familia</span>
    <strong>Que detenerse o no cambiar siga siendo una decisión válida</strong>
    <span>La trayectoria no necesita avanzar hacia una forma final cuando la presión termina o la solución actual todavía la absorbe.</span>
    </div>

    <div class="pir-contract-criteria-grid" markdown>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">1</span>
    <strong>STP-001 — Detenerse cuando termina la presión</strong>
    <span>Si el caso ya no sostiene nuevas presiones, detener la trayectoria arquitectónica es conforme.</span>
    </div>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">2</span>
    <strong>STP-002 — No cambiar puede ser correcto</strong>
    <span>`No cambiar nada` debe seguir disponible cuando la solución actual absorbe la presión sin interferencia material.</span>
    </div>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">3</span>
    <strong>STP-003 — No cambiar es revisable</strong>
    <span>Aceptar no cambiar no vuelve permanente la decisión. Nueva evidencia material puede justificar reabrirla.</span>
    </div>

    </div>

    </section>

=== "UNC"

    <section class="pir-contract-family pir-contract-family--tab" markdown>

    <div class="pir-contract-family__title">
    <strong>UNC — Incertidumbre y evidencia</strong>
    </div>

    <div class="teaching-card">
    <span class="teaching-eyebrow">Qué protege esta familia</span>
    <strong>Que una hipótesis no se convierta prematuramente en arquitectura</strong>
    <span>La incertidumbre material debe preservarse hasta que exista evidencia suficiente para sostener una decisión.</span>
    </div>

    <div class="pir-contract-criteria-grid" markdown>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">1</span>
    <strong>UNC-001 — Preservar la incertidumbre material</strong>
    <span>Cuando faltan hechos materiales, la realización debe preguntar, acotar el escenario o preservar la incertidumbre en lugar de inventarlos.</span>
    </div>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">2</span>
    <strong>UNC-002 — Umbral de evidencia</strong>
    <span>Una hipótesis razonable no debe convertirse en arquitectura sólo porque resulte plausible a futuro. Debe distinguirse una señal, sospecha o presión posible de una presión suficientemente observada.</span>
    </div>

    </div>

    </section>

=== "SCP"

    <section class="pir-contract-family pir-contract-family--tab" markdown>

    <div class="pir-contract-family__title">
    <strong>SCP — Alcance</strong>
    </div>

    <div class="teaching-card">
    <span class="teaching-eyebrow">Qué protege esta familia</span>
    <strong>Que las extensiones externas sigan siendo reconocibles como extensiones</strong>
    <span>Profundizar fuera del alcance original puede ser válido, pero el cruce debe ser explícito y no reescribir retroactivamente la lección.</span>
    </div>

    <div class="pir-contract-criteria-grid" markdown>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">1</span>
    <strong>SCP-001 — Cruce explícito de alcance externo</strong>
    <span>Si una exploración introduce conocimiento conceptual fuera de la lección original cuando la operación exige marcar el alcance, el cruce debe ser inequívocamente explícito.</span>
    </div>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">2</span>
    <strong>SCP-002 — Extensión no retroactiva</strong>
    <span>Una extensión externa no debe reinterpretar retroactivamente la lección original como si el material externo siempre hubiera formado parte de ella.</span>
    </div>

    </div>

    </section>

=== "VAR"

    <section class="pir-contract-family pir-contract-family--tab" markdown>

    <div class="pir-contract-family__title">
    <strong>VAR — Variación permitida</strong>
    </div>

    <div class="teaching-card">
    <span class="teaching-eyebrow">Qué protege esta familia</span>
    <strong>Que conformidad no signifique copiar una solución publicada</strong>
    <span>Una alternativa puede ser conforme si responde a la presión y conserva las obligaciones, aunque su estructura concreta sea distinta.</span>
    </div>

    <div class="pir-contract-criteria-grid" markdown>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">1</span>
    <strong>VAR-001 — Equivalencia semántica sin identidad estructural</strong>
    <span>Una solución distinta de la realización publicada puede ser conforme si responde a la misma presión y preserva las obligaciones aplicables.</span>
    </div>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">2</span>
    <strong>VAR-002 — Evaluación de alternativas por sus compromisos</strong>
    <span>Una alternativa defendible debe evaluarse por la presión que resuelve, el costo que introduce y la evidencia que justificaría preferir otra opción, no por su parecido con una transición publicada.</span>
    </div>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">3</span>
    <strong>VAR-003 — Se permite variación significativa</strong>
    <span>La copia literal no es un requisito de conformidad.</span>
    </div>

    </div>

    </section>

=== "TST"

    <section class="pir-contract-family pir-contract-family--tab" markdown>

    <div class="pir-contract-family__title">
    <strong>TST — Ponme a prueba</strong>
    </div>

    <div class="teaching-card">
    <span class="teaching-eyebrow">Qué protege esta familia</span>
    <strong>Que el estudiante pueda decidir antes de conocer la trayectoria</strong>
    <span>La prueba debe avanzar por presiones progresivas, evaluar críticamente las decisiones y reparar el escenario cuando sea necesario.</span>
    </div>

    <div class="pir-contract-criteria-grid" markdown>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">1</span>
    <strong>TST-001 — Una presión por ronda</strong>
    <span>Cada ronda introduce como máximo una nueva presión principal antes de pedir una decisión.</span>
    </div>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">2</span>
    <strong>TST-002 — Esperar antes de avanzar</strong>
    <span>El realizador espera la respuesta del estudiante y evalúa esa decisión antes de introducir una nueva presión.</span>
    </div>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">3</span>
    <strong>TST-003 — Retención progresiva de información</strong>
    <span>El realizador no revela requisitos futuros, nombres de patrones, capas ni arquitectura objetivo de una forma que convierta la trayectoria en una clave de respuestas antes de que el estudiante decida. Comparar con la realización publicada después de una decisión puede ser conforme si no invalida rondas futuras.</span>
    </div>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">4</span>
    <strong>TST-004 — Evaluación crítica sin validación por cortesía</strong>
    <span>Una respuesta débil, insuficiente o sobrearquitecturada debe poder cuestionarse explícitamente. No se valida únicamente por cortesía.</span>
    </div>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">5</span>
    <strong>TST-005 — Distinguir error local de razonamiento arquitectónico</strong>
    <span>Un error local de implementación no invalida automáticamente una decisión arquitectónica defendible, ni viceversa.</span>
    </div>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">6</span>
    <strong>TST-006 — Una aclaración no avanza el escenario</strong>
    <span>Una pregunta de aclaración del estudiante no es una decisión de ronda. Debe responderse sin introducir la siguiente presión, salvo que la aclaración vuelva imposible preservar el escenario.</span>
    </div>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">7</span>
    <strong>TST-007 — Reparación del escenario</strong>
    <span>Si el realizador introdujo una condición o capacidad no sustentada por el estado declarado, debe poder: 1. reconocer la inconsistencia; 2. retirarla o corregirla; 3. continuar sin utilizarla como evidencia arquitectónica.</span>
    </div>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">8</span>
    <strong>TST-008 — La presión agregada por el estudiante es explícita</strong>
    <span>Si el estudiante introduce una nueva presión relevante —como una restricción cognitiva, operacional o de costo— el realizador puede incorporarla, pero debe seguir siendo distinguible de la presión presentada originalmente.</span>
    </div>

    </div>

    </section>

=== "POL"

    <section class="pir-contract-family pir-contract-family--tab" markdown>

    <div class="pir-contract-family__title">
    <strong>POL — Política y mecanismo</strong>
    </div>

    <div class="teaching-card">
    <span class="teaching-eyebrow">Qué protege esta familia</span>
    <strong>Que un mecanismo no se convierta automáticamente en una frontera</strong>
    <span>La separación debe responder a interferencia real entre política y mecanismo, sin forzar desde temprano cómo se realizará el mecanismo futuro.</span>
    </div>

    <div class="pir-contract-criteria-grid" markdown>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">1</span>
    <strong>POL-001 — El mecanismo no es automáticamente una frontera</strong>
    <span>La sola presencia de HTTP, SQLite, filesystem, una biblioteca u otro mecanismo no basta para justificar una frontera.</span>
    </div>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">2</span>
    <strong>POL-002 — Distinción política/mecanismo cuando sea relevante</strong>
    <span>Cuando una política importante empieza a quedar condicionada por detalles del mecanismo, la realización debe poder describir esa interferencia sin reducirla a reglas culturales de capas.</span>
    </div>

    <div class="teaching-item teaching-item--criterion">
    <span class="teaching-item__marker">3</span>
    <strong>POL-003 — La elección del mecanismo puede permanecer abierta</strong>
    <span>Separar una política no exige decidir inmediatamente el mecanismo futuro mediante el cual será configurada, persistida o realizada.</span>
    </div>

    </div>

    </section>

---



### 3.2 Instrucciones para el evaluador {#instrucciones}

<div class="teaching-card">
<span class="teaching-eyebrow">Regla de evaluación</span>
<strong>Evalúa cada caso de forma independiente</strong>
<span>Usa el contrato v1 y registra todas las propiedades materialmente ejercitadas. No conviertas el caso en un único juicio global.</span>
</div>

<div class="teaching-flow">

<div class="teaching-flow__step teaching-flow__step--numbered">
<span class="teaching-flow__marker">1</span>
<strong>Lee el caso</strong>
<small>Usa el contexto y la realización suministrados.</small>
</div>

<div class="teaching-flow__arrow" aria-hidden="true">→</div>

<div class="teaching-flow__step teaching-flow__step--numbered">
<span class="teaching-flow__marker">2</span>
<strong>Identifica propiedades</strong>
<small>Incluye cada propiedad materialmente ejercitada.</small>
</div>

<div class="teaching-flow__arrow" aria-hidden="true">→</div>

<div class="teaching-flow__step teaching-flow__step--numbered teaching-flow__step--accent">
<span class="teaching-flow__marker">3</span>
<strong>Registra el juicio</strong>
<small>Juicio, evidencia mínima útil, fundamento breve y confianza opcional.</small>
</div>

</div>

<div class="pir-judgment-grid">
  <div class="pir-judgment"><strong>PASS</strong><span>La obligación se preserva de forma observable.</span></div>
  <div class="pir-judgment"><strong>VIOLATION</strong><span>La evidencia observable contradice la obligación.</span></div>
  <div class="pir-judgment"><strong>AMBIGUOUS</strong><span>La evidencia disponible es insuficiente para decidir de manera confiable.</span></div>
  <div class="pir-judgment"><strong>N/A</strong><span>La propiedad no se ejercita de manera significativa.</span></div>
</div>

No compares tus respuestas con otros evaluadores antes de entregar.

---

### 3.3 Evaluación de casos {#casos}

Completa los casos en orden. Puedes volver a un caso ya completado; si modificas uno y lo dejas incompleto, la navegación vuelve a bloquearse hasta completarlo.

<div class="pir-eval-wizard"
     data-pir-eval-wizard
     data-eval-count="8"
     data-item-label="Caso"
     data-item-label-plural="casos"
     data-completed-word="completados"
     data-complete-word-singular="completo"
     data-complete-word-plural="completos"
     data-plural-article="Los"
     data-confidence-required="false"
     data-evidence-required-for-na="true">

<div class="pir-eval-wizard__tabs" role="tablist" aria-label="Casos de evaluación">
<button type="button" role="tab" class="pir-eval-wizard__tab is-active" id="pir-tab-C02" aria-controls="pir-panel-C02" aria-selected="true" data-eval-tab="C02" >C02</button>
<button type="button" role="tab" class="pir-eval-wizard__tab" id="pir-tab-C03" aria-controls="pir-panel-C03" aria-selected="false" data-eval-tab="C03" disabled>C03</button>
<button type="button" role="tab" class="pir-eval-wizard__tab" id="pir-tab-C06" aria-controls="pir-panel-C06" aria-selected="false" data-eval-tab="C06" disabled>C06</button>
<button type="button" role="tab" class="pir-eval-wizard__tab" id="pir-tab-C13" aria-controls="pir-panel-C13" aria-selected="false" data-eval-tab="C13" disabled>C13</button>
<button type="button" role="tab" class="pir-eval-wizard__tab" id="pir-tab-C14" aria-controls="pir-panel-C14" aria-selected="false" data-eval-tab="C14" disabled>C14</button>
<button type="button" role="tab" class="pir-eval-wizard__tab" id="pir-tab-C18" aria-controls="pir-panel-C18" aria-selected="false" data-eval-tab="C18" disabled>C18</button>
<button type="button" role="tab" class="pir-eval-wizard__tab" id="pir-tab-C23" aria-controls="pir-panel-C23" aria-selected="false" data-eval-tab="C23" disabled>C23</button>
<button type="button" role="tab" class="pir-eval-wizard__tab" id="pir-tab-C31" aria-controls="pir-panel-C31" aria-selected="false" data-eval-tab="C31" disabled>C31</button>
</div>

<div class="pir-eval-wizard__progress" aria-live="polite">
  <strong data-progress-label>0 de 8 completados</strong>
  <div class="pir-eval-wizard__progress-track"><span data-progress-bar></span></div>
</div>


<section markdown class="pir-eval-wizard__panel is-active" role="tabpanel" id="pir-panel-C02" aria-labelledby="pir-tab-C02" data-eval-panel="C02" >

<div class="pir-evaluation-sample" markdown>

<div class="teaching-eyebrow pir-eval-label">C02</div>

<div class="pir-sample-context" markdown>

<div class="teaching-eyebrow pir-sample-label">Contexto</div>

Un endpoint HTTP crea órdenes. El equipo sabe que “probablemente” habrá una CLI interna el próximo trimestre, pero no existe planificación aprobada ni consumidor concreto.


</div>

<div class="pir-sample-realization" markdown>

<div class="teaching-eyebrow pir-sample-label">Realización a evaluar</div>

Como una segunda entrada es bastante probable, extraería ahora CreateOrder para evitar que HTTP siga siendo dueño de la operación. No introduciría todavía adaptadores específicos para CLI.

</div>

</div>

<form class="pir-eval-form" data-eval-form="C02" novalidate>
  <div class="pir-eval-form__header">
    <div class="pir-eval-form__intro">
      <strong class="pir-eval-form__legend" data-eval-legend>Respuesta de C02, completa para continuar</strong>
      <span>Agrega todas las propiedades que este caso ejercita materialmente.</span>
    </div>
    <div class="pir-eval-form__primary-actions">
      <button type="button" class="md-button pir-eval-form__add" data-add-judgment>Agregar otra propiedad</button>
      <button type="button" class="md-button md-button--primary" data-next-eval disabled>Siguiente caso</button>
    </div>
  </div>

  <div class="pir-eval-form__judgments" data-judgments>
    <div class="pir-eval-judgment" data-judgment>
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
        <label>Confianza <span class="pir-eval-field__optional">opcional</span></label>
        <select data-field="confidence">
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

      <button type="button" class="pir-eval-judgment__remove" data-remove-judgment hidden>Quitar propiedad</button>
    </div>
  </div>

  <div class="pir-eval-field pir-eval-field--wide">
    <label>Nota general <span class="pir-eval-field__optional">opcional</span></label>
    <textarea data-overall-note rows="2" placeholder="Ambigüedad, solapamiento o contexto faltante"></textarea>
  </div>

  <div class="pir-eval-form__status" data-eval-status aria-live="polite">
    Completa todos los campos obligatorios para continuar.
  </div>

  
</form>

</section>

<section markdown class="pir-eval-wizard__panel" role="tabpanel" id="pir-panel-C03" aria-labelledby="pir-tab-C03" data-eval-panel="C03" hidden>

<div class="pir-evaluation-sample" markdown>

<div class="teaching-eyebrow pir-eval-label">C03</div>

<div class="pir-sample-context" markdown>

<div class="teaching-eyebrow pir-sample-label">Contexto</div>

Una aplicación tiene una regla de descuento con cuatro tramos. Los valores cambiaron dos veces este año mediante despliegues pequeños. Producto menciona que “sería cómodo” editarlos sin deploy, pero no hay usuario responsable ni incidente asociado.


</div>

<div class="pir-sample-realization" markdown>

<div class="teaching-eyebrow pir-sample-label">Realización a evaluar</div>

Separaría la política de cálculo porque ya cambia por razones propias. Dejaría los valores en código por ahora; la configurabilidad todavía no tiene evidencia suficiente.

</div>

</div>

<form class="pir-eval-form" data-eval-form="C03" novalidate>
  <div class="pir-eval-form__header">
    <div class="pir-eval-form__intro">
      <strong class="pir-eval-form__legend" data-eval-legend>Respuesta de C03, completa para continuar</strong>
      <span>Agrega todas las propiedades que este caso ejercita materialmente.</span>
    </div>
    <div class="pir-eval-form__primary-actions">
      <button type="button" class="md-button pir-eval-form__add" data-add-judgment>Agregar otra propiedad</button>
      <button type="button" class="md-button md-button--primary" data-next-eval disabled>Siguiente caso</button>
    </div>
  </div>

  <div class="pir-eval-form__judgments" data-judgments>
    <div class="pir-eval-judgment" data-judgment>
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
        <label>Confianza <span class="pir-eval-field__optional">opcional</span></label>
        <select data-field="confidence">
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

      <button type="button" class="pir-eval-judgment__remove" data-remove-judgment hidden>Quitar propiedad</button>
    </div>
  </div>

  <div class="pir-eval-field pir-eval-field--wide">
    <label>Nota general <span class="pir-eval-field__optional">opcional</span></label>
    <textarea data-overall-note rows="2" placeholder="Ambigüedad, solapamiento o contexto faltante"></textarea>
  </div>

  <div class="pir-eval-form__status" data-eval-status aria-live="polite">
    Completa todos los campos obligatorios para continuar.
  </div>

  <div class="pir-eval-form__actions">
    <button type="button" class="md-button" data-prev-eval>Anterior</button>
  </div>
</form>

</section>

<section markdown class="pir-eval-wizard__panel" role="tabpanel" id="pir-panel-C06" aria-labelledby="pir-tab-C06" data-eval-panel="C06" hidden>

<div class="pir-evaluation-sample" markdown>

<div class="teaching-eyebrow pir-eval-label">C06</div>

<div class="pir-sample-context" markdown>

<div class="teaching-eyebrow pir-sample-label">Contexto</div>

La lección original no enseña Domain Events. El estudiante pregunta si separar “orden creada” podría ayudar a notificar a varios consumidores.


</div>

<div class="pir-sample-realization" markdown>

<div class="teaching-eyebrow pir-sample-label">Realización a evaluar</div>

Podemos explorar Domain Events como extensión externa. No era una obligación de la lección original, pero sirve para estudiar qué ocurre cuando varias reacciones dependen de un hecho de dominio. Eso no significa que la trayectoria original estuviera “llevando” necesariamente a Domain Events.

</div>

</div>

<form class="pir-eval-form" data-eval-form="C06" novalidate>
  <div class="pir-eval-form__header">
    <div class="pir-eval-form__intro">
      <strong class="pir-eval-form__legend" data-eval-legend>Respuesta de C06, completa para continuar</strong>
      <span>Agrega todas las propiedades que este caso ejercita materialmente.</span>
    </div>
    <div class="pir-eval-form__primary-actions">
      <button type="button" class="md-button pir-eval-form__add" data-add-judgment>Agregar otra propiedad</button>
      <button type="button" class="md-button md-button--primary" data-next-eval disabled>Siguiente caso</button>
    </div>
  </div>

  <div class="pir-eval-form__judgments" data-judgments>
    <div class="pir-eval-judgment" data-judgment>
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
        <label>Confianza <span class="pir-eval-field__optional">opcional</span></label>
        <select data-field="confidence">
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

      <button type="button" class="pir-eval-judgment__remove" data-remove-judgment hidden>Quitar propiedad</button>
    </div>
  </div>

  <div class="pir-eval-field pir-eval-field--wide">
    <label>Nota general <span class="pir-eval-field__optional">opcional</span></label>
    <textarea data-overall-note rows="2" placeholder="Ambigüedad, solapamiento o contexto faltante"></textarea>
  </div>

  <div class="pir-eval-form__status" data-eval-status aria-live="polite">
    Completa todos los campos obligatorios para continuar.
  </div>

  <div class="pir-eval-form__actions">
    <button type="button" class="md-button" data-prev-eval>Anterior</button>
  </div>
</form>

</section>

<section markdown class="pir-eval-wizard__panel" role="tabpanel" id="pir-panel-C13" aria-labelledby="pir-tab-C13" data-eval-panel="C13" hidden>

<div class="pir-evaluation-sample" markdown>

<div class="teaching-eyebrow pir-eval-label">C13</div>

<div class="pir-sample-context" markdown>

<div class="teaching-eyebrow pir-sample-label">Contexto</div>

Una explicación estática describe por qué una regla de cálculo se separó del endpoint luego de varios cambios de negocio. No hay interacción con estudiante ni rondas.


<div class="teaching-card">
<span class="teaching-eyebrow">Propiedad a considerar</span>
<strong>TST-006 — Una aclaración no avanza el escenario.</strong>
<span>Esta propiedad viene indicada explícitamente en el paquete humano de validación.</span>
</div>

</div>

<div class="pir-sample-realization" markdown>

<div class="teaching-eyebrow pir-sample-label">Realización a evaluar</div>

La explicación reconstruye la presión, muestra el cambio mínimo y recién después nombra la separación como una distinción entre política y mecanismo.

</div>

</div>

<form class="pir-eval-form" data-eval-form="C13" novalidate>
  <div class="pir-eval-form__header">
    <div class="pir-eval-form__intro">
      <strong class="pir-eval-form__legend" data-eval-legend>Respuesta de C13, completa para continuar</strong>
      <span>Agrega todas las propiedades que este caso ejercita materialmente.</span>
    </div>
    <div class="pir-eval-form__primary-actions">
      <button type="button" class="md-button pir-eval-form__add" data-add-judgment>Agregar otra propiedad</button>
      <button type="button" class="md-button md-button--primary" data-next-eval disabled>Siguiente caso</button>
    </div>
  </div>

  <div class="pir-eval-form__judgments" data-judgments>
    <div class="pir-eval-judgment" data-judgment>
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
            <option value="TST-006" selected>TST-006 — Una aclaración no avanza el escenario</option>
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
        <label>Confianza <span class="pir-eval-field__optional">opcional</span></label>
        <select data-field="confidence">
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

      <button type="button" class="pir-eval-judgment__remove" data-remove-judgment hidden>Quitar propiedad</button>
    </div>
  </div>

  <div class="pir-eval-field pir-eval-field--wide">
    <label>Nota general <span class="pir-eval-field__optional">opcional</span></label>
    <textarea data-overall-note rows="2" placeholder="Ambigüedad, solapamiento o contexto faltante"></textarea>
  </div>

  <div class="pir-eval-form__status" data-eval-status aria-live="polite">
    Completa todos los campos obligatorios para continuar.
  </div>

  <div class="pir-eval-form__actions">
    <button type="button" class="md-button" data-prev-eval>Anterior</button>
  </div>
</form>

</section>

<section markdown class="pir-eval-wizard__panel" role="tabpanel" id="pir-panel-C14" aria-labelledby="pir-tab-C14" data-eval-panel="C14" hidden>

<div class="pir-evaluation-sample" markdown>

<div class="teaching-eyebrow pir-eval-label">C14</div>

<div class="pir-sample-context" markdown>

<div class="teaching-eyebrow pir-sample-label">Contexto</div>

En modo Otro caso, se cambia de órdenes a reservas hoteleras para mostrar la misma secuencia causal. No existe selección automática de operación.


<div class="teaching-card">
<span class="teaching-eyebrow">Propiedad a considerar</span>
<strong>RTE-003 — Otro caso compatible.</strong>
<span>Esta propiedad viene indicada explícitamente en el paquete humano de validación.</span>
</div>

</div>

<div class="pir-sample-realization" markdown>

<div class="teaching-eyebrow pir-sample-label">Realización a evaluar</div>

La experiencia usa reservas, conserva las mismas relaciones causales y no copia literalmente el caso de órdenes.

</div>

</div>

<form class="pir-eval-form" data-eval-form="C14" novalidate>
  <div class="pir-eval-form__header">
    <div class="pir-eval-form__intro">
      <strong class="pir-eval-form__legend" data-eval-legend>Respuesta de C14, completa para continuar</strong>
      <span>Agrega todas las propiedades que este caso ejercita materialmente.</span>
    </div>
    <div class="pir-eval-form__primary-actions">
      <button type="button" class="md-button pir-eval-form__add" data-add-judgment>Agregar otra propiedad</button>
      <button type="button" class="md-button md-button--primary" data-next-eval disabled>Siguiente caso</button>
    </div>
  </div>

  <div class="pir-eval-form__judgments" data-judgments>
    <div class="pir-eval-judgment" data-judgment>
      <div class="pir-eval-field">
        <label>Propiedad <span aria-hidden="true">*</span></label>
        <select data-field="property" required>
          <option value="">Selecciona…</option>
          <optgroup label="RTE — Enrutamiento">
            <option value="RTE-001">RTE-001 — Profundizar compatible</option>
            <option value="RTE-002">RTE-002 — Aplicarlo a mi caso compatible</option>
            <option value="RTE-003" selected>RTE-003 — Otro caso compatible</option>
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
        <label>Confianza <span class="pir-eval-field__optional">opcional</span></label>
        <select data-field="confidence">
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

      <button type="button" class="pir-eval-judgment__remove" data-remove-judgment hidden>Quitar propiedad</button>
    </div>
  </div>

  <div class="pir-eval-field pir-eval-field--wide">
    <label>Nota general <span class="pir-eval-field__optional">opcional</span></label>
    <textarea data-overall-note rows="2" placeholder="Ambigüedad, solapamiento o contexto faltante"></textarea>
  </div>

  <div class="pir-eval-form__status" data-eval-status aria-live="polite">
    Completa todos los campos obligatorios para continuar.
  </div>

  <div class="pir-eval-form__actions">
    <button type="button" class="md-button" data-prev-eval>Anterior</button>
  </div>
</form>

</section>

<section markdown class="pir-eval-wizard__panel" role="tabpanel" id="pir-panel-C18" aria-labelledby="pir-tab-C18" data-eval-panel="C18" hidden>

<div class="pir-evaluation-sample" markdown>

<div class="teaching-eyebrow pir-eval-label">C18</div>

<div class="pir-sample-context" markdown>

<div class="teaching-eyebrow pir-sample-label">Contexto</div>

El estudiante pregunta qué significa “persistencia interfiere”. El tutor responde la aclaración sin avanzar de ronda, pero afirma como ejemplo que “cuando pase esto, normalmente terminarás usando Repository”.


</div>

<div class="pir-sample-realization" markdown>

<div class="teaching-eyebrow pir-sample-label">Realización a evaluar</div>

Interferencia significa que cambios propios de persistencia obligan a modificar una operación cuya política no cambió. No avanzamos todavía de ronda. Como referencia, una respuesta frecuente a esa presión es Repository, aunque aún no estamos decidiendo si aquí hace falta.

</div>

</div>

<form class="pir-eval-form" data-eval-form="C18" novalidate>
  <div class="pir-eval-form__header">
    <div class="pir-eval-form__intro">
      <strong class="pir-eval-form__legend" data-eval-legend>Respuesta de C18, completa para continuar</strong>
      <span>Agrega todas las propiedades que este caso ejercita materialmente.</span>
    </div>
    <div class="pir-eval-form__primary-actions">
      <button type="button" class="md-button pir-eval-form__add" data-add-judgment>Agregar otra propiedad</button>
      <button type="button" class="md-button md-button--primary" data-next-eval disabled>Siguiente caso</button>
    </div>
  </div>

  <div class="pir-eval-form__judgments" data-judgments>
    <div class="pir-eval-judgment" data-judgment>
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
        <label>Confianza <span class="pir-eval-field__optional">opcional</span></label>
        <select data-field="confidence">
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

      <button type="button" class="pir-eval-judgment__remove" data-remove-judgment hidden>Quitar propiedad</button>
    </div>
  </div>

  <div class="pir-eval-field pir-eval-field--wide">
    <label>Nota general <span class="pir-eval-field__optional">opcional</span></label>
    <textarea data-overall-note rows="2" placeholder="Ambigüedad, solapamiento o contexto faltante"></textarea>
  </div>

  <div class="pir-eval-form__status" data-eval-status aria-live="polite">
    Completa todos los campos obligatorios para continuar.
  </div>

  <div class="pir-eval-form__actions">
    <button type="button" class="md-button" data-prev-eval>Anterior</button>
  </div>
</form>

</section>

<section markdown class="pir-eval-wizard__panel" role="tabpanel" id="pir-panel-C23" aria-labelledby="pir-tab-C23" data-eval-panel="C23" hidden>

<div class="pir-evaluation-sample" markdown>

<div class="teaching-eyebrow pir-eval-label">C23</div>

<div class="pir-sample-context" markdown>

<div class="teaching-eyebrow pir-sample-label">Contexto</div>

Aparece una segunda entrada real que necesita ejecutar la misma operación. HTTP contiene hoy validación, cálculo y guardado.


</div>

<div class="pir-sample-realization" markdown>

<div class="teaching-eyebrow pir-sample-label">Realización a evaluar</div>

Como ya tenemos dos entradas, movería toda la lógica actual a una clase ApplicationService, incluyendo cada validación y detalle de persistencia tal como están. La capa Application es el destino correcto, así que no hace falta distinguir todavía qué parte es política y qué parte es mecanismo.

</div>

</div>

<form class="pir-eval-form" data-eval-form="C23" novalidate>
  <div class="pir-eval-form__header">
    <div class="pir-eval-form__intro">
      <strong class="pir-eval-form__legend" data-eval-legend>Respuesta de C23, completa para continuar</strong>
      <span>Agrega todas las propiedades que este caso ejercita materialmente.</span>
    </div>
    <div class="pir-eval-form__primary-actions">
      <button type="button" class="md-button pir-eval-form__add" data-add-judgment>Agregar otra propiedad</button>
      <button type="button" class="md-button md-button--primary" data-next-eval disabled>Siguiente caso</button>
    </div>
  </div>

  <div class="pir-eval-form__judgments" data-judgments>
    <div class="pir-eval-judgment" data-judgment>
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
        <label>Confianza <span class="pir-eval-field__optional">opcional</span></label>
        <select data-field="confidence">
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

      <button type="button" class="pir-eval-judgment__remove" data-remove-judgment hidden>Quitar propiedad</button>
    </div>
  </div>

  <div class="pir-eval-field pir-eval-field--wide">
    <label>Nota general <span class="pir-eval-field__optional">opcional</span></label>
    <textarea data-overall-note rows="2" placeholder="Ambigüedad, solapamiento o contexto faltante"></textarea>
  </div>

  <div class="pir-eval-form__status" data-eval-status aria-live="polite">
    Completa todos los campos obligatorios para continuar.
  </div>

  <div class="pir-eval-form__actions">
    <button type="button" class="md-button" data-prev-eval>Anterior</button>
  </div>
</form>

</section>

<section markdown class="pir-eval-wizard__panel" role="tabpanel" id="pir-panel-C31" aria-labelledby="pir-tab-C31" data-eval-panel="C31" hidden>

<div class="pir-evaluation-sample" markdown>

<div class="teaching-eyebrow pir-eval-label">C31</div>

<div class="pir-sample-context" markdown>

<div class="teaching-eyebrow pir-sample-label">Contexto</div>

El tutor había supuesto erróneamente que existían múltiples productos por orden. El estudiante corrige la inconsistencia.


</div>

<div class="pir-sample-realization" markdown>

<div class="teaching-eyebrow pir-sample-label">Realización a evaluar</div>

Correcto, esa capacidad no estaba establecida. La retiro y no la usaré como evidencia. Volvamos al escenario anterior y decide sólo con la presión que sí conocemos.

</div>

</div>

<form class="pir-eval-form" data-eval-form="C31" novalidate>
  <div class="pir-eval-form__header">
    <div class="pir-eval-form__intro">
      <strong class="pir-eval-form__legend" data-eval-legend>Respuesta de C31, completa para continuar</strong>
      <span>Agrega todas las propiedades que este caso ejercita materialmente.</span>
    </div>
    <div class="pir-eval-form__primary-actions">
      <button type="button" class="md-button pir-eval-form__add" data-add-judgment>Agregar otra propiedad</button>
      <button type="button" class="md-button md-button--primary" data-next-eval disabled>Finalizar evaluación</button>
    </div>
  </div>

  <div class="pir-eval-form__judgments" data-judgments>
    <div class="pir-eval-judgment" data-judgment>
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
        <label>Confianza <span class="pir-eval-field__optional">opcional</span></label>
        <select data-field="confidence">
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

      <button type="button" class="pir-eval-judgment__remove" data-remove-judgment hidden>Quitar propiedad</button>
    </div>
  </div>

  <div class="pir-eval-field pir-eval-field--wide">
    <label>Nota general <span class="pir-eval-field__optional">opcional</span></label>
    <textarea data-overall-note rows="2" placeholder="Ambigüedad, solapamiento o contexto faltante"></textarea>
  </div>

  <div class="pir-eval-form__status" data-eval-status aria-live="polite">
    Completa todos los campos obligatorios para continuar.
  </div>

  <div class="pir-eval-form__actions">
    <button type="button" class="md-button" data-prev-eval>Anterior</button>
  </div>
</form>

</section>

</div>

---

## 4. Respuesta y entrega {#respuesta-evaluacion}

<div class="pir-eval-output" data-eval-output>
  <div class="pir-eval-output__header">
    <div>
      <strong>Respuesta consolidada</strong>
      <span data-output-status>Completa los 8 casos para generar la respuesta final.</span>
    </div>
    <button type="button" class="md-button md-button--primary" data-copy-eval-output disabled>Copiar respuesta</button>
  </div>

  <textarea class="pir-eval-output__text" data-eval-output-text readonly hidden aria-label="Respuesta consolidada de la evaluación"></textarea>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">Entrega privada</span>
<strong>Envía los 8 casos y el perfil del evaluador a Hernán</strong>
<span>Cuando hayas terminado, copia la respuesta consolidada y envíala de forma privada junto con el perfil completado.</span>
</div>
