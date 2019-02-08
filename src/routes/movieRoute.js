const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, userController.addMovie);
// router.get('/', userController.getMovies);

module.exports = router;