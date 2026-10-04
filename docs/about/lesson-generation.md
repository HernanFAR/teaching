# Cómo generamos una lección

Una lección de Teaching no empieza necesariamente como una página terminada.

Antes de decidir el ejemplo, el lenguaje, los diagramas o incluso la forma exacta de explicarla, intentamos conservar algo más estable: **qué queremos que una persona llegue a entender y qué recorrido hace que esa comprensión tenga sentido**.

A eso lo tratamos como la **fuente pedagógica** de la lección.

En Teaching, esa fuente se expresa normalmente mediante unas **instrucciones base de generación**: un artefacto que conserva la intención, el recorrido, los límites y las condiciones que no deberían perderse al producir distintas versiones de una misma lección.

## Primero definimos qué debe permanecer

Una buena fuente debería dejar suficientemente claras tres cosas:

<div class="source-dimensions">

<div class="source-dimension">
<span class="source-dimension__label">Intención</span>
<strong>Qué queremos que la persona comprenda</strong>
<span>Qué debería entender al terminar y qué todavía no necesita aprender.</span>
</div>

<div class="source-dimension">
<span class="source-dimension__label">Recorrido</span>
<strong>Qué debe ocurrir para que esa comprensión tenga sentido</strong>
<span>Qué problemas o tensiones deben aparecer y en qué orden importa que aparezcan.</span>
</div>

<div class="source-dimension">
<span class="source-dimension__label">Límites y acceso</span>
<strong>Qué no debería desaparecer de la explicación</strong>
<span>Qué costos, límites y condiciones de accesibilidad o acceso material debemos respetar.</span>
</div>

</div>

No necesitamos decidir desde el comienzo cada frase, diagrama o ejercicio.

Sí necesitamos saber **qué debe permanecer estable aunque cambie la forma de enseñar**.

## El recorrido debe tener causas

Preferimos un recorrido donde cada paso aparezca como respuesta a una necesidad visible.

Una secuencia como esta puede mostrar el resultado, pero no todavía las causas:

<div class="causal-anti-pattern">
<div class="causal-anti-pattern__flow" aria-label="capa, luego interfaz, luego patrón, luego arquitectura">
<span>capa</span><b aria-hidden="true">→</b><span>interfaz</span><b aria-hidden="true">→</b><span>patrón</span><b aria-hidden="true">→</b><span>arquitectura</span>
</div>
<small>Un listado de conceptos no explica por sí solo por qué apareció cada cosa.</small>
</div>

En su lugar, preferimos que la explicación conserve una relación causal:

<div class="causal-flow">

<div class="causal-step">
<span class="causal-step__number">1</span>
<strong>Algo funciona</strong>
<span>Partimos desde una solución suficientemente simple y razonable.</span>
</div>

<div class="causal-flow__arrow" aria-hidden="true">→</div>

<div class="causal-step">
<span class="causal-step__number">2</span>
<strong>Cambia una condición</strong>
<span>Aparece un requisito, más uso o un contexto diferente.</span>
</div>

<div class="causal-flow__arrow" aria-hidden="true">→</div>

<div class="causal-step">
<span class="causal-step__number">3</span>
<strong>Aparece una limitación</strong>
<span>La solución actual deja de responder bien a la nueva situación.</span>
</div>

<div class="causal-flow__arrow" aria-hidden="true">→</div>

<div class="causal-step">
<span class="causal-step__number">4</span>
<strong>Exploramos</strong>
<span>Consideramos qué podríamos hacer y qué consecuencias tendría.</span>
</div>

<div class="causal-flow__arrow" aria-hidden="true">→</div>

<div class="causal-step">
<span class="causal-step__number">5</span>
<strong>Hacemos el cambio mínimo</strong>
<span>Introducimos solamente lo necesario para responder al problema visible.</span>
</div>

<div class="causal-flow__arrow" aria-hidden="true">→</div>

<div class="causal-step">
<span class="causal-step__number">6</span>
<strong>Ponemos nombre</strong>
<span>El concepto aparece después de que ya existe algo que reconocer.</span>
</div>

<div class="causal-flow__arrow" aria-hidden="true">→</div>

<div class="causal-step">
<span class="causal-step__number">7</span>
<strong>Observamos costos y límites</strong>
<span>Vemos dónde ayuda, qué cuesta y cuándo deja de tener sentido.</span>
</div>

</div>

<p class="visual-equivalent"><strong>En texto:</strong> partimos desde algo que funciona; cambia una condición; aparece una limitación; exploramos alternativas; hacemos el cambio mínimo útil; recién entonces ponemos nombre al concepto y observamos sus costos y límites.</p>

No todas las lecciones necesitan seguir exactamente esos pasos.

<div class="causal-example">
<span class="causal-example__label">Ejemplo concreto</span>
<strong>Un endpoint funciona</strong>
<span aria-hidden="true">→</span>
<strong>crecen las reglas de negocio</strong>
<span aria-hidden="true">→</span>
<strong>necesitamos probarlas sin HTTP</strong>
<span aria-hidden="true">→</span>
<strong>recién entonces aparece algo que podemos reconocer como un caso de uso</strong>
</div>

<p class="visual-equivalent"><strong>En texto:</strong> el caso de uso no aparece porque queríamos aplicar una arquitectura; aparece después de que una necesidad concreta vuelve útil separar esa operación.</p>

## Una fuente puede tener muchas realizaciones

La misma intención pedagógica puede expresarse de distintas formas.

Podemos cambiar:

- el lenguaje de programación;
- el dominio del ejemplo;
- la dificultad;
- la cantidad de ayuda;
- los diagramas;
- los ejercicios;
- la forma de interacción.

Eso nos permite, por ejemplo, explicar la misma idea usando C# y órdenes, Python y videojuegos, una tutoría guiada o una serie de ejercicios.

Pero hay cosas que no deberían cambiar silenciosamente: la intención de la lección, las tensiones esenciales, sus límites y aquello que todavía no corresponde introducir.

Eso no significa que la fuente sea inmutable.

Una realización también puede enseñarnos que la secuencia no funciona como esperábamos, que una tensión aparece demasiado pronto, que falta una transición o que estábamos intentando enseñar demasiadas cosas a la vez.

Cuando eso ocurre, revisamos la **fuente pedagógica** y dejamos visible el cambio. La realización no solo deriva de la fuente: también puede producir evidencia para mejorarla.

## Las condiciones de acceso también son parte de la generación

No queremos diseñar una explicación y preguntarnos por accesibilidad recién al final.

Mientras generamos una lección intentamos no asumir innecesariamente:

- software o servicios pagados;
- hardware potente;
- conexiones rápidas;
- educación universitaria;
- certificaciones;
- dominio previo del inglés;
- condiciones visuales, físicas o sensoriales ideales.

Cuando un término técnico todavía no es necesario, preferimos construir primero la intuición.

Cuando usamos un término en inglés que importa para comprender la idea, mostramos también su significado en español.

Y cuando una representación visual contiene información esencial, procuramos que exista una forma textual de acceder a ella.

## Una fuente incompleta no es lo mismo que una página incompleta

Podemos saber con claridad qué queremos enseñar aunque todavía no hayamos decidido el mejor diagrama o ejercicio.

Eso significa que la **fuente pedagógica** puede estar suficientemente definida aunque una realización concreta todavía esté incompleta.

También puede ocurrir lo contrario: una página puede verse terminada y, sin embargo, esconder que todavía no sabemos por qué introdujimos una abstracción o qué queremos que la persona comprenda.

> **Una página puede verse terminada y aun así no saber qué está intentando enseñar.**

Preferimos que esas dudas permanezcan visibles antes que rellenarlas con una explicación convincente pero inventada.

## Antes de publicar

Revisamos preguntas como estas:

- ¿podemos rastrear cada concepto importante hasta el problema que lo hizo útil?
- ¿introdujimos algo solamente porque “así se hace”?
- ¿mostramos qué ocurriría si no hiciéramos el cambio cuando eso ayuda a comprenderlo?
- ¿explicamos cuándo la técnica puede no ser necesaria?
- ¿distinguimos hechos de heurísticas y preferencias?
- ¿los recursos visuales responden preguntas concretas y siguen siendo comprensibles de otra forma?
- ¿alguien puede seguir el recorrido sin conocer previamente el nombre formal del concepto?
- ¿estamos introduciendo una barrera económica, lingüística, educativa o de accesibilidad que no era técnicamente necesaria?

Una lección no está terminada solo porque su resultado final sea correcto.

Está mucho más cerca de estar terminada cuando una persona puede **reconstruir por qué ese resultado llegó a tener sentido**.
