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
(function () {
    $DL.ajax = function (url) {
        $.ajax(url, {
            dataType: 'text',
            success: function (data) {
                alert(data);
                return data
            }
        });
    }
})();

function getURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return decodeURIComponent(sParameterName[1]);
        }
    }
}

function getURLUpdate() {

}

function redirect(location, type) {
    if (type == "0") {
        //rediect with reload
        window.location.href = location;
    } else if (type == "1") {
        //rediect without reload
        history.pushState('', '', location);
    }
}

function setURLParameter(name, data) {
    var currentPar = window.location.search;

    console.log();
    if (currentPar == "") {
        history.pushState('', '', window.location.href + "?" + name + "=" + data);
    } else {
        history.pushState('', '', window.location.href + "&" + name + "=" + data);
    }
}

function checkURL() {
    var currentURL = window.location.href;
    var newURL = currentURL;
    try{
        var searchedURL = currentURL.indexOf("?")

        for(i = 0; i < newURL.length; i++){
            if (newURL.charAt(i) == "?" && i > searchedURL) {
                newURL.substring(i, 1)
                i = i-1

                // url

            }
        }
console.log(newURL)
    }catch(err){
        console.log(err)
    }
}
