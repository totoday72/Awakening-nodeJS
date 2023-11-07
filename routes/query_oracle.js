var express = require('express');
var router = express.Router();
const conexion = require('../models/oracle');

router.post('/', async function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    //res.send(JSON.stringify({key:"value"}));
    //res.setHeader('Content-Type', 'text/javascript');
    console.log(req.body.query_oracle + "req"); // imprime lo enviado en el post
    const response = await conexion.execute_query(req.body.query_oracle); // ejecuta el query y lo asigna a la variable response
    res.send(response); // responde al cliente el query de la base de datos.
});


module.exports = router;