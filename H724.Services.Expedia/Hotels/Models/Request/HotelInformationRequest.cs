
using System.Collections.Generic;

namespace H724.Services.Expedia.Hotels.Models.Request
{
    public class HotelInformationRequest
    {
        public int HotelId { get; set; }
        public List<Options> Options { get; set; }
    }
}