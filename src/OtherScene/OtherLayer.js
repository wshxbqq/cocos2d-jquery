/// <reference path="../../cocos2d-js-v3.8.js" />

var OtherLayer = cc.Layer.extend({

    ctor: function () {
        this._super();
        this.init();
        return true;
    },

    init: function () {

        var panel = $.create("res/Layer_Other.json");
        this.addChild(panel);

        $textLabel = $(panel, "#Text_Code");

        $(panel, "#Button_Back").click(function (e) {
            cc.director.runScene(cc.TransitionSlideInL.create(.3, new MenuScene()));
        });


        $(panel, "#Button_Each").click(function (e) {
            $(panel, "#Button_.*").each(function (n, i) {
                cc.log(i);
            });
            $textLabel[0].setString(
'//$(selector).each(callBack); \n\n\
$("#Button_.*").each(function (n, i) {\n\
    console.log(data);\n\
});'
                );
        });



        $(panel, "#Button_Data").click(function (e) {
            $(panel, "#Button_.*").data("name", "jerry");
            console.log($(panel, "#Button_.*").data("name"));
            $textLabel[0].setString(
'\
$("#Button_.*").data("name", "jerry");\n\
$("#Button_.*").data("name");\
'
                );
        });

        $(panel, "#Button_Clean").click(function (e) {
            var btns = $(panel, "#Button_.*");
            btns.clean();
            btns.remove();

            $textLabel[0].setString(
'// $("#Button_.*").clean()  清除jq对象内所有的元素\n\n\
var btns = $(panel, "#Button_.*");\n\
btns.clean();\n\
btns.remove();'
                );
        });
        var colorArr = [
            cc.color(255, 255, 255, 255),
            cc.color(0,255,0,255),
            cc.color(0, 0, 255, 255)
        ];

        var _idx = 0;
        

        $(panel, "#Button_Call").click(function (e) {
            _idx++;
            var btns = $(panel, "#Button_.*");
            btns.call("setTitleColor", colorArr[_idx % 3]);
     

            $textLabel[0].setString(
'// $("#Button_.*").call(funName,arg1,arg2,...) 对每一个元素执行 funName(arg1,arg2)\n\n\
var btns = $(panel, "#Button_.*");\n\
btns.call("setTitleColor", colorArr[_idx % 3]);\n\
'
                );
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