const _ = require('lodash');
const pluralize = require('pluralize')

const Check = require('../util/Check');

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

    static successWithModels(models, modelClass) {
        Check.isArray(models);
        Check.notNull(modelClass);
        const response = Response.success();
        response.setModelsData(models, modelClass);
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

    setModelsData(models, modelClass) {
        this.data[this.getModelsKey(modelClass)] = models.map(m => m.toJsonObject());
    }

    getModelKey(model) {
        return _.snakeCase(model.constructor.name.replace(/^Rest/, ''));
    }

    getModelsKey(modelClass) {
        return _.snakeCase(pluralize(modelClass.name.replace(/^Rest/, '')));
    }

    toJson() {
        return this.data;
    }
}

module.exports = Response;
