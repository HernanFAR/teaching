# Realization design rules

## Purpose

Use these rules after a pedagogical source is sufficiently defined and before implementing or publishing a concrete Teaching entry.

Keep three responsibilities distinct:

**Pedagogical source**

> What are we trying to teach, and what must remain stable?

**Realization design**

> What form should that intention take in this concrete experience, and why?

**Implementation**

> How do we materialize that design with the concrete mechanisms available to us?

Do not use realization design to silently redefine pedagogical intent.

Do not treat implementation details as proof that a realization design is pedagogically valid.

A working page can still be a poor realization. A compelling mockup can still be impossible, inaccessible, or semantically dishonest when implemented.

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

A realization can expose problems at different layers.

When evidence appears, identify who owns the problem:

- implementation problem → revise the implementation;
- realization-design problem → revise the realization specification;
- pedagogical-source problem → revise the source explicitly.

Do not hide a source problem inside presentation decisions or compensate for a design problem only with implementation tricks.

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

Also define the **argument hierarchy** before polishing components:

- use `##` for the few major arguments or phases that organize the entry;
- use `###` for developments that belong to one of those major arguments;
- avoid a flat table of contents where every section appears as a peer when the content already has conceptual grouping;
- do not create heading depth only for visual indentation; hierarchy must express conceptual containment;
- keep heading order meaningful even when visual components are removed.

A useful table of contents should let a learner scan the large argument first and then inspect its subordinate parts.

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

Before implementing visual structure, read `components.md` and reuse the shared Teaching vocabulary.

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
- Does the heading hierarchy make the table of contents reflect the entry's major arguments and their subordinate sections?
- Are native components used when they fit?
- Are essential visuals accompanied by textual equivalents?
- Does the layout reflow without overflow?
- Does the page avoid repetitive cardification?
- Can the learner distinguish source invariants from realization choices?
- Did implementation reveal evidence that should revise the pedagogical source?

If implementation reveals a problem in the source, stop and make that revision visible instead of compensating for it only in presentation.
