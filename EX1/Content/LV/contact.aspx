<%@ Page Title="" Language="C#" MasterPageFile="~/IsrDefault.master" %>
<script runat="server">

</script>
<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="mainContent" Runat="Server">
    <isr:ContentItem ID="phMain" runat="server">
        <Content>

           <iframe width="640" height="480" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps/ms?ie=UTF8&amp;hl=en&amp;msa=0&amp;msid=111465726560618621288.0004643f43be6940cacaf&amp;ll=56.970503,24.179707&amp;spn=0.011228,0.027466&amp;z=15&amp;output=embed"></iframe>
           <br /><br />
           <p>
            SIA Infoserv-Rīga<br/>
            Raunas 41c, Rīga, LV-1084, Latvija<br/>
            Tālrunis: +371 67543379<br/>
            Fakss: +371 67540730<br/>
            E-pasts: <a href="mailto:office@isr.lv">office@isr.lv</a><br/></p>

        </Content>
    </isr:ContentItem>

</asp:Content>

