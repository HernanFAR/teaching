# Lesson generation rules

## Purpose

Use these rules when creating, deriving, or revising the **pedagogical source** of a Teaching lesson.

Once the source is sufficiently defined, hand off presentation decisions to `realization-design.md`.

A lesson is a **realization** of a more stable pedagogical source. Generation may change representation, examples, language, difficulty, visuals, exercises, or interaction. It must not silently change the pedagogical intent.

## Required pedagogical source

Before generating a lesson, establish enough source information to answer the following.

### 1. Pedagogical intent

Declare:

- what the learner should understand by the end;
- what they do **not** need to understand yet;
- which misleading intuition or common mistake should be avoided when relevant;
- what observable evidence would indicate that the lesson succeeded.

If this intent is materially unclear, do not invent it. Mark the gap and request or derive clarification from available project evidence.

### 2. Causal learning path

The source should describe a causal progression rather than a list of topics.

Prefer this general form:

```text
working state
→ one condition changes
→ a limitation becomes observable
→ alternatives can be explored
→ the minimum useful change is introduced
→ the concept is named
→ costs and limits become visible
→ the next tension may appear
```

Not every lesson needs every step, but every structural or conceptual change must have a visible cause.

Do not introduce a pattern, abstraction, layer, dependency, or formal name only because it is conventional.

### 3. Invariants and variables

Separate what must remain stable from what a realization may change.

When a lesson depends on a **conductor case** or evolving example, distinguish whether that case is itself part of the pedagogical source or merely one realization choice.

If the exact case is not pedagogically essential:

- define in the source the properties, pressures, and acceptance criteria that any valid case must satisfy;
- keep the concrete domain, entities, technologies, and example details variable;
- do not accidentally make one convenient example canonical;
- leave the concrete case selection to realization design;
- require the selected case to be validated against the source constraints before implementation.

Only fix a specific conductor case in the source when changing that case would materially change what the lesson is trying to teach.


**Invariants may include:**

- pedagogical intent;
- ordering of essential tensions;
- concepts that must not appear early;
- relevant counterfactuals;
- important limits or costs;
- accessibility and material-access constraints;
- distinctions between facts, heuristics, and preferences.

**Variables may include:**

- programming language;
- application domain;
- examples;
- difficulty;
- amount of scaffolding;
- visual representation;
- exercises;
- interaction style.

A derivation must not silently modify an invariant.

### 4. Conditions of access

Accessibility and class consciousness are generation constraints, not publication cleanup.

While generating:

- do not require paid tools, services, courses, subscriptions, or costly infrastructure when a reasonable alternative exists;
- do not assume powerful hardware or fast connectivity unless technically necessary;
- do not use university education, certification, or expensive prior training as an unnecessary entry requirement;
- when an English term is needed, provide a visible Spanish translation when it is necessary for understanding;
- introduce technical vocabulary after the intuition whenever practical;
- do not place essential information only in color, hover, animation, `title`, or interaction;
- give essential visual information a textual equivalent;
- preserve semantic document structure and keyboard-readable interactions;
- prefer examples reproducible with modest resources when this does not compromise the pedagogical goal.

Distinguish real technical constraints from barriers introduced by the explanation itself.

### 5. Source state versus realization state

Do not confuse an incomplete source with an incomplete realization.

A **source can be usable** even if some presentation decisions are still open, provided the pedagogical intent, essential causal path, invariants, and constraints are known.

A **realization is incomplete** when the intended published experience still lacks material required to communicate or verify that source.

Represent missing knowledge explicitly instead of fabricating it.

## Source generation procedure

When producing or revising a pedagogical source:

1. establish the intended learner understanding;
2. establish what does not need to be taught yet;
3. construct the causal learning path;
4. identify invariants and realization variables;
5. make relevant limits and counterfactuals explicit;
6. record accessibility and material-access constraints;
7. when a conductor case is needed, define its validity constraints unless the specific case is itself pedagogically invariant;
8. keep unresolved pedagogical questions visible;
9. decide whether the source is sufficiently defined for realization design.

A source is ready for handoff when its intent, essential causal path, invariants, limits, and access constraints are clear enough that presentation choices no longer need to invent pedagogical meaning.

At that point, continue with `agents/realization-design.md`.

## Source review checks

Before handing the source to realization design, verify:

- Can each important concept be traced to a problem or tension that made it useful?
- Did any abstraction appear only because “that is how it is done”?
- Does the lesson show what happens if we do not make the change when that counterfactual matters?
- Does it explain when the technique may be unnecessary or harmful?
- Are facts, heuristics, preferences, and contextual decisions distinguishable?
- Can a learner follow the intended path without already knowing the formal name of the concept?
- Are paid access, strong hardware, English fluency, formal education, or ideal physical conditions being assumed unnecessarily?
- Are the source invariants explicit enough that a realization can vary without silently changing pedagogical intent?
- If the lesson uses a conductor case, is it clear whether the specific case is invariant or whether only its constraints are?
- If the specific case is variable, are its validity constraints explicit enough that a realization can select and verify one without inventing pedagogical meaning?
- Are unresolved pedagogical questions still visible instead of being hidden by fluent prose?

If a required check cannot be satisfied because the source is insufficient, stop and expose the gap rather than inventing pedagogical authority.
