const Rx = require('rx');

const RestDataSource = require('../../shared/RestDataSource');

class CreateDataSourceStore {
    constructor() {
        this.stream = new Rx.BehaviorSubject(new RestDataSource());
    }

    getDataSource() {
        return this.stream.getValue();
    }

    getStream() {
        return this.stream;
    }

    update(dataSource) {
        this.stream.onNext(dataSource);
    }
}

CreateDataSourceStore.$name = 'createDataSourceStore';
CreateDataSourceStore.$inject = [];

module.exports = CreateDataSourceStore;
