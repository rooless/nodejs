var fs = require('fs');

fs.writeFile("file.tmp", "data", function(err) {
    if (err) throw err;

    fs.rename("file.tmp", "new.tmp", function(err) {
        if (err) throw err;

        fs.unlink("new.tmp", function(err) {
            if (err) throw err;
        });
    });
});

fs.readFile(__filename, function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data.toString());
    }
});