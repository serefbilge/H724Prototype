using System.Diagnostics;
using System.Reflection;
using System.Web.Mvc;
using H724.Services.Expedia.Hotels.Api;
using H724.Services.GeoData.Services;
using H724.Services.Google.Places.Api;
using H724.UI.Web.Filters;

namespace H724.UI.Web.Controllers
{
    [SessionFilter]
    public class BaseExpediaController : BaseController
    {
        /// <summary>
        /// The injected implementation
        /// </summary>
        protected AbstractExpediaService _expediaService;
        protected IPlacesService _placesService;
        protected IGeoDataService _geoDataService;

        /// <summary>
        /// Since there are parts of the expedia request which should always include some values
        /// we ensure any expedia requests use the custom session filter attribute 
        /// to set the ip and user agent when sending the expedia request
        /// </summary>
        public virtual void CommonWebRequestInjector()
        {
            Debug.WriteLine(MethodBase.GetCurrentMethod().Name + " Called by " + this.GetType().Name);

            _expediaService.CustomerSessionId = Session["CustomerSessionId"] as string;
            _expediaService.CustomerIpAddress = HttpContext.Request.UserHostAddress;
            _expediaService.CustomerUserAgent = HttpContext.Request.UserAgent;
        }
    }
}