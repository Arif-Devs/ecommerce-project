const user = require('../models/userModel')

const getUsers = (req, res, next) => {
    try{
        res.status(200).send({ message: 'users is available', users: user })
    }catch(error){
        next(error)
    }

}


module.exports = getUsers