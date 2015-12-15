jqCore.prototype.bind = function (eventType, callBack) {

    this.each(function (idx, item) {
        if (item.addTouchEventListener) {
            switch (eventType) {
                case "touchstart": item.item_on_event_touchstart = callBack; break;
                case "touchmove": item.item_on_event_touchmove = callBack; break;
                case "touchend": item.item_on_event_touchend = callBack; break;
                case "touchcancel": item.item_on_event_touchcancel = callBack; break;
                case "select": item.item_on_event_ckb_select = callBack; break;
                case "unselect": item.item_on_event_ckb_unselect = callBack; break;
            }
            if (item.addEventListener) {
                item.addEventListener(function (sender, type) {

                    if (type == ccui.CheckBox.EVENT_SELECTED) {
                        item.item_on_event_ckb_select ? item.item_on_event_ckb_select() : null;
                    }
                    if (type == ccui.CheckBox.EVENT_UNSELECTED) {
                        item.item_on_event_ckb_unselect ? item.item_on_event_ckb_unselect() : null;
                    }
                });
            }
            if (item.addTouchEventListener) {
                item.addTouchEventListener(function (sender, type) {
                     

                    if (type == ccui.Widget.TOUCH_BEGAN) {
                        item.item_on_event_touchstart ? item.item_on_event_touchstart(sender, type) : null;
                    }
                    if (type == ccui.Widget.TOUCH_MOVED) {
                        item.item_on_event_touchmove ? item.item_on_event_touchmove(sender, type) : null;
                    }
                    if (type == ccui.Widget.TOUCH_ENDED) {
                        item.item_on_event_touchend ? item.item_on_event_touchend(sender, type) : null;
                    }
                    if (type == ccui.Widget.TOUCH_CANCELED) {
                        item.item_on_event_touchcancel ? item.item_on_event_touchcancel(sender, type) : null;
                    }

                })
            }
        } else {
            cc.log("No Function Named: setString");
        }
    });
   
    return this;
}


jqCore.prototype.touchend =jqCore.prototype.click= function (callback) {
    return this.bind("touchend", callback);
}

jqCore.prototype.unbind = function (eventType) {
    var empty = function () { };
    this.each(function (idx, item) {
        switch (eventType) {
            case "touchstart": item.item_on_event_touchstart = empty; break;
            case "touchmove": item.item_on_event_touchmove = empty; break;
            case "touchend": item.item_on_event_touchend = empty; break;
            case "touchcancel": item.item_on_event_touchcancel = empty; break;
            case "select": item.item_on_event_ckb_select = empty; break;
            case "unselect": item.item_on_event_ckb_unselect = empty; break;
        }

    })

}
 


 