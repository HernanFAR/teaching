using Teaching.CleanArchitecture.Stage07.Application;
using Teaching.CleanArchitecture.Stage07.Sqlite;
using Teaching.CleanArchitecture.Stage07.Webhook;

namespace Teaching.CleanArchitecture.Stage07.Composition;

public static class OrderApplicationComposition
{
    public static async Task<OrderApplication> CreateAsync()
    {
        var orders = new SqliteOrderStore("Data Source=orders.db");
        await orders.InitializeAsync();

        var notifier = new HttpOrderCreatedNotifier(
            new HttpClient(),
            new Uri("http://localhost:5099/order-created"));

        return new OrderApplication(orders, notifier);
    }
}

public sealed record OrderApplication(
    IOrderStore Orders,
    IOrderCreatedNotifier Notifier);
