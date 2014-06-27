using H724.UI.Web.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using System.Xml;

namespace H724.UI.Web.Controllers
{
    public class BookingReservationController : Controller
    {
        //
        // GET: /BookingReservation/

        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public ActionResult bookRooms(string currencyCode, string hotelId, string arrivalDate, string departureDate, string supplierType, string rateKey, string roomTypeCode, string rateCode, string chargeableRate, string bedTypeId, string smokingPreferences, string city, string stateProvinceCode, string countryCode, string numberOfAdults, string numberOfChildren, string Age)
        {

            List<tblRoomsReservation> lstUserData = new List<tblRoomsReservation>();
            string url = "https://api.eancdn.com/ean-services/rs/hotel/v3/res?cid=55505&minorRev=99&apiKey=rs3m6mzwdz2sxuxtmsqtup8r&locale=en_US&currencyCode=" + currencyCode + "&xml=<HotelRoomReservationRequest><hotelId>" + hotelId + "</hotelId><arrivalDate>" + arrivalDate + "</arrivalDate><departureDate>" + departureDate + "</departureDate><supplierType>" + supplierType + "</supplierType><rateKey>" + rateKey + "></rateKey><roomTypeCode>" + roomTypeCode + "</roomTypeCode><rateCode>" + rateCode + "</rateCode><chargeableRate>" + chargeableRate + "</chargeableRate><RoomGroup><Room><numberOfAdults>" + numberOfAdults + "</numberOfAdults><numberOfChildren>" + numberOfChildren + "</numberOfChildren><childAges>" +Age + "</childAges><firstName>test</firstName><lastName>tester</lastName><bedTypeId>" + bedTypeId + "</bedTypeId><smokingPreference>" + smokingPreferences + "</smokingPreference></Room></RoomGroup><ReservationInfo><email>test@travelnow.com</email><firstName>test</firstName><lastName>tester</lastName><homePhone>2145370159</homePhone><workPhone>2145370159</workPhone><creditCardType>CA</creditCardType><creditCardNumber>5401999999999999</creditCardNumber><creditCardIdentifier>123</creditCardIdentifier><creditCardExpirationMonth>11</creditCardExpirationMonth><creditCardExpirationYear>2016</creditCardExpirationYear></ReservationInfo><AddressInfo><address1>travelnow</address1><city>" + city + "</city><stateProvinceCode>" + stateProvinceCode + "</stateProvinceCode><countryCode>" + countryCode + "</countryCode><postalCode>98004</postalCode></AddressInfo></HotelRoomReservationRequest>";
            WebRequest request = WebRequest.Create(url);
            request.ContentType = "text/xml";
            request.Timeout = 1400000;
            request.Method = "POST";
            request.ContentLength = 0;
            WebResponse response = request.GetResponse();
            Stream dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);
            string responseFromServer = reader.ReadToEnd();
            string output = JsonConvert.SerializeObject(responseFromServer);
            var deserializedProducttt = JsonConvert.DeserializeObject(output);// .DeserializeObject<DataSet>(output);
            XmlDocument doc = JsonConvert.DeserializeXmlNode(responseFromServer);
            string xml = Convert.ToString(doc.InnerXml);
            DataSet ds = new DataSet();
            ds.ReadXml(new StringReader(xml));
            RoomReservationModel objroomReservationModel = new RoomReservationModel();
            tblRoomsReservation objRoomRes = new tblRoomsReservation();
            try
            {
                using (tblRoomsReservationDataContext db = new tblRoomsReservationDataContext())
                {
                    objRoomRes.CustomerSessionId = Convert.ToString(ds.Tables[0].Rows[0]["customerSessionId"]);
                    objRoomRes.ArrivalDate = Convert.ToString(ds.Tables[0].Rows[0]["arrivalDate"]);
                    objRoomRes.DepartureDate = Convert.ToString(ds.Tables[0].Rows[0]["departureDate"]);
                    objRoomRes.ConfirmationNo = Convert.ToString(ds.Tables[0].Rows[0]["confirmationNumbers"]);
                    objRoomRes.HotelAddress = Convert.ToString(ds.Tables[0].Rows[0]["hotelAddress"]);
                    objRoomRes.HotelCity = Convert.ToString(ds.Tables[0].Rows[0]["hotelCity"]);
                    objRoomRes.HotelName = Convert.ToString(ds.Tables[0].Rows[0]["hotelName"]);
                    objRoomRes.ItineraryId = Convert.ToString(ds.Tables[0].Rows[0]["itineraryId"]);
                    objRoomRes.ReservationStatus = Convert.ToString(ds.Tables[0].Rows[0]["reservationStatusCode"]);
                    objRoomRes.RoomDescription = Convert.ToString(ds.Tables[0].Rows[0]["roomDescription"]);
                    db.tblRoomsReservations.InsertOnSubmit(objRoomRes);
                    db.SubmitChanges();
                    //lstUserData.Add(objRoomRes);
                }
            }
            catch (Exception ex) { }
            return View(objRoomRes);
        }
    }
}
