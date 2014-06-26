using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace H724.Services.Expedia.Hotels.Models
{
    public class ReservationInfo
    {
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set;}
        public string HomePhone { get; set; }
        public string WorkPhone { get; set; }
        public string CreditCardType { get; set; }
        public string CreditCardNumber { get; set; }
        public string CreditCardIdentifier { get; set; }
        public int CreditCardExpirationMonth { get; set; }
        public int CreditCardExpirationYear { get; set; }
    }
}
