const express = require('express');
const userController = require('../Controllers/userController');

const router = express.Router();

router.post('/', userController.addUser);
// router.get('/', userController.list);
// router.get('/:id', userController.findById);
// router.patch('/:id', userController.update);
// router.delete('/:id', userController.delete);

module.exports = router;