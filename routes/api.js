// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Book = require('../models/book');


// Routes
Book.methods(['get', 'put', 'post', 'delete']);
Book.register(router, '/book');


// Return router
module.exports = router;