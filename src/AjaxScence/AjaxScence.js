﻿var AttrScence = cc.Scene.extend({
    ctor: function () {
        this._super();
        this.init();
        return true;
    },
    init: function () {
    },
    onEnter: function () {
        this._super();
        var layer = new AttrLayer();
        this.addChild(layer);
    }
});


