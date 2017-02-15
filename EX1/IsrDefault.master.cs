using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;

public partial class IsrDefault : System.Web.UI.MasterPage
{

    protected override void OnInit(EventArgs e)
    {
        CultureConfigurationSection cultureConfig =
            (CultureConfigurationSection)ConfigurationManager.GetSection("isrLocalization");
        if (cultureConfig != null && cultureConfig.Cultures != null && cultureConfig.Cultures.Count > 0)
        {
            int contentSegmentNum = -1;
            for (int i = 0; i < Request.Url.Segments.Length; i++)
            {
                if (Request.Url.Segments[i].ToLower() == "content/")
                {
                    contentSegmentNum = i;
                    break;
                }
            }

            if (contentSegmentNum >= 0)
            {
                string lang = Request.Url.Segments[contentSegmentNum + 1].ToUpper().Replace("/", "");
                CultureConfigurationElement cultureElement = cultureConfig.Cultures[lang];
                if (cultureElement != null)
                {
                    string culture = cultureElement.CultureRepresentatation;
                    System.Globalization.CultureInfo ci = new System.Globalization.CultureInfo(culture);
                    System.Threading.Thread.CurrentThread.CurrentCulture = ci;
                    System.Threading.Thread.CurrentThread.CurrentUICulture = ci;
                }
            }
        }
        base.OnInit(e);
    }
    
    protected void Page_Load(object sender, EventArgs e)
    {
        
    }
}
