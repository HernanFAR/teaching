# Diseño de realización

Este documento diseña una realización concreta de la fuente pedagógica definida en `generation-instructions.md`.

No redefine la intención de la lección. Su función es escoger un caso conductor válido y, después, decidir cómo convertir la fuente en una experiencia publicada.

## Selección del caso conductor

La fuente no fija un dominio concreto. Por eso esta realización debe elegir uno y validarlo contra las restricciones de la fuente antes de diseñar la página pública.

### Candidatos considerados

#### Crear una orden

Una operación comienza recibiendo una solicitud para crear una orden, aplicar reglas simples, guardar el resultado y producir algún efecto externo.

Puede evolucionar naturalmente hacia:

- reglas de precio, descuentos, límites o elegibilidad;
- más de un mecanismo de entrada;
- persistencia reemplazable;
- notificaciones u otros efectos externos;
- separación entre coordinación de la operación y reglas del problema;
- composición externa de mecanismos.

Riesgo principal: es un ejemplo muy conocido y puede arrastrar por costumbre conceptos como repositorios, DDD, pagos o inventario antes de que sean necesarios.

#### Reservar un recurso

Una operación reserva una sala, equipo u otro recurso para un intervalo determinado.

Puede evolucionar naturalmente hacia:

- reglas de disponibilidad, horarios o conflictos;
- distintos mecanismos de entrada;
- persistencia y calendarios externos;
- notificaciones;
- separación entre reglas de reserva y coordinación de la operación.

Riesgo principal: concurrencia, zonas horarias y calendarios pueden convertirse en problemas más interesantes que la arquitectura que intentamos enseñar.

#### Registrar una solicitud

Una operación registra una solicitud de atención o trámite y la deja disponible para su procesamiento posterior.

Puede evolucionar hacia:

- reglas de elegibilidad o clasificación;
- múltiples canales de entrada;
- persistencia;
- notificaciones o integraciones;
- coordinación y composición externa.

Riesgo principal: si las reglas no adquieren suficiente identidad, el caso puede permanecer demasiado cercano a CRUD y obligarnos a fabricar tensiones para alcanzar partes posteriores del recorrido.

### Evaluación contra las restricciones

| Restricción | Crear una orden | Reservar un recurso | Registrar una solicitud |
| --- | --- | --- | --- |
| Inicio simple y defendible | Sí | Sí | Sí |
| Regla que puede adquirir identidad | Sí | Sí | Depende del dominio |
| Más de un mecanismo de entrada plausible | Sí | Sí | Sí |
| Capacidad externa necesaria | Sí | Sí | Sí |
| Mecanismo externo reemplazable | Sí | Sí | Sí |
| Diferencia entre orquestación y reglas | Sí | Sí | Posible, pero menos inmediata |
| Composición externa | Sí | Sí | Sí |
| Contrafactuales reales | Sí | Sí | Sí |
| Presiones naturales sin fabricarlas | Sí | Sí | Riesgo medio |
| No necesita Clean Architecture al inicio | Sí | Sí | Sí |

## Caso seleccionado: crear una orden

Para esta realización seleccionamos **crear una orden**.

No se selecciona porque haya aparecido en una versión anterior de la lección. Se selecciona de nuevo porque, al contrastarlo contra la fuente actual, permite recorrer las tensiones requeridas con menos presión artificial que los otros candidatos considerados.

La selección queda sujeta a estas restricciones de realización:

- la primera versión debe seguir siendo razonable como implementación directa;
- no introduciremos pagos, inventario, DDD, repositorios ni otras abstracciones solo porque sean comunes en ejemplos de comercio;
- cada nueva regla aparecerá únicamente cuando la etapa la necesite;
- el segundo mecanismo de entrada deberá representar una necesidad plausible de ejecutar la misma operación, no un pretexto arquitectónico;
- los efectos externos deberán aparecer como capacidades concretas que la operación necesita;
- en más de una etapa deberá seguir siendo defendible decidir no separar todavía;
- si durante la implementación una presión necesita ser fabricada para que el recorrido funcione, revisaremos el caso o la fuente en vez de ocultarlo.

### Validación

El caso satisface el criterio de aceptación de la fuente:

> Podemos comenzar con una creación de orden directa y evolucionarla hacia una forma reconocible de arquitectura limpia sin necesitar introducir desde el inicio ninguna separación cuya causa todavía no sea observable.

Esta validación es provisional en el sentido correcto: la implementación puede aportar evidencia que obligue a revisar el diseño. No convierte al caso en parte inmutable de la fuente pedagógica.

## Evolución concreta del caso

Esta realización usará una operación estable durante todo el recorrido:

> **Crear una orden a partir de una lista de productos y cantidades.**

El objetivo de la operación no cambia. Lo que cambia son las condiciones que la rodean y, con ellas, las razones para separar responsabilidades o invertir dependencias.

La evolución se diseña primero en términos de comportamiento y presión. Las decisiones de lenguaje, framework, estructura de proyectos y representación visual permanecen abiertas.

### Etapa 1 · Una creación de orden directa es suficiente

#### Estado

Existe un único punto de entrada que recibe una solicitud para crear una orden.

La operación:

- comprueba que existan productos y cantidades válidas;
- calcula un total sencillo a partir de precio por cantidad;
- guarda la orden usando un mecanismo concreto;
- devuelve el identificador y el total generado.

Toda la operación puede vivir cerca del punto de entrada.

#### Presión

Todavía no aparece ninguna presión que justifique separar la operación.

#### Cambio mínimo

Ninguno.

La implementación directa es la solución preferida mientras siga siendo fácil de comprender y modificar.

#### Contrafactual

Introducir ahora un caso de uso, puertos, adaptadores o una capa de dominio agregaría estructura sin resolver un problema observable.

### Etapa 2 · El cálculo deja de ser una suma trivial

#### Estado

Crear la orden sigue siendo una operación pequeña, pero el total empieza a depender de reglas como:

- descuento para órdenes que superan un monto determinado;
- límite de descuento;
- productos que no participan de la promoción.

La regla puede expresarse inicialmente dentro de la misma operación.

#### Presión

El cálculo ya representa una decisión del problema y empieza a quedar oculto entre traducción de entrada, persistencia y construcción de la respuesta.

Queremos poder leer y cambiar esa regla sin recorrer detalles que no explican cómo se obtiene el total.

#### Cambio mínimo

Darle una unidad propia al cálculo del total.

Todavía no introducimos una capa `Domain`, una entidad rica ni interfaces. Solo separamos un comportamiento que ya adquirió identidad.

#### Contrafactual

Si el cálculo siguiera siendo precio por cantidad, mantenerlo dentro de la operación continuaría siendo razonable.

### Etapa 3 · La misma operación llega desde otro canal

#### Estado

La creación de órdenes funciona desde su punto de entrada original.

Aparece una integración con un marketplace externo que también necesita crear órdenes. Ese canal entrega datos con otra forma, pero el objetivo sigue siendo el mismo: crear una orden según las mismas reglas.

#### Presión

Si cada entrada posee su propia creación de orden, empezamos a duplicar o coordinar de manera inconsistente las reglas y efectos de la operación.

El problema no es tener dos controladores o dos mecanismos de entrada. El problema es que el mecanismo que recibe la interacción termina poseyendo el comportamiento que ambos necesitan ejecutar.

#### Cambio mínimo

Extraer la operación de creación para que cada entrada:

1. traduzca sus datos al lenguaje de la operación;
2. invoque la misma creación de orden;
3. traduzca el resultado a su propio mecanismo de salida.

Ahora resulta útil llamar **caso de uso** a esa operación compartida.

#### Contrafactual

Mientras exista un único punto de entrada y la operación sea pequeña, esta separación puede seguir sin aportar suficiente valor.

### Etapa 4 · La operación conoce demasiado sobre cómo se guarda

#### Estado

Los distintos puntos de entrada ya delegan en un mismo caso de uso.

Ese caso de uso todavía guarda la orden utilizando directamente una tecnología o API de persistencia concreta.

#### Presión

La forma de persistencia empieza a interferir con la operación:

- obliga al caso de uso a conocer detalles de conexión, consultas o modelos de almacenamiento;
- hace más costoso ejecutar la operación con una realización controlada;
- una futura sustitución del mecanismo de almacenamiento exigiría modificar código que también expresa la creación de la orden.

La capacidad que realmente necesita la operación es mucho más pequeña que la tecnología concreta:

> guardar una orden y obtener el resultado necesario para continuar.

#### Cambio mínimo

Expresar esa capacidad desde el lado del caso de uso y mover el mecanismo concreto de persistencia fuera de él.

La forma exacta de expresar esa capacidad queda abierta: interfaz, función, trait, delegate u otro mecanismo apropiado para el lenguaje elegido.

Aquí aparece una primera **inversión de dependencia** por una causa observable.

#### Contrafactual

Si la persistencia sigue siendo trivial, estable y no interfiere con la comprensión ni evolución de la operación, mantener la dependencia concreta todavía puede ser una decisión razonable.

### Etapa 5 · Aparece otra capacidad externa

#### Estado

La persistencia ya se expresa como una capacidad que el caso de uso necesita.

El negocio ahora requiere notificar la creación exitosa de una orden mediante un servicio externo.

#### Presión

Podríamos incorporar directamente el SDK o cliente concreto del proveedor dentro del caso de uso, pero eso volvería a mezclar una política de la operación —notificar una orden creada— con el mecanismo elegido para realizarla.

La misma relación observada en persistencia reaparece en otro efecto.

#### Cambio mínimo

Expresar la capacidad de notificación que necesita el caso de uso y realizarla desde un mecanismo externo.

Ahora ya no tenemos una excepción aislada. Tenemos una forma repetida:

- una operación expresa qué necesita;
- un mecanismo externo realiza esa capacidad.

En este punto los nombres **puerto** y **adaptador** pueden empezar a aportar lenguaje para describir algo que ya observamos.

#### Contrafactual

Una única integración pequeña y estable podría seguir viviendo directamente en la operación. La aparición de un segundo límite no convierte automáticamente cada dependencia en un puerto.

### Etapa 6 · Calcular una orden y crear una orden dejan de ser lo mismo

#### Estado

El caso de uso coordina:

- recepción de los datos normalizados;
- cálculo del total;
- persistencia;
- notificación.

Las reglas de cálculo continúan creciendo: promociones combinables o excluyentes, límites de descuento y condiciones propias de una orden válida.

#### Presión

Empiezan a convivir dos tipos de decisiones:

- reglas cuya validez pertenece a la orden y puede entenderse sin saber cómo se guarda o desde dónde se invoca;
- coordinación necesaria para completar la operación de crear una orden.

Mantener ambas cosas como una sola responsabilidad empieza a ocultar la diferencia entre **qué significa una orden válida y calculada** y **cómo coordinamos el proceso para crearla**.

#### Cambio mínimo

Separar las reglas estables de la orden de la orquestación del caso de uso.

Solo en este punto usamos **dominio** y **aplicación** como nombres útiles para responsabilidades que ya se hicieron distintas.

No asumimos que toda regla deba convertirse en una entidad ni que el dominio requiera un estilo específico de modelado.

#### Contrafactual

Si las reglas permanecieran pequeñas y solo fueran relevantes dentro de una operación, crear una separación entre dominio y aplicación podría seguir siendo complejidad accidental.

### Etapa 7 · La aplicación necesita ser ensamblada

#### Estado

Tenemos:

- mecanismos de entrada que invocan el caso de uso;
- reglas del problema separadas de la coordinación;
- capacidades expresadas por la operación;
- mecanismos concretos que realizan persistencia y notificación.

#### Presión

Las piezas necesitan encontrarse en algún lugar.

Si el propio caso de uso selecciona qué base de datos, qué proveedor de notificaciones o qué entrada utilizar, volveríamos a introducir hacia adentro conocimiento sobre mecanismos concretos.

#### Cambio mínimo

Mover la selección y construcción de realizaciones concretas hacia un punto externo de composición.

Ese punto conoce los detalles necesarios para ejecutar el sistema. Las políticas no necesitan conocerlo.

#### Contrafactual

En una aplicación minúscula, construir las dependencias explícitamente junto al arranque puede ser suficiente. El concepto de composición no exige un contenedor ni una infraestructura adicional.

### Etapa 8 · Nombramos la forma resultante

#### Estado

Sin haber partido de una plantilla, terminamos con una forma donde:

- las entradas traducen interacciones hacia casos de uso;
- los casos de uso coordinan objetivos;
- las reglas más estables pueden vivir independientemente de esa coordinación;
- las capacidades requeridas se expresan desde el lado de las políticas;
- los mecanismos externos realizan esas capacidades;
- la composición concreta ocurre hacia el exterior.

#### Presión

Ya no necesitamos otra separación para continuar la demostración. Necesitamos lenguaje para poder reconocer y comunicar la forma que emergió.

#### Cambio mínimo

Comparar la estructura construida con las ideas de **Clean Architecture** y presentar la regla de dependencias, las capas o diagramas conocidos como herramientas de síntesis.

La arquitectura se nombra después de poder reconstruir por qué existen sus fronteras.

#### Contrafactual

El hecho de poder describir esta solución como Clean Architecture no implica que cada sistema deba recorrer estas ocho etapas ni terminar con la misma estructura física.

## Continuidad entre etapas

Cada etapa debe conservar el mismo objetivo observable: **crear una orden**.

Una nueva presión puede agregar condiciones, entradas o mecanismos, pero no puede reemplazar silenciosamente el problema por otro solo para justificar la siguiente decisión arquitectónica.

Antes de implementar cada transición se verificará:

1. qué comportamiento queremos preservar;
2. qué nueva condición vuelve insuficiente o incómoda la forma actual;
3. cuál es el cambio mínimo que responde a esa condición;
4. qué nombre, si alguno, resulta útil después del cambio;
5. por qué seguir sin hacer ese cambio todavía podría ser razonable en un contexto más simple.

## Estado del diseño

El caso conductor y su evolución concreta están definidos.

Todavía permanecen abiertas las decisiones de:

- lenguaje y framework;
- tecnología concreta de persistencia;
- proveedor o forma concreta de notificación;
- forma exacta de los dos mecanismos de entrada;
- estructura editorial de la página publicada;
- código específico mostrado en cada etapa;
- representaciones visuales y componentes.

El siguiente paso es definir la **realización técnica mínima** necesaria para que estas ocho transiciones puedan mostrarse con código honesto, reproducible y sin introducir mecanismos antes de tiempo.
