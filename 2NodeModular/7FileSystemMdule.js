
const fs = require('fs');

// Synchronous way
// var allFiles = fs.readdirSync('./');
// console.log(allFiles);


// Async way
// nicche wala me first para - kiya kaam karna hai and second me call back function(err,res)
fs.readdir('.1/',function(err, results){
    if(err) console.log("Error", err);
    else console.log('Results:', results);
});

// NOTE:- Always Prefer the Aysnchronous