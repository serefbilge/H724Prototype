using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace H724.Services.GeoData.Models
{
    public class AliasRegionList : BaseEntity
    {
        public string RegionID { get; set; }
        public string LanguageCode { get; set; }
        public string AliasString { get; set; }
    }
}
