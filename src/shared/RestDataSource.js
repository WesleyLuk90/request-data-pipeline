const BaseRestClass = require('./BaseRestClass');

class RestDataSource extends BaseRestClass {
    constructor() {
        super();
        this.url = '';
        this.name = '';
    }

    getUrl() {
        return this.url;
    }
}

module.exports = RestDataSource;
