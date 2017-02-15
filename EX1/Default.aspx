<%@ Page Title="" Language="C#" MasterPageFile="~/IsrDefault.master"  %>

<script runat="server" type="text/C#">
    
    
    protected void Page_Load(object sender, EventArgs e)
    {
        Response.Redirect("~/Content/LV/news.aspx");
    }
</script>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="mainContent" Runat="Server">


</asp:Content>

