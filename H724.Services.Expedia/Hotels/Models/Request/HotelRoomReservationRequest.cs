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
        public string Name { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string SmokingPreferences { get; set; }
        public string Email { get; set; }
        public string WorkPhone { get; set; }
        public string HomePhone { get; set; }
        public string CardType { get; set; }
        public string Cardnumber { get; set; }
        public string CardHolderFirstName { get; set; }
        public string CardHolderLastName { get; set; }
        public string CardExpirationMonth { get; set; }
        public string CardExpirationYear { get; set; }
        public string Country { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }
        public string PostalCode { get; set; }
        public string State { get; set; }
    }
}
