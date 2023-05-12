using Azure;
using consume_api_bma.Models;
using MessagePack;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text;

namespace consume_api_bma.Controllers
{

    public class BeneficiariosController : Controller
    {
        List<Beneficiario> _beneficiarios = new List<Beneficiario>();
        Beneficiario _beneficiario = new Beneficiario();

        
        // GET: BeneficiariosController


    [HttpGet]
    public async Task <IActionResult> Index(string nis)
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
        [HttpGet]
        public async Task<IActionResult> FindBeneficiario(string nis)
        {
            _beneficiarios = new List<Beneficiario>();

            using (var client = new HttpClient())
            {

                using (var response = await client.GetAsync("https://localhost:7255/" + nis))
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
    [HttpGet]
    public ActionResult Create(string nis)
    {
            try
            {
                _beneficiarios = new List<Beneficiario>();
                using (var client = new HttpClient())
                {
                    using (var response = client.GetAsync("https://localhost:7255/" + nis).Result)
                    {
                        if (response.IsSuccessStatusCode)
                        {
                            string data = response.Content.ReadAsStringAsync().Result;
                            _beneficiarios = JsonConvert.DeserializeObject<List<Beneficiario>>(data);
                        }



                    }

                }
                return View(_beneficiarios);
            }
            catch (Exception ex)
            {
                TempData["errorMessage"] = ex.Message;
                return View();
            }
        }

    // POST: BeneficiariosController/Create
    [HttpPost]
    [ValidateAntiForgeryToken]
    public ActionResult Create(Beneficiario model)
    {
            try
            {
                string data = JsonConvert.SerializeObject(model);
                StringContent content = new StringContent(data, Encoding.UTF8, "application/json");
                using (var client = new HttpClient())
                {

                    using (var response = client.PutAsync("https://localhost:7255/api/Beneficiarios", content).Result)
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
