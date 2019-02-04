const express = require('express');
const userController = require('../Controllers/userController');


const router = express.Router();

router.post('/', userController.addUser);


module.exports = router;