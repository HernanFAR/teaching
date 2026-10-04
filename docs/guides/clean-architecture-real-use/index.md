# Clean Architecture en uso real

La [lección de Clean Architecture](../../lessons/clean-architecture/) responde principalmente:

> **¿Por qué aparece esta forma de arquitectura?**

Esta guía parte desde otro punto:

> **Ya entiendo por qué existe. ¿Cómo tomo decisiones reales al usarla sin convertirla en una plantilla?**

No intentará completar una arquitectura “canónica” ni acumular patrones asociados culturalmente a Clean Architecture.

Su trabajo será recorrer problemas reales que quedaron deliberadamente a medio cocinar en la lección y decidir, uno por uno, qué frontera, mecanismo o patrón merece aparecer.

!!! info "Estado de la guía"
    Esta es la primera guía oficial de Teaching y está **en construcción**.

    El inventario inicial nace de leer la lección publicada como si no conociéramos su proceso de generación y registrar qué conceptos alcanzó a introducir, pero no a desarrollar como herramientas de uso cotidiano.

## Inventario de trabajo

La guía se construirá alrededor de estas preguntas.

### Diseñar casos de uso y Application

¿Cómo diseñamos un caso de uso cuando deja de ser el ejemplo pequeño de la lección?

Necesitamos cocinar inputs, outputs, errores, ownership de la coordinación y los límites de Application.

Seguimiento: [issue #10](https://github.com/HernanFAR/teaching/issues/10).

### Descubrir capacidades, puertos y adaptadores

¿Cómo reconocemos una capacidad real sin terminar creando una interfaz por clase?

Aquí entran puertos, adaptadores, inversión de dependencia y la diferencia entre política y mecanismo.

Seguimiento: [issue #11](https://github.com/HernanFAR/teaching/issues/11).

### Distinguir Domain y Application

La lección mostró una primera frontera. La guía debe llevarla a un sistema mayor:

- qué pertenece a Domain;
- qué pertenece a Application;
- qué modelos cruzan entre ambos;
- cuándo una frontera semántica merece una separación física;
- qué relación tiene esto —y qué relación **no** tiene— con DDD.

Seguimiento: [issue #12](https://github.com/HernanFAR/teaching/issues/12).

### Diseñar mecanismos de entrada

HTTP y marketplace fueron suficientes para descubrir la presión.

Ahora falta trabajar traducción, validación de transporte, errores y múltiples formas de entrada sin entregarles la semántica del caso de uso.

Seguimiento: [issue #13](https://github.com/HernanFAR/teaching/issues/13).

### Persistencia, efectos y fallos parciales

La propia lección dejó una tensión abierta:

> guardamos la orden y luego puede fallar el webhook.

Esa tensión abre persistencia real, consistencia, Repository, Unit of Work, outbox, reintentos, mensajería y transacciones distribuidas —pero solamente cuando el problema concreto los justifique.

Seguimiento: [issue #14](https://github.com/HernanFAR/teaching/issues/14).

### Composition root, DI y regla de dependencias

¿Cómo escala el punto de composición cuando aparecen configuración, lifetimes, más adapters y distintos deployments?

También necesitamos convertir la dependency rule en una herramienta práctica para revisar código existente.

Seguimiento: [issue #15](https://github.com/HernanFAR/teaching/issues/15).

### Probar las fronteras

Una frontera útil cambia qué evidencia podemos obtener del sistema.

La guía debe mostrar qué probar en Domain, Application y adapters, y cuándo el aislamiento deja de ser evidencia suficiente.

Seguimiento: [issue #16](https://github.com/HernanFAR/teaching/issues/16).

### Relacionar patrones vecinos sin mezclarlos

CQRS, MediatR y otros patrones suelen aparecer junto a Clean Architecture aunque respondan preguntas diferentes.

La guía deberá separar esas causas antes de decidir si incorporarlos.

Seguimiento: [issue #17](https://github.com/HernanFAR/teaching/issues/17).

### Saber cuándo detenerse

Una aplicación no gana puntos por recorrer más capas.

Necesitamos heurísticas prácticas para decidir cuándo una separación paga su costo, cuándo mantener una dependencia concreta y cómo reconocer sobrearquitectura.

Seguimiento: [issue #18](https://github.com/HernanFAR/teaching/issues/18).

## Regla de construcción

Esta guía no será una colección de respuestas aisladas.

Cada tema debe volver a un caso de uso real y conservar la misma regla que produjo la lección:

> **No introducimos una estructura, patrón o dependencia hasta poder señalar la presión que la necesita.**

Cuando un tema resulte suficientemente autocontenido para merecer una lección propia, la guía enlazará esa lección en vez de duplicarla.

Cuando un concepto solo necesite una aclaración local, permanecerá dentro de la guía.

El inventario puede cambiar a medida que el uso real revele que dos preguntas son la misma, que una necesita dividirse o que falta una presión que todavía no vimos.
