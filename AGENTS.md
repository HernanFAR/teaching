# AGENTS.md

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

Siempre que sea razonable, una lección debe incluir instrucciones de generación suficientemente claras como para reconstruir el mismo recorrido:

- en otro lenguaje;
- con otro dominio;
- para otro nivel de experiencia;
- con más o menos ejemplos;
- con otras representaciones visuales.

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

### XI. El resultado final no es el objetivo

Una arquitectura terminada, un patrón aplicado o un ejemplo correcto no bastan.

La persona debe poder reconstruir el camino que llevó hasta ahí.

### XII. Favorecer exploración sobre memorización

Cuando haya que elegir entre una explicación que entrega la respuesta inmediatamente y una que permite descubrirla progresivamente, preferir la segunda si sigue siendo clara y práctica.

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
10. **Instrucciones de generación** — cómo reconstruir o adaptar la experiencia.

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

Las instrucciones de generación deben tratarse como una especie de **código fuente pedagógico**: describen qué se intenta enseñar, en qué orden y bajo qué restricciones.

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

## Relación futura con VSlices

Teaching es actualmente una plataforma independiente.

Sin embargo, existe una dirección posible: usarla como una extensión educativa de **VSlices**, especialmente para exponer de manera reproducible los problemas, tensiones y decisiones que motivan determinadas prácticas de diseño.

Si esta relación se formaliza en el futuro, debe conservarse una separación importante:

- VSlices puede aportar problemas, lenguaje, experimentos y casos reales;
- Teaching debe seguir priorizando comprensión pedagógica y no convertirse en documentación promocional de una metodología.

---

## Criterio de éxito

Una persona que termine una lección debería poder:

- explicar qué problema resuelve el concepto;
- reconocer cuándo ese problema existe;
- identificar cuándo el concepto sería innecesario;
- reconstruir el razonamiento que llevó a la solución;
- generar o pedir nuevos ejemplos sin perder la intención original.

Si solo puede repetir la estructura final, la lección todavía no terminó de enseñar.
