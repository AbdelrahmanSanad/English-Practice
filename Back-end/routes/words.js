const express = require('express');
const router = express.Router();

const{getTestWords,getTheAnswer}=require('../controllers/test');

router
    .route('/')
    .get(getTestWords )
    .post(getTheAnswer)


module.exports = router;