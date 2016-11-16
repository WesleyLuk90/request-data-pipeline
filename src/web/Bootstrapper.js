class Bootstrapper {
    constructor(routeLoader) {
        this.routeLoader = routeLoader;
    }
    boot() {
        this.routeLoader.load();
    }
}

Bootstrapper.$name = 'bootstrapper';
Bootstrapper.$inject = ['routeLoader'];

module.exports = Bootstrapper;
