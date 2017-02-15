using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;

public class CultureConfigurationElementCollection : ConfigurationElementCollection
{
    protected override string ElementName
    {
        get
        {
            return "culture";
        }
    }

    public CultureConfigurationElementCollection()
    {
    }

    public override ConfigurationElementCollectionType CollectionType
    {
        get
        {
            return ConfigurationElementCollectionType.BasicMap;
        }
    }

    protected override ConfigurationElement CreateNewElement()
    {
        return new CultureConfigurationElement();
    }

    protected override object GetElementKey(ConfigurationElement element)
    {
        return ((CultureConfigurationElement)element).Name;
    }

    public void Add(CultureConfigurationElement el)
    {
        BaseAdd(el);
    }

    public void Remove(string name)
    {
        BaseRemove(name);
    }

    public new CultureConfigurationElement this[string name]
    {
        get { return (CultureConfigurationElement)BaseGet(name); }
    }

    public CultureConfigurationElement this[int index]
    {
        get { return (CultureConfigurationElement)BaseGet(index); }
    }
}
