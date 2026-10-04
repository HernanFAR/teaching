var builder = WebApplication.CreateBuilder(args);
builder.WebHost.UseUrls("http://localhost:5099");

var app = builder.Build();

app.MapPost("/order-created", (OrderCreatedWebhook payload) =>
{
    Console.WriteLine(
        $"Orden creada: {payload.OrderId} · total {payload.Total}");

    return Results.NoContent();
});

app.Run();

public sealed record OrderCreatedWebhook(Guid OrderId, decimal Total);
