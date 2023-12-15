const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "*", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                    credentials: true
                },
                {
                    origin: "localhost:3000", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                    credentials: true
                },
                {
                    origin: "http://192.168.10.237:3000", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                    credentials: true
                },{
                    origin: "http://192.168.10.237:3001", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                    credentials: true
                },
            ]
        }
    }
}
module.exports = config;