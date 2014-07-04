using H724.Services.Expedia.Hotels.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace H724.UI.Web.Models
{
    public class RoomReservationModel
    {
        public string Id { get; set; }
        public string CurrencyCode { get; set; }
        public string StandardCheckin { get; set; }
        public string StandardCheckout { get; set; }
        public string SelectedPrice { get; set; }
        public string SupplierType { get; set; }
        public string RateCode { get; set; }
        public string RoomTypeCode { get; set; }
        public string RoomsCount { get; set; }
        public string Name { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string SmokingPreferences { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string HomePhone { get; set; }
        public string WorkPhone { get; set; }

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
        public RoomGroup RoomGroup { get; set; }
        public ReservationInfo ReservationInfo { get; set; }
        public AddressInfo AddressInfo { get; set; }
        public List<H724.Services.Expedia.Hotels.Models.Room> Rooms { get; set; }
    }
}