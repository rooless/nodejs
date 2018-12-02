const srvx = require('serverX');
const list = require('generateList');

srvx.connect(list.getTitles, './titles.json', './template.html');

