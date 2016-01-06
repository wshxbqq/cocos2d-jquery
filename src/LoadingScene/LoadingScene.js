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
        cc.LoaderScene.preload(Util.getResPackArr(res), function () {
            cc.sys.__loadComplate = true;
            cc.director.runScene(new StartScene());
        }, this);
        
    }
});


