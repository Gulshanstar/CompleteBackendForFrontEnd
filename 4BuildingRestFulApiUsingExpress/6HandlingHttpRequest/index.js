// return function
const express = require('express');

// return class
const Joi = require('joi');
const app = express();

// express.json piece of middleware return karta hai phir app.use ko call karte hai jo iss
// middle ware ko process karta hai.
app.use(express.json());

let courses = [
    { 'id': 1, 'name': 'courses1' },
    { 'id': 2, 'name': 'courses2' },
    { 'id': 3, 'name': 'courses3' }
];

// getting course
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// getting course by id
app.get('/api/courses/:CourseId', (req, res) => {
    let isIdPresent = false;
    let ans = null;
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].id === parseInt(req.params.CourseId)) {
            isIdPresent = true;
            ans = courses[i];
            break;
        }
    }
    if (isIdPresent) {
        // agar id mil gya to
        res.send(ans);
    } else {
        // agar id nhi mila to
        // we should return a response with the http status code
        // of 404. That means object not found. So this is one of the conventions of RESTful api's.
        // If the client asks for a resource, but that resource does not exist
        // on the server, we should return a response with the status code of 404.
        // So here, we call response status 404. And optionally,
        // we can send a message to the client as well.
    }


});

app.post('/api/courses', (req, res) => {
    // if (!req.body.name || req.body.name.length < 3) {
    //     res.status(400).send('Name is required and character more than 3 required')
    // return;
    // }

    // we cann't validate the input for complex ones easily to make it easy we can use 
    // package name is --> joi
    // after installing load joi using require.
    const schema = Joi.object({
        name: Joi.string().min(3).required(),

    })

    const result = schema.validate({ name: req.body.name })
    console.log(result)

    if (result.error) {
        res.status(400).send(result.error.details[0].message)
        return
    }

    const course = {
        id: courses.length + 1,
        // in order for this line to work, we need to enable parsing up
        // json objects in the body of the request. Because by default this feature
        // is not enabled in express,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
});


app.put('/api/courses/:courseId', (req, res) => {
    // Look up the courses
    // if not existing it means 404 error.->The requested resource couldn’t be found on the server.
    const course = courses.find(c => c.id === parseInt(req.params.courseId))
    if (!course) res.send(400).send("the course with given id is not present")
    // validate
    // InValid 400 -> // 400 Bad Request: The server couldn’t understand the request 
    // due to invalid syntax or parameters. 
    const schema = Joi.object({
        name: Joi.string().min(3).required(),

    })

    const result = schema.validate({ name: req.body.name })
    console.log(result)

    if (result.error) {
        res.status(400).send(result.error.details[0].message)
        return
    }
    // update the courses
    course.name = req.body.name;
    courses.push(course.name)
    // return the updated courses.
    res.send(course)


});
port = process.env.PORT || 4500
app.listen(port, () => { console.log(`Start listening on ${port} ......`) });


// 1. Genai Complete
// 2. complete Express (2 part)
// 3. 