const express = require('express');

const router = express.Router();
const usersController = require('../controllers/users');

router.post('/', usersController.createUsuario);

module.exports = router;
