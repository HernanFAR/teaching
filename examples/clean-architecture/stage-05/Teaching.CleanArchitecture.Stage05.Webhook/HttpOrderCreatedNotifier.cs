using System.Net.Http.Json;

namespace Teaching.CleanArchitecture.Stage05.Webhook;

public sealed class HttpOrderCreatedNotifier(
    HttpClient httpClient,
    Uri endpoint) : IOrderCreatedNotifier
{
    public async Task NotifyAsync(OrderCreatedNotification notification)
    {
        using var response = await httpClient.PostAsJsonAsync(
            endpoint,
            new
            {
                notification.OrderId,
                notification.Total
            });

        response.EnsureSuccessStatusCode();
    }
}
