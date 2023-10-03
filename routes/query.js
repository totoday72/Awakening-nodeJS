var express = require('express');
var router = express.Router();
const conexion = require('../models/db');

router.post('/', async function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    //res.send(JSON.stringify({key:"value"}));
    //res.setHeader('Content-Type', 'text/javascript');
    console.log(req.body.query+ "req"); // imprime lo enviado en el post
    console.log(req.body.query+ "res");
    const response = await conexion.execute_query(req.body.query); // ejecuta el query y lo asigna a la variable response
    res.send(response); // responde al cliente el query de la base de datos.
});


module.exports = router;