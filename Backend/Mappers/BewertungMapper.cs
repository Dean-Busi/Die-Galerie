using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Dtos.Bewertungen;
using Backend.Models;

namespace Backend.Mappers
{
    public static class BewertungMapper
    {
        public static BewertungDto ToBewertungDto(this Bewertung bewertungModel)
        {
            return new BewertungDto
            {
                Id = bewertungModel.Id,
                Rating = bewertungModel.Rating,
                GemaeldeId = bewertungModel.GemaeldeId
            };
        }

        public static Bewertung ToBewertungFromCreateDto(this CreateBewertungDto createBewertungDto, int gemaeldeId)
        {
            return new Bewertung
            {
                Rating = createBewertungDto.Rating,
                GemaeldeId = gemaeldeId
            };
        }

        public static Bewertung ToBewertungFromUpdateDto(this UpdateBewertungDto updateBewertungDto)
        {
            return new Bewertung
            {

            };
        }
    }
}