var EventScence = cc.Scene.extend({
    ctor: function () {
        this._super();
        this.init();
        return true;
    },
    init: function () {
    },
    onEnter: function () {
        this._super();
        var layer = new EventLayer();
        this.addChild(layer);
    }
});


