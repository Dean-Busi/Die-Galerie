using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Dtos.Kommentare
{
    public class CreateKommentarDto
    {
        public string? GepostetVon { get; set; }

        public string? Inhalt { get; set; }
    }
}