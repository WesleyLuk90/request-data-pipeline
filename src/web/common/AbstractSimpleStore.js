const Rx = require('rx');

class AbstractSimpleStore {
    constructor(initialValue) {
        if (typeof initialValue === 'undefined') {
            throw new Error('Expected an initial value');
        }
        this.stream = new Rx.BehaviorSubject(initialValue);
    }

    get() {
        return this.stream.getValue();
    }

    getStream() {
        return this.stream;
    }

    update(newValue) {
        this.stream.onNext(newValue);
    }
}

module.exports = AbstractSimpleStore;
