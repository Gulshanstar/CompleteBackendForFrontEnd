const EventEmitter = require('events');

class Logger extends EventEmitter{
    printSomething(message){
        console.log(message);
        this.emit('eventCreated',{meraName: 'Gulshan'});
    }
 
}

module.exports = Logger