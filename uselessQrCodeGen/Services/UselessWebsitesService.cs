using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;

namespace uselessQrCodeGen.Services
{
    public class UselessWebsitesService
    {
        private readonly string _apiKey;
        private List<string> _result;

        public UselessWebsitesService(IConfiguration configuration)
        {
            _apiKey = "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";
            _result = new List<string>()
                {
                    "https://theuselessweb.com/",
                    "https://www.koalastothemax.com/",
                    "http://www.republiquedesmangues.fr/",
                    "https://pointerpointer.com/",
                    "http://www.movenowthinklater.com/",
                    "http://www.randomwebsite.com/",
                    "https://www.boredbutton.com/",
                    "https://findtheinvisiblecow.com/",
                    "http://endless.horse/",
                    "https://www.trypapertoss.com/",
                    "https://www.staggeringbeauty.com/",
                    "http://iloveyoulikeafatkidlovescake.com/",
                    "http://www.ismycomputeron.com/",
                    "http://www.fallingfalling.com/",
                    "http://www.thequietplaceproject.com/",
                    "http://www.partridgegetslucky.com/",
                    "https://puginarug.com/",
                    "http://www.koalastothemax.com/",
                    "https://remoji.com/",
                    "http://smashthewalls.com/",
                    "https://www.donothingfor2minutes.com/",
                    "http://www.yesno.wtf/",
                    "http://www.blankwindows.com/",
                    "http://www.speedtest.net/",
                    "https://www.duolingo.com/",
                    "https://www.google.com/"
                };
        }

        public async Task<List<string>> GetUselessWebsitesJsonAsync()
        {
            var prompt = "Liste 10 URLs de sites inúteis e divertidos, apenas as URLs em um array JSON.";

            using var client = new HttpClient();
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _apiKey);

            var requestBody = new
            {
                model = "gpt-3.5-turbo", // ou "gpt-4" se disponível
                messages = new[]
                {
                    new { role = "user", content = prompt }
                },
                max_tokens = 300,
                temperature = 0.7
            };

            var content = new StringContent(JsonSerializer.Serialize(requestBody), Encoding.UTF8, "application/json");
            var response = await client.PostAsync("https://api.openai.com/v1/chat/completions", content);

            if (!response.IsSuccessStatusCode)
                return null;

            var responseString = await response.Content.ReadAsStringAsync();

            // O OpenAI retorna a resposta em choices[0].message.content
            using var doc = JsonDocument.Parse(responseString);
            var text = doc.RootElement
                .GetProperty("choices")[0]
                .GetProperty("message")
                .GetProperty("content")
                .GetString();

            // Tente extrair o array de URLs do texto retornado
            var start = text.IndexOf('[');
            var end = text.IndexOf(']');
            if (start >= 0 && end > start)
            {
                var jsonArray = text.Substring(start, end - start + 1);
                try
                {
                    var urls = JsonSerializer.Deserialize<List<string>>(jsonArray);
                    return urls;
                }
                catch
                {
                    // Se não conseguir desserializar, retorna null
                    return _result;
                }
            }

            return _result;

        }
    }
}
