 
var $ = function (root, selector) {
    return new jqCore(root, selector);
};

$.extend = function (ext) {
    for (var i in ext) {
        if (ext.hasOwnProperty(i)) {
            $[i] = ext[i];
        }
    }
};

$.each = function (target, cb) {
    for (var i in target) {
        if (target.hasOwnProperty(i)) {
            cb(i, target[i]);
        }
    }
}






$.fn = {};
$.fn.extend = function (ext) {
    for (var i in ext) {
        if (ext.hasOwnProperty(i)) {
            jqCore.prototype[i] = ext[i];
        }
    }
}
 
$.log = function (obj) {
    if (cc.sys.isNative) {
        if (typeof (obj) == "object") {
            console.log(JSON.stringify(obj));
        }
        else {
            console.log(obj.toString());
        }
    } else {
        console.log(obj);
    }
   
}