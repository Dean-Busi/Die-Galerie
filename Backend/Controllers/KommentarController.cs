using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Data;
using Backend.Dtos;
using Backend.Dtos.Kommentare;
using Backend.Mappers;
using Backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/kommentare")]
    public class KommentarController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public KommentarController(ApplicationDbContext context)
        {
            _context = context;
        }

        /////////////////////////////////////////////////////////////

        [HttpPost("{gemaeldeId}")]
        public async Task<IActionResult> Create([FromRoute] int gemaeldeId, CreateKommentarDto createKommentarDto)
        {
            var gemaeldeExists = await _context.Gemaelder.AnyAsync(s => s.Id == gemaeldeId);

            if (gemaeldeExists == false)
            {
                return BadRequest("Das gesuchte Gemälde exisitiert nicht.");
            }

            var kommentarToPost = createKommentarDto.ToKommentarFromCreateDto(gemaeldeId);

            await _context.Kommentare.AddAsync(kommentarToPost);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = kommentarToPost.Id }, kommentarToPost.ToKommentarDto());
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var kommentare = await _context.Kommentare.ToListAsync();
            var kommentareDto = kommentare.Select(s => s.ToKommentarDto());
            return Ok(kommentareDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var kommentar = await _context.Kommentare.FindAsync(id);

            if (kommentar == null)
            {
                return NotFound();
            }

            return Ok(kommentar.ToKommentarDto());
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateKommentarDto updateDto)
        {
            var kommentarToUpdate = await _context.Kommentare.FirstOrDefaultAsync(x => x.Id == id);

            if (kommentarToUpdate == null)
            {
                return NotFound("Der gesuchte Kommentar wurde nicht gefunden.");
            }

            var updatedKommentar = updateDto.ToKommentarFromUpdateDto();

            kommentarToUpdate.GepostetVon = updatedKommentar.GepostetVon;
            kommentarToUpdate.Inhalt = updatedKommentar.Inhalt;

            await _context.SaveChangesAsync();

            return Ok(kommentarToUpdate.ToKommentarDto());
        }
    }
}
