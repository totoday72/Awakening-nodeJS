var express = require('express');
var router = express.Router();
const conexion = require('../models/oracle');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/', async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    console.log(req.body);
    let query = 'SELECT pass FROM awakening.usuario WHERE usuario =\'' + req.body.user + '\' and pass=\'' + req.body.password + '\'';
    const response = await conexion.execute_query(query);
    res.send(response);
});

module.exports = router;
