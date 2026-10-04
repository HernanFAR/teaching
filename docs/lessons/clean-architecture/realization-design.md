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

## Realización técnica mínima

La realización técnica debe hacer visibles las tensiones del caso sin convertir herramientas o frameworks en protagonistas de la lección.

### Lenguaje y runtime

Usaremos **C# sobre .NET 10**.

La elección es de realización, no de fuente pedagógica. Se usa porque permite mostrar de forma directa:

- funciones y tipos pequeños;
- dependencias concretas y abstractas;
- composición explícita;
- más de un mecanismo de entrada;
- acceso a infraestructura local sin requerir servicios pagados.

No utilizaremos características avanzadas del lenguaje cuando una construcción más común comunique mejor la decisión arquitectónica.

### Aplicación inicial

La primera entrada será una **ASP.NET Core Minimal API** con un único endpoint:

`POST /orders`

La primera versión puede vivir completamente en `Program.cs` o en una función cercana al endpoint si eso mantiene el ejemplo legible.

No empezaremos con controllers, mediator, handlers, módulos, capas ni proyectos separados.

El objetivo es que el código inicial sea suficientemente pequeño como para que mantenerlo junto sea una decisión razonable.

### Persistencia

Usaremos **SQLite** como persistencia local y `Microsoft.Data.Sqlite` como mecanismo concreto de acceso.

No usaremos EF Core en esta realización.

La decisión busca que la dependencia de infraestructura sea visible sin añadir un ORM como segunda materia de estudio. La primera versión podrá abrir una conexión y ejecutar SQL directamente desde la operación.

Cuando llegue la presión de persistencia, esa dependencia concreta podrá moverse detrás de la capacidad mínima que el caso de uso necesita.

SQLite además permite ejecutar el ejemplo sin instalar ni pagar un servidor de base de datos.

### Segundo mecanismo de entrada

La segunda entrada será una pequeña aplicación de consola para **importar una orden proveniente de un marketplace** desde un payload JSON.

Su responsabilidad será:

1. leer el formato del marketplace;
2. traducirlo a los datos que necesita la operación de crear una orden;
3. invocar la misma operación;
4. presentar el resultado en su propio formato.

No compartirá DTOs de transporte con HTTP únicamente para reducir código.

El punto pedagógico es que dos mecanismos diferentes necesitan ejecutar el mismo objetivo sin poseerlo.

La consola se introducirá solo en la etapa 3. No existirá desde el inicio como infraestructura preventiva.

### Capacidad externa de notificación

En la etapa 5 aparecerá una notificación mediante **webhook HTTP** después de crear correctamente una orden.

El caso de uso necesitará expresar algo semejante a:

> notificar que una orden fue creada.

La realización concreta podrá usar `HttpClient`.

Para mantener el ejemplo reproducible, la lección no exigirá una cuenta externa ni un proveedor comercial. El webhook podrá apuntar a un receptor local mínimo o sustituirse por una realización controlada al ejecutar pruebas o ejemplos.

Lo importante no es el proveedor, sino poder observar que la política de notificar y el mecanismo HTTP son decisiones distintas.

### Estructura física

La realización **no empezará con una solución de cuatro proyectos**.

Mientras sea razonable, mantendremos un único proyecto y dejaremos que aparezcan primero fronteras semánticas dentro del código.

Solo separaremos ensamblados o proyectos si una etapa posterior obtiene una ventaja pedagógica concreta de esa separación.

Esto permite mostrar que:

> una frontera arquitectónica no existe porque haya una carpeta o un `.csproj`.

La organización física debe seguir a las responsabilidades descubiertas, no anticiparlas.

### Mecanismos que no usaremos

Para evitar que bibliotecas conocidas resuelvan por nosotros las tensiones que queremos observar, esta realización no introducirá por defecto:

- MediatR;
- CQRS;
- Carter;
- Repository Pattern como plantilla;
- Unit of Work como plantilla;
- AutoMapper;
- un contenedor adicional de inyección de dependencias;
- una librería de resultados o programación funcional;
- generación de código;
- mensajería o brokers externos;
- Docker como requisito para seguir la lección.

El contenedor incluido en ASP.NET Core puede utilizarse cuando lleguemos a composición, pero no se presentará como la causa ni como la definición de inversión de dependencias.

### Evolución física esperada

La forma concreta del código podrá evolucionar aproximadamente así:

1. **Etapas 1–2:** un único proyecto web; implementación directa y luego una función o tipo separado para la regla de cálculo.
2. **Etapa 3:** el comportamiento compartido adquiere una unidad propia y aparece la entrada de consola.
3. **Etapa 4:** la persistencia SQLite deja de ser conocida directamente por el caso de uso.
4. **Etapa 5:** la notificación HTTP repite la relación capacidad/realización.
5. **Etapa 6:** reglas de la orden y orquestación pasan a tener responsabilidades distinguibles.
6. **Etapa 7:** `Program.cs` o un punto equivalente realiza la composición concreta.
7. **Etapa 8:** observamos y nombramos la forma resultante; no reorganizamos el código únicamente para parecerse a un diagrama clásico.

Esta trayectoria es una expectativa de diseño, no un árbol de carpetas obligatorio. La implementación puede obligarnos a revisar alguna decisión si aparece evidencia mejor.

### Reproducibilidad y acceso

La experiencia debe poder seguirse con:

- el SDK gratuito de .NET;
- un editor de texto o IDE gratuito;
- SQLite local;
- ninguna cuenta externa obligatoria;
- ninguna infraestructura de nube;
- hardware de desarrollo corriente.

Los comandos y ejemplos necesarios deberán tener alternativa textual completa. Ninguna explicación esencial dependerá de una captura de pantalla, animación o servicio remoto.

## Estructura editorial

La página publicada no presentará ocho etapas como ocho capítulos equivalentes.

Las etapas son la mecánica causal interna de la realización. Editorialmente se agruparán en **cuatro argumentos mayores** para que la tabla de contenidos muestre la transformación conceptual y no una lista plana de pasos.

### Apertura

La lección abrirá con tres ideas breves:

1. una operación concreta: crear una orden;
2. una regla de trabajo: **no movemos una línea de código sin una causa**;
3. una advertencia: no comenzaremos dibujando Clean Architecture ni organizando cuatro capas.

La apertura no explicará todavía `Domain`, `Application`, puertos, adaptadores ni la regla de dependencias.

Su trabajo es establecer el contrato de lectura:

> observaremos qué deja de funcionar suficientemente bien y cambiaremos solo lo necesario.

También debe quedar visible desde el comienzo que detenerse antes puede ser una decisión correcta.

## Argumento I · Antes de necesitar arquitectura

Agrupa las etapas 1 y 2.

La pregunta que organiza esta parte es:

> **¿Cuándo una solución directa deja de ser suficientemente clara?**

### Una creación de orden directa es suficiente

La primera versión se presenta como código ejecutable y defendible, no como ejemplo deliberadamente malo.

Contenido principal:

- prosa breve que explica el objetivo de la operación;
- código suficiente para ver validación, cálculo simple, SQLite y respuesta;
- una nota explícita de por qué no separar nada todavía;
- un contrafactual visible: qué complejidad introduciríamos si aplicáramos la arquitectura por anticipado.

No necesitamos un diagrama arquitectónico en esta etapa.

### Una regla empieza a merecer nombre propio

La presión se muestra modificando el cálculo, no describiéndola solamente en abstracto.

Contenido principal:

- pequeño cambio de requisitos;
- fragmento de código donde la regla empieza a competir visualmente con detalles de entrada y persistencia;
- comparación antes/después enfocada únicamente en el cálculo;
- extracción mínima de la regla;
- explicación de que separar comportamiento no equivale todavía a crear una capa de dominio.

La representación debe responder:

> **¿Qué parte del código empezó a tener significado independiente?**

## Argumento II · La operación deja de pertenecer a sus mecanismos

Agrupa las etapas 3, 4 y 5.

La pregunta que organiza esta parte es:

> **¿Qué queremos preservar cuando cambian las formas de entrar, guardar o comunicarnos con el exterior?**

### El segundo punto de entrada

Se introduce el importador de marketplace únicamente aquí.

Contenido principal:

- contraste entre el payload HTTP original y el payload del marketplace;
- dos fragmentos cortos que muestran por qué duplicar creación de orden sería incómodo;
- extracción de la operación compartida;
- nombre `caso de uso` después de que la necesidad ya sea visible.

Una comparación o flujo corto puede mostrar:

`HTTP → crear orden ← marketplace`

La visual no debe sugerir todavía una arquitectura completa.

### Persistir es una capacidad, SQLite es un mecanismo

Esta es la primera etapa donde el cambio de dirección de una dependencia necesita hacerse muy explícito.

Contenido principal:

- código del caso de uso dependiendo directamente de `Microsoft.Data.Sqlite`;
- formulación de la capacidad mínima que realmente necesita;
- cambio antes/después donde la dependencia concreta deja de estar dentro de la operación;
- explicación textual de la inversión de dependencia;
- contrafactual donde mantener SQLite directo sigue siendo razonable para un caso más pequeño.

La representación central debe responder:

> **¿Quién necesita a quién, y por qué cambiamos esa relación?**

Aquí puede justificarse un pequeño diagrama de dependencias si resulta más claro que el código por sí solo.

### La relación aparece otra vez

El webhook permite demostrar que persistencia no era una excepción especial.

Contenido principal:

- requisito de notificación;
- tentación de usar `HttpClient` directamente desde el caso de uso;
- capacidad de notificar expresada desde la operación;
- mecanismo HTTP fuera de ella;
- síntesis de la forma repetida.

Solo después de mostrar las dos relaciones introducimos **puerto** y **adaptador** como vocabulario útil.

Una comparación paralela puede mostrar:

- guardar una orden → SQLite;
- notificar una orden → HTTP.

El énfasis está en la forma común, no en construir una taxonomía de adapters.

## Argumento III · Las responsabilidades toman forma

Agrupa las etapas 6 y 7.

La pregunta que organiza esta parte es:

> **¿Qué decisiones pertenecen al problema y cuáles pertenecen a ejecutar el sistema?**

### Reglas del problema y coordinación

La lección vuelve a mirar el código que ya construimos y detecta dos razones distintas para cambiar.

Contenido principal:

- reglas de descuentos y validez que pueden entenderse sin infraestructura;
- coordinación del caso de uso: calcular, guardar, notificar;
- separación mínima entre esas responsabilidades;
- introducción de **dominio** y **aplicación** solo después de mostrar la diferencia.

La comparación debería estar guiada por razones de cambio, no por carpetas:

| Responsabilidad | Cambia cuando... |
| --- | --- |
| Regla de la orden | cambia el problema o la política |
| Caso de uso | cambia cómo coordinamos el objetivo |

No se mostrará todavía una estructura `Domain/Application/Infrastructure/Presentation` como receta.

### Alguien tiene que conectar todo

La composición se introduce como consecuencia de las dependencias ya invertidas.

Contenido principal:

- mecanismos concretos disponibles;
- caso de uso que necesita capacidades;
- construcción de las piezas en `Program.cs` o equivalente;
- explicación del punto de composición;
- aclaración de que DI container y composition root no son sinónimos de arquitectura limpia.

La visual, si se usa, debe responder:

> **¿Dónde vive el conocimiento de qué implementación concreta usamos?**

## Argumento IV · Recién ahora podemos llamarla Clean Architecture

Agrupa la etapa 8 y la síntesis final.

La pregunta que organiza esta parte es:

> **¿Qué forma apareció y qué parte de ella es realmente esencial?**

### Reconstruir antes de nombrar

Primero se recorre hacia atrás lo construido:

- las entradas traducen;
- el caso de uso coordina;
- las reglas más estables no conocen mecanismos;
- las capacidades se expresan desde donde se necesitan;
- los mecanismos concretos quedan hacia afuera;
- la composición conoce los detalles.

Solo entonces se presenta **Clean Architecture** como un nombre que ayuda a comunicar esa forma.

### La regla de dependencias

La regla de dependencias se explica desde las decisiones ya observadas, no desde círculos memorizados.

Podemos introducir aquí una representación final más completa que responda:

> **¿Qué puede conocer a qué en la solución que acabamos de construir?**

Si el diagrama clásico de círculos aporta contexto, se presentará como una representación histórica o conceptual posible y se conectará explícitamente con las fronteras que ya aparecieron en el caso.

No se tratará la posición física de una carpeta como evidencia de dirección de dependencias.

### Lo que no se volvió obligatorio

La lección cierra haciendo visibles varias cosas que **no** emergieron como requisitos universales:

- cuatro proyectos;
- repository pattern;
- Unit of Work;
- MediatR;
- CQRS;
- DDD completo;
- una interfaz por cada clase.

También recupera los contrafactuales anteriores para mostrar lugares donde una aplicación más simple podría haberse detenido correctamente.

El cierre debe permitir responder:

> **¿Qué problema justifica esta separación?**

y no solamente enumerar capas.

## Uso del código

El código será evidencia de la transformación, pero no publicaremos ocho versiones completas y repetitivas de la misma aplicación dentro del cuerpo de la lección.

Preferimos:

- una primera versión suficientemente completa para establecer el estado inicial;
- deltas pequeños cuando cambia una sola decisión;
- fragmentos antes/después cuando necesitamos observar una dependencia;
- snapshots más amplios solo en puntos de síntesis donde el conjunto haya cambiado de forma significativa.

Cada bloque de código debe responder una pregunta concreta.

Si un bloque existe únicamente para demostrar boilerplate de ASP.NET Core, SQLite o `HttpClient`, se reduce o se mueve fuera del recorrido principal.

## Representaciones visuales previstas

Antes de implementar no fijamos geometría exacta, pero sí la pregunta que cada visual debe responder.

1. **Recorrido de la lección:** cómo una solución directa acumula presiones hasta poder ser nombrada.
2. **Dos entradas, una operación:** qué parte es compartida y qué parte traduce cada mecanismo.
3. **Inversión de dependencia:** qué dependencia concreta interfería y hacia dónde queda la capacidad después del cambio.
4. **Forma repetida:** persistencia y notificación como dos ejemplos de capacidad/realización.
5. **Regla frente a orquestación:** qué responsabilidades cambian por razones distintas.
6. **Composición:** dónde se decide qué mecanismos concretos ejecutan las capacidades.
7. **Síntesis final:** qué dirección tienen las dependencias en la forma resultante.

No todas estas preguntas necesitan un diagrama. Código, tablas, Teaching flows o prosa pueden resolverlas mejor.

Mermaid queda reservado para relaciones cuya geometría no pueda expresarse limpiamente con los componentes Teaching existentes.

## Ritmo visual

La página debe evitar que las ocho etapas se conviertan en ocho tarjetas idénticas.

El ritmo esperado es:

- narrativa + código para establecer estado;
- comparación cuando cambia una relación;
- flow pequeño cuando importa la secuencia;
- tabla cuando importa distinguir dimensiones;
- admonition cuando queremos preservar un límite o contrafactual;
- diagrama solo cuando la topología de dependencias aporta comprensión.

Los componentes deben reforzar el trabajo conceptual de cada sección, no señalar visualmente que estamos en una “etapa”.

## Jerarquía propuesta

La tabla de contenidos pública debería aproximarse a:

```text
Clean Architecture

Antes de necesitar arquitectura
  Una creación de orden directa es suficiente
  Una regla empieza a merecer nombre propio

La operación deja de pertenecer a sus mecanismos
  El segundo punto de entrada
  Persistir es una capacidad, SQLite es un mecanismo
  La relación aparece otra vez

Las responsabilidades toman forma
  Reglas del problema y coordinación
  Alguien tiene que conectar todo

Recién ahora podemos llamarla Clean Architecture
  Reconstruir antes de nombrar
  La regla de dependencias
  Lo que no se volvió obligatorio
```

La numeración causal puede seguir apareciendo dentro del contenido cuando ayude a reconstruir el recorrido, pero no dominará la navegación principal.

## Especificación visual

La realización reutilizará el vocabulario visual existente de Teaching. No introduciremos un componente nuevo por el solo hecho de que esta sea una lección de arquitectura.

La pregunta de diseño es:

> **¿Qué representación hace más visible la causa de cada cambio sin convertir la página en una colección de diagramas?**

### Apertura

La apertura usará principalmente **prosa y una admonition nativa**.

La admonition conservará la regla:

> No movemos una línea de código sin una causa.

No usaremos un hero específico para Clean Architecture ni un diagrama inicial de capas. La página debe comenzar con el problema, no con la respuesta final.

Después de la introducción puede aparecer un recorrido compacto de los cuatro argumentos mayores usando `teaching-flow` si durante implementación ayuda a orientar sin revelar conceptos prematuramente.

Ese flujo debe nombrar presiones, no capas.

### Antes de necesitar arquitectura

#### Una creación de orden directa es suficiente

Representación principal:

- código;
- prosa;
- admonition de tipo nota para el contrafactual.

No necesita componente custom.

El código inicial debe ocupar el centro visual de la sección porque es la evidencia de que la solución directa todavía es razonable.

La nota posterior debe dejar explícito que agregar estructura aquí sería una decisión posible, pero todavía injustificada.

#### Una regla empieza a merecer nombre propio

Representación principal:

- código antes/después;
- una comparación breve en dos columnas mediante `teaching-grid teaching-grid--2` y `teaching-card` solo si aporta más claridad que dos fragmentos consecutivos.

La pregunta visual es:

> ¿Qué parte del comportamiento empezó a poder entenderse por sí misma?

No dibujaremos una caja llamada `Domain`.

### La operación deja de pertenecer a sus mecanismos

#### El segundo punto de entrada

Usaremos un flujo pequeño con `teaching-flow`:

```text
HTTP ─┐
      ├→ Crear orden
CLI  ─┘
```

Como `teaching-flow` es lineal y esta relación converge, no debemos forzarlo si la convergencia pierde claridad.

Primera opción de implementación:

- dos `teaching-card` paralelas para las entradas;
- prosa central que identifica la operación compartida.

Si la geometría de convergencia aporta comprensión materialmente mayor, usaremos un **Mermaid mínimo**.

La información esencial deberá repetirse en texto.

#### Persistir es una capacidad, SQLite es un mecanismo

Esta sección sí necesita una comparación visual explícita de dependencia.

Primera representación:

`teaching-grid teaching-grid--2`

- tarjeta izquierda: **Antes** — el caso de uso conoce SQLite;
- tarjeta derecha: **Después** — el caso de uso expresa “guardar orden” y SQLite realiza esa capacidad.

Debajo, un bloque de código before/after muestra la misma diferencia de manera ejecutable.

No necesitamos flechas complejas si la comparación deja clara la dirección. Si el código no basta, un Mermaid de tres nodos puede mostrar únicamente la relación de dependencias.

La visual debe contestar:

> ¿Qué conocimiento dejamos de exigirle al caso de uso?

#### La relación aparece otra vez

Usaremos `teaching-grid teaching-grid--2` con dos `teaching-card` paralelas:

- **Persistencia** — capacidad “guardar orden” / mecanismo SQLite;
- **Notificación** — capacidad “notificar orden” / mecanismo HTTP.

Después de las tarjetas, una admonition de síntesis introduce los nombres **puerto** y **adaptador**.

Los nombres aparecen después de la repetición visual, no como título previo a ella.

### Las responsabilidades toman forma

#### Reglas del problema y coordinación

Usaremos una tabla Markdown como representación principal:

| Responsabilidad | Cambia cuando... |
| --- | --- |
| Regla de la orden | cambia una política o condición del problema |
| Caso de uso | cambia cómo coordinamos el objetivo |

El código mostrará un delta pequeño donde la regla deja de vivir dentro de la coordinación.

No usaremos cards para esta distinción porque la pregunta es comparativa y la tabla conserva mejor el eje común “cambia cuando”.

Una admonition breve puede introducir **dominio** y **aplicación** después de la comparación.

#### Alguien tiene que conectar todo

Usaremos un `teaching-flow` corto si la secuencia puede expresarse linealmente:

```text
mecanismos concretos → composición → caso de uso
```

Pero el flujo no debe implicar que el caso de uso depende de la composición.

Por eso la primera opción será código de `Program.cs` acompañado por prosa:

- se crean las implementaciones concretas;
- se entregan al caso de uso;
- se conectan las entradas.

Solo si la topología sigue siendo difícil de leer usaremos Mermaid.

La pregunta visual es:

> ¿Dónde vive el conocimiento de las implementaciones concretas?

### Recién ahora podemos llamarla Clean Architecture

#### Reconstruir antes de nombrar

Aquí usaremos un `teaching-flow--multiline` numerado para reconstruir causalmente la forma final sin mostrar todavía el diagrama clásico.

El flujo resumirá, en orden:

1. entradas traducen;
2. caso de uso coordina;
3. reglas expresan políticas;
4. capacidades se definen donde se necesitan;
5. mecanismos realizan esas capacidades;
6. composición conecta todo.

Por ser seis elementos, la geometría exacta se decidirá al implementar. Si dos filas de tres pierden continuidad, preferiremos una lista/flow vertical antes que inventar conectores decorativos.

#### La regla de dependencias

Esta es la principal candidata a **Mermaid**.

Aquí sí existe una pregunta topológica:

> ¿Qué puede conocer a qué?

El diagrama final debe mostrar relaciones de dependencia de código, no flujo de ejecución.

Debe ser pequeño y derivarse de las piezas que ya aparecieron. No debe introducir componentes nuevos únicamente para parecerse al diagrama clásico de Clean Architecture.

La representación textual equivalente explicará la dirección de cada dependencia esencial.

Si mostramos el diagrama clásico de círculos, será secundario y comparativo: primero nuestra forma resultante, luego cómo se relaciona con esa representación conocida.

#### Lo que no se volvió obligatorio

Usaremos `teaching-grid teaching-grid--2 teaching-grid--lateral-badges` con `teaching-item teaching-item--criterion` para enumerar decisiones que **no** son consecuencias necesarias:

- cuatro proyectos;
- Repository Pattern;
- Unit of Work;
- MediatR;
- CQRS;
- una interfaz por cada clase.

La intención no es presentar una checklist de prohibiciones, sino cerrar mostrando el techo semántico de lo que realmente aprendimos.

Una admonition final recuperará el criterio:

> ¿Qué problema justifica esta separación?

### Contrafactuales

Los contrafactuales no tendrán un componente especial.

Usaremos admonitions nativas de forma consistente cuando necesitemos destacar:

> ¿Qué pasa si no hacemos este cambio?

No crearemos una clase CSS `clean-architecture-counterfactual`.

La repetición semántica de la admonition será suficiente para convertirlos en un ritmo reconocible.

### Código

Los bloques de código mantendrán el lenguaje visual estándar de Zensical.

No añadiremos adornos por etapa.

Cuando haya before/after:

- preferiremos dos fragmentos consecutivos con encabezados claros si el ancho disponible hace incómoda una comparación lateral;
- usaremos dos columnas solo para fragmentos pequeños;
- nunca forzaremos scroll horizontal adicional para mantener una composición estética.

El texto que precede a cada bloque debe formular la pregunta que el código ayuda a responder.

### Componentes previstos

La primera implementación debería poder construirse con:

- Markdown y headings semánticos;
- admonitions nativas;
- bloques de código;
- tablas Markdown;
- `teaching-grid`;
- `teaching-card`;
- `teaching-item--criterion`;
- `teaching-flow` y `teaching-flow--multiline`;
- `visual-equivalent--subtle`;
- Mermaid únicamente en relaciones con topología real.

### Componentes que no necesitamos todavía

No aparece, por ahora, un trabajo semántico que justifique un componente específico para:

- arquitectura;
- capas;
- puertos;
- adaptadores;
- inversión de dependencias;
- contrafactuales.

Si durante implementación una representación no puede expresarse honestamente con el vocabulario actual, primero identificaremos el **trabajo semántico faltante** antes de crear CSS nuevo.

No crearemos un componente cuyo único significado sea “esta sección pertenece a Clean Architecture”.

### Bocetos que sí pueden aportar evidencia

No necesitamos bocetar toda la página antes de implementarla.

Solo hay dos representaciones cuya geometría podría justificar exploración previa:

1. **dos entradas convergiendo en una operación**;
2. **síntesis final de la regla de dependencias**.

Esos bocetos serían artefactos desechables para evaluar jerarquía y topología. No decidirán la semántica ni se copiarán directamente a la implementación.

El resto puede implementarse directamente con los componentes ya conocidos y revisarse visualmente sobre el sitio.

## Estado del diseño

La fuente, el caso conductor, la evolución causal, la realización técnica mínima y la estructura editorial están definidos.

La especificación visual está definida y, por ahora, no exige componentes semánticos nuevos.

Todavía permanecen abiertas las decisiones de:

- código definitivo que materializará cada transición;
- geometría exacta de las dos representaciones que pueden requerir boceto;
- si los ejemplos ejecutables vivirán solamente dentro de la lección o también como artefactos separados y versionados.

El siguiente paso es comenzar la **implementación de la realización**: construir el primer estado ejecutable del caso y usarlo como evidencia antes de redactar el recorrido completo en `index.md`.
