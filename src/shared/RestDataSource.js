const BaseRestClass = require('./BaseRestClass');

class RestDataSource extends BaseRestClass {
    constructor() {
        super();
        this.url = '';
    }

    getUrl() {
        return this.url;
    }
}

module.exports = RestDataSource;
