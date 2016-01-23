
var CssLayer = cc.Layer.extend({

    ctor: function () {
        this._super();
        this.init();
        return true;
    },

    init: function () {
        this._super();
        var panel = $.create("res/Layer_Css.json");
        this.addChild(panel);

        

        $textLabel = $(panel, "#Text_Code");

        $(panel, "#Button_Back").click(function (e) {
            cc.director.runScene(cc.TransitionSlideInL.create(.3, new MenuScene()));
        });


        $(panel, "#Button_Css").click(function (e) {
            $(panel, "#Image_Target").addClass("animate1");
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