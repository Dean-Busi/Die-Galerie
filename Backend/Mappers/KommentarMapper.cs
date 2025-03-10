using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Dtos;
using Backend.Dtos.Kommentare;
using Backend.Models;

namespace Backend.Mappers
{
    public static class KommentarMapper
    {
        public static KommentarDto ToKommentarDto(this Kommentar kommentarModel)
        {
            return new KommentarDto
            {
                Id = kommentarModel.Id,
                GepostetVon = kommentarModel.GepostetVon,
                Inhalt = kommentarModel.Inhalt,
                GepostetAm = kommentarModel.GepostetAm,
            };
        }

        public static Kommentar ToKommentarFromCreateDto(this CreateKommentarDto createKommentarDto, int gemaeldeId)
        {
            return new Kommentar
            {
                GepostetVon = createKommentarDto.GepostetVon,
                Inhalt = createKommentarDto.Inhalt,
            };
        }

        public static Kommentar ToKommentarFromUpdateDto(this UpdateKommentarDto updateKommentarDto)
        {
            return new Kommentar
            {
                GepostetVon = updateKommentarDto.
                Inhalt = updateKommentarDto.Inhalt,
            };
        }
    }
}

