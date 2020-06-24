const express = require('express');

const router = express.Router();
const TasksController = require('../controllers/tasks');

router.get('/', TasksController.listTask);
router.get('/id:', TasksController.detalheTask);
router.post('/', TasksController.createTask);
router.put('/id:', TasksController.updateTask);
router.delete('/id:', TasksController.deleteTask);

module.exports = router;