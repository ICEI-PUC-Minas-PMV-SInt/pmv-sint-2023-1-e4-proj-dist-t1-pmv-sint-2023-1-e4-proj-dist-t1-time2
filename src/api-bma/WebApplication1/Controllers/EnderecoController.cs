using consume_api_bma.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Runtime.ConstrainedExecution;
using System.Text;

namespace consume_api_bma.Controllers
{
    public class EnderecoController : Controller
{
    Endereco _endereco = new Endereco();
    List<Endereco> _enderecos = new List<Endereco>();

        // GET: EnderecoController
    [HttpGet]
    public async Task<IActionResult> Index()
    {
        _enderecos = new List<Endereco>();
        using (var client = new HttpClient())
        {

            using (var response = await client.GetAsync("https://localhost:7255/api/Enderecos"))
            {
                string apiResponse = await response.Content.ReadAsStringAsync();

                _enderecos = JsonConvert.DeserializeObject<List<Endereco>>(apiResponse);

            }

        }

            return View(_enderecos);
    }
    

    // GET: EnderecoController/Details/5
    public ActionResult Details(int id)
    {
        return View();
    }

    // GET: EnderecoController/Create
    public ActionResult Create()
    {
        return View();
    }

    // POST: EnderecoController/Create
    [HttpPost]
    [ValidateAntiForgeryToken]
    public ActionResult Create(IFormCollection collection)
    {
        try
        {
            return RedirectToAction(nameof(Index));
        }
        catch
        {
            return View();
        }
    }

    // GET: EnderecoController/Edit/5
    [HttpGet]
    public ActionResult Edit(int id)
    {
        try 
        { 
            _endereco = new Endereco();
            using (var client = new HttpClient())
            {
                using (var response = client.GetAsync("https://localhost:7255/api/Enderecos/" +id).Result)
                {
                        if (response.IsSuccessStatusCode)
                        {
                            string data = response.Content.ReadAsStringAsync().Result;
                            _endereco = JsonConvert.DeserializeObject<Endereco>(data);
                        }                 

                 

                }

            }
                return View(_endereco);
        }
        catch(Exception ex)
        {
                TempData["errorMessage"] = ex.Message;
                return View();
        }
    }

    // POST: EnderecoController/Edit/5
    [HttpPost]
    [ValidateAntiForgeryToken]
    public ActionResult Edit(Endereco model)
    {
        try
        {
            string data = JsonConvert.SerializeObject(model);
            StringContent content = new StringContent(data, Encoding.UTF8, "application/json");
            using (var client = new HttpClient())
            {

                using (var response = client.PutAsync("https://localhost:7255/api/Endereco", content).Result)
                {
                    if (response.IsSuccessStatusCode)
                    {
                        TempData["successMessage"] = "Endereço Atualizado.";
                        return RedirectToAction(nameof(Index));
                    }

                    }

                }

        }
        catch (Exception ex)
        {
                TempData["errorMessage"] = ex.Message;
                return View();
        }
        return View();
        }

    // GET: EnderecoController/Delete/5
    public ActionResult Delete(int id)
    {
        return View();
    }

    // POST: EnderecoController/Delete/5
    [HttpPost]
    [ValidateAntiForgeryToken]
    public ActionResult Delete(int id, IFormCollection collection)
    {
        try
        {
            return RedirectToAction(nameof(Index));
        }
        catch
        {
            return View();
        }
    }
}
}
