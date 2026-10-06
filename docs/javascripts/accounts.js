(() => {
  const SUPABASE_ESM = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.117.2/+esm";
  const POLICY_VERSION = "0.1";
  const LEGAL_CONTACT = "h.f.alvarez.rubio@gmail.com";
  const LOCAL_SUMMARY_KEY = "tdidacta:local-learning-summary:v1";
  const ANALYTICS_PREF_KEY = "tdidacta:anonymous-stats:v1";
  const PENDING_ACCOUNT_CONSENT_KEY = "tdidacta:pending-account-consent:v1";

  const allowedEvents = new Set([
    "analytics_opt_in",
    "lesson_opened",
    "exploration_prepared",
    "exploration_copied",
    "return_visit",
    "multi_lesson_milestone",
    "three_day_milestone"
  ]);

  const state = {
    authClient: null,
    analyticsClient: null,
    user: null,
    deletionPending: false,
    authReady: false,
    analyticsReady: false
  };

  const accountRoot = document.querySelector("[data-tdidacta-account]");
  const config = window.TDIDACTA_AUTH_CONFIG || {};

  const today = () => new Date().toISOString().slice(0, 10);

  const parseStoredJson = (key, fallback) => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  };

  const readLocalSummary = () => {
    const value = parseStoredJson(LOCAL_SUMMARY_KEY, {});
    return {
      lessonIds: Array.isArray(value.lessonIds) ? value.lessonIds.slice(0, 250) : [],
      activeDates: Array.isArray(value.activeDates) ? value.activeDates.slice(0, 250) : [],
      lessonOpens: Number.isFinite(value.lessonOpens) ? value.lessonOpens : 0,
      explorationsPrepared: Number.isFinite(value.explorationsPrepared) ? value.explorationsPrepared : 0,
      explorationsCopied: Number.isFinite(value.explorationsCopied) ? value.explorationsCopied : 0,
      sentMilestones: value.sentMilestones && typeof value.sentMilestones === "object"
        ? value.sentMilestones
        : {}
    };
  };

  const writeLocalSummary = (summary) => {
    try {
      window.localStorage.setItem(LOCAL_SUMMARY_KEY, JSON.stringify(summary));
    } catch {
      // El progreso local es una comodidad; nunca debe bloquear la lección.
    }
  };

  const analyticsEnabled = () => {
    try {
      return window.localStorage.getItem(ANALYTICS_PREF_KEY) === "yes";
    } catch {
      return false;
    }
  };

  const setAnalyticsEnabled = (enabled) => {
    try {
      window.localStorage.setItem(ANALYTICS_PREF_KEY, enabled ? "yes" : "no");
    } catch {
      // Si no se puede guardar la preferencia, se mantiene el valor más protector.
    }
  };

  const currentLessonId = () => {
    const marker = "/lessons/";
    const path = window.location.pathname;
    const index = path.indexOf(marker);
    if (index < 0) return null;

    const value = path.slice(index + marker.length).replace(/^\/+|\/+$/g, "");
    return value || null;
  };

  const setStatus = (message) => {
    const element = accountRoot?.querySelector("[data-account-status]");
    if (element) element.textContent = message;
  };

  const setAnalyticsStatus = (message) => {
    const element = accountRoot?.querySelector("[data-anonymous-stats-status]");
    if (element) element.textContent = message;
  };

  const showState = (name) => {
    if (!accountRoot) return;

    for (const panel of accountRoot.querySelectorAll("[data-account-panel]")) {
      panel.hidden = panel.dataset.accountPanel !== name;
    }
  };

  const refreshLocalDashboard = () => {
    if (!accountRoot) return;

    const summary = readLocalSummary();
    const lessons = accountRoot.querySelector("[data-stat-lessons]");
    const explorations = accountRoot.querySelector("[data-stat-explorations]");
    const days = accountRoot.querySelector("[data-stat-days]");

    if (lessons) lessons.textContent = String(new Set(summary.lessonIds).size);
    if (explorations) explorations.textContent = String(summary.explorationsPrepared);
    if (days) days.textContent = String(new Set(summary.activeDates).size);

    const toggle = accountRoot.querySelector("[data-anonymous-stats]");
    if (toggle) toggle.checked = analyticsEnabled();

    const backendAvailable = Boolean(config.supabaseUrl && config.supabasePublishableKey);
    if (toggle) toggle.disabled = !backendAvailable;

    if (!backendAvailable) {
      setAnalyticsStatus("Las estadísticas anónimas todavía no están activadas en este despliegue.");
    } else if (analyticsEnabled()) {
      setAnalyticsStatus(
        "Participación activa. El servidor recibe sólo contadores agregados por día y tipo de evento; no recibe tu correo ni tu id de cuenta."
      );
    } else {
      setAnalyticsStatus("Desactivadas. Tu recorrido permanece sólo en este navegador.");
    }
  };

  const recordAnonymousAggregate = async (event) => {
    if (!analyticsEnabled() || !state.analyticsReady || !state.analyticsClient) return false;
    if (!allowedEvents.has(event)) return false;

    try {
      const { error } = await state.analyticsClient.rpc("record_anonymous_usage", {
        p_event: event
      });
      return !error;
    } catch {
      return false;
    }
  };

  const sendReachedMilestones = async (summary) => {
    if (!analyticsEnabled()) return;

    const milestones = [
      {
        key: "return_visit",
        reached: new Set(summary.activeDates).size >= 2
      },
      {
        key: "multi_lesson_milestone",
        reached: new Set(summary.lessonIds).size >= 2
      },
      {
        key: "three_day_milestone",
        reached: new Set(summary.activeDates).size >= 3
      }
    ];

    for (const milestone of milestones) {
      if (!milestone.reached || summary.sentMilestones[milestone.key]) continue;

      const sent = await recordAnonymousAggregate(milestone.key);
      if (sent) {
        summary.sentMilestones[milestone.key] = true;
        writeLocalSummary(summary);
      }
    }
  };

  const recordLocal = (event, details = {}) => {
    if (!allowedEvents.has(event) || event === "analytics_opt_in") return;

    const summary = readLocalSummary();
    const day = today();

    if (!summary.activeDates.includes(day)) summary.activeDates.push(day);

    const lessonId = typeof details.lessonId === "string"
      ? details.lessonId.slice(0, 200)
      : null;

    if (lessonId && !summary.lessonIds.includes(lessonId)) {
      summary.lessonIds.push(lessonId);
    }

    if (event === "lesson_opened") summary.lessonOpens += 1;
    if (event === "exploration_prepared") summary.explorationsPrepared += 1;
    if (event === "exploration_copied") summary.explorationsCopied += 1;

    writeLocalSummary(summary);
    refreshLocalDashboard();

    if (analyticsEnabled()) {
      recordAnonymousAggregate(event).then(() => sendReachedMilestones(readLocalSummary()));
    }
  };

  const track = (event, details = {}) => {
    recordLocal(event, details);
  };

  window.TDidactaAccounts = {
    track,
    currentLessonId
  };

  const trackLessonOncePerSession = () => {
    const lessonId = currentLessonId();
    if (!lessonId) return;

    const key = `tdidacta:lesson-opened:${lessonId}`;
    try {
      if (window.sessionStorage.getItem(key) === "1") return;
      window.sessionStorage.setItem(key, "1");
    } catch {
      // Si sessionStorage no está disponible, un evento duplicado es preferible a bloquear la lección.
    }

    track("lesson_opened", { lessonId });
  };

  const readDeletionRequest = async () => {
    if (!state.authClient || !state.user) return false;

    const { data, error } = await state.authClient
      .from("account_deletion_requests")
      .select("requested_at")
      .eq("user_id", state.user.id)
      .maybeSingle();

    if (error) return false;
    return Boolean(data);
  };

  const syncPendingConsent = async () => {
    if (!state.authClient || !state.user) return;

    let pending = null;
    try {
      pending = JSON.parse(window.localStorage.getItem(PENDING_ACCOUNT_CONSENT_KEY) || "null");
    } catch {
      pending = null;
    }

    if (!pending?.version || !pending?.at) return;

    const currentVersion = state.user.user_metadata?.tdidacta_account_consent_version;
    if (currentVersion !== pending.version) {
      const { data, error } = await state.authClient.auth.updateUser({
        data: {
          tdidacta_account_consent_version: pending.version,
          tdidacta_account_consent_at: pending.at
        }
      });

      if (!error && data?.user) state.user = data.user;
    }

    try {
      window.localStorage.removeItem(PENDING_ACCOUNT_CONSENT_KEY);
    } catch {
      // No-op.
    }
  };

  const refreshAccountPanel = async () => {
    if (!accountRoot || !state.user) return;

    const email = accountRoot.querySelector("[data-account-email]");
    if (email) email.textContent = state.user.email || "Cuenta activa";

    const created = accountRoot.querySelector("[data-account-created]");
    if (created) {
      const value = state.user.created_at ? new Date(state.user.created_at) : null;
      created.textContent = value && !Number.isNaN(value.valueOf())
        ? new Intl.DateTimeFormat("es-CL", { dateStyle: "medium" }).format(value)
        : "No disponible";
    }

    const consentVersion = accountRoot.querySelector("[data-account-consent-version]");
    if (consentVersion) {
      consentVersion.textContent =
        state.user.user_metadata?.tdidacta_account_consent_version || "No disponible";
    }

    const deletionNotice = accountRoot.querySelector("[data-account-deletion-pending]");
    if (deletionNotice) deletionNotice.hidden = !state.deletionPending;

    const requestDeletion = accountRoot.querySelector("[data-account-request-deletion]");
    const cancelDeletion = accountRoot.querySelector("[data-account-cancel-deletion]");
    if (requestDeletion) requestDeletion.hidden = state.deletionPending;
    if (cancelDeletion) cancelDeletion.hidden = !state.deletionPending;

    setStatus(
      state.deletionPending
        ? "La solicitud de eliminación de la cuenta está pendiente."
        : "Cuenta activa. TDidacta no guarda un historial de aprendizaje asociado a tu identidad."
    );
  };

  const applyUser = async (user) => {
    state.user = user || null;

    if (!state.user) {
      state.deletionPending = false;
      showState("signed-out");
      setStatus("La cuenta es opcional. El material educativo y tu resumen local funcionan sin iniciar sesión.");
      return;
    }

    await syncPendingConsent();
    state.deletionPending = await readDeletionRequest();
    showState("signed-in");
    await refreshAccountPanel();
  };

  const exportMyData = () => {
    if (!state.user) return;

    const payload = {
      generated_at: new Date().toISOString(),
      privacy_policy_version: POLICY_VERSION,
      account: {
        email: state.user.email || null,
        created_at: state.user.created_at || null,
        account_consent_version:
          state.user.user_metadata?.tdidacta_account_consent_version || null,
        account_consent_at:
          state.user.user_metadata?.tdidacta_account_consent_at || null
      },
      this_browser_only: {
        learning_summary: readLocalSummary(),
        anonymous_statistics_enabled: analyticsEnabled()
      },
      note:
        "El resumen de aprendizaje de este navegador no se almacena en la cuenta. Las estadísticas enviadas al servidor se agregan de inmediato y no pueden vincularse a esta exportación."
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "tdidacta-mis-datos.json";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const setupAccountUi = () => {
    if (!accountRoot) return;

    refreshLocalDashboard();

    accountRoot.querySelector("[data-clear-local-learning]")?.addEventListener("click", () => {
      const confirmed = window.confirm(
        "¿Borrar el resumen de aprendizaje guardado sólo en este navegador?"
      );
      if (!confirmed) return;

      try {
        window.localStorage.removeItem(LOCAL_SUMMARY_KEY);
      } catch {
        // No-op.
      }

      refreshLocalDashboard();
      setAnalyticsStatus(
        analyticsEnabled()
          ? "Resumen local eliminado. Las estadísticas ya agregadas no pueden vincularse a ti ni eliminarse individualmente."
          : "Resumen local eliminado."
      );
    });

    const analyticsToggle = accountRoot.querySelector("[data-anonymous-stats]");
    analyticsToggle?.addEventListener("change", async () => {
      const enabled = analyticsToggle.checked && state.analyticsReady;
      setAnalyticsEnabled(enabled);
      refreshLocalDashboard();

      if (!enabled) return;

      const summary = readLocalSummary();
      const sent = await recordAnonymousAggregate("analytics_opt_in");
      if (sent) await sendReachedMilestones(summary);
    });

    const form = accountRoot.querySelector("[data-account-login-form]");
    form?.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!state.authClient) return;

      const emailInput = form.querySelector("input[type='email']");
      const age = form.querySelector("[data-account-age]");
      const consent = form.querySelector("[data-account-consent]");
      const email = emailInput?.value.trim() || "";

      if (!email || !age?.checked || !consent?.checked) {
        setStatus("Para crear o usar una cuenta debes completar el correo y las dos confirmaciones obligatorias.");
        return;
      }

      const consentAt = new Date().toISOString();

      try {
        window.localStorage.setItem(
          PENDING_ACCOUNT_CONSENT_KEY,
          JSON.stringify({ version: POLICY_VERSION, at: consentAt })
        );
      } catch {
        // Supabase también recibe estos metadatos al crear una cuenta nueva.
      }

      const button = form.querySelector("button[type='submit']");
      if (button) button.disabled = true;
      setStatus("Enviando enlace de acceso…");

      const redirect = new URL(window.location.href);
      redirect.hash = "";
      redirect.search = "";

      const { error } = await state.authClient.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: redirect.toString(),
          shouldCreateUser: true,
          data: {
            tdidacta_account_consent_version: POLICY_VERSION,
            tdidacta_account_consent_at: consentAt
          }
        }
      });

      if (button) button.disabled = false;

      if (error) {
        setStatus("No pudimos enviar el enlace. Revisa el correo e inténtalo nuevamente.");
        return;
      }

      showState("email-sent");
      setStatus("Revisa tu correo. El enlace te devolverá a esta página.");
    });

    accountRoot.querySelector("[data-account-signout]")?.addEventListener("click", async () => {
      await state.authClient?.auth.signOut();
    });

    accountRoot.querySelector("[data-account-export]")?.addEventListener("click", exportMyData);

    const emailForm = accountRoot.querySelector("[data-account-email-form]");
    emailForm?.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!state.authClient || !state.user) return;

      const input = emailForm.querySelector("input[type='email']");
      const nextEmail = input?.value.trim() || "";
      if (!nextEmail || nextEmail === state.user.email) {
        setStatus("Escribe un correo distinto al actual.");
        return;
      }

      const button = emailForm.querySelector("button[type='submit']");
      if (button) button.disabled = true;

      const { error } = await state.authClient.auth.updateUser({ email: nextEmail });
      if (button) button.disabled = false;

      setStatus(
        error
          ? "No pudimos iniciar el cambio de correo."
          : "Cambio solicitado. Supabase puede pedir confirmación en el correo actual y en el nuevo."
      );
    });

    accountRoot.querySelector("[data-account-request-deletion]")?.addEventListener("click", async () => {
      if (!state.authClient || !state.user) return;

      const confirmed = window.confirm(
        "¿Solicitar la eliminación completa de tu cuenta? El material público seguirá disponible."
      );
      if (!confirmed) return;

      const { error } = await state.authClient
        .from("account_deletion_requests")
        .upsert({ user_id: state.user.id });

      if (error) {
        setStatus("No pudimos registrar la solicitud. También puedes ejercer este derecho por correo.");
        return;
      }

      state.deletionPending = true;
      await refreshAccountPanel();
    });

    accountRoot.querySelector("[data-account-cancel-deletion]")?.addEventListener("click", async () => {
      if (!state.authClient || !state.user) return;

      const { error } = await state.authClient
        .from("account_deletion_requests")
        .delete()
        .eq("user_id", state.user.id);

      if (error) {
        setStatus("No pudimos cancelar la solicitud.");
        return;
      }

      state.deletionPending = false;
      await refreshAccountPanel();
    });

    const rightsLink = accountRoot.querySelector("[data-rights-email]");
    if (rightsLink) {
      rightsLink.href =
        `mailto:${LEGAL_CONTACT}?subject=${encodeURIComponent("Derechos de datos — TDidacta")}`;
    }
  };

  const setupBackend = async () => {
    trackLessonOncePerSession();
    setupAccountUi();

    if (!config.supabaseUrl || !config.supabasePublishableKey) {
      state.authReady = true;
      state.analyticsReady = false;
      showState("unavailable");
      setStatus("Las cuentas todavía no están activadas en este despliegue.");
      refreshLocalDashboard();
      return;
    }

    try {
      const { createClient } = await import(SUPABASE_ESM);

      state.authClient = createClient(
        config.supabaseUrl,
        config.supabasePublishableKey,
        {
          auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true
          }
        }
      );

      state.analyticsClient = createClient(
        config.supabaseUrl,
        config.supabasePublishableKey,
        {
          auth: {
            persistSession: false,
            autoRefreshToken: false,
            detectSessionInUrl: false
          }
        }
      );

      state.analyticsReady = true;
      state.authReady = true;
      refreshLocalDashboard();

      const { data } = await state.authClient.auth.getSession();
      await applyUser(data.session?.user || null);

      state.authClient.auth.onAuthStateChange((_event, session) => {
        window.setTimeout(() => {
          applyUser(session?.user || null);
        }, 0);
      });
    } catch {
      state.authReady = true;
      state.analyticsReady = false;
      showState("unavailable");
      setStatus("No pudimos iniciar el servicio de cuentas. Las lecciones siguen disponibles.");
      refreshLocalDashboard();
    }
  };

  setupBackend();
})();
