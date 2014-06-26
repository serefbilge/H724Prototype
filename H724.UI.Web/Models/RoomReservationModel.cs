using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace H724.UI.Web.Models
{
    public class RoomReservationModel
    {
        public string customerSessionId { get; set; }
        public string itineraryId { get; set; }
        public string confirmationNumbers { get; set; }
        public string supplierType { get; set; }
        public string reservationStatus { get; set; }
        public string arrivalDate { get; set; }
        public string departureDate { get; set; }
        public string hotelName { get; set; }
        public string hotelAddress { get; set; }
        public string hotelCity { get; set; }
        public string hotelStateProvince { get; set; }
        public string hotelPostalCode { get; set; }
        public string hotelCountryCode { get; set; }
        public string roomDescription { get; set; }


    }
}