class DbConfig {
    constructor() {
        this.url = 'mongodb://localhost:51001/request_config';
    }
    getUrl() {
        return this.url;
    }
    setUrl(url) {
        this.url = url;
    }
}

DbConfig.$name = 'dbConfig';
DbConfig.$inject = [];

module.exports = DbConfig;
