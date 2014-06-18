namespace H724.Services.GeoIp
{
    public interface IGeoLookupService
    {
        GeoLookUpResponse GetGeoFromIp(GeoLookUpRequest request);
    }
}