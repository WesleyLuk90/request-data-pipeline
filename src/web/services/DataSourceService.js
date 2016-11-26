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

    get(id) {
        return this.service.get(id);
    }

    update(dataSource) {
        return this.service.update(dataSource);
    }
}

DataSourceService.$name = 'dataSourceService';
DataSourceService.$inject = ['restServiceFactory'];

module.exports = DataSourceService;
