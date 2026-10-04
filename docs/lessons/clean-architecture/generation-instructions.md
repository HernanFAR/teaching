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

## Recorrido causal

El recorrido no parte de una arquitectura que deba alcanzarse. Parte de una solución pequeña que funciona y deja que cada separación aparezca únicamente cuando una nueva presión la vuelve útil.

La secuencia estable de tensiones es:

### 1. Una solución directa es suficiente

Partimos con una operación pequeña resuelta cerca de su punto de entrada.

Puede validar datos, aplicar una regla sencilla, persistir un resultado y producir algún efecto externo. Que esas responsabilidades estén inicialmente juntas **no se presenta como un error**.

La primera pregunta es:

> ¿Tenemos alguna razón observable para separar algo todavía?

Si la respuesta es no, no hacemos nada.

### 2. Una regla empieza a importar por sí misma

Alguna parte del comportamiento deja de ser una transformación trivial del transporte y empieza a representar una decisión del problema: cálculo, elegibilidad, límites, precios, permisos u otra política.

La dificultad observable no es que el archivo sea largo. Es que una regla que queremos poder comprender y cambiar está mezclada con detalles que no explican esa regla.

El cambio mínimo consiste en darle una unidad propia al comportamiento que ya tiene identidad.

Todavía no necesitamos una capa completa ni una taxonomía arquitectónica.

### 3. El mismo comportamiento necesita otro punto de entrada

La operación deja de pertenecer exclusivamente a HTTP, una interfaz gráfica o cualquier mecanismo de entrada concreto.

Puede aparecer otra forma de iniciarla: una tarea programada, una interfaz de línea de comandos, un mensaje, otra interfaz de usuario o una prueba que necesita ejecutar el comportamiento sin reconstruir el transporte.

Ahora se vuelve observable una frontera distinta:

> El mecanismo que inicia la operación no debería poseer la operación.

El cambio mínimo es hacer que el punto de entrada traduzca su contexto y delegue en una operación independiente.

En este momento puede empezar a ser útil reconocer esa operación como un **caso de uso**, pero el nombre aparece después de experimentar la necesidad.

### 4. El caso de uso sigue condicionado por mecanismos externos

Aunque ya no dependa de su punto de entrada, la operación todavía puede conocer directamente una base de datos, un cliente HTTP, un proveedor de correo, un sistema de archivos u otro mecanismo concreto.

Eso se vuelve una limitación cuando necesitamos preservar la operación mientras alguno de esos mecanismos cambia, se reemplaza o necesita una realización controlable.

La pregunta pasa a ser:

> ¿Qué capacidad necesita realmente la operación, independientemente de quién la realice?

El cambio mínimo es expresar esa capacidad desde el lado que la necesita y mover la realización concreta fuera de ese límite.

Aquí aparece por primera vez una razón real para **invertir una dependencia**.

### 5. La inversión se repite y revela una forma

Cuando la misma relación aparece alrededor de persistencia, servicios externos u otros efectos, deja de parecer una excepción local.

Podemos distinguir:

- comportamiento que expresa políticas u operaciones;
- capacidades que ese comportamiento necesita;
- mecanismos externos que realizan esas capacidades;
- mecanismos de entrada que traducen una interacción hacia esas operaciones.

En este punto términos como **puerto** y **adaptador** pueden ayudarnos a nombrar una forma que ya existe.

No introducimos una interfaz por cada clase. Introducimos límites donde una dependencia concreta está interfiriendo con algo que queremos preservar.

### 6. Las reglas y la orquestación dejan de ser la misma cosa

A medida que el comportamiento crece, puede aparecer otra diferencia útil: algunas reglas describen el problema en sí mismo, mientras otras coordinan una operación concreta.

Si esa diferencia todavía no aporta nada, no la forzamos.

Cuando sí se vuelve observable, podemos separar:

- reglas o modelos cuya validez no depende de cómo se ejecuta una operación;
- casos de uso que coordinan esas reglas y las capacidades necesarias para cumplir un objetivo.

Solo entonces empieza a tener sentido hablar de **dominio** y **aplicación** como responsabilidades distintas.

### 7. Alguien todavía debe conectar las piezas

Invertir dependencias no elimina los mecanismos concretos.

La base de datos, el servidor HTTP, los clientes externos y otras realizaciones siguen existiendo. La diferencia es que ahora pueden conectarse alrededor de las políticas en lugar de definirlas.

Necesitamos un lugar externo que elija implementaciones y construya la aplicación.

Eso hace visible una última propiedad:

> Las políticas no necesitan conocer la composición concreta que permite ejecutarlas.

### 8. Recién ahora nombramos la arquitectura

Después de recorrer estas presiones podemos observar el resultado acumulado:

- los mecanismos de entrada dependen de las operaciones que invocan;
- las operaciones expresan las capacidades que necesitan;
- los mecanismos externos realizan esas capacidades;
- las reglas más estables pueden permanecer independientes de la orquestación;
- la composición concreta vive hacia el exterior.

En este punto **Clean Architecture** deja de ser el punto de partida y pasa a ser un nombre útil para reconocer varias decisiones que ya vimos aparecer.

El diagrama clásico, las capas y la regla de dependencias pueden utilizarse ahora como herramientas de síntesis, no como premisas.

### Contrafactual de salida

El recorrido no exige llegar siempre hasta el paso 8.

Si una solución pequeña no experimenta estas presiones, detenerse antes puede ser la decisión correcta.

Una realización debe hacer visible al menos un momento donde **no hacer nada** siga siendo preferible a introducir una separación adicional. De otro modo, la secuencia podría convertirse silenciosamente en una receta de sobrearquitectura.

## Estado de la fuente

La intención pedagógica y el recorrido causal están definidos.

El caso conductor concreto todavía permanece abierto. La realización deberá elegir uno que pueda experimentar estas tensiones sin fabricarlas artificialmente.

La secuencia usada por realizaciones anteriores puede consultarse como referencia histórica, pero no constituye autoridad sobre esta fuente.
