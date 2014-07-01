using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace H724.Services.Expedia.Hotels.Models.Response
{
    public class HotelRoomReservationResponse
    {
        public EanWsError EanWsError { get; set; }
        public string CustomerSessionId { get; set; }
        public string ItineraryId { get; set; }
        public string ConfirmationNumbers { get; set; }
        public bool ProcessedWithConfirmation { get; set; }
        public string SupplierType { get; set; }
        public string ReservationStatusCode { get; set; }
        public bool ExistingItinerary { get; set; }
        public int? NumberOfRoomsBooked { get; set; }
        //public DrivingDirections DrivingDirections { get; set; }
        //public CheckInstructions CheckInstructions { get; set; }
        public DateTime ArrivalDate { get; set; }
        public DateTime DepartureDate { get; set; }
        public string HotelName { get; set; }
        public string HotelAddress { get; set; }
        public string HotelCity { get; set; }
        public string HotelStateProvinceCode { get; set; }
        public string HotelPostalCode { get; set; }
        public string HotelCountryCode { get; set; }
        public string RoomDescription { get; set; }
        public decimal TripAdvisorRating { get; set; }
        public int? TripAdvisorReviewCount { get; set; }
        public string TripAdvisorRatingUrl { get; set; }
        public int? RateOccupancyPerRoom { get; set; }
        public RateInfos RateInfos { get; set; }
    }
}
