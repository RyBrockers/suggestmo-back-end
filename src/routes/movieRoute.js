const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', userController.addMovie);
router.delete('/', userController.deleteMovie)
// router.get('/', userController.getMovies);

module.exports = router;