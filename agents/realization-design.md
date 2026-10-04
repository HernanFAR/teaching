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

### 1. Conductor case selection

If the pedagogical source defines constraints for a conductor case rather than fixing one concrete case, realization design must select and validate the case before deciding how to present it.

The selected case should:

- satisfy every source-level validity constraint;
- make the intended tensions observable without fabricating them;
- preserve the required counterfactuals;
- avoid introducing accidental prerequisites or resource barriers;
- remain replaceable by another valid case without changing the pedagogical intent.

Record why the case is valid before implementation.

If no candidate case satisfies the source constraints cleanly, treat that as evidence about the source or the realization design. Do not weaken the constraints silently just to keep a convenient example.

If the source explicitly fixes the conductor case as an invariant, preserve it and do not substitute another domain during realization design without revising the source first.

### 2. Concretize the causal path

After selecting a conductor case, concretize the source-level causal path for this realization before deciding the editorial or visual structure.

For each essential tension in the pedagogical source, define the realization-specific:

- current state;
- new pressure or changed condition;
- observable limitation;
- minimum useful change;
- concept name, if the change has now earned one;
- relevant counterfactual;
- continuity with the previous stage.

Keep the same observable objective across the sequence unless the source explicitly requires otherwise. A new stage may add conditions, mechanisms, or entry points, but it must not silently replace the problem simply to justify the next abstraction.

Before moving on from each stage, verify:

1. what behavior or intent is being preserved;
2. what changed in the environment or requirements;
3. why the current form is now insufficient or uncomfortable;
4. why the proposed change is the minimum response to that pressure;
5. which formal name, if any, becomes useful only after the change;
6. why not making the change could still be reasonable in a simpler context.

Do not design the page around a causal sequence that only works because pressures were fabricated for the example.

If the selected conductor case cannot traverse the source path without artificial transitions, revise the realization case or the pedagogical source before continuing.

### 3. Minimal technical realization

Before designing the editorial structure, choose the smallest technical realization that can make the causal path honest and observable.

The realization should define only the mechanisms needed to materialize the intended tensions, such as:

- language and runtime;
- initial entry mechanism;
- concrete persistence or external capabilities when they are pedagogically necessary;
- later entry mechanisms introduced by the causal path;
- composition mechanism;
- local execution and reproducibility requirements.

Also record mechanisms that are intentionally **excluded** because they would introduce concepts too early, hide the tension behind a framework, or create accidental prerequisites.

Prefer technologies that:

- keep the relevant dependency or responsibility visible;
- can be used locally with modest resources;
- do not require paid accounts or unnecessary infrastructure;
- do not solve in advance the architectural problem the lesson is meant to expose.

Do not choose a library merely because it is idiomatic for the final architecture.

The technical realization is valid only if each mechanism appears when the causal path has earned it.

### 4. Code as evidence

When code participates in the realization, treat it as evidence of the transformation rather than as a sequence of complete application rewrites.

Prefer:

- one sufficiently complete initial state;
- small deltas when one decision changes;
- before/after fragments when a dependency or responsibility changes;
- broader snapshots only when the learner needs to inspect the resulting whole.

Every code block should answer a concrete pedagogical question.

Do not repeat boilerplate merely to keep every stage self-contained. If framework setup, configuration, generated code, or infrastructure detail does not help explain the current tension, reduce it, hide it from the main path, or move it to supporting material.

Keep continuity visible: a learner should be able to tell what remained the same and what changed between stages.

Do not use code volume as evidence that an abstraction is necessary. The justification must remain the observable pressure defined by the causal path.

### 5. Editorial structure

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

### 6. Visual question

Every non-trivial visual representation should answer a concrete question.

Examples:

- What changes over time?
- What can vary while intent remains stable?
- What alternatives differ?
- What causes the next step?
- What should be checked before publication?

If a visual does not answer a useful question, prefer simpler text.

### 7. Component choice

Before implementing visual structure, read `components.md` and reuse the shared Teaching vocabulary.

Prefer an existing semantic or native site component when it expresses the intended meaning honestly.

Examples:

- admonitions for warnings, notes, and conclusions;
- cards for parallel concepts;
- sequences for causal or temporal progression;
- comparisons for meaningful contrasts;
- standard Markdown when no custom component adds understanding.

Introduce custom HTML/CSS only when an existing component would distort the meaning or materially reduce clarity.

### 8. Accessibility and material access

Realization design must preserve the access constraints declared by the source.

In particular:

- essential visual information needs a textual equivalent;
- meaning must not depend only on color, hover, animation, or pointer interaction;
- semantic structure should remain navigable;
- mobile and narrow layouts must remain usable;
- text density and contrast must remain readable;
- the design must not add unnecessary paid or resource-heavy dependencies.

### 9. Responsive behavior

A realization specification should describe what happens when space becomes scarce.

Prefer:

- reflow over horizontal overflow;
- fewer columns over compressed illegibility;
- textual continuity when arrows or decorative connectors disappear;
- stable reading order across layouts.

### 10. Visual rhythm

Avoid making every section look identical.

Use repetition to create a language, not monotony.

Vary representation when the semantic job changes:

- cards for dimensions;
- flows for causality;
- restrained lists for principles;
- admonitions for emphasis;
- prose for transitions and interpretation.

### 11. Exploratory mockups

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
- If a conductor case was selected by the realization, was it explicitly validated against the source constraints?
- Was the source-level causal path concretized into realization-specific states, pressures, minimum changes, and counterfactuals before visual design?
- Can each stage be traversed without changing the problem or fabricating a pressure merely to justify an abstraction?
- Was a minimal technical realization chosen before editorial implementation, with unnecessary mechanisms explicitly excluded?
- Does each technical mechanism appear only after the causal path gives it a reason to exist?
- When code is used, does each block answer a pedagogical question rather than repeat the whole application?
- Are changes between code states shown as small, traceable deltas whenever possible?
- Did implementation reveal evidence that should revise the pedagogical source?

If implementation reveals a problem in the source, stop and make that revision visible instead of compensating for it only in presentation.
