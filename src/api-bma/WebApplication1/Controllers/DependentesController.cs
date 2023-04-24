﻿using consume_api_bma.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text;

namespace consume_api_bma.Controllers
{
    public class DependentesController : Controller
{
    // GET: DependentesController
    public ActionResult Index()
    {
        return View();
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
        string data = JsonConvert.SerializeObject(model);
        StringContent content = new StringContent(data, Encoding.UTF8,"application/json");
       
        try
        {
            return RedirectToAction(nameof(Index));
        }
        catch
        {
            return View();
        }
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
