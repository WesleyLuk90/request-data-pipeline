const CrudRoute = require('./CrudRoute');
const RestDataSource = require('../../shared/RestDataSource');

class DataSourceRoutes extends CrudRoute {
    constructor(storageServiceFactory) {
        super(RestDataSource, storageServiceFactory);
    }
}

DataSourceRoutes.$name = 'dataSourceRoutes';
DataSourceRoutes.$inject = ['storageServiceFactory'];

module.exports = DataSourceRoutes;
