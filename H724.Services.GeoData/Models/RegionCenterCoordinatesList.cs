using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace H724.Services.GeoData.Models
{
    public class RegionCenterCoordinatesList : BaseEntity
    {
        public string RegionID { get; set; }
        public string RegionName { get; set; }
        public string CenterLatitude { get; set; }
        public string CenterLongitude { get; set; }
    }
}
