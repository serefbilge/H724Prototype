using System;
using System.Collections.Generic;
using System.Linq;
using H724.Common;
using H724.Services.Expedia.Hotels.Models;
using NUnit.Framework;

namespace H724.Services.Expedia.Tests
{
    [TestFixture]
    public class AmenityTests
    {
        [Test(Description = "Amenity bitmask contains the right bitmasks when set")]
        public void BitmaskTest()
        {
            // Arrange
            HotelSummary hotelSummary = new HotelSummary();
            
            hotelSummary.AmenityMask = (int) new[]
                {
                    Amenities.Internet | Amenities.IndoorPool | Amenities.KidsActivities
                }
                .CombineFlags();

            // Act
            IEnumerable<Amenities> amenities = hotelSummary.Amenities.GetFlags().ToList();


            // Assert
            Assert.True(hotelSummary.Amenities.HasFlag(Amenities.Internet));
            Assert.True(hotelSummary.Amenities.HasFlag(Amenities.IndoorPool));
            Assert.True(hotelSummary.Amenities.HasFlag(Amenities.KidsActivities));

            foreach (var amenity in amenities)
            {
                Console.WriteLine(amenity.GetDescription());
            }

            Assert.That(amenities.Contains(Amenities.Internet));
            Assert.That(amenities.Contains(Amenities.IndoorPool));
            Assert.That(amenities.Contains(Amenities.KidsActivities));

        }
    }
}
