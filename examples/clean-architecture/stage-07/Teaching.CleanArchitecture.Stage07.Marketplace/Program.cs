using System.Text.Json;
using Teaching.CleanArchitecture.Stage07.Application;
using Teaching.CleanArchitecture.Stage07.Composition;

if (args.Length != 1)
{
    Console.Error.WriteLine("Uso: dotnet run -- <marketplace-order.json>");
    return 1;
}

var application = await OrderApplicationComposition.CreateAsync();

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
        application.Orders,
        application.Notifier);

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
