var OperationScene = cc.Scene.extend({
    ctor: function () {
        this._super();
        this.init();
        return true;
    },
    init: function () {
    },
    onEnter: function () {
        this._super();
        var layer = new OperationLayer();
        this.addChild(layer);
    }
});


