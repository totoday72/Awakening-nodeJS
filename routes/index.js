var express = require('express');
var path = require('path');
var router = express.Router();
const conexion = require('../models/db');


/* GET home page. */
router.get('/', async function(req, res, next) {
  //let response =  await  conexion.execute_query("SELECT 'USUARIO:'||USUARIO, 'AGENCIA:'||CAAGEN FROM AWAKENING.USUARIO WHERE CAAGEN IN (1)");
  res.render('index', { title: 'Express' });
});

module.exports = router;
