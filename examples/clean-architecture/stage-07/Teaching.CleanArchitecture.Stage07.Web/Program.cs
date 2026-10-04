using Teaching.CleanArchitecture.Stage07.Application;
using Teaching.CleanArchitecture.Stage07.Composition;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var application = await OrderApplicationComposition.CreateAsync();

app.MapPost("/orders", async (CreateOrderRequest request) =>
{
    try
    {
        var result = await CreateOrder.ExecuteAsync(
            request.Items
                .Select(item => new CreateOrderItem(
                    item.ProductId,
                    item.Quantity,
                    item.UnitPrice))
                .ToArray(),
            application.Orders,
            application.Notifier);

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

public sealed record CreateOrderRequest(
    IReadOnlyList<CreateOrderItemRequest> Items);

public sealed record CreateOrderItemRequest(
    string ProductId,
    int Quantity,
    decimal UnitPrice);

public sealed record CreateOrderResponse(
    Guid OrderId,
    decimal Total);
