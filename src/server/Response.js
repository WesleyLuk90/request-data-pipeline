const Check = require('../util/Check');
const UrlFormatter = require('../shared/UrlFormatter');

/* eslint-disable no-unused-vars */

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
        this.data[this.getModelsClassKey(modelClass)] = models.map(m => m.toJsonObject());
    }

    getModelKey(model) {
        return UrlFormatter.getModelKey(model.constructor);
    }

    getModelsClassKey(modelClass) {
        return UrlFormatter.getModelsKey(modelClass);
    }

    toJson() {
        return this.data;
    }
}

module.exports = Response;
