---
title: PIR-STU-001 — Evaluación humana Phase 0b
hide:
  - navigation
  - footer
hide_support: true
---

# PIR-STU-001 — Evaluación humana Phase 0b

**Paquete para evaluadores humanos — versión v1**

Esta página contiene el paquete completo para realizar la evaluación humana de PIR-STU-001 Phase 0b.

!!! info "Entrega privada"
    Cuando termines, envía el perfil y las respuestas **de forma privada a Hernán**, por el canal mediante el cual recibiste este enlace.

    Mientras la evaluación permanezca abierta, no se publicarán aquí respuestas, resultados ni información adicional sobre la construcción interna de las muestras.



---

**Paquete autocontenido para evaluación humana — versión v1**

Este archivo está dirigido a evaluadores y es autocontenido.

Excluye deliberadamente claves de respuesta, identidades de pares, notas de construcción de mutantes, mapeos ocultos y resultados de evaluadores anteriores.

Por favor, completa la evaluación de manera independiente.

---

## 1. Introducción {#introduccion}

**Introducción para evaluación humana — versión v1**

Gracias por ayudar a evaluar un instrumento de investigación sobre experiencias de enseñanza generadas con IA.

### Qué estás evaluando

<div class="teaching-grid teaching-grid--2" markdown>

<div class="teaching-card">
<span class="teaching-eyebrow">Material</span>
<strong>16 realizaciones breves</strong>
<span>Leerás 16 realizaciones de enseñanza sobre arquitectura de software.</span>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">Tu tarea</span>
<strong>Evaluar obligaciones observables</strong>
<span>Decide si cada realización preserva, viola, deja ambiguas o no ejercita las obligaciones definidas por el contrato.</span>
</div>

</div>

El estudio **no** pregunta:

<div class="teaching-grid teaching-grid--3 teaching-grid--stack-medium" markdown>

<div class="teaching-card">
<span class="teaching-eyebrow">Preferencia</span>
<strong>No evalúes si te gusta la arquitectura</strong>
<span>No importa si personalmente prefieres la arquitectura propuesta.</span>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">Estilo</span>
<strong>No evalúes si el código es ideal</strong>
<span>El estilo de código no es el objeto de esta evaluación.</span>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">Receta</span>
<strong>No compares con una forma memorizada</strong>
<span>No evalúes si la realización coincide con una receta memorizada de Clean Architecture.</span>
</div>

</div>

En cambio, recibirás un contrato explícito de conformidad que describe obligaciones pedagógicas observables.

### Categorías de respuesta

<div class="teaching-grid teaching-grid--2" markdown>

<div class="teaching-card">
<span class="teaching-eyebrow">PASS</span>
<strong>La obligación se preserva</strong>
<span>La realización mantiene de forma observable la obligación evaluada.</span>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">VIOLATION</span>
<strong>La realización la contradice</strong>
<span>Existe evidencia observable que contradice la obligación evaluada.</span>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">AMBIGUOUS</span>
<strong>La evidencia no alcanza</strong>
<span>La evidencia disponible es insuficiente para decidir de manera confiable.</span>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">N/A</span>
<strong>La propiedad no se ejercita</strong>
<span>La muestra no crea una situación donde esa propiedad pueda juzgarse significativamente.</span>
</div>

</div>

Todo juicio distinto de N/A debe señalar el fragmento de evidencia útil más pequeño posible.

!!! info "El contrato es la autoridad"
    Tu conocimiento profesional puede ayudarte a entender el escenario, pero el contrato es la autoridad para esta tarea.

    Una recomendación técnicamente razonable aun puede violar el contrato pedagógico. Una decisión arquitectónica no estándar aun puede ser conforme.

!!! warning "Evalúa de forma independiente"
    Evalúa cada muestra de manera independiente.

    Puede haber o no relaciones entre las muestras. No intentes buscarlas ni inferir cuántas son "buenas" o "malas".

    Durante la evaluación, no busques PIR-STU-001 ni materiales relacionados fuera de esta página. Todo el contexto necesario para completar la tarea está incluido aquí.

    No compares tus juicios con los de otro evaluador hasta que todos los conjuntos de respuestas hayan sido enviados y congelados.


---

## 2. Perfil del evaluador {#perfil-evaluador}

Antes de comenzar, copia esta plantilla. Incluye los antecedentes, nivel de experiencia y condiciones de evaluación que debes completar y enviar junto con tus respuestas.

<div class="teaching-copy-template" data-teaching-copy-template>
  <div class="teaching-copy-template__body">
    <strong>Perfil del evaluador</strong>
    <span>Copia la plantilla, complétala y envíala junto con tu evaluación.</span>
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

¿Conversaste alguna muestra con otra persona antes del envío?
[ ] sí
[ ] no

¿Usaste un asistente de IA durante la evaluación?
[ ] sí
[ ] no

Si respondiste que sí, describe cómo:

Cualquier otra condición que pueda haber afectado la evaluación:
</textarea>
  <span class="teaching-copy-template__status" data-copy-template-status aria-live="polite"></span>
</div>


---

## 3. Contrato, instrucciones y muestras ciegas

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

=== "RTE — Enrutamiento"

    <section class="pir-contract-family pir-contract-family--tab" markdown>

    <div class="teaching-card">
    <span class="teaching-eyebrow">Qué protege esta familia</span>
    <strong>Compatibilidad entre la necesidad del estudiante y la ruta elegida</strong>
    <span>El enrutamiento se evalúa por la necesidad concreta del estudiante; su selección y la conformidad de la realización son juicios separados.</span>
    </div>

    <div class="teaching-grid teaching-grid--2 teaching-grid--lateral-badges" markdown>

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

=== "CAU — Presión causal y cambio mínimo"

    <section class="pir-contract-family pir-contract-family--tab" markdown>

    <div class="teaching-card">
    <span class="teaching-eyebrow">Qué protege esta familia</span>
    <strong>Que la arquitectura responda a presión observable</strong>
    <span>Una separación debe ganarse por la evidencia presente y responder con el cambio mínimo que esa presión justifica.</span>
    </div>

    <div class="teaching-grid teaching-grid--2 teaching-grid--lateral-badges" markdown>

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

=== "STP — Detención y ausencia de cambio"

    <section class="pir-contract-family pir-contract-family--tab" markdown>

    <div class="teaching-card">
    <span class="teaching-eyebrow">Qué protege esta familia</span>
    <strong>Que detenerse o no cambiar siga siendo una decisión válida</strong>
    <span>La trayectoria no necesita avanzar hacia una forma final cuando la presión termina o la solución actual todavía la absorbe.</span>
    </div>

    <div class="teaching-grid teaching-grid--2 teaching-grid--lateral-badges" markdown>

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

=== "UNC — Incertidumbre y evidencia"

    <section class="pir-contract-family pir-contract-family--tab" markdown>

    <div class="teaching-card">
    <span class="teaching-eyebrow">Qué protege esta familia</span>
    <strong>Que una hipótesis no se convierta prematuramente en arquitectura</strong>
    <span>La incertidumbre material debe preservarse hasta que exista evidencia suficiente para sostener una decisión.</span>
    </div>

    <div class="teaching-grid teaching-grid--2 teaching-grid--lateral-badges" markdown>

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

=== "SCP — Alcance"

    <section class="pir-contract-family pir-contract-family--tab" markdown>

    <div class="teaching-card">
    <span class="teaching-eyebrow">Qué protege esta familia</span>
    <strong>Que las extensiones externas sigan siendo reconocibles como extensiones</strong>
    <span>Profundizar fuera del alcance original puede ser válido, pero el cruce debe ser explícito y no reescribir retroactivamente la lección.</span>
    </div>

    <div class="teaching-grid teaching-grid--2 teaching-grid--lateral-badges" markdown>

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

=== "VAR — Variación permitida"

    <section class="pir-contract-family pir-contract-family--tab" markdown>

    <div class="teaching-card">
    <span class="teaching-eyebrow">Qué protege esta familia</span>
    <strong>Que conformidad no signifique copiar una solución publicada</strong>
    <span>Una alternativa puede ser conforme si responde a la presión y conserva las obligaciones, aunque su estructura concreta sea distinta.</span>
    </div>

    <div class="teaching-grid teaching-grid--2 teaching-grid--lateral-badges" markdown>

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

=== "TST — Ponme a prueba"

    <section class="pir-contract-family pir-contract-family--tab" markdown>

    <div class="teaching-card">
    <span class="teaching-eyebrow">Qué protege esta familia</span>
    <strong>Que el estudiante pueda decidir antes de conocer la trayectoria</strong>
    <span>La prueba debe avanzar por presiones progresivas, evaluar críticamente las decisiones y reparar el escenario cuando sea necesario.</span>
    </div>

    <div class="teaching-grid teaching-grid--2 teaching-grid--lateral-badges" markdown>

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

=== "POL — Política y mecanismo"

    <section class="pir-contract-family pir-contract-family--tab" markdown>

    <div class="teaching-card">
    <span class="teaching-eyebrow">Qué protege esta familia</span>
    <strong>Que un mecanismo no se convierta automáticamente en una frontera</strong>
    <span>La separación debe responder a interferencia real entre política y mecanismo, sin forzar desde temprano cómo se realizará el mecanismo futuro.</span>
    </div>

    <div class="teaching-grid teaching-grid--2 teaching-grid--lateral-badges" markdown>

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

**PIR-STU-001 — Instrucciones para el evaluador v1**

Estado: preparado para evaluación ciega.  
Versión del contrato: contrato de conformidad de Clean Architecture v1.

#### Propósito

Evaluarás un conjunto de realizaciones de enseñanza contra un contrato explícito de conformidad.

Tu tarea **no** es decidir si personalmente prefieres la arquitectura, el estilo de explicación o la implementación.

Tu tarea es:

> identificar qué obligaciones pedagógicas observables se preservan, se violan, quedan ambiguas o no resultan aplicables en cada realización.

Cada muestra debe evaluarse de manera independiente.

No compares las muestras entre sí ni infieras que algunas fueron alteradas intencionalmente.

#### Qué recibes

Para cada muestra recibirás:

- un ID neutral de muestra;
- contexto suficiente para comprender la situación de enseñanza;
- una realización para evaluar;
- el contrato de conformidad.

**No** recibirás:

- una clave de respuestas;
- la identidad del fixture de origen;
- si se espera que una muestra sea conforme;
- ninguna versión emparejada de la muestra;
- una propiedad objetivo.

#### Juicios permitidos

Para cada propiedad del contrato que sea razonablemente relevante para la muestra, utiliza exactamente un juicio:

##### PASS
La realización preserva la obligación observable descrita por la propiedad.

##### VIOLATION
La realización contiene evidencia observable que contradice la propiedad.

##### AMBIGUOUS
El contexto o la redacción disponibles son insuficientes para decidir de manera confiable entre PASS y VIOLATION.

Usa AMBIGUOUS cuando la incertidumbre sea real. No fuerces una respuesta binaria.

##### N/A
La propiedad no se ejercita de manera significativa en la muestra.

N/A no significa "no noté nada". Significa que la muestra no crea una situación en la que esa propiedad pueda evaluarse razonablemente.

#### Requisito de evidencia

Todo juicio PASS, VIOLATION o AMBIGUOUS debe incluir el fragmento útil de evidencia más pequeño de la realización o el contexto.

Prefiere una cita exacta breve o una referencia precisa a la oración relevante.

No justifiques un juicio únicamente con conocimiento general de arquitectura.

#### Regla de evaluación

Evalúa lo que la realización **realmente hace**, no lo que podría haber querido decir.

Ejemplos:

- No infieras cautela ausente que no está presente.
- No infieras una presión arquitectónica no declarada.
- No trates automáticamente una recomendación técnicamente razonable como conforme.
- No trates automáticamente la simplicidad arquitectónica como conforme.
- No exijas redacción literal del contrato si la misma obligación se preserva semánticamente.

#### Conocimiento de arquitectura

El conocimiento general de arquitectura de software puede ayudarte a comprender el escenario, pero no debe imponerse sobre el contrato.

En particular, no asumas que alguno de estos elementos sea automáticamente deseable o requerido:

- Repository Pattern;
- Unit of Work;
- CQRS;
- MediatR;
- DDD completo;
- contenedores de inyección de dependencias;
- una interfaz por clase;
- separación Domain/Application;
- ports/adapters.

Su presencia o ausencia sólo importa cuando el contrato vuelve relevante la presión subyacente o la obligación pedagógica.

#### Distinciones importantes

Mantén separadas estas distinciones cuando sea posible:

```text
corrección técnica
!=
conformidad pedagógica

conformidad
!=
identidad literal de salida

necesidad futura plausible
!=
presión actual observable

extensión externa
!=
afirmación retroactiva de que la lección original lo enseñaba

cuestionar al estudiante
!=
rechazar por defecto una respuesta no canónica
```

#### Evaluación independiente

Evalúa las muestras una por una.

No:

- busques pares coincidentes;
- asumas que la mitad de las muestras son válidas y la mitad inválidas;
- infieras un balance esperado de clases;
- revises juicios anteriores para hacer que el conjunto completo parezca simétrico;
- uses los juicios de otro evaluador.

#### Formato de salida

Para cada muestra, devuelve:

```text
Muestra: EVAL-###

Propiedad: <PROPERTY-ID>
Juicio: PASS | VIOLATION | AMBIGUOUS | N/A
Evidencia: "<fragmento útil más pequeño>"
Fundamento: <1-3 oraciones>

Propiedad: <PROPERTY-ID>
...
```

No necesitas listar todas las propiedades del contrato completo cuando sean claramente irrelevantes.

Sin embargo, debes incluir toda propiedad que la muestra ejercite materialmente.

Al final de cada muestra agrega:

```text
Nota general:
<nota concisa opcional sobre ambigüedad, solapamiento o contexto faltante>
```

No produzcas un único puntaje global.

#### Confianza

Opcionalmente agrega:

```text
Confianza: alta | media | baja
```

La confianza se refiere a tu confianza en la clasificación, no a cuánto te gusta o disgusta la realización.

#### Condición de término

Una vez evaluadas todas las muestras suministradas, detente.

No intentes reconstruir emparejamientos ocultos, inferir una clave de respuestas ni rediseñar el contrato salvo que se solicite explícitamente después de la evaluación.

---

### 3.3 Muestras ciegas {#muestras}

<article class="pir-evaluation-sample" markdown>

#### EVAL-001

<div class="pir-sample-context" markdown>

##### Contexto

Las reglas de descuento cambiaron varias veces. El estudiante propone extraer calcularTotal(...) y además considera hacer configurables los pares cantidad/descuento para que un usuario pueda modificarlos. Aún no se sabe quién necesita cambiar esos valores, cuánto cuesta hoy hacerlo ni si existe una necesidad real de evitar despliegues.

</div>

<div class="pir-sample-realization" markdown>

##### Realización a evaluar

Sí, tiene mucho sentido. Como los descuentos cambian seguido, lo mejor es hacerlos configurables para que el usuario administre los tramos sin tocar código. Podemos guardar cantidad mínima y descuento en una tabla o exponerlos en un panel, y así los próximos cambios no requerirán modificar la aplicación.</div>

</article>

---

<article class="pir-evaluation-sample" markdown>

#### EVAL-002

<div class="pir-sample-context" markdown>

##### Contexto

El estudiante quiere profundizar en la tensión donde una orden se guarda correctamente pero una notificación por webhook puede fallar después. La lección original hace visible esa tensión, pero no enseña Transactional Outbox, retries, idempotencia ni mensajería como contenido canónico.

</div>

<div class="pir-sample-realization" markdown>

##### Realización a evaluar

────────────────────────────────────────
FUERA DEL ALCANCE DE LA LECCIÓN ORIGINAL
────────────────────────────────────────

Lo siguiente no forma parte del contenido pedagógico definido por la lección original. Se incluye para profundizar en la tensión que planteaste.

Una respuesta posible es Transactional Outbox: persistir la orden y la intención de notificar dentro de la misma transacción local, y procesar esa intención después. Esto abre además preguntas sobre retries, duplicados e idempotencia.</div>

</article>

---

<article class="pir-evaluation-sample" markdown>

#### EVAL-003

<div class="pir-sample-context" markdown>

##### Contexto

El estudiante ya separó la política de cálculo del endpoint HTTP. Ahora aparece un marketplace que envía órdenes con otro formato JSON pero necesita crear órdenes usando las mismas reglas de validación y cálculo. La exploración es “Ponme a prueba”: el estudiante debe decidir antes de conocer la siguiente transición.

</div>

<div class="pir-sample-realization" markdown>

##### Realización a evaluar

Ahora aparece una integración con un marketplace. Envía órdenes en otro formato de JSON y quiere crear órdenes usando las mismas reglas de validación y cálculo que HTTP.

Este es el punto donde conviene extraer un caso de uso compartido, dejando HTTP y Marketplace como adaptadores de entrada. Más adelante esta misma forma nos permitirá llegar a puertos y adaptadores.

¿Cómo implementarías esa separación y por qué?</div>

</article>

---

<article class="pir-evaluation-sample" markdown>

#### EVAL-004

<div class="pir-sample-context" markdown>

##### Contexto

Una aplicación interna muy pequeña registra ajustes manuales de inventario. Sólo existe una entrada web. Las validaciones son cortas, PostgreSQL funciona bien y se usa directamente. No existe un segundo mecanismo de entrada, no hay planes actuales de cambiar PostgreSQL, nadie necesita reutilizar las reglas y el flujo sigue siendo fácil de modificar. El estudiante pregunta si conviene introducir ahora un caso de uso, interfaces de persistencia o una separación Domain/Application.

</div>

<div class="pir-sample-realization" markdown>

##### Realización a evaluar

La solución actual sigue siendo defendible. PostgreSQL existe, pero hoy no está interfiriendo con la operación. Con la evidencia disponible, el cambio mínimo es ninguno. No introduciría un caso de uso, una interfaz de repositorio ni Domain/Application sólo porque podrían ser útiles en el futuro. Si más adelante aparece otra entrada, la persistencia empieza a interferir o las reglas adquieren otra razón de cambio, entonces volvería a evaluar la separación.</div>

</article>

---

<article class="pir-evaluation-sample" markdown>

#### EVAL-005

<div class="pir-sample-context" markdown>

##### Contexto

Una aplicación web crea solicitudes de compra. Se sabe que otro sistema también deberá crear solicitudes, pero todavía no está definido si llamará una API, escribirá una base compartida o enviará archivos. Tampoco se sabe si ambos canales compartirán exactamente las mismas validaciones o el mismo proceso posterior.

</div>

<div class="pir-sample-realization" markdown>

##### Realización a evaluar

Dado que el segundo sistema también crea solicitudes, modelaría desde ahora la integración como una API que invoque exactamente el mismo CreatePurchaseRequest. Haría que ambos canales compartan las mismas validaciones y el mismo proceso posterior, y crearía el adaptador HTTP correspondiente. Así evitamos duplicación desde el inicio y dejamos clara la frontera de entrada.</div>

</article>

---

<article class="pir-evaluation-sample" markdown>

#### EVAL-006

<div class="pir-sample-context" markdown>

##### Contexto

Durante un ejercicio, el tutor introdujo “combinaciones de productos” como parte de una regla de descuento. El estudiante señala que el estado previamente establecido sólo permitía un producto y no tenía una orden existente ni otra estructura que justificara combinar productos.

</div>

<div class="pir-sample-realization" markdown>

##### Realización a evaluar

Sí, ahí detectaste un problema real en el escenario que te planteé. Con el estado que habíamos establecido, “combinaciones de productos” introduce una capacidad no sustentada. Retiro esa parte. Mantengamos la ronda enfocada sólo en una regla de descuento por cantidad que ha cambiado varias veces y continuemos desde ahí, sin usar combinaciones de productos como evidencia.</div>

</article>

---

<article class="pir-evaluation-sample" markdown>

#### EVAL-007

<div class="pir-sample-context" markdown>

##### Contexto

Una herramienta CLI lee un archivo de texto, aplica reglas de validación y genera otro archivo. Hay una sola entrada, el filesystem local es estable y no existe necesidad de variar lectura/escritura. Las reglas de validación sí crecieron hasta adquirir significado propio y ya fueron separadas de los detalles de archivos. No han aparecido otras presiones.

</div>

<div class="pir-sample-realization" markdown>

##### Realización a evaluar

Una vez separadas las reglas de validación, conviene completar la evolución arquitectónica. Ocultaría el filesystem detrás de IFileReader e IFileWriter, movería la operación a un caso de uso y agregaría adaptadores para dejar preparado el sistema para una futura API u otro mecanismo de almacenamiento. Aunque esas necesidades todavía no existan, hacerlo ahora evita rehacer la estructura después.</div>

</article>

---

<article class="pir-evaluation-sample" markdown>

#### EVAL-008

<div class="pir-sample-context" markdown>

##### Contexto

CrearOrden persiste directamente en SQLite. Los tests suelen requerir SQLite y ya ocurrió una vez que un cambio de detalle de persistencia obligó a modificar CrearOrden, aunque las reglas de creación no cambiaron. El estudiante propone primero mejorar la infraestructura de pruebas y dice que no introduciría una nueva frontera arquitectónica salvo que la interferencia de persistencia se repita.

</div>

<div class="pir-sample-realization" markdown>

##### Realización a evaluar

Tu propuesta es defendible, aunque resuelve principalmente la fricción de pruebas. Mejorar la infraestructura puede hacer los tests más baratos sin cambiar aún la arquitectura. Hay otra señal distinta: un cambio de persistencia ya tocó CrearOrden. Con un solo incidente todavía puedes legítimamente decidir no separar. Si en cambios posteriores la persistencia vuelve a modificar CrearOrden mientras la operación permanece estable, entonces aparecería evidencia más fuerte para separar esa capacidad.</div>

</article>

---

<article class="pir-evaluation-sample" markdown>

#### EVAL-009

<div class="pir-sample-context" markdown>

##### Contexto

El estudiante quiere profundizar en la tensión donde una orden se guarda correctamente pero una notificación por webhook puede fallar después. La lección original hace visible esa tensión, pero no enseña Transactional Outbox, retries, idempotencia ni mensajería como contenido canónico.

</div>

<div class="pir-sample-realization" markdown>

##### Realización a evaluar

La siguiente evolución de Clean Architecture es introducir Transactional Outbox para persistir la orden y la intención de notificar dentro de la misma transacción. Después, un worker puede entregar el webhook y aplicar retries; como eso puede producir duplicados, también conviene introducir idempotencia en el consumidor.</div>

</article>

---

<article class="pir-evaluation-sample" markdown>

#### EVAL-010

<div class="pir-sample-context" markdown>

##### Contexto

Las reglas de descuento cambiaron varias veces. El estudiante propone extraer calcularTotal(...) y además considera hacer configurables los pares cantidad/descuento para que un usuario pueda modificarlos. Aún no se sabe quién necesita cambiar esos valores, cuánto cuesta hoy hacerlo ni si existe una necesidad real de evitar despliegues.

</div>

<div class="pir-sample-realization" markdown>

##### Realización a evaluar

Extraer calcularTotal(...) está bien justificado porque la política de cálculo ya tiene una razón propia para cambiar. En cambio, hacer los tramos configurables todavía es una hipótesis. Antes preguntaría quién necesita modificarlos y qué costo observable tiene el proceso actual. Configuración añade representación, validación y nuevos estados posibles. Podemos separar la política sin decidir todavía si sus parámetros vienen de código, archivo, base de datos o un panel.</div>

</article>

---

<article class="pir-evaluation-sample" markdown>

#### EVAL-011

<div class="pir-sample-context" markdown>

##### Contexto

Una aplicación interna muy pequeña registra ajustes manuales de inventario. Sólo existe una entrada web. Las validaciones son cortas, PostgreSQL funciona bien y se usa directamente. No existe un segundo mecanismo de entrada, no hay planes actuales de cambiar PostgreSQL, nadie necesita reutilizar las reglas y el flujo sigue siendo fácil de modificar. El estudiante pregunta si conviene introducir ahora un caso de uso, interfaces de persistencia o una separación Domain/Application.

</div>

<div class="pir-sample-realization" markdown>

##### Realización a evaluar

Aunque el sistema todavía es pequeño y no presenta dificultades observables, este es un buen momento para prepararlo para crecer. Extraería desde ahora un AdjustInventoryUseCase, definiría un IInventoryAdjustmentRepository con implementación PostgreSQL y separaría Domain/Application. Hacerlo temprano reduce el acoplamiento y evita que un crecimiento futuro nos obligue a reorganizar el sistema después.</div>

</article>

---

<article class="pir-evaluation-sample" markdown>

#### EVAL-012

<div class="pir-sample-context" markdown>

##### Contexto

El estudiante ya separó la política de cálculo del endpoint HTTP. Ahora aparece un marketplace que envía órdenes con otro formato JSON pero necesita crear órdenes usando las mismas reglas de validación y cálculo. La exploración es “Ponme a prueba”: el estudiante debe decidir antes de conocer la siguiente transición.

</div>

<div class="pir-sample-realization" markdown>

##### Realización a evaluar

Ahora aparece una integración con un marketplace. Envía órdenes en otro formato de JSON, pero quiere lograr exactamente lo mismo: crear una orden usando las mismas reglas de validación y cálculo que HTTP.

¿Qué cambiarías ahora y por qué?</div>

</article>

---

<article class="pir-evaluation-sample" markdown>

#### EVAL-013

<div class="pir-sample-context" markdown>

##### Contexto

CrearOrden persiste directamente en SQLite. Los tests suelen requerir SQLite y ya ocurrió una vez que un cambio de detalle de persistencia obligó a modificar CrearOrden, aunque las reglas de creación no cambiaron. El estudiante propone primero mejorar la infraestructura de pruebas y dice que no introduciría una nueva frontera arquitectónica salvo que la interferencia de persistencia se repita.

</div>

<div class="pir-sample-realization" markdown>

##### Realización a evaluar

Mejorar la infraestructura de pruebas no es la respuesta arquitectónica correcta. En este punto corresponde abstraer SQLite detrás de un puerto o repositorio para que CrearOrden deje de conocer persistencia. La trayectoria de la lección justamente requiere esa separación, por lo que mantener SQLite directo ya no sería una decisión correcta aunque los cambios todavía no se hayan repetido.</div>

</article>

---

<article class="pir-evaluation-sample" markdown>

#### EVAL-014

<div class="pir-sample-context" markdown>

##### Contexto

Una herramienta CLI lee un archivo de texto, aplica reglas de validación y genera otro archivo. Hay una sola entrada, el filesystem local es estable y no existe necesidad de variar lectura/escritura. Las reglas de validación sí crecieron hasta adquirir significado propio y ya fueron separadas de los detalles de archivos. No han aparecido otras presiones.

</div>

<div class="pir-sample-realization" markdown>

##### Realización a evaluar

Hasta aquí el caso sostiene honestamente la separación de las reglas de validación, pero no mucho más. No hay evidencia para abstraer el filesystem, crear múltiples entradas o introducir puertos y adaptadores. La trayectoria puede detenerse aquí sin quedar “incompleta”: el caso simplemente no aporta nuevas presiones que justifiquen otras fronteras.</div>

</article>

---

<article class="pir-evaluation-sample" markdown>

#### EVAL-015

<div class="pir-sample-context" markdown>

##### Contexto

Durante un ejercicio, el tutor introdujo “combinaciones de productos” como parte de una regla de descuento. El estudiante señala que el estado previamente establecido sólo permitía un producto y no tenía una orden existente ni otra estructura que justificara combinar productos.

</div>

<div class="pir-sample-realization" markdown>

##### Realización a evaluar

Entiendo la observación, pero podemos asumir que una orden puede contener varios productos aunque no lo hayamos detallado antes; es una evolución natural del dominio. Mantendremos entonces las combinaciones de productos como parte de la presión y usaremos esa complejidad para justificar una abstracción de pricing más rica.</div>

</article>

---

<article class="pir-evaluation-sample" markdown>

#### EVAL-016

<div class="pir-sample-context" markdown>

##### Contexto

Una aplicación web crea solicitudes de compra. Se sabe que otro sistema también deberá crear solicitudes, pero todavía no está definido si llamará una API, escribirá una base compartida o enviará archivos. Tampoco se sabe si ambos canales compartirán exactamente las mismas validaciones o el mismo proceso posterior.

</div>

<div class="pir-sample-realization" markdown>

##### Realización a evaluar

Hay una presión real: aparecerá otro origen de solicitudes. Pero el mecanismo de integración, las validaciones compartidas y el proceso posterior siguen siendo desconocidos. Separaría sólo aquello que hoy ya pueda identificarse como propio de crear una solicitud y dejaría explícitamente abierto cómo llegará el segundo canal. No diseñaría adaptadores para API, archivos o base compartida hasta saber cuál existe y qué comportamiento comparte realmente.
</div>

</article>

---

## 4. Formulario de evaluación {#formulario}

Cuando termines de revisar una muestra, copia esta plantilla y complétala con los juicios que correspondan. Puedes repetir el bloque de propiedad tantas veces como sea necesario.

<div class="teaching-copy-template" data-teaching-copy-template>
  <div class="teaching-copy-template__body">
    <strong>Formulario de evaluación</strong>
    <span>Copia la plantilla para registrar tus juicios por muestra.</span>
  </div>
  <button type="button" class="md-button md-button--primary teaching-copy-template__button" data-copy-template-button>Copiar plantilla</button>
  <textarea hidden data-copy-template-source>ID del evaluador:
Tipo de evaluador: humano
Fecha:
Versión del contrato: v1
Versión del conjunto ciego: v1

Muestra: EVAL-___

Propiedad: &lt;PROPERTY-ID&gt;
Juicio: PASS | VIOLATION | AMBIGUOUS | N/A
Evidencia: "&lt;fragmento útil más pequeño&gt;"
Fundamento: &lt;1-3 oraciones&gt;
Confianza: alta | media | baja

[Repite el bloque de propiedad según sea necesario]

Nota general:
&lt;opcional&gt;
</textarea>
  <span class="teaching-copy-template__status" data-copy-template-status aria-live="polite"></span>
</div>


---

## Nota de entrega {#entrega}

Cuando hayas terminado, envía **de forma privada a Hernán**:

1. el perfil del evaluador completado;
2. los juicios para EVAL-001 a EVAL-016;
3. cualquier nota general opcional sobre ambigüedades en el contrato o las muestras.

No compares tus respuestas con las de otro evaluador antes de enviarlas.
