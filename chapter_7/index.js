const server = require('server');
const router = require('router');
const reqhand = require('requestHandlers');

const handle = {}
handle["/"] = reqhand.start;
handle["/start"] = reqhand.start;
handle["/upload"] = reqhand.upload;

server.start(router.route, handle);