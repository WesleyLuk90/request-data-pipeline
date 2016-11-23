const Rx = require('rx');

const RestDataSource = require('../../shared/RestDataSource');

class CreateDataSourceStore {
    constructor() {
        this.stream = new Rx.BehaviorSubject(new RestDataSource());
    }

    get() {
        return this.stream.getValue();
    }

    reset() {
        this.update(new RestDataSource());
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
