# Clean Architecture example · Stage 4

Stage 4 keeps both entry mechanisms from stage 3 and changes one relationship only:

> the create-order use case no longer knows SQLite.

The use case now depends on the capability it actually needs:

`IOrderStore.SaveAsync(OrderToSave order)`

SQLite implements that capability in `SqliteOrderStore`.

## What changed

In stage 3, `CreateOrder` imported `Microsoft.Data.Sqlite`, opened connections, created commands, and executed SQL.

In stage 4, `CreateOrder` only knows that an order must be saved.

The concrete storage mechanism lives outside the use case.

This is the first dependency inversion in the realization.

## What did not change

We did not introduce Repository Pattern as a template.

`IOrderStore` exists because the use case needs one small capability. Its name and shape come from that need.

We also did not introduce a DI container. Both executable entries construct `SqliteOrderStore` explicitly and pass it to the use case.

The next stage should add a second external capability and check whether the same relationship appears again.
