//return function by require here
const express = require('express')

// app is the object here of Express.
const app = express()

// jaise ki yahan pe dekh pa rahe hai jo humlog if block ka use karte the request response ke liye yahan wo
// nhi hai or yeah jada managebale and structural hai.

app.get('/',(req, res)=>{
    res.send("Hello world");
});

app.get('/api/courses',(req, res)=>{
    res.send([1,2,34,3,78908]);
});


// if we have to do for one course then do like this.
app.get('/api/courses/:customerId',(req,res)=>{
    res.send(req.params.customerId);
});

// if we have multiple params then,
app.get('/api/post/:year/:month',(req,res)=>{
    res.send(req.params)
    
    // res.send(req.query)
});

// With express we can also get boolean string parameters.
// These are parameters that we add in the url after
// question mark, for example, we can get all the posts
// in January 2018, and sort them by their name.
// So we add a question mark. Sort by, set this to name.
// This is a query string parameter we use query string parameter

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Server start listening on {port}...`);
});