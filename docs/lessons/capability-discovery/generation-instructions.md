# Instrucciones de generación

Este documento conserva la **fuente pedagógica** de la lección provisionalmente llamada **Cómo descubrir una capacidad**.

La lección nace de una pregunta que quedó abierta en **Cómo se llega a Clean Architecture** y en la guía **Clean Architecture en uso real**:

> ¿Cómo reconocemos una capacidad real sin terminar creando una interfaz por clase?

La realización publicada podrá cambiar dominio, lenguaje, mecanismos, ejemplos, visuales, dificultad o interacción. Esas decisiones no deben cambiar silenciosamente qué intentamos enseñar.

## Intención pedagógica

Al terminar la lección, la persona debería entender que una **capacidad** no aparece porque queramos introducir una interfaz, un puerto o una arquitectura determinada.

Aparece cuando una operación necesita que algo ocurra fuera de sí misma y podemos expresar **qué necesita** sin confundirlo con **cómo se realiza hoy**.

La intuición central es:

> **Una operación no necesita necesariamente una tecnología. Necesita una capacidad que algún mecanismo puede realizar.**

Por ejemplo, una operación podría hoy:

- escribir directamente en SQLite;
- enviar directamente una petición HTTP;
- leer directamente el reloj del sistema;
- escribir directamente un archivo.

La pregunta pedagógica no es todavía:

> ¿Qué interfaz debería crear?

La pregunta es:

> **¿Qué necesita realmente esta operación para cumplir su objetivo?**

La lección debe permitir descubrir esa diferencia antes de introducir vocabulario formal como puerto, adaptador o inversión de dependencias.

### Lo que la persona debería poder hacer después

Frente a una dependencia concreta dentro de una operación, debería poder:

1. describir qué objetivo de la operación permanece aunque cambie el mecanismo;
2. distinguir una necesidad semántica de una tecnología concreta;
3. formular una capacidad desde el lado que la necesita;
4. reconocer cuándo esa formulación todavía no aporta valor;
5. distinguir la capacidad de cualquier mecanismo usado para expresarla en código;
6. evitar convertir cada dependencia en una abstracción preventiva.

### Lo que no necesitamos enseñar todavía

Esta lección no necesita desarrollar por completo:

- Ports and Adapters como arquitectura;
- Clean Architecture como forma global;
- Repository Pattern;
- Unit of Work;
- Dependency Injection containers;
- una interfaz por cada servicio;
- mocks como justificación de diseño;
- un sistema general de efectos;
- Domain/Application como separación completa;
- una taxonomía universal de capabilities;
- VSlices Framework ni ningún mecanismo específico de VSlices.

Estos conceptos pueden relacionarse después con la lección, pero no tienen derecho a aparecer antes de que la presión observada los necesite.

## Intuiciones que queremos evitar

### Capacidad = interfaz

Una interfaz puede ser una realización útil para expresar una capacidad en ciertos lenguajes.

No es la capacidad en sí misma.

Una realización válida puede usar:

- interfaz;
- función;
- trait;
- delegate;
- record de operaciones;
- módulo;
- efecto;
- otro mecanismo adecuado.

La semántica de la capacidad debe sobrevivir al cambio de mecanismo.

### Toda dependencia concreta debe abstraerse

No.

Si el mecanismo es estable, local, trivial y no interfiere con nada que queramos preservar, mantenerlo concreto puede ser la decisión correcta.

La lección debe contener al menos un punto donde **no extraer una capacidad explícita** siga siendo defendible.

### Capacidad = nombre genérico del mecanismo

Cambiar:

`SqliteOrderStore`

por:

`IOrderRepository`

no demuestra que hayamos descubierto una capacidad.

La lección debe presionar a la persona a formular la necesidad desde el objetivo de la operación, no desde una renominación del mecanismo existente.

## Recorrido causal

La lección debe partir desde una operación pequeña y defendible.

No empieza desde una interfaz ni desde una dependencia invertida.

### 1. Una dependencia concreta puede ser suficiente

La operación necesita producir un resultado externo y conoce directamente el mecanismo que lo realiza.

Ejemplos posibles:

- guardar una entidad en una base de datos;
- leer la hora actual;
- enviar una notificación;
- almacenar un archivo;
- consultar un sistema externo.

Mientras ese mecanismo no produzca una tensión relevante, no lo abstraemos.

La pregunta inicial es:

> ¿Tenemos alguna razón para separar esta dependencia todavía?

Si la respuesta es no, la solución sigue siendo válida.

### 2. Algo que queremos preservar empieza a chocar con el mecanismo

Aparece una presión concreta.

Puede ocurrir, por ejemplo, que:

- necesitemos cambiar el mecanismo sin cambiar la operación;
- necesitemos ejecutar la operación en un contexto donde el mecanismo concreto no está disponible;
- una decisión importante de la operación quede mezclada con detalles accidentales del mecanismo;
- dos realizaciones diferentes deban satisfacer la misma necesidad;
- queramos razonar sobre la operación sin conocer todavía quién realizará el efecto.

La presión no es simplemente:

> "esto es difícil de testear".

La dificultad debe expresarse en términos del comportamiento o conocimiento que queremos preservar.

### 3. Preguntamos qué necesita realmente la operación

En vez de saltar directamente a una interfaz, aislamos la pregunta semántica:

> Si este mecanismo desapareciera, ¿qué seguiría necesitando la operación?

La respuesta debería poder expresarse sin depender de una tecnología concreta.

Ejemplos:

- persistir una orden;
- obtener el tiempo actual;
- publicar que una orden fue creada;
- almacenar un documento;
- recuperar información de una cuenta.

Este paso descubre una **capacidad candidata**.

Todavía no necesitamos decidir cómo representarla en código.

### 4. Comprobamos si la capacidad tiene identidad suficiente

No toda llamada externa merece convertirse en una capacidad explícita.

Antes de introducir una frontera, comprobamos si la formulación:

- describe una necesidad real de la operación;
- permanece reconocible si cambia el mecanismo;
- ayuda a separar conocimiento que pertenece a la operación de conocimiento que pertenece a su realización;
- no es solamente un nombre más abstracto para la API actual;
- puede ser satisfecha por más de una realización plausible, o al menos existe una presión real para desacoplarla de la actual.

Si esas condiciones no aparecen, mantener la dependencia concreta puede seguir siendo mejor.

### 5. Expresamos la capacidad desde el lado que la necesita

Solo después de descubrir la necesidad decidimos cómo expresarla.

La operación pasa a depender de la capacidad y no directamente del mecanismo concreto.

La representación concreta puede variar según lenguaje y realización.

Aquí puede empezar a ser útil hablar de **inversión de dependencia**, pero solo como descripción de una relación que ya se volvió necesaria.

La lección no debe presentar la inversión como objetivo independiente.

### 6. El mecanismo concreto sigue existiendo

Separar la capacidad no elimina SQLite, HTTP, filesystem, clock ni cualquier otro mecanismo.

Alguien sigue teniendo que realizarla.

La diferencia es:

```text
antes:
operación → mecanismo concreto

después:
operación → capacidad
             ↑
      mecanismo concreto
```

La operación posee la necesidad.

El mecanismo posee la realización concreta.

### 7. Recién ahora podemos relacionarlo con puertos y adaptadores

Si la capacidad forma una frontera entre una política y un mecanismo externo, el vocabulario de **puerto** y **adaptador** puede volverse útil.

Pero esta lección no necesita enseñar toda la arquitectura de Ports and Adapters.

El nombre debe sintetizar algo ya observado:

- la operación expresa lo que necesita;
- una realización externa satisface esa necesidad;
- ambas pueden evolucionar con razones distintas.

### 8. Salida: la capacidad no es obligatoria

La síntesis debe volver al contrafactual inicial.

Una capacidad explícita paga un costo:

- añade vocabulario;
- introduce una frontera;
- exige composición;
- puede requerir traducción;
- puede ocultar detalles útiles si se diseña mal.

Si ninguna presión justifica ese costo, la dependencia concreta sigue siendo una opción correcta.

## Invariantes pedagógicos

Toda realización debe preservar:

1. **La dependencia concreta inicial debe ser defendible.**
2. **La presión debe aparecer antes que la capacidad.**
3. **La capacidad se descubre semánticamente antes de decidir su mecanismo de representación.**
4. **Capacidad e interfaz no son sinónimos.**
5. **La capacidad debe formularse desde el lado que la necesita.**
6. **El mecanismo concreto no desaparece: cambia su relación con la operación.**
7. **La inversión de dependencia se nombra después de que exista una razón para ella.**
8. **Puerto y adaptador son vocabulario posterior, no el punto de partida.**
9. **Debe existir al menos un caso donde no abstraer siga siendo correcto.**
10. **La lección no debe producir una regla del tipo "una interfaz por dependencia".**

## Restricciones del caso conductor

La fuente no fija todavía un dominio concreto.

Un caso conductor válido debe permitir:

1. comenzar con una operación pequeña que use directamente al menos un mecanismo externo;
2. mantener esa dependencia directa como solución razonable al inicio;
3. introducir una presión donde queramos preservar la operación mientras cambia alguna condición alrededor del mecanismo;
4. formular la necesidad de la operación sin mencionar la tecnología concreta;
5. mostrar una realización concreta de la capacidad después de descubrirla;
6. comparar al menos una alternativa donde extraer la capacidad sería prematuro o innecesario;
7. evitar que testing sea la única razón para introducir la separación;
8. preservar el mismo objetivo observable de la operación antes y después de la separación.

### Criterio de aceptación del caso

Antes de usar un caso conductor, deberíamos poder responder:

> ¿Podemos mostrar por qué la operación necesita expresar una capacidad sin que la interfaz o el patrón sean la premisa que fuerza el ejemplo?

Si no, el caso no sirve todavía.

## Variables de realización

Una realización puede cambiar:

- dominio;
- lenguaje;
- framework;
- mecanismo externo inicial;
- presión que hace aparecer la capacidad;
- forma de expresar la capacidad;
- forma de composición;
- cantidad de código;
- recursos visuales;
- dificultad;
- interacción;
- ejercicios;
- ejemplos negativos.

La fuente no exige que la capacidad termine expresada como una interfaz.

## Contrafactuales obligatorios

La lección debe poder responder honestamente:

> ¿Qué ocurre si dejamos la dependencia concreta?

Respuestas válidas pueden incluir:

- nada relevante por ahora;
- el mecanismo es suficientemente estable;
- la operación es demasiado pequeña para que la frontera pague su costo;
- la separación agregaría vocabulario sin reducir ninguna tensión;
- todavía no sabemos qué necesidad estable existe detrás de la API concreta.

La presencia de una dependencia externa no basta por sí sola para justificar una capability explícita.

## Relación con otras lecciones

Esta lección puede componerse después con:

- **Cómo se llega a Clean Architecture**;
- una futura lección sobre puertos y adaptadores;
- una futura lección sobre política y mecanismo;
- una futura lección sobre efectos;
- una futura lección sobre diseño de casos de uso.

No debe absorber esas lecciones dentro de sí.

## Exploraciones soportadas

La fuente debería poder soportar honestamente las cuatro exploraciones de Teaching:

- **Otro caso** — probar si la misma presión permite descubrir una capacidad en otro dominio sin copiar la abstracción original;
- **Profundizar** — estudiar granularidad, ownership, naming o mecanismos alternativos para expresar una capacidad;
- **Aplicarlo a mi caso** — analizar una dependencia real y determinar si existe o no presión suficiente para extraer una capacidad;
- **Ponme a prueba** — presentar dependencias concretas y presiones progresivas para que la persona decida si abstraer, qué necesidad formular y cuándo no hacer nada.

Una exploración debe poder concluir que **no existe todavía una capacidad que valga la pena expresar explícitamente**.

## Preguntas abiertas

Antes de considerar esta fuente cerrada conviene validar:

- ¿Necesitamos distinguir explícitamente "capacidad" de "efecto" en esta lección, o eso pertenece a una lección posterior?
- ¿La condición "más de una realización plausible" es una heurística útil o podría inducir a abstraer preventivamente?
- ¿Cuánto vocabulario de inversión de dependencias conviene introducir antes de que la lección empiece a competir con Ports and Adapters?
- ¿Qué caso conductor produce la presión más limpia sin convertir testing en la justificación dominante?
- ¿Conviene que la primera capacidad sea persistencia, reloj, filesystem o comunicación externa, considerando que cada mecanismo puede arrastrar intuiciones arquitectónicas diferentes?

## Estado de la fuente

Esta es una **primera fuente pedagógica candidata**.

La intención, el recorrido causal, los invariantes y las restricciones del caso conductor están suficientemente explícitos para ser revisados.

Todavía no se ha seleccionado ni materializado un caso conductor, y las preguntas abiertas anteriores siguen siendo parte del trabajo.
