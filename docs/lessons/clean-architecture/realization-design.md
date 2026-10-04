# Diseño de realización

Esta superficie coordina el diseño de una realización concreta de la fuente pedagógica definida en `generation-instructions.md`.

La realización está dividida por responsabilidad para evitar que selección del caso, evolución causal, decisiones técnicas, estructura editorial y diseño visual compitan dentro de un único documento.

## Orden de trabajo

1. [Caso conductor](realization-case.md) — candidatos, selección, restricciones y validación.
2. [Evolución causal](realization-evolution.md) — estado, presión, cambio mínimo y contrafactual de cada etapa.
3. [Realización técnica mínima](realization-technical.md) — lenguaje, mecanismos concretos, exclusiones y reproducibilidad.
4. [Diseño editorial](realization-editorial.md) — argumentos mayores, uso del código, ritmo y jerarquía pública.
5. [Especificación visual](realization-visual.md) — representaciones, componentes Teaching y bocetos que pueden aportar evidencia.

Cada documento depende de las decisiones anteriores, pero puede revisarse de forma independiente cuando nueva evidencia revele un problema localizado.

## Regla de autoridad

Estos documentos diseñan **esta realización**. No redefinen silenciosamente la fuente pedagógica.

Si una decisión de realización revela que la intención, el recorrido causal abstracto o sus invariantes son insuficientes, la revisión debe volver explícitamente a `generation-instructions.md`.

## Estado del diseño

La fuente, el caso conductor, la evolución causal, la realización técnica mínima y la estructura editorial están definidos.

La especificación visual está definida y, por ahora, no exige componentes semánticos nuevos.

Todavía permanecen abiertas las decisiones de:

- código definitivo que materializará cada transición;
- geometría exacta de las dos representaciones que pueden requerir boceto;
- si los ejemplos ejecutables vivirán solamente dentro de la lección o también como artefactos separados y versionados.

El siguiente paso es comenzar la **implementación de la realización**: construir el primer estado ejecutable del caso y usarlo como evidencia antes de redactar el recorrido completo en `index.md`.

