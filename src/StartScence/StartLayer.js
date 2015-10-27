
var StartLayer = cc.Layer.extend({

    ctor: function () {
        this._super();
        this.init();
        return true;
    },

    init: function () {

        var cfgPanel = $.create("res/Layer_Cfg.json");
        this.addChild(cfgPanel);

        $(cfgPanel, "#Button_Selector").click(function (item) {
      
            var buttons = $("#Panel_Color #Button_.*");
            buttons.fadeOut(0.5, function () {
                buttons.fadeIn(0.5);
            });


        });

        $(cfgPanel, "#Button_Event").bind("touchstart", function (item) {
            console.log("touchstart  triggered");
        }).bind("touchend", function (item) {
            console.log("touchend  triggered");
        });


        $(cfgPanel, "#Button_Ajax").click(function (item) {
            $.get("index.html", function (data) {
                console.log(data);
            });
            $.post("index.html", function (data) {
                console.log(data);
            });
        });


        $(cfgPanel, "#Button_Animate").click(function (item) {
            var button = $("#Panel_Color #Button_Animate");
            var raw = button[0].getPosition();
            button.animate({ x: 0, y: 0 }, 2, function () {
                button.animate({ x: raw.x, y: raw.y }, 2, function () {
                });

            });
        });

        $(cfgPanel, "#Button_Tool").click(function (item) {
            var buttons = $("#Panel_Color #Button_.*");
            buttons.call("setColor", cc.color(255 * Math.random(), 255 * Math.random(), 255 * Math.random()));

            buttons.each(function (n, i) {
                cc.log(i);
            });

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