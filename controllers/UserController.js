
let users =  require('../models/usersArray')


//==================================================================================================================//
//==================================================================================================================//

module.exports = {
    //getAllUsers
    // .get 
    getAllUsers: (req, res) => {
        return res.status(200).json({ confirmations: 'success', users })
    },


//==================================================================================================================//
//==================================================================================================================//
    //createNewUser
    // .post

        createNewUser: (req, res) => {
        
        // validate inputs
        // check to find validation inputs for each
        //out request is in our body
        // POST BODY POST BODY
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
        
    },





//==================================================================================================================//
//==================================================================================================================//

    //findOneUser
    // .get
    findOneUser: (req, res) => {
        // console.log(req.params,id)
        let foundUser = users.filter((user) => {
            if (user.id === req.params.id) {
                return res.status(200).json({ confirmation: 'success', user });
            }
        });
        if (!foundUser.length)
            return res
                .status(400)
                .json({ confirmation: 'fail', message: 'User does not exist' })
    },



//==================================================================================================================//
//==================================================================================================================//
    
    //updateUser
    // put
    updateUser: (req, res)=>{
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
    },


//==================================================================================================================//
//==================================================================================================================//



    //deleteUser
    // .delete 
    deleteUser: (req, res)=>{

        let removeUser =users.filter((foundUser)=>{
            //params = '/delete-user/:id'
            return foundUser.id !== req.params.id
    
        });
    
        users =  removeUser;
        return res.status(200).json({confirmation: 'success', users})
    }

}


