using Microsoft.Data.Sqlite;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

const string connectionString = "Data Source=orders.db";

await using (var connection = new SqliteConnection(connectionString))
{
    await connection.OpenAsync();

    var createTable = connection.CreateCommand();
    createTable.CommandText =
        """
        CREATE TABLE IF NOT EXISTS orders (
            id TEXT PRIMARY KEY,
            total REAL NOT NULL
        );
        """;

    await createTable.ExecuteNonQueryAsync();
}

app.MapPost("/orders", async (CreateOrderRequest request) =>
{
    if (request.Items.Count == 0)
    {
        return Results.BadRequest(new { error = "La orden debe contener al menos un producto." });
    }

    if (request.Items.Any(item => item.Quantity <= 0 || item.UnitPrice < 0))
    {
        return Results.BadRequest(new { error = "Las cantidades deben ser positivas y los precios no pueden ser negativos." });
    }

    var total = OrderTotalCalculator.Calculate(
        request.Items.Select(item => new OrderItem(item.ProductId, item.Quantity, item.UnitPrice)));

    var orderId = Guid.NewGuid();

    await using var connection = new SqliteConnection(connectionString);
    await connection.OpenAsync();

    var insert = connection.CreateCommand();
    insert.CommandText =
        """
        INSERT INTO orders (id, total)
        VALUES ($id, $total);
        """;
    insert.Parameters.AddWithValue("$id", orderId.ToString());
    insert.Parameters.AddWithValue("$total", total);

    await insert.ExecuteNonQueryAsync();

    return Results.Created($"/orders/{orderId}", new CreateOrderResponse(orderId, total));
});

app.Run();

public sealed record CreateOrderRequest(IReadOnlyList<CreateOrderItemRequest> Items);

public sealed record CreateOrderItemRequest(string ProductId, int Quantity, decimal UnitPrice);

public sealed record CreateOrderResponse(Guid OrderId, decimal Total);

public sealed record OrderItem(string ProductId, int Quantity, decimal UnitPrice);
