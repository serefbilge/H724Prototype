using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace H724.Services.GeoData.Models
{
    public abstract class BaseEntity
    {
        public int Id { get; set; }
        public DateTime DateCreated { set; get; }
    }
}
