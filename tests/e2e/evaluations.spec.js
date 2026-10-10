const { test, expect } = require("@playwright/test");

const variants = [
  { slug: "pir-stu-001-phase-0b", ids: Array.from({ length: 16 }, (_, i) => `EVAL-${String(i + 1).padStart(3, "0")}`), label: "Muestra", evidenceForNa: false, confidence: true, demoSteps: 9 },
  { slug: "pir-stu-001-phase-0c", ids: ["C02", "C03", "C06", "C13", "C14", "C18", "C23", "C31"], label: "Caso", evidenceForNa: true, confidence: false, demoSteps: 10 }
];

async function selectFirstNonempty(locator) {
  const value = await locator.locator("option").evaluateAll((options) =>
    options.find((option) => option.value.trim() && !option.disabled)?.value);
  if (!value) throw new Error("No selectable value for " + await locator.evaluate((el) => el.outerHTML));
  await locator.selectOption(value);
}

async function fillProfile(page) {
  const profile = page.locator("[data-pir-evaluator-profile]");
  await expect(profile).toBeVisible();
  for (const field of await profile.locator("[data-profile-field][required]").all()) {
    if (await field.evaluate((el) => el.tagName === "SELECT")) await selectFirstNonempty(field);
    else await field.fill("Perfil sintético E2E");
  }
  await profile.locator('[data-profile-field="otherConditions"]').fill("Condiciones sintéticas, sin envío");
}

async function fillRow(row, variant, index) {
  await row.locator('[data-field="property"]').selectOption(index % 2 ? "CAU-002" : "CAU-001");
  await row.locator('[data-field="judgment"]').selectOption("PASS");
  await row.locator('[data-field="evidence"]').fill("Evidencia sintética E2E");
  await row.locator('[data-field="rationale"]').fill("Fundamento sintético E2E");
  if (variant.confidence) await row.locator('[data-field="confidence"]').selectOption("alta");
}

for (const variant of variants) {
  test.describe(variant.slug, () => {
    test.beforeEach(async ({ page }) => {
      // Browser contexts are isolated per test: no persisted real evaluator data.
      await page.goto(`/evaluations/${variant.slug}/`);
      await expect(page.locator("[data-pir-eval-wizard]")).toBeVisible();
    });

    test("guided demonstration traverses all steps and highlights the intended DOM element", async ({ page }) => {
      const demo = page.locator("[data-pir-eval-demo]");
      const start = demo.locator("[data-demo-start]");
      const guide = page.locator("[data-demo-guide]");
      await start.click();
      await expect(guide).toBeVisible();
      await guide.locator("[data-demo-next]").click(); // Begin guided steps
      const sequence = variant.slug.endsWith("0c")
        ? ["context", "realization", "property", "judgment", "evidence", "rationale", "confidence", "note", "add", "remove"]
        : ["context", "property", "judgment", "evidence", "rationale", "confidence", "note", "add", "remove"];
      for (let i = 0; i < sequence.length; i++) {
        await expect(guide.locator("[data-demo-step-label]")).toContainText(`Paso ${i + 1} de ${variant.demoSteps}`);
        const key = sequence[i];
        const target = key === "add" || key === "remove"
          ? demo.locator(`[data-demo-action="${key}"]`)
          : key === "context" && variant.slug.endsWith("0b")
            ? demo.locator(".pir-eval-demo__scenario")
            : demo.locator(`[data-demo-field="${key}"]`);
        await expect(target).toHaveClass(/is-demo-focus/);
        if (i < sequence.length - 1) await guide.locator("[data-demo-next]").click();
      }
      await guide.locator("[data-demo-next]").click();
      await expect(guide.locator("[data-demo-title]")).toContainText("Respuesta completa");
      await guide.locator("[data-demo-next]").click();
      await expect(demo.locator("[data-demo-stage]")).toBeHidden();
      // Resizing / opening DevTools must never reopen the demo.
      await page.setViewportSize({ width: 920, height: 750 });
      await page.setViewportSize({ width: 1440, height: 900 });
      await expect(demo.locator("[data-demo-stage]")).toBeHidden();
    });

    test("profile, all tabs, required inputs, rows and consolidated answer", async ({ page }) => {
      const wizard = page.locator("[data-pir-eval-wizard]");
      const tabs = wizard.locator("[data-eval-tab]");
      await expect(tabs).toHaveCount(variant.ids.length);
      await expect(tabs.nth(1)).toBeDisabled();
      const output = page.locator("[data-eval-output]");
      await expect(output.locator("[data-copy-eval-output]")).toBeDisabled();
      await fillProfile(page);
      for (let i = 0; i < variant.ids.length; i++) {
        const id = variant.ids[i];
        const panel = wizard.locator(`[data-eval-panel="${id}"]`);
        const form = panel.locator("[data-eval-form]");
        await expect(panel).toBeVisible();
        const next = form.locator("[data-next-eval]");
        // Validate empty first row before filling, including preselected properties.
        await next.click();
        await expect(panel).toBeVisible();
        await expect(form.locator(".is-required-missing").first()).toBeVisible();
        const first = form.locator("[data-judgment]").first();
        await fillRow(first, variant, i);
        await expect(form.locator(".is-required-missing")).toHaveCount(0);
        if (i === 0) {
          await form.locator("[data-add-judgment]").click();
          await expect(form.locator("[data-judgment]")).toHaveCount(2);
          await expect(form.locator("[data-remove-last-judgment]")).toBeEnabled();
          await form.locator("[data-remove-last-judgment]").click();
          await expect(form.locator("[data-judgment]")).toHaveCount(1);
          await expect(form.locator("[data-remove-last-judgment]")).toBeDisabled();
          await form.locator("[data-add-judgment]").click();
          await fillRow(form.locator("[data-judgment]").last(), variant, i + 1);
          await expect(form.locator("[data-judgment]")).toHaveCount(2);
        }
        await form.locator("[data-overall-note]").fill("Nota de prueba " + id);
        await expect(tabs.nth(i)).toHaveClass(/is-complete/);
        await next.click();
        if (i + 1 < variant.ids.length) {
          await expect(tabs.nth(i + 1)).toBeEnabled();
          await expect(wizard.locator(`[data-eval-panel="${variant.ids[i + 1]}"]`)).toBeVisible();
        }
      }
      await expect(output.locator("[data-copy-eval-output]")).toBeEnabled();
      const result = await output.locator("[data-eval-output-text]").inputValue();
      for (const id of variant.ids) expect(result).toContain(`${variant.label}: ${id}`);
      expect(result).toContain("Perfil del evaluador");
      expect(result).toContain("Nota de prueba");
      expect(result).toContain("Propiedad: CAU-002");
      await expect(output.locator("[data-output-status]")).toContainText("La respuesta está lista para copiar.");

      // Revisit every tab and check the serialized DOM values remained intact.
      for (let i = variant.ids.length - 1; i >= 0; i--) {
        await tabs.nth(i).click();
        await expect(wizard.locator(`[data-eval-panel="${variant.ids[i]}"]`)).toBeVisible();
        await expect(wizard.locator(`[data-eval-panel="${variant.ids[i]}"] [data-overall-note]`)).toHaveValue("Nota de prueba " + variant.ids[i]);
      }
    });

    test("partial draft persists on refresh and reset clears only after confirmation", async ({ page }) => {
      const form = page.locator("[data-eval-panel]").first().locator("[data-eval-form]");
      await fillProfile(page);
      await form.locator('[data-field="judgment"]').first().selectOption("PASS");
      await form.locator('[data-field="rationale"]').first().fill("Un borrador incompleto");
      await form.locator("[data-add-judgment]").click();
      await form.locator("[data-judgment]").last().locator('[data-field="property"]').selectOption("CAU-002");
      await page.reload();
      await expect(form.locator("[data-judgment]")).toHaveCount(2);
      await expect(form.locator('[data-field="rationale"]').first()).toHaveValue("Un borrador incompleto");
      await expect(form.locator("[data-judgment]").last().locator('[data-field="property"]')).toHaveValue("CAU-002");
      await expect(page.locator('[data-profile-field="role"]')).toHaveValue("Perfil sintético E2E");
      page.once("dialog", (dialog) => dialog.dismiss());
      await page.locator("[data-reset-evaluation]").click();
      await expect(form.locator("[data-judgment]")).toHaveCount(2);
      page.once("dialog", (dialog) => dialog.accept());
      await page.locator("[data-reset-evaluation]").click();
      await expect(form.locator("[data-judgment]")).toHaveCount(1);
      await expect(form.locator('[data-field="rationale"]').first()).toHaveValue("");
      await page.reload();
      await expect(form.locator("[data-judgment]")).toHaveCount(1);
      await expect(page.locator('[data-profile-field="role"]')).toHaveValue("");
    });
  });
}
