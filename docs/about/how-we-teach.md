<div class="teaching-intro-section" markdown>

# Cómo enseñamos

Hay muchas formas de aprender programación, y cada una sirve mejor para cosas distintas.

<div class="learning-modes-list" markdown>

<div class="learning-mode" markdown>
  <div class="learning-mode__name" markdown>:material-book-open-page-variant-outline: <strong>Documentación</strong></div>
  <div markdown><span class="learning-mode__label">Obtienes bien</span>Referencia precisa, interfaces de programación (APIs), opciones y comportamiento esperado.</div>
  <div markdown><span class="learning-mode__label">Puede quedar menos claro</span>Por qué una decisión existe o cuándo deja de ser útil.</div>
</div>

<div class="learning-mode" markdown>
  <div class="learning-mode__name" markdown>:material-school-outline: <strong>Tutoriales</strong></div>
  <div markdown><span class="learning-mode__label">Obtienes bien</span>Un camino concreto para llegar a un resultado.</div>
  <div markdown><span class="learning-mode__label">Puede quedar menos claro</span>Qué partes del camino eran necesarias y cuáles eran circunstanciales.</div>
</div>

<div class="learning-mode" markdown>
  <div class="learning-mode__name" markdown>:material-play-circle-outline: <strong>Videos</strong></div>
  <div markdown><span class="learning-mode__label">Obtienes bien</span>Explicación guiada, ritmo y demostración visual.</div>
  <div markdown><span class="learning-mode__label">Puede quedar menos claro</span>Cómo reconstruir la idea fuera del ejemplo mostrado.</div>
</div>

<div class="learning-mode" markdown>
  <div class="learning-mode__name" markdown>:material-layers-outline: <strong>Copiar una arquitectura</strong></div>
  <div markdown><span class="learning-mode__label">Obtienes bien</span>Una estructura funcional que puedes reutilizar rápido.</div>
  <div markdown><span class="learning-mode__label">Puede quedar menos claro</span>Qué problema justificaba cada capa, interfaz o separación.</div>
</div>

<div class="learning-mode" markdown>
  <div class="learning-mode__name" markdown>:material-brain: <strong>Memorizar un patrón</strong></div>
  <div markdown><span class="learning-mode__label">Obtienes bien</span>Vocabulario y reconocimiento de una forma conocida.</div>
  <div markdown><span class="learning-mode__label">Puede quedar menos claro</span>Cuándo el patrón es necesario, innecesario o incluso contraproducente.</div>
</div>

</div>

Todas pueden ser útiles.

Teaching intenta concentrarse especialmente en aquello que suele quedar menos visible: **la relación entre el problema, la decisión y el concepto que aparece después**.

Queremos que puedas mirar una decisión de software y pensar:

> **"Entiendo por qué esto apareció."**

No solamente cómo se llama.

</div>

---

## El problema con empezar por la respuesta

Imagina que queremos enseñar **arquitectura limpia** (<span lang="en">Clean Architecture</span>).

Podríamos comenzar mostrándote directamente el diagrama típico de dependencias:

```mermaid
flowchart LR
    P[Presentación / interfaz de usuario]
    I[Infraestructura / base de datos / APIs]
    A[Aplicación / casos de uso]
    D[Dominio / reglas de negocio]

    P -- Depende de --> A
    I -- Depende de --> A
    A -- Depende de --> D
```

<p class="visual-equivalent"><strong>En texto:</strong> <strong>Presentación</strong> e <strong>Infraestructura</strong> dependen de <strong>Aplicación</strong>; <strong>Aplicación</strong> depende de <strong>Dominio</strong>.</p>

Eso sería correcto.

Incluso podríamos resumirlo con una regla conocida: **las dependencias apuntan hacia adentro.**

Pero aparece una pregunta bastante importante: **¿por qué necesitábamos todo esto?**

### Tener la respuesta no te da la experiencia
Si nunca experimentaste el problema que motivó esas separaciones, la arquitectura corre el riesgo de convertirse en una receta.

Por eso preferimos comenzar con algo mucho menos impresionante:

```mermaid
flowchart TD
    A[HTTP POST /orders]
    B[Validar pedido]
    C[Calcular total]
    D[Guardar orden]
    E[Notificar confirmación]

    A --> B --> C --> D --> E
```

<p class="visual-equivalent"><strong>En texto:</strong> recibimos una orden por HTTP, la validamos, calculamos su total, la guardamos y finalmente notificamos la confirmación.</p>

Un flujo pequeño, lineal y razonable, que funciona y no requiere nada que arreglar... todavía.

**Acá no necesitamos una arquitectura elaborada**, pero empezamos a cambiar una cosa a la vez:

<div class="pressure-sequence" markdown>

<div class="pressure-step" markdown>
<span class="pressure-step__number">1</span>

**La lógica crece**

La operación deja de ser trivial.

</div>

<div class="pressure-step" markdown>
<span class="pressure-step__number">2</span>

**Queremos probarla**

Necesitamos aislar comportamiento para verificarlo.

</div>

<div class="pressure-step" markdown>
<span class="pressure-step__number">3</span>

**Aparece una dependencia externa**

Persistencia, correo, APIs u otros servicios entran al flujo.

</div>

<div class="pressure-step" markdown>
<span class="pressure-step__number">4</span>

**Necesitamos otro punto de entrada**

El mismo comportamiento debe poder ejecutarse desde otro lugar.

</div>

</div>

Y, poco a poco, empiezan a existir **razones reales para mover cosas**.

Cuando finalmente aparecen conceptos como **caso de uso**, **puerto**, **adaptador** o **inversión de dependencias**, ya tenemos algo a lo que conectarlos.

Ese es el tipo de aprendizaje que buscamos.

---

## Nuestros pilares y mandamientos

Los **pilares** resumen qué intentamos preservar. Los **mandamientos** convierten esa intención en criterios concretos para enseñar.

### Pilares

<div class="pillars-grid" markdown>

<div class="pillar-card" markdown>

<div class="pillar-card__title" markdown>
:material-alert-decagram-outline: **1. <span lang="en">Problem-first learning</span>**
<span class="pillar-translation">Aprendizaje desde el problema</span>
</div>

Primero aparece el problema.

Después, cuando ya existe una razón para resolverlo, aparece el concepto.

</div>

<div class="pillar-card" markdown>

<div class="pillar-card__title" markdown>:material-auto-fix: **2. Lecciones generativas**</div>

Una explicación no debería estar atrapada en un solo ejemplo.

Queremos que puedas reconstruirla con otro lenguaje, dominio o nivel de dificultad.

</div>

<div class="pillar-card" markdown>

<div class="pillar-card__title" markdown>:material-source-branch: **3. Transparencia de decisiones**</div>

No queremos mostrarte únicamente dónde terminó el código.

Queremos que puedas seguir el camino que lo llevó hasta ahí.

</div>

</div>

---

### Mandamientos

No son leyes universales de ingeniería de software.

Son compromisos sobre **cómo queremos enseñar**.

<div class="commandments-grid">

<div class="commandment">
<span class="commandment__number">I</span>
<div class="commandment__body">

<div class="commandment__title">No mover una línea sin una causa</div>

Si agregamos una interfaz, una capa o una abstracción, deberías poder señalar el problema que hizo útil ese cambio.

</div>
</div>

<div class="commandment">
<span class="commandment__number">II</span>
<div class="commandment__body">

<div class="commandment__title">El código inicial puede estar bien</div>

No necesitamos convertir la primera versión en un desastre artificial para justificar una arquitectura más sofisticada.

A veces una solución sencilla es exactamente la solución correcta.

</div>
</div>

<div class="commandment">
<span class="commandment__number">III</span>
<div class="commandment__body">

<div class="commandment__title">Nombrar después de entender</div>

Siempre que podamos, queremos que primero aparezca la intuición y después el término formal.

</div>
</div>

<div class="commandment">
<span class="commandment__number">IV</span>
<div class="commandment__body">

<div class="commandment__title">Preguntar “¿y si no hacemos nada?”</div>

Una decisión se entiende mejor cuando también conocemos el costo de no tomarla.

</div>
</div>

<div class="commandment">
<span class="commandment__number">V</span>
<div class="commandment__body">

<div class="commandment__title">Enseñar cuándo no usar algo</div>

Saber aplicar un patrón es útil.

Saber cuándo sería sobrearquitectura es todavía más útil.

</div>
</div>

<div class="commandment">
<span class="commandment__number">VI</span>
<div class="commandment__body">

<div class="commandment__title">Una visual, una pregunta</div>

Un diagrama debería ayudarte a ver algo específico.

Si necesita explicar cinco ideas al mismo tiempo, probablemente necesitamos cinco visuales más pequeños.

</div>
</div>

<div class="commandment">
<span class="commandment__number">VII</span>
<div class="commandment__body">

<div class="commandment__title">Cambiar una variable</div>

¿Qué pasa si reemplazamos HTTP por una interfaz de línea de comandos (CLI)?

¿Y SQL por archivos?

¿Y si tenemos tres puntos de entrada en vez de uno?

Cambiar una sola condición nos permite descubrir qué partes del diseño eran esenciales y cuáles eran accidentales.

</div>
</div>

<div class="commandment">
<span class="commandment__number">VIII</span>
<div class="commandment__body">

<div class="commandment__title">Distinguir hechos de preferencias</div>

No todo lo que hacemos en software es una ley.

Hay propiedades técnicas, restricciones, convenciones, heurísticas y preferencias.

Intentaremos decir cuál es cuál.

</div>
</div>

<div class="commandment">
<span class="commandment__number">IX</span>
<div class="commandment__body">

<div class="commandment__title">Mostrar el razonamiento, no solamente el resultado</div>

El código final es un artefacto.

Lo que queremos enseñar es el camino.

</div>
</div>

</div>
---

## El uso de IA en Teaching

Parte del contenido de Teaching puede ser ideado, discutido, revisado, transformado o generado con ayuda de inteligencia artificial. Pero queremos usarla de una manera un poco distinta.

En lugar de pedir: "Explícame arquitectura limpia (Clean Architecture)", preferimos construir primero una **especificación pedagógica**.
<div class="pedagogical-spec">

<div class="pedagogical-spec__item">
<span class="pedagogical-spec__label">Objetivo</span>
<strong>Qué debe entender la persona</strong>
</div>

<div class="pedagogical-spec__item">
<span class="pedagogical-spec__label">Recorrido</span>
<strong>Qué problemas deben aparecer y en qué orden</strong>
</div>

<div class="pedagogical-spec__item">
<span class="pedagogical-spec__label">Límites</span>
<strong>Qué conceptos todavía no deben introducirse</strong>
</div>

<div class="pedagogical-spec__item">
<span class="pedagogical-spec__label">Representación</span>
<strong>Qué material visual necesitamos</strong>
</div>

<div class="pedagogical-spec__item">
<span class="pedagogical-spec__label">Calidad</span>
<strong>Qué errores pedagógicos queremos evitar</strong>
</div>

</div>

Esa especificación puede reutilizarse para producir nuevas realizaciones. Por eso algunas lecciones publican también sus **instrucciones base de generación**: la **fuente pedagógica** desde la que esas realizaciones pueden derivarse.


### Una fuente, muchas realizaciones

Una explicación publicada no tiene por qué ser la única forma de enseñar una idea.

Las **instrucciones base de generación** conservan aquello que queremos mantener estable: la intención pedagógica, las tensiones que deben aparecer, su orden, los límites y los criterios de calidad.

Desde esa fuente podemos producir distintas realizaciones según lo que una persona necesite.

<div class="realizations-grid">

<div class="realization">
<span class="realization__label">Cambiar contexto</span>
<strong>Otro lenguaje o dominio</strong>
<span>Por ejemplo: Python + videojuegos en vez de C# + órdenes.</span>
</div>

<div class="realization">
<span class="realization__label">Cambiar dificultad</span>
<strong>Práctica, intermedio o avanzado</strong>
<span>La profundidad cambia sin adelantar conceptos que todavía no corresponden.</span>
</div>

<div class="realization">
<span class="realization__label">Otra explicación</span>
<strong>El ejemplo anterior no me quedó claro</strong>
<span>Podemos cambiar la representación sin cambiar aquello que intentamos enseñar.</span>
</div>

<div class="realization">
<span class="realization__label">Material visual</span>
<strong>Diagramas, comparaciones o secuencias</strong>
<span>La misma intención puede expresarse con otra forma de representación.</span>
</div>

<div class="realization">
<span class="realization__label">Práctica y evaluación</span>
<strong>Ejercicios, preguntas o desafíos</strong>
<span>Podemos derivar material para practicar o comprobar comprensión.</span>
</div>

</div>

### La IA puede realizar; no define la fuente

La IA puede ayudarnos a transformar una fuente pedagógica en una explicación, un ejemplo, un diagrama, un ejercicio o una variante para otro nivel.

Pero generar una realización no demuestra que esa realización sea correcta.

<div class="teaching-pipeline">

<div class="teaching-pipeline__step">
<span>1</span>
<strong>Fuente pedagógica</strong>
<small>Define qué intentamos enseñar y qué debe preservarse.</small>
</div>

<div class="teaching-pipeline__arrow" aria-hidden="true">→</div>

<div class="teaching-pipeline__step">
<span>2</span>
<strong>Realización</strong>
<small>Decide cómo expresarlo para una necesidad concreta.</small>
</div>

<div class="teaching-pipeline__arrow" aria-hidden="true">→</div>

<div class="teaching-pipeline__step">
<span>3</span>
<strong>Revisión</strong>
<small>Comprueba intención pedagógica, afirmaciones, ejemplos y código.</small>
</div>

<div class="teaching-pipeline__arrow" aria-hidden="true">→</div>

<div class="teaching-pipeline__step">
<span>4</span>
<strong>Publicación</strong>
<small>La realización revisada pasa a formar parte del material.</small>
</div>

</div>

<p class="visual-equivalent"><strong>En texto:</strong> partimos desde una fuente pedagógica, producimos una realización, la revisamos y solo después la publicamos.</p>

---

## Lecciones y guías

Teaching crecerá principalmente con dos tipos de contenido.

<div class="content-types">

<a class="content-type-card" href="../../lessons/">
<span class="content-type-card__label">Lección</span>
<strong>“Quiero entender esto.”</strong>
<span>Construye intuición alrededor de un concepto.</span>
<span class="content-type-card__action">Explorar lecciones →</span>
</a>

<a class="content-type-card" href="../../guides/">
<span class="content-type-card__label">Guía</span>
<strong>“Quiero lograr esto.”</strong>
<span>Conecta conocimiento para alcanzar un objetivo real.</span>
<span class="content-type-card__action">Ver guías →</span>
</a>

</div>

Una guía puede componer varias lecciones sin volver a explicarlas desde cero.

Por ejemplo, una futura guía sobre **cómo hacer que una API existente sea fácil de probar** podría apoyarse en lecciones sobre pruebas, dependencias, puertos y diseño de dominio.
