const AbstractSimpleStore = require('../common/AbstractSimpleStore');

class DataSourceListStore extends AbstractSimpleStore {
    constructor() {
        super([]);
    }
}

DataSourceListStore.$name = 'dataSourceListStore';
DataSourceListStore.$inject = [];

module.exports = DataSourceListStore;
