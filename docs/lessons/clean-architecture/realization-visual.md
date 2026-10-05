# Especificación visual de la realización

Este documento mapea el trabajo editorial a representaciones y componentes TDidacta Platform existentes.

La realización reutilizará el vocabulario visual existente de TDidacta Platform. No introduciremos un componente nuevo por el solo hecho de que esta sea una lección de arquitectura.

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
