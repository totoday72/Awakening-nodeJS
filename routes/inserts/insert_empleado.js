var fs = require('fs');
var express = require('express');
var router = express.Router();
const conexion = require('../../models/oracle');
/* GET users listing. */
router.get('/', async function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    console.log(req.body);
    let query = 'SELECT * FROM awakening.usuario WHERE usuario =\'' + 'EHERNANDEZ' + '\'';
    const response = await conexion.execute_query(query);
    res.send(response);
});

router.post('/', async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    let pnombre = req.body.pnombre;
    let snombre = req.body.snombre;
    let papellido = req.body.papellido;
    let sapellido = req.body.sapellido;
    let doc_dpi = req.body.doc_dpi;
    let fchnac = req.body.fchnac;
    let tel1 = req.body.tel1;
    let correo = req.body.correo;
    let peso = req.body.peso;
    let altura = req.body.altura;
    let base64_file = req.body.base64_imagen;
    let extention_file = req.body.tipo_archivo;
    let filename = doc_dpi + '.' + extention_file;
    let foto = filename;

    filename = filename.replace(" ", "");
    let query = "INSERT INTO AWMOVIL.EMPLEADO (PNOMBRE, SNOMBRE, PAPELLIDO, SAPELLIDO, DPI, FCHNAC, TEL1, EMAIL, PESO, ALTURA, FOTO) " +
        " VALUES ('" + pnombre + "', '" + snombre + "', '" + papellido + "', '" + sapellido + "', '" + doc_dpi + "', '" + fchnac + "', '" + tel1 + "', '" + correo + "', " + peso + ", " + altura + ", '" + foto + "')";
    const response = await conexion.execute_query(query);
    let base64Image = base64_file.split(';base64,')[1];
    fs.writeFile(+ __dirname + '..\\..\\files\\empleados\\' + filename, base64Image, {encoding: 'base64'}, function (err) {
        console.log('File created');
    });
    console.log("todo correcto");
    res.send(JSON.stringify({
        0: {
            resultado: 'error: '// + response?null:null,
        }
    }));
});

module.exports = router;
