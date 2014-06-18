using System.ComponentModel;

namespace H724.Services.Expedia.Hotels.Models
{
    public enum SupplierType
    {
        [Description("Expedia")] E,
        [Description("Venere")] V,
        [Description("Expedia And Venere")] EV,
        [Description("Sabre")] S,
        [Description("Worldspan")] W
    }
}