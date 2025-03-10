using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Dtos.Bewertungen
{
    public class BewertungDto
    {
        public int Id { get; set; }

        public float Rating { get; set; }

        public int? GemaeldeId {get; set; }
    }
}