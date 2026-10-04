# Content model

## Purpose

Teaching content should be described through **independent dimensions** instead of forcing every entry into one hierarchy.

Keep these questions separate:

```text
Type
→ What kind of pedagogical resource is this?

Perspective
→ From what kind of software work are we looking at the problem?

Categories
→ What families of problems or knowledge does it touch?

Level
→ What prior understanding does it assume?

Relations / composition
→ What other resources does it compose with?
```

A single label must not silently answer several of these questions at once.

---

## 1. Type

A **type** describes what kind of pedagogical resource an entry is.

### Lesson

A lesson is a relatively self-contained pedagogical unit.

It primarily answers:

> **I want to understand this.**

A lesson should be reusable outside the guide or context in which it was first discovered.

Examples:

- how to discover a policy;
- how to discover a capability;
- how to recognize a dependency boundary.

A lesson can participate in many guides without belonging semantically to any one of them.

### Guide

A guide is an intentional composition oriented toward an objective.

It primarily answers:

> **I want to achieve or understand this larger outcome.**

A useful model is:

```text
guide
= reusable lessons
+ guide-specific pedagogical glue
```

The guide owns its **trajectory**:

- why these pieces are being connected;
- why this order is useful;
- what shared context or objective keeps them together;
- which transition prepares the next one;
- when the learner may reasonably stop.

A guide does not need to turn every transition into a standalone lesson.

#### Guide-specific material

A guide may contain sections whose meaning depends on that guide.

Examples:

- a transition between two lessons;
- context that only matters for this trajectory;
- a shared case that keeps several lessons connected;
- a synthesis that explains why independently reusable ideas now matter together.

This material is **not automatically another public content type**.

Use a simple structure when useful:

```text
Guide
├─ Lesson
├─ Guide section
├─ Lesson
├─ Guide section
└─ Lesson
```

A guide section should become a standalone lesson only when it gains enough independent pedagogical identity to remain useful outside that guide.

### Possible future type: History

Teaching may eventually need a type provisionally called **History** (`Historia`; historically-oriented material could also be described as a chronicle, but "Historia" is the preferred natural term).

A History would primarily answer something like:

> **What happened, under what conditions, and why does that context matter for understanding the present?**

It is more contextual or historical than instructional.

It may preserve:

- chronology;
- changes in constraints or available technology;
- shifts in practice;
- competing interpretations;
- historical causes and consequences;
- context needed before another lesson or guide makes sense.

A History should not be forced into a lesson if the important thing is not discovering a reusable concept but reconstructing a meaningful trajectory.

Possible future uses include the broader Teaching work around the impact of AI on software engineering, where understanding changes in the economics and practice of software may require historical context before making pedagogical claims.

**Do not activate or formalize History further until a real entry requires it.**

The current goal is to reserve the semantic space so that future historical material is not distorted into a lesson merely because Lesson and Guide were the only available types.

---

## 2. Perspective

A **perspective** describes the kind of software work from which an entry examines its subject.

Perspectives describe **how we are looking**, not **what we are looking at**.

### Design

Focus:

> How do we think about what should exist before or while defining a solution?

Typical concerns:

- meaning;
- policies;
- invariants;
- responsibilities;
- concepts;
- domain decisions;
- behavioral intent.

Example:

> How to discover a policy.

### Development

Focus:

> How do we materialize what is needed in working software?

Typical concerns:

- capabilities;
- effects;
- integrations;
- translation;
- persistence mechanisms;
- runtime behavior;
- concrete implementation.

Example:

> How to discover a capability.

### Architecture

Focus:

> How do we organize the things we build and the relationships between them?

Typical concerns:

- boundaries;
- dependency direction;
- ownership;
- composition;
- ports and adapters;
- Domain / Application separation;
- policy / capability / mechanism relationships.

Example:

> How policy, capability, and mechanism relate.

### Engineering

Focus:

> How do we reason across at least two of these worlds at the same time?

Engineering is not a catch-all label for content that is difficult to categorize.

Use it when the pedagogical subject is explicitly about coordinating concerns across perspectives, for example:

- design + development;
- development + architecture;
- design + architecture;
- design + development + architecture;
- or those concerns together with evidence, operations, economics, documentation, research, or human constraints.

The defining property is **interaction between worlds**, not breadth for its own sake.

---

## 3. Categories

A **category** describes **what family of problems or knowledge an entry addresses**.

Categories are thematic and may be multiple.

They should emerge from the corpus instead of becoming a large taxonomy designed in advance.

Candidate categories currently visible include:

- Modeling;
- Dependencies and boundaries;
- Effects and IO;
- Persistence and consistency;
- Integration;
- Execution;
- Verification;
- Evolution;
- Languages and representation;
- Knowledge and documentation;
- AI and automation.

These are provisional vocabulary, not a closed canonical list.

A concept name does not determine perspective or category by itself.

For example, persistence may be taught from:

- Design — what information deserves persistence and why;
- Development — how to persist it;
- Architecture — who owns the dependency;
- Engineering — how persistence, consistency, modeling, and operations interact.

---

## 4. Level

A **level** describes assumed prior understanding, not how intellectually difficult an entry is.

Use levels as prerequisites / orientation, not as rankings of learner ability.

### Introductory

Can be approached without already understanding the relevant family of concepts.

It may still be intellectually demanding.

### Intermediate

Assumes some distinctions, vocabulary, or experience already established elsewhere.

### Deepening

Examines limits, interactions, edge cases, consequences, or advanced use of concepts that the learner is already expected to recognize.

Avoid labels such as:

```text
easy
medium
hard
```

Difficulty varies by learner and realization. Level should remain about **what the source presupposes**.

---

## 5. Relations and composition

Do not encode every learning path as metadata owned by a lesson.

A lesson should not need to list every guide that may use it.

Instead:

> **The guide defines the journey. The lesson defines reusable knowledge.**

A guide may compose the same lesson differently from another guide.

For example:

```text
Lesson: How to discover a capability

may participate in:
- Clean Architecture in real use
- Thinking in continuity
- a future effects guide
- a future AI-assisted engineering guide
```

Those uses do not change the lesson's pedagogical identity.

Backlinks or navigation can be generated later as a realization concern; they are not the semantic definition of a "journey" property.

---

## Example classification

### How to discover a policy

```text
Type: Lesson
Perspective: Design
Categories:
- Modeling
- Dependencies and boundaries
Level: Introductory
```

### How to discover a capability

```text
Type: Lesson
Perspective: Development
Categories:
- Effects and IO
- Dependencies and boundaries
Level: Introductory
```

### How policy, capability, and mechanism relate

```text
Type: Lesson
Perspective: Architecture
Categories:
- Modeling
- Dependencies and boundaries
- Effects and IO
Level: Intermediate
```

### Clean Architecture in real use

```text
Type: Guide
Perspective: Engineering
Categories:
- Dependencies and boundaries
- Evolution
- Effects and IO
Level: Intermediate
```

The exact metadata representation is deliberately **not defined yet**.

First preserve the conceptual distinctions. Add front matter, schema, UI filters, or generated navigation only when a concrete use justifies them.
