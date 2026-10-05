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

# PIR-STU-001 — Paquete autocontenido para evaluación humana v1

Este archivo está dirigido a evaluadores y es autocontenido.

Excluye deliberadamente claves de respuesta, identidades de pares, notas de construcción de mutantes, mapeos ocultos y resultados de evaluadores anteriores.

Por favor, completa la evaluación de manera independiente.

---

# 1. Introducción

# Introducción para evaluación humana v1

Gracias por ayudar a evaluar un instrumento de investigación sobre experiencias de enseñanza generadas con IA.

## Qué estás evaluando

Leerás 16 realizaciones breves de enseñanza sobre arquitectura de software.

El estudio no pregunta:

- si personalmente prefieres la arquitectura propuesta;
- si el estilo de código es ideal;
- si la realización coincide con una receta memorizada de Clean Architecture.

En cambio, recibirás un contrato explícito de conformidad que describe obligaciones pedagógicas observables.

Tu tarea es decidir si cada realización preserva, viola, deja ambiguas o no ejercita esas obligaciones.

## No necesitas inferir el propósito oculto de una muestra

Evalúa cada muestra de manera independiente.

Puede haber o no relaciones entre las muestras. No intentes buscarlas.

No intentes inferir cuántas muestras son "buenas" o "malas".

## Categorías de respuesta

Usa:

- PASS — la obligación se preserva;
- VIOLATION — la realización la contradice;
- AMBIGUOUS — la evidencia disponible es insuficiente para decidir;
- N/A — la propiedad no se ejercita de manera significativa.

Todo juicio distinto de N/A debe señalar el fragmento de evidencia útil más pequeño posible.

## Uso de tu experiencia

Tu conocimiento profesional puede ayudarte a entender el escenario, pero el contrato es la autoridad para esta tarea.

Una recomendación técnicamente razonable aun puede violar el contrato pedagógico.

Una decisión arquitectónica no estándar aun puede ser conforme.

## Independencia

Por favor, completa la evaluación de manera independiente.

Durante la evaluación, no busques PIR-STU-001 ni materiales relacionados fuera de esta página. Todo el contexto necesario para completar la tarea está incluido aquí.

No compares tus juicios con los de otro evaluador hasta que todos los conjuntos de respuestas hayan sido enviados y congelados.


---

# 2. Perfil del evaluador

# Formulario de perfil del evaluador v1

ID del evaluador:

## Antecedentes

Rol actual / enfoque profesional:

Años de experiencia relevante:

Educación, formación o experiencia docente relevante:

Experiencia con arquitectura de software:
- ninguna
- básica
- intermedia
- avanzada

Experiencia con diseño instruccional / pedagogía / evaluación:
- ninguna
- básica
- intermedia
- avanzada

Familiaridad previa con Clean Architecture:
- ninguna
- básica
- intermedia
- avanzada

Familiaridad previa con Teaching / PIR / este estudio:
- ninguna
- limitada
- sustancial

## Condiciones de evaluación

Fecha:

Tiempo aproximado dedicado:

¿Conversaste alguna muestra con otra persona antes del envío?
- sí
- no

¿Usaste un asistente de IA durante la evaluación?
- sí
- no

Si respondiste que sí, describe cómo:

Cualquier otra condición que pueda haber afectado la evaluación:


---

# 3. Contrato, instrucciones y muestras ciegas

# 2. Contrato de conformidad

# PIR-STU-001 — Contrato de conformidad de Clean Architecture v1
## Vista del evaluador

Esta vista para evaluadores preserva las propiedades de conformidad congeladas de v1 y sus definiciones, mientras omite material de construcción del benchmark, identidades de controles positivos, familias de mutantes, expectativas ocultas, el procedimiento interno de calibración y la procedencia de ejecución.

No modifica la semántica del contrato congelado.

## Propósito

Este contrato define propiedades observables de conformidad pedagógica para realizaciones de la lección de Teaching **Cómo se llega a Clean Architecture**.

No prescribe un formato de fuente, no evalúa la calidad general de enseñanza ni mide resultados de aprendizaje.

Su propósito es distinguir:

- preservación de la intención;
- variación legítima;
- omisión o violación;
- avance prematuro;
- presión inventada;
- cruce de alcance no declarado.

## Autoridad pedagógica central

La pregunta guía de la lección es:

> ¿Qué problema justifica esta separación?

La lección preserva estos invariantes centrales:

- una solución inicial puede ser suficiente y defendible;
- una separación requiere presión observable previa;
- el cambio debe ser proporcional a la presión actual;
- los nombres formales aparecen después de la experiencia que los vuelve útiles;
- política y mecanismo deben seguir siendo distinguibles cuando sea relevante;
- detenerse antes de una forma arquitectónica final puede ser correcto;
- la arquitectura resultante debe poder reconstruirse causalmente;
- interfaces, capas o DI no demuestran por sí solas que una separación fuera necesaria;
- los conceptos culturalmente asociados con Clean Architecture no son automáticamente obligaciones de esta lección.

## Unidad de juicio

La unidad principal es una realización bajo una operación declarada y una necesidad concreta del estudiante.

En exploraciones interactivas, una ejecución puede contener múltiples rondas.

Evalúa:

```text
operación solicitada
+
estado disponible / necesidad del estudiante
+
realización producida
```

No evalúes por similitud superficial con una realización publicada.

## Estados de evaluación

Cada propiedad aplicable recibe un estado:

- **PASS** — la obligación se preserva de forma observable;
- **VIOLATION** — la evidencia observable contradice la obligación;
- **AMBIGUOUS** — la evidencia disponible es insuficiente para una decisión confiable;
- **N/A** — la propiedad no se ejercita de manera significativa.

No se requiere un puntaje global.

## RTE — Enrutamiento

### RTE-001 — Profundizar compatible
Cuando el estudiante pide mayor profundidad sobre una tensión o concepto ya introducido, `Automático` puede seleccionar `Profundizar`.

### RTE-002 — Aplicarlo a mi caso compatible
Cuando el estudiante presenta un sistema real y pide razonar sobre sus presiones actuales, `Automático` puede seleccionar `Aplicarlo a mi caso`.

### RTE-003 — Otro caso compatible
Cuando el estudiante busca transferir el razonamiento a otro dominio o caso conductor, `Automático` puede seleccionar `Otro caso`.

### RTE-004 — Ponme a prueba compatible
Cuando el estudiante busca poner a prueba su comprensión mediante decisiones progresivas, `Automático` puede seleccionar `Ponme a prueba`.

La selección de enrutamiento y la conformidad de la realización son juicios separados.

## CAU — Presión causal y cambio mínimo

### CAU-001 — Suficiencia inicial
La realización permite que el estado inicial siga siendo defendible cuando no existe presión suficiente para separarlo.

### CAU-002 — Presión antes de separar
Una separación relevante no debe presentarse como necesaria antes de que una presión observable la justifique.

### CAU-003 — Cambio mínimo justificado
La realización favorece el cambio mínimo que responde a la presión presente y no agrega estructura sólo para acercarse a una arquitectura conocida.

### CAU-004 — Nombre formal después de la experiencia
Los nombres formales no deben funcionar como justificación principal. Deben aparecer después de una relación ya observable, o como descripción de ella.

## STP — Detención y ausencia de cambio

### STP-001 — Detenerse cuando termina la presión
Si el caso ya no sostiene nuevas presiones, detener la trayectoria arquitectónica es conforme.

### STP-002 — No cambiar puede ser correcto
`No cambiar nada` debe seguir disponible cuando la solución actual absorbe la presión sin interferencia material.

### STP-003 — No cambiar es revisable
Aceptar no cambiar no vuelve permanente la decisión. Nueva evidencia material puede justificar reabrirla.

## UNC — Incertidumbre y evidencia

### UNC-001 — Preservar la incertidumbre material
Cuando faltan hechos materiales, la realización debe preguntar, acotar el escenario o preservar la incertidumbre en lugar de inventarlos.

### UNC-002 — Umbral de evidencia
Una hipótesis razonable no debe convertirse en arquitectura sólo porque resulte plausible a futuro. Debe distinguirse una señal, sospecha o presión posible de una presión suficientemente observada.

## SCP — Alcance

### SCP-001 — Cruce explícito de alcance externo
Si una exploración introduce conocimiento conceptual fuera de la lección original cuando la operación exige marcar el alcance, el cruce debe ser inequívocamente explícito.

### SCP-002 — Extensión no retroactiva
Una extensión externa no debe reinterpretar retroactivamente la lección original como si el material externo siempre hubiera formado parte de ella.

## VAR — Variación permitida

### VAR-001 — Equivalencia semántica sin identidad estructural
Una solución distinta de la realización publicada puede ser conforme si responde a la misma presión y preserva las obligaciones aplicables.

### VAR-002 — Evaluación de alternativas por sus compromisos
Una alternativa defendible debe evaluarse por la presión que resuelve, el costo que introduce y la evidencia que justificaría preferir otra opción, no por su parecido con una transición publicada.

### VAR-003 — Se permite variación significativa
La copia literal no es un requisito de conformidad.

## TST — Ponme a prueba

### TST-001 — Una presión por ronda
Cada ronda introduce como máximo una nueva presión principal antes de pedir una decisión.

### TST-002 — Esperar antes de avanzar
El realizador espera la respuesta del estudiante y evalúa esa decisión antes de introducir una nueva presión.

### TST-003 — Retención progresiva de información
El realizador no revela requisitos futuros, nombres de patrones, capas ni arquitectura objetivo de una forma que convierta la trayectoria en una clave de respuestas antes de que el estudiante decida.

Comparar con la realización publicada después de una decisión puede ser conforme si no invalida rondas futuras.

### TST-004 — Evaluación crítica sin validación por cortesía
Una respuesta débil, insuficiente o sobrearquitecturada debe poder cuestionarse explícitamente. No se valida únicamente por cortesía.

### TST-005 — Distinguir error local de razonamiento arquitectónico
Un error local de implementación no invalida automáticamente una decisión arquitectónica defendible, ni viceversa.

### TST-006 — Una aclaración no avanza el escenario
Una pregunta de aclaración del estudiante no es una decisión de ronda. Debe responderse sin introducir la siguiente presión, salvo que la aclaración vuelva imposible preservar el escenario.

### TST-007 — Reparación del escenario
Si el realizador introdujo una condición o capacidad no sustentada por el estado declarado, debe poder:
1. reconocer la inconsistencia;
2. retirarla o corregirla;
3. continuar sin utilizarla como evidencia arquitectónica.

### TST-008 — La presión agregada por el estudiante es explícita
Si el estudiante introduce una nueva presión relevante —como una restricción cognitiva, operacional o de costo— el realizador puede incorporarla, pero debe seguir siendo distinguible de la presión presentada originalmente.

## POL — Política y mecanismo

### POL-001 — El mecanismo no es automáticamente una frontera
La sola presencia de HTTP, SQLite, filesystem, una biblioteca u otro mecanismo no basta para justificar una frontera.

### POL-002 — Distinción política/mecanismo cuando sea relevante
Cuando una política importante empieza a quedar condicionada por detalles del mecanismo, la realización debe poder describir esa interferencia sin reducirla a reglas culturales de capas.

### POL-003 — La elección del mecanismo puede permanecer abierta
Separar una política no exige decidir inmediatamente el mecanismo futuro mediante el cual será configurada, persistida o realizada.

---

# 3. Instrucciones para el evaluador

# PIR-STU-001 — Instrucciones para el evaluador v1

Estado: preparado para evaluación ciega.  
Versión del contrato: contrato de conformidad de Clean Architecture v1.

## Propósito

Evaluarás un conjunto de realizaciones de enseñanza contra un contrato explícito de conformidad.

Tu tarea **no** es decidir si personalmente prefieres la arquitectura, el estilo de explicación o la implementación.

Tu tarea es:

> identificar qué obligaciones pedagógicas observables se preservan, se violan, quedan ambiguas o no resultan aplicables en cada realización.

Cada muestra debe evaluarse de manera independiente.

No compares las muestras entre sí ni infieras que algunas fueron alteradas intencionalmente.

## Qué recibes

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

## Juicios permitidos

Para cada propiedad del contrato que sea razonablemente relevante para la muestra, utiliza exactamente un juicio:

### PASS
La realización preserva la obligación observable descrita por la propiedad.

### VIOLATION
La realización contiene evidencia observable que contradice la propiedad.

### AMBIGUOUS
El contexto o la redacción disponibles son insuficientes para decidir de manera confiable entre PASS y VIOLATION.

Usa AMBIGUOUS cuando la incertidumbre sea real. No fuerces una respuesta binaria.

### N/A
La propiedad no se ejercita de manera significativa en la muestra.

N/A no significa "no noté nada". Significa que la muestra no crea una situación en la que esa propiedad pueda evaluarse razonablemente.

## Requisito de evidencia

Todo juicio PASS, VIOLATION o AMBIGUOUS debe incluir el fragmento útil de evidencia más pequeño de la realización o el contexto.

Prefiere una cita exacta breve o una referencia precisa a la oración relevante.

No justifiques un juicio únicamente con conocimiento general de arquitectura.

## Regla de evaluación

Evalúa lo que la realización **realmente hace**, no lo que podría haber querido decir.

Ejemplos:

- No infieras cautela ausente que no está presente.
- No infieras una presión arquitectónica no declarada.
- No trates automáticamente una recomendación técnicamente razonable como conforme.
- No trates automáticamente la simplicidad arquitectónica como conforme.
- No exijas redacción literal del contrato si la misma obligación se preserva semánticamente.

## Conocimiento de arquitectura

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

## Distinciones importantes

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

## Evaluación independiente

Evalúa las muestras una por una.

No:

- busques pares coincidentes;
- asumas que la mitad de las muestras son válidas y la mitad inválidas;
- infieras un balance esperado de clases;
- revises juicios anteriores para hacer que el conjunto completo parezca simétrico;
- uses los juicios de otro evaluador.

## Formato de salida

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

## Confianza

Opcionalmente agrega:

```text
Confianza: alta | media | baja
```

La confianza se refiere a tu confianza en la clasificación, no a cuánto te gusta o disgusta la realización.

## Condición de término

Una vez evaluadas todas las muestras suministradas, detente.

No intentes reconstruir emparejamientos ocultos, inferir una clave de respuestas ni rediseñar el contrato salvo que se solicite explícitamente después de la evaluación.

---

# 4. Muestras ciegas

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

# 4. Formulario de evaluación

# PIR-STU-001 — Formulario de evaluación v1

ID del evaluador:
Tipo de evaluador: humano
Fecha:
Versión del contrato: v1
Versión del conjunto ciego: v1

## Muestra

ID de muestra: EVAL-___

### Juicios

| Propiedad | Juicio | Evidencia | Fundamento | Confianza |
| --- | --- | --- | --- | --- |
|  | PASS / VIOLATION / AMBIGUOUS / N/A |  |  | alta / media / baja |

Agrega filas según sea necesario.

### Nota general

Opcional:


---

# Nota de entrega

Por favor, entrega:
1. el perfil del evaluador completado;
2. los juicios para EVAL-001 a EVAL-016;
3. cualquier nota general opcional sobre ambigüedades en el contrato o las muestras.

No compares tus respuestas con las de otro evaluador antes de enviarlas.


---

## Entrega

Cuando hayas terminado, envía de forma privada a Hernán lo solicitado en la sección **Nota de entrega**.
