const AbstractSimpleStore = require('../common/AbstractSimpleStore');
const RestDataSource = require('../../shared/RestDataSource');

class EditDataSourceStore extends AbstractSimpleStore {
    constructor() {
        super(new RestDataSource());
    }
}

EditDataSourceStore.$name = 'editDataSourceStore';
EditDataSourceStore.$inject = [];

module.exports = EditDataSourceStore;
