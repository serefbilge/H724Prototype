namespace H724.UI.Web.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class init : DbMigration
    {
        public override void Up()
        {
            //CreateTable(
            //    "dbo.ActivePropertyLists",
            //    c => new
            //        {
            //            Id = c.Int(nullable: false, identity: true),
            //            EANHotelID = c.String(),
            //            SequenceNumber = c.String(),
            //            Name = c.String(),
            //            Address1 = c.String(),
            //            Address2 = c.String(),
            //            City = c.String(),
            //            StateProvince = c.String(),
            //            PostalCode = c.String(),
            //            Country = c.String(),
            //            Latitude = c.String(),
            //            Longitude = c.String(),
            //            AirportCode = c.String(),
            //            PropertyCategory = c.String(),
            //            PropertyCurrency = c.String(),
            //            StarRating = c.String(),
            //            Confidence = c.String(),
            //            SupplierType = c.String(),
            //            Location = c.String(),
            //            ChainCodeID = c.String(),
            //            RegionID = c.String(),
            //            HighRate = c.String(),
            //            LowRate = c.String(),
            //            CheckInTime = c.String(),
            //            CheckOutTime = c.String(),
            //            DateCreated = c.DateTime(nullable: false),
            //        })
            //    .PrimaryKey(t => t.Id);
            
            //CreateTable(
            //    "dbo.AirportCoordinatesLists",
            //    c => new
            //        {
            //            Id = c.Int(nullable: false, identity: true),
            //            AirportID = c.String(),
            //            AirportCode = c.String(),
            //            AirportName = c.String(),
            //            Latitude = c.String(),
            //            Longitude = c.String(),
            //            MainCityID = c.String(),
            //            CountryCode = c.String(),
            //            DateCreated = c.DateTime(nullable: false),
            //        })
            //    .PrimaryKey(t => t.Id);
            
            //CreateTable(
            //    "dbo.AliasRegionLists",
            //    c => new
            //        {
            //            Id = c.Int(nullable: false, identity: true),
            //            RegionID = c.String(),
            //            LanguageCode = c.String(),
            //            AliasString = c.String(),
            //            DateCreated = c.DateTime(nullable: false),
            //        })
            //    .PrimaryKey(t => t.Id);
            
            //CreateTable(
            //    "dbo.CityCoordinatesLists",
            //    c => new
            //        {
            //            Id = c.Int(nullable: false, identity: true),
            //            RegionID = c.String(),
            //            RegionName = c.String(),
            //            Coordinates = c.String(),
            //            DateCreated = c.DateTime(nullable: false),
            //        })
            //    .PrimaryKey(t => t.Id);
            
            //CreateTable(
            //    "dbo.CountryLists",
            //    c => new
            //        {
            //            Id = c.Int(nullable: false, identity: true),
            //            CountryID = c.String(),
            //            LanguageCode = c.String(),
            //            CountryName = c.String(),
            //            CountryCode = c.String(),
            //            Transliteration = c.String(),
            //            ContinentID = c.String(),
            //            DateCreated = c.DateTime(nullable: false),
            //        })
            //    .PrimaryKey(t => t.Id);
            
            //CreateTable(
            //    "dbo.NeighborhoodCoordinatesLists",
            //    c => new
            //        {
            //            Id = c.Int(nullable: false, identity: true),
            //            RegionID = c.String(),
            //            RegionName = c.String(),
            //            Coordinates = c.String(),
            //            DateCreated = c.DateTime(nullable: false),
            //        })
            //    .PrimaryKey(t => t.Id);
            
            //CreateTable(
            //    "dbo.ParentRegionLists",
            //    c => new
            //        {
            //            Id = c.Int(nullable: false, identity: true),
            //            RegionID = c.String(),
            //            RegionType = c.String(),
            //            RelativeSignificance = c.String(),
            //            SubClass = c.String(),
            //            RegionName = c.String(),
            //            RegionNameLong = c.String(),
            //            ParentRegionID = c.String(),
            //            ParentRegionType = c.String(),
            //            ParentRegionName = c.String(),
            //            ParentRegionNameLong = c.String(),
            //            DateCreated = c.DateTime(nullable: false),
            //        })
            //    .PrimaryKey(t => t.Id);
            
            //CreateTable(
            //    "dbo.PointsOfInterestCoordinatesLists",
            //    c => new
            //        {
            //            Id = c.Int(nullable: false, identity: true),
            //            RegionID = c.String(),
            //            RegionName = c.String(),
            //            RegionNameLong = c.String(),
            //            Latitude = c.String(),
            //            Longitude = c.String(),
            //            SubClassification = c.String(),
            //            DateCreated = c.DateTime(nullable: false),
            //        })
            //    .PrimaryKey(t => t.Id);
            
            //CreateTable(
            //    "dbo.RegionCenterCoordinatesLists",
            //    c => new
            //        {
            //            Id = c.Int(nullable: false, identity: true),
            //            RegionID = c.String(),
            //            RegionName = c.String(),
            //            CenterLatitude = c.String(),
            //            CenterLongitude = c.String(),
            //            DateCreated = c.DateTime(nullable: false),
            //        })
            //    .PrimaryKey(t => t.Id);
            
            //CreateTable(
            //    "dbo.RegionEANHotelIDMappings",
            //    c => new
            //        {
            //            Id = c.Int(nullable: false, identity: true),
            //            RegionID = c.String(),
            //            EANHotelID = c.String(),
            //            DateCreated = c.DateTime(nullable: false),
            //        })
            //    .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            //DropTable("dbo.RegionEANHotelIDMappings");
            //DropTable("dbo.RegionCenterCoordinatesLists");
            //DropTable("dbo.PointsOfInterestCoordinatesLists");
            //DropTable("dbo.ParentRegionLists");
            //DropTable("dbo.NeighborhoodCoordinatesLists");
            //DropTable("dbo.CountryLists");
            //DropTable("dbo.CityCoordinatesLists");
            //DropTable("dbo.AliasRegionLists");
            //DropTable("dbo.AirportCoordinatesLists");
            //DropTable("dbo.ActivePropertyLists");
        }
    }
}
