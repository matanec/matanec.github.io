using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.ComponentModel;


[ParseChildren(true)]
[PersistChildren(false)]
public partial class Controls_ContentItem : System.Web.UI.UserControl
{
    string _title;

    [PersistenceMode(PersistenceMode.InnerProperty)]
    public string Title
    {
        get { return _title; }
        set { _title = value; }
    }



    ITemplate _content;

    [PersistenceMode(PersistenceMode.InnerProperty), DefaultValue((string)null), Browsable(false), TemplateContainer(typeof(DataGridItem))]
    public virtual ITemplate Content
    {
        get { return _content; }
        set { _content = value; }
    }
    string _link;

    public string Link
    {
        get { return _link; }
        set { _link = value; }
    }

    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected override void OnPreRender(EventArgs e)
    {
        phTitle.InnerHtml = Title;
        Content.InstantiateIn(phContent);
        phLink.Visible = !string.IsNullOrEmpty(Link);
        if (phLink.Visible)
        {
            aLink.HRef = Link;
        }
        base.OnPreRender(e);
    }
}
