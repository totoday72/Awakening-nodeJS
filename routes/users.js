var express = require('express');
var router = express.Router();
const conexion = require('../models/oracle');

/* GET users listing. */
router.get('/', async function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    console.log(req.body);
    let query = 'SELECT pass FROM awakening.usuario WHERE usuario =\'' + 'EHERNANDEZ'+ '\'';
    const response = await conexion.execute_query(query);
    res.send(response);
});

router.post('/', async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    console.log(req.body);
    let query = 'SELECT pass FROM awakening.usuario WHERE usuario =\'' + req.body.user + '\' and pass=\'' + req.body.password + '\'';
    const response = await conexion.execute_query(query);
    res.send(response);
});

module.exports = router;
