var $DL = {};
(function () {
    $DL.require = function (name, type, url) {
        if (name === undefined) {
            return "Location is required";
        }
        if (type === "DLe") {
            if (url === "DLe") {
                var data = $DL.ajax.setJS("https://dark-ice-tech.github.io/DarkLib/extensions/" + name + ".min.js");
            } else {
                var data = $DL.ajax.setJS(url)
            }
        } else if(type === "js"){
            var data = $DL.ajax(url);
            eval(data);
        }
    };
})();
