using System.Web.Mvc;
using H724.UI.Web.Controllers;

namespace H724.UI.Web.Filters
{
    public class SessionFilterAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var expediaController = filterContext.Controller as BaseExpediaController;

            if (expediaController != null)
            {
                // All expedia based API requests we must include the IP Address and User Agent of the user
                expediaController.CommonWebRequestInjector();
            }

            base.OnActionExecuting(filterContext);
        }
    }
}