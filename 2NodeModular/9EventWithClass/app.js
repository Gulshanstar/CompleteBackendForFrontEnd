const Logger = require('./Logger')

const loggerObj = new Logger();
loggerObj.on('eventCreated',(eventArgs) =>{
    console.log('Sunno event created', eventArgs);
});

loggerObj.printSomething('Start creating event');