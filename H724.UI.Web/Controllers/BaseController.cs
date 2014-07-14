using System;
using System.Web.Mvc;
using H724.UI.Web.Helpers;

namespace H724.UI.Web.Controllers
{
    public class BaseController: Controller
    {
        #region Bootstrap Messages
        protected void Attention(string message)
        {
            TempData.Add(Alerts.ATTENTION, message);
        }

        protected void Success(string message)
        {
            TempData.Add(Alerts.SUCCESS, message);
        }

        protected void Information(string message)
        {
            TempData.Add(Alerts.INFORMATION, message);
        }

        protected void Information(MvcHtmlString message)
        {
            TempData.Add(Alerts.INFORMATION, message);
        }

        protected void Error(string message)
        {
            TempData.Add(Alerts.ERROR, message);
        }

        protected void SetViewDataError()
        {
            if (TempData.ContainsKey(Alerts.ERROR)) return;

            var errorMessage = "";

            foreach (ModelState modelState in ViewData.ModelState.Values)
            {
                foreach (ModelError error in modelState.Errors)
                {
                    errorMessage += error.ErrorMessage + Environment.NewLine;
                }
            }

            Error(errorMessage);
        }
        #endregion

        protected void TempDataToObject<T>(ref T arg, string argName)
        {
            if (TempData[argName] != null) arg = (T)TempData[argName];
        }
    }
}
