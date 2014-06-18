using System.Collections.Generic;

namespace H724.Services.Expedia.Hotels.Models.Response
{
    public class LocationInfoResponse
    {
        public EanWsError EanWsError { get; set; }
        public string CustomerSessionId { get; set; }
        public LocationInfos LocationInfos { get; set; }
    }
}