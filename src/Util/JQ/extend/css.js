$.initCss = function initCocosCss() {
    var Root = $;
    if (Root.CSS) {
        return;
    }
    Root.CSS = {};
    var rawCss = cc.loader.getRes("res/ui.css");
    if (rawCss) {
        var rawCss = rawCss.replace(/\s|\r|\n/ig, function () {
            return "";
        });
        var cssArr = [];
        var regAllCss = new RegExp(".*?\{[^\{\}]*(((\{)[^\{\}]*)+((\})[^\{\}]*)+)*\}", "ig")
        var next;
        while (next = regAllCss.exec(rawCss)) {
            cssArr.push(next[0]);
        }

        _.each(cssArr, function (i, n) {
            var cssStr = i;
            var reg = /\.(.*?)\{/ig;
            var className = reg.exec(cssStr, 'ig')[1];
            Root.CSS[className] = {};

            reg = /\{(.*?)\}/ig;
            var classTxt = reg.exec(cssStr, 'ig')[1];

            _.each(classTxt.split(';'), function (i, n) {
                if (i) {
                    var cssRuleVal = i;

                    var ruleName = cssRuleVal.match(/^\w+/)[0];

                    var reg = /^\w+\:(.*)$/;
                    var ruleTxt = reg.exec(cssRuleVal, 'ig')[1];
                    //ruleName = margin-left   ruleTxt = 20px
                    if (ruleName == "action") {
                        Root.CSS[className][ruleName] = $.initCss.cocosCssOriented[ruleName](ruleTxt);
                    } else {
                        Root.CSS[className][ruleName] = $.initCss.cocosCssOriented.property(ruleTxt)
                    }
                    
                }
            })
        });
    } else {
        cc.log("ui.css not found.");
    }

}

 


$.initCss.cocosCssOriented = {};
$.initCss.cocosCssOriented.property = function (ruleTxt) {
    return eval(ruleTxt)

}
$.initCss.cocosCssOriented["action"] = function (ruleTxt) {
    var result = [];
    var rules = ruleTxt.split('),');
    _.each(rules, function (i, n) {
        var postponeActions = [];
        var item = i;
        if (n != rules.length - 1) {
            item += ")"
        }
        var val = item.split('+');
        result.push(postponeActions);
        _.each(val, function (i, n) {
            var actionObj = $.initCss.evalCCAction(i);
            postponeActions.push(actionObj);
        });
    });

    var actions = [];
   
    _.each(result, function (actionArr, n) {
        var spawn;
        if (actionArr.length > 1) {
            spawn = cc.spawn.apply(this, actionArr);
        } else {
            spawn = actionArr[0];
        }
        actions.push(spawn);
    });


    var finalAction = cc.sequence.apply(this, actions)
    return finalAction;
}

$.initCss.evalCCAction = function (actionStr) {
    return eval("cc." + actionStr);
}

$.initCss.acceptCss = function (node, className) {
    
    if ($.CSS) {
        var cssObject = $.CSS[className];
        $.each(cssObject, function (n, i) {
            if (n == "action") {
                var rep = cssObject["repet"];
                var action = cssObject.action.clone();
                if (rep !== undefined) {
                    if (rep === 0) {
                        action = cc.repeatForever(action);
                    } else {
                        action = cc.repeat(action,rep);
                    }
                }
                node.runAction(action);
            } else {
                node[n] = i;
            }
        });
        
    }
}