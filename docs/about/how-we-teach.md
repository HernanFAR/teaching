---
hide:
  - navigation
---

<div class="teaching-intro-section" markdown>

# Cómo enseñamos

Hay muchas formas de aprender programación.

Puedes leer documentación. Seguir un tutorial. Ver un video. Copiar una arquitectura. Memorizar un patrón y esperar reconocerlo cuando aparezca.

Teaching intenta hacer algo un poco distinto.

Queremos que puedas mirar una decisión de software y pensar:

> **"Entiendo por qué esto apareció."**

No solamente cómo se llama.

</div>

## Nuestros 3 pilares

<div class="grid cards" markdown>

-   :material-alert-decagram-outline:{ .lg .middle } **1. Problem-first learning**

    ---

    Primero aparece el problema.

    Después, cuando ya existe una razón para resolverlo, aparece el concepto.

-   :material-auto-fix:{ .lg .middle } **2. Lecciones generativas**

    ---

    Una explicación no debería estar atrapada en un solo ejemplo.

    Queremos que puedas reconstruirla con otro lenguaje, dominio o nivel de dificultad.

-   :material-source-branch:{ .lg .middle } **3. Transparencia de decisiones**

    ---

    No queremos mostrarte únicamente dónde terminó el código.

    Queremos que puedas seguir el camino que lo llevó hasta ahí.

</div>

---

## El problema con empezar por la respuesta

Imagina que queremos enseñar Clean Architecture.

Podríamos comenzar así:

~~~text
Domain
Application
Infrastructure
Presentation
~~~

Podríamos explicar las dependencias, crear cuatro proyectos y después implementar un ejemplo.

Y funcionaría.

Pero aparece una pregunta bastante importante:

> **¿por qué necesitábamos todo esto?**

Si nunca experimentaste el problema que motivó esas separaciones, la arquitectura corre el riesgo de convertirse en una receta.

Por eso preferimos comenzar con algo mucho menos impresionante:

~~~text
POST /orders
    ↓
validar
    ↓
calcular
    ↓
guardar
    ↓
notificar
~~~

Funciona.

No hay nada que arreglar todavía.

Después cambiamos una condición.

La lógica crece.

Después queremos probarla.

Después aparece una dependencia externa.

Después necesitamos ejecutar el mismo comportamiento desde otro lugar.

Y, poco a poco, empiezan a existir razones reales para mover cosas.

Cuando finalmente aparecen conceptos como **caso de uso**, **puerto**, **adaptador** o **inversión de dependencias**, ya tenemos algo a lo que conectarlos.

Ese es el tipo de aprendizaje que buscamos.

---

## Nuestros mandamientos

No son leyes universales de ingeniería de software.

Son compromisos sobre **cómo queremos enseñar**.

### No mover una línea sin una causa

Si agregamos una interfaz, una capa o una abstracción, deberías poder señalar el problema que hizo útil ese cambio.

### El código inicial puede estar bien

No necesitamos convertir la primera versión en un desastre artificial para justificar una arquitectura más sofisticada.

A veces una solución sencilla es exactamente la solución correcta.

### Nombrar después de entender

Siempre que podamos, queremos que primero aparezca la intuición y después el término formal.

### Preguntar "¿y si no hacemos nada?"

Una decisión se entiende mejor cuando también conocemos el costo de no tomarla.

### Enseñar cuándo **no** usar algo

Saber aplicar un patrón es útil.

Saber cuándo sería sobrearquitectura es todavía más útil.

### Una visual, una pregunta

Un diagrama debería ayudarte a ver algo específico.

Si necesita explicar cinco ideas al mismo tiempo, probablemente necesitamos cinco visuales más pequeños.

### Cambiar una variable

¿Qué pasa si reemplazamos HTTP por CLI?

¿Y SQL por archivos?

¿Y si tenemos tres entry points en vez de uno?

Cambiar una sola condición nos permite descubrir qué partes del diseño eran esenciales y cuáles eran accidentales.

### Distinguir hechos de preferencias

No todo lo que hacemos en software es una ley.

Hay propiedades técnicas, restricciones, convenciones, heurísticas y preferencias.

Intentaremos decir cuál es cuál.

### Mostrar el razonamiento, no solamente el resultado

El código final es un artefacto.

Lo que queremos enseñar es el camino.

---

## Y sí: usamos IA

No queremos esconderlo.

Parte del contenido de Teaching puede ser ideado, discutido, revisado, transformado o generado con ayuda de inteligencia artificial.

Pero queremos usarla de una manera un poco distinta.

En lugar de pedir:

> "Explícame Clean Architecture."

podemos construir primero una especificación pedagógica que diga:

- qué debe entender la persona;
- qué problemas deben aparecer;
- en qué orden;
- qué conceptos todavía **no** deben introducirse;
- qué material visual necesitamos;
- qué errores pedagógicos queremos evitar.

Después esa especificación puede utilizarse para producir nuevas variantes.

Por eso algunas lecciones incluyen sus **instrucciones de generación**.

Puedes pensarlas como una especie de código fuente de la explicación.

---

## Una lección, muchos ejemplos

Supongamos que una explicación usa C# y un sistema de órdenes, pero tú trabajas con Python y videojuegos.

No deberías tener que empezar desde cero.

Podrías tomar las instrucciones de generación y pedir:

> Adapta esta lección a Python y FastAPI. Cambia el caso de "crear una orden" por "crear una partida", pero conserva las mismas tensiones y el mismo orden pedagógico.

O:

> Genera tres variantes de esta etapa. Una para alguien en práctica, otra para mid-level y otra para senior. No adelantes conceptos de etapas posteriores.

O incluso:

> Dame otro ejemplo porque el anterior no me hizo click.

El objetivo es que el contenido pueda adaptarse **sin perder aquello que intentaba enseñar**.

---

## La IA no es la fuente de verdad

Las instrucciones de generación tampoco convierten cualquier respuesta de una IA en material correcto.

Los ejemplos necesitan revisión.

El código necesita revisión.

Las afirmaciones técnicas necesitan revisión.

La intención pedagógica necesita revisión.

La ventaja es otra: ahora el proceso que genera nuevas explicaciones es visible y reutilizable.

---

## Lecciones y guías

Teaching crecerá principalmente con dos tipos de contenido.

### Lecciones

Para cuando dices:

> **"Quiero entender esto."**

Una lección intenta construir una intuición alrededor de un concepto.

### Guías

Para cuando dices:

> **"Quiero lograr esto."**

Una guía podrá conectar varias lecciones y convertirlas en un recorrido orientado a un objetivo real.

Así, por ejemplo, una futura guía sobre **cómo volver testeable una API existente** podría apoyarse en lecciones sobre testing, dependencias, puertos y diseño de dominio sin volver a explicarlas desde cero.

---

## ¿Y hacia dónde puede crecer esto?

Hay una posibilidad que nos interesa especialmente.

En ingeniería de software muchas ideas nacen porque alguien se encontró repetidamente con un problema.

Teaching puede transformarse en un lugar donde esos problemas queden expuestos, reproducibles y explorables.

Eso conecta naturalmente con iniciativas como **VSlices**, donde parte importante del trabajo consiste precisamente en entender tensiones de diseño, hacer explícitas decisiones y estudiar qué estructuras emergen de ellas.

No necesitamos decidir hoy cuánto se conectarán ambos proyectos.

Pero sí queremos conservar algo desde el principio:

> **el problema debe permanecer visible detrás de la solución.**

Porque cuando desaparece el problema y queda solamente el patrón, es muy fácil terminar memorizando arquitectura en lugar de aprender a diseñar.
