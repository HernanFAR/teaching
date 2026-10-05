# AGENTS.md

## Superficie operativa para agentes

Este archivo define los principios generales de Teaching.

Las instrucciones operativas específicas para agentes viven en `agents/`. Antes de generar, derivar o revisar una lección, leer:

- `agents/README.md`;
- `agents/lesson-generation.md`;
- `agents/realization-design.md`;
- `agents/explorations.md`;
- `agents/components.md`.
- `agents/evaluations.md`.

La documentación bajo `docs/` es la realización pública para humanos. No reemplaza las reglas operativas de `agents/`.

## Propósito del repositorio

**Teaching** es una plataforma de aprendizaje de ingeniería de software orientada a entender conceptos desde los problemas que los hacen necesarios.

La meta no es acumular definiciones, patrones ni recetas. La meta es reconstruir el razonamiento que hace que una decisión de diseño tenga sentido.

Este repositorio debe ayudar a una persona a pasar de:

> "me dijeron que esto se hace así"

a:

> "entiendo qué problema resuelve, cuándo aparece, qué costo tiene y cuándo no lo necesito".

---

## Los 3 pilares

### 1. Problem-first learning

No introducir primero el nombre del patrón, arquitectura o técnica.

Primero debe aparecer una situación concreta, una tensión observable o una limitación del diseño actual. El concepto se nombra después de que exista una razón para necesitarlo.

### 2. Generative lessons

Las lecciones no son artefactos estáticos.

Una entrada publicada debe funcionar como una **realización explicativa** de una intención pedagógica más estable.

Siempre que sea razonable, cada lección debe mantener unas **instrucciones base de generación** que actúen como su fuente pedagógica. Estas instrucciones deben conservar aquello que no debería perderse al cambiar la forma de enseñar:

- qué debe entender la persona;
- qué problemas o tensiones deben aparecer;
- en qué orden deben aparecer;
- qué conceptos todavía no deben introducirse;
- qué límites y contrafactuales deben conservarse;
- qué criterios de accesibilidad y calidad debe satisfacer la explicación.

Desde esa fuente pueden derivarse distintas realizaciones según la finalidad de enseñanza, por ejemplo:

- explicar el mismo recorrido en otro lenguaje o dominio;
- adaptar la dificultad o el conocimiento previo asumido;
- producir otra explicación cuando la anterior no funcionó;
- generar material visual;
- producir ejercicios o preguntas;
- preparar una tutoría guiada;
- generar material de evaluación;
- construir ejemplos adicionales.

Una derivación puede cambiar representación, ejemplos, lenguaje, profundidad o interacción. **No debe cambiar silenciosamente la intención pedagógica que la fuente declara.**

Las instrucciones de generación son parte del material educativo, no documentación interna descartable.

### 3. Decision transparency

No mostrar solamente el resultado final.

Las lecciones deben hacer visibles las decisiones:

- qué problema apareció;
- qué alternativas eran posibles;
- qué cambio se eligió;
- qué mejora produjo;
- qué costo introdujo;
- qué nueva tensión dejó preparada.

El estudiante debe poder rastrear una estructura final hacia las razones que la hicieron emerger.

---

## Mandamientos de Teaching

Estos principios son operativos. Pueden crecer con el proyecto, pero cualquier contenido nuevo debe respetar su intención.

### I. No mover una línea sin una causa

No introducir una abstracción, capa, interfaz, patrón o dependencia solamente porque sea habitual.

Cada cambio estructural debe responder a una presión visible.

### II. El código inicial puede estar bien

No caricaturizar las implementaciones simples como "mal código" para justificar una solución más sofisticada.

Una solución directa puede ser correcta para el problema y tamaño actuales.

### III. Nombrar después de entender

Siempre que sea posible, permitir que la persona experimente primero el problema y la solución antes de introducir el nombre formal del concepto.

### IV. Mostrar qué pasa si no cambiamos nada

Las lecciones deberían incluir contrafactuales cuando aporten comprensión:

> ¿qué ocurre si dejamos el sistema como está?

Esto ayuda a distinguir una necesidad real de una preferencia arquitectónica.

### V. Enseñar también cuándo no usar algo

Toda técnica relevante debería incluir sus límites, costos y condiciones bajo las cuales no aporta valor.

Teaching no debe convertir patrones en obligaciones.

### VI. Una visual, una pregunta

Los diagramas y recursos visuales deben tener una intención concreta.

No añadir diagramas por decoración ni condensar demasiadas ideas en una misma imagen.

### VII. Mantener trazabilidad conceptual

Los conceptos que aparecen en una lección deberían poder conectarse con la tensión que los originó.

Un estudiante debería poder preguntar "¿por qué existe esto?" y encontrar una respuesta dentro del recorrido.

### VIII. Permitir cambiar una variable

Cuando sea útil, explorar qué ocurre al cambiar una sola condición:

- HTTP por CLI;
- SQL por archivos;
- un único entry point por varios;
- persistencia real por memoria;
- integración externa por una implementación local.

Esto ayuda a distinguir qué parte del diseño es esencial y cuál accidental.

### IX. Separar hechos, heurísticas y preferencias

No presentar una convención como si fuera una propiedad inevitable del software.

Cuando algo sea una recomendación, heurística, preferencia o decisión contextual, decirlo.

### X. La IA debe ser visible y reutilizable

Si una lección fue ideada, redactada, revisada, expandida o visualizada con ayuda de IA, no se debe ocultar.

Cuando corresponda, exponer las instrucciones que permiten reproducir o adaptar ese proceso.

La IA aquí no reemplaza el razonamiento pedagógico: opera sobre una intención pedagógica explícita.

Las entradas de lecciones deben considerar una superficie visible para **explorar esta lección**. Las exploraciones soportadas combinan material pedagógico de la lección, orientación específica del modo de exploración y una necesidad concreta escrita por la persona. Sus reglas operativas viven en `agents/explorations.md`.

### XI. El resultado final no es el objetivo

Una arquitectura terminada, un patrón aplicado o un ejemplo correcto no bastan.

La persona debe poder reconstruir el camino que llevó hasta ahí.

### XII. Favorecer exploración sobre memorización

Cuando haya que elegir entre una explicación que entrega la respuesta inmediatamente y una que permite descubrirla progresivamente, preferir la segunda si sigue siendo clara y práctica.

### XIII. La consciencia de clase debe ser parte de la generación

**La consciencia de clase debe ser parte de la generación.**

Teaching no debe asumir como condición de acceso que la persona dispone de dinero, hardware costoso, educación formal, dominio de inglés, tiempo abundante, herramientas pagadas o condiciones físicas y sensoriales ideales.

Esto se ve reflejado, entre otras cosas, en:

- cuando usamos un término en inglés, **mostrar también su traducción al español de forma visible** cuando esa traducción sea necesaria para comprender la idea;
- no esconder información esencial únicamente en hover, `title`, color, animaciones o interacciones que puedan no estar disponibles para todas las personas;
- hacer que el contenido sea utilizable por personas con discapacidades, **especialmente discapacidades visuales**: estructura semántica, contraste suficiente, texto alternativo cuando corresponda y explicaciones textuales de aquello que no pueda depender únicamente de una representación visual;
- no asumir acceso a software, servicios, cursos, suscripciones o infraestructura pagada cuando exista una alternativa razonable;
- no asumir hardware potente ni conexiones rápidas como requisito implícito para aprender un concepto;
- evitar usar formación universitaria, certificaciones o conocimiento previo costoso como filtros innecesarios para acceder a una explicación;
- preferir ejemplos, herramientas y caminos que una persona pueda reproducir con recursos modestos cuando eso no degrade el objetivo pedagógico;
- distinguir cuidadosamente entre una limitación técnica real y una barrera económica, lingüística, educativa o de accesibilidad que nosotros mismos estemos introduciendo.

La accesibilidad y las condiciones materiales no son una fase posterior de publicación. Deben considerarse mientras se diseña y genera la explicación.

---

## Pipeline de Teaching

Separar la **fuente pedagógica** de su **diseño de realización**.

La fuente responde:

> ¿qué queremos enseñar y qué debe permanecer?

El diseño de realización responde:

> ¿cómo hacemos visible esa intención en una experiencia concreta?

Usar como flujo de referencia:

```text
solicitud
→ fuente pedagógica
→ diseño de realización
→ implementación
→ revisión
→ publicación
→ evidencia
↺ posible revisión de la fuente
```

No usar decisiones visuales para ocultar incertidumbre pedagógica. Si implementar una realización revela que una tensión aparece demasiado pronto, que falta una transición o que la intención era demasiado amplia, tratarlo como evidencia sobre la fuente.

Los bocetos visuales —incluidas imágenes generadas con IA— pueden utilizarse para explorar composición, jerarquía y agrupación. Son artefactos desechables de exploración, no fuente de verdad ni implementación final.

---

## Anatomía recomendada de una lección

No todas las lecciones necesitan exactamente la misma estructura, pero una buena lección debería considerar:

1. **Estado inicial** — una solución suficientemente simple y funcional.
2. **Nueva presión** — algo cambia o aparece.
3. **Problema observable** — se vuelve visible una limitación.
4. **Exploración** — opciones y consecuencias.
5. **Transformación** — se introduce el cambio mínimo útil.
6. **Concepto** — se pone nombre a lo que acaba de emerger.
7. **Contrafactual** — qué habría pasado sin el cambio.
8. **Límites** — cuándo no vale la pena usarlo.
9. **Siguiente tensión** — qué prepara el próximo paso.
10. **Exploraciones soportadas** — formas explícitas en que la persona puede continuar investigando la lección con un LLM sin delegarle la autoridad pedagógica de la lección.
11. **Instrucciones base de generación** — la fuente pedagógica desde la que pueden derivarse distintas realizaciones de la experiencia.

---

## Material visual

Mermaid es una herramienta, no una obligación.

Elegir la representación que mejor responda la pregunta pedagógica:

- código;
- código antes/después;
- Mermaid flowchart;
- sequence diagram;
- dependency graph;
- class diagram;
- árbol de archivos;
- tabla comparativa;
- línea temporal;
- esquema ASCII;
- ejercicios interactivos o laboratorios futuros.

Preferir representaciones pequeñas y legibles.

---

## Uso de IA

Teaching adopta una postura explícitamente transparente respecto al uso de IA.

La IA puede participar en:

- ideación;
- generación de variantes;
- adaptación de ejemplos;
- revisión;
- creación de diagramas;
- transformación entre lenguajes;
- exploración de casos alternativos.

Sin embargo, el contenido debe conservar una intención pedagógica humana y verificable.

Las instrucciones base de generación deben tratarse como **código fuente pedagógico**: describen qué se intenta enseñar, en qué orden y bajo qué restricciones. La entrada publicada es una realización de esa fuente, no su reemplazo.

Una persona debería poder reutilizarlas para pedir, por ejemplo:

> Genera esta misma lección en Python usando FastAPI, pero conserva la progresión conceptual y no introduzcas Dependency Inversion antes de que exista una presión que lo justifique.

---

## Lecciones y guías

### Lección

Responde principalmente:

> Quiero entender este concepto.

Es una unidad conceptual relativamente autocontenida.

### Guía

Responde principalmente:

> Quiero conseguir este objetivo.

Puede componer varias lecciones existentes sin duplicarlas.

---



## Criterio de éxito

Una persona que termine una lección debería poder:

- explicar qué problema resuelve el concepto;
- reconocer cuándo ese problema existe;
- identificar cuándo el concepto sería innecesario;
- reconstruir el razonamiento que llevó a la solución;
- generar o pedir nuevos ejemplos sin perder la intención original.

Si solo puede repetir la estructura final, la lección todavía no terminó de enseñar.
