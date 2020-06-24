const express = require('express');

const router = express.Router();

const PhasesController = require('../controllers/phases');


router.post('/', PhasesController.createPhase);
/*
router.put('/id:',PhasesController.completPhase);
router.put('/id:',PhasesController.alterPhase)
router.list('/',PhasesController.listPhase);
router.delete('/id:',PhasesController.deletePhase);
*/

module.exports = router;

