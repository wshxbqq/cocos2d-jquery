
var AnimateLayer = cc.Layer.extend({

    ctor: function () {
        this._super();
        this.init();
        return true;
    },

    init: function () {

        var panel = $.create("res/Layer_Animate.json");
        this.addChild(panel);

        $textLabel = $(panel, "#Text_Code");

        $(panel, "#Button_Back").click(function (e) {
            cc.director.runScene(cc.TransitionSlideInL.create(.3, new MenuScene()));
        });

        $(panel, "#Button_FadeIn").click(function (e) {
            $("#Image_Target").fadeIn(1);
            $textLabel[0].setString('$("#Image_Target").fadeIn(1);');
        });

        $(panel, "#Button_FadeOut").click(function (e) {
            $("#Image_Target").fadeOut(1);
            $textLabel[0].setString('$("#Image_Target").fadeOut(1);');
        });

        $(panel, "#Button_Animate").click(function (e) {
             
            $("#Image_Target").animate({ x: 115, y: 750 }, 1, function (e) {
                $(e).animate({ x: 315, y: 750 }, 1, function (e) {
                    
                });

            });
            $textLabel[0].setString('$("#Image_Target").animate({ x: 115, y: 750 }, 1, function (e) {});');

        });

        $(panel, "#Button_Show").click(function (e) {
            $("#Image_Target").show();
            $textLabel[0].setString('$("#Image_Target").show();');
        });



        $(panel, "#Button_Hide").click(function (e) {
            $("#Image_Target").hide();
            $textLabel[0].setString('$("#Image_Target").hide();');
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