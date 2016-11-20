const RestDataSource = require('../../shared/RestDataSource');

class DataSourceService {
    constructor(restServiceFactory) {
        this.service = restServiceFactory.create(RestDataSource);
    }

    create(dataSource) {
        return this.service.create(dataSource)
            .catch(e => console.log(e)).then(e => console.log(e));
    }
}

DataSourceService.$name = 'dataSourceService';
DataSourceService.$inject = ['restServiceFactory'];

module.exports = DataSourceService;
