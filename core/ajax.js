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
        $('body').append('<iframe id="setJS" src="' + file + '" width="0" height="0"></iframe>');
        document.getElementById('setJS').onload= function() {
            var js = $("#setJS").contents().find("pre");
            $('head').append('<script>' + js + '</script>');
        };
    }
})();
