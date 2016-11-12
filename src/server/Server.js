const express = require('express');

class Server {
    constructor(serverConfig, routeProvider) {
        this.serverConfig = serverConfig;
        this.routeProvider;

        this.app = express();
    }
    start() {
        this.app.listen(3000, () => {
            console.log('Server listening on port 3000');
        });
    }
}

Server.$name = 'server';
Server.$inject = ['serverConfig', 'routeProvider'];

module.exports = Server;
