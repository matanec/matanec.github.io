// png for Internet Explorer 

function alphaFixIE() {
    var s, i, j;

    // IMG
    var els = document.getElementsByTagName("IMG");
    for (i = 0; i < els.length; i++) {
        s = els[i].src;
        if (s.toLowerCase().indexOf("png") != -1) {
            els[i].src = "../images/s.gif";
            els[i].style.filter += "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + s + "', sizingMethod=image);";
        }
    }

    // CSS: background
    for (i = 0; i < document.styleSheets.length; i++) {
        var pos = document.styleSheets[i].href.lastIndexOf("/");
        var cssDir = (pos != -1) ? document.styleSheets[i].href.substring(0, pos + 1) : "";
        for (j = 0; j < document.styleSheets[i].rules.length; j++) {
            var style = document.styleSheets[i].rules[j].style;
            if (style.backgroundImage.toLowerCase().indexOf(".png") != -1) {
                var filename = style.backgroundImage.substring(4, style.backgroundImage.length - 1);
                if (filename.indexOf("http://") != 0 && filename.indexOf("/") != 0)
                    filename = cssDir + filename;
                style.backgroundImage = "none";
                style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + filename + "', sizingMethod='crop');";
            }
        }
    }
}

if (navigator.userAgent.indexOf("MSIE") != -1 && navigator.userAgent.indexOf("Windows") != -1)
    window.attachEvent("onload", alphaFixIE);