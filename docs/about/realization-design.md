# Cómo diseñamos una realización

Una fuente pedagógica puede estar suficientemente clara y todavía no decirnos cuál es la mejor forma de convertirla en una página, una tutoría, un ejercicio o una experiencia interactiva.

Para no mezclar responsabilidades, distinguimos tres capas:

<div class="teaching-grid teaching-grid--3 teaching-grid--stack-medium">

<div class="teaching-item teaching-item--stacked">
<span class="teaching-item__marker">1</span>
<strong>Fuente pedagógica</strong>
<span>¿Qué queremos enseñar y qué debe permanecer estable aunque cambie la forma?</span>
</div>

<div class="teaching-item teaching-item--stacked">
<span class="teaching-item__marker">2</span>
<strong>Diseño de realización</strong>
<span>¿Qué forma debería tomar esa intención en esta experiencia concreta y por qué?</span>
</div>

<div class="teaching-item teaching-item--stacked">
<span class="teaching-item__marker">3</span>
<strong>Implementación</strong>
<span>¿Cómo materializamos ese diseño con los mecanismos concretos que tenemos disponibles?</span>
</div>

</div>

La fuente no decide cada detalle visual. El diseño no debería inventar significado pedagógico. Y la implementación no demuestra por sí sola que el diseño era correcto.

Después de implementar, observamos lo que realmente ocurrió:

<div class="teaching-flow teaching-flow--multiline">

<div class="teaching-flow__row">

<div class="teaching-flow__step teaching-flow__step--numbered">
<span class="teaching-flow__marker">1</span>
<strong>Fuente pedagógica</strong>
<span>Declara qué intentamos enseñar y preservar.</span>
</div>

<div class="teaching-flow__arrow" aria-hidden="true">→</div>

<div class="teaching-flow__step teaching-flow__step--numbered">
<span class="teaching-flow__marker">2</span>
<strong>Diseño de realización</strong>
<span>Decide qué forma debería tomar esa intención.</span>
</div>

</div>

<div class="teaching-flow__row">

<div class="teaching-flow__step teaching-flow__step--numbered">
<span class="teaching-flow__marker">3</span>
<strong>Implementación</strong>
<span>Materializa el diseño con mecanismos concretos.</span>
</div>

<div class="teaching-flow__arrow" aria-hidden="true">→</div>

<div class="teaching-flow__step teaching-flow__step--numbered teaching-flow__step--accent">
<span class="teaching-flow__marker">4</span>
<strong>Observación y revisión</strong>
<span>La experiencia produce evidencia sobre lo que funcionó y lo que debe cambiar.</span>
</div>

</div>

</div>

<p class="visual-equivalent"><strong>En texto:</strong> partimos de una fuente pedagógica, diseñamos una realización, la implementamos y observamos el resultado. Esa evidencia puede hacernos revisar la implementación, el diseño o incluso la fuente.</p>

La evidencia puede hacernos revisar la implementación, el diseño o incluso la fuente pedagógica.

## No todo contenido necesita la misma forma

Una parte de una lección puede necesitar narrativa. Otra puede funcionar mejor como secuencia, comparación, lista de verificación (`checklist`), código, diagrama o aviso semántico (`admonition`).

No intentamos convertir todo en tarjetas ni agregar una visual porque sí.

La representación debería responder una pregunta concreta.

<div class="teaching-grid teaching-grid--2 teaching-grid--last-wide">

<div class="teaching-card">
<span class="teaching-eyebrow">Secuencia</span>
<strong>¿Qué causa el siguiente paso?</strong>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">Comparación</span>
<strong>¿Qué cambia entre dos estados?</strong>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">Grilla</span>
<strong>¿Qué dimensiones existen en paralelo?</strong>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">Aviso semántico</span>
<strong>¿Qué advertencia o conclusión importante debe quedar destacada?</strong>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">Texto corrido</span>
<strong>¿Necesitamos interpretar o conectar ideas más que representarlas?</strong>
</div>

</div>

La forma aparece después de entender el trabajo pedagógico que debe hacer esa parte de la entrada.

### Diseñamos una especificación de realización

Antes de implementar, intentamos decidir al menos:

<div class="teaching-grid teaching-grid--2 teaching-grid--lateral-badges">

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">1</span>
<strong>Estructura editorial</strong>
<span>Qué partes son narrativas y cuáles necesitan estructura visual.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">2</span>
<strong>Representación</strong>
<span>Qué representación responde mejor a cada pregunta.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">3</span>
<strong>Componentes existentes</strong>
<span>Qué componentes del sitio podemos reutilizar sin distorsionar el significado.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">4</span>
<strong>Acceso alternativo</strong>
<span>Qué información visual necesita un equivalente textual.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">5</span>
<strong>Comportamiento adaptable</strong>
<span>Cómo debería comportarse la composición en pantallas estrechas.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">6</span>
<strong>Límite de responsabilidad</strong>
<span>Qué decisiones son propias de esta realización y no de la fuente pedagógica.</span>
</div>

</div>

!!! info "Especificación de realización"

    Estas decisiones forman una **especificación de realización**. La especificación puede cambiar sin alterar necesariamente la fuente pedagógica.

### Preferimos componentes con significado

Cuando un componente existente expresa bien la intención, preferimos reutilizarlo.

<div class="teaching-grid teaching-grid--2 teaching-grid--last-wide">

<div class="teaching-card">
<span class="teaching-eyebrow">Admonition · aviso semántico</span>
<strong>Advertencias, notas o conclusiones</strong>
<span>Usamos el componente nativo cuando la información necesita énfasis semántico.</span>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">Teaching card · tarjeta</span>
<strong>Conceptos paralelos</strong>
<span>Sirve cuando varias ideas existen al mismo nivel y ninguna implica una secuencia.</span>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">Teaching flow · flujo</span>
<strong>Recorridos causales o procesos lineales</strong>
<span>Hace visible un orden cuando un estado conduce al siguiente.</span>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">Comparación</span>
<strong>Contrastes relevantes</strong>
<span>No tiene una única forma obligatoria: elegimos la estructura que mantenga legible el contraste.</span>
</div>

<div class="teaching-card">
<span class="teaching-eyebrow">Markdown</span>
<strong>Cuando una representación especial no agrega comprensión</strong>
<span>Texto, listas y estructura semántica normal siguen siendo la opción preferida cuando bastan.</span>
</div>

</div>

El objetivo no es construir una biblioteca de componentes. Es reducir complejidad accidental y hacer que la forma acompañe al contenido.

### La accesibilidad también se diseña aquí

Una visual que contiene información esencial necesita otra vía de acceso.

Una composición que funciona en escritorio debe seguir teniendo un orden comprensible en móvil.

Y una interacción no debería depender únicamente de pasar el puntero (`hover`), color, animación o precisión con un puntero.

Por eso el diseño de realización también revisa:

<div class="teaching-grid teaching-grid--2 teaching-grid--lateral-badges">

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">1</span>
<strong>Equivalentes textuales</strong>
<span>La información visual esencial debe poder comprenderse por otra vía.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">2</span>
<strong>Estructura semántica</strong>
<span>El contenido debe seguir siendo navegable y comprensible más allá de su presentación visual.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">3</span>
<strong>Contraste y densidad</strong>
<span>La composición debe conservar legibilidad sin depender de una pantalla o condición visual ideal.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">4</span>
<strong>Lectura con teclado</strong>
<span>La interacción no debe exigir un puntero cuando exista una alternativa razonable.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">5</span>
<strong>Comportamiento adaptable</strong>
<span>Preferimos reorganizar la composición antes que comprimirla hasta volverla ilegible.</span>
</div>

<div class="teaching-item teaching-item--criterion">
<span class="teaching-item__marker">6</span>
<strong>Condiciones materiales de acceso</strong>
<span>El diseño no debería añadir dependencias pagadas o exigencias de recursos que no sean necesarias para aprender.</span>
</div>

</div>

## Los bocetos pueden ser desechables

A veces resulta útil explorar una idea visual antes de implementarla.

Podemos usar dibujos, wireframes (bocetos estructurales) o imágenes generadas con IA para probar composición, jerarquía o agrupaciones.

!!! warning "Un boceto no es la realización"

    Esos bocetos **no son la realización final** ni definen lo que la lección significa.

    Su función es ayudarnos a descubrir una estructura que después podamos implementar de forma semántica, accesible y mantenible.

El recorrido es:

<div class="teaching-flow teaching-flow--multiline">

<div class="teaching-flow__row">

<div class="teaching-flow__step teaching-flow__step--numbered">
<span class="teaching-flow__marker">1</span>
<strong>Fuente pedagógica</strong>
</div>

<div class="teaching-flow__arrow" aria-hidden="true">→</div>

<div class="teaching-flow__step teaching-flow__step--numbered">
<span class="teaching-flow__marker">2</span>
<strong>Explorar realizaciones posibles</strong>
</div>

<div class="teaching-flow__arrow" aria-hidden="true">→</div>

<div class="teaching-flow__step teaching-flow__step--numbered">
<span class="teaching-flow__marker">3</span>
<strong>Elegir una estructura</strong>
</div>

</div>

<div class="teaching-flow__row">

<div class="teaching-flow__step teaching-flow__step--numbered">
<span class="teaching-flow__marker">4</span>
<strong>Implementar</strong>
</div>

<div class="teaching-flow__arrow" aria-hidden="true">→</div>

<div class="teaching-flow__step teaching-flow__step--numbered">
<span class="teaching-flow__marker">5</span>
<strong>Observar</strong>
</div>

<div class="teaching-flow__arrow" aria-hidden="true">→</div>

<div class="teaching-flow__step teaching-flow__step--numbered">
<span class="teaching-flow__marker">6</span>
<strong>Revisar</strong>
</div>

</div>

</div>

<p class="visual-equivalent"><strong>En texto:</strong> partimos de la fuente pedagógica, exploramos posibles realizaciones, elegimos una estructura, la implementamos, observamos lo que ocurre y revisamos lo necesario.</p>

La implementación también produce evidencia.

Si al realizar una lección descubrimos que una tensión aparece demasiado pronto, que falta una transición o que intentábamos enseñar demasiadas cosas a la vez, quizá el problema no sea visual: puede ser evidencia para revisar la fuente pedagógica.

## Una fuente puede tener más de un buen diseño

La misma fuente puede dar lugar a distintas realizaciones:

<div class="teaching-grid teaching-grid--3">

<div class="teaching-card">
<strong>Una página web</strong>
</div>

<div class="teaching-card">
<strong>Una tutoría conversacional</strong>
</div>

<div class="teaching-card">
<strong>Una práctica guiada</strong>
</div>

<div class="teaching-card">
<strong>Una presentación</strong>
</div>

<div class="teaching-card">
<strong>Una versión compacta para móvil</strong>
</div>

<div class="teaching-card">
<strong>Una explicación alternativa para otra necesidad</strong>
</div>

</div>

No buscamos una representación definitiva.

Buscamos una realización que preserve la intención y sea adecuada para la experiencia concreta.
