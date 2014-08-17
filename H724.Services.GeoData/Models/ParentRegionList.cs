using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace H724.Services.GeoData.Models
{
    public class ParentRegionList : BaseEntity
    {
        public string RegionID { get; set; }
        public string RegionType { get; set; }
        public string RelativeSignificance { get; set; }
        public string SubClass { get; set; }
        public string RegionName { get; set; }
        public string RegionNameLong { get; set; }
        public string ParentRegionID { get; set; }
        public string ParentRegionType { get; set; }
        public string ParentRegionName { get; set; }
        public string ParentRegionNameLong { get; set; }
    }
}
