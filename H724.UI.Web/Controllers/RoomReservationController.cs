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
    public class RoomReservationController : Controller
    {
        //
        // GET: /CreditCardInfo/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult SetRoomsData(string currencyCode, string hotelId, string arrivalDate, string departureDate, string supplierType, 
            string rateKey, string roomTypeCode, string rateCode, string chargeableRate, string bedTypeId, string smokingPreferences, 
            string city, string stateProvinceCode, string countryCode, string numberOfAdults, string numberOfChildren, string Age)
        {
            Models.RoomReservationModel objRoomReservation = new Models.RoomReservationModel();
            objRoomReservation.currencyCode = currencyCode;
            objRoomReservation.hotelId = hotelId;
            objRoomReservation.arrivalDate = arrivalDate;
            objRoomReservation.departureDate = departureDate;
            objRoomReservation.supplierType = supplierType;
            objRoomReservation.rateKey = rateKey;
            objRoomReservation.roomTypeCode = roomTypeCode;
            objRoomReservation.rateCode = rateCode;
            objRoomReservation.chargeableRate = chargeableRate;
            objRoomReservation.bedTypeId = bedTypeId;
            objRoomReservation.smokingPreferences = smokingPreferences;
            objRoomReservation.city = city;
            objRoomReservation.stateProvinceCode = stateProvinceCode;
            objRoomReservation.countryCode = countryCode;
            objRoomReservation.numberOfAdults = numberOfAdults;
            objRoomReservation.numberOfChildren = numberOfChildren;
            objRoomReservation.Age = Age;
       
            return View(objRoomReservation);
        }

        [HttpPost]

        public ActionResult RoomBooking(Models.RoomReservationModel objRoomReserve)
        {
            List<tblRoomsReservation> lstUserData = new List<tblRoomsReservation>();
            string url = "https://api.eancdn.com/ean-services/rs/hotel/v3/res?cid=55505&minorRev=99&apiKey=rs3m6mzwdz2sxuxtmsqtup8r&locale=en_US&currencyCode=" + objRoomReserve.currencyCode + "&xml=<HotelRoomReservationRequest><hotelId>" + objRoomReserve.hotelId + "</hotelId><arrivalDate>" + objRoomReserve.arrivalDate + "</arrivalDate><departureDate>" + objRoomReserve.departureDate + "</departureDate><supplierType>" + objRoomReserve.supplierType + "</supplierType><rateKey>" + objRoomReserve.rateKey + "></rateKey><roomTypeCode>" + objRoomReserve.roomTypeCode + "</roomTypeCode><rateCode>" + objRoomReserve.rateCode + "</rateCode><chargeableRate>" + objRoomReserve.chargeableRate + "</chargeableRate><RoomGroup><Room><numberOfAdults>" + objRoomReserve.numberOfAdults + "</numberOfAdults><numberOfChildren>" + objRoomReserve.numberOfChildren + "</numberOfChildren><childAges>" + objRoomReserve.Age + "</childAges><firstName>test</firstName><lastName>tester</lastName><bedTypeId>" + objRoomReserve.bedTypeId + "</bedTypeId><smokingPreference>" + objRoomReserve.smokingPreferences + "</smokingPreference></Room></RoomGroup><ReservationInfo><email>" + objRoomReserve.email + "</email><firstName>" + objRoomReserve.firstName + "</firstName><lastName>" + objRoomReserve.lastName + "</lastName><homePhone>" + objRoomReserve.homePhone + "</homePhone><workPhone>" + objRoomReserve.workPhone + "</workPhone><creditCardType>" + objRoomReserve.creditCardType + "</creditCardType><creditCardNumber>" + objRoomReserve.creditCardNumber + "</creditCardNumber><creditCardIdentifier>" + objRoomReserve.creditCardIdentifier + "</creditCardIdentifier><creditCardExpirationMonth>" + objRoomReserve.creditCardExpirationMonth + "</creditCardExpirationMonth><creditCardExpirationYear>" + objRoomReserve.creditCardExpirationYear + "</creditCardExpirationYear></ReservationInfo><AddressInfo><address1>" + objRoomReserve.address+ "</address1><city>" + objRoomReserve.city + "</city><stateProvinceCode>" + objRoomReserve.stateProvinceCode + "</stateProvinceCode><countryCode>" + objRoomReserve.countryCode + "</countryCode><postalCode>" + objRoomReserve.postalCode + "</postalCode></AddressInfo></HotelRoomReservationRequest>";
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
            catch (Exception ex) {

            }
            return View(objRoomRes);        
        }
    }
}
