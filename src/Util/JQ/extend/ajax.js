$.ajax = function (method, url, data, cb) {
    var _url = url;

    function obj2arg(d) {
        var result = [];
        for (var i in d) {
            result.push("&");
            result.push(encodeURIComponent(i));
            result.push("=");
            result.push(encodeURIComponent(d[i]));
        }
        return result.join('').substring(1);

    }

    var xhr = cc.loader.getXMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status <= 207)) {
            var httpStatus = xhr.statusText;
            var response = xhr.responseText;
            if (cb) {
                cb(response);
            }

        }
    }


    if (method == "POST") {
        xhr.open(method, _url);
        //mulipart/form-data for upload
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(obj2arg(data));
    } else {
        if (_url.indexOf('?') > -1) {
            xhr.open(method, _url + "&" + obj2arg(data));
        } else {
            if (obj2arg(data) == "") {
                xhr.open(method, _url);
            } else {

                xhr.open(method, _url + "?" + obj2arg(data));
            }
        }

        xhr.send();
    }

}

$.get = function (url, data, cb) {
    var _date;
    var _cb;
    if (typeof (data) == "object") {
        _date = data;
        _cb = cb;
    }
    if (typeof (data) == "function") {
        _date = {}
        _cb = data;
    }
    this.ajax("GET", url, _date, _cb)
}

$.post = function (url, data, cb) {
    var _date;
    var _cb;
    if (typeof (data) == "object") {
        _date = data;
        _cb = cb;
    }
    if (typeof (data) == "function") {
        _date = {}
        _cb = data;
    }
    this.ajax("POST", url, _date, _cb)
}
