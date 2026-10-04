# Clean Architecture example · Stage 2

This stage keeps the same HTTP endpoint and direct SQLite persistence from stage 1.

The only new pressure is pricing.

An order now has these rules:

- products eligible for promotions contribute to a promotional subtotal;
- `gift-card` is excluded from promotions;
- an eligible subtotal of at least 100,000 receives a 10% discount;
- the discount is capped at 20,000.

Keeping those rules inline inside the endpoint would still compile, but the calculation now answers a problem-specific question that can be read and changed independently from HTTP and SQLite.

The minimum change is therefore to give the calculation its own unit: `OrderTotalCalculator`.

This stage still does **not** introduce:

- a domain layer;
- a use case abstraction;
- ports or adapters;
- repository pattern;
- multiple projects.

Separating one behavior because it acquired identity is not the same thing as adopting Clean Architecture.

## Run locally

```bash
dotnet restore
dotnet run
```

A request such as:

```json
{
  "items": [
    {
      "productId": "coffee",
      "quantity": 30,
      "unitPrice": 3500
    },
    {
      "productId": "gift-card",
      "quantity": 1,
      "unitPrice": 25000
    }
  ]
}
```

produces a subtotal of 130,000. Only 105,000 is eligible for the promotion, so the discount is 10,500 and the final total is 119,500.

The next stage should introduce a genuinely different entry mechanism that needs to execute the same order-creation behavior.
