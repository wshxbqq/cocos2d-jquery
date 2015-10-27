
jqCore.prototype.hide = function () {
    this.each(function (n, i) {
        i.setVisible(false);
    })
    return this;
}

jqCore.prototype.show = function () {
    this.each(function (n, i) {
        i.setVisible(true);
    })
    return this;
}

jqCore.prototype.fadeOut = function (during, cb) {
    this.each(function (n, i) {
        var action = cc.fadeOut(during);
        var callback = cc.callFunc(function (d) {
            if (cb) {
                cb(d);
            }

        });

        var seq = cc.sequence(action, callback);

        i.runAction(seq);
    });
    return this;
}

jqCore.prototype.fadeIn = function (during, cb) {
    this.each(function (n, i) {
        var action = cc.fadeIn(during);
        var callback = cc.callFunc(function (d) {
            if (cb) {
                cb(d);
            }

        });

        var seq = cc.sequence(action, callback);

        i.runAction(seq);
    });
    return this;
}

jqCore.prototype.animate = function (condition, during, cb) {
 
    var x = condition.x ? condition.x : 0;
    var y = condition.y ? condition.y : 0;

    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        
        var action = cc.moveTo(during, cc.p(x, y));
        var callback = cc.callFunc(function (d) {
            if (cb) {
                cb(d);
            }
            
        });

        var seq = cc.sequence(action,callback);

        item.runAction(seq);

    }
    return this;
}
