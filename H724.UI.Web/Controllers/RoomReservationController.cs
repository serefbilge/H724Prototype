using H724.Services.Expedia.Hotels.Api;
using H724.Services.Expedia.Hotels.Api.Impl;
using H724.Services.Expedia.Hotels.Models;
using H724.Services.Expedia.Hotels.Models.Request;
using H724.Services.Expedia.Hotels.Models.RouteParameters;
using H724.UI.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace H724.UI.Web.Controllers
{
    public class RoomReservationController : Controller
    {
        //
        // GET: /RoomReservation/

        public ActionResult Index()
        {
            return View();
        }
        public ActionResult SetRoomsData(string currencyCode, string hotelId, string arrivalDate, string departureDate, string supplierType,
            string rateKey, string roomTypeCode, string rateCode, string chargeableRate, string bedTypeId, string smokingPreferences,
            string city, string stateProvinceCode, string countryCode, string numberOfAdults, string numberOfChildren, string Age)
        {
            HotelRoomReservationRequest objRoomReservation = new HotelRoomReservationRequest();
            //AbstractExpediaService expediaService;
            //Models.RoomReservationModel objRoomReservation = new Models.RoomReservationModel();
            objRoomReservation.CurrencyCode = currencyCode;
            objRoomReservation.HotelId = Convert.ToInt64(hotelId);
            objRoomReservation.ArrivalDate = Convert.ToDateTime(arrivalDate);
            objRoomReservation.DepartureDate = Convert.ToDateTime(departureDate);
            objRoomReservation.SupplierType = supplierType;
            objRoomReservation.RateKey = rateKey;
            objRoomReservation.RoomTypeCode = roomTypeCode;
            objRoomReservation.RateCode = rateCode;
            objRoomReservation.ChargeableRate = Convert.ToDecimal(chargeableRate);
            RestExpediaService s = new RestExpediaService();
            s.GetHotelRoomReservation(objRoomReservation);
            //_expediaService = expediaService;
            //_expediaService.GetHotelRoomReservation(objRoomReservation);
            //_exp.GetHotelRoomReservation(objRoomReservation);

            //objRoomReservation.ReservationInfo = smokingPreferences;
            //objRoomReservation. = city;
            //objRoomReservation. = stateProvinceCode;
            //objRoomReservation.CountryCode = countryCode;
            //objRoomReservation.NumberOfAdults = numberOfAdults;
            //objRoomReservation.NumberOfChildren = numberOfChildren;
            //objRoomReservation.Age = Age;

            return View(objRoomReservation);
        }

        //[HttpPost]
        //public ActionResult Booking(Models.RoomReservationModel objRoomReserve)
        //{

        //    return View(objRoomReserve);
        //}

        [HttpGet]
        public ActionResult RoomBooking(Models.RoomReservationModel objRoomReserve)
        {
            if (!ModelState.IsValid)
            {
                return RedirectToAction("Reservation", "Rooms", objRoomReserve);

            }
            var b = Session["roomGroup"];
            //AbstractExpediaService expedia;
            //expedia.Cid = 55505;
            //expedia.MinorRev = 99;
            //expedia.ApiKey = "rs3m6mzwdz2sxuxtmsqtup8r";
            //expedia.Locale = "en_US";
            //expedia.CurrencyCode = objRoomReserve.currencyCode;
            return View();
            //tblRoomsReservation objRoomRes = new tblRoomsReservation();

            //if (ModelState.IsValid)
            //{
            //    List<tblRoomsReservation> lstUserData = new List<tblRoomsReservation>();
            //    string url = "https://api.eancdn.com/ean-services/rs/hotel/v3/res?cid=55505&minorRev=99&apiKey=rs3m6mzwdz2sxuxtmsqtup8r&locale=en_US&currencyCode=" + objRoomReserve.currencyCode + "&xml=<HotelRoomReservationRequest><hotelId>" + objRoomReserve.hotelId + "</hotelId><arrivalDate>" + objRoomReserve.arrivalDate + "</arrivalDate><departureDate>" + objRoomReserve.departureDate + "</departureDate><supplierType>" + objRoomReserve.supplierType + "</supplierType><rateKey>" + objRoomReserve.rateKey + "></rateKey><roomTypeCode>" + objRoomReserve.roomTypeCode + "</roomTypeCode><rateCode>" + objRoomReserve.rateCode + "</rateCode><chargeableRate>" + objRoomReserve.chargeableRate + "</chargeableRate><RoomGroup><Room><numberOfAdults>" + objRoomReserve.numberOfAdults + "</numberOfAdults><numberOfChildren>" + objRoomReserve.numberOfChildren + "</numberOfChildren><childAges>" + objRoomReserve.Age + "</childAges><firstName>test</firstName><lastName>tester</lastName><bedTypeId>" + objRoomReserve.bedTypeId + "</bedTypeId><smokingPreference>" + objRoomReserve.smokingPreferences + "</smokingPreference></Room></RoomGroup><ReservationInfo><email>" + objRoomReserve.email + "</email><firstName>" + objRoomReserve.firstName + "</firstName><lastName>" + objRoomReserve.lastName + "</lastName><homePhone>" + objRoomReserve.homePhone + "</homePhone><workPhone>" + objRoomReserve.workPhone + "</workPhone><creditCardType>" + objRoomReserve.creditCardType + "</creditCardType><creditCardNumber>" + objRoomReserve.creditCardNumber + "</creditCardNumber><creditCardIdentifier>" + objRoomReserve.creditCardIdentifier + "</creditCardIdentifier><creditCardExpirationMonth>" + objRoomReserve.creditCardExpirationMonth + "</creditCardExpirationMonth><creditCardExpirationYear>" + objRoomReserve.creditCardExpirationYear + "</creditCardExpirationYear></ReservationInfo><AddressInfo><address1>" + objRoomReserve.address + "</address1><city>" + objRoomReserve.city + "</city><stateProvinceCode>" + objRoomReserve.stateProvinceCode + "</stateProvinceCode><countryCode>" + objRoomReserve.countryCode + "</countryCode><postalCode>" + objRoomReserve.postalCode + "</postalCode></AddressInfo></HotelRoomReservationRequest>";
            //    WebRequest request = WebRequest.Create(url);
            //    request.ContentType = "text/xml";
            //    request.Timeout = 1400000;
            //    request.Method = "POST";
            //    request.ContentLength = 0;
            //    WebResponse response = request.GetResponse();
            //    Stream dataStream = response.GetResponseStream();
            //    StreamReader reader = new StreamReader(dataStream);
            //    string responseFromServer = reader.ReadToEnd();
            //    string output = JsonConvert.SerializeObject(responseFromServer);
            //    var deserializedProducttt = JsonConvert.DeserializeObject(output);// .DeserializeObject<DataSet>(output);
            //    XmlDocument doc = JsonConvert.DeserializeXmlNode(responseFromServer);
            //    string xml = Convert.ToString(doc.InnerXml);
            //    DataSet ds = new DataSet();
            //    ds.ReadXml(new StringReader(xml));
            //    RoomReservationModel objroomReservationModel = new RoomReservationModel();
            //    try
            //    {
            //        using (tblRoomsReservationDataContext db = new tblRoomsReservationDataContext())
            //        {
            //            objRoomRes.CustomerSessionId = Convert.ToString(ds.Tables[0].Rows[0]["customerSessionId"]);
            //            objRoomRes.ArrivalDate = Convert.ToString(ds.Tables[0].Rows[0]["arrivalDate"]);
            //            objRoomRes.DepartureDate = Convert.ToString(ds.Tables[0].Rows[0]["departureDate"]);
            //            objRoomRes.ConfirmationNo = Convert.ToString(ds.Tables[0].Rows[0]["confirmationNumbers"]);
            //            objRoomRes.HotelAddress = Convert.ToString(ds.Tables[0].Rows[0]["hotelAddress"]);
            //            objRoomRes.HotelCity = Convert.ToString(ds.Tables[0].Rows[0]["hotelCity"]);
            //            objRoomRes.HotelName = Convert.ToString(ds.Tables[0].Rows[0]["hotelName"]);
            //            objRoomRes.ItineraryId = Convert.ToString(ds.Tables[0].Rows[0]["itineraryId"]);
            //            objRoomRes.ReservationStatus = Convert.ToString(ds.Tables[0].Rows[0]["reservationStatusCode"]);
            //            objRoomRes.RoomDescription = Convert.ToString(ds.Tables[0].Rows[0]["roomDescription"]);
            //            db.tblRoomsReservations.InsertOnSubmit(objRoomRes);            //            db.SubmitChanges();
            //            //lstUserData.Add(objRoomRes);
            //        }
            //    }
            //    catch (Exception ex)
            //    {

            //    }
            //}
            //    return View(objRoomRes);

        }

        public AbstractExpediaService _expediaService { get; set; }
    }
}
