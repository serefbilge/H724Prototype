﻿using System.Diagnostics;
using H724.Services.Expedia.Hotels.Api;
using H724.Services.Expedia.Hotels.Api.Fake;
using Ninject.Modules;
using Ninject.Web.Common;

namespace H724.Services.Expedia.Module
{
    /// <summary>
    /// The Expedia Service Module
    /// </summary>
    public class ExpediaModule : NinjectModule
    {
        public override void Load()
        {
            Bind<IExpediaService>().To<AbstractExpediaService>(); // The contract

            Bind<AbstractExpediaService>() // This abstract definition
                .ToProvider<ExpediaServiceProvider>() // To this implementation provider
                .InRequestScope() // in HTTP context Scope
                .OnActivation((context, service) => Debug.WriteLine("Expedia Service Activated"))
                .OnDeactivation((context, service) => Debug.WriteLine("Expedia Service Deactivated"));

            //Bind<AbstractExpediaService>()
            //   .To<FakeExpediaService>()
            //   .InRequestScope() // in HTTP context Scope
            //   .OnActivation((context, service) => Debug.WriteLine("Expedia Service Activated"))
            //   .OnDeactivation((context, service) => Debug.WriteLine("Expedia Service Deactivated"));

        }
    }
}
