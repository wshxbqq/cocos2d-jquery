var LoadingScene = cc.Scene.extend({
    ctor: function () {
        this._super();
        this.init();
        return true;
    },
    init: function () {
        GLOBAL_DATA.load();
    },
    onEnter: function () {
        this._super();
        var resPack=Util.getResPackArr(res);
        cc.LoaderScene.preload(resPack, function () {
            cc.sys.__loadComplate = true;
            cc.director.runScene(new StartScene());
        }, this);
        
    }
});


