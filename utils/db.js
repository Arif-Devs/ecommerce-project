const mongoose = require('mongoose')

function connectDb(connrctionStr){
    return  mongoose.connect(connrctionStr)
}

module.exports = connectDb