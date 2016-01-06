jqCore.prototype.attr = function (data, dValue) {
    var switch_str = typeof (data) + "_" + typeof (dValue)
    switch (switch_str) {
        case "string_string":
            this.each(function (n, i) {
                i[data] = dValue;
            });
            ; break;
        case "string_object":
            this.each(function (n, i) {
                i[data] = dValue;
            });
            ; break;
        case "string_number":
            this.each(function (n, i) {
                i[data] = dValue;
            });
            ; break;

        case "object_undefined":
            this.each(function (n, i) {
                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        i[key] = data[key];
                    }
                }
            });
            ; break;
        case "string_undefined":
            var firstElement = this.get(0);
            return firstElement[data];
            ; break;
    }

    return this;
}

jqCore.prototype.removeAttr = function (name) {
    this.each(function (n, i) {
        delete (i[name])
    });
};

jqCore.prototype.width = function () {
    var firstElement = this.get(0);
    return firstElement.boundingBox().width;
}
jqCore.prototype.height = function () {
    var firstElement = this.get(0);
    return firstElement.boundingBox().height;
}






