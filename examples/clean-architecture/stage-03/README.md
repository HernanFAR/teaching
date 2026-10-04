# Clean Architecture example · Stage 3

This stage introduces a second entry mechanism for the same observable objective: **create an order**.

The existing HTTP entry remains, and a marketplace import can now create an order from a JSON file through a console application.

The two inputs deliberately use different transport shapes:

- HTTP uses `CreateOrderRequest` and `CreateOrderItemRequest`;
- marketplace import uses `MarketplaceOrder` and `MarketplaceOrderLine`.

Both translate into the same order-creation language and invoke `CreateOrder.ExecuteAsync`.

That shared operation now has enough identity to be called a **use case**.

## What changed

Stage 2 let the HTTP endpoint own most of order creation.

With two entry mechanisms, duplicating validation, pricing, persistence, and order creation would make each mechanism own behavior that must remain consistent.

The minimum change is to extract that shared operation.

## What did not change

The use case still knows SQLite directly.

That is intentional.

Stage 3 is about who owns the operation, not yet about dependency inversion.

The shared project exists so the two executable entry mechanisms can call the same code. Its project boundary is a realization mechanism, not evidence that a Clean Architecture layer has already emerged.

## Run the HTTP entry

```bash
dotnet run --project Teaching.CleanArchitecture.Stage03.Web
```

## Run the marketplace entry

```bash
dotnet run --project Teaching.CleanArchitecture.Stage03.Marketplace -- Teaching.CleanArchitecture.Stage03.Marketplace/sample-order.json
```

The next stage should keep both entry mechanisms and challenge the fact that the shared use case still depends directly on SQLite.
