# Cómo generamos una lección

Una lección de Teaching no empieza necesariamente como una página terminada.

Antes de decidir el ejemplo, el lenguaje, los diagramas o incluso la forma exacta de explicarla, intentamos conservar algo más estable: **qué queremos que una persona llegue a entender y qué recorrido hace que esa comprensión tenga sentido**.

A eso lo tratamos como la **fuente pedagógica** de la lección.

## Primero definimos qué debe permanecer

Una buena fuente debería dejar suficientemente claro:

- qué queremos que la persona entienda al terminar;
- qué todavía no necesita aprender;
- qué problemas o tensiones deben aparecer;
- en qué orden importa que aparezcan;
- qué límites y costos no deberían desaparecer de la explicación;
- qué condiciones de accesibilidad y acceso material debemos respetar.

No necesitamos decidir desde el comienzo cada frase, diagrama o ejercicio.

Sí necesitamos saber qué no queremos perder cuando cambiemos la forma de enseñar.

## El recorrido debe tener causas

Intentamos evitar una secuencia como:

> capa → interfaz → patrón → arquitectura

si todavía no sabemos por qué apareció cada cosa.

Preferimos un recorrido parecido a este:

```text
algo funciona
→ cambia una condición
→ aparece una limitación
→ exploramos qué podríamos hacer
→ hacemos el cambio mínimo que ayuda
→ ponemos nombre al concepto
→ observamos sus costos y límites
```

No todas las lecciones necesitan seguir exactamente esos pasos.

La regla importante es otra:

> **un concepto no debería aparecer antes de que exista una razón visible para necesitarlo.**

## Una fuente puede tener muchas realizaciones

La misma intención pedagógica puede expresarse de distintas formas.

Podemos cambiar:

- el lenguaje de programación;
- el dominio del ejemplo;
- la dificultad;
- la cantidad de ayuda;
- los diagramas;
- los ejercicios;
- la forma de interacción.

Eso nos permite, por ejemplo, explicar la misma idea usando C# y órdenes, Python y videojuegos, una tutoría guiada o una serie de ejercicios.

Pero hay cosas que no deberían cambiar silenciosamente: la intención de la lección, las tensiones esenciales, sus límites y aquello que todavía no corresponde introducir.

## Las condiciones de acceso también son parte de la generación

No queremos diseñar una explicación y preguntarnos por accesibilidad recién al final.

Mientras generamos una lección intentamos no asumir innecesariamente:

- software o servicios pagados;
- hardware potente;
- conexiones rápidas;
- educación universitaria;
- certificaciones;
- dominio previo del inglés;
- condiciones visuales, físicas o sensoriales ideales.

Cuando un término técnico todavía no es necesario, preferimos construir primero la intuición.

Cuando usamos un término en inglés que importa para comprender la idea, mostramos también su significado en español.

Y cuando una representación visual contiene información esencial, procuramos que exista una forma textual de acceder a ella.

## Una fuente incompleta no es lo mismo que una página incompleta

Podemos saber con claridad qué queremos enseñar aunque todavía no hayamos decidido el mejor diagrama o ejercicio.

Eso significa que la **fuente pedagógica** puede estar suficientemente definida aunque una realización concreta todavía esté incompleta.

También puede ocurrir lo contrario: una página puede verse terminada y, sin embargo, esconder que todavía no sabemos por qué introdujimos una abstracción o qué queremos que la persona comprenda.

Preferimos que esas dudas permanezcan visibles antes que rellenarlas con una explicación convincente pero inventada.

## Antes de publicar

Revisamos preguntas como estas:

- ¿podemos rastrear cada concepto importante hasta el problema que lo hizo útil?
- ¿introdujimos algo solamente porque “así se hace”?
- ¿mostramos qué ocurriría si no hiciéramos el cambio cuando eso ayuda a comprenderlo?
- ¿explicamos cuándo la técnica puede no ser necesaria?
- ¿distinguimos hechos de heurísticas y preferencias?
- ¿los recursos visuales responden preguntas concretas y siguen siendo comprensibles de otra forma?
- ¿alguien puede seguir el recorrido sin conocer previamente el nombre formal del concepto?
- ¿estamos introduciendo una barrera económica, lingüística, educativa o de accesibilidad que no era técnicamente necesaria?

Una lección no está terminada solo porque su resultado final sea correcto.

Está mucho más cerca de estar terminada cuando una persona puede **reconstruir por qué ese resultado llegó a tener sentido**.
