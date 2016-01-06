
$.device = {};

$.device.getDeviceTypeInfo = function () {
    if (cc.sys.isNative && jsb && cc.sys.os==cc.sys.OS_IOS) {
        var result = jsb.reflection.callStaticMethod("JSDeviceInfo", "platformString");
        return result;
    }
    if (cc.sys.isNative && jsb && cc.sys.os==cc.sys.OS_ANDROID) {
        var result = jsb.reflection.callStaticMethod("com/originalfun/android/DeviceHelper", "getAndroidInfo","()Ljava/lang/String;");
        return result;
    }

    return "unknow"
}

$.device.gameCenter_AuthenticateLocalUser = function () {
    if (cc.sys.isNative && jsb && cc.sys.os==cc.sys.OS_IOS) {
        var result = jsb.reflection.callStaticMethod("GameCenterJsInterface", "authenticateLocalUser");
        return result;
    }
}

$.device.gameCenter_ShowLeaderboard = function () {
    if (cc.sys.isNative && jsb && cc.sys.os==cc.sys.OS_IOS) {
        var result = jsb.reflection.callStaticMethod("GameCenterJsInterface", "showLeaderboard");
        return result;
    }
}

$.device.gameCenter_ReportScore = function (score, category) {
    if (cc.sys.isNative && jsb && cc.sys.os==cc.sys.OS_IOS) {
        var result = jsb.reflection.callStaticMethod("GameCenterJsInterface", "reportScore:forCategory:", score, category);
        return result;
    }
}


$.device.openShare = function (textToShare, imgToShare, urlToShare) {
    if (cc.sys.isNative && jsb && cc.sys.os==cc.sys.OS_IOS) {
        jsb.reflection.callStaticMethod("ShareJsInterface", "openShare:imageToShare:urlToShare:", textToShare, imgToShare, urlToShare);
    }


}