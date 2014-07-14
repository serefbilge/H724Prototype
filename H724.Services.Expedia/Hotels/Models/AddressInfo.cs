using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace H724.Services.Expedia.Hotels.Models
{
    [Serializable]
    public class AddressInfo
    {
        public string Address1 { get; set; }
        public string City { get; set; }
        public string StateProvinceCode { get; set; }
        public string CountryCode { get; set; }
        public string PostalCode { get; set; }
    }
}
