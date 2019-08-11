var fs = require('fs');
var FileLogger = (function () {
    function FileLogger(message) {
        this.message = message;
    }
    FileLogger.prototype.log = function () {
        fs.writeFile("C:/Users/vicol/", this.message, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    };
    return FileLogger;
})();
exports.FileLogger = FileLogger;
