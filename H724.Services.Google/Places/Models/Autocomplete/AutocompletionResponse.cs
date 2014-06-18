using System.Collections.Generic;

namespace H724.Services.Google.Places.Models.Autocomplete
{
    public class AutocompletionResponse
    {
        public string Status { get; set; }
        public List<Prediction> Predictions { get; set; }
    }
}