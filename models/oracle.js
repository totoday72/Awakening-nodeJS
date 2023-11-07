const oracledb = require('oracledb');
oracledb.outrormat = oracledb.OUT_FORMAT_OBJECT;
const conexion_info = require('./credentials');

async function hola_mundo() {
    console.log("Hola");
    return null;
}

async function execute_query(query) {
    query = query.replace(';', '');                                                 // quita el ; si el query trajera, si lo tiene da error ejecutar el query
    let con;                                                                        // declarar variable para conexion a la DB
    try {
        con = await oracledb.getConnection(                                         // se crea la conexion a la base de datos
            {
                user: conexion_info.user('ORACLE'),
                password: conexion_info.password('ORACLE'),
                connectionString: conexion_info.url('ORACLE')
            }
        );
        const data = await con.execute(query);                                          // Ejecuta el query en la base de datos y retorna datos

        /*** CONVERTIR LOS DATOS RECIBIDOS DE LA BD A ESTRUCTURA JSON ***/
        const cabeceras = data.metaData.map(column => column.name);                     // obtiene el nombre de las columnas
        let contador = 0;                                                       // contador para ingresar los objetos obtenidos
        let pre_Json = {};                                                           // arreglo pare hacer una lista de objetos de la base de datos
        for (const row of data.rows) {                                                  //para cada fila de las filas obtenidas de la base de datos hacer:
            const registro = {};                                                     // arreglo para guardar una fila
            let valor_columna = {};                                                 // arreglo para guardar los valores de cada columna
            for (let i = 0; i < cabeceras.length; i++) {                        // para las columnas desde el indice 0 hasta el indice cabeceras -1 hacer
                const nombre_columna = cabeceras[i];                                    // obtener el nombre de la cabecera
                valor_columna = row[i];                                                 //guardar el valor de la fila en  valor_columna
                registro[nombre_columna] = valor_columna;                               // guardar la fila con indice nombre_columna
            }
            pre_Json[contador] = registro;                                              //guardar el objeto dentro del pre_json, con indice del contador
            contador++;                                                                 // suma 1 al contador
        }
        //console.log('Datos de la fila:', pre_Json);
        let json = JSON.stringify(pre_Json); //pasar a json el arreglo de objetos obtenidos de la base de datos.
        console.log("************ DATOS OBTENIDOS DE LA BASE DE DATSO DEL QUERY ******");
        console.log(query); // imprime el query
        console.log("************ JSON JSON JSON JSON ******");
        console.log(json); // Json
        console.log("************ FIN    ******");
        return json; // retornar el json creado como respuesta de la base de datos.
    } catch (err) {
        console.error(err); // si existe un error se envia un null y se imprime el error en la consola de nodejs
        return null;
    } finally { // al finalizar con exito o sin exito obliga a cerrar la conexion con la base de datos.
        if (con) {
            try {
                await con.close();
            } catch (error) {
                console.error('Error al cerrar la conexión:', error);
            }
        }
    }

}

// Exportar la función para que esté disponible fuera de este módulo
module.exports = {
    execute_query: execute_query, //se exporta para que pueda usarse fuera de este archivo js
    hola_mundo: hola_mundo
};

/*
*
*
*
*
* ############################## CREAR EL ARCHIVO: credentials.js y pegar el siguiente codigo agregando los datos necesarios para la conexion
function user(database) { // usuario de la base de datos
    if (database === 'DB2')
        return "";
    else if (database === 'ORACLE')
        return "";
}

function password(database) { // contraseña del usuario
    if (database === 'DB2')
        return "";
    else if (database === 'ORACLE')
        return "";
}

function port(database) { //DB2: 50000 || ORACLE 1521
    if (database === 'DB2')
        return "50000";
    else if (database === 'ORACLE')
        return "1521";
}

function hostname(database) { // PUEDE SER: localhost o una IP
    if (database === 'DB2')
        return "";
    else if (database === 'ORACLE')
        return "";
}

function database_name(database) { //DB2: Nombre de la base de datos
    if (database === 'DB2')
        return "SAMPLE";
    else if (database === 'ORACLE')
        return "";
}

function protocol(database) { // DB2 || ORACLE  || protocolo de conexion
    if (database === 'DB2')
        return "TCPIP";
    else if (database === 'ORACLE')
        return "TCP";
}

function sid(database) { // ORACLE  || SID
    if (database === 'DB2')
        return "";
    else if (database === 'ORACLE')
        return "";
}

function url(database) { // ORACLE ||  url de conexion.
    if (database === 'DB2')
        return "DRIVER={DB2};DATABASE="+database_name('DB2')+";HOSTNAME="+hostname('DB2')+";UID="+user('DB2')+";PWD="+password('DB2')+";PORT="+port('DB2')+";PROTOCOL="+protocol('DB2');
    else if (database === 'ORACLE')
        return "(DESCRIPTION =(ADDRESS = (PROTOCOL = "+protocol('ORACLE')+")(HOST = "+ hostname('ORACLE')+")(PORT = "+port('ORACLE')+"))(CONNECT_DATA = (SID = "+sid('ORACLE')+")))";
}

module.exports = {
    user: user, //se exporta para que pueda usarse fuera de este archivo js
    password: password,
    url: url
};
*
*
*
* */