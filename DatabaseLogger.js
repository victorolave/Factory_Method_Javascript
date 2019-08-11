var DatabaseLogger = (function () {
    function DatabaseLogger(message) {
        this.message = message;
    }
    DatabaseLogger.prototype.log = function () {
        console.log("By Database: " + this.message);
    };
    return DatabaseLogger;
})();
exports.DatabaseLogger = DatabaseLogger;
