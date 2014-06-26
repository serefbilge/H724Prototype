using System;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace H724.Services.Expedia.Hotels.Models
{
    public class Room
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int BedTypeId { get; set; }
        public string SmokingPreferences { get; set; }
        public int NumberOfAdults { get; set; }
        public int NumberOfChildren { get; set; }
        public List<int> ChildAges { get; set; }
        public string RateKey { get; set; }
    }
}