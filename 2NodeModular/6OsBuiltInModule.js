
const osObject = require('os')

// we can play with operating system things
// NOTE:- before nodejs we are not able to do that with javascript

var freeMem = osObject.freemem()
var totalmem = osObject.totalmem()
console.log(`free memory: ${freeMem}`)
console.log(`Total memory: ${totalmem}`)
// console.log(mem)

