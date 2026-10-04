# Realization design rules

## Purpose

Use these rules after a pedagogical source is sufficiently defined and before implementing or publishing a concrete Teaching entry.

The pedagogical source answers:

> What are we trying to teach, and what must remain stable?

Realization design answers a different question:

> How should this intention become visible, readable, navigable, and useful in this particular realization?

Do not use realization design to silently redefine pedagogical intent.

## Pipeline position

Treat the default Teaching pipeline as:

```text
request
→ pedagogical source
→ realization design
→ implementation
→ review
→ publication
→ evidence
↺ possible source revision
```

A realization can expose problems in the source. If that happens, revise the source explicitly instead of hiding the change inside presentation decisions.

## Required realization specification

Before implementation, establish enough information to answer the following.

### 1. Editorial structure

Decide which parts of the source are best expressed as:

- narrative;
- sequence;
- comparison;
- parallel dimensions;
- checklist;
- example;
- warning or note;
- code;
- diagram;
- exercise;
- interaction.

Do not force every idea into cards or diagrams. Representation should follow the pedagogical job of the content.

### 2. Visual question

Every non-trivial visual representation should answer a concrete question.

Examples:

- What changes over time?
- What can vary while intent remains stable?
- What alternatives differ?
- What causes the next step?
- What should be checked before publication?

If a visual does not answer a useful question, prefer simpler text.

### 3. Component choice

Prefer an existing semantic or native site component when it expresses the intended meaning honestly.

Examples:

- admonitions for warnings, notes, and conclusions;
- cards for parallel concepts;
- sequences for causal or temporal progression;
- comparisons for meaningful contrasts;
- standard Markdown when no custom component adds understanding.

Introduce custom HTML/CSS only when an existing component would distort the meaning or materially reduce clarity.

### 4. Accessibility and material access

Realization design must preserve the access constraints declared by the source.

In particular:

- essential visual information needs a textual equivalent;
- meaning must not depend only on color, hover, animation, or pointer interaction;
- semantic structure should remain navigable;
- mobile and narrow layouts must remain usable;
- text density and contrast must remain readable;
- the design must not add unnecessary paid or resource-heavy dependencies.

### 5. Responsive behavior

A realization specification should describe what happens when space becomes scarce.

Prefer:

- reflow over horizontal overflow;
- fewer columns over compressed illegibility;
- textual continuity when arrows or decorative connectors disappear;
- stable reading order across layouts.

### 6. Visual rhythm

Avoid making every section look identical.

Use repetition to create a language, not monotony.

Vary representation when the semantic job changes:

- cards for dimensions;
- flows for causality;
- restrained lists for principles;
- admonitions for emphasis;
- prose for transitions and interpretation.

### 7. Exploratory mockups

Visual mockups, including AI-generated images, may be used as **disposable exploration artifacts**.

They can help discover:

- composition;
- hierarchy;
- grouping;
- density;
- visual rhythm;
- candidate components.

They are not the implementation and they are not a source of pedagogical authority.

After exploring visually:

1. return to the current repository state;
2. recover the latest pedagogical source and content;
3. extract the useful structural decision from the mockup;
4. implement it with semantic HTML, Markdown, CSS, and native components;
5. verify accessibility and responsive behavior.

Do not copy visual artifacts blindly.

## Implementation review

Before treating a realization design as ready for publication, verify:

- Does each representation have a pedagogical job?
- Is the content still understandable without decorative styling?
- Does the visual hierarchy match the conceptual hierarchy?
- Are native components used when they fit?
- Are essential visuals accompanied by textual equivalents?
- Does the layout reflow without overflow?
- Does the page avoid repetitive cardification?
- Can the learner distinguish source invariants from realization choices?
- Did implementation reveal evidence that should revise the pedagogical source?

If implementation reveals a problem in the source, stop and make that revision visible instead of compensating for it only in presentation.
