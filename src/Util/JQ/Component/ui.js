/// <reference path="../JQ.js" />

$.ui = {};
$.ui.create = function (json) {
    var result = ccs.load(json).node;

    function loop(node){
        var childs=node.getChildren();
        for(var i=0;i<childs.length;i++){
            var cName=childs[i].getName();
            if(cName.indexOf('|')>-1){
                var l18nKey=cName.split('|')[1];
                if (childs[i].setString) {
                    childs[i].setString(Util.getText(l18nKey));
                } 
               
            } 
            loop(childs[i]);
             
        }
    
    }
    loop(result);

    return result;
}

$.ui.find = function () {
    var root;
    var selector;
    if (cc.isString(arguments[1])) {
        root = arguments[0];
        selector = arguments[1];
    } else {
        root = cc.director.getRunningScene();
        selector = arguments[0];
    }

    var result=[];

    function loop(node){
        var childs=node.getChildren();
        for(var i=0;i<childs.length;i++){
            if(childs[i].getName()===selector){
                result.push(childs[i]);
               
            } 
            loop(childs[i]);
             
        }
    
    }
    loop(root);
    return result;
}



jqCore.prototype.setString = function (str) {
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        if (item.setString) {
            item.setString(str);
        } else {
            cc.log("Not Have Fun Named setString");
        }

    }
    return this;
}

jqCore.prototype.setSelect = function (isSelect) {
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        if (item.setSelected) {
            item.setSelected(isSelect);
        } else {
            cc.log("Not Have Fun Named setSelected");
        }

    }
    return this;
}



jqCore.prototype.setStringWithL18nKey = function (keyStr) {
    this.setString(Util.getText(keyStr));
    return this;
}


jqCore.prototype.changeImg = function (str) {
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        if (item.setTexture) {
            item.setTexture(str);
        } else {
            if (item.loadTexture) {
                item.loadTexture(str)
            } else {
                cc.log("Not Have Fun Named setTexture");
            }
        }

    }
    return this;
}

