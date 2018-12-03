const winston = require('winston');

module.exports = function(module) {
    return makeLogger(module.filename);
};

function makeLogger(path) {
    if (path.match(/request.js$/)) {
        const transports = [
            new winston.transports.Console({
                timestamp: true,
                colorize: true,
                level: 'info'
            }),

            new winston.transports.File({ filename: 'debug.log', level: 'debug' })
        ];

        const logger = winston.createLogger({
            level: 'error',
            transports: transports
        });
        
        return logger;
    } else {
        return new winston.Logger({
            transports: []
        });
    }
}