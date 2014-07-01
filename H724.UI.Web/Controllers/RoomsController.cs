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


            Session["NumberOfAdults"] = roomGroup.Room[0].NumberOfAdults;
            Session["NumberOfChildren"] = roomGroup.Room[0].NumberOfChildren;
            if (roomGroup.Room[0].ChildAges[0] != 0)
            {
                Session["ChildAges"] += "," + Convert.ToString(roomGroup.Room[0].ChildAges[0]);
            }
            if (roomGroup.Room[0].ChildAges[1] != 0)
            {
                Session["ChildAges"] += "," + Convert.ToString(roomGroup.Room[0].ChildAges[1]);
            }
            if (roomGroup.Room[0].ChildAges[2] != 0)
            {
                Session["ChildAges"] += "," + Convert.ToString(roomGroup.Room[0].ChildAges[2]);
            }

            if (Session["ChildAges"] != null)
            {
                int length = Session["ChildAges"].ToString().Length;
                Session["Ages"] = (Convert.ToString(Session["ChildAges"]).Substring(1, length - 1));
            }

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
        public ActionResult Reservation(HotelReservationParameters param)
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

            //var roomGroup = new RoomGroup
            //{
            //    Room = model.RoomViewModels
            //        .Where(room => room.Adults > 0 || room.Children > 0)
            //        .Select(room => new Room()
            //        {
            //            NumberOfAdults = room.Adults.HasValue ? room.Adults.Value : 0,
            //            NumberOfChildren = room.Children.HasValue ? room.Children.Value : 0,
            //            ChildAges = room.AgeViewModels.Select(a => a.Age != null ? a.Age.Value : 0).ToList()
            //        }).ToList()
            //};

            var roomGroup = new RoomGroup { Room = param.Rooms };
            var request = new HotelRoomReservationRequest
            {
                HotelId = param.Id,
                CurrencyCode = param.CurrencyCode,
                ArrivalDate = param.StandardCheckin,
                DepartureDate = param.StandardCheckout,
                SupplierType = param.SupplierType,
                RoomTypeCode = param.RoomTypeCode,
                RateCode = param.RateCode,
                ChargeableRate = param.SelectedPrice,
                RoomsCount = 2,
                RoomGroup = roomGroup
               // RateKey = 
            };


            var response = _expediaService.GetHotelRoomReservation(request);

            if (response.EanWsError != null)
            {
                Error(response.EanWsError.PresentationMessage);
            }

            return View(response);

            //var request = new HotelRoomReservationRequest
            //{
            //    HotelId = param.Id,
            //    ArrivalDate = model.CheckinDate,
            //    DepartureDate = model.CheckoutDate,
            //    SupplierType = "E",
            //    RateKey = "af00b688-acf4-409e-8bdc-fcfc3d1cb80c",
            //    RoomTypeCode = "198058",
            //    RateCode = "484072",
            //    ChargeableRate = (decimal)231.18,
            //    NumberOfBedrooms = model.NumberOfBedrooms,
            //    RoomGroup = model.RoomViewModels
            //                     .Where(room => room.Adults > 0 || room.Children > 0)
            //                     .Select(room => new Room()
            //                     {
            //                         NumberOfAdults = room.Adults.HasValue ? room.Adults.Value : 0,
            //                         NumberOfChildren = room.Children.HasValue ? room.Children.Value : 0,
            //                         ChildAges = room.AgeViewModels.Select(a => a.Age != null ? a.Age.Value : 0).ToList()
            //                     })
            //                     .ToList(),
            //    ReservationInfo = new ReservationInfo
            //    {
            //        Email = "test@travelnow.com",
            //        FirstName = "Test",
            //        LastName = "Tester",
            //        HomePhone = "2145370159",
            //        WorkPhone = "2145370159",
            //        CreditCardType = CreditCardType.CA.ToString(),
            //        CreditCardNumber = "5401999999999999",
            //        CreditCardIdentifier = "123",
            //        CreditCardExpirationMonth = 11,
            //        CreditCardExpirationYear = 2016
            //    },
            //    AddressInfo = new AddressInfo
            //    {
            //        Address1 = "travelnow",
            //        City = "Seattle",
            //        StateProvinceCode = "WA",
            //        CountryCode = "US",
            //        PostalCode = "98004"
            //    }
            //};

        }
    }
}
