
function CocosSelector(root, selector) {
    var selector;
    var root;
 
    var sOut = [];

    function loop(node) {
        if (CocosSelector.nodeMatch(node, selector)) {
            sOut.push(node);
        }
        var childs = node.getChildren();
        for (var i = 0; i < childs.length; i++) {
            
            loop(childs[i]);

        }
    }
    loop(root);

    return sOut;

}

CocosSelector.nodeMatch = function (node, selector) {
    var result = false;
    var selectorArr = selector.split(' ');
    var currentSelector = selectorArr.pop();

    if (CocosSelector.singleNodeMatch(node, currentSelector)) {
        result = true;
        currentSelector = selectorArr.pop();
    } else {
        return false;
    }

    function loop(n) {
        if (!currentSelector) {
            return ;
        } 
        
        if (CocosSelector.singleNodeMatch(n, currentSelector)) {
            currentSelector = selectorArr.pop();
            result = true;

        }
        var parent = n.getParent();
        if (parent) {
            loop(parent);
        } else {
            if (currentSelector) {
                result = false;
                return;
            }
        }
    }
  
 
    var parent = node.getParent();
    if (parent) {
        loop(parent);
    }

    return result;
   


}

CocosSelector.singleNodeMatch = function(node, selector) {
    var f = selector[0];
    switch (f) {
        case "#":
            var s = selector.substr(1);
            var nodeName = node.getName();
            var reg = new RegExp('^'+s+'$', "ig");
            return reg.test(nodeName);
            ; break;
        case ".":
            var s = selector.substr(1);
            var nodeTag = node.getTag().toString();
            var reg = new RegExp('^' + s + '$', "ig");
            return reg.test(nodeTag);
            ; break;
        default :
            var className = node._className;
            var reg = new RegExp('^' + selector + '$', "ig");
            return reg.test(className);
            ; break;
    }
}