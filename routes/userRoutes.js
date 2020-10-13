const express = require('express');
const router = express.Router()
let users = require('../models/usersArray')

const {getAllUsers } = require('../controllers/UserController')
const {createNewUser} = require('../controllers/UserController')
const {findOneUser} = require('../controllers/UserController')
const {updateUser} = require('../controllers/UserController')
const {deleteUser} = require('../controllers/UserController')

// now lets create a route 
// get information .get , no middleware, 
//get all users
router.get('/all-users', getAllUsers)



// route one user in our users
// get one user
router.get('/single-user/:id', findOneUser );




// CREATE PUT
// create POST route
// returns an object req.body
router.post('/create-user', createNewUser)
    // check to find validation inputs for each



router.put('/update-user/:id',updateUser )


// // DELETE
router.delete('/delete-user/:id', deleteUser)


module.exports = router 