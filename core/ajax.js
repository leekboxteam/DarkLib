(function () {
    $DL.ajax = {};

    $DL.ajax.setHTML = function(file, div) {
        $(div).load(file);
    }

    $DL.ajax.setCSS = function(file) {
        $.ajax(file, {
            dataType: 'text',
            success: function (data) {
                $('head').append("<style>" + data + "</style>");
            }
        });
    }

    $DL.ajax.setJS = function(file) {
        $.ajax(file, {
            dataType: 'text',
            success: function (data) {
                $('head').append("<script>" + data + "</script>");
            }
        });
    }
})();
