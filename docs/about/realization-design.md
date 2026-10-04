# Cómo diseñamos una realización

Una fuente pedagógica puede estar suficientemente clara y todavía no decirnos cuál es la mejor forma de convertirla en una página, una tutoría, un ejercicio o una experiencia interactiva.

Para no mezclar responsabilidades, distinguimos tres capas:

<div class="realization-layers">

<div class="realization-layer">
<span class="realization-layer__number">1</span>
<strong>Fuente pedagógica</strong>
<span>¿Qué queremos enseñar y qué debe permanecer estable aunque cambie la forma?</span>
</div>

<div class="realization-layer">
<span class="realization-layer__number">2</span>
<strong>Diseño de realización</strong>
<span>¿Qué forma debería tomar esa intención en esta experiencia concreta y por qué?</span>
</div>

<div class="realization-layer">
<span class="realization-layer__number">3</span>
<strong>Implementación</strong>
<span>¿Cómo materializamos ese diseño con los mecanismos concretos que tenemos disponibles?</span>
</div>

</div>

La fuente no decide cada detalle visual. El diseño no debería inventar significado pedagógico. Y la implementación no demuestra por sí sola que el diseño era correcto.

Después de implementar, observamos lo que realmente ocurrió:

```text
fuente pedagógica
→ diseño de realización
→ implementación
→ observación y revisión
↺
```

La evidencia puede hacernos revisar la implementación, el diseño o incluso la fuente pedagógica.

## No todo contenido necesita la misma forma

Una parte de una lección puede necesitar narrativa. Otra puede funcionar mejor como secuencia, comparación, checklist, código, diagrama o admonition.

No intentamos convertir todo en tarjetas ni agregar una visual porque sí.

La representación debería responder una pregunta concreta.

Por ejemplo:

- una secuencia puede mostrar **qué causa el siguiente paso**;
- una comparación puede mostrar **qué cambia entre dos estados**;
- una grilla puede mostrar **dimensiones que existen en paralelo**;
- un admonition puede fijar **una advertencia o conclusión importante**;
- el texto corrido puede ser la mejor forma de **interpretar o conectar ideas**.

## Diseñamos una especificación de realización

Antes de implementar, intentamos decidir al menos:

- qué partes son narrativas y cuáles necesitan estructura visual;
- qué representación responde mejor a cada pregunta;
- qué componentes existentes del sitio podemos reutilizar;
- qué información visual necesita equivalente textual;
- cómo debería comportarse la composición en pantallas estrechas;
- qué decisiones son propias de esta realización y no de la fuente pedagógica.

Esto forma una **especificación de realización**.

La especificación puede cambiar sin alterar necesariamente la fuente.

## Preferimos componentes con significado

Cuando un componente existente expresa bien la intención, preferimos reutilizarlo.

Por ejemplo:

- admonitions para advertencias, notas o conclusiones;
- cards para conceptos paralelos;
- secuencias para recorridos causales;
- comparaciones para contrastes relevantes;
- Markdown normal cuando una representación especial no agrega comprensión.

El objetivo no es construir una biblioteca de componentes. Es reducir complejidad accidental y hacer que la forma acompañe al contenido.

## La accesibilidad también se diseña aquí

Una visual que contiene información esencial necesita otra vía de acceso.

Una composición que funciona en escritorio debe seguir teniendo un orden comprensible en móvil.

Y una interacción no debería depender únicamente de hover, color, animación o precisión con un puntero.

Por eso el diseño de realización también revisa:

- equivalentes textuales;
- estructura semántica;
- contraste y densidad;
- lectura con teclado;
- comportamiento responsive;
- condiciones materiales de acceso.

## Los bocetos pueden ser desechables

A veces resulta útil explorar una idea visual antes de implementarla.

Podemos usar dibujos, wireframes o imágenes generadas con IA para probar composición, jerarquía o agrupaciones.

Esos bocetos **no son la realización final** ni definen lo que la lección significa.

Su función es ayudarnos a descubrir una estructura que después podamos implementar de forma semántica, accesible y mantenible.

El recorrido es:

```text
fuente pedagógica
→ explorar realizaciones posibles
→ elegir una estructura
→ implementar
→ observar
→ revisar
```

La implementación también produce evidencia.

Si al realizar una lección descubrimos que una tensión aparece demasiado pronto, que falta una transición o que intentábamos enseñar demasiadas cosas a la vez, quizá el problema no sea visual: puede ser evidencia para revisar la fuente pedagógica.

## Una fuente puede tener más de un buen diseño

La misma fuente puede dar lugar a:

- una página web;
- una tutoría conversacional;
- una práctica guiada;
- una presentación;
- una versión compacta para móvil;
- una explicación alternativa para otra necesidad.

No buscamos una representación definitiva.

Buscamos una realización que preserve la intención y sea adecuada para la experiencia concreta.
