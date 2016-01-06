var fs = require('fs');
var UglifyJS = require("uglify-js");
var path = require('path');
var pngquant = require('node-pngquant-native');
var anbu = require('anbu');
var filesStr = fs.readFileSync(path.normalize(__dirname + "/../src/files.js"), { encoding: "utf8" });
var srcPath = path.normalize(__dirname + "/../src");
eval(filesStr);

var ALL_JS = [];
var exclude=["AssetsManager.js"];
for (var i in jsFiles) {
	f=true;
	for(var j in exclude){
		if(jsFiles[i].indexOf(exclude[j])>-1){
			f=false;
			break;
		}
	}
	if(f){
		var jsFile = path.normalize(__dirname + "/../" + jsFiles[i]);
		var r = UglifyJS.minify(jsFile);
		if (jsFile.indexOf("GLOBAL_DATA.js")>-1) {
			//r.code = anbu.encrypt(r.code, 1);
		}
		ALL_JS.push(r.code);
	}
}
ALL_JS.push("\n");
var gameMinJs = fs.readFileSync(path.normalize(__dirname + "/../publish/html5/game.min.js"), { encoding: "utf8" });
gameMinJs = gameMinJs
.replace("cc.game.onStart=function()", ALL_JS.join("\n") + "cc.game.onStart=function()")
.replace(/cc.loader.loadJs\(\[\"src\/AssetsManager.js\"].*/ig, function (match) {
    return "cc.director.runScene(new LoadingScene())};cc.game.run();";
});
fs.writeFileSync(path.normalize(__dirname + "/../publish/html5/game.min.js"),gameMinJs, { encoding: "utf8" });
