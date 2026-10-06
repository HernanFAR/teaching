---
hide_support: true
---

# Mi aprendizaje

TDidacta puede usarse **sin cuenta**. Las lecciones, guías y exploraciones siguen siendo públicas.

Esta primera versión separa tres cosas:

1. **tu recorrido local**, que queda sólo en este navegador;
2. **tu cuenta**, que usa únicamente la identidad necesaria para iniciar sesión;
3. **estadísticas anónimas**, que son opcionales y se agregan inmediatamente sin guardar un historial asociado a tu cuenta.

<div class="td-account" data-tdidacta-account>
  <p class="td-account__status" data-account-status aria-live="polite">Preparando tu cuenta…</p>

  <section class="td-account-local" aria-labelledby="td-local-title">
    <h2 id="td-local-title">Tu recorrido en este navegador</h2>
    <p>
      Este resumen se calcula y guarda localmente en tu dispositivo. No se sincroniza con tu correo ni con tu cuenta.
    </p>

    <div class="td-account-stats" aria-label="Resumen local de aprendizaje">
      <div>
        <strong data-stat-lessons>0</strong>
        <span>lecciones distintas</span>
      </div>
      <div>
        <strong data-stat-explorations>0</strong>
        <span>exploraciones preparadas</span>
      </div>
      <div>
        <strong data-stat-days>0</strong>
        <span>días con actividad</span>
      </div>
    </div>

    <button class="md-button" type="button" data-clear-local-learning>Borrar este resumen local</button>
  </section>

  <section class="td-account-analytics" aria-labelledby="td-analytics-title">
    <h2 id="td-analytics-title">Estadísticas anónimas de uso</h2>
    <p>
      Son completamente opcionales. Si las activas, TDidacta envía únicamente eventos mínimos que el servidor
      convierte inmediatamente en contadores agregados por día. El registro estadístico no contiene correo,
      id de cuenta, id de dispositivo, texto escrito por ti ni un historial individual.
    </p>

    <label class="td-account-choice">
      <input type="checkbox" data-anonymous-stats>
      <span>
        <strong>Quiero aportar estadísticas anónimas mínimas de uso.</strong>
        <small>Puedes desactivarlas en cualquier momento. Los conteos ya anonimizados no pueden volver a asociarse a ti.</small>
      </span>
    </label>

    <p class="td-account__muted" data-anonymous-stats-status aria-live="polite"></p>
  </section>

  <section data-account-panel="unavailable" hidden>
    <h2>Cuentas todavía no activadas</h2>
    <p>
      El backend de cuentas aún no está configurado en este despliegue. El material público y el resumen local
      siguen funcionando normalmente.
    </p>
  </section>

  <section data-account-panel="signed-out" hidden>
    <h2>Cuenta TDidacta</h2>
    <p>
      La cuenta es opcional. TDidacta usa tu correo únicamente para crearte una identidad y permitirte volver a iniciar sesión.
      El historial de lecciones no se guarda en la cuenta.
    </p>

    <form class="td-account-form" data-account-login-form>
      <label for="td-account-email">Correo</label>
      <div class="td-account-form__row">
        <input
          id="td-account-email"
          name="email"
          type="email"
          autocomplete="email"
          required
          placeholder="tu@correo.cl"
        >
        <button class="md-button md-button--primary" type="submit">Enviar enlace</button>
      </div>

      <label class="td-account-choice">
        <input type="checkbox" data-account-age required>
        <span>
          <strong>Confirmo que tengo 14 años o más.</strong>
          <small>Las personas menores de 14 años pueden usar el contenido público sin crear una cuenta.</small>
        </span>
      </label>

      <label class="td-account-choice">
        <input type="checkbox" data-account-consent required>
        <span>
          <strong>Autorizo el tratamiento de mi correo para crear y mantener mi cuenta.</strong>
          <small>Política de privacidad v0.1. Este consentimiento no incluye estadísticas de uso ni participación en Research.</small>
        </span>
      </label>
    </form>

    <p class="td-account__muted">
      Revisa la <a href="../privacy/">política de privacidad</a> antes de continuar.
    </p>
  </section>

  <section data-account-panel="email-sent" hidden>
    <h2>Revisa tu correo</h2>
    <p>Te enviamos un enlace de acceso. Al abrirlo volverás a esta página.</p>
  </section>

  <section data-account-panel="signed-in" hidden>
    <div class="td-account__header">
      <div>
        <span class="td-account__eyebrow">Cuenta activa</span>
        <strong data-account-email></strong>
      </div>
      <button class="md-button" type="button" data-account-signout>Cerrar sesión</button>
    </div>

    <div class="td-account-alert" data-account-deletion-pending hidden>
      <strong>Eliminación solicitada.</strong>
      <span>La solicitud queda registrada para su procesamiento. Puedes cancelarla mientras siga pendiente.</span>
    </div>

    <h2>Datos asociados a la cuenta</h2>

    <dl class="td-account-data">
      <div>
        <dt>Correo</dt>
        <dd data-account-email></dd>
      </div>
      <div>
        <dt>Cuenta creada</dt>
        <dd data-account-created>No disponible</dd>
      </div>
      <div>
        <dt>Versión de consentimiento registrada</dt>
        <dd data-account-consent-version>No disponible</dd>
      </div>
    </dl>

    <p>
      No existe una tabla de actividad personal asociada a esta identidad. El resumen de aprendizaje mostrado arriba
      permanece sólo en este navegador.
    </p>

    <h2>Rectificar mi correo</h2>

    <form class="td-account-form" data-account-email-form>
      <label for="td-account-new-email">Nuevo correo</label>
      <div class="td-account-form__row">
        <input
          id="td-account-new-email"
          name="new-email"
          type="email"
          autocomplete="email"
          required
          placeholder="nuevo@correo.cl"
        >
        <button class="md-button" type="submit">Solicitar cambio</button>
      </div>
    </form>

    <h2>Mis derechos</h2>

    <div class="td-account-actions">
      <button class="md-button" type="button" data-account-export>Descargar mis datos</button>
      <button class="md-button" type="button" data-account-request-deletion>Solicitar eliminación de cuenta</button>
      <button class="md-button" type="button" data-account-cancel-deletion hidden>Cancelar solicitud de eliminación</button>
      <a class="md-button" data-rights-email href="mailto:h.f.alvarez.rubio@gmail.com">Ejercer un derecho por correo</a>
    </div>

    <p class="td-account__muted">
      Puedes ejercer acceso, rectificación, supresión, oposición o portabilidad. La política explica qué puede
      resolverse directamente desde esta página y qué debe solicitarse por correo.
    </p>
  </section>
</div>
