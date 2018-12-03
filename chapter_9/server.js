const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
    const info;

    if (req.url == '/') {
       // info = fs.readFileSync('index.html');  // синхронное выполнение команды
       fs.readFile('index.html', function(err, info) {
           if (err) {
               console.error(err);
               res.statusCode = 500;
               res.end("На сервере произошла ошибка!");
               return;
           }
           res.end(info);
       });
        
    } else if (req.url == '/now') {
        res.end(new Date().toString());
    }
}).listen(3000);