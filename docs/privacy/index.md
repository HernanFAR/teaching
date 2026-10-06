# Privacidad y cuentas

**Responsable:** Hernán Fernando Álvarez Rubio  
**Contacto para privacidad y ejercicio de derechos:** [h.f.alvarez.rubio@gmail.com](mailto:h.f.alvarez.rubio@gmail.com?subject=Derechos%20de%20datos%20%E2%80%94%20TDidacta)  
**Versión:** 0.1  
**Fecha:** 6 de octubre de 2026

TDidacta aplica desde ya un criterio de minimización compatible con la reforma introducida por la Ley 21.719, cuya entrada en vigencia general está prevista para el 1 de diciembre de 2026.

## Principio

La plataforma separa explícitamente identidad, recorrido local, estadísticas de producto y evidencia de Research.

```text
cuenta
!=
historial de aprendizaje

uso
!=
aprendizaje

estadística anónima
!=
perfil de una persona

cuenta
!=
participación en Research
```

## La cuenta es opcional

Las lecciones, guías y exploraciones públicas no requieren una cuenta.

Crear una cuenta tampoco habilita por defecto estadísticas de uso. Las estadísticas anónimas tienen su propio control y permanecen desactivadas hasta que la persona decide activarlas.

Las personas menores de 14 años pueden usar el material público, pero esta primera versión no les ofrece creación de cuenta.

## Tratamientos de datos personales

### 1. Cuenta e inicio de sesión

**Datos:** correo electrónico, identificador técnico de autenticación, fecha de creación de la cuenta y metadatos mínimos que acreditan la versión y fecha del consentimiento de cuenta.

**Finalidad:** crear una identidad TDidacta y permitir que la persona vuelva a iniciar sesión.

**Base de legitimidad adoptada:** consentimiento del titular. La cuenta es opcional y el consentimiento se solicita de forma separada antes de enviar el enlace de acceso.

**Retención:** mientras la cuenta permanezca activa. El titular puede retirar el consentimiento solicitando la eliminación de su cuenta.

La cuenta **no** contiene un historial de lecciones, exploraciones, prompts, conversaciones ni inferencias sobre aprendizaje.

### 2. Solicitudes de derechos y eliminación

**Datos:** los estrictamente necesarios para identificar la cuenta y responder la solicitud.

**Finalidad:** tramitar acceso, rectificación, supresión, oposición, portabilidad y otras solicitudes de privacidad.

**Base de legitimidad:** cumplimiento de obligaciones legales del responsable y atención de la solicitud del titular.

Las solicitudes se responden por escrito al correo indicado por la persona. TDidacta procurará resolverlas antes y, en todo caso, operar dentro de los plazos legales aplicables.

## Recorrido local

El resumen mostrado en **Mi aprendizaje** se guarda en `localStorage` del navegador:

- identificadores de lecciones necesarias para contar cuántas lecciones distintas se han usado;
- fechas calendario necesarias para contar días de actividad;
- conteos locales de aperturas y exploraciones;
- y marcas locales que evitan volver a contabilizar ciertos hitos anónimos.

Ese resumen **no se envía a la cuenta ni se almacena en la base de datos de TDidacta**.

La persona puede borrarlo directamente desde **Mi aprendizaje** o mediante las herramientas de su navegador.

## Estadísticas anónimas: opcionales y agregadas inmediatamente

Las estadísticas permanecen desactivadas por defecto.

Si una persona decide activarlas, el navegador puede informar únicamente uno de estos eventos mínimos:

- activación voluntaria de estadísticas;
- apertura de una lección;
- exploración preparada;
- exploración copiada;
- hito local de retorno en otro día;
- hito local de uso de dos o más lecciones;
- hito local de actividad en tres o más días.

El servidor **no recibe como parte del registro estadístico**:

- correo;
- id de cuenta;
- id persistente de usuario o dispositivo;
- identificador de sesión;
- lección concreta;
- modo concreto de exploración;
- texto escrito por la persona;
- prompt generado;
- conversación con un LLM;
- respuesta pedagógica;
- nota, diagnóstico o inferencia de aprendizaje;
- ni timestamp individual del evento.

Cada evento se transforma al persistirse en un contador de la forma:

```text
fecha calendario
+ tipo de evento
+ cantidad total
```

No existe una fila por persona ni un historial individual que pueda recuperarse posteriormente.

Una vez agregado, el conteo no puede suprimirse respecto de una persona concreta porque TDidacta ya no conserva un nexo que permita saber qué parte del total correspondió a ella.

La preferencia de participar o no en estas estadísticas se guarda sólo en el navegador y puede cambiarse en cualquier momento.

### Metadatos técnicos de red

Aunque la base estadística no almacena identificadores personales, los proveedores necesarios para entregar una solicitud por Internet pueden procesar metadatos técnicos de conexión —por ejemplo, una dirección IP— para operar, proteger y diagnosticar su infraestructura.

TDidacta no incorpora esos metadatos a su tabla estadística ni los utiliza para construir perfiles o reconstruir usuarios. Antes de activar el backend se debe revisar la configuración y retención de logs del proveedor.

## Encargado de tratamiento previsto

La implementación está preparada para utilizar **Supabase Pte. Ltd.** como proveedor de autenticación y base de datos.

De acuerdo con su Data Processing Addendum, Supabase actúa como encargado/procesador respecto de los datos que TDidacta le encarga tratar, mientras TDidacta conserva la calidad de responsable.

Mientras el backend no esté configurado y activado, TDidacta no envía datos de cuenta a Supabase desde esta funcionalidad.

## Transferencias internacionales

Cuando Supabase sea activado, la intención operativa es crear el proyecto en la región específica **South America (São Paulo / AWS sa-east-1)** para mantener la base primaria en Sudamérica.

Sin embargo, la ubicación de la base primaria no garantiza que toda operación técnica permanezca en ese país: Supabase y sus subencargados pueden participar desde otras jurisdicciones según su DPA y lista de subprocesadores.

Antes de activar cuentas se debe:

1. revisar y conservar el DPA vigente de Supabase;
2. revisar su lista vigente de subencargados;
3. identificar las jurisdicciones que intervienen;
4. documentar el mecanismo que permita la transferencia internacional conforme a la legislación chilena;
5. y actualizar esta sección si la configuración real difiere de lo descrito.

## Derechos del titular

Puedes ejercer gratuitamente los derechos que correspondan respecto de tus datos personales.

### Acceso

Desde **Mi aprendizaje** una persona autenticada puede ver los datos principales asociados a su cuenta y descargar una copia estructurada en JSON.

También puede solicitar información adicional escribiendo a [h.f.alvarez.rubio@gmail.com](mailto:h.f.alvarez.rubio@gmail.com?subject=Derecho%20de%20acceso%20%E2%80%94%20TDidacta).

### Rectificación

La persona autenticada puede iniciar el cambio de su correo desde **Mi aprendizaje**.

También puede solicitar rectificación por correo cuando el cambio no pueda realizarse directamente.

### Supresión

Desde **Mi aprendizaje** puede solicitar la eliminación completa de su cuenta.

El resumen local puede borrarse inmediatamente desde la misma página.

### Oposición

Las estadísticas anónimas pueden mantenerse desactivadas o desactivarse en cualquier momento.

Como los conteos ya agregados no contienen un vínculo con una persona, no existe técnicamente un registro individual previo sobre el cual ejercer oposición o supresión retrospectiva.

### Portabilidad

Desde **Mi aprendizaje** puede descargarse un archivo JSON con:

- los datos principales de la cuenta;
- los metadatos de consentimiento disponibles;
- el resumen local presente en ese navegador;
- y la preferencia local de estadísticas anónimas.

Si se requiere información adicional, puede solicitarse por correo.

## Mecanismo formal para ejercer derechos

Escribe a:

**h.f.alvarez.rubio@gmail.com**

Asunto recomendado:

`Derechos de datos — TDidacta`

Indica:

1. el derecho que quieres ejercer;
2. el correo asociado a la cuenta, si existe;
3. y la información mínima necesaria para entender la solicitud.

No envíes contraseñas, códigos de acceso ni documentos de identidad salvo que posteriormente resulte estrictamente necesario verificar una solicitud concreta.

TDidacta acusará recibo y responderá por escrito. La Ley 21.719 contempla, para el régimen que entra en vigor el 1 de diciembre de 2026, un plazo general de hasta 30 días corridos para pronunciarse sobre estas solicitudes, prorrogable una vez en los casos previstos por la ley.

Si el responsable rechaza una solicitud o no responde dentro del plazo aplicable, el titular podrá recurrir ante la Agencia de Protección de Datos Personales conforme a la normativa vigente.

## Medidas de seguridad

La primera versión adopta las siguientes medidas de diseño:

- minimización: no existe una tabla de comportamiento individual;
- cuenta y estadísticas están separadas;
- las estadísticas se envían mediante un cliente sin sesión de autenticación;
- la base estadística guarda sólo contadores diarios agregados;
- la tabla agregada no es consultable por clientes públicos;
- sólo una función restringida puede incrementar contadores válidos;
- las solicitudes de eliminación están protegidas mediante Row Level Security;
- una cuenta sólo puede leer, crear o cancelar su propia solicitud de eliminación;
- nunca se publica una clave `service_role` o credencial administrativa en el navegador;
- el acceso usa enlaces u OTP de un solo uso en vez de una contraseña almacenada por TDidacta;
- Supabase declara cifrado en tránsito y en reposo para sus servicios;
- el contenido escrito por estudiantes y las conversaciones con LLM no forman parte de la telemetría;
- y Research permanece metodológicamente separado del uso ordinario del producto.

Antes de activar el backend deben revisarse además región, DPA, subencargados, logs operacionales y configuración de autenticación.

Ante una vulneración de seguridad, el responsable debe evaluar su alcance, contenerla, conservar la trazabilidad necesaria y efectuar las comunicaciones a la autoridad y a las personas afectadas cuando corresponda conforme a la ley.

## Cambios futuros

Una nueva métrica, perfil, dato pedagógico o integración no queda autorizada por esta política sólo por ser técnicamente posible.

Antes de agregarla debe justificarse:

```text
dato
→ finalidad concreta
→ necesidad
→ base de legitimidad
→ destinatarios
→ retención
→ seguridad
→ derechos afectados
```

Si el cambio altera materialmente el tratamiento, esta política debe versionarse y actualizarse antes de activarlo.
