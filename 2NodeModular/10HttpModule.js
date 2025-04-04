// Now in the real world, we're not going to use this HTTP MODULE to build a backend service for our application. 
// The reasonfor this is because as you can see here, as we add more
// routes, this code gets more complex as we add all of them in a linear way inside this
// call back function. So instead we use a framework called express, which gives our application a clean 
// structure to handle various routes. Internally, the express framework is
// built on top of the http module in Node.

const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write("maine listen kiye ki tumne request kiya mere port pe");
        res.end();
    }

// For example, we can have another if block if request.url = /api/courses, perhaps here we want to return
// the list of courses from the database, so we would do something like this, reponse.write. Now here we want to
// return an array of objects using json.So, we use JSON.stringify and give it an array of objects. Now
// for simplicity here we don't have to worry about the database or complex objects, let's just return an array of numbers.
// 1, 2, and 3. So we pass this to json.stringify which will convert this array into a
// string using json syntax, and then we'll write it to the response.
// And finally response.end.

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3,4]));
        res.end();
    }
});

// server object have access of EventEmitter class because it is inherited.
// server.on('connection',(socket) =>{
//     console.log('established a new connection...');
// });
// So you can see this server object raises different kinds of events that you can respond to. Now in real
// world applications, we are not going to respond to the connection event
// to build an http service. This is very low level.


server.listen(3000);

