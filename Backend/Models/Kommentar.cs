using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class Kommentar
    {
        public int Id { get; set; }

        public string? GepostetVon { get; set; }

        public string? Inhalt { get; set; }

        public DateTime GepostetAm { get; set; } = DateTime.Now;

        public int? GemaeldeId { get; set; } // Fremdschlüssel Parent-Model

        public Gemaelde? Gemaelde { get; set; } // Navigation Property
    }
}

