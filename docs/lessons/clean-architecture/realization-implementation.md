# Evidencia de implementación

Este documento registra evidencia obtenida al materializar la realización antes de redactar la lección pública.

Su función no es reemplazar el diseño. Sirve para comprobar si las transiciones previstas sobreviven al código ejecutable y para devolver evidencia a la realización o a la fuente cuando algo no funciona como esperábamos.

## Etapa 1 · Una creación de orden directa es suficiente

Estado: **materializado y compilado correctamente**.

Artefacto:

`examples/clean-architecture/stage-01/`

La primera versión contiene:

- ASP.NET Core Minimal API;
- un único `POST /orders`;
- validación local de la petición;
- cálculo directo de `precio × cantidad`;
- acceso directo a SQLite mediante `Microsoft.Data.Sqlite`;
- creación y respuesta de la orden en el mismo flujo del endpoint.

Todavía no contiene:

- caso de uso separado;
- puertos o adaptadores;
- capa de dominio;
- Repository Pattern;
- Unit of Work;
- MediatR o CQRS;
- separación en múltiples proyectos.

### Evidencia obtenida

El proyecto compila con .NET 10 en CI.

Workflow:

`Clean Architecture example`

Run:

`#1` — success.

La implementación sigue siendo suficientemente pequeña para que mantener validación, cálculo y persistencia cerca del endpoint sea defendible.

No apareció durante la materialización una razón técnica que obligue a introducir las abstracciones previstas para etapas posteriores.

### Consecuencia para el diseño

La etapa 1 sobrevive por ahora a la implementación.

No necesitamos revisar la fuente, el caso conductor ni la realización técnica antes de introducir la siguiente presión.

El siguiente experimento será **hacer que el cálculo deje de ser una suma trivial** y observar si la regla adquiere identidad propia sin necesitar todavía una capa de dominio.


## Etapa 2 · El cálculo deja de ser una suma trivial

Estado: **materializado y compilado correctamente**.

Artefacto:

`examples/clean-architecture/stage-02/`

La operación conserva HTTP y SQLite directos. La única presión nueva es el cálculo del total.

Las reglas introducidas son:

- un subtotal elegible para promociones;
- `gift-card` queda fuera de promociones;
- desde 100.000 de subtotal elegible se aplica 10% de descuento;
- el descuento tiene un máximo de 20.000.

### Cambio realizado

El cálculo deja de ser una expresión local y pasa a `OrderTotalCalculator`.

El endpoint sigue siendo responsable de:

- recibir y validar la petición;
- invocar el cálculo;
- persistir directamente con SQLite;
- construir la respuesta.

No se introdujeron todavía caso de uso, dominio, puertos, adaptadores ni separación en proyectos.

### Evidencia obtenida

El workflow `Clean Architecture example` run `#6` compiló correctamente tanto `stage-01` como `stage-02`.

La nueva regla puede leerse sin recorrer detalles de HTTP ni SQLite. Al mismo tiempo, la persistencia directa y la coordinación general siguen siendo suficientemente pequeñas para no justificar todavía una arquitectura mayor.

La presión observada coincide con la prevista: el comportamiento adquirió identidad propia, pero esa identidad no exige aún una capa `Domain`.

### Consecuencia para el diseño

La etapa 2 sobrevive a la implementación sin revisar la fuente.

También aparece una evidencia útil para la lección pública: **separar una regla porque empezó a significar algo por sí misma es una decisión menor que adoptar una arquitectura**.

El siguiente experimento será introducir un segundo mecanismo de entrada y comprobar si la creación de orden deja de pertenecer razonablemente al endpoint HTTP.


## Etapa 3 · La misma operación llega desde otro canal

Estado: **materializado y compilado correctamente**.

Artefacto:

`examples/clean-architecture/stage-03/`

La realización mantiene el mismo objetivo observable —crear una orden— y agrega un segundo mecanismo de entrada:

- HTTP mediante ASP.NET Core;
- importación de marketplace mediante una aplicación de consola que lee JSON.

Cada entrada conserva su propio formato de transporte y traduce hacia el mismo lenguaje de la operación.

### Cambio realizado

La creación de la orden deja de pertenecer al endpoint HTTP y pasa a una operación compartida:

`CreateOrder.ExecuteAsync`

Esa operación concentra:

- validación;
- cálculo del total;
- generación del identificador;
- persistencia.

Ambas entradas la invocan después de traducir sus datos.

En esta etapa ya resulta útil llamar **caso de uso** a la operación compartida.

### Lo que deliberadamente no cambiamos

El caso de uso todavía depende directamente de `Microsoft.Data.Sqlite` y recibe el `connectionString`.

No introdujimos todavía:

- un puerto de persistencia;
- Repository Pattern;
- una capa Infrastructure;
- dependency injection como explicación;
- un dominio arquitectónicamente separado.

La separación física en tres proyectos existe para poder tener dos ejecutables independientes que compartan la misma operación. No se utiliza como evidencia de que ya exista una arquitectura por capas.

### Evidencia obtenida

El workflow `Clean Architecture example` run `#17` compiló correctamente:

- `stage-01`;
- `stage-02`;
- la entrada web de `stage-03`;
- la entrada marketplace de `stage-03`.

La materialización confirmó la presión prevista: una vez que dos mecanismos necesitan crear órdenes, dejar toda la operación dentro del endpoint HTTP obliga a duplicar comportamiento o a hacer que una entrada conozca a la otra.

Extraer la operación compartida resuelve esa presión sin necesitar todavía inversión de dependencias.

### Consecuencia para el diseño

La etapa 3 sobrevive a la implementación.

También aparece una distinción que conviene preservar en la lección pública:

> **extraer un caso de uso responde a quién posee la operación; invertir una dependencia responde a qué mecanismos puede conocer esa operación.**

Son dos presiones distintas y no deben enseñarse como si fueran el mismo cambio.

El siguiente experimento será conservar ambos mecanismos de entrada y desafiar la dependencia directa del caso de uso hacia SQLite.


## Etapa 4 · La operación conoce demasiado sobre cómo se guarda

Estado: **materializado; ambas entradas de la etapa 4 compilan correctamente**.

Artefacto:

`examples/clean-architecture/stage-04/`

La realización conserva:

- entrada HTTP;
- entrada marketplace;
- el mismo caso de uso `CreateOrder`;
- las mismas reglas de cálculo.

La presión nueva está únicamente en la dependencia de persistencia.

### Cambio realizado

`CreateOrder` dejó de importar `Microsoft.Data.Sqlite`, abrir conexiones y ejecutar SQL.

Ahora expresa la capacidad que necesita mediante:

`IOrderStore.SaveAsync(OrderToSave order)`

La realización concreta vive en:

`SqliteOrderStore`

y es construida por cada entrada ejecutable antes de invocar el caso de uso.

### Lo que deliberadamente no cambiamos

No introdujimos Repository Pattern como plantilla.

`IOrderStore` no existe porque una arquitectura conocida diga que debe existir una interfaz de repositorio. Existe porque, en esta etapa, el caso de uso necesita una capacidad más pequeña y estable que SQLite.

Tampoco introdujimos un contenedor de inyección de dependencias. La composición sigue siendo explícita.

### Evidencia obtenida

En el workflow `Clean Architecture example` run `#29`, tanto:

- `stage-04-web`;
- `stage-04-marketplace`;

alcanzaron `Build: success`.

La implementación hace visible una inversión concreta:

- antes, el caso de uso dependía de SQLite;
- ahora, el caso de uso define la capacidad que necesita;
- SQLite depende de esa capacidad para realizarla.

La presión prevista sobrevivió al código sin necesitar una abstracción mayor.

### Consecuencia para el diseño

La etapa 4 sobrevive a la implementación.

Aparece una formulación especialmente útil para la lección:

> **no abstraemos “la base de datos”; expresamos la capacidad que la operación necesita.**

La siguiente etapa comprobará si esta relación fue una excepción específica de persistencia o si reaparece cuando introducimos otra capacidad externa: notificar una orden creada.


## Etapa 5 · Aparece otra capacidad externa

Estado: **materializado y validado por CI**.

Artefacto:

`examples/clean-architecture/stage-05/`

La realización conserva los dos mecanismos de entrada y agrega una nueva necesidad del caso de uso:

> notificar que una orden fue creada correctamente.

### Cambio realizado

`CreateOrder` expresa ahora dos capacidades externas:

- `IOrderStore` para guardar la orden;
- `IOrderCreatedNotifier` para notificar su creación.

La primera sigue siendo realizada por `SqliteOrderStore`.

La segunda es realizada por `HttpOrderCreatedNotifier`, que contiene:

- `HttpClient`;
- la URL del webhook;
- serialización HTTP;
- validación del estado de respuesta.

El caso de uso no conoce ninguno de esos detalles.

### Evidencia estructural

La relación observada en persistencia reaparece sin cambiar la regla:

```text
caso de uso → capacidad necesaria ← mecanismo externo
```

En persistencia:

`CreateOrder → IOrderStore ← SqliteOrderStore`

En notificación:

`CreateOrder → IOrderCreatedNotifier ← HttpOrderCreatedNotifier`

La repetición permite usar ahora **puerto** y **adaptador** como vocabulario descriptivo de una forma ya observada, no como plantilla previa.

### Reproducibilidad

Se agregó un receptor HTTP local mínimo en:

`Teaching.CleanArchitecture.Stage05.WebhookReceiver`

El ejemplo no necesita una cuenta externa ni un proveedor comercial.

### Una tensión nueva que no debemos esconder

La materialización hizo visible una cuestión real: si SQLite guarda correctamente la orden y luego falla el webhook, los dos efectos no forman una operación atómica.

No vamos a introducir transacciones distribuidas, outbox, retries o mensajería para hacer desaparecer esa tensión porque no es la pregunta de esta etapa.

La registramos como evidencia y mantenemos el límite pedagógico explícito.

### Validación

El workflow `Clean Architecture example` run `#45` terminó en `success`.

Compilaron correctamente:

- entrada web de la etapa 5;
- entrada marketplace de la etapa 5;
- receptor local del webhook;
- ambas entradas de la etapa 4;
- ambas entradas de la etapa 3;
- etapa 2;
- etapa 1.

### Consecuencia para el diseño

La etapa 5 queda validada.

La implementación confirma que persistencia no era una excepción: la misma forma capacidad/realización reaparece con un mecanismo HTTP distinto.

No necesitamos revisar la fuente ni la evolución causal antes de avanzar.

El siguiente experimento será la **etapa 6**: distinguir reglas propias de la orden de la orquestación necesaria para crearla.


## Etapa 6 · Calcular una orden y crear una orden dejan de ser lo mismo

Estado: **materializado y validado por CI**.

Artefacto:

`examples/clean-architecture/stage-06/`

La presión nueva no introduce otro mecanismo externo. Introduce una diferencia interna de responsabilidad.

### Cambio realizado

Las reglas propias de una orden pasan a:

`Teaching.CleanArchitecture.Stage06.Domain`

Ese proyecto contiene:

- validación de la orden;
- cálculo del total;
- representación de `Order`.

La coordinación de crear una orden pasa a:

`Teaching.CleanArchitecture.Stage06.Application`

El caso de uso `CreateOrder` ahora:

1. traduce la entrada normalizada a `OrderLine`;
2. pide al dominio crear una orden válida y calculada;
3. persiste el resultado;
4. notifica su creación;
5. devuelve el resultado del caso de uso.

### Evidencia estructural

La diferencia entre las dos responsabilidades puede expresarse así:

| Responsabilidad | Cambia cuando... |
| --- | --- |
| `Domain` | cambia qué hace válida una orden o cómo se calcula |
| `Application` | cambia cómo coordinamos la creación de una orden |

Esta diferencia ya era observable antes de crear los proyectos.

La separación física se introduce ahora porque ayuda a mantener visible una frontera semántica que ya apareció.

### Lo que deliberadamente no afirmamos

La etapa no demuestra que:

- toda regla deba vivir en un proyecto `Domain`;
- toda aplicación necesite proyectos separados;
- una entidad rica sea obligatoria;
- Domain Driven Design sea un prerrequisito;
- separar proyectos sea lo que define una frontera arquitectónica.

Si las reglas fueran pequeñas y relevantes solo para este caso de uso, mantenerlas dentro de Application seguiría siendo defendible.

### Validación

El workflow `Clean Architecture example` run `#63` terminó en `success`.

Compilaron correctamente la entrada web, la entrada marketplace y el receptor local de la etapa 6, además de todos los snapshots anteriores.

### Consecuencia para el diseño

La etapa 6 queda validada.

La implementación confirma que **dominio** y **aplicación** aparecen como nombres útiles después de que las responsabilidades se vuelven distinguibles.

También revela una tensión concreta para la etapa 7: las dos entradas ejecutables repiten el conocimiento de composición —qué `SqliteOrderStore`, qué `HttpOrderCreatedNotifier`, qué conexión y qué endpoint construir—. Ese conocimiento ya está fuera de Domain y Application, pero todavía está duplicado entre mecanismos de entrada.

La etapa 7 debe responder a esa evidencia, no fingir que el caso de uso sigue seleccionando implementaciones concretas.


## Etapa 7 · La composición adquiere un lugar propio

Estado: **materializado; validación de CI en curso**.

Artefacto:

`examples/clean-architecture/stage-07/`

La presión observada al cerrar la etapa 6 fue concreta: las entradas web y marketplace repetían el mismo conocimiento de composición.

Ambas sabían:

- qué almacenamiento concreto usar;
- cómo inicializarlo;
- qué notificador concreto usar;
- qué endpoint configurar;
- cómo entregar esas realizaciones al caso de uso.

### Cambio realizado

Se agregó:

`Teaching.CleanArchitecture.Stage07.Composition`

Su `OrderApplicationComposition.CreateAsync()` conoce las realizaciones concretas y devuelve las capacidades ya ensambladas.

Las entradas HTTP y marketplace conservan sus responsabilidades de transporte, pero dejan de conocer:

- SQLite;
- la cadena de conexión;
- `HttpClient`;
- la URL del webhook;
- qué adapters concretos fueron elegidos.

Domain y Application tampoco conocen Composition.

### Evidencia estructural

La dirección observada queda así:

```text
Domain <- Application <- adapters
          ^             /
          |            /
       entries -> Composition
```

El dibujo anterior representa dependencias de código de manera aproximada, no flujo de ejecución.

La observación importante es que el conocimiento de las realizaciones concretas se concentra hacia afuera de las políticas.

### Lo que deliberadamente no hicimos

No agregamos un contenedor de inyección de dependencias.

La construcción explícita sigue siendo suficiente.

Tampoco tratamos `Composition` como una capa universal: apareció porque el mismo ensamblaje concreto estaba duplicado entre dos entradas.

### Validación

El workflow `Clean Architecture example` run `#83` incluye las entradas web y marketplace de la etapa 7, su receptor local y todos los snapshots anteriores.

Al registrar esta evidencia, el run permanece en cola.

### Consecuencia provisional para el diseño

La etapa 7 materializa una composición explícita sin introducir infraestructura adicional.

Si el snapshot queda verde, ya no necesitaremos otra transformación estructural para completar el recorrido. La etapa 8 podrá dedicarse a reconstruir la forma resultante y nombrarla como Clean Architecture.
