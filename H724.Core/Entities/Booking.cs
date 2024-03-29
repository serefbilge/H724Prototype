﻿using System;

namespace H724.Core.Entities
{
    public class Booking : Entity
    {
        public virtual User User { get; set; }
        public virtual DateTime Created { get; set; }
        public virtual string Reference { get; set; }
    }
}