const express = require('express');
require('express-async-errors');
const app = express();
const wordsRoutes = require('./routes/words');
const rankRoutes=require('./routes/ranks')
const cors = require('cors');

// Express Middleware for request parsing 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());


app.use('/words', wordsRoutes);
app.use('/ranks',rankRoutes);


// Global error handler
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).send({
      status: statusCode,
      message: err?.message || 'Internal Server Error!',
      errors: err?.errors || [],
    });
  });

module.exports = app


