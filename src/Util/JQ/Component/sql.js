$.sql = {};
$.sql.initDB = function () {
    if (cc.sys.isNative && jsb) {
        var result = jsb.reflection.callStaticMethod("JsSqlUtil", "initDB");
    }
}

$.sql.closeDB = function () {
    if (cc.sys.isNative && jsb) {
        var result = jsb.reflection.callStaticMethod("JsSqlUtil", "closeDB");
    }
}

$.sql.exec = function (sqlStr) {
    if (cc.sys.isNative && jsb) {
        var result = jsb.reflection.callStaticMethod("JsSqlUtil", "exec:", sqlStr);
    }
}

$.sql.queryData = function (sqlStr) {
    if (cc.sys.isNative && jsb) {
        var result = jsb.reflection.callStaticMethod("JsSqlUtil", "queryData:", sqlStr);
        return JSON.parse(result.toString());
    }
}

$.sql.tableIsExist = function (tableName) {
    if (cc.sys.isNative && jsb) {
        var result = $.sql.queryData("select count(type) from sqlite_master where type='table' and name ='" + tableName + "'");
        var c = parseInt(result[0]["count(type)"]);
        if (c > 0) {
            return true;
        }
    }
    return false;
}