/// <reference path="../../cocos2d-js-v3.8.js" />

var StartLayer = cc.Layer.extend({

    ctor: function () {
        this._super();
        this.init();
        return true;
    },

    init: function () {
        this._super();
        var cfgPanel = $.create("res/Layer1.json");
        this.addChild(cfgPanel);

  

        $(cfgPanel, "#Button_Start").click(function (item) {
            cc.director.runScene(cc.TransitionSlideInR.create(.3, new MenuScene()));

        });

        $(cfgPanel, "#Button_GitHub").click(function (item) {
            if (!cc.sys.isNative) {
                location.href = "https://github.com/wshxbqq/cocos2d-jquery";
            }

        });
       
        
        

    },
    
    update: function (dt) {
        this._super();
        var _this = this;
    },

    onEnter: function () {
        this._super();
        
 
    },

    onExit: function () {
        this._super();
    }

});