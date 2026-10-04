using System.Text.Json;
using Teaching.CleanArchitecture.Stage06.Application;
using Teaching.CleanArchitecture.Stage06.Sqlite;
using Teaching.CleanArchitecture.Stage06.Webhook;

if (args.Length != 1)
{
    Console.Error.WriteLine("Uso: dotnet run -- <marketplace-order.json>");
    return 1;
}

var orders = new SqliteOrderStore("Data Source=orders.db");
await orders.InitializeAsync();

var notifier = new HttpOrderCreatedNotifier(
    new HttpClient(),
    new Uri("http://localhost:5099/order-created"));

var json = await File.ReadAllTextAsync(args[0]);
var marketplaceOrder = JsonSerializer.Deserialize<MarketplaceOrder>(
    json,
    new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

if (marketplaceOrder is null)
{
    Console.Error.WriteLine("No se pudo leer la orden del marketplace.");
    return 1;
}

try
{
    var result = await CreateOrder.ExecuteAsync(
        marketplaceOrder.Lines
            .Select(line => new CreateOrderItem(
                line.Sku,
                line.Units,
                line.Price))
            .ToArray(),
        orders,
        notifier);

    Console.WriteLine(
        JsonSerializer.Serialize(
            new
            {
                marketplaceOrder.ExternalOrderId,
                orderId = result.OrderId,
                result.Total
            }));

    return 0;
}
catch (ArgumentException exception)
{
    Console.Error.WriteLine(exception.Message);
    return 1;
}

public sealed record MarketplaceOrder(
    string ExternalOrderId,
    IReadOnlyList<MarketplaceOrderLine> Lines);

public sealed record MarketplaceOrderLine(
    string Sku,
    int Units,
    decimal Price);
