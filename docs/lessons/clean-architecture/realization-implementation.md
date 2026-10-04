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
