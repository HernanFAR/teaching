# Clean Architecture example · Stage 5

Stage 5 adds a second external capability after persistence:

> notify that an order was created.

The create-order use case now expresses two capabilities:

- `IOrderStore` — save the order;
- `IOrderCreatedNotifier` — notify that creation succeeded.

SQLite realizes the first capability. An HTTP webhook realizes the second.

The same relationship has now appeared twice:

```text
use case -> needed capability <- external mechanism
```

At this point **port** and **adapter** become useful names for a form that the code already exhibits.

## What changed

`CreateOrder` calls the notification capability after saving the order.

It does not know `HttpClient`, a URL, JSON serialization, or HTTP status codes.

`HttpOrderCreatedNotifier` owns those details.

## Local reproducibility

No external account is required.

Start the minimal local webhook receiver:

```bash
dotnet run --project Teaching.CleanArchitecture.Stage05.WebhookReceiver
```

Then run either entry mechanism.

HTTP:

```bash
dotnet run --project Teaching.CleanArchitecture.Stage05.Web
```

Marketplace:

```bash
dotnet run --project Teaching.CleanArchitecture.Stage05.Marketplace -- Teaching.CleanArchitecture.Stage05.Marketplace/sample-order.json
```

Both send notifications to:

`http://localhost:5099/order-created`

## What this stage does not solve

A failed webhook after a successful database write raises a consistency question.

That is real, but it is not the pressure this stage is trying to solve. This realization does not introduce transactions, an outbox, retries, messaging, or delivery guarantees to hide that question.

The next stage should focus on a different distinction already planned by the causal path: rules of the order versus orchestration of creating it.
