using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using H724.Services.Expedia.Hotels.Models;

namespace H724.UI.Web.Models
{
    [Serializable]
    public class RoomBookingWizard
    {
        public HotelInfo HotelInfo { get; set; }
        public PersonalInfo PersonalInfo {get; set; }
        public PaymentInfo PaymentInfo { get; set; }
        public AddressInfo AddressInfo { get; set; }
    }

    [Serializable]
    public class HotelInfo
    {
        public string HotelId { get; set; }
        public string CurrencyCode { get; set; }
        public string StandardCheckin { get; set; }
        public string StandardCheckout { get; set; }
        public string SelectedPrice { get; set; }
        public string SupplierType { get; set; }
        public string RateCode { get; set; }
        public string RoomTypeCode { get; set; }
        public int RoomsCount { get; set; }
        public string Name { get; set; }
        public List<Room> Rooms { get; set; }
    }

    [Serializable]
    public class PersonalInfo
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string ConfirmEmail { get; set; }
        [Required]
        public string HomePhone { get; set; }
        [Required]
        public string WorkPhone { get; set; }
    }

    [Serializable]
    public class PaymentInfo
    {
        public string CardType { get; set; }
        public string Cardnumber { get; set; }
        public string CardHolderFirstName { get; set; }
        public string CardHolderLastName { get; set; }
        public string CardExpirationMonth { get; set; }
        public string CardExpirationYear { get; set; }
    }
}