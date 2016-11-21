const express = require('express');

class Server {
    constructor(serverConfig, routeProvider, middlewareProvider) {
        this.serverConfig = serverConfig;
        this.routeProvider = routeProvider;
        this.middlewareProvider = middlewareProvider;

        this.app = express();
    }

    start() {
        this.middlewareProvider.load(this.app);
        this.routeProvider.load(this.app);

        this.app.listen(this.serverConfig.getPort(), () => {
            console.log(`Server listening on port ${this.serverConfig.getPort()}`);
        });
    }
}

Server.$name = 'server';
Server.$inject = ['serverConfig', 'routeProvider', 'middlewareProvider'];

module.exports = Server;
