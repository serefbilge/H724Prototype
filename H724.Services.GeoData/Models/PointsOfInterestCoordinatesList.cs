using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace H724.Services.GeoData.Models
{
    public class PointsOfInterestCoordinatesList : BaseEntity
    {
        public string RegionID { get; set; }
        public string RegionName { get; set; }
        public string RegionNameLong { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string SubClassification { get; set; }
    }
}
