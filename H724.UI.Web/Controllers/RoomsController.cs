using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using H724.Services.Expedia.Hotels.Api;
using H724.Services.Expedia.Hotels.Models;
using H724.Services.Expedia.Hotels.Models.Request;
using H724.Services.Expedia.Hotels.Models.Response;
using H724.Services.Expedia.Hotels.Models.RouteParameters;
using H724.UI.Web.Models;
using Ninject;
using System.Net;
using System.Xml;
using System.IO;
using System.Data;
using Newtonsoft.Json;

namespace H724.UI.Web.Controllers
{
    /// <summary>
    /// The Rooms controllers provides information about
    /// room availability for a given hotel.
    /// Room Images for a given hotel
    /// </summary>
    public class RoomsController : BaseExpediaController
    {
        [Inject]
        public RoomsController(AbstractExpediaService expediaService)
        {
            if (expediaService == null) // Guard Clause
            {
                throw new ArgumentNullException("expediaService");
            }

            _expediaService = expediaService;
        }

        [HttpGet]
        public ActionResult Availability(int id)
        {
            var model = Session["Search"] as SearchViewModel;
            if (model == null)
            {
                //Information("Please enter your criteria for room availability");
                //return RedirectToAction("Index", "Search");
                model = ModelInitializer.CreateSearchModel();
                model.CheckinDate = DateTime.Today.AddDays(1);
                model.CheckoutDate = model.CheckinDate.AddDays(7);
                model.RoomViewModels.First().Adults = 1;
                model.RoomViewModels.First().Children = 0;

                Session["Search"] = model;
            }

            var roomGroup = new RoomGroup
            {
                Room = model.RoomViewModels
                    .Where(room => room.Adults > 0 || room.Children > 0)
                    .Select(room => new Room()
                    {
                        NumberOfAdults = room.Adults.HasValue ? room.Adults.Value : 0,
                        NumberOfChildren = room.Children.HasValue ? room.Children.Value : 0,
                        ChildAges = room.AgeViewModels.Select(a => a.Age != null ? a.Age.Value : 0).ToList()
                    }).ToList()
            };
            var request = new HotelRoomAvailabilityRequest
            {
                HotelId = id,
                ArrivalDate = model.CheckinDate,
                DepartureDate = model.CheckoutDate,
                IncludeRoomImages = true,
                IncludeDetails = true,
                SupplierType = "E",
                NumberOfBedrooms = model.NumberOfBedrooms,
                RoomGroup = roomGroup
            };


            //Session["NumberOfAdults"] = roomGroup.Room[0].NumberOfAdults;
            //Session["NumberOfChildren"] = roomGroup.Room[0].NumberOfChildren;
            //if (roomGroup.Room[0].ChildAges[0] != 0)
            //{
            //    Session["ChildAges"] += "," + Convert.ToString(roomGroup.Room[0].ChildAges[0]);
            //}
            //if (roomGroup.Room[0].ChildAges[1] != 0)
            //{
            //    Session["ChildAges"] += "," + Convert.ToString(roomGroup.Room[0].ChildAges[1]);
            //}
            //if (roomGroup.Room[0].ChildAges[2] != 0)
            //{
            //    Session["ChildAges"] += "," + Convert.ToString(roomGroup.Room[0].ChildAges[2]);
            //}

            //if (Session["ChildAges"] != null)
            //{
            //    int length = Session["ChildAges"].ToString().Length;
            //    Session["Ages"] = (Convert.ToString(Session["ChildAges"]).Substring(1, length - 1));
            //}

            //var bt = new BedType();
            //var ri = new RateInfo();
            var response = _expediaService.GetHotelRoomAvailability(request);

            //var hotelRoomResponse = new HotelRoomResponse();
            //hotelRoomResponse = response.HotelRoomResponse[0];
            //var rg = new RoomGroup();
            //var r = new Room();
            //r = hotelRoomResponse.RateInfos.RateInfo.RoomGroup.Room[0];

            if (response.EanWsError != null)
            {
                Error(response.EanWsError.PresentationMessage);
            }
            return View(response);
        }

        [HttpGet]
        public ActionResult Reservation(Models.RoomReservationModel param)
        {
            //var model = Session["Search"] as SearchViewModel;
            //if (model == null)
            //{
            //    //Information("Please enter your criteria for room availability");
            //    //return RedirectToAction("Index", "Search");
            //    model = ModelInitializer.CreateSearchModel();
            //    model.CheckinDate = DateTime.Today.AddDays(1);
            //    model.CheckoutDate = model.CheckinDate.AddDays(7);
            //    model.RoomViewModels.First().Adults = 1;
            //    model.RoomViewModels.First().Children = 0;
            //    Session["Search"] = model;
            //}
            //Session["roomGroup"] = roomGroup;
            List<H724.Services.Expedia.Hotels.Models.Room> li = param.Rooms;
            Session["roomGroup"] = li;
            //var request = new HotelRoomReservationRequest
            //{
            //    HotelId = param.Id,
            //    CurrencyCode = param.CurrencyCode,
            //    ArrivalDate = param.StandardCheckin,
            //    DepartureDate = param.StandardCheckout,
            //    SupplierType = param.SupplierType,
            //    RoomTypeCode = param.RoomTypeCode,
            //    RateCode = param.RateCode,
            //    ChargeableRate = param.SelectedPrice,
            //    RoomsCount = 2,
            //    RoomGroup = roomGroup
            //   // RateKey = 
            //};

            //var response = _expediaService.GetHotelRoomReservation(request);

            //if (response.EanWsError != null)
            //{
            //    Error(response.EanWsError.PresentationMessage);
            //}

            return View(param);
        }
        [HttpGet]
        public ActionResult RoomBookingFinal(Models.RoomReservationModel param)
        {
            //AbstractExpediaService expedia;
            //expedia.Cid = 55505;
            //expedia.MinorRev = 99;
            //expedia.ApiKey = "rs3m6mzwdz2sxuxtmsqtup8r";
            //expedia.Locale = "en_US";
            //expedia.CurrencyCode = objRoomReserve.currencyCode;
            //if (!ModelState.IsValid)
            //{
            //    return RedirectToAction("RoomBooking", "RoomReservation", param);

            //}
            var model = Session["Search"] as SearchViewModel;
            var b = Session["roomGroup"] as List<H724.Services.Expedia.Hotels.Models.Room>;

            var roomGroup = new RoomGroup { Room =b };
            if (model == null)
            {
                //Information("Please enter your criteria for room availability");
                //return RedirectToAction("Index", "Search");
                model = ModelInitializer.CreateSearchModel();
                model.CheckinDate = DateTime.Today.AddDays(1);
                model.CheckoutDate = model.CheckinDate.AddDays(7);
                model.RoomViewModels.First().Adults = 1;
                model.RoomViewModels.First().Children = 0;
                Session["Search"] = model;
            }
           // var roomGroup = Session["roomGroup"];
            RoomReservationModel rr = new RoomReservationModel();
            var request = new HotelRoomReservationRequest
            {
                HotelId = Convert.ToInt64(param.Id),
                CurrencyCode = param.CurrencyCode,
                ArrivalDate = Convert.ToDateTime(param.StandardCheckin),
                DepartureDate = Convert.ToDateTime(param.StandardCheckout),
                SupplierType = param.SupplierType,
                RoomTypeCode = param.RoomTypeCode,
                RateCode = param.RateCode,
                ChargeableRate = Convert.ToDecimal(param.SelectedPrice),
                RoomsCount = 2,
                RoomGroup = roomGroup,
                Email = param.Email,
                CardHolderFirstName = param.CardHolderFirstName,
                CardHolderLastName = param.CardHolderLastName,
                HomePhone = param.HomePhone,
                WorkPhone = param.WorkPhone,
                CardType = param.CardType,
                Cardnumber = param.Cardnumber,
                CardExpirationMonth = param.CardExpirationMonth,
                CardExpirationYear = param.CardExpirationYear,
                AddressInfo = param.AddressInfo,
                City = param.City,
                State = param.State,
                Country = param.Country,
                PostalCode = param.PostalCode,
                StreetAddress = param.StreetAddress
                // RateKey = 
            };

            var response = _expediaService.GetHotelRoomReservation(request);

            if (response.EanWsError != null)
            {
                string error = Convert.ToString(response.EanWsError.PresentationMessage);
                Session["Error"] = error;
                return RedirectToAction("RoomBooking", "RoomReservation", param);
                //Error(response.EanWsError.PresentationMessage);
            }
            return View(response);
            //else
            //{
            //    string error = Convert.ToString(response.EanWsError.PresentationMessage);
            //}

           // return View(response);
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
            //            db.tblRoomsReservations.InsertOnSubmit(objRoomRes);
            //            db.SubmitChanges();
            //            //lstUserData.Add(objRoomRes);
            //        }
            //    }
            //    catch (Exception ex)
            //    {

            //    }
            //}
            //    return View(objRoomRes);

        }

    }
}
