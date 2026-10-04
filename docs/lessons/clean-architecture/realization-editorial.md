# Diseño editorial de la realización

Este documento define cómo convertir el recorrido causal en una experiencia legible antes de decidir detalles visuales de implementación.

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
