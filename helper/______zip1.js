var fs = require('fs');
var path = require('path');
var pngquant = require('node-pngquant-native');
var childProcess = require('child_process');

process.on('message', function(_filePath) {
    if (_filePath==="undefined") {
        process.send(false);
    }
    if (/png$/.test(_filePath)) {
        fs.readFile(_filePath, function(err, buffer) {
            var resBuffer = pngquant.compress(buffer, {
                "speed": 1
            });



            fs.writeFile(_filePath, resBuffer, {
                flags: 'wb'
            }, function(err) {
                process.send(true);

            });
        });

    }else{
		process.send(true);

    }
});
