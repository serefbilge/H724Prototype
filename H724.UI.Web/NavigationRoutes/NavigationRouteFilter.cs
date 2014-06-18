using System.Web.Routing;

namespace H724.UI.Web.NavigationRoutes
{
    public class NavigationRouteFilter : INavigationRouteFilter
    {
        public bool ShouldRemove(Route route)
        {
            return true;
        }
    }
}
