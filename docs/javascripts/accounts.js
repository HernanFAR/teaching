(() => {
  const SUPABASE_ESM = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.117.2/+esm";
  const allowedEvents = new Set([
    "lesson_opened",
    "exploration_prepared",
    "exploration_copied"
  ]);

  const state = {
    client: null,
    user: null,
    deletionPending: false,
    ready: false
  };

  const accountRoot = document.querySelector("[data-tdidacta-account]");
  const config = window.TDIDACTA_AUTH_CONFIG || {};

  const currentLessonId = () => {
    const marker = "/lessons/";
    const path = window.location.pathname;
    const index = path.indexOf(marker);
    if (index < 0) return null;

    const value = path.slice(index + marker.length).replace(/^\/+|\/+$/g, "");
    return value || null;
  };

  const setHidden = (selector, hidden) => {
    const element = accountRoot?.querySelector(selector);
    if (element) element.hidden = hidden;
  };

  const setStatus = (message) => {
    const element = accountRoot?.querySelector("[data-account-status]");
    if (element) element.textContent = message;
  };

  const showState = (name) => {
    if (!accountRoot) return;

    for (const panel of accountRoot.querySelectorAll("[data-account-panel]")) {
      panel.hidden = panel.dataset.accountPanel !== name;
    }
  };

  const formatWhen = (value) => {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.valueOf())) return "";
    return new Intl.DateTimeFormat("es-CL", {
      dateStyle: "medium",
      timeStyle: "short"
    }).format(date);
  };

  const eventLabel = (event) => {
    switch (event) {
      case "lesson_opened":
        return "Abriste una lección";
      case "exploration_prepared":
        return "Preparaste una exploración";
      case "exploration_copied":
        return "Copiaste una exploración";
      default:
        return event;
    }
  };

  const track = async (event, details = {}) => {
    if (!state.ready || !state.client || !state.user || state.deletionPending) return;
    if (!allowedEvents.has(event)) return;

    const lessonId = typeof details.lessonId === "string"
      ? details.lessonId.slice(0, 200)
      : null;
    const explorationMode = typeof details.explorationMode === "string"
      ? details.explorationMode.slice(0, 120)
      : null;

    try {
      await state.client.from("learning_activity").insert({
        user_id: state.user.id,
        event,
        lesson_id: lessonId,
        exploration_mode: explorationMode
      });
    } catch {
      // La telemetría no debe bloquear la experiencia educativa.
    }
  };

  window.TDidactaAccounts = {
    track,
    currentLessonId
  };

  const trackLessonOncePerSession = async () => {
    const lessonId = currentLessonId();
    if (!lessonId || !state.user || state.deletionPending) return;

    const key = `tdidacta:lesson-opened:${state.user.id}:${lessonId}`;
    if (window.sessionStorage.getItem(key) === "1") return;

    window.sessionStorage.setItem(key, "1");
    await track("lesson_opened", { lessonId });
  };

  const readDeletionRequest = async () => {
    if (!state.client || !state.user) return false;

    const { data, error } = await state.client
      .from("account_deletion_requests")
      .select("requested_at")
      .eq("user_id", state.user.id)
      .maybeSingle();

    if (error) return false;
    return Boolean(data);
  };

  const refreshDashboard = async () => {
    if (!accountRoot || !state.client || !state.user) return;

    const email = accountRoot.querySelector("[data-account-email]");
    if (email) email.textContent = state.user.email || "Cuenta activa";

    const deletionNotice = accountRoot.querySelector("[data-account-deletion-pending]");
    if (deletionNotice) deletionNotice.hidden = !state.deletionPending;

    const requestDeletion = accountRoot.querySelector("[data-account-request-deletion]");
    const cancelDeletion = accountRoot.querySelector("[data-account-cancel-deletion]");
    if (requestDeletion) requestDeletion.hidden = state.deletionPending;
    if (cancelDeletion) cancelDeletion.hidden = !state.deletionPending;

    const { data, error } = await state.client
      .from("learning_activity")
      .select("event, lesson_id, exploration_mode, occurred_at")
      .eq("user_id", state.user.id)
      .order("occurred_at", { ascending: false })
      .limit(500);

    if (error) {
      setStatus("Tu cuenta está activa, pero no pudimos cargar la actividad guardada.");
      return;
    }

    const rows = data || [];
    const lessons = new Set(rows.map((row) => row.lesson_id).filter(Boolean));
    const days = new Set(rows.map((row) => row.occurred_at?.slice(0, 10)).filter(Boolean));
    const explorations = rows.filter((row) => row.event === "exploration_prepared").length;

    const lessonsStat = accountRoot.querySelector("[data-stat-lessons]");
    const explorationsStat = accountRoot.querySelector("[data-stat-explorations]");
    const daysStat = accountRoot.querySelector("[data-stat-days]");

    if (lessonsStat) lessonsStat.textContent = String(lessons.size);
    if (explorationsStat) explorationsStat.textContent = String(explorations);
    if (daysStat) daysStat.textContent = String(days.size);

    const recent = accountRoot.querySelector("[data-account-activity]");
    if (recent) {
      recent.replaceChildren();

      if (rows.length === 0) {
        const empty = document.createElement("p");
        empty.className = "td-account__muted";
        empty.textContent = "Todavía no hay actividad guardada.";
        recent.appendChild(empty);
      } else {
        const list = document.createElement("ul");
        list.className = "td-account-activity";

        for (const row of rows.slice(0, 12)) {
          const item = document.createElement("li");
          const title = document.createElement("strong");
          const meta = document.createElement("span");

          title.textContent = eventLabel(row.event);
          const parts = [];
          if (row.lesson_id) parts.push(row.lesson_id);
          if (row.exploration_mode && row.event !== "lesson_opened") {
            parts.push(row.exploration_mode);
          }
          parts.push(formatWhen(row.occurred_at));
          meta.textContent = parts.filter(Boolean).join(" · ");

          item.append(title, meta);
          list.appendChild(item);
        }

        recent.appendChild(list);
      }
    }

    setStatus(
      state.deletionPending
        ? "La solicitud de eliminación está pendiente. Dejamos de registrar nueva actividad."
        : "Tu actividad mínima de TDidacta está guardada en esta cuenta."
    );
  };

  const applyUser = async (user) => {
    state.user = user || null;

    if (!state.user) {
      state.deletionPending = false;
      showState("signed-out");
      setStatus("Las lecciones siguen siendo públicas. La cuenta sólo agrega continuidad.");
      return;
    }

    state.deletionPending = await readDeletionRequest();
    showState("signed-in");

    await trackLessonOncePerSession();
    await refreshDashboard();
  };

  const setupAccountUi = () => {
    if (!accountRoot || !state.client) return;

    const form = accountRoot.querySelector("[data-account-login-form]");
    form?.addEventListener("submit", async (event) => {
      event.preventDefault();

      const input = form.querySelector("input[type='email']");
      const email = input?.value.trim() || "";
      if (!email) return;

      const button = form.querySelector("button[type='submit']");
      if (button) button.disabled = true;
      setStatus("Enviando enlace de acceso…");

      const redirect = new URL(window.location.href);
      redirect.hash = "";
      redirect.search = "";

      const { error } = await state.client.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: redirect.toString(),
          shouldCreateUser: true
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
      await state.client.auth.signOut();
    });

    accountRoot.querySelector("[data-account-clear-activity]")?.addEventListener("click", async () => {
      if (!state.user) return;
      const confirmed = window.confirm("¿Borrar tu actividad guardada? Tu cuenta seguirá existiendo.");
      if (!confirmed) return;

      const { error } = await state.client
        .from("learning_activity")
        .delete()
        .eq("user_id", state.user.id);

      if (error) {
        setStatus("No pudimos borrar la actividad.");
        return;
      }

      await refreshDashboard();
      setStatus("Tu actividad guardada fue eliminada.");
    });

    accountRoot.querySelector("[data-account-request-deletion]")?.addEventListener("click", async () => {
      if (!state.user) return;
      const confirmed = window.confirm(
        "¿Solicitar la eliminación completa de tu cuenta? Mientras esté pendiente no guardaremos nueva actividad."
      );
      if (!confirmed) return;

      const { error } = await state.client
        .from("account_deletion_requests")
        .insert({ user_id: state.user.id });

      if (error) {
        setStatus("No pudimos registrar la solicitud de eliminación.");
        return;
      }

      state.deletionPending = true;
      await refreshDashboard();
    });

    accountRoot.querySelector("[data-account-cancel-deletion]")?.addEventListener("click", async () => {
      if (!state.user) return;

      const { error } = await state.client
        .from("account_deletion_requests")
        .delete()
        .eq("user_id", state.user.id);

      if (error) {
        setStatus("No pudimos cancelar la solicitud.");
        return;
      }

      state.deletionPending = false;
      await refreshDashboard();
      setStatus("Solicitud cancelada. La cuenta vuelve a guardar actividad mínima.");
    });
  };

  const setup = async () => {
    if (!config.supabaseUrl || !config.supabasePublishableKey) {
      state.ready = true;
      showState("unavailable");
      setStatus("Las cuentas todavía no están activadas en este despliegue.");
      return;
    }

    try {
      const { createClient } = await import(SUPABASE_ESM);
      state.client = createClient(
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

      setupAccountUi();

      const { data } = await state.client.auth.getSession();
      state.ready = true;
      await applyUser(data.session?.user || null);

      state.client.auth.onAuthStateChange((_event, session) => {
        window.setTimeout(() => {
          applyUser(session?.user || null);
        }, 0);
      });
    } catch {
      state.ready = true;
      showState("unavailable");
      setStatus("No pudimos iniciar el servicio de cuentas. Las lecciones siguen disponibles.");
    }
  };

  setup();
})();
