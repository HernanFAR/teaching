using Teaching.CleanArchitecture.Stage07.Domain;

namespace Teaching.CleanArchitecture.Stage07.Application;

public static class CreateOrder
{
    public static async Task<CreateOrderResult> ExecuteAsync(
        IReadOnlyList<CreateOrderItem> items,
        IOrderStore orders,
        IOrderCreatedNotifier notifier)
    {
        var order = Order.Create(
            items
                .Select(item => new OrderLine(
                    item.ProductId,
                    item.Quantity,
                    item.UnitPrice))
                .ToArray());

        await orders.SaveAsync(
            new OrderToSave(order.Id, order.Total));

        await notifier.NotifyAsync(
            new OrderCreatedNotification(order.Id, order.Total));

        return new CreateOrderResult(order.Id, order.Total);
    }
}

public sealed record CreateOrderItem(
    string ProductId,
    int Quantity,
    decimal UnitPrice);

public sealed record CreateOrderResult(
    Guid OrderId,
    decimal Total);
