using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using api_bma.Models;
using System.Net.Http.Headers;

namespace api_bma.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnderecosController : ControllerBase
    {
        private readonly AppDbContext _context;
        public EnderecosController(AppDbContext context)
        {
            _context = context;
        }
        Endereco _endereco = new Endereco();

        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var model = await _context.Enderecos.ToListAsync();
            return Ok(model);
        }
        [HttpGet("cep")]
        public async Task<IActionResult> BuscarCEP(string cep)
        {
            _endereco = new Endereco();
            using (var client = new HttpClient())           
            {     
                              

                using (HttpResponseMessage response = await client.GetAsync($"https://brasilapi.com.br/api/cep/v1/{cep}"))
                { 
                    string apiResponse = await response.Content.ReadAsStringAsync();

                    _endereco = JsonConvert.DeserializeObject<Endereco>(apiResponse);

                }

            }
            return Ok(_endereco);
        }
        [HttpPost]
        public async Task<ActionResult> Create(Endereco model)
        {
            _context.Enderecos.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("getById", new { id = model.EnderecoId }, model);
        }
        [HttpGet("{id}")]

        public async Task<ActionResult> GetById(int id)
        {
            var model = await _context.Enderecos
                .FirstOrDefaultAsync(c => c.EnderecoId == id);
            if (model == null) NotFound();

            GerarLinks(model);
            return Ok(model);
        }
        [HttpPut("{id}")]

        public async Task<ActionResult> Update(int id, Dependente model)
        {
            if (id != model.Id) return BadRequest();
            var modeloDb = await _context.Enderecos.AsNoTracking()
                .FirstOrDefaultAsync(c => c.EnderecoId == id);
            if (modeloDb == null) return NotFound();

            _context.Dependentes.Update(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        [HttpDelete("{id}")]

        public async Task<ActionResult> Delete(int id)
        {
            var model = await _context.Enderecos.FindAsync(id);
            if (model == null) return NotFound();

            _context.Enderecos.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        private void GerarLinks(Endereco model)
        {
            model.Links.Add(new LinkDto(model.EnderecoId, Url.ActionLink(), rel: "self", metodo: "GET"));
            model.Links.Add(new LinkDto(model.EnderecoId, Url.ActionLink(), rel: "update", metodo: "PUT"));
            model.Links.Add(new LinkDto(model.EnderecoId, Url.ActionLink(), rel: "delete", metodo: "Delete"));
        }
    }
}
