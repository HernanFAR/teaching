# Instrucciones de generación

Este documento funciona como **fuente pedagógica base** de la lección.

La página publicada es una realización explicativa de esta fuente. Otras realizaciones pueden cambiar lenguaje, dominio, dificultad, ejemplos, material visual o forma de interacción, siempre que preserven la intención pedagógica definida aquí.

!!! info "Principio pedagógico"
    Cada etapa debe introducir solamente los conceptos necesarios para resolver el problema de esa etapa.

!!! note "Qué puede derivarse de esta fuente"
    Estas instrucciones pueden utilizarse para producir, entre otras cosas:

    - otra explicación del mismo recorrido;
    - una variante en otro lenguaje o dominio;
    - una versión para distinto nivel de experiencia;
    - material visual alternativo;
    - ejercicios y preguntas;
    - una tutoría guiada;
    - material de evaluación.

    Una derivación puede cambiar la forma. **No debe cambiar silenciosamente qué se intenta enseñar ni el orden de las tensiones que justifican cada concepto.**

## Invariantes de la fuente

Toda realización derivada debe conservar:

- el recorrido problem-first;
- la aparición progresiva de las presiones;
- la regla de no introducir una abstracción antes de que exista una causa visible;
- los límites y contrafactuales relevantes;
- la distinción entre estructura final y razones que la hicieron necesaria.

## Secuencia estable

1. Código ingenuo pero funcional
2. Aparece lógica de negocio
3. Aparece necesidad de testing
4. Aparece persistencia
5. Aparecen servicios externos
6. Aparecen múltiples entry points
7. Detectamos dependencias incómodas
8. Invertimos dependencias
9. Llegamos a Clean Architecture

## Preguntas que debe responder cada etapa

- ¿Cómo se ve el sistema en este momento?
- ¿Qué problema aparece?
- ¿Por qué ese problema importa?
- ¿Qué cambio hacemos?
- ¿Qué mejora obtenemos?
- ¿Qué tensión prepara el siguiente paso?

## Material visual

No asumir que Mermaid es siempre la respuesta.

Elegir la representación que mejor explique la tensión concreta: Mermaid, diagramas de secuencia o dependencias, código antes/después, árboles de archivos, tablas comparativas o esquemas conceptuales simples.

Preferir que cada visual responda **una sola pregunta**.

---

## Etapa 1 · Código ingenuo pero funcional

### Objetivo

Mostrar que comenzar con todo junto no es necesariamente incorrecto.

Para un sistema suficientemente pequeño, la implementación directa puede ser perfectamente razonable.

### Estado inicial

~~~mermaid
flowchart LR
    Client[Cliente] --> Endpoint["POST /orders"]
    Endpoint --> Validate[Validar]
    Validate --> Calculate[Calcular total]
    Calculate --> DB[(SQL Server)]
    DB --> Email[Enviar email]
    Email --> Response[Responder]
~~~

El mensaje visual debe ser simple: **todo el comportamiento vive alrededor del endpoint.**

### Código de referencia

~~~csharp
app.MapPost("/orders", async (CreateOrderRequest request) =>
{
    // validar request
    // calcular total
    // guardar orden usando EF Core
    // enviar email
    // retornar respuesta
});
~~~

No introducir todavía servicios, repositorios, casos de uso, entidades ricas ni capas.

### Mensaje que debe quedar

> Todavía no necesitamos una arquitectura sofisticada.

El código funciona. La estructura cambia solamente cuando aparezca una razón concreta para hacerlo.

### Puente hacia la etapa 2

El cálculo del total deja de ser una suma trivial.

Aparecen descuentos, promociones, impuestos, costos de envío o reglas según el tipo de cliente.

Eso abre la siguiente pregunta:

**¿qué ocurre cuando dentro del endpoint empieza a aparecer lógica que ya no pertenece realmente a HTTP?**

---

## Etapa 2 · Aparece lógica de negocio

Estado: pendiente de diseño visual.

## Etapa 3 · Aparece necesidad de testing

Estado: pendiente de diseño visual.

## Etapa 4 · Aparece persistencia

Estado: pendiente de diseño visual.

## Etapa 5 · Aparecen servicios externos

Estado: pendiente de diseño visual.

## Etapa 6 · Aparecen múltiples entry points

Estado: pendiente de diseño visual.

## Etapa 7 · Detectamos dependencias incómodas

Estado: pendiente de diseño visual.

## Etapa 8 · Invertimos dependencias

Estado: pendiente de diseño visual.

## Etapa 9 · Llegamos a Clean Architecture

Estado: pendiente de diseño visual.

La arquitectura final debe sentirse como la consecuencia acumulada de las decisiones anteriores.
