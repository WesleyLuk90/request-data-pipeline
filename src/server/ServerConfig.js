class ServerConfig {
    constructor() {
        this.port = 3000;
    }
    getPort() {
        return this.port;
    }
}

ServerConfig.$name = 'serverConfig';

module.exports = ServerConfig;
