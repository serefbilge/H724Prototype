using System.Collections.Generic;
using System.Runtime.Serialization;

namespace H724.Services.Expedia.Hotels.Models
{
    [DataContract(Name = "RoomGroup")]
    public class RoomGroup
    {
        [DataMember(Name = "Room")]
        public List<Room> Room { get; set; }
    }
}