
var AttrLayer = cc.Layer.extend({

    ctor: function () {
        this._super();
        this.init();
        return true;
    },

    init: function () {

        var panel = $.create("res/Layer_Ajax.json");
        this.addChild(panel);

        $textLabel = $(panel, "#Text_Code");

        $(panel, "#Button_Back").click(function (e) {
            cc.director.runScene(cc.TransitionSlideInL.create(.3, new MenuLayer()));
        });

        $(panel, "#Button_Ajax").click(function (e) {
            $.ajax("GET","index.html", {"name":"Jerry"}, function (data) {
                console.log(data);
            });
            $textLabel[0].setString(
'//$.ajax(method,url,data,callback) \n\n\
$.ajax("GET","index.html", {"name":"Jerry"}, function (data) {\n\
    console.log(data);\n\
});'
                );
   

        });

        $(panel, "#Button_get").click(function (e) {
            $.get("index", { "name": "Jerry" }, function (data) {
                console.log(data);
            });
            $textLabel[0].setString(
'//$.get(url,data,callback) \n\n\
$.get("index", { "name": "Jerry" }, function (data) {\n\
    console.log(data);\n\
});'
                );
        });

        $(panel, "#Button_Post").click(function (e) {
            $.post("index",{"name":"Jerry"}, function (data) {
                console.log(data);
            });
            $textLabel[0].setString(
'//$.post(url,data,callback) \n\n\
$.post("index",{"name":"Jerry"}, function (data) {\n\
    console.log(data);\n\
});'
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