/// <reference path="../cocos2d-js-v3.6.js" />
/// <reference path="GLOBAL_DATA.js" />

var EightSprite = cc.Sprite.extend({
    ctor: function (hero) {
        this._super();
        this.init();
        this.hero = hero;
        // this.current_direction = null;
        // this.current_action = null;

        this.current_action_obj = null;
        return true;
    },
    init: function () {
        //this.scheduleUpdate();
    },
    autoGo: function (actionName, time, p,callBack) {
        var _this = this;
        var a = cc.MoveTo.create(time, p);
        var cb = cc.callFunc(function (e) {
            if (_this.current_action_obj) {
                _this.stopAction(_this.current_action_obj);
            }
            if (callBack) {
                callBack(_this);
            }
        });
        var seq = cc.Sequence.create(a,cb);
        this.adjustWithTargetPosition(p);
        this.doAction(actionName);
        this.runAction(seq);

    },

    doAction: function (actionName, repTimes, perUnit, restoreOriginalFrame) {
        if (cc.isUndefined(repTimes)) {
            repTimes = 0;
        }
        if (cc.isUndefined(perUnit)) {
            perUnit = 4/60;
        }
        if (cc.isUndefined(restoreOriginalFrame)) {
            restoreOriginalFrame = true;
        }

        if (this.current_action_obj) {
            this.stopAction(this.current_action_obj);
        }
        var animation = new cc.Animation();

        // Add 60 frames

        for (var i = 1; i < GLOBAL_DATA.EIGHT_SPRITE[this.hero][this.current_direction][this.current_action]+1; i++) {
            var frameName = "res/" + [this.hero] + "/" + [this.current_direction] + "/" + [this.current_action] + "/" + i + ".png";
            animation.addSpriteFrameWithFile(frameName);
        }

        // And display 60 frames per second
        animation.setDelayPerUnit(perUnit);
        animation.setRestoreOriginalFrame(restoreOriginalFrame);


        var action = cc.animate(animation);


        var _action = cc.repeatForever(action);
        if (repTimes > 0) {
            _action = cc.repeat(action, repTimes);
        }
        this.runAction(_action);
        this.current_action_obj = _action;
        

    },

    adjustWithTargetPosition: function (p) {
        var pDiff = cc.pSub(p, this.getPosition());
        var deg = Math.atan2(pDiff.y, pDiff.x) * 180 / Math.PI;

        if (deg > -67.5 && deg <= -22.5) {
            this.current_direction = "8";
        }

        if (deg > -22.5 && deg <= 22.5) {
            this.current_direction = "7";
        }

        if (deg > 22.5 && deg <= 67.5) {
            this.current_direction = "6";
        }

        if (deg > 67.5 && deg <= 112.5) {
            this.current_direction = "5";
        }

        if (deg > 112.5 && deg <= 157.5) {
            this.current_direction = "4";
        }

        if (deg > 157.5 && deg <= 180) {
            this.current_direction = "3";
        }

        if (deg > -180 && deg <= -157.5) {
            this.current_direction = "3";
        }

        if (deg > -157.5 && deg <= -112.5) {
            this.current_direction = "2";
        }

        if (deg > -112.5 && deg <= -67.5) {
            this.current_direction = "1";
        }

         

    },

    update: function (dt) {

    }, 
    onEnter: function () {
        this._super();
    },
    onExit: function () {
        this._super();
    }
});

 
//var Monster = EightSprite.extend({
//    ctor: function () {
//        this._super();
//        this.init();
//        this.hero = "1";
//        this.current_direction = "2";
//        this.current_action = "walk";

//        this.current_action_obj = null;
//        return true;
//    },
//    init: function () {
//        //this.scheduleUpdate();
//    },

//});