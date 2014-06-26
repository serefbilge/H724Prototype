using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace H724.Services.Expedia.Hotels.Models
{
    public enum CreditCardType
    {
        [Description("Visa")] VI,
        [Description("American Express")] AX,
        [Description("BC Card")] BC,
        [Description("MasterCard")] MC,
        [Description("MasterCard Alaska")] IK,
        [Description("MasterCard Canada")] CA,
        [Description("Carte Blanche")] CB,
        [Description("China Union Pay")] CU,
        [Description("Discover")] DS,
        [Description("Diners Club")] DC,
        [Description("Carta Si")] T,
        [Description("Carte Bleue")] R,
        [Description("Dankort")] N,
        [Description("Delta")] L,
        [Description("Electron")] E,
        [Description("Japan Credit Bureau")] JC,
        [Description("Maestro")] TO,
        [Description("Switch")] S,
        [Description("Solo")] O
    }
}
