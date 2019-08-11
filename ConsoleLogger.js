var ConsoleLogger = (function () {
    function ConsoleLogger(message) {
        this.message = message;
    }
    ConsoleLogger.prototype.log = function () {
        console.log("Message by Console: ");
        console.log(this.message);
    };
    return ConsoleLogger;
})();
exports.ConsoleLogger = ConsoleLogger;
