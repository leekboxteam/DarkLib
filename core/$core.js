var $DL = function () {
    this.extensions = ["DL"];
    this.ajax = new Ajax();
    this.require = function (name, url) {
        var data;
        if (url === undefined || name === undefined) {
            return "Err check 'url' and 'name' values";
        } else if (url === "DIT") {
            data = this.ajax.get("https://dark-ice-tech.github.io/" + name + "DL.map.json");
        } else {
            data = this.ajax.get(url);
        }
        var json = JSON.parse(data);

        //{name: name, type: [css, js], js: [...]}
        for (i = 0; i < json.type.length; i++) {
            if (json.type[i].toUpperCase === "JS") {
                js();
            } else if (json.type[i].toUpperCase === "CSS") {
                css();
            }
        }
        var js = function () {
            for (i = 0; i < json.js.length; i++) {
                var tst = this.extensions.indexOf(json.jsMap[i]);
                if (tst === "-1") {
                    this.ajax.setJS(json.js[i], json.map[i]);
                    eval("this." + json.jsMap[i] + "= new " + json.jsMap[i]);
                }

            }
        };

    };
};
