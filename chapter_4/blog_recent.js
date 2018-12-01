// Эта задача остается открытой, т.к. пока я не знаю как получить параметр res из другого модуля.
// Пример задачи взят из книги Node.js в действии на странице 55.



const srvx = require('serverX');
const list = require('generateList');

srvx.connect(list.getTitles);
list.getTitles('./titles.json', './template.html');

