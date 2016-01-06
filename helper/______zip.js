var fs = require('fs');
var path = require('path');
var pngquant = require('node-pngquant-native');
var childProcess = require('child_process');

function scanFolder(path) {
    var fileList = [],
        folderList = [],
        walk = function(path, fileList, folderList) {
            files = fs.readdirSync(path);
            files.forEach(function(item) {
                var tmpPath = path + '\\' + item,
                    stats = fs.statSync(tmpPath);

                if (stats.isDirectory()) {
                    walk(tmpPath, fileList, folderList);
                    folderList.push(tmpPath);
                } else {
                    fileList.push(tmpPath);
                }
            });
        };

    walk(path, fileList, folderList);



    return {
        'files': fileList,
        'folders': folderList
    }
}





function mkdirsSync(dirname, mode) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname), mode)) {
            fs.mkdirSync(dirname, mode);
            return true;
        }
    }
}

var srcPath = path.normalize(__dirname + "/../publish/html5/res");

var result = scanFolder(srcPath);


var numCPUs = require('os').cpus().length;

var subPs=[];

var closePs=0;


(function(){
    for(var i = 0 ;i<numCPUs;i++ ){
        var n=childProcess.fork('./______zip1.js');
        n.on('message', function(data) {
            if(data){
                this.send(result.files.pop()+"");
            }else{

                closePs++;
                this.disconnect();
                if(closePs==numCPUs){
                    process.exit();

                }
            }
           
        });
        n.send(result.files.pop());
         
    }

})();













for (var j in result.files) {
    var filePath = result.files[j];
    (function(_filePath) {
        for(var k =0; k < subPs.length;k++){
            subPs[k].send(_filePath);

        }

    })(filePath)

}
