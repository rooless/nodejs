const http = require('http');

http.createServer(function (req, res) {
    process.nextTick(function() {
        req.on('readable', function() {

        })
    });
}).listen(3000);