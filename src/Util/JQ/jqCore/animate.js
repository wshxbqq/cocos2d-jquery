
jqCore.prototype.hide = function (num) {
    if (typeof (num) === "number") {
        this.each(function (n, i) {
            $(i).fadeOut(num, function (d) {
                i.setVisible(false);
            });
            
        })
    } else {
        this.each(function (n, i) {
            i.setVisible(false);
        })
    }
    return this;
}

jqCore.prototype.show = function (num) {
    if (typeof (num) === "number") {
        this.each(function (n, i) {
            i.setVisible(true);
            $(i).fadeIn(num, function (d) {
            });

        })
    } else {
        this.each(function (n, i) {
            i.setVisible(true);
        })
    }
    return this;
}

jqCore.prototype.fadeOut = function (during, cb) {
    this.each(function (n, i) {
        
        var action = cc.fadeOut(during);
        var seq;
        if (n === 0) {
            var callback = cc.callFunc(function (d) {
                if (cb) {
                    cb(d);
                }

            });

            seq = cc.sequence(action, callback);
        } else {
            seq = cc.sequence(action);
        }
        

        i.runAction(seq);
    });
    return this;
}

jqCore.prototype.fadeIn = function (during, cb) {
    this.each(function (n, i) {
        var action = cc.fadeIn(during);
        var seq;
        if (n === 0) {
            var callback = cc.callFunc(function (d) {
                if (cb) {
                    cb(d);
                }

            });

            seq = cc.sequence(action, callback);
        } else {
            seq = cc.sequence(action);
        }
        i.runAction(seq);
    });
    return this;
}



jqCore.prototype.toggle = function (during, cb) {
    var f = this[0].getOpacity();
    if (f) {
        this.fadeOut(during, function (d) {
            cb(d);
        });
    } else {
        this.fadeIn(during, function (d) {
            cb(d);
        });
    }
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
