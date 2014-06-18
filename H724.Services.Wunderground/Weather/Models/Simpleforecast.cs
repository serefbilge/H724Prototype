using System.Collections.Generic;

namespace H724.Services.Wunderground.Weather.Models
{
    public class Simpleforecast
    {
        public List<Forecastday> Forecastday { get; set; }
    }
}