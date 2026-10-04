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
