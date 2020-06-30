const express = require('express');

const router = express.Router();

const PhasesController = require('../controllers/phases');


router.post('/', PhasesController.createPhase);
router.patch('/id:',PhasesController.completPhase);
router.put('/id:',PhasesController.alterPhase);
router.get('/',PhasesController.listPhase);
router.delete('/id:',PhasesController.deletePhase);


module.exports = router;

