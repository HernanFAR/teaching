# Teaching component rules

## Purpose

Use this file when implementing the visual structure of a Teaching entry.

Components are an **implementation vocabulary**, not pedagogical authority. Choose them only after the pedagogical source and the realization design make the job of the content clear.

Prefer, in this order:

1. plain Markdown when it already communicates the idea;
2. a native MkDocs Material component when its semantics fit;
3. an existing Teaching primitive or recipe;
4. new HTML/CSS only when the existing vocabulary cannot express the required meaning honestly.

Do not create a new component only because a section has a new topic name.

## Native components

### Plain Markdown

Use for narrative, transitions, ordinary lists, headings, tables, code blocks, and content that gains no clarity from additional visual structure.

### Admonitions

Use MkDocs Material admonitions for semantic emphasis such as:

- warnings;
- notes;
- important conclusions;
- information that should stand apart from surrounding prose.

Do not recreate an admonition as a custom colored box.

### Code and Mermaid

Use code when the code itself is the evidence or object of study.

Use Mermaid only when a diagram answers a concrete pedagogical question more clearly than simpler text or an existing Teaching component.

## Teaching primitives

### `teaching-grid`

Owns **layout only**. It does not give semantic meaning to its children.

Available modifiers:

- `teaching-grid--2`: two columns;
- `teaching-grid--3`: three columns;
- `teaching-grid--stack-medium`: collapse a three-column composition earlier when cards need more room;
- `teaching-grid--last-wide`: let the last child span the full row.

Use it to compose cards or items. Do not create a topic-specific grid class only to choose a column count.

### `teaching-card`

Represents one member of a set of **parallel concepts**.

Typical structure:

```html
<div class="teaching-card">
<span class="teaching-eyebrow">Dimensión</span>
<strong>Título</strong>
<span>Explicación breve.</span>
</div>
```

Use cards when the learner is asking:

> What things exist alongside each other?

Do not use cards to imply causality or order.

### `teaching-item`

Represents a **marked criterion or step** with a marker, title, and explanation.

Typical structure:

```html
<div class="teaching-item">
<span class="teaching-item__marker">1</span>
<strong>Título</strong>
<span>Explicación breve.</span>
</div>
```

Modifiers:

- `teaching-item--stacked`: marker above the content; useful for compact sequential steps;
- `teaching-item--quiet`: restrained treatment for principles or invariants that should not look like cards.

Use the number only when order or stable enumeration actually helps comprehension.

### `teaching-flow`

Represents a simple linear pipeline:

```text
step → step → step
```

Structure:

```html
<div class="teaching-flow">
  <div class="teaching-flow__step">...</div>
  <div class="teaching-flow__arrow" aria-hidden="true">→</div>
  <div class="teaching-flow__step">...</div>
</div>
```

Use `teaching-flow__step--accent` when one node needs semantic emphasis.

When explicit ordering helps, add `teaching-flow__step--numbered` to the step and place a `teaching-flow__marker` inside it. The marker floats over the step's top-left border as a small badge; do not use bare numbers as decorative text.

Use `teaching-flow--compact` for short, text-heavy nodes. The compact recipe presents the flow as one shared container instead of a row of narrow individual cards.

If the flow has branching, cycles that need explicit geometry, or relationships that cannot remain clear when stacked on mobile, consider Mermaid or a purpose-built representation instead.

### `teaching-eyebrow`

A small category label placed above the main title of a card or link card.

It is visual metadata, not a heading level.

### `teaching-link-card`

A card whose primary job is navigation to another Teaching surface.

Use it when the entire card is one clear action. Do not turn ordinary explanatory cards into links merely for visual consistency.

### `visual-equivalent`

Use after an essential visual representation when a textual equivalent is needed.

The text must communicate the relevant relationship, not merely say that a visual exists.

Use `visual-equivalent--subtle` when the equivalent should remain available without competing with the main representation.

## Semantic recipes

Recipes combine primitives. They are preferred over creating one-off topic components.

### Parallel dimensions

Question:

> What dimensions or alternatives exist at the same level?

Use:

```text
teaching-grid
└─ teaching-card × N
```

### Criteria or checklist

Question:

> What independent things should be checked?

Use:

```text
teaching-grid
└─ teaching-item × N
```

### Sequential pressure or causal steps

Question:

> What happens next because the previous state changed?

Use ordered `teaching-item` steps. A specialized layout may control geometry when the causal shape matters, but the step itself should remain the shared primitive.

### Pipeline

Question:

> Through which stages does an artifact or process pass?

Use `teaching-flow`.

### Comparison

Question:

> What differs between these states or options?

Comparison remains a recipe rather than a single universal component. Preserve the dimensions being compared and choose the simplest structure that keeps them legible.

Do not force every comparison into generic cards.

## Accessibility and responsive rules

Every use of these components must preserve:

- DOM order that remains meaningful when columns collapse;
- essential meaning independent of color;
- no essential information only in arrows or decoration;
- textual equivalents for essential visuals;
- readable density on narrow screens;
- no horizontal overflow for ordinary content;
- semantic headings outside purely visual labels.

Decorative arrows should use `aria-hidden="true"`.

## Component creation rule

Before adding a new component, ask:

1. Is this actually a new semantic job?
2. Can a native MkDocs component express it?
3. Can an existing Teaching primitive express it with a different layout?
4. Would a new abstraction be reusable in another entry without knowing this topic?

If the answer is mostly about the topic name rather than the semantic job, do not create a new component.

Prefer:

```text
semantic job → shared primitive → page-specific content
```

over:

```text
page section → new component → new CSS
```
