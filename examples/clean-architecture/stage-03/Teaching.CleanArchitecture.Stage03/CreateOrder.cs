using Microsoft.Data.Sqlite;

namespace Teaching.CleanArchitecture.Stage03;

public static class CreateOrder
{
    public static async Task<CreateOrderResult> ExecuteAsync(
        IReadOnlyList<CreateOrderItem> items,
        string connectionString)
    {
        if (items.Count == 0)
        {
            throw new ArgumentException("La orden debe contener al menos un producto.", nameof(items));
        }

        if (items.Any(item => item.Quantity <= 0 || item.UnitPrice < 0))
        {
            throw new ArgumentException(
                "Las cantidades deben ser positivas y los precios no pueden ser negativos.",
                nameof(items));
        }

        var total = OrderTotalCalculator.Calculate(items);
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

        return new CreateOrderResult(orderId, total);
    }
}

public sealed record CreateOrderItem(string ProductId, int Quantity, decimal UnitPrice);

public sealed record CreateOrderResult(Guid OrderId, decimal Total);
