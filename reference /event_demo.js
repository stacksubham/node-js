const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

//init obj
const myEmitter = new MyEmitter();

//evnet listner

myEmitter.on('event', () => console.log('Event Fired!'));

myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')