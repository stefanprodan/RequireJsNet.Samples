using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RequireJsNet.ProjectTemplate
{
    public class RequireOptionFilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var url = new UrlHelper(filterContext.RequestContext);
            RequireJsOptions.Add("globalUrlViaFilter", url.Action("Index", "Contact"), RequireJsOptionsScope.Global);
        }
    }

    public static class RenderHelper
    {
        public static string RenderAppVersion()
        {
            return "v=" + System.Reflection.Assembly.GetExecutingAssembly().GetName().Version.ToString();
        }
    }
}