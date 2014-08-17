using System;
using System.Diagnostics;
using System.Web;
using H724.Repository.Module;
using H724.Services.Expedia.Hotels.Api;
using H724.Services.GeoData.Module;
using H724.Services.Google.DistanceMatrix.Api;
using H724.Services.Google.Places.Api;
using H724.UI.Web.Controllers;
using H724.UI.Web.Module;
using Microsoft.Web.Infrastructure.DynamicModuleHelper;
using Ninject;
using Ninject.Web.Common;
using H724.Services.Expedia.Module;
using H724.Services.GeoIp.Module;
using H724.Services.Google.Module;
using Ninject.Modules;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(H724.UI.Web.NinjectWebCommon), "Start")]
[assembly: WebActivatorEx.ApplicationShutdownMethodAttribute(typeof(H724.UI.Web.NinjectWebCommon), "Stop")]

namespace H724.UI.Web
{
    public static class NinjectWebCommon 
    {
        private static readonly Bootstrapper bootstrapper = new Bootstrapper();

        /// <summary>
        /// Starts the application
        /// </summary>
        public static void Start() 
        {
            DynamicModuleUtility.RegisterModule(typeof(OnePerRequestHttpModule));
            DynamicModuleUtility.RegisterModule(typeof(NinjectHttpModule));
            bootstrapper.Initialize(CreateKernel);
        }
        
        /// <summary>
        /// Stops the application.
        /// </summary>
        public static void Stop()
        {
            bootstrapper.ShutDown();
        }
        
        /// <summary>
        /// Creates the kernel that will manage your application.
        /// </summary>
        /// <returns>The created kernel.</returns>
        private static IKernel CreateKernel()
        {
            var kernel = new StandardKernel();
            kernel.Bind<Func<IKernel>>().ToMethod(ctx => () => new Bootstrapper().Kernel);
            kernel.Bind<IHttpModule>().To<HttpApplicationInitializationHttpModule>();
            
            RegisterServices(kernel);
            return kernel;
        }

        /// <summary>
        /// Load your modules or register your services here!
        /// </summary>
        /// <param name="kernel">The kernel.</param>
        private static void RegisterServices(IKernel kernel)
        {
            kernel.Load(new INinjectModule[]
                {
                    new RepositoryModule(),
                    new GeoDataModule(),
                    new GeoModule(),
                    new ExpediaModule(),
                    new GoogleModule(),
                    new CommonModule() 
                });
        }        
    }
}
