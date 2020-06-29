const express = require('express');

const router = express.Router();
const TypeController = require('../controllers/type');

router.post('/', TypeController.createType);

module.exports = router;
