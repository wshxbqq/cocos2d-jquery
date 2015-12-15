jqCore.prototype.each = function (cb) {
    for (var i = 0; i < this.items.length; i++) {
        if (this.items.hasOwnProperty(i)) {
            cb(i, this.items[i]);
        }
    }
}
 

jqCore.prototype.data = function (obj) {
    this.each(function (n, i) {
        i.userData = obj;
    });
    return this;
 
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