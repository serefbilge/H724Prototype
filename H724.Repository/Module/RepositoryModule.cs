using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Ninject.Modules;
using Ninject.Web.Common;

namespace H724.Repository.Module
{
    public class RepositoryModule : NinjectModule
    {
        public override void Load()
        {
            Bind(typeof(IRepository<>))
                 .To(typeof(BaseRepository<>))
                 .InRequestScope()
                 .OnActivation((context, service) => Debug.WriteLine("Geo Lookup Service Activated"))
                 .OnDeactivation((context, service) => Debug.WriteLine("Geo Loopup Service Deactivated"));
        }
    }
}
