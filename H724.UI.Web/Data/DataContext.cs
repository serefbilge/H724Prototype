using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Linq;
using System.Text;
using System.Web;
using H724.Repository;
using H724.Services.GeoData.Models;

namespace H724.UI.Web.Data
{
    public class DataContext : DbContext, IDbContext
    {
        public DataContext()
            : base("DefaultConnection")
        {
        }

        public IDbSet<ActivePropertyList> ActivePropertyList { get; set; }
        public IDbSet<AirportCoordinatesList> AirportCoordinatesList { get; set; }
        public IDbSet<AliasRegionList> AliasRegionList { get; set; }
        public IDbSet<CityCoordinatesList> CityCoordinatesList { get; set; }
        public IDbSet<CountryList> CountryList { get; set; }
        public IDbSet<NeighborhoodCoordinatesList> NeighborhoodCoordinatesList { get; set; }
        public IDbSet<ParentRegionList> ParentRegionList { get; set; }
        public IDbSet<PointsOfInterestCoordinatesList> PointsOfInterestCoordinatesList { get; set; }
        public IDbSet<RegionCenterCoordinatesList> RegionCenterCoordinatesList { get; set; }
        public IDbSet<RegionEANHotelIDMapping> RegionEANHotelIDMapping { get; set; }

        public override int SaveChanges()
        {
            try
            {
                return base.SaveChanges();
            }
            catch (DbEntityValidationException e)
            {
                foreach (var eve in e.EntityValidationErrors)
                {
                    string error =
                        string.Format("Entity of type \"{0}\" in state \"{1}\" has the following validation errors:",
                            eve.Entry.Entity.GetType().Name, eve.Entry.State);

                    var sb = new StringBuilder();

                    foreach (var ve in eve.ValidationErrors)
                    {
                        string local = string.Format("- Property: \"{0}\", Error: \"{1}\"", ve.PropertyName, ve.ErrorMessage);

                        sb.Append(local.ToString());
                    }
                }
                throw;
            }
        }

        public new IDbSet<T> Set<T>() where T : class
        {
            return base.Set<T>();
        }
    }
}