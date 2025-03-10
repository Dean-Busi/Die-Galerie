using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Data;
using Backend.Dtos.Bewertungen;
using Backend.Mappers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/bewertung")]
    public class BewertungController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public BewertungController(ApplicationDbContext context)
        {
            _context = context;
        }

        // ----------------------------------------

        [HttpPost("{gemaeldeId}")]
        public async Task<IActionResult> Create([FromRoute] int gemaeldeId, CreateBewertungDto createBewertungDto)
        {
            var gemaeldeExists = await _context.Gemaelder.AnyAsync(s => s.Id == gemaeldeId);

            if (gemaeldeExists == false)
            {
                return BadRequest("Das gesuchte Gemälde existiert nicht.");
            }

            var bewertungToPost = createBewertungDto.ToBewertungFromCreateDto(gemaeldeId);

            await _context.Bewertungen.AddAsync(bewertungToPost);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = bewertungToPost.Id}, bewertungToPost.ToBewertungDto());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var bewertung = await _context.Bewertungen.FindAsync(id);

            if (bewertung == null)
            {
                return NotFound();
            }

            return Ok(bewertung.ToBewertungDto());
        }
    }
}