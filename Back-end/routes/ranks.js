const express = require('express');
const { getRank } = require('../controllers/rank');
const router = express.Router();




router
    .route('/')
    .post(getRank)





module.exports = router;