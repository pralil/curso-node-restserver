const express = require('express');
const cors = require('cors');


class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //* Middlewares
        this.middlewares();

        //* Rutas de mi aplicación


        this.routes();
    }

    middlewares() {

        //*
        this.app.use( cors() );

        //* lectura y Parseo del body
        this.app.use( express.json() );

        //* Directorio publico
        this.app.use( express.static('public') );

    }

    routes() {
        
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    listen() {
        this.app.listen( process.env.PORT, () => {
            console.log(`Servidor corriendo en: http://localhost:${ this.port }`);
        });
    }


}

module.exports = Server;