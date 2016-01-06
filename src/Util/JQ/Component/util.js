$.util = {};

$.util.formatNum = function (nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;

}

$.util.columnToRow = function (tdArray) {
    var c = tdArray[0].length;
    var result = [];
    for (var i = 0; i < c; i++) {
        var row = [];
        for (var j = 0; j < tdArray.length; j++) {
            row.push(tdArray[j][i]);
        }
        result.push(row);
    }
    return result;

}

$.util.splitArray = function (arr, selector, spliter) {
    var result = [];
    var _block = [];
    for (var i = 0; i < arr.length; i++) {
        if (selector(arr[i]) !== spliter) {
            _block.push(arr[i]);
        } else {
            if (_block.length > 0) {
                result.push(_block);
            }
            _block = [];
        }
    }
    if (_block.length > 0) {
        result.push(_block);
    }
    return result;
};

$.util.getQueryString = function (name) {
    if (cc.sys.isNative) {
        return "";
    }

    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return (r[2]);
    return null;
}

$.util.createUUID = function () {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}


$.util.percent = function (pct) {
    var seed = Math.random() * 100;
    return seed < pct;
}


$.util.getTimeStamp = function () {
    var date = new Date();
    var str = [];
    str.push(date.getFullYear());
    str.push('-');
    str.push(date.getMonth()+1);
    str.push('-');
    str.push(date.getDate());
    str.push('-');

    str.push(date.getHours());
    str.push('-');
    str.push(date.getMinutes());
    str.push('-');
    str.push(date.getSeconds());
    str.push('-');

    str.push(date.getMilliseconds());
    
    return str.join('');
}

$.util.randomWord = function (len) {
    var result=[];
    var seed = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < len;i++){
        result.push(seed[_.random(0,51)]);
    }
    return result.join('');

}

$.util.ready4399=function(gameId,gameName,width,height,step){
        var percent=1;
        h5api.initGame(gameId, gameName,width, height);
        h5api.progress(percent, "Loading");
        var __interval=window.setInterval(function(){

            if(cc.sys.__loadComplate){
                h5api.progress(100, "Loading");
                window.clearInterval(__interval);
            }else{
                h5api.progress(percent, "Loading");
            }
            percent=percent+step;
            percent=percent>=90?90:percent;
        },1000);

    }
