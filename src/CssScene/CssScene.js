var CssScene = cc.Scene.extend({
    ctor: function () {
        this._super();
        this.init();
        return true;
    },
    init: function () {
        this._super();
    },
    onEnter: function () {
        this._super();
        var layer = new CssLayer();
        this.addChild(layer);
    }
});


