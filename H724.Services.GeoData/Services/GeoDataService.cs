using System;
using System.Collections.Generic;
using System.Linq;
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

        public string GetActivePropertyCity(string key)
        {
            var obj = _activePropertyRepository.Table().FirstOrDefault();

            return obj != null ? obj.City : "";
        }
    }
}
