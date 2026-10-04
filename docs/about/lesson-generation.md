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

No todas las lecciones necesitan seguir exactamente esos pasos. Un ejemplo pequeño de ese recorrido podría verse así:

<div class="causal-example">
<strong>Un endpoint funciona</strong>
<span aria-hidden="true">→</span>
<strong>crecen las reglas de negocio</strong>
<span aria-hidden="true">→</span>
<strong>necesitamos probarlas sin HTTP</strong>
<span aria-hidden="true">→</span>
<strong>aparece una operación separable</strong>
<span aria-hidden="true">→</span>
<strong>la reconocemos como un caso de uso</strong>
</div>

<p class="visual-equivalent"><strong>En texto:</strong> el caso de uso no aparece porque queríamos aplicar una arquitectura; aparece después de que una necesidad concreta vuelve útil separar esa operación.</p>

## Una fuente puede tener muchas realizaciones

La misma intención pedagógica puede expresarse de distintas formas.

<div class="realization-variables">

<div class="realization-variable">
<span class="realization-variable__label">Lenguaje</span>
<strong>C#, Python u otro</strong>
<span>Cambia la herramienta, no aquello que intentamos enseñar.</span>
</div>

<div class="realization-variable">
<span class="realization-variable__label">Dominio</span>
<strong>Órdenes, videojuegos, inventario...</strong>
<span>El contexto puede acercar la idea sin alterar su recorrido esencial.</span>
</div>

<div class="realization-variable">
<span class="realization-variable__label">Dificultad</span>
<strong>Más o menos profundidad</strong>
<span>Podemos adaptar cuánto asumimos y cuánto acompañamiento necesita la persona.</span>
</div>

<div class="realization-variable">
<span class="realization-variable__label">Representación</span>
<strong>Texto, código, diagramas o ejercicios</strong>
<span>La forma cambia según qué ayude mejor a comprender la tensión actual.</span>
</div>

<div class="realization-variable">
<span class="realization-variable__label">Interacción</span>
<strong>Lectura, tutoría o práctica guiada</strong>
<span>La misma fuente puede convertirse en experiencias de aprendizaje distintas.</span>
</div>

<div class="realization-variable">
<span class="realization-variable__label">Ayuda</span>
<strong>Más o menos andamiaje</strong>
<span>Podemos variar pistas, ejemplos y apoyo sin adelantar conceptos innecesarios.</span>
</div>

</div>

Eso nos permite producir realizaciones distintas sin perder necesariamente la misma intención pedagógica.

Aunque la forma cambie, hay algunas cosas que deberían permanecer reconocibles:

<div class="realization-invariants">

<div class="realization-invariant">
<span class="realization-invariant__number">1</span>
<strong>Intención pedagógica</strong>
<span>Qué debería comprender la persona al terminar.</span>
</div>

<div class="realization-invariant">
<span class="realization-invariant__number">2</span>
<strong>Tensiones esenciales</strong>
<span>Qué problemas deben aparecer para que el concepto tenga una causa visible.</span>
</div>

<div class="realization-invariant">
<span class="realization-invariant__number">3</span>
<strong>Límites</strong>
<span>Qué costos, contrafactuales y condiciones no deberían desaparecer.</span>
</div>

<div class="realization-invariant">
<span class="realization-invariant__number">4</span>
<strong>Momento de introducir conceptos</strong>
<span>Qué todavía no corresponde nombrar o enseñar.</span>
</div>

</div>

<p class="visual-equivalent visual-equivalent--subtle"><strong>En texto:</strong> una realización puede cambiar lenguaje, dominio, dificultad, representación, interacción o cantidad de ayuda; no debería cambiar silenciosamente la intención, las tensiones esenciales, los límites ni el momento en que aparecen los conceptos.</p>

La fuente tampoco es inmutable.

Una realización puede enseñarnos que la secuencia no funciona como esperábamos, que una tensión aparece demasiado pronto, que falta una transición o que estamos intentando enseñar demasiadas cosas a la vez.

<div class="source-feedback">

<div class="source-feedback__step">
<strong>Fuente pedagógica</strong>
<span>Declara qué intentamos preservar.</span>
</div>

<div class="source-feedback__arrow" aria-hidden="true">→</div>

<div class="source-feedback__step">
<strong>Realización</strong>
<span>Expresa esa intención de una forma concreta.</span>
</div>

<div class="source-feedback__arrow" aria-hidden="true">→</div>

<div class="source-feedback__step">
<strong>Evidencia</strong>
<span>La experiencia revela qué funcionó, qué faltó o qué apareció demasiado pronto.</span>
</div>

<div class="source-feedback__arrow" aria-hidden="true">↺</div>

<div class="source-feedback__step source-feedback__step--review">
<strong>Revisión de la fuente</strong>
<span>Actualizamos la intención o el recorrido cuando la evidencia lo justifica.</span>
</div>

</div>

<p class="visual-equivalent visual-equivalent--subtle"><strong>En texto:</strong> la fuente produce realizaciones, pero las realizaciones también producen evidencia que puede justificar revisar la fuente.</p>

## Las condiciones de acceso también son parte de la generación

No queremos diseñar una explicación y preguntarnos por accesibilidad recién al final.

Mientras generamos una lección intentamos no asumir innecesariamente ciertas condiciones de acceso:

<div class="access-assumptions">

<div class="access-assumption">
<span class="access-assumption__label">Costo</span>
<strong>Software o servicios pagados</strong>
<span>No asumimos que una persona pueda pagar herramientas, plataformas o suscripciones para aprender el concepto.</span>
</div>

<div class="access-assumption">
<span class="access-assumption__label">Hardware</span>
<strong>Equipos potentes</strong>
<span>No asumimos computadores de alto rendimiento cuando el objetivo pedagógico puede alcanzarse con recursos más modestos.</span>
</div>

<div class="access-assumption">
<span class="access-assumption__label">Conectividad</span>
<strong>Conexiones rápidas o estables</strong>
<span>No convertimos una buena conexión a internet en un requisito implícito cuando no es técnicamente necesaria.</span>
</div>

<div class="access-assumption">
<span class="access-assumption__label">Trayectoria</span>
<strong>Educación formal o certificaciones</strong>
<span>No usamos universidad, certificaciones o formación costosa como filtro innecesario para acceder a una explicación.</span>
</div>

<div class="access-assumption">
<span class="access-assumption__label">Idioma</span>
<strong>Dominio previo del inglés</strong>
<span>No asumimos que una persona ya comprende términos en inglés que todavía no hemos explicado.</span>
</div>

<div class="access-assumption">
<span class="access-assumption__label">Accesibilidad</span>
<strong>Condiciones visuales, físicas o sensoriales ideales</strong>
<span>No diseñamos la experiencia suponiendo que todas las personas acceden al contenido de la misma forma.</span>
</div>

</div>

En su lugar, intentamos tomar decisiones de generación que reduzcan barreras innecesarias:

<div class="access-practices">

<div class="access-practice">
<span class="access-practice__number">1</span>
<strong>Intuición antes del tecnicismo</strong>
<span>Cuando un término técnico todavía no es necesario, preferimos construir primero la intuición que lo vuelve comprensible.</span>
</div>

<div class="access-practice">
<span class="access-practice__number">2</span>
<strong>Traducción visible</strong>
<span>Cuando usamos un término en inglés que importa para comprender la idea, mostramos también su significado en español.</span>
</div>

<div class="access-practice">
<span class="access-practice__number">3</span>
<strong>Acceso alternativo</strong>
<span>Cuando una representación visual contiene información esencial, procuramos que exista una forma textual de acceder a ella.</span>
</div>

<div class="access-practice">
<span class="access-practice__number">4</span>
<strong>Diseño desde el inicio</strong>
<span>La accesibilidad y las condiciones materiales forman parte de la generación de la lección, no de una revisión posterior.</span>
</div>

</div>

<p class="visual-equivalent visual-equivalent--subtle"><strong>En texto:</strong> generar una lección también implica decidir desde qué condiciones de acceso estamos enseñando. No solo importa qué explicamos, sino también qué barreras introduce la forma en que lo explicamos.</p>

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
