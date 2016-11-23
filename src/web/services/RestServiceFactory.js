const BaseRestClass = require('../../shared/BaseRestClass');
const RestService = require('./RestService');

class RestServiceFactory {

    create(factoryClass) {
        if (!factoryClass || !(factoryClass.prototype instanceof BaseRestClass)) {
            throw new Error('Create requires instance of BaseRestClass');
        }

        return new RestService(factoryClass);
    }
}

RestServiceFactory.$name = 'restServiceFactory';
RestServiceFactory.$inject = [];

module.exports = RestServiceFactory;
