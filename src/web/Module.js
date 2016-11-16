class Module {
    static factory(bottle) {
        return new Module(bottle);
    }

    constructor(bottle) {
        this.bottle = bottle;
    }

    get(dependency) {
        if (!this.bottle[dependency]) {
            throw new Error(`Dependency ${dependency} does not exist`);
        }
        return this.bottle[dependency];
    }
}

Module.factory.$name = 'module';
Module.factory.$type = 'factory';

module.exports = Module;
