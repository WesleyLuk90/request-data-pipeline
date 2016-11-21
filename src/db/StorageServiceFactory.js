const _ = require('lodash');

const StorageService = require('./StorageService');
const BaseRestClass = require('../shared/BaseRestClass');

class StorageServiceFactory {
    constructor(database) {
        this.database = database;
    }
    create(baseClass) {
        if (!(baseClass.prototype instanceof BaseRestClass)) {
            throw new Error(`Expected class '${baseClass.name}' to be a subclass of BaseRestClass`);
        }
        return new StorageService(this.database, this.getTableName(baseClass), baseClass);
    }

    getTableName(baseClass) {
        const name = baseClass.name;
        return _.snakeCase(name.replace(/^Rest/, ''));
    }
}

StorageServiceFactory.$name = 'storageServiceFactory';
StorageServiceFactory.$inject = ['database'];

module.exports = StorageServiceFactory;
