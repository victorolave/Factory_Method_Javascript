var loggerFactory_1 = require('./loggerFactory');
var loggerFactory = new loggerFactory_1.LoggerFactory();
var Console = loggerFactory.getLogger({ message: 'Bye World', type: 'Database' });
Console.log();
