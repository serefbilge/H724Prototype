using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace H724.Core.Entities
{
   public class BookingDetails :Entity
    {
       public virtual string ItineraryId { get; set; }
       public virtual string HotelName { get; set; }
       public virtual DateTime? CheckInDate { get; set; }
       public virtual DateTime? CheckOutDate { get; set; }
       public virtual string RoomType { get; set; }
       public virtual string HotelAddress { get; set; }
       public virtual string HotelCity { get; set; }
       public virtual string HotelState { get; set; }
       public virtual string HotelCountry { get; set; }
       public virtual int NumberOfRooms { get; set; }
       public virtual double TotalCharge { get; set; }
       public virtual double TotalTax { get; set; }
       public virtual string ReservationStatusCode { get; set; }
       public virtual string CustomerEmail { get; set; }
       public virtual string CustomerPhone { get; set; }

    }
}
