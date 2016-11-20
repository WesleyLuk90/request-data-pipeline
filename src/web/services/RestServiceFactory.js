const BaseRestClass = require('../../shared/BaseRestClass');
const RestService = require('./RestService');
const _ = require('lodash');

class RestServiceFactory {
    classToEndpointChunk(factoryClass) {
        return _.kebabCase(factoryClass.name.replace(/^Rest/, ''));
    }

    createEndpointName(factoryClass) {
        const chunk = this.classToEndpointChunk(factoryClass);
        return `/api/${chunk}`;
    }

    create(factoryClass) {
        if (!factoryClass || !(factoryClass.prototype instanceof BaseRestClass)) {
            throw new Error('Create requires instance of BaseRestClass');
        }

        return new RestService(this.createEndpointName(factoryClass), factoryClass);
    }
}

RestServiceFactory.$name = 'restServiceFactory';
RestServiceFactory.$inject = [];

module.exports = RestServiceFactory;
