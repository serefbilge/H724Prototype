using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace H724.Services.GeoData.Models
{
    public class CountryList
    {
        public string CountryID { get; set; }
        public string LanguageCode { get; set; }
        public string CountryName { get; set; }
        public string CountryCode { get; set; }
        public string Transliteration { get; set; }
        public string ContinentID { get; set; }
    }
}
