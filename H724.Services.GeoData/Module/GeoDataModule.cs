using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using H724.Services.GeoData.Services;
using Ninject.Modules;
using Ninject.Web.Common;

namespace H724.Services.GeoData.Module
{
    public class GeoDataModule : NinjectModule
    {
        public override void Load()
        {
            Bind<IGeoDataService>()
                 .To<GeoDataService>()
                 .InRequestScope()
                 .OnActivation((context, service) => Debug.WriteLine("Geo Lookup Service Activated"))
                 .OnDeactivation((context, service) => Debug.WriteLine("Geo Loopup Service Deactivated"));
        }
    }
}
