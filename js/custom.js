var languages = new Array("/LV/", "/EN/");

function setLang(lang) {
    var l = "/" + lang.replace(" ", "") + "/";
    var s = location.href;
    for (var i = 0; i < languages.length; i++) {
        s = s.replace(languages[i], l);
    }
    location.href = s;
}

$(document).ready(function() {

    var langs = $("div.lang");
    for (var i = 0; i < langs.length; i++) {
        var curLang = $(langs[i]).text().replace(" ", "");
        curLang = "/" + curLang + "/";
        if (location.href.indexOf(curLang) >= 0) {
            $(langs[i]).addClass("langSelected");
        }
        else {
            $(langs[i]).addClass("langAvailable");
        }
    }

    var langAvailable = $("div.langAvailable");

    langAvailable.mouseover(function() { $(this).addClass("langSelected"); });
    langAvailable.mouseout(function() { $(this).removeClass("langSelected"); });

    langAvailable.click(function() { setLang($(this).text()); });

    var menuLinks = $("a.munuLink");
    var parts = location.href.split("/");

    for (var i = 0; i < menuLinks.length; i++) {
        var innerParts = menuLinks[i].href.split("/");
        if (innerParts[innerParts.length - 1] == parts[parts.length - 1]) {
            var curLink = $(menuLinks[i]);
            curLink.parent().addClass("menuThisPage");
            curLink.href = "";
            //curLink.addClass("menuThisPage");
        }
    }

});
