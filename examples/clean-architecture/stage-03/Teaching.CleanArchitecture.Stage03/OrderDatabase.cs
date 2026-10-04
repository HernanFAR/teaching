using Microsoft.Data.Sqlite;

namespace Teaching.CleanArchitecture.Stage03;

public static class OrderDatabase
{
    public static async Task InitializeAsync(string connectionString)
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
}
