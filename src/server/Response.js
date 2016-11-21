const _ = require('lodash');

class Response {
    static success(data) {
        const response = new Response();
        response.data = Object.assign({}, data, { success: true });
        return response;
    }

    static successWithModel(model) {
        const response = Response.success();
        response.setModelData(model);
        return response;
    }

    static error(error) {
        const response = new Response();
        response.data = { error: true };
        return response;
    }

    constructor() {
        this.data = {};
    }

    setModelData(model) {
        this.data[this.getModelKey(model)] = model.toJsonObject();
    }

    getModelKey(model) {
        return _.snakeCase(model.constructor.name.replace(/^Rest/, ''));
    }

    toJson() {
        return this.data;
    }
}

module.exports = Response;
