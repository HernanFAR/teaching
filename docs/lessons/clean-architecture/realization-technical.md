# Realización técnica mínima

Este documento fija los mecanismos técnicos mínimos necesarios para materializar honestamente el recorrido causal.

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
6. **Etapa 7:** la composición concreta adquiere una unidad externa propia cuando el mismo ensamblaje empieza a repetirse entre entradas; no requiere un contenedor adicional.
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
