using System.Web;
using System.Web.Mvc;

namespace RequireJsNet.ProjectTemplate
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new RequireOptionFilter());
            filters.Add(new HandleErrorAttribute());
        }
    }
}
