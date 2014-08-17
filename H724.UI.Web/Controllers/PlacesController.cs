using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using H724.Services.Expedia.Hotels.Models.Request;
using H724.Services.GeoData.Services;
using H724.Services.Google.Places.Api;
using H724.Services.Google.Places.Models.Autocomplete;
using H724.UI.Web.Helpers;
using Ninject;
using H724.Services.Expedia.Hotels.Api;

namespace H724.UI.Web.Controllers
{
    /// <summary>
    /// Google Places API Service Consumer
    /// The Places Controller is simply a controller
    /// that consumes the Google API Service Interface.
    /// 
    /// I use dependency injection to inject the implementation
    /// of the IPlacesService contract. The binding is done
    /// at compile time but the injection is done at runtime
    /// per http web request
    /// </summary>
    public class PlacesController : BaseExpediaController
    {
        [Inject]
        public PlacesController(AbstractExpediaService expediaService, IPlacesService placesService, IGeoDataService geoDataService)
        {
            if (expediaService == null) // Guard clause
            {
                throw new ArgumentNullException("expediaService");
            }

            if (placesService == null) // Guard Clause
            {
                throw new ArgumentNullException("placesService");
            }

            if (placesService == null) // Guard Clause
            {
                throw new ArgumentNullException("geoDataService");
            }

            _expediaService = expediaService;
            _placesService = placesService;
            _geoDataService = geoDataService;
        }

        /// <summary>
        /// https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Car&sensor=false&key=AIzaSyDm7lXUQTaEvPo-eghcFIo2VjJvyKawKUo
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        [Ajax]
        [HttpGet]
        public JsonResult AutoSuggestDestination(string text)
        {
            var request = new AutocompletionRequest { Sensor = false, Input = text, Types = "geocode" };
            var response = _placesService.Autocomplete(request);
            var projection = response.Predictions.Select(prediction => new { destination = prediction.Description, suggestion = prediction.Description });

            var request2 = new LocationInfoRequest { DestinationString = text };

            var response2 = _expediaService.GetGeoSearchWithString(request2.DestinationString, 2);

            var testResult = GetActivePropertyCity(request2.DestinationString);

            return Json(projection.ToList(), JsonRequestBehavior.AllowGet);
        }

        // Test
        private string GetActivePropertyCity(string key)
        {
            var result = _geoDataService.GetActivePropertyCity(key);

            return result;
        }

        /// <summary>
        /// You can see how the first value is most relevant, all we need to do is check the type is "locality" or "sublocality"
        /// https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Car&sensor=false&key=AIzaSyDm7lXUQTaEvPo-eghcFIo2VjJvyKawKUo
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        [Ajax]
        [HttpGet]
        public JsonResult AutoSuggestCity(string text)
        {
            var request = new AutocompletionRequest { Sensor = false, Input = text };
            var response = _placesService.Autocomplete(request);
            var predictions = response.Predictions.Where((prediction) => prediction.Types.Any((type) => type.Equals("sublocality") || type.Equals("locality")));
            var projection = predictions.Select(prediction => new { description = prediction.Description, suggestion = prediction.Terms.First().Value });

            return Json(projection.ToList(), JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// You can see how the first value is most relevant, all we need to do is check the type is "administrative_area_level_2"
        /// This should be our county / province 
        /// https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Surrey&sensor=false&key=AIzaSyDm7lXUQTaEvPo-eghcFIo2VjJvyKawKUo
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        [Ajax]
        [HttpGet]
        public JsonResult AutoSuggestCounty(string text)
        {
            var request = new AutocompletionRequest { Sensor = false,  Input = text };
            var response = _placesService.Autocomplete(request);
            var predictions = response.Predictions.Where(prediction => prediction.Types.Any(type => type.Equals("administrative_area_level_2")));
            var projection = predictions.Select(prediction => new { suggestion = prediction.Terms.First().Value, description = prediction.Description });

            return Json(projection.ToList(), JsonRequestBehavior.AllowGet);
        }
    }
}
