var express = require('express');
var path = require('path');
var router = express.Router();
const conexion = require('../models/oracle');


/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
