//middleware
//third argument available, next
function logger(req, res, next) {
    // call
    //get post , out HTTP verbs - req methods
    // routs
    console.log(req.method, req.url, res.statusCode)

    //add a next function/ pass this ti next function that needs to run
    next();
}



module.exports = logger;