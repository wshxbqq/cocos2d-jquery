jqCore.prototype.size = function () {
    return this.items.length;
}

jqCore.prototype.first = function () {
    return $(this.items[0])
}

jqCore.prototype.last = function () {
    return $(this.items[this.items.length - 1])
}

jqCore.prototype.eq = function (idx) {
    return $(this.items[idx])
}

jqCore.prototype.find = function (selector) {
    if (this.items[0]) {
        return $(this.items[0], selector);
    }
}