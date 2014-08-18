using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using H724.Repository;
using H724.Services.GeoData.Models;

namespace H724.Services.GeoData.Services
{
    public class GeoDataService : IGeoDataService
    {
        private readonly IRepository<ActivePropertyList> _activePropertyRepository;
        private readonly IRepository<PointsOfInterestCoordinatesList> _pointOfInterestCoordinatesRepository;
        private readonly IRepository<ParentRegionList> _parentRegionRepository;

        public GeoDataService(IRepository<ActivePropertyList> activePropertyRepository, IRepository<PointsOfInterestCoordinatesList> pointOfInterestCoordinatesRepository, IRepository<ParentRegionList> parentRegionRepository)
        {
            _activePropertyRepository = activePropertyRepository;
            _pointOfInterestCoordinatesRepository = pointOfInterestCoordinatesRepository;
            _parentRegionRepository = parentRegionRepository;
        }

        public List<ActivePropertyList> GetActivePropertyCity(string key)
        {
            var subKeyList = key.Split(' ').ToList().Select(x => x.Trim()).ToList();
            var actTable = _activePropertyRepository.Table();
            var poiTable = _pointOfInterestCoordinatesRepository.Table();
            var parentTable = _parentRegionRepository.Table();

            var resultList = new List<ActivePropertyList>();

            foreach (var subKey in subKeyList)
            {
                var kl = subKey.ToLower();
                var ku = subKey.ToUpper();

                var query = from ac in actTable
                            from po in poiTable
                            from pa in parentTable
                            where (po.RegionName.ToLower().Contains(kl) || po.RegionName.ToUpper().Contains(ku))
                                  &&po.RegionID == pa.RegionID 
                                  && pa.ParentRegionID == ac.RegionID
                            select ac;

                resultList.AddRange(query.Distinct().ToList());
            }
            
            return resultList;
        }
    }
}
