using consume_api_bma.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text;

namespace consume_api_bma.Controllers
{
    public class DependentesController : Controller
{
    List<Dependente> _dependentes = new List<Dependente>();
        
            // GET: DependentesController
            [HttpGet]
    public async Task<IActionResult> Index()
    {
        _dependentes = new List<Dependente>();
            using (var client = new HttpClient())
            {

                using (var response = await client.GetAsync("https://localhost:7255/api/Dependentes"))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();

                    _dependentes = JsonConvert.DeserializeObject<List<Dependente>>(apiResponse);

                }

            }

            return View(_dependentes);
        }

        // GET: DependentesController/Details/5
        public ActionResult Details(int id)
    {
        return View();
    }

    // GET: DependentesController/Create
    public ActionResult Create()
    {
            
        return View();
    }

    // POST: DependentesController/Create
    [HttpPost]
    [ValidateAntiForgeryToken]
    public ActionResult Create(Dependente model)
    {
        

        try
        {
            string data = JsonConvert.SerializeObject(model);
            StringContent content = new StringContent(data, Encoding.UTF8, "application/json");
            using (var client = new HttpClient())
            {

                using (var response = client.PostAsync("https://localhost:7255/api/Dependentes", content).Result)
                {
                    if (response.IsSuccessStatusCode)
                    {
                        TempData["successMessage"] = "Dependente Cadastrado.";
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

    // GET: DependentesController/Edit/5
    public ActionResult Edit(int id)
    {
        return View();
    }

    // POST: DependentesController/Edit/5
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

    // GET: DependentesController/Delete/5
    public ActionResult Delete(int id)
    {
        return View();
    }

    // POST: DependentesController/Delete/5
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
