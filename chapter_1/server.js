var db = require('db');
var User = require('user');
var log= require('logger')(module);

db.connect();

function run() {
    var vasya = new User("Вася");
    var petya = new User("Петя");
    
    vasya.hello(petya);

    log(db.getPhrase("Run successful"));
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}