# Diseño de realización

Esta superficie coordina el diseño de una realización concreta de la fuente pedagógica definida en `generation-instructions.md`.

La realización está dividida por responsabilidad para evitar que selección del caso, evolución causal, decisiones técnicas, estructura editorial y diseño visual compitan dentro de un único documento.

## Orden de trabajo

1. [Caso conductor](realization-case.md) — candidatos, selección, restricciones y validación.
2. [Evolución causal](realization-evolution.md) — estado, presión, cambio mínimo y contrafactual de cada etapa.
3. [Realización técnica mínima](realization-technical.md) — lenguaje, mecanismos concretos, exclusiones y reproducibilidad.
4. [Diseño editorial](realization-editorial.md) — argumentos mayores, uso del código, ritmo y jerarquía pública.
5. [Especificación visual](realization-visual.md) — representaciones, componentes Teaching y bocetos que pueden aportar evidencia.
6. [Evidencia de implementación](realization-implementation.md) — estados ejecutables, validaciones y revisiones provocadas por el código.
7. [Exploraciones soportadas](realization-explorations.md) — modos disponibles, material requerido y composición del texto preparado para un LLM.

Cada documento depende de las decisiones anteriores, pero puede revisarse de forma independiente cuando nueva evidencia revele un problema localizado.

## Regla de autoridad

Estos documentos diseñan **esta realización**. No redefinen silenciosamente la fuente pedagógica.

Si una decisión de realización revela que la intención, el recorrido causal abstracto o sus invariantes son insuficientes, la revisión debe volver explícitamente a `generation-instructions.md`.

## Estado del diseño

La fuente, el caso conductor, la evolución causal, la realización técnica mínima y la estructura editorial están definidos.

La especificación visual está definida y, por ahora, no exige componentes semánticos nuevos.

Las etapas 1 a 7 ya fueron materializadas y validadas por CI. La etapa 8 ya fue materializada como síntesis de la forma resultante, sin introducir una refactorización estructural adicional.

La trayectoria técnica de la realización está cerrada.

La primera superficie de exploraciones soportadas también está diseñada para esta lección. Las cuatro exploraciones iniciales pueden sostenerse con la fuente y la evidencia disponibles.

Permanecen como decisiones de publicación:

- la geometría exacta de las dos representaciones que pueden requerir boceto;
- qué fragmentos de los snapshots deben aparecer en el cuerpo de la lección y cuáles quedan como evidencia externa;
- la revisión visual final sobre el sitio;
- observar la primera realización de exploraciones como evidencia y revisar el contrato compartido si aparecen límites.

El `index.md` público ya existe. Las revisiones posteriores deben preservar su recorrido principal y tratar la superficie de exploraciones como una continuación opcional, no como parte de la secuencia causal obligatoria.

