const moment = require('moment')
function timer(req, res, next) {

    // console.log(req.method, req.url, res.statusCode)
    // console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
    console.log(moment().format('lll'))

    next();
}



module.exports = timer;