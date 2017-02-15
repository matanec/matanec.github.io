using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;

/// <summary>
/// Summary description for CultureConfigurationSection
/// </summary>
public class CultureConfigurationSection : ConfigurationSection
{

    [ConfigurationProperty("cultures",
    IsDefaultCollection = false)]
    public CultureConfigurationElementCollection Cultures
    {
        get
        {
            CultureConfigurationElementCollection cultures =
            (CultureConfigurationElementCollection)base["cultures"];
            return cultures;
        }
    }
}
