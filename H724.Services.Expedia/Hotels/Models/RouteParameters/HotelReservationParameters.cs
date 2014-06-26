using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace H724.Services.Expedia.Hotels.Models.RouteParameters
{
    public class HotelReservationParameters
    {

        public long Id { get; set; }
        public string CurrencyCode { get; set; }
        public DateTime StandardCheckin { get; set; }
        public DateTime StandardCheckout { get; set; }
        public Decimal SelectedPrice { get; set; }
        public string SupplierType { get; set; }
        public string RateCode { get; set; }
        public string RoomTypeCode { get; set; }
        public int RoomsCount { get; set; }
        public List<Room> Rooms { get; set; } 
    }
}
