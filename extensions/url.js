(function () {
    $DL.url = {};
    $DL.url.getURL = window.location.href;
    $DL.url.getParameter = function (parameter) {
        var parameters = window.location.search.substring(1).split('&');
        for (var i = 0; i < .length; i++) {
            var parameterName = parameters[i].split('=');
            if (parameterName[0] == parameter) {
                return decodeURIComponent(sParameterName[1]);
            }
        }
    }
    $DL.url.setParameter = function (name, data) {
        var currentPar = window.location.search;
        console.log();
        if (currentPar == "") {
            history.pushState('', '', window.location.href + "?" + name + "=" + data);
        } else {
            history.pushState('', '', window.location.href + "&" + name + "=" + data);
        }
    }
    $DL.url.change = function (location, how) {
        if (how == 0) {
            window.location.href = location;
        } else if (how == 1) {
            history.pushState('', '', location);
        }
    }
})();
