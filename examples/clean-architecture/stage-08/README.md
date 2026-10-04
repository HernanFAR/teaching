# Clean Architecture example · Stage 8

Stage 8 does not introduce another structural refactor.

The executable shape produced in stage 7 is the final technical state of the realization.

This stage exists to reconstruct that shape, name the relationships that already emerged, and only then compare them with **Clean Architecture**.

## What emerged

### Entry mechanisms

HTTP and marketplace translate their own transport formats into the input required by the create-order use case.

They do not own the order-creation behavior.

### Application

`CreateOrder` coordinates the objective:

1. ask the domain to create a valid and priced order;
2. persist it through a required capability;
3. notify its creation through another required capability;
4. return the result.

Application knows Domain and the capabilities it requires.

It does not know SQLite, HTTP webhook details, or concrete composition.

### Domain

`Order` owns the rules that define whether an order is valid and how its total is calculated.

It does not know:

- entry mechanisms;
- application orchestration;
- persistence;
- notification;
- composition.

### Ports and adapters

Application expresses:

- `IOrderStore`;
- `IOrderCreatedNotifier`.

Concrete mechanisms realize those capabilities:

- `SqliteOrderStore`;
- `HttpOrderCreatedNotifier`.

The useful relationship is not “every external thing gets an interface”.

It is:

```text
policy -> capability <- mechanism
```

### Composition

`OrderApplicationComposition` owns the selection and construction of concrete mechanisms.

It knows Application and the concrete adapters.

Domain and Application do not know it.

## Dependency shape

A simplified code-dependency view of the final realization is:

```text
HTTP entry -----------┐
                      v
Marketplace entry -> Application -> Domain
                      ^
                      |
                 Composition
                  /        \
                 v          v
             SQLite      HTTP webhook
                \          /
                 \        /
                  -- implements
                     Application ports
```

This is not execution flow.

It is a compact way to ask:

> What is each part allowed to know?

The important direction is that policies do not need to know the external mechanisms that realize their required capabilities.

## Why this can now be called Clean Architecture

We did not begin from a four-layer template.

We accumulated observable pressures:

1. a rule acquired independent meaning;
2. one operation needed more than one entry mechanism;
3. persistence details interfered with that operation;
4. the same dependency relationship appeared again with notification;
5. problem rules and orchestration began changing for different reasons;
6. concrete composition became duplicated.

The resulting structure can now be described using ideas associated with **Clean Architecture**:

- dependency inversion around policy;
- boundaries between policy and mechanism;
- use cases that coordinate objectives;
- domain rules that do not depend on external mechanisms;
- external adapters that realize required capabilities;
- composition at the outside.

The name describes the form we reached.

It did not prescribe every step that led there.

## The dependency rule

For this realization, the dependency rule is observable as a practical constraint:

> Code that expresses more stable policy should not need to depend on less stable implementation details merely to perform its work.

That does not mean every dependency must point to one physical project or that folders prove architectural direction.

The rule is about source-code knowledge and change boundaries.

## What did not become mandatory

Nothing in this path demonstrated that Clean Architecture universally requires:

- four projects;
- Repository Pattern;
- Unit of Work;
- MediatR;
- CQRS;
- full DDD;
- a DI container;
- one interface per class;
- ports for every dependency.

Those may be useful in other contexts, but they were not necessary consequences of this case.

## The stopping points still matter

At several earlier stages, doing less remained reasonable.

A small application could have stopped before:

- extracting a use case;
- inverting persistence;
- naming ports and adapters;
- splitting Domain and Application;
- introducing a composition unit.

That is not a failed Clean Architecture implementation.

It is evidence that architecture is a response to pressure, not a target shape to maximize.

## Final criterion

The realization closes with the same question that governed the path:

> **What problem justifies this separation?**

The public lesson can now be written from executable evidence rather than from a diagram imposed in advance.
