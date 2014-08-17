using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace H724.Services.GeoData.Models
{
    public class AirportCoordinatesList
    {
        public string AirportID { get; set; }
        public string AirportCode { get; set; }
        public string AirportName { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string MainCityID { get; set; }
        public string CountryCode { get; set; }
    }
}
