 
var $ = function (root, selector) {
    return new jqCore(root, selector);
};


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