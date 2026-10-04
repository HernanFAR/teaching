namespace Teaching.CleanArchitecture.Stage07.Application;

public interface IOrderStore
{
    Task SaveAsync(OrderToSave order);
}

public interface IOrderCreatedNotifier
{
    Task NotifyAsync(OrderCreatedNotification notification);
}

public sealed record OrderToSave(Guid OrderId, decimal Total);

public sealed record OrderCreatedNotification(Guid OrderId, decimal Total);
