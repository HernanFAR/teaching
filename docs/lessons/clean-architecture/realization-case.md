# Caso conductor de la realización

Este documento registra la selección y validación del caso conductor para esta realización de Clean Architecture.

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
