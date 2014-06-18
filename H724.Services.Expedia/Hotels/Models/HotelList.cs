using System.Collections.Generic;

namespace H724.Services.Expedia.Hotels.Models
{
    public class HotelList
    {
        public int ActivePropertyCount { get; set; }
        public int Size { get; set; }
        public List<HotelSummary> HotelSummary { get; set; }
    }
}