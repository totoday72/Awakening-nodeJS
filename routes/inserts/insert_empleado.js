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
    let foto = req.body.foto;
    console.log(req.body);

    let query = "INSERT INTO AWMOVIL.EMPLEADO (PNOMBRE, SNOMBRE, PAPELLIDO, SAPELLIDO, DPI, FCHNAC, TEL1, EMAIL, PESO, ALTURA, FOTO) " +
        " VALUES ('" + pnombre + "', '" + snombre + "', '" + papellido + "', '" + sapellido + "', '" + doc_dpi + "', '" + fchnac + "', '" + tel1 + "', '" + correo + "', " + peso + ", " + altura + ", '" + foto + "')";
    const response = await conexion.execute_query(query);

    // response.commit();
    console.log("todo correcto");
    res.send(JSON.stringify({
        0: {
            resultado: 'error: ' + response,
        }
    }));


    // if(!response.error){
    //     response.commit();
    //     console.log("todo correcto");
    //     res.send(JSON.stringify({
    //         0: {
    //         resultado: 'error:'
    //     }
    //     }));
    // }else {
    //     response.rollback();
    //     console.log("error" + response.error);
    //     res.send(JSON.stringify({
    //         0: {
    //         resultado: 'error:'
    //     }
    //     }));
    // }

    // res.send(JSON.stringify({
    //     0: {
    //         pnombre: req.body.pnombre,
    //         snombre: req.body.snombre,
    //         papellido: req.body.papellido,
    //         sapellido: req.body.sapellido,
    //         doc_dpi: req.body.doc_dpi,
    //         fchnac: req.body.fchnac,
    //         tel1: req.body.tel1,
    //         correo: req.body.correo,
    //         peso: req.body.peso,
    //         altura: req.body.altura,
    //         foto: req.body.foto
    //     }
    // }));
});

module.exports = router;
