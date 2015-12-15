
jqCore.prototype.append = function (node) {
    var firstElement = this.get(0);
    firstElement.addChild(node);
    return this
}
jqCore.prototype.prepend = function (node) {
    var firstElement = this.get(0);
    firstElement.addChild(node,0);
    return this
}

jqCore.prototype.after =jqCore.prototype.before= function (node) {
    var firstElement = this.get(0);
    var parent = firstElement.getParent();
    if (parent) {
        parent.addChild(node);
    }
    return this

}

jqCore.prototype.empty = function () {
    this.each(function (n, i) {
        i.removeAllChildren();
    });
}

jqCore.prototype.remove = function () {
    this.each(function (n, i) {
        i.removeFromParent();
    });
}



