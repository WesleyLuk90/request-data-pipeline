class MockEvent {
    static create() {
        return new MockEvent();
    }
    constructor() {
        this.defaultPrevented = false;
    }

    preventDefault() {
        this.defaultPrevented = true;
    }

    isDefaultPrevented() {
        return this.defaultPrevented;
    }
}

module.exports = MockEvent;
