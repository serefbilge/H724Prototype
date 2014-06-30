using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace H724.UI.Web.Models
{
    public class RoomReservationModel
    {
        [Required]
        public string email { get; set; }
        [Required]
        public string firstName { get; set; }
        [Required]
        public string lastName { get; set; }
        [Required]
        public string homePhone { get; set; }
        [Required]
        public string workPhone { get; set; }
        [Required]
        public string creditCardType { get; set; }
        [Required]
        public string creditCardNumber { get; set; }
        [Required]
        public string creditCardIdentifier { get; set; }
        [Required]
        public string creditCardExpirationMonth { get; set; }
        [Required]
        public string creditCardExpirationYear { get; set; }
        [Required]
        public string postalCode { get; set; }
        [Required]
        public string address { get; set; }
        public string currencyCode { get; set; }
        public string hotelId { get; set; }
        public string arrivalDate { get; set; }
        public string departureDate { get; set; }
        public string supplierType { get; set; }
        public string rateKey { get; set; }
        public string roomTypeCode { get; set; }
        public string rateCode { get; set; }
        public string chargeableRate { get; set; }
        public string bedTypeId { get; set; }
        public string smokingPreferences { get; set; }
        public string city { get; set; }
        public string stateProvinceCode { get; set; }
        public string countryCode { get; set; }
        public string numberOfAdults { get; set; }
        public string numberOfChildren { get; set; }
        
        public string Age { get; set; }
        



    }
}