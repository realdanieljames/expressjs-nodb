const express = require('express')
const path = require('path')
const morgan = require('morgan')
const app = express();
// dotenv
require('dotenv').config();

const userRoutes = require('./routes/userRoutes')



// name a port variable

//conventional to use capital letters
// check inside env and 
//tells our application to look in .env file for the PORT variable
// if there is no PORT defined, default to port 3000
const port = process.env.PORT || 3000;

// i want o look for static files
// for every middleware that runs everytime
// path helps to concatenate with dirname


// general middleware
// this is how we reach our routes
// have the middleware run everytime
app.use(morgan('dev'))
app.use(express.json())


//handle url encoded data from a form
app.use(express.urlencoded({extended: true}))



//routes middleware
// set a path for users
// parent route
// beginning of our route
//api   version1  users
app.use('/api/v1/users', userRoutes)


app.listen(port, () => {
    console.log(`Listening on port ${port}`)

})


