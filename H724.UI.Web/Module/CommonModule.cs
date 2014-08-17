using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using H724.Repository;
using H724.UI.Web.Data;
using Ninject.Modules;
using Ninject.Web.Common;

namespace H724.UI.Web.Module
{
    public class CommonModule : NinjectModule
    {
        public override void Load()
        {
            Bind<IDbContext>()
                 .To<DataContext>()
                 .InRequestScope()
                 .OnActivation((context, service) => Debug.WriteLine("Geo Lookup Service Activated"))
                 .OnDeactivation((context, service) => Debug.WriteLine("Geo Loopup Service Deactivated"));
        }
    }
}