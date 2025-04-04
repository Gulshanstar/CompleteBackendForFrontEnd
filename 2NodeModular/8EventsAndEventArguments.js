// ----CallbackFunction and ArrowFunction is same okk----.

// HTTP class raise an event whenever recieve the request on th port.
// Next our job is to respond on the event.

const EventEmitter = require('events');
const { emit } = require('process');
const emitter = new EventEmitter();

// Register a Listener --> it will be called when event is raised.
// NOTE:- emitter.addListener() is alias of emitter.on()
// Listener must be above the emit method 
// para1 - eventname, para2 - callBackFunction


// HERE WE ARE USING CALLBACK FUNCTION.
// emitter.on('eventRaised', function(eventArgs){
//     console.log('Listened',eventArgs);
// });

// 
emitter.on('eventRaised', (eventArgs)=>{
    console.log('Listened',eventArgs);
});


// Raise an event
// If you want to send multiple values about an event,
// it's a better practice to encapsulate these values inside an object.
emitter.emit('eventRaised',{id: 1, url: 'https:gulshanmundri.com//'});
// emit basically means -->
// making a noise, or produce something. In this case,
// you're making a noise in our application, you're signaling
// event has happened. 




