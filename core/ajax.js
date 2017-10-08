var Ajax = function () {
    this.get = function (url) {
        var data;
        $.ajax(url, {
            dataType: 'text',
            success: function (data1) {
                data = data1;
            },
            async: false
        });
        return data;
    };
    this.setCss = function (file) {
        var data = this.get(file);
        $('head').append("<style>" + data + "</style>");
    };
    this.setJS = function (file) {
        var data = this.get(file);
        $('head').append("<script>" + data + "</script>");
    };
};
