namespace Teaching.CleanArchitecture.Stage07.Domain;

public sealed class Order
{
    private const decimal DiscountThreshold = 100_000m;
    private const decimal DiscountRate = 0.10m;
    private const decimal MaximumDiscount = 20_000m;

    private static readonly HashSet<string> ExcludedProductIds =
        new(StringComparer.OrdinalIgnoreCase)
        {
            "gift-card"
        };

    private Order(Guid id, decimal total)
    {
        Id = id;
        Total = total;
    }

    public Guid Id { get; }

    public decimal Total { get; }

    public static Order Create(IReadOnlyList<OrderLine> lines)
    {
        if (lines.Count == 0)
        {
            throw new ArgumentException(
                "La orden debe contener al menos un producto.",
                nameof(lines));
        }

        if (lines.Any(line => line.Quantity <= 0 || line.UnitPrice < 0))
        {
            throw new ArgumentException(
                "Las cantidades deben ser positivas y los precios no pueden ser negativos.",
                nameof(lines));
        }

        var subtotal = lines.Sum(line => line.UnitPrice * line.Quantity);

        var eligibleSubtotal = lines
            .Where(line => !ExcludedProductIds.Contains(line.ProductId))
            .Sum(line => line.UnitPrice * line.Quantity);

        if (eligibleSubtotal < DiscountThreshold)
        {
            return new Order(Guid.NewGuid(), subtotal);
        }

        var discount = Math.Min(
            eligibleSubtotal * DiscountRate,
            MaximumDiscount);

        return new Order(Guid.NewGuid(), subtotal - discount);
    }
}

public sealed record OrderLine(
    string ProductId,
    int Quantity,
    decimal UnitPrice);
