# Supported lesson explorations

## Purpose

Teaching lessons may expose **supported explorations**: guided ways for a learner to continue investigating a lesson with an LLM without requiring the LLM to reconstruct the lesson's pedagogical meaning from general knowledge.

A supported exploration is not a pre-written answer.

It combines:

```text
lesson pedagogical material
+ exploration-specific guidance
+ learner concrete need
→ LLM exploration request
```

Keep these responsibilities distinct:

**Teaching owns**

- what the lesson teaches;
- which tensions, concepts, limits, counterfactuals, and evidence belong to it;
- which exploration modes are supported;
- the guidance and scope rules for each supported exploration.

**The learner owns**

- the concrete thing they want to understand, compare, practice, or apply.

**The LLM owns**

- the realization of that exploration within the declared guidance;
- any clearly marked extension beyond the original lesson scope when the exploration allows it.

An LLM must not silently gain pedagogical authority merely because it can produce a plausible continuation.

## Required entry behavior

Every published lesson should include a visible **Explore this lesson** section, or an equivalent clearly identifiable surface.

The entry must declare which supported explorations are available for that lesson.

Do not expose an exploration merely because a generic prompt could be generated. A lesson should support an exploration only when its pedagogical source and available material provide enough context for an LLM to perform it without inventing the lesson's intent.

Each supported exploration should make clear:

- what kind of investigation it performs;
- what lesson material it may rely on;
- what the learner is expected to provide as their concrete need;
- what must remain invariant;
- whether and how the exploration may move beyond the original lesson scope.

The concrete learner need should remain free text. Teaching should guide the exploration, not pre-decide the learner's question.

## Initial supported exploration vocabulary

Teaching currently recognizes four initial exploration modes. This vocabulary is expected to evolve from evidence.

### 1. Another case

Purpose:

> Re-realize the lesson's essential pedagogical pressures in a different domain or conductor case.

The exploration should:

- preserve the relevant pedagogical invariants;
- choose a case where the required pressures can arise naturally;
- avoid copying the published architecture merely by analogy;
- preserve meaningful moments where not changing the design is still reasonable;
- state when the requested case can support only part of the lesson instead of fabricating missing pressures.

The learner may specify a preferred domain, technology, problem family, or kind of example.

A different vocabulary with the same final shape is not enough. The alternative case should preserve the reasoning path that makes the lesson meaningful.

### 2. Deepen

Purpose:

> Investigate in greater detail a tension, an already introduced concept, or a natural extension of the current case.

Deepening may:

- inspect an existing tension more closely;
- explain an introduced concept from another angle;
- add examples around the same decision;
- extend the current case with new situations that exercise or expose already relevant pressures;
- examine direct consequences of decisions already present;
- introduce knowledge outside the original lesson when it is useful for the learner's concrete need.

A **case extension** is not the same as a **concept extension**.

The LLM may extend the case freely within the lesson's invariants. It may also introduce concepts beyond the original lesson, but crossing that boundary must never be silent.

#### Mandatory out-of-scope marking

When Deepen introduces material that does not belong to the original lesson's pedagogical scope, the transition must be **explicit, visually strong, and difficult to confuse with canonical lesson material**.

Use wording equivalent in force to:

```text
────────────────────────────────────────
OUTSIDE THE ORIGINAL LESSON SCOPE
────────────────────────────────────────

The following material is not part of the pedagogical content
defined by the original lesson.

It is included to answer your concrete exploration need.
```

The exact presentation may vary by medium, but the distinction must be unmistakable.

The LLM must not retrospectively reinterpret the lesson as if the new concept had always been implicit in it.

For example, if a lesson exposes a partial-failure tension but deliberately stops before teaching Outbox, Deepen may explain Outbox when the learner asks how that tension is commonly addressed. It must clearly state that Outbox is an extension beyond the original lesson rather than part of the original lesson's intended content.

The rule is:

> The exploration may exceed the lesson's scope. It may not silently redefine that scope.

### 3. Apply it to my case

Purpose:

> Use the learner's real or described situation as the context in which to investigate the lesson's reasoning.

The exploration should:

- begin from the learner's actual constraints rather than forcing the published conductor case onto them;
- identify which lesson pressures are genuinely present;
- distinguish pressures that are absent;
- avoid prescribing the lesson's final structure when the learner's case does not justify it;
- preserve uncertainty when important facts about the learner's situation are missing.

The learner should provide the concrete system, decision, code situation, or problem they want to examine.

The goal is not to map every lesson component onto their system. The goal is to test whether the lesson's reasoning helps explain their situation.

### 4. Test me

Purpose:

> Turn the lesson into a guided decision exercise where the learner must reason before the next transition is revealed.

The exploration should:

- present one pressure or changed condition at a time;
- ask the learner what they would do and why;
- avoid revealing the canonical next change before the learner has had a chance to decide;
- compare the learner's reasoning with the lesson's evidence and alternatives;
- treat defensible alternative decisions honestly;
- preserve cases where doing nothing is still a valid answer;
- use the lesson's causal path as evidence, not as an answer key to memorize.

The learner may specify what part of the lesson they want to practice, how challenging the exercise should be, or whether they want hints.

## Exploration prompt composition

A generated LLM request for a supported exploration should contain enough information to distinguish at least:

1. **Lesson identity and pedagogical intent**
   - what the lesson is trying to teach;
   - what it deliberately does not need to teach yet.

2. **Relevant lesson material**
   - tensions;
   - causal path;
   - concepts already introduced;
   - counterfactuals;
   - limits;
   - conductor-case evidence when relevant;
   - implementation evidence when relevant.

3. **Exploration contract**
   - the chosen supported exploration;
   - its procedure;
   - its invariants;
   - its allowed degrees of freedom;
   - its scope-crossing rules.

4. **Source references**
   - resolvable references to the Teaching material that owns the lesson semantics when such references are available;
   - choose the smallest useful reference boundary for the exploration: this may be one source file, several artifacts, an evidence directory, or the whole lesson directory;
   - references should let an LLM inspect original material instead of forcing it to reconstruct the lesson only from the generated prompt;
   - the prompt must state that inaccessible material must not be treated as if it had been read.

5. **Learner concrete need**
   - preserved as learner-provided text;
   - not silently rewritten into a different pedagogical goal.

Do not require every exploration to receive every lesson artifact. Include the smallest set of source and realization material needed for that exploration to remain pedagogically grounded.

## Source and realization responsibilities

The **pedagogical source** should make enough information explicit that future realization design can determine which explorations are honestly supportable.

At minimum, source authors should consider whether the lesson exposes enough information for:

- alternative-case validity constraints;
- concepts and tensions that may be deepened;
- boundaries between original scope and neighboring concepts;
- application to learner-provided cases;
- a causal path that can support decision practice.

The source does not need to support all four modes.

The **realization design** decides how the supported exploration surface is presented in the concrete lesson entry and which lesson artifacts are supplied to each generated LLM request.

The public entry should not make the learner reverse-engineer hidden operational files manually.

## Review checks

Before publishing a lesson with supported explorations, verify:

- Is there a visible exploration surface in the entry?
- Are the supported exploration modes named and briefly explained?
- Does each exploration accept a concrete learner need rather than forcing a pre-written question?
- Can the LLM receive enough lesson-specific material to preserve the lesson's intent?
- Does the generated request include useful resolvable source references when Teaching has them?
- Is the reference boundary appropriate for this exploration rather than mechanically listing every artifact?
- Does the prompt prohibit pretending that inaccessible referenced material was actually consulted?
- For Another case, can validity be checked without forcing the original architecture onto a new domain?
- For Deepen, are tensions, introduced concepts, and natural case extensions distinguishable?
- For Deepen, is any movement beyond original scope required to be unmistakably marked?
- For Apply it to my case, can absent pressures remain absent?
- For Test me, can the learner make decisions before the canonical transition is revealed?
- Does any exploration accidentally grant the LLM authority to redefine the lesson's pedagogical scope?
- Can an exploration fail or narrow itself honestly when the learner's requested case cannot support the intended reasoning?
