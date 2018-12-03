const http = require('http');

const server = new http.Server(function(req, res) {

}).listen(3000);

setTimeout(function() {
    server.close(/* function() {
        // process.exit();
        clearInterval(timer);
    } */);
}, 2500);

const timer = setInterval(function() {
    console.log(process.memoryUsage());
}, 1000);

// timer.unref();
timer.ref();