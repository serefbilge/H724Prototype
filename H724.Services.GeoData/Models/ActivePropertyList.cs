using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace H724.Services.GeoData.Models
{
    public class ActivePropertyList: BaseEntity
    {
        public string EANHotelID { get; set; }
        public string SequenceNumber { get; set; }
        public string Name { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string StateProvince { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string AirportCode { get; set; }
        public string PropertyCategory { get; set; }
        public string PropertyCurrency { get; set; }
        public string StarRating { get; set; }
        public string Confidence { get; set; }
        public string SupplierType { get; set; }
        public string Location { get; set; }
        public string ChainCodeID { get; set; }
        public string RegionID { get; set; }
        public string HighRate { get; set; }
        public string LowRate { get; set; }
        public string CheckInTime { get; set; }
        public string CheckOutTime { get; set; }
    }
}
