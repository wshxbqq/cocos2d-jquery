/// <reference path="../../cocos2d-js-v3.8.js" />

var OperationLayer = cc.Layer.extend({

    ctor: function () {
        this._super();
        this.init();
        return true;
    },

    init: function () {

        var panel = $.create("res/Layer_Operation.json");
        this.addChild(panel);


        $stage = $(panel, "#Panel_Stage");

        $(panel, "#Button_Back").click(function (e) {
            cc.director.runScene(cc.TransitionSlideInL.create(.3, new MenuLayer()));
        });

        function createBear() {
            var bear = cc.Sprite.create("res/bear.png");
            bear.setPosition(cc.p(Math.random() * 500, Math.random() * 500));
            return bear;
        }

        $(panel, "#Button_Append").click(function (e) {
            var bear = createBear();
            $stage.append(bear);
        });

        $(panel, "#Button_After").click(function (e) {
            var bear = createBear();
            $stage.append(bear);

             
            $(bear).after(createBear());
        });

        $(panel, "#Button_Empty").click(function (e) {
            $stage.empty();
     
        });

        $(panel, "#Button_Remove").click(function (e) {
            if ($stage.find("#").length > 0) {
                $stage.find("#").eq(0).remove();
            }
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