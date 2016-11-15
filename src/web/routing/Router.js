class Router {
    constructor(routeState) {
        this.routeState = routeState;
    }

    go(route) {
        this.routeState.setCurrentState(route);
    }
}

Router.$name = 'router';
Router.$inject = ['routeState'];

module.exports = Router;
