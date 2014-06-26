using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace H724.Services.Expedia.Hotels.Models.Request
{
    public class HotelRoomReservationRequest
    {
        public long HotelId { get; set; }
        public string CurrencyCode { get; set; }
        public DateTime ArrivalDate { get; set; }
        public DateTime DepartureDate { get; set; }
        public string SupplierType { get; set; }
        public string RateKey { get; set; }
        public string RoomTypeCode { get; set; }
        public string RateCode { get; set; }
        public decimal ChargeableRate { get; set; }
        public int RoomsCount { get; set; }
        public RoomGroup RoomGroup { get; set; }
        public ReservationInfo ReservationInfo { get; set; }
        public AddressInfo AddressInfo { get; set; }
    }
}
