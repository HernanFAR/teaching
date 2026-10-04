# Instrucciones de generación

Este documento conserva la **fuente pedagógica** de la lección sobre arquitectura limpia (Clean Architecture).

La realización publicada puede cambiar ejemplos, lenguaje, visuales, dificultad o forma de interacción. Esas decisiones no deben cambiar silenciosamente qué intentamos enseñar.

## Intención pedagógica

Al terminar la lección, la persona debería entender que **arquitectura limpia (Clean Architecture) no es una estructura de carpetas ni una colección obligatoria de capas**, sino una respuesta posible a ciertas presiones que aparecen cuando queremos preservar comportamiento importante mientras cambian los mecanismos que lo rodean.

La persona debería poder reconstruir una trayectoria como esta:

> Primero tenía una solución suficientemente buena.
>
> Después apareció una presión concreta.
>
> Para resolverla tuve que separar ciertas responsabilidades o cambiar la dirección de una dependencia.
>
> Repetido varias veces, eso produjo una estructura que finalmente podemos reconocer y nombrar como Clean Architecture.

La pregunta que queremos dejar disponible no es:

> ¿En qué capa debería poner esto?

sino:

> **¿Qué problema justifica esta separación?**

### Lo que no necesitamos enseñar todavía

Esta lección no necesita convertir a la persona en experta en Clean Architecture ni cubrir todo el ecosistema asociado.

No introducimos por anticipado, salvo que una presión real los haga necesarios:

- el diagrama de círculos como objeto de memorización;
- una estructura canónica `Domain / Application / Infrastructure / Presentation`;
- diseño dirigido por el dominio (DDD);
- CQRS;
- MediatR;
- Repository Pattern;
- Unit of Work;
- contenedores de inyección de dependencias como tema en sí mismo;
- una receta universal para organizar proyectos;
- una interfaz por cada clase o abstracción preventiva.

Alguno de estos mecanismos puede aparecer más adelante. **No tiene derecho a aparecer antes de que el problema lo reclame.**

### Intuición que queremos evitar

Queremos evitar que la persona reduzca Clean Architecture a:

> Separar el código en capas y hacer que todas las dependencias apunten hacia adentro.

Esa descripción puede corresponder a parte de una forma final, pero oculta las razones que la hicieron útil.

La intuición que queremos construir es más cercana a:

> **Cuando una política que nos importa queda demasiado condicionada por detalles que deberían poder cambiar, aparece una razón para modificar esa relación.**

Todavía no necesitamos llamar a esos lados `policy`, `mechanism`, `domain` o `adapter`. El vocabulario puede aparecer después de la intuición.

### Evidencia de comprensión

La lección habrá funcionado si, frente a un sistema pequeño que está evolucionando, una persona puede:

1. reconocer una presión real antes de pedir una abstracción;
2. explicar qué comportamiento queremos preservar y qué detalle está interfiriendo con él;
3. proponer el cambio mínimo que reduzca esa tensión;
4. explicar por qué cambia la dirección o forma de una dependencia;
5. reconocer después que varias de esas decisiones forman una arquitectura coherente;
6. identificar un caso donde aplicar más Clean Architecture sería solamente complejidad innecesaria.

El último punto es un invariante fuerte: **si la lección termina enseñando que Clean Architecture debe aplicarse siempre, la lección falló**, incluso si las afirmaciones técnicas aisladas fueran correctas.

## Estado de la fuente

La intención pedagógica está definida.

El recorrido causal todavía debe descubrirse. La secuencia usada por realizaciones anteriores puede consultarse como referencia histórica, pero no constituye una secuencia estable para esta nueva fuente.
