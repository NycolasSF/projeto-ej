const express = require('express');

const router = express.Router();
const sessionController = require('../controllers/session');
router.post('/', async (req, res)=>{
  try{

  }catch(err){
    return res.status(400).json({error: 'login falhou'})
  }
});

module.exports = router;
