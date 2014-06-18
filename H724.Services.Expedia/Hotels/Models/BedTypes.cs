using System.Collections.Generic;
using Newtonsoft.Json;

namespace H724.Services.Expedia.Hotels.Models
{
    [JsonObject]
    public class BedTypes
    {
        public int Size { get; set; }

        [JsonProperty("BedType")]
        public List<BedType> BedType { get; set; }
    }
}