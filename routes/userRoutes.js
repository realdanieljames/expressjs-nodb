const express = require('express');
const router = express.Router()
let users = require('../models/usersArray')


// now lets create a route 
// get information .get , no middleware, 
//get all users
router.get('/all-users', (req, res) => {
    return res.status(200).json({ confirmations: 'success', users })
})


// route one user in our users
// get one user
router.get('/single-user/:id', (req, res) => {
    let foundUser = users.filter((user) => {
        if (user.id === req.params.id) {
            return res.status(200).json({ confirmation: 'success', user });
        }
    });
    if (!foundUser.length)
        return res
            .status(400)
            .json({ confirmation: 'fail', message: 'User does not exist' })
});




// CREATE PUT
// create POST route
// returns an object req.body
router.post('/create-user', (req, res) => {

    // validate inputs
    // check to find validation inputs for each
    if(!req.body.name || !req.body.email || !req.body.password){
        return res
        .status(400)
        .json({confirmation: 'fail', message: 'All Inputs Must be Filled'})
    }

    // check if user exists
    let existingUser = users.filter((foundUser)=> foundUser.email === req.body.email);
        if(existingUser.length){
            return res.status(400).send('User Already Exists')
        }
    


    // send an object to array in usersArray

    const newUser = {};

    // values for newUser based on req.body inputs in postman
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    newUser.id = String(users.length + 1);

    // add user to array
    users.push(newUser);
    return res.status(200).json({ confirmation: 'success', newUser })

})



router.put('/update-user/:id', (req, res)=>{
    //holds anything that we decide to change
    //grab user inputtrd 
    let updatedUser = req.body
    users.filter((foundUser)=>{
        if(foundUser.id === req.params.id){
            //change values for user inputted
            foundUser.name = updatedUser.name 
            ? updatedUser.name
            :foundUser.name;

            foundUser.password = updatedUser.password 
            ? updatedUser.password
            :foundUser.password;

        }
    
});
// return array of users
return res.status(200).json({message: 'User Updates', users})
})


// DELETE
router.delete('/delete-user/:id', (req, res)=>{

    let removeUser =users.filter((foundUser)=>{
        //params = '/delete-user/:id'
        return foundUser.id !== req.params.id

    });

    users =  removeUser;
    return res.status(200).json({confirmation: 'success', users})
})


module.exports = router 