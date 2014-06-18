using System.Collections.Generic;

namespace H724.Services.Google.Places.Models.Autocomplete
{
    public class Prediction
    {
        public string Description { get; set; }
        public List<string> Types { get; set; }
        public List<Term> Terms { get; set; }
    }
}