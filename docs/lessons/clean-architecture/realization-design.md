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

Cada documento depende de las decisiones anteriores, pero puede revisarse de forma independiente cuando nueva evidencia revele un problema localizado.

## Regla de autoridad

Estos documentos diseñan **esta realización**. No redefinen silenciosamente la fuente pedagógica.

Si una decisión de realización revela que la intención, el recorrido causal abstracto o sus invariantes son insuficientes, la revisión debe volver explícitamente a `generation-instructions.md`.

## Estado del diseño

La fuente, el caso conductor, la evolución causal, la realización técnica mínima y la estructura editorial están definidos.

La especificación visual está definida y, por ahora, no exige componentes semánticos nuevos.

La primera etapa ejecutable ya fue materializada en `examples/clean-architecture/stage-01/` y su compilación en .NET 10 fue validada por CI.

Todavía permanecen abiertas las decisiones de:

- código definitivo de las transiciones posteriores;
- geometría exacta de las dos representaciones que pueden requerir boceto;
- si los ejemplos ejecutables permanecerán como snapshots por etapa o evolucionarán hacia otra forma de distribución.

El siguiente paso es materializar la **etapa 2** como un delta sobre el estado inicial: introducir una regla de cálculo suficientemente significativa para observar si merece una unidad propia, sin adelantar dominio ni otras abstracciones.

