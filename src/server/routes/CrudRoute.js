const BaseRoute = require('./BaseRoute');
const Check = require('../../util/Check');
const BaseRestClass = require('../../shared/BaseRestClass');
const RestUtils = require('../../shared/RestUtils');
const StorageServiceFactory = require('../../db/StorageServiceFactory');
const UrlFormatter = require('../../shared/UrlFormatter');
const Response = require('../Response');

class CrudRoute extends BaseRoute {
    constructor(restClass, storageServiceFactory) {
        super();
        this.restClass = Check.subClassOf(restClass, BaseRestClass);
        Check.instanceOf(storageServiceFactory, StorageServiceFactory);
        this.storage = storageServiceFactory.create(this.restClass);
    }

    load(routeWrapper) {
        routeWrapper.post(
            UrlFormatter.getCreateUrl(this.restClass),
            (req, res) => this.create(req, res));
        routeWrapper.post(
            UrlFormatter.getDeleteUrl(this.restClass),
            (req, res) => this.delete(req, res));
        routeWrapper.post(
            UrlFormatter.getUpdateUrl(this.restClass),
            (req, res) => this.update(req, res));
        routeWrapper.post(
            UrlFormatter.getListUrl(this.restClass),
            (req, res) => this.list(req, res));
    }

    create(req) {
        const instance = this.loadInstance(req.body);
        return this.storage.create(instance)
            .then(() => Response.successWithModel(instance));
    }

    update(req) {
        const instance = this.loadInstance(req.body);
        return this.storage.update(instance)
            .then(() => Response.successWithModel(instance));
    }

    delete(req) {
        const instance = this.loadInstance(req.body);
        return this.storage.delete(instance)
            .then(() => Response.success());
    }

    list(req) {
        const filters = req.body.filters;
        return this.storage.list(filters)
            .then(values => Response.successWithModels(values, this.restClass));
    }

    loadInstance(data) {
        const RestClass = this.restClass;
        const instance = new RestClass();
        RestUtils.load(data, instance);
        return instance;
    }
}

module.exports = CrudRoute;
