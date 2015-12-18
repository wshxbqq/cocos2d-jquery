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


jqCore.prototype.get = function (index) {
    return this.items[index];
}


jqCore.prototype.index = function (obj) {
    var i;
    for (var i = 0; i < this.items.length;i++) {
        if (this.items[i] === obj) {
            return i
        }
    }
}

jqCore.prototype.has = function (selector) {

    if (typeof (selector) == "string") {
        var _queryPool = [];
        this.each(function (n, i) {
            if ($(i).find(selector).size()) {
                _queryPool.push(n);
            }
        });
        return $(_queryPool)

    }


    if (typeof (selector) == "object") {
        for (var i = 0; i < this.items.length; i++) {
            var n = this.items[i];
            var parent = selector.getParent();
            while (!!parent) {
                if (parent == n) {
                    return $(n);
                }
                parent = parent.getParent();
            }
        }
    }
    return $();
};

jqCore.prototype.not = function (selector) {
    var _this = this;
    var strType = typeof (selector);
    var _pArr = [];
    function forString() {
        _this.each(function (n, i) {
            var isMatch = CocosSelector.singleNodeMatch(i, selector);
            if (!isMatch) {
                _pArr.push(i);
            }
        });
        
    }

    function forNode() {
        _this.each(function (n, i) {
            if (i !== selector) {
                _pArr.push(i);
            }
        });
       
    }

    function forFilterFun() {
        _this.each(function (n, i) {
            if (!selector(i)) {
                _pArr.push(i);
            }
        });
    }

    switch (strType) {
        case "string": forString(); break;
        case "object": forNode(); break;
        case "function": forFilterFun(); break;
        case "undefined": return _this; break;
    }

    return $(_pArr);

}

jqCore.prototype.slice = function (start, end) {
    var _pArr = [];
    end = end ? end : this.items.length;

    this.each(function (n, i) {
        if (n >= start && n < end) {
            _pArr.push(i);
        }
    });
    return $(_pArr);

};

jqCore.prototype.children = function (exp) {
    var _queryPool = [];
    var typeStr = typeof (exp);

    switch (typeStr) {
        case "undefined":
            this.each(function (n, i) {
                var childrens = i.getChildren();
                for (var i in childrens) {
                    if (childrens.hasOwnProperty(i)) {
                        _queryPool.push(childrens[i]);
                    }
                }
            }); break;
        case "string":
            this.each(function (n, i) {
                var childrens = i.getChildren();
                for (var i in childrens) {
                    if (childrens.hasOwnProperty(i)) {
                        if (CocosSelector.singleNodeMatch(exp)) {
                            _queryPool.push(childrens[i]);
                        }
                    }
                }
            }); break;
    }
    


    return $(_queryPool);
};

jqCore.prototype.parent = function () {
    return $(this[0].getParent());

};


jqCore.prototype.filter = function (cbFun) {
    var _queryPool = [];
    this.each(function (n, i) {
        if (cbFun(i)) {
            _queryPool.push(i);
        }
    });
    return $(_queryPool);
};


