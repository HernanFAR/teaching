# Clean Architecture example · Stage 6

Stage 6 separates two responsibilities that have become meaningfully different:

- **order rules** — what makes an order valid and how its total is calculated;
- **create-order orchestration** — save the order, notify its creation, and return the result.

The names **Domain** and **Application** become useful only now because those responsibilities can be observed independently.

## Domain

`Teaching.CleanArchitecture.Stage06.Domain` owns:

- order validation;
- pricing rules;
- the resulting `Order`.

It does not know:

- HTTP;
- marketplace payloads;
- SQLite;
- webhooks;
- the create-order workflow.

## Application

`Teaching.CleanArchitecture.Stage06.Application` owns the `CreateOrder` use case.

It:

1. translates normalized input into domain input;
2. asks the domain to create a valid, priced order;
3. saves the result through `IOrderStore`;
4. notifies creation through `IOrderCreatedNotifier`;
5. returns the use-case result.

The use case no longer contains the rules that decide whether the order is valid or how much it costs.

## What this does not imply

This stage does not claim that every rule belongs in a domain project or that every application needs separate Domain and Application assemblies.

The physical project split is useful here because the responsibilities are now independently observable. The semantic distinction came first.

If the rules had remained tiny and relevant only to one operation, keeping them with the use case could still be the better decision.

The next stage will examine who should know how the concrete pieces are assembled.
