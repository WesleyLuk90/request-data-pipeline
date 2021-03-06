const Rx = require('rx');

class Router {
    constructor(routeState) {
        this.routeState = routeState;

        this.routeStream = new Rx.BehaviorSubject();
    }

    go(route, parameters) {
        this.parameters = parameters;
        this.routeState.setCurrentState(route);

        this.routeStream.onNext(this.routeState.getCurrentRoute());
    }

    getRouteStream() {
        return this.routeStream;
    }

    getParameter(key) {
        return this.parameters[key];
    }
}

Router.$name = 'router';
Router.$inject = ['routeState'];

module.exports = Router;
