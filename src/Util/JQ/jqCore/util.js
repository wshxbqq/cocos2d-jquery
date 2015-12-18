jqCore.prototype.each = function (cb) {
    for (var i = 0; i < this.items.length; i++) {
        if (this.items.hasOwnProperty(i)) {
            cb(i, this.items[i]);
        }
    }
}
 

jqCore.prototype.data = function (key, val) {
    if (typeof (val) != "undefined") {
        this.each(function (n, i) {
            if (!i.jqUserData) {
                i.jqUserData = {};
            }
            i.jqUserData[key] = val;
        });
        return this;
    } else {
        if (this.length > 0) {
            var _jqData = this.get(0)["jqUserData"];
            if (_jqData[key]) {
                return _jqData[key];
            }
            
        }

    }

    
    
 
}

jqCore.prototype.clean = function () {
    for (var i = 0; i < this.items.length; i++) {
        delete (this[i]);
    }
    this.items = [];
    return this;
};



jqCore.prototype.accept = function (arr) {
    this.items = arr;
    for (var i = 0; i < this.items.length; i++) {
        this[i] = this.items[i];
    };
    this.length = this.items.length;
    return this;
}


jqCore.prototype.call = function () {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
    }
    var funName = args.shift();
    this.each(function (n, i) {
        if (i[funName]) {
            i[funName].apply(i, args)
        }
    });
    return this;
}