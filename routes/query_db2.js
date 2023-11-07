var express = require('express');
var router = express.Router();
const conexion_db2 = require('../models/db2');

router.post('/', async function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    //res.send(JSON.stringify({key:"value"}));
    //res.setHeader('Content-Type', 'text/javascript');
    console.log(req.body.query_db2 + "req"); // imprime lo enviado en el post
    const response = await conexion_db2.execute_query(req.body.query_db2); // ejecuta el query y lo asigna a la variable response
    res.send(response); // responde al cliente el query de la base de datos.
});


module.exports = router;