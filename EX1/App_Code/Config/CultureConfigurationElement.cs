using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;

public class CultureConfigurationElement : ConfigurationElement
{
    public CultureConfigurationElement() { }
    public CultureConfigurationElement(string name, string cultureRepresentatation)
    {
        this["name"] = name;
        this["cultureRepresentatation"] = cultureRepresentatation;
    }

    [ConfigurationProperty("name", IsRequired = true)]
    public string Name
    {
        get
        {
            return (string)this["name"];
        }
        set
        {
            this["name"] = value;
        }
    }


    [ConfigurationProperty("cultureRepresentatation", IsRequired = true)]
    public string CultureRepresentatation
    {
        get
        {
            return (string)this["cultureRepresentatation"];
        }
        set
        {
            this["cultureRepresentatation"] = value;
        }
    }
}