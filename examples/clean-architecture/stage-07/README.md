# Clean Architecture example · Stage 7

Stage 7 gives concrete composition its own place.

In stage 6, Domain and Application were already independent from SQLite and HTTP notification details. However, both executable entries repeated the same construction:

- create `SqliteOrderStore`;
- initialize it;
- create `HttpOrderCreatedNotifier`;
- configure the webhook endpoint;
- pass both capabilities to `CreateOrder`.

That repeated knowledge is the pressure for this stage.

## Composition

`Teaching.CleanArchitecture.Stage07.Composition` now owns the concrete assembly.

`OrderApplicationComposition.CreateAsync()` knows:

- which persistence implementation is selected;
- which notification implementation is selected;
- their concrete configuration;
- how to initialize the storage.

It returns the already assembled capabilities to the entry mechanism.

## What the entries know now

HTTP and marketplace still own their transport concerns.

They no longer know:

- SQLite;
- the database connection string;
- `HttpClient`;
- the webhook URL;
- which concrete adapters were selected.

## What this does not imply

A composition root does not require a DI container.

This example still constructs everything explicitly.

With one entry or trivial construction, keeping this code in `Program.cs` could still be the better choice.

The point is not to create a `Composition` project by convention. It appears here because identical concrete assembly had become duplicated across entry mechanisms.

The next stage does not need another structural refactor. It will reconstruct the resulting dependency shape and only then name it as Clean Architecture.
