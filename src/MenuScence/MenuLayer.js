
var MenuLayer = cc.Layer.extend({

    ctor: function () {
        this._super();
        this.init();
        return true;
    },

    init: function () {

        var panel = $.create("res/Layer_Menu.json");
        this.addChild(panel);

        $(panel, "#Button_Selector").click(function (e) {
            cc.director.runScene(cc.TransitionSlideInR.create(.3, new SelectorScence()));
        });

        $(panel, "#Button_Event").click(function (e) {
            cc.director.runScene(cc.TransitionSlideInR.create(.3, new EventScence()));
        });

        $(panel, "#Button_Animate").click(function (e) {
            cc.director.runScene(cc.TransitionSlideInR.create(.3, new AnimateScence()));
        });

        $(panel, "#Button_Dom").click(function (e) {
            cc.director.runScene(cc.TransitionSlideInR.create(.3, new OperationScence()));
        });

        $(panel, "#Button_Ajax").click(function (e) {
            cc.director.runScene(cc.TransitionSlideInR.create(.3, new AttrScence()));
        });

        $(panel, "#Button_Util").click(function (e) {
            cc.director.runScene(cc.TransitionSlideInR.create(.3, new OtherScence()));
        });
        
      
    },
    
    update: function (dt) {
        var _this = this;
    },

    onEnter: function () {
        this._super();
       
    
    },

    onExit: function () {
        this._super();
    }

});