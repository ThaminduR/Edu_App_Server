var express = require('express');
var router = express.Router();


//Routers
var userRouter = require('./users');
//Routes
router.use('/user',userRouter)

module.exports = router;
