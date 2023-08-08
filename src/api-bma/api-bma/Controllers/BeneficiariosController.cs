using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using api_bma.Models;


namespace api_bma.Controllers
{
    [Route("api/[controller]")]
    
    [ApiController]
    public class BeneficiariosController : ControllerBase
    {
        private readonly AppDbContext _context;
        public BeneficiariosController(AppDbContext context)
        {
            _context = context;
        }   

        
       List<Beneficiario> _beneficiarios = new List<Beneficiario>();

        [HttpGet]
        public async Task<ActionResult> GetAll()
        {

            var model = await _context.Beneficiarios.ToListAsync();
            return Ok(model);
        }
        [HttpGet("api")]
        
        public async Task<ActionResult> GetData()
        {
            _beneficiarios = new List<Beneficiario>();
            using (var client = new HttpClient())
            {
                client.DefaultRequestHeaders.Add($"chave-api-dados", "");
                using (var response = await client.GetAsync("https://api.portaldatransparencia.gov.br/api-de-dados/bolsa-familia-disponivel-beneficiario-por-municipio?codigoIbge=3151800&mesAno=202001"))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();

                    _beneficiarios = JsonConvert.DeserializeObject<List<Beneficiario>>(apiResponse);

                }

            }

            return Ok(_beneficiarios);


        }
        [HttpGet ("/{nis}")]
        
        public async Task<ActionResult>GetBeneficiario(string nis)       
        {
            

            using (var client = new HttpClient())
            {

                client.DefaultRequestHeaders.Add("chave-api-dados", "94347ff5413fdff1f093ae4440d67130");


                using (var response = await client.GetAsync("https://api.portaldatransparencia.gov.br/api-de-dados/bolsa-familia-disponivel-por-cpf-ou-nis?anoMesCompetencia=202001&codigo=" + nis))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    
                    
                    
                    _beneficiarios = JsonConvert.DeserializeObject<List<Beneficiario>>(apiResponse);                 
                  
                    
                    
                }
            }

            return Ok(_beneficiarios);

        }
        [HttpPost]
        public async Task<ActionResult> Create(Beneficiario model)

        {
           
            
            _context.Beneficiarios.Add(model);
            await _context.SaveChangesAsync();
            

            return CreatedAtAction("getById", new { id = model.BeneficiarioId }, model);
        }

        [HttpGet("{id}")]

        public async Task<ActionResult> GetById(int id)
        {
            var model = await _context.Beneficiarios
                .Include(t => t.dependentes)
                .Include(t => t.endereco)
                .FirstOrDefaultAsync(c => c.BeneficiarioId == id);
            if (model == null) return NotFound();

            GerarLinks(model);
            return Ok(model);
        }
        [HttpPut("{id}")]

        public async Task<ActionResult> Update(int id, Beneficiario model)
        {
            if (id != model.BeneficiarioId) return BadRequest();
            var modeloDb = await _context.Beneficiarios.AsNoTracking()
                .FirstOrDefaultAsync(c => c.BeneficiarioId == id);
            if (modeloDb == null) return NotFound();

            _context.Beneficiarios.Update(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        [HttpDelete("{id}")]

        public async Task<ActionResult> Delete(int id)
        {
            var model = await _context.Beneficiarios.FindAsync(id);
            if (model == null) return NotFound();

            _context.Beneficiarios.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private void GerarLinks(Beneficiario model)
        {
            model.Links.Add(new LinkDto(model.BeneficiarioId, Url.ActionLink(), rel: "self", metodo: "GET"));
            model.Links.Add(new LinkDto(model.BeneficiarioId, Url.ActionLink(), rel: "update", metodo: "PUT"));
            model.Links.Add(new LinkDto(model.BeneficiarioId, Url.ActionLink(), rel: "delete", metodo: "Delete"));
        }

    }
}
