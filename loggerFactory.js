var ConsoleLogger_1 = require('./ConsoleLogger');
var FileLogger_1 = require('./FileLogger');
var DatabaseLogger_1 = require('./DatabaseLogger');
var LoggerFactory = (function () {
    function LoggerFactory() {
    }
    LoggerFactory.prototype.getLogger = function (option) {
        if (option.type === 'Console') {
            var console_1 = new ConsoleLogger_1.ConsoleLogger(option.message);
            return console_1;
        }
        else if (option.type === 'File') {
            var file = new FileLogger_1.FileLogger(option.message);
            return file;
        }
        else if (option.type === 'Database') {
            var db = new DatabaseLogger_1.DatabaseLogger(option.message);
            return db;
        }
        else {
            console.error("Type Not Found");
        }
    };
    return LoggerFactory;
})();
exports.LoggerFactory = LoggerFactory;
