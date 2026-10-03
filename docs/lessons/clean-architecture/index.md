# Clean Architecture

!!! abstract "Idea central"
    No vamos a comenzar memorizando **Domain / Application / Infrastructure / Presentation**.

    Vamos a llegar a ellas.

El objetivo de esta lección es observar cómo una implementación pequeña empieza a acumular tensiones y cómo, al resolverlas una por una, emerge una organización cercana a Clean Architecture.

## El recorrido

~~~mermaid
flowchart TD
    A["1 · Código ingenuo pero funcional"]
    B["2 · Aparece lógica de negocio"]
    C["3 · Aparece necesidad de testing"]
    D["4 · Aparece persistencia"]
    E["5 · Aparecen servicios externos"]
    F["6 · Aparecen múltiples entry points"]
    G["7 · Detectamos dependencias incómodas"]
    H["8 · Invertimos dependencias"]
    I["9 · Llegamos a Clean Architecture"]
    A --> B --> C --> D --> E --> F --> G --> H --> I
~~~

## Regla de la lección

> No movemos una línea de código sin una causa.

Cada etapa debe conservar algo importante de la anterior: el sistema sigue resolviendo el mismo problema, pero ahora existe una nueva presión que obliga a reconsiderar su estructura.

## Caso conductor

Durante toda la lección trabajaremos con una operación sencilla: **Crear una orden**.

Inicialmente debe:

- recibir una petición HTTP;
- validar los datos;
- calcular el total;
- guardar la orden;
- enviar una notificación;
- responder al cliente.

La primera versión puede vivir completamente en un endpoint. Eso no se presenta como un error: se presenta como el punto de partida.

## Dos partes

### Parte I · Construirla

Recorremos las nueve etapas y dejamos que los conceptos aparezcan por necesidad.

### Parte II · Entenderla

Una vez construida, abrimos la arquitectura resultante y ponemos nombre a sus piezas: dominio, casos de uso, puertos, adaptadores, infraestructura, presentación, regla de dependencias y composition root.

La segunda parte debe sentirse como una explicación de algo que ya vimos nacer, no como una taxonomía nueva.

---

[:material-file-document-edit-outline: Ver instrucciones de generación](generation-instructions.md)
