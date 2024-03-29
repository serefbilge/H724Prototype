﻿using System.Web.Optimization;

namespace H724.UI.Web.App_Start
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/js").Include(
                "~/Scripts/jquery-1.9.0.js",
                "~/Scripts/jquery.rateit.js",
                //"~/Scripts/daterangepicker/date.js",
                //"~/Scripts/daterangepicker/daterangepicker.jQuery.js",
                "~/Scripts/jquery-ui-1.9.2.custom.min.js",
                "~/Scripts/bootstrap.js",
                "~/Scripts/jquery.validate.js",
                "~/scripts/jquery.validate.unobtrusive.js",
                "~/Scripts/jquery.validate.unobtrusive-custom-for-bootstrap.js"));
            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
            "~/Scripts/jquery.unobtrusive*",
            "~/Scripts/jquery.validate*"));

            bundles.Add(new StyleBundle("~/content/css").Include(
                "~/Content/bootstrap.css",
                "~/Content/H724.css",
                "~/Content/rateit.css",
                //"~/Content/ui.daterangepicker.css",
                "~/Content/themes/bootstrap/jquery-ui-1.9.2.custom.css"));

            bundles.Add(new StyleBundle("~/content/css-responsive").Include(
                "~/Content/bootstrap-responsive.css"));

            BundleTable.EnableOptimizations = false; // Minification is causing me problems
        }
    }
}