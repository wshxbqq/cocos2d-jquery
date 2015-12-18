/// <reference path="../../cocos2d-js-v3.8.js" />

var SelectorLayer = cc.Layer.extend({

    ctor: function () {
        this._super();
        this.init();
        return true;
    },

    init: function () {
        var _this = this;
        var panel = $.create("res/Layer_Selector.json");
        this.addChild(panel);
        this.panel = panel;

   
        var a1 = cc.scaleTo(0.2, 1.2);
        var a2 = cc.scaleTo(0.2, 0.8);
        var seq = cc.sequence(a1, a2);
        var rep = cc.repeatForever(seq);
        
        
        $(panel, "#Button_Back").click(function (e) {
            cc.director.runScene(cc.TransitionSlideInL.create(.3, new MenuLayer()));
        });

        //$("#.*red") 选择所有红色的.
        $(panel, "#Button_1").click(function (e) {
            _this.clearAllAction();
            $("#.*red").each(function (n, i) {
                i.runAction(rep.clone());
            });

            $(panel, "#Text_Code")[0].setString(
'//$(\"#.*red\") 选择所有红色的.\n\n\
$("#Button_1").click(function (e) {\n\
    $("#.*red").each(function (n, i) {\n\
    i.runAction(rep.clone());\n\
});'
                );
        });


        //$("#.*yellow") 选择所有黄色的.
        $(panel, "#Button_2").click(function (e) {
            _this.clearAllAction();
            $("#.*yellow").each(function (n, i) {
                i.runAction(rep.clone());
            });

            $(panel, "#Text_Code")[0].setString(
'//$(\"#.*yellow\") 选择所有黄色的.\n\n\
$("#Button_2").click(function (e) {\n\
    $("#.*yellow").each(function (n, i) {\n\
    i.runAction(rep.clone());\n\
});'
                );
        });


        //$("#.*red").eq(0) 选择红色的第一个精灵.
        $(panel, "#Button_3").click(function (e) {
            _this.clearAllAction();
            $("#.*red").eq(0)[0].runAction(rep.clone());

            $(panel, "#Text_Code")[0].setString(
'//$(\"#.*red\") 选择红色的第一个精灵.\n\n\
$("#Button_3").click(function (e) {\n\
    $("#.*red").eq(0)[0].runAction(myAction);\n\
});'
                );
        });




        //$("#.*red").not("#.*heart_red") 选择所有红色非心形的精灵.
        $(panel, "#Button_4").click(function (e) {
            _this.clearAllAction();
            $(panel,"#.*red").not("#.*heart_red").each(function (n, i) {
                i.runAction(rep.clone());
            });

            $(panel, "#Text_Code")[0].setString(
'//$("#.*red").not("#.*heart_red") 选择所有红色非心形的精灵.\n\n\
$("#Button_4").click(function (e) {\n\
    $("#.*red").not("#.*heart_red").each(function (n, i) {\n\
        i.runAction(rep.clone());\n\
});'
                );
        });


        //$("#.*red").slice(0,2) 选择前2个红色的精灵.
        $(panel, "#Button_5").click(function (e) {
            _this.clearAllAction();
            $(panel,"#.*red").slice(0, 2).each(function (n, i) {
                i.runAction(rep.clone());
            });

            $(panel, "#Text_Code")[0].setString(
'//$("#.*red").slice(0,2) 选择前2个红色的精灵.\n\n\
$("#Button_5").click(function (e) {\n\
    $("#.*red").slice(0, 2).each(function (n, i) {\n\
        i.runAction(rep.clone());\n\
});'
                );
        });



        //$("#.*yellow").filter 自定义 filter  选择tag是19的 sprite
        $(panel, "#Button_6").click(function (e) {
            _this.clearAllAction();
            $("#.*yellow").filter(function (node) {
                return node.tag == 19;
            }).each(function (n, i) {
                i.runAction(rep.clone());
            });

            $(panel, "#Text_Code")[0].setString(
'//$("#.*yellow").filter 自定义 filter  选择tag是19的 sprite\n\n\
$("#Button_6").click(function (e) {\n\
    $("#.*yellow").filter(function (node) {\n\
        return node.tag == 19;\n\
    }).each(function (n, i) {\n\
        i.runAction(rep.clone());\n\
    });\n\
})'
                );
        });




        
      
    },

    clearAllAction: function () {
        $(this.panel, "#sprite.*").each(function (n, i) {
            i.stopAllActions();
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