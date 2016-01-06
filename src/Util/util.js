/// <reference path="../../cocos2d-js-v3.8.js" />
/// <reference path="../GLOBAL_DATA.js" />
/// <reference path="JQ/JQ.js" />
/// <reference path="JQ/Component/device.js" />
/// <reference path="JQ/Component/net.js" />
/// <reference path="JQ/Component/sql.js" />
/// <reference path="JQ/Component/ui.js" />
/// <reference path="JQ/Component/util.js" />
/// <reference path="JQ/Component/wx.js" />

var Util = {};

Util.playMusic = function (src,isLoop) {
    if (GLOBAL_DATA.Music) {
       cc.audioEngine.playMusic(src, isLoop);
    }
}
Util.StopMusic = function () {
    cc.audioEngine.stopMusic();

}

Util.playEffic = function (src) {
    if (GLOBAL_DATA.Sound) {
       cc.audioEngine.playEffect(src);
    }

}

Util.getText = function (key) {
    var lang = cc.sys.language;
    var result;
    var objL = LANG[key];
    if (!objL) {
        result = "no_text_for:" + key
    } else {
        if (objL[lang]!==undefined) {
            result = objL[lang];
        } else {
            result = objL["en"];
        }
    }
    return result;
}


 
Util.openShare = function () {
    if (cc.sys.isNative) {
        if (cc.sys.language.toLowerCase() == "zh") {
            $.device.openShare("分享文案", "res/logo_200.png", "https://itunes.apple.com/us/app/rock-paper-scissors-battle/id1014895272?l=zh&ls=1&mt=8");
        } else {
            $.device.openShare("share text", "res/logo_200.png", "https://itunes.apple.com/us/app/rock-paper-scissors-battle/id1014895272?l=us&ls=1&mt=8");
        }
    } else {
        $.weixin.showMask();

    }
}

Util.getResPackArr = function () {
    var resArr = [];
    function loadObj2Arr(obj) {
        _.each(obj, function (i, n) {
            if (typeof (i) == "object") {
                loadObj2Arr(i);
            } else {
                resArr.push(i);
            }

        });
    }
    _.each(arguments, function (i, n) {
        if (typeof (i) == "object") {
            loadObj2Arr(i);
        } else {
            if (typeof (i) == "string") {
                resArr.push(i);
            }
        }

    });
    return resArr;
    
}
Util.loadResPack = function () {
    var resArr = Util.getResPackArr.apply(this, arguments);
    var lastArg = arguments[arguments.length - 1];
    cc.loader.load(resArr, function () {
        if (typeof (lastArg) == "function") {
            lastArg();
        }
    });
    
}

Util.createAnimationAction  = function(pList,frameStr,delayPerUnit,loop) {
    cc.spriteFrameCache.addSpriteFrames(pList);
    var animation = new cc.Animation();
            
    var _temp = frameStr.match(/\{\d+-\d+\}/ig)[0].match(/\d+/g);
    var min = parseInt(_temp[0]);
    var max = parseInt(_temp[1]);
    var min=Math.min(min,max);
    var max=Math.max(min,max);

    var f = frameStr[0];
    if (f === "#") {
        for (var i = min; i <= max; i++) {
            var frameName = frameStr.replace(/\{\d+-\d+\}/, function () { return i + "" });
            frameName = frameName.substr(1);
            var spriteFrame = cc.spriteFrameCache.getSpriteFrame(frameName);
            animation.addSpriteFrame(spriteFrame);
        }
                
    } else{
        for (var i = min; i <= max; i++) {
            var frameName = frameStr.replace(/\{\d+-\d+\}/, function () { return i + "" })
            animation.addSpriteFrameWithFile(frameName);
        }
            
    }
    animation.setDelayPerUnit(delayPerUnit);
    animation.setRestoreOriginalFrame(true);

    loop = loop ? loop : 0;
    var action;
    if (loop > 0) {
        var a1 = cc.animate(animation).repeat(loop);
        var a2 = cc.delayTime(delayPerUnit);
        var a3 = cc.callFunc(function (d) {
            //action.getTarget().setSpriteFrame("walk/1.png");
            action.getTarget().setSpriteFrame(animation.getFrames()[0].getSpriteFrame());
        });
                
        action = cc.sequence(a1,a3);
                 
    } else {
        action = cc.animate(animation).repeatForever();
    }
    return action;
}
