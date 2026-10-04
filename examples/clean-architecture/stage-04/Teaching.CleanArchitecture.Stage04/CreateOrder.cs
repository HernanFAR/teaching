namespace Teaching.CleanArchitecture.Stage04;

public static class CreateOrder
{
    public static async Task<CreateOrderResult> ExecuteAsync(
        IReadOnlyList<CreateOrderItem> items,
        IOrderStore orders)
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
        var order = new OrderToSave(Guid.NewGuid(), total);

        await orders.SaveAsync(order);

        return new CreateOrderResult(order.OrderId, order.Total);
    }
}

public interface IOrderStore
{
    Task SaveAsync(OrderToSave order);
}

public sealed record CreateOrderItem(string ProductId, int Quantity, decimal UnitPrice);

public sealed record OrderToSave(Guid OrderId, decimal Total);

public sealed record CreateOrderResult(Guid OrderId, decimal Total);
