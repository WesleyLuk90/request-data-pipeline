const RestDataSource = require('../../shared/RestDataSource');

class DataSourceService {
    constructor(restServiceFactory) {
        this.service = restServiceFactory.create(RestDataSource);
    }

    create(dataSource) {
        return this.service.create(dataSource);
    }

    list() {
        return this.service.list();
    }
}

DataSourceService.$name = 'dataSourceService';
DataSourceService.$inject = ['restServiceFactory'];

module.exports = DataSourceService;
