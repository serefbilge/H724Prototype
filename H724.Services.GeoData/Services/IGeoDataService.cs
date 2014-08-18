using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using H724.Services.GeoData.Models;

namespace H724.Services.GeoData.Services
{
    public interface IGeoDataService
    {
        List<ActivePropertyList> GetActivePropertyCity(string key);
    }
}
