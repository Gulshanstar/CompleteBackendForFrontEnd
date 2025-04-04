
// var loader = require('./2createModule');

// const is good pratice why?-- beacuse otherwise anyone can override.
const loader = require('./2createModule');

console.log(loader); // { printFunctionExport: [Function: printSomething] }

// below loader is an object
// loader.printFunctionExport('i am exported');
loader('mai direct function pass hua hoon')

// Jshint {filename}