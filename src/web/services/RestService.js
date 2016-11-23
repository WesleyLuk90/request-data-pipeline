const superagent = require('superagent');
const _ = require('lodash');

const RestUtils = require('../../shared/RestUtils');
const UrlFormatter = require('../../shared/UrlFormatter');

class RestService {
    constructor(restClass) {
        this.restClass = restClass;
    }

    getClass() {
        return this.restClass;
    }

    create(restObject) {
        return superagent
            .post(UrlFormatter.getCreateUrl(this.restClass))
            .send(restObject.toJsonObject())
            .then(res => this.responseToModel(res));
    }

    list() {
        return superagent
            .post(UrlFormatter.getListUrl(this.restClass))
            .send({})
            .then(res => this.responseToModels(res));
    }

    responseToModel(response) {
        return this.buildModel(this.getResponseModelData(response));
    }

    getResponseModelData(response) {
        const key = UrlFormatter.getModelKey(this.restClass);
        return response.body[key];
    }

    getResponseModelsData(response) {
        const key = UrlFormatter.getModelsKey(this.restClass);
        return response.body[key];
    }

    buildModel(data) {
        const RestClass = this.restClass;
        return RestUtils.load(data, new RestClass());
    }

    responseToModels(response) {
        return this.getResponseModelsData(response).map(d => this.buildModel(d));
    }
}

module.exports = RestService;
