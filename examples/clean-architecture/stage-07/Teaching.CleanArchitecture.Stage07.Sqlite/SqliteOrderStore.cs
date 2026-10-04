using Microsoft.Data.Sqlite;
using Teaching.CleanArchitecture.Stage07.Application;

namespace Teaching.CleanArchitecture.Stage07.Sqlite;

public sealed class SqliteOrderStore(string connectionString) : IOrderStore
{
    public async Task InitializeAsync()
    {
        await using var connection = new SqliteConnection(connectionString);
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

    public async Task SaveAsync(OrderToSave order)
    {
        await using var connection = new SqliteConnection(connectionString);
        await connection.OpenAsync();

        var insert = connection.CreateCommand();
        insert.CommandText =
            """
            INSERT INTO orders (id, total)
            VALUES ($id, $total);
            """;
        insert.Parameters.AddWithValue("$id", order.OrderId.ToString());
        insert.Parameters.AddWithValue("$total", order.Total);

        await insert.ExecuteNonQueryAsync();
    }
}
