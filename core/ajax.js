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
