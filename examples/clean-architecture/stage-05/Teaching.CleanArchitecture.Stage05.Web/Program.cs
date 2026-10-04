using Teaching.CleanArchitecture.Stage05;
using Teaching.CleanArchitecture.Stage05.Sqlite;
using Teaching.CleanArchitecture.Stage05.Webhook;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var orders = new SqliteOrderStore("Data Source=orders.db");
await orders.InitializeAsync();

var notifier = new HttpOrderCreatedNotifier(
    new HttpClient(),
    new Uri("http://localhost:5099/order-created"));

app.MapPost("/orders", async (CreateOrderRequest request) =>
{
    try
    {
        var result = await CreateOrder.ExecuteAsync(
            request.Items
                .Select(item => new CreateOrderItem(item.ProductId, item.Quantity, item.UnitPrice))
                .ToArray(),
            orders,
            notifier);

        return Results.Created(
            $"/orders/{result.OrderId}",
            new CreateOrderResponse(result.OrderId, result.Total));
    }
    catch (ArgumentException exception)
    {
        return Results.BadRequest(new { error = exception.Message });
    }
});

app.Run();

public sealed record CreateOrderRequest(IReadOnlyList<CreateOrderItemRequest> Items);

public sealed record CreateOrderItemRequest(string ProductId, int Quantity, decimal UnitPrice);

public sealed record CreateOrderResponse(Guid OrderId, decimal Total);
