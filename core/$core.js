var $DL = {};
(function () {
    $DL.require = function (name, type, url) {
        if (name === undefined) {
            return "Location is required";
        }
        if (type === "DLe") {
            if (url === "DLe") {
                var data = $DL.ajax("https://dark-ice-tech.github.io/DarkLib/extensions/" + name + ".min.js");
                eval("$DL." + name + "=function(){" + data + "}");
            } else {
                var data = $DL.ajax(url);
                eval("$DL." + name + "=function(){" + data + "}");
            }
        } else if(type === "js"){
            var data = $DL.ajax(url);
            eval(data);
        }
    };
})();
