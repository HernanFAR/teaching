# Clean Architecture example · Stage 1

This is the first executable state of the Clean Architecture lesson realization.

It intentionally keeps order creation close to the HTTP endpoint.

The operation currently:

- validates the request;
- calculates a simple total;
- writes the order directly with SQLite;
- returns the created order identifier and total.

There is no use case abstraction, port, adapter, domain layer, repository pattern, or project split yet.

That absence is intentional: at this stage, the realization has not observed a pressure that justifies those structures.

## Run locally

```bash
dotnet restore
dotnet run
```

Then send a request to the URL printed by ASP.NET Core:

```json
{
  "items": [
    {
      "productId": "coffee",
      "quantity": 2,
      "unitPrice": 3500
    }
  ]
}
```

The next stage should change only after a new rule makes the current form meaningfully less clear.
