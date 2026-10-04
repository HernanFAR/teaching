using Teaching.CleanArchitecture.Stage03;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

const string connectionString = "Data Source=orders.db";

await OrderDatabase.InitializeAsync(connectionString);

app.MapPost("/orders", async (CreateOrderRequest request) =>
{
    try
    {
        var result = await CreateOrder.ExecuteAsync(
            request.Items
                .Select(item => new CreateOrderItem(item.ProductId, item.Quantity, item.UnitPrice))
                .ToArray(),
            connectionString);

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
