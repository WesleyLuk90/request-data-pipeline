class RouteList {
    constructor() {
        this.routes = new Map();
    }

    register(state, data) {
        this.routes.set(state, data);
    }

    getRoute(state) {
        if (!this.routes.has(state)) {
            throw new Error(`Unknown state '${state}'`);
        }
        return this.routes.get(state);
    }
}

RouteList.$name = 'routeList';

module.exports = RouteList;
