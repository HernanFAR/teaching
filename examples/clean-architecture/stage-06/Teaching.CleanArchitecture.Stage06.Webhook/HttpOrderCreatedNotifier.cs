using System.Net.Http.Json;
using Teaching.CleanArchitecture.Stage06.Application;

namespace Teaching.CleanArchitecture.Stage06.Webhook;

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
