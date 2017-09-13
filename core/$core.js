var $DL = {};
(function () {
    $DL.require = function (name, lookup) {
        if (name === undefined) {
            return "Location is required";
        }
        if (lookup === "DLe") {
            var data = $DL.ajax("https://dark-ice-tech.github.io/DarkLib/extensions/" + name + ".min.js");
            alert(data)
            eval("$DL." + name + "=function(){" + data + "}");
        }
    };
})();