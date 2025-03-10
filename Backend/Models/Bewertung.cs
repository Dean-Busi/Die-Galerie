using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class Bewertung
    {
        public int Id { get; set; }

        public float Rating { get; set; }

        public int? GemaeldeId {get; set; }

        public Gemaelde? Gemaelde {get; set; }
    }
}