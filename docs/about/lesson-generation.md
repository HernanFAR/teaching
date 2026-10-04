# Cómo generamos una lección

Una lección de Teaching no empieza necesariamente como una página terminada.

Antes de decidir el ejemplo, el lenguaje, los diagramas o incluso la forma exacta de explicarla, intentamos conservar algo más estable: **qué queremos que una persona llegue a entender y qué recorrido hace que esa comprensión tenga sentido**.

A eso lo tratamos como la **fuente pedagógica** de la lección.

En Teaching, esa fuente se expresa normalmente mediante unas **instrucciones base de generación**: un artefacto que conserva la intención, el recorrido, los límites y las condiciones que no deberían perderse al producir distintas versiones de una misma lección.

## Primero definimos qué debe permanecer

Una buena fuente debería dejar suficientemente claras tres cosas:

<div class="teaching-grid teaching-grid--3 teaching-grid--stack-medium">

<div class="teaching-card">
<span class="teaching-eyebrow">Intención</span>
<strong>Qué queremos que la persona comprenda</strong>
<span>Qué debería entender al terminar y qué todavía no necesita aprender.</span>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">Recorrido</span>
<strong>Qué debe ocurrir para que esa comprensión tenga sentido</strong>
<span>Qué problemas o tensiones deben aparecer y en qué orden importa que aparezcan.</span>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">Límites y acceso</span>
<strong>Qué no debería desaparecer de la explicación</strong>
<span>Qué costos, límites y condiciones de accesibilidad o acceso material debemos respetar.</span>
</div>

</div>

No necesitamos decidir desde el comienzo cada frase, diagrama o ejercicio.

Sí necesitamos saber **qué debe permanecer estable aunque cambie la forma de enseñar**.

## El recorrido debe tener causas

Preferimos un recorrido donde cada paso aparezca como respuesta a una necesidad visible.

Una secuencia como esta puede mostrar el resultado, pero no todavía las causas:

```mermaid
flowchart LR
    A[Capa] --> B[Interfaz] --> C[Patrón] --> D[Arquitectura]
```

<p class="visual-equivalent"><strong>En texto:</strong> la secuencia muestra capa → interfaz → patrón → arquitectura; por sí sola no explica por qué apareció cada concepto.</p>

En su lugar, preferimos que la explicación conserve una relación causal:

<div class="causal-flow">

<div class="teaching-item teaching-item--stacked">
<span class="teaching-item__marker">1</span>
<strong>Algo funciona</strong>
<span>Partimos desde una solución suficientemente simple y razonable.</span>
</div>

<div class="causal-flow__arrow" aria-hidden="true">→</div>

<div class="teaching-item teaching-item--stacked">
<span class="teaching-item__marker">2</span>
<strong>Cambia una condición</strong>
<span>Aparece un requisito, más uso o un contexto diferente.</span>
</div>

<div class="causal-flow__arrow" aria-hidden="true">→</div>

<div class="teaching-item teaching-item--stacked">
<span class="teaching-item__marker">3</span>
<strong>Aparece una limitación</strong>
<span>La solución actual deja de responder bien a la nueva situación.</span>
</div>

<div class="causal-flow__arrow" aria-hidden="true">→</div>

<div class="teaching-item teaching-item--stacked">
<span class="teaching-item__marker">4</span>
<strong>Exploramos</strong>
<span>Consideramos qué podríamos hacer y qué consecuencias tendría.</span>
</div>

<div class="causal-flow__arrow" aria-hidden="true">→</div>

<div class="teaching-item teaching-item--stacked">
<span class="teaching-item__marker">5</span>
<strong>Hacemos el cambio mínimo</strong>
<span>Introducimos solamente lo necesario para responder al problema visible.</span>
</div>

<div class="causal-flow__arrow" aria-hidden="true">→</div>

<div class="teaching-item teaching-item--stacked">
<span class="teaching-item__marker">6</span>
<strong>Ponemos nombre</strong>
<span>El concepto aparece después de que ya existe algo que reconocer.</span>
</div>

<div class="causal-flow__arrow" aria-hidden="true">→</div>

<div class="teaching-item teaching-item--stacked">
<span class="teaching-item__marker">7</span>
<strong>Observamos costos y límites</strong>
<span>Vemos dónde ayuda, qué cuesta y cuándo deja de tener sentido.</span>
</div>

</div>

<p class="visual-equivalent"><strong>En texto:</strong> partimos desde algo que funciona; cambia una condición; aparece una limitación; exploramos alternativas; hacemos el cambio mínimo útil; recién entonces ponemos nombre al concepto y observamos sus costos y límites.</p>

No todas las lecciones necesitan seguir exactamente esos pasos. Un ejemplo pequeño de ese recorrido podría verse así:

<div class="teaching-flow teaching-flow--compact">
<div class="teaching-flow__step"><strong>Un endpoint funciona</strong></div>
<div class="teaching-flow__arrow" aria-hidden="true">→</div>
<div class="teaching-flow__step"><strong>crecen las reglas de negocio</strong></div>
<div class="teaching-flow__arrow" aria-hidden="true">→</div>
<div class="teaching-flow__step"><strong>necesitamos probarlas sin HTTP</strong></div>
<div class="teaching-flow__arrow" aria-hidden="true">→</div>
<div class="teaching-flow__step"><strong>aparece una operación separable</strong></div>
<div class="teaching-flow__arrow" aria-hidden="true">→</div>
<div class="teaching-flow__step"><strong>la reconocemos como un caso de uso</strong></div>
</div>

<p class="visual-equivalent"><strong>En texto:</strong> el caso de uso no aparece porque queríamos aplicar una arquitectura; aparece después de que una necesidad concreta vuelve útil separar esa operación.</p>

## Una fuente puede tener muchas realizaciones

La misma intención pedagógica puede expresarse de distintas formas.

<div class="teaching-grid teaching-grid--3">

<div class="teaching-card">
<span class="teaching-eyebrow">Lenguaje</span>
<strong>C#, Python u otro</strong>
<span>Cambia la herramienta, no aquello que intentamos enseñar.</span>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">Dominio</span>
<strong>Órdenes, videojuegos, inventario...</strong>
<span>El contexto puede acercar la idea sin alterar su recorrido esencial.</span>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">Dificultad</span>
<strong>Más o menos profundidad</strong>
<span>Podemos adaptar cuánto asumimos y cuánto acompañamiento necesita la persona.</span>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">Representación</span>
<strong>Texto, código, diagramas o ejercicios</strong>
<span>La forma cambia según qué ayude mejor a comprender la tensión actual.</span>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">Interacción</span>
<strong>Lectura, tutoría o práctica guiada</strong>
<span>La misma fuente puede convertirse en experiencias de aprendizaje distintas.</span>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">Ayuda</span>
<strong>Más o menos andamiaje</strong>
<span>Podemos variar pistas, ejemplos y apoyo sin adelantar conceptos innecesarios.</span>
</div>

</div>

Eso nos permite producir realizaciones distintas sin perder necesariamente la misma intención pedagógica.

Aunque la forma cambie, hay algunas cosas que deberían permanecer reconocibles:

<div class="teaching-grid teaching-grid--2">

<div class="teaching-item teaching-item--quiet">
<span class="teaching-item__marker">1</span>
<strong>Intención pedagógica</strong>
<span>Qué debería comprender la persona al terminar.</span>
</div>

<div class="teaching-item teaching-item--quiet">
<span class="teaching-item__marker">2</span>
<strong>Tensiones esenciales</strong>
<span>Qué problemas deben aparecer para que el concepto tenga una causa visible.</span>
</div>

<div class="teaching-item teaching-item--quiet">
<span class="teaching-item__marker">3</span>
<strong>Límites</strong>
<span>Qué costos, contrafactuales y condiciones no deberían desaparecer.</span>
</div>

<div class="teaching-item teaching-item--quiet">
<span class="teaching-item__marker">4</span>
<strong>Momento de introducir conceptos</strong>
<span>Qué todavía no corresponde nombrar o enseñar.</span>
</div>

</div>

<p class="visual-equivalent visual-equivalent--subtle"><strong>En texto:</strong> una realización puede cambiar lenguaje, dominio, dificultad, representación, interacción o cantidad de ayuda; no debería cambiar silenciosamente la intención, las tensiones esenciales, los límites ni el momento en que aparecen los conceptos.</p>

La fuente tampoco es inmutable.

Una realización puede enseñarnos que la secuencia no funciona como esperábamos, que una tensión aparece demasiado pronto, que falta una transición o que estamos intentando enseñar demasiadas cosas a la vez.

<div class="teaching-flow">

<div class="teaching-flow__step">
<strong>Fuente pedagógica</strong>
<span>Declara qué intentamos preservar.</span>
</div>

<div class="teaching-flow__arrow" aria-hidden="true">→</div>

<div class="teaching-flow__step">
<strong>Realización</strong>
<span>Expresa esa intención de una forma concreta.</span>
</div>

<div class="teaching-flow__arrow" aria-hidden="true">→</div>

<div class="teaching-flow__step">
<strong>Evidencia</strong>
<span>La experiencia revela qué funcionó, qué faltó o qué apareció demasiado pronto.</span>
</div>

<div class="teaching-flow__arrow" aria-hidden="true">↺</div>

<div class="teaching-flow__step teaching-flow__step--accent">
<strong>Revisión de la fuente</strong>
<span>Actualizamos la intención o el recorrido cuando la evidencia lo justifica.</span>
</div>

</div>

<p class="visual-equivalent visual-equivalent--subtle"><strong>En texto:</strong> la fuente produce realizaciones, pero las realizaciones también producen evidencia que puede justificar revisar la fuente.</p>

## Las condiciones de acceso también son parte de la generación

No queremos diseñar una explicación y preguntarnos por accesibilidad recién al final.

Mientras generamos una lección intentamos no asumir innecesariamente ciertas condiciones de acceso:

<div class="teaching-grid teaching-grid--3">

<div class="teaching-card">
<span class="teaching-eyebrow">Costo</span>
<strong>Software o servicios pagados</strong>
<span>No asumimos que una persona pueda pagar herramientas, plataformas o suscripciones para aprender el concepto.</span>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">Hardware</span>
<strong>Equipos potentes</strong>
<span>No asumimos computadores de alto rendimiento cuando el objetivo pedagógico puede alcanzarse con recursos más modestos.</span>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">Conectividad</span>
<strong>Conexiones rápidas o estables</strong>
<span>No convertimos una buena conexión a internet en un requisito implícito cuando no es técnicamente necesaria.</span>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">Trayectoria</span>
<strong>Educación formal o certificaciones</strong>
<span>No usamos universidad, certificaciones o formación costosa como filtro innecesario para acceder a una explicación.</span>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">Idioma</span>
<strong>Dominio previo del inglés</strong>
<span>No asumimos que una persona ya comprende términos en inglés que todavía no hemos explicado.</span>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">Accesibilidad</span>
<strong>Condiciones visuales, físicas o sensoriales ideales</strong>
<span>No diseñamos la experiencia suponiendo que todas las personas acceden al contenido de la misma forma.</span>
</div>

</div>

En su lugar, intentamos tomar decisiones de generación que reduzcan barreras innecesarias:

<div class="teaching-grid teaching-grid--2">

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">1</span>
<strong>Intuición antes del tecnicismo</strong>
<span>Cuando un término técnico todavía no es necesario, preferimos construir primero la intuición que lo vuelve comprensible.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">2</span>
<strong>Traducción visible</strong>
<span>Cuando usamos un término en inglés que importa para comprender la idea, mostramos también su significado en español.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">3</span>
<strong>Acceso alternativo</strong>
<span>Cuando una representación visual contiene información esencial, procuramos que exista una forma textual de acceder a ella.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">4</span>
<strong>Diseño desde el inicio</strong>
<span>La accesibilidad y las condiciones materiales forman parte de la generación de la lección, no de una revisión posterior.</span>
</div>

</div>

<p class="visual-equivalent visual-equivalent--subtle"><strong>En texto:</strong> generar una lección también implica decidir desde qué condiciones de acceso estamos enseñando. No solo importa qué explicamos, sino también qué barreras introduce la forma en que lo explicamos.</p>

## Una fuente incompleta no es lo mismo que una página incompleta

Podemos saber con claridad qué queremos enseñar aunque todavía no hayamos decidido el mejor diagrama o ejercicio. Una idea pedagógica puede estar suficientemente definida aunque una realización concreta todavía esté incompleta.

<div class="completion-comparison">

<div class="completion-card completion-card--source">
<span class="completion-card__label">Fuente pedagógica incompleta</span>

<div class="completion-card__item completion-card__item--known">
<strong>Sabemos qué debe comprender la persona</strong>
</div>

<div class="completion-card__item completion-card__item--known">
<strong>El recorrido general ya tiene sentido</strong>
</div>

<div class="completion-card__item completion-card__item--open">
<strong>Falta decidir ejemplos, diagramas o ejercicios</strong>
</div>

<div class="completion-card__item completion-card__item--question">
<strong>Todavía hay preguntas abiertas y eso sigue visible</strong>
</div>

</div>

<div class="completion-card completion-card--page">
<span class="completion-card__label">Página incompleta</span>

<div class="completion-card__item completion-card__item--known">
<strong>La explicación publicada todavía no está terminada</strong>
</div>

<div class="completion-card__item completion-card__item--known">
<strong>Puede faltar un diagrama, un bloque o una transición</strong>
</div>

<div class="completion-card__item completion-card__item--open">
<strong>La forma visible aún está en construcción</strong>
</div>

<div class="completion-card__item completion-card__item--info">
<strong>Eso no implica que la fuente esté mal definida</strong>
</div>

</div>

</div>

<p class="visual-equivalent visual-equivalent--subtle"><strong>En texto:</strong> una fuente puede estar suficientemente definida aunque todavía falten decisiones de representación; una página puede seguir incompleta aunque la intención pedagógica ya esté clara.</p>

!!! warning "Una página puede verse terminada y aun así no saber qué está intentando enseñar."

    Puede tener texto, diagramas y ejercicios y, sin embargo, seguir ocultando que todavía no sabemos por qué introdujimos una abstracción o qué queremos que la persona comprenda.

    La forma visible puede estar cerrada aunque el objetivo pedagógico siga siendo difuso.

Preferimos que esas dudas permanezcan **visibles** antes que rellenarlas con una explicación convincente pero inventada.

## Antes de publicar

Revisamos estas preguntas para comprobar que la lección siga siendo clara, útil y justificable:

<div class="teaching-grid teaching-grid--2">

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">1</span>
<strong>¿Podemos rastrear cada concepto hasta el problema que lo hizo útil?</strong>
<span>La explicación debería dejar visible qué necesidad motivó el concepto y por qué vale la pena aprenderlo.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">2</span>
<strong>¿Lo introdujimos solamente porque “así se hace”?</strong>
<span>No queremos incluir algo solo por tradición. Debe existir una razón actual y visible para enseñarlo.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">3</span>
<strong>¿Mostramos qué ocurriría si no hiciéramos el cambio?</strong>
<span>Cuando ayuda a comprenderlo, mostramos el contrafactual para que el valor de la técnica no dependa de memorizarla.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">4</span>
<strong>¿Explicamos cuándo la técnica puede no ser necesaria?</strong>
<span>Una técnica también se entiende por sus límites y por los contextos donde deja de ser la mejor opción.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">5</span>
<strong>¿Distinguimos hechos de heurísticas y preferencias?</strong>
<span>Separamos lo comprobable de una regla práctica, una decisión contextual o una preferencia.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">6</span>
<strong>¿Los recursos visuales responden preguntas concretas?</strong>
<span>Un recurso visual debería tener una función pedagógica y seguir siendo comprensible por otra vía cuando contiene información esencial.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">7</span>
<strong>¿Alguien puede seguir el recorrido sin conocer el nombre formal?</strong>
<span>La explicación debería construir la intuición antes de exigir que la persona conozca el término técnico.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">8</span>
<strong>¿Estamos introduciendo barreras innecesarias?</strong>
<span>No deberíamos añadir barreras económicas, lingüísticas, educativas o de accesibilidad que no sean técnicamente necesarias.</span>
</div>

</div>

!!! info "Una lección no está terminada solo porque su resultado final sea correcto."

    Está mucho más cerca de estar terminada cuando una persona puede **reconstruir por qué ese resultado llegó a tener sentido**.
