# Evaluation surfaces

## Propósito

Este documento conserva un patrón operativo reutilizable para publicar evaluaciones humanas autocontenidas dentro de Teaching.

El patrón surgió al implementar y validar las superficies humanas de PIR-STU-001 Phase 0b y Phase 0c. No define una única interfaz obligatoria; conserva las relaciones que demostraron ser útiles y verificables.

## Patrón base

Usar como trayectoria de referencia:

```text
bundle humano
→ vista Teaching
→ mecanismo de evaluación reutilizable
→ self-check de navegador
→ prueba sobre la página publicada
→ corrección si aparece una diferencia
→ validación funcional
```

La vista publicada no debe considerarse funcionalmente validada sólo porque:

- el Markdown compila;
- el sitio se despliega;
- el JavaScript parece correcto por inspección;
- los controles aparecen visualmente.

La implementación debe ejercitarse como flujo real.

## 1. Bundle humano como autoridad

La vista debe derivarse del paquete humano entregado para esa evaluación.

Preservar:

- terminología;
- número y orden de casos o muestras;
- contrato de conformidad;
- estados de juicio;
- campos obligatorios y opcionales;
- propiedades preseleccionadas o explícitamente indicadas;
- condiciones de entrega;
- restricciones de contaminación o independencia.

No importar silenciosamente reglas desde otra fase sólo porque comparte infraestructura.

## 2. Vista Teaching

La vista pública debería reunir, cuando corresponda:

- introducción y propósito;
- perfil del evaluador;
- contrato o criterios de juicio;
- instrucciones;
- casos o muestras;
- formulario de evaluación;
- respuesta consolidada;
- instrucciones de entrega.

La vista debe ser autocontenida cuando el protocolo así lo requiera.

## 3. Mecanismo reutilizable

Preferir un único mecanismo parametrizable antes que duplicar lógica por evaluación.

Ejemplos de parámetros que pueden variar:

- etiqueta de unidad: `Muestra` / `Caso`;
- cantidad de unidades;
- obligatoriedad de evidencia;
- obligatoriedad de confianza;
- propiedades preseleccionadas;
- texto de progreso;
- género gramatical de estados.

La reutilización no debe borrar diferencias semánticas entre instrumentos.

## 4. Navegación

El comportamiento validado actualmente distingue:

- unidad prístina e incompleta: puede abandonarse hacia atrás;
- unidad editada e incompleta: bloquea la navegación hasta quedar completa;
- unidad completa: permite navegar;
- avance hacia una unidad nueva: requiere completar la actual;
- unidades futuras: se desbloquean progresivamente.

Esta regla evita que una persona quede atrapada en una unidad recién abierta, sin permitir saltarse respuestas parcialmente editadas.

## 5. Respuestas por propiedad

No reducir una evaluación por propiedades a un único juicio global cuando el instrumento no lo permite.

Una unidad puede contener múltiples juicios.

El mecanismo debe soportar:

- agregar otra propiedad;
- quitar propiedades adicionales;
- validar cada fila independientemente;
- serializar múltiples propiedades sin perder separación;
- omitir campos opcionales vacíos en la salida final.

## 6. Salida consolidada

La salida final debe preservar la estructura requerida por el bundle.

Ejemplo genérico:

```text
Caso: C##

Propiedad: <ID>
Juicio: PASS | VIOLATION | AMBIGUOUS | N/A
Evidencia: "<fragmento>"
Fundamento: <texto>
Confianza: <si corresponde>
```

No serializar líneas artificialmente vacías para campos opcionales.

## 7. Self-check de navegador

Cada nueva superficie con flujo interactivo debería tener un script pequeño ejecutable desde DevTools sobre la página publicada.

No necesita Playwright si un script de navegador directo cubre suficientemente el riesgo actual.

El self-check debería comprobar al menos:

1. cantidad y orden de unidades;
2. bloqueo inicial;
3. desbloqueo secuencial;
4. retroceso;
5. re-bloqueo al dejar una unidad editada incompleta;
6. reglas específicas de campos obligatorios/opcionales;
7. múltiples propiedades cuando estén soportadas;
8. propiedades preseleccionadas, si existen;
9. generación de la respuesta consolidada;
10. presencia de todas las unidades en la salida;
11. habilitación del botón de copia.

Debe usar datos sintéticos y advertir que la página debe recargarse al terminar.

## 8. Validación funcional

Considerar una superficie funcionalmente validada cuando exista una trayectoria reconstruible del tipo:

```text
diseño
→ implementación
→ deploy
→ self-check sobre página publicada
→ bug observado, si aparece
→ corrección
→ self-check completo exitoso
```

Un fallo del self-check es evidencia sobre el mecanismo, no un fracaso del test.

El caso Phase 0b demostró esto al revelar una diferencia entre:

```text
formulario incompleto
```

y:

```text
formulario prístino e incompleto
vs.
formulario editado e incompleto
```

La corrección resultante pasó a formar parte del mecanismo compartido y luego fue reutilizada por Phase 0c.

## 9. Criterio de reutilización

Este patrón es apropiado cuando una evaluación:

- tiene un bundle humano explícito;
- requiere juicio estructurado;
- necesita conservar independencia entre evaluadores;
- produce una respuesta que debe copiarse o entregarse;
- se beneficia de un flujo secuencial verificable.

No usar el wizard por costumbre si una evaluación simple puede resolverse mejor con una superficie estática.

La infraestructura debe seguir a la presión del instrumento, no al revés.
