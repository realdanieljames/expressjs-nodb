const express = require('express')
const path = require('path')
const app = express();

// dotenv
require('dotenv').config();


const logger = require('./middlewares/logger')
const timer  = require('./middlewares/timer')


// name a port variable

//conventional to use capital letters
// check inside env and 
//tells our application to look in .env file for the PORT variable
// if there is no PORT defined, default to port 3000
const port = process.env.PORT || 3000;

// i want o look for static files
// for every middleware that runs everytime
// path helps to concatenate with dirname
// app.use(express.static(path.join(__dirname, 'public')))

// have hte middleware run everytime

// app.use(logger)
app.use(timer)


let users = [
    { id: '1', name: 'jd', email: 'jd@me.com', password: '123' },
    { id: '2', name: 'paul', email: 'paul@me.com', password: '123' },
    { id: '3', name: 'lois', email: 'lois@me.com', password: '123' },
    { id: '4', name: 'sidney', email: 'sidney@me.com', password: '123' },
    { id: '5', name: 'canton', email: 'canton@me.com', password: '123' },
];

// now lets create a route 
// get information .get , no middleware, 
app.get('/', (req, res) => {
    res.status(200).json({ confirmations: 'success', users })
})




app.listen(port, () => {
    console.log(`Listening on port ${port}`)
    
})     