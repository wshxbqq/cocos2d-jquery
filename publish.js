var fs = require('fs');
var UglifyJS = require("uglify-js");
var path = require('path');

var jsFiles = [
    "src/Util/JQ/CocosSelector.js",
    "src/Util/JQ/jqCore.js",
    "src/Util/JQ/JQ.js",

    "src/Util/JQ/jqCore/selector.js",
    "src/Util/JQ/jqCore/util.js",
    "src/Util/JQ/jqCore/animate.js",
    "src/Util/JQ/jqCore/event.js",

    "src/Util/JQ/extend/ajax.js",
    "src/Util/JQ/extend/util.js"
];
var ALL_JS = [];
for (var i in jsFiles) {
    var jsFile = path.normalize(__dirname + "/" + jsFiles[i]);
    var r = UglifyJS.minify(jsFile);
    if (jsFile.indexOf("GLOBAL_DATA.js")>-1) {
        r.code = anbu.encrypt(r.code, 1);
    }
    ALL_JS.push(r.code);
}

ALL_JS.push("\r\n");
var minJS = ALL_JS.join("\r\n");
fs.writeFileSync("release/cocos.jquery.min.js", minJS, { encoding: "utf8" });
fs.writeFileSync("src/cocos.jquery.min.js", minJS, { encoding: "utf8" });

 