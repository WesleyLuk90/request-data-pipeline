const superagent = require('superagent');
const _ = require('lodash');

const RestUtils = require('../../shared/RestUtils');

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

    getResponseKey() {
        return _.snakeCase(this.restClass.name.replace(/^Rest/, ''));
    }

    getClass() {
        return this.restClass;
    }

    create(restObject) {
        return this.buildResponse(superagent
            .post(this.createEndpoint('/create'))
            .send(restObject.toJsonObject()));
    }

    buildResponse(request) {
        return request.then((response) => {
            const key = this.getResponseKey();
            const classData = response.body[key];
            const RestClass = this.restClass;
            return RestUtils.load(classData, new RestClass());
        });
    }
}

module.exports = RestService;
