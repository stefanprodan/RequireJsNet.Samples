using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RequireJsNet.ProjectTemplate.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            //pass values to js
            RequireJsOptions.Add("ids", new[] { 1, 2, 3 }, RequireJsOptionsScope.Page);

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}