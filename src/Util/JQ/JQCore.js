 
var jqCore = function (root, selector) {
    var _this = this;
    this.items = [];

    var tps = typeof (root) + "_" + typeof (selector);
    switch (tps) {
        case "string_undefined":
            this.selector = root;
            this.root = cc.director.getRunningScene();
            this.items = CocosSelector(this.root, this.selector);
            ; break;
        case "object_undefined":
            this.items = [root];
            ; break;
        case "object_string":
            this.selector = selector;
            this.root = root;
            this.items = CocosSelector(this.root, this.selector);
            ; break;
        case "undefined_undefined":

            ;break;
        default: return; break;

    }

    this.length = this.items.length;
    for (var i = 0; i < this.items.length; i++) {
        this[i] = this.items[i];
    }


  
};






 
 