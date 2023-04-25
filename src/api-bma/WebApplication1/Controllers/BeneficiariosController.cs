using consume_api_bma.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace consume_api_bma.Controllers
{

    public class BeneficiariosController : Controller
    {
        List<Beneficiario> _beneficiarios = new List<Beneficiario>();
        Beneficiario _beneficiario = new Beneficiario();

        
        // GET: BeneficiariosController


        [HttpGet]
    public async Task <IActionResult> Index()
    {
        _beneficiarios = new List<Beneficiario>();
        using (var client = new HttpClient())       
        {

                using (var response = await client.GetAsync("https://localhost:7255/api/Beneficiarios"))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();

                    _beneficiarios = JsonConvert.DeserializeObject<List<Beneficiario>>(apiResponse);

                }

        }

            return View(_beneficiarios);
    }

    // GET: BeneficiariosController/Details/5
    public ActionResult Details(int id)
    {
              ;
            return View();
    }

    // GET: BeneficiariosController/Create
    public ActionResult Create()
    {
        return View();
    }

    // POST: BeneficiariosController/Create
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

    // GET: BeneficiariosController/Edit/5
    public ActionResult Edit(int id)
    {
        return View();
    }

    // POST: BeneficiariosController/Edit/5
    [HttpPost]
    [ValidateAntiForgeryToken]
    public ActionResult Edit(int id, IFormCollection collection)
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

    // GET: BeneficiariosController/Delete/5
    public ActionResult Delete(int id)
    {
        return View();
    }

    // POST: BeneficiariosController/Delete/5
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
