// Creating the module

var url = "http://www.log.com/";

function printSomething(message){
    console.log(message);
}

// Here variables & function is available insiide the function only if i want 
// to expose it outside use export


// method 1:- export function as a object 
module.exports.printFunctionExport = printSomething

// method2:- export function as function
module.exports = printSomething