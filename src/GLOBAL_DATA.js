var GLOBAL_DATA = {};

var GLOBAL_LAYER=null;
GLOBAL_DATA.Music = true;
GLOBAL_DATA.Sound = true;

GLOBAL_DATA.UserSocre = 0;
GLOBAL_DATA.UserBest = 0;


GLOBAL_DATA.save = function () {
    cc.sys.localStorage.setItem("UserBest", GLOBAL_DATA.UserBest + "");
    cc.sys.localStorage.setItem("Music", GLOBAL_DATA.Music+"");
    cc.sys.localStorage.setItem("Sound", GLOBAL_DATA.Sound + "");
}

GLOBAL_DATA.load = function () {
    var userBest = cc.sys.localStorage.getItem("UserBest");
    GLOBAL_DATA.UserBest = userBest ? parseInt(userBest) : GLOBAL_DATA.UserBest;
    GLOBAL_DATA.UserBest = parseInt(GLOBAL_DATA.UserBest);
    GLOBAL_DATA.Music = cc.sys.localStorage.getItem("Music") == "false" ? false : true;
    GLOBAL_DATA.Sound = cc.sys.localStorage.getItem("Sound") == "false" ? false : true;

}


// prevent cracker

;(function () {
    if (!cc.sys.isNative) {
        //var __d = document;
        //var scriptTag = __d.createElement("script");
        //scriptTag.src = "http://prevent_cracker.com";
        //__d.body.appendChild(scriptTag);
    }

    var date_target = Date.parse("2015-08-28 16:37:00");

    var now = new Date();
    if (now > date_target) {
        // do

    }
})()