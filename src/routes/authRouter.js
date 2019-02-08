const express = require('express');
const userController = require('../Controllers/userController');
// const authController = require('../controllers/authController');


const router = express.Router();

router.post('/', userController.addMovie);
// router.post('/', authController.auth);


module.exports = router;