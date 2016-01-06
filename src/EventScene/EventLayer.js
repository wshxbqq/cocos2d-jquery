
var EventLayer = cc.Layer.extend({

    ctor: function () {
        this._super();
        this.init();
        return true;
    },

    init: function () {

        var panel = $.create("res/Layer_Event.json");
        this.addChild(panel);


        $(panel, "#Button_Back").click(function (e) {
            cc.director.runScene(cc.TransitionSlideInL.create(.3, new MenuLayer()));
        });

        var $eventTxt = $(panel, "#Text_Label_Event");
        $(panel, "#Button_Event")
        .bind("touchstart", function (e, x, a, b) {
            $eventTxt[0].setString("start");
        }).bind("touchend", function (e) {
            $eventTxt[0].setString("end");
        }).bind("touchmove", function (e) {
            var position = e.getTouchMovePosition();
            var pStr = "x:" + Math.floor(position.x) + "  y:" + Math.floor(position.y);
            $eventTxt[0].setString(pStr);
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