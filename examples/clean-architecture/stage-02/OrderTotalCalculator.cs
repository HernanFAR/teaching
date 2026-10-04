public static class OrderTotalCalculator
{
    private const decimal DiscountThreshold = 100_000m;
    private const decimal DiscountRate = 0.10m;
    private const decimal MaximumDiscount = 20_000m;

    private static readonly HashSet<string> ExcludedProductIds =
        new(StringComparer.OrdinalIgnoreCase)
        {
            "gift-card"
        };

    public static decimal Calculate(IEnumerable<OrderItem> items)
    {
        var materializedItems = items.ToArray();

        var subtotal = materializedItems.Sum(item => item.UnitPrice * item.Quantity);

        var eligibleSubtotal = materializedItems
            .Where(item => !ExcludedProductIds.Contains(item.ProductId))
            .Sum(item => item.UnitPrice * item.Quantity);

        if (eligibleSubtotal < DiscountThreshold)
        {
            return subtotal;
        }

        var discount = Math.Min(
            eligibleSubtotal * DiscountRate,
            MaximumDiscount);

        return subtotal - discount;
    }
}
