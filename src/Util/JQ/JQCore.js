 
var jqCore = function (root, selector) {
    var _this = this;
    this.items = [];

    var tps = Object.prototype.toString.call(root) + "_" + Object.prototype.toString.call(selector);
    switch (tps) {
        case "[object String]_[object Undefined]":
            this.selector = root;
            this.root = cc.director.getRunningScene();
            this.items = CocosSelector(this.root, this.selector);
            ; break;
        case "[object Object]_[object Undefined]":
            this.items = [root];
            ; break;
        case "[object Array]_[object Undefined]":
            this.items = root;
            ; break;
        case "[object Object]_[object String]":
            this.selector = selector;
            this.root = root;
            this.items = CocosSelector(this.root, this.selector);
            ; break;
        case "[object Undefined]_[object Undefined]":

            ;break;
        default: return; break;

    }

    this.length = this.items.length;
    for (var i = 0; i < this.items.length; i++) {
        this[i] = this.items[i];
    }


  
};






 
 