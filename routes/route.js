const express = require('express');
const Router= express.Router()
const getUsers = require('../controllers/userController')





Router.get('/', getUsers)


module.exports = Router