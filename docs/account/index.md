---
hide_support: true
---

# Mi aprendizaje

Las cuentas de TDidacta son **opcionales**. Puedes seguir leyendo las lecciones y usando sus exploraciones sin iniciar sesión.

La cuenta existe para darte continuidad entre visitas y para permitir que TDidacta observe señales de uso reales sin convertirlas en evidencia de aprendizaje.

<div class="td-account" data-tdidacta-account>
  <p class="td-account__status" data-account-status aria-live="polite">Preparando tu cuenta…</p>

  <section data-account-panel="unavailable" hidden>
    <h2>Cuentas todavía no activadas</h2>
    <p>
      Este despliegue todavía no tiene configurado el backend de cuentas.
      Las lecciones, guías y exploraciones siguen funcionando normalmente.
    </p>
  </section>

  <section data-account-panel="signed-out" hidden>
    <h2>Guardar mi recorrido</h2>
    <p>
      Inicia sesión por correo para conservar actividad mínima como las lecciones que abriste
      y las exploraciones que preparaste. No guardamos aquí el contenido de tus conversaciones con un LLM.
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
    </form>

    <p class="td-account__muted">
      Al iniciar sesión se crea una cuenta si todavía no existe.
      Lee <a href="../privacy/">qué datos guardamos y cuáles no</a>.
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
      <span>Mientras la solicitud esté pendiente, TDidacta no guardará actividad nueva en esta cuenta.</span>
    </div>

    <div class="td-account-stats" aria-label="Resumen de actividad">
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

    <h2>Actividad reciente</h2>
    <div data-account-activity>
      <p class="td-account__muted">Cargando actividad…</p>
    </div>

    <h2>Privacidad y control</h2>
    <p>
      Esta cuenta guarda señales operacionales mínimas. No tratamos uso como sinónimo de aprendizaje
      y no incorporamos tus conversaciones a Research sin un consentimiento separado.
    </p>

    <div class="td-account-actions">
      <button class="md-button" type="button" data-account-clear-activity>Borrar mi actividad</button>
      <button class="md-button" type="button" data-account-request-deletion>Solicitar eliminación de cuenta</button>
      <button class="md-button" type="button" data-account-cancel-deletion hidden>Cancelar solicitud de eliminación</button>
    </div>

    <p class="td-account__muted">
      Una solicitud de eliminación completa queda pendiente para procesamiento administrativo.
      Puedes cancelarla mientras siga pendiente.
    </p>
  </section>
</div>
