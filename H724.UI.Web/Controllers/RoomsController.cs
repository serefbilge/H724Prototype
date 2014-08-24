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
using Microsoft.Web.Mvc;
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
        public ActionResult RoomBookingFirst(HotelInfo hotelInfo)
        {
            var bookingWizard = new RoomBookingWizard();

            if (TempData["bookingWizard"] != null) bookingWizard = (RoomBookingWizard)TempData["bookingWizard"];
            else bookingWizard.HotelInfo = hotelInfo;
            
            return View(bookingWizard);
        }

        [HttpGet]
        public ActionResult RoomBooking(HotelInfo hotelInfo)
        {
            var bookingWizard = new RoomBookingWizard();

            if (TempData["bookingWizard"] != null) bookingWizard = (RoomBookingWizard)TempData["bookingWizard"];
            else bookingWizard.HotelInfo = hotelInfo;

            return View(bookingWizard);
        }

        [HttpGet]
        public ActionResult RoomBookingSecond([Deserialize] RoomBookingWizard bookingWizard, PersonalInfo personalInfo)
        {
            if (TempData["bookingWizard"] != null) bookingWizard = (RoomBookingWizard)TempData["bookingWizard"];
            else bookingWizard.PersonalInfo = personalInfo;
            
            if (!ModelState.IsValid)
            {
                SetViewDataError();

                TempData["bookingWizard"] = bookingWizard;

                return RedirectToAction("RoomBookingFirst", "Rooms");
            }

            return View(bookingWizard);
        }

        [HttpPost]
        public ActionResult RoomBookingFinal([Deserialize] RoomBookingWizard bookingWizard, PaymentInfo paymentInfo, AddressInfo addressInfo)
        {
            bookingWizard.PaymentInfo = paymentInfo;
            bookingWizard.AddressInfo = addressInfo;

            var model = Session["Search"] as SearchViewModel;

            var roomGroup = new RoomGroup { Room = bookingWizard.HotelInfo.Rooms };

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

            var request = new HotelRoomReservationRequest
            {
                HotelId = Convert.ToInt64(bookingWizard.HotelInfo.HotelId),
                CurrencyCode = bookingWizard.HotelInfo.CurrencyCode,
                ArrivalDate = Convert.ToDateTime(bookingWizard.HotelInfo.StandardCheckin),
                DepartureDate = Convert.ToDateTime(bookingWizard.HotelInfo.StandardCheckout),
                SupplierType = bookingWizard.HotelInfo.SupplierType,
                RoomTypeCode = bookingWizard.HotelInfo.RoomTypeCode,
                RateCode = bookingWizard.HotelInfo.RateCode,
                ChargeableRate = Convert.ToDecimal(bookingWizard.HotelInfo.SelectedPrice),
                RoomsCount = bookingWizard.HotelInfo.RoomsCount,
                RoomGroup = roomGroup,
                Email = bookingWizard.PersonalInfo.Email,
                HomePhone = bookingWizard.PersonalInfo.HomePhone,
                WorkPhone = bookingWizard.PersonalInfo.WorkPhone,
                AddressInfo = bookingWizard.AddressInfo,
                CardHolderFirstName = bookingWizard.PaymentInfo.CardHolderFirstName,
                CardHolderLastName = bookingWizard.PaymentInfo.CardHolderLastName,
                CardType = bookingWizard.PaymentInfo.CardType,
                Cardnumber = bookingWizard.PaymentInfo.Cardnumber,
                CardExpirationMonth = bookingWizard.PaymentInfo.CardExpirationMonth,
                CardExpirationYear = bookingWizard.PaymentInfo.CardExpirationYear
            };

            var response = _expediaService.GetHotelRoomReservation(request);

            if (response.EanWsError != null)
            {
                Error(response.EanWsError.PresentationMessage);

                TempData["bookingWizard"] = bookingWizard;

                return RedirectToAction("RoomBookingSecond", "Rooms");
            }

            return View(response);
        }

        public ActionResult RoomBooking()
        {
            return View();
        }
    }
}
