using Newtonsoft.Json;

namespace H724.Services.Expedia.Hotels.Models
{
    [JsonObject]
    public class BedType
    {
        [JsonProperty("@id")]
        public int Id { get; set; }

        [JsonProperty("description")]
        public string Description { get; set; }
    }
}