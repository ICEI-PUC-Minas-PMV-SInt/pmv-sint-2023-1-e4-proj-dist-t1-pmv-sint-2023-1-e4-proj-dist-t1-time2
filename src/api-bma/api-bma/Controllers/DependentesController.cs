using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api_bma.Models;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace api_bma.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DependentesController : ControllerBase
    {
        private readonly AppDbContext _context;
        public DependentesController(AppDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var model = await _context.Dependentes.ToListAsync();
            return Ok(model);
        }
       
        [HttpPost]
        public async Task<ActionResult> Create(Dependente model)
        {
            _context.Dependentes.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("getById", new { id = model.Id }, model);
        }

        [HttpGet("{id}")]

        public async Task<ActionResult> GetById(int id)
        {
            var model = await _context.Dependentes
                .FirstOrDefaultAsync(c => c.Id == id);
            if (model == null) NotFound();
            
            GerarLinks(model);
            
            return Ok(model);
        }
        [HttpPut("{id}")]

        public async Task<ActionResult> Update(int id, Dependente model)
        {
            if (id != model.Id) return BadRequest();
            var modeloDb = await _context.Dependentes.AsNoTracking()
                .FirstOrDefaultAsync(c => c.Id == id);
            if (modeloDb == null) return NotFound();

            _context.Dependentes.Update(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        [HttpDelete("{id}")]

        public async Task<ActionResult> Delete(int id)
        {
            var model = await _context.Dependentes.FindAsync(id);
            if (model == null) return NotFound();

            _context.Dependentes.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        private void GerarLinks(Dependente model)
        {
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "self", metodo: "GET"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "update", metodo: "PUT"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "delete", metodo: "Delete"));
        }
    }
}
