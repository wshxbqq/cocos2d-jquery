$.DC_SERVER = "http://dcrecord.sinaapp.com/dc/";
$.DC_SERVER_TEST = "http://dcrecord.sinaapp.com/dctest/";

$.net = {};

$.net.dcRaw = function (deviceInfo, UUID, status, lang, region, autoStr, recordId, recordValue, misc, cb) {
    var dc_server = cc.game.config.debugMode == 0 ? $.DC_SERVER : $.DC_SERVER_TEST;
    $.get(dc_server, {
        di: deviceInfo ? deviceInfo : "unknow",
        uuid: UUID ? UUID : "unknow",
        status: status ? status : "unknow",
        lang: lang ? lang : "unknow",
        region: region ? region : "unknow",
        auto: autoStr ? autoStr : "unknow",
        rid: recordId ? recordId : "unknow",
        rv: recordValue ? recordValue : "unknow",
        misc: misc ? misc : "unknow",

    }, function (data) {
        cb(data);


    });
}

$.net.dcUserDefault = function (recordId, recordValue, misc, cb) {
    var deviceInfo = $.device.getDeviceTypeInfo();
    var uuid = cc.sys.localStorage.getItem("uuid");
    var userStatus = "";
    if (!cc.sys.isNative) {
        deviceInfo = "browser_" + cc.sys.browserType.toLowerCase();
        if (!uuid) {
            uuid = $.util.createUUID();
            cc.sys.localStorage.setItem("uuid", uuid);
        }
        userStatus = window.PF || $.util.getQueryString("pf") + "";
    }


    $.net.dcRaw(deviceInfo, uuid, userStatus, cc.sys.language, "", cc.sys.os, recordId, recordValue, misc, function () {

    });
}
