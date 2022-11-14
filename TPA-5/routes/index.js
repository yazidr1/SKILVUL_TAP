const express = require('express');
const router = express.Router()

const userRoute = require('./user.router');
const todoRoute = require('./todo.router');
const auth = require('../middleware/auth');


router.use("/user", userRoute)
router.use("/todo", auth, todoRoute)

module.exports = router