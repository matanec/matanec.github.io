using System;
using System.Collections.Generic;
using System.Text;
using System.Resources;

 public static class LocalizationManager
    {
        public static string GetString(string name)
        {
            if (Resources.Resource.ResourceManager != null)
            {
                return Resources.Resource.ResourceManager.GetString(name);
            }
            return null;
        }
        public static string GetFormatedString(string name, params object[] args)
        {
            return string.Format(GetString(name), args);
        }

        public static ResourceManager ResourceManager
        {
            get
            {
                return Resources.Resource.ResourceManager;
            }
        }

    }

