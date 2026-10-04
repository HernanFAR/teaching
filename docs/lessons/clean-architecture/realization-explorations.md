# Exploraciones soportadas · Clean Architecture

Este documento diseña la realización de las exploraciones soportadas por la lección pública de Clean Architecture.

No redefine la fuente pedagógica. Usa los contratos compartidos de `agents/explorations.md` y decide qué puede sostener honestamente esta realización.

## Resultado

Esta lección puede soportar las cuatro exploraciones iniciales de Teaching:

| Exploración | ¿Soportada? | Evidencia disponible |
| --- | --- | --- |
| Otro caso | Sí | La fuente no fija el dominio y contiene diez restricciones explícitas para validar otro caso conductor. |
| Profundizar | Sí | La realización conserva tensiones, conceptos ya introducidos, contrafactuales, límites y una tensión deliberadamente abierta sobre fallos parciales. |
| Aplicarlo a mi caso | Sí | La fuente separa invariantes de mecanismos y permite detener la evolución cuando una presión no existe. |
| Ponme a prueba | Sí | La trayectoria causal fue materializada por etapas y conserva momentos donde no cambiar nada sigue siendo defendible. |

## Regla de composición

Una exploración pública combina:

```text
orientación específica de esta lección
+ contrato del modo de exploración
+ necesidad concreta escrita por la persona
→ texto preparado para un LLM
```

La página no llama a un LLM directamente.

La primera realización pública prepara el texto localmente en el navegador para que la persona pueda inspeccionarlo y copiarlo.

Esto mantiene visible qué contexto entrega Teaching y qué necesidad pertenece al estudiante, sin introducir todavía dependencia de un proveedor o API externa.

## Referencias fuente

Para esta lección, la frontera de referencia más útil para una exploración general es la carpeta completa:

`https://github.com/HernanFAR/teaching/tree/lesson/clean-architecture/docs/lessons/clean-architecture`

La carpeta concentra la fuente pedagógica y los artefactos de realización que un LLM puede consultar cuando tiene acceso a GitHub.

No todas las futuras lecciones deben usar una carpeta completa. La realización debe elegir la referencia mínima que siga siendo suficiente para la exploración: uno o varios archivos concretos, una carpeta, evidencia ejecutable u otra superficie resolvible.

Los prompts deben indicar explícitamente que una referencia inaccesible no puede tratarse como material efectivamente consultado.

## Material por exploración

### Otro caso

Necesita:

- intención pedagógica;
- invariantes de la fuente;
- restricciones del caso conductor;
- trayectoria causal de referencia;
- contrafactual de detenerse antes;
- exclusiones conceptuales.

No necesita copiar todos los fragmentos de código de la realización de órdenes.

El texto orientativo vive en:

`explorations/another-case.txt`

El routing automático usa `explorations/automatic.txt` para seleccionar entre los cuatro contratos soportados sin inventar un quinto modo pedagógico.

### Profundizar

Necesita:

- intención pedagógica;
- conceptos y tensiones ya presentes;
- límites explícitos de la lección;
- tensión abierta de persistencia + webhook;
- regla obligatoria de marcar visualmente cualquier cruce fuera del alcance original.

El texto orientativo vive en:

`explorations/deepen.txt`

La exploración puede exceder el alcance original, pero no puede hacerlo silenciosamente ni reinterpretar retrospectivamente la lección.

### Aplicarlo a mi caso

Necesita:

- pregunta guía;
- invariantes;
- familia de presiones del recorrido;
- contrafactuales;
- derecho a detenerse antes;
- distinción entre semántica y mecanismo concreto.

El texto orientativo vive en:

`explorations/apply-to-my-case.txt`

La realización debe permitir que presiones ausentes permanezcan ausentes.

### Ponme a prueba

Necesita:

- trayectoria causal;
- evidencia de implementación por etapas;
- momentos donde no cambiar nada es defendible;
- diferencias entre ownership de operación, inversión de dependencia, Domain/Application y Composition.

El texto orientativo vive en:

`explorations/test-me.txt`

La realización debe presentar una presión a la vez y no revelar la transición canónica antes de que la persona decida.

## Interacción pública mínima

La primera materialización mostró que presentar las cuatro exploraciones como cuatro decisiones visuales principales hacía que la taxonomía interna compitiera con la necesidad concreta de la persona.

La revisión adopta una sola superficie de composición:

1. la necesidad concreta en texto libre es el elemento principal;
2. el modo de exploración aparece como configuración secundaria;
3. el modo predeterminado es **Automático**;
4. Automático no es una quinta exploración: funciona como un router que elige entre las cuatro exploraciones soportadas y debe declarar cuál escogió;
5. las cuatro exploraciones siguen disponibles manualmente para quien quiera controlar la realización;
6. cuando la persona selecciona manualmente un modo, el prompt preserva la procedencia de esa decisión: el LLM realiza el modo ya seleccionado y no debe presentarlo como una elección propia;
7. una ayuda colapsable explica los modos sin obligar a comprender la taxonomía antes de formular la necesidad;
8. el texto completo preparado puede inspeccionarse antes de copiarlo;
9. copiar al portapapeles requiere una acción explícita;
10. la necesidad del estudiante no se envía a ningún servidor de Teaching.

La interacción funciona enteramente en el navegador.

Esta revisión preserva los contratos de exploración y cambia solamente su jerarquía de presentación:

```text
necesidad concreta
→ modo automático por defecto
→ configuración explícita si la persona la necesita
```

La taxonomía soporta la experiencia; no necesita dominarla visualmente.

## Fallos honestos

Preparar un prompt no garantiza que toda solicitud del estudiante sea realizable.

Los textos orientativos deben permitir que el LLM diga, por ejemplo:

- que otro caso solo soporta parte del recorrido;
- que una presión no existe en el sistema del estudiante;
- que una pregunta de profundización exige cruzar el alcance original;
- que una respuesta alternativa en el ejercicio sigue siendo defendible.

La exploración no debe fabricar evidencia para conservar una narrativa favorable.

## Estado

Esta es la primera realización real de las reglas de `agents/explorations.md`.

La experiencia resultante debe tratarse como evidencia para revisar esas reglas y, eventualmente, para el issue de TPIR si aparecen estructuras comunes que sobreviven a más lecciones.
