const express = require('express');

const router = express.Router();

const usersRouter = require('./user.routes');
const sessionsRouter = require('./sessions.routes');
const phaseRouter = require('./phase.routes');
const taskRouter = require('./task.routes');
const typeRouter = require('./type.routes');

router.use('/usuarios', usersRouter);
router.use('/sessions', sessionsRouter);
router.use('/phases', phaseRouter);
router.use('/tasks', taskRouter);
router.use('/types', typeRouter);

router.get('/', (req,res) =>{
  return res.json({'hello': 'World'});
});

module.exports = router;
