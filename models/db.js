async function hola_mundo() {
    console.log("Hola");
    return null;
}

var express = require('express');
var router = express.Router();

const oracledb = require('oracledb');
oracledb.outrormat = oracledb.OUT_FORMAT_OBJECT;

 async function execute_query(query) {
    let con;
    try {
        con = await oracledb.getConnection(
            {
                user: "ehernandez",
                password: "ehernandez",
                connectionString: "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.9.14)(PORT = 1521))(CONNECT_DATA =(SID= MICRO)))"
            }
        );
        const data = await con.execute(query);
        let d = data.rows;
        console.log("************ INICIO ******");
        console.log(d);
        console.log("************ FIN    ******");
        return d;

    } catch (err) {
        console.error(err);
        return null;
    }
}

// Exportar la función para que esté disponible fuera de este módulo
module.exports = {
    execute_query: execute_query,
    hola_mundo:hola_mundo
};