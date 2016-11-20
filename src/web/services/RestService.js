const superagent = require('superagent');

class RestService {
    constructor(baseEndpoint, restClass) {
        this.baseEndpoint = baseEndpoint;
        this.restClass = restClass;
    }

    getBaseEndpoint() {
        return this.baseEndpoint;
    }

    createEndpoint(suffix) {
        return `${this.getBaseEndpoint()}${suffix}`;
    }

    getClass() {
        return this.restClass;
    }

    create(restObject) {
        return superagent.post(this.createEndpoint('/create'))
            .send(restObject.toJsonObject());
    }
}

module.exports = RestService;
