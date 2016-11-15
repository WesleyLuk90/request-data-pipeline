class RouteState {
    constructor(routeList) {
        this.routeList = routeList;
        this.state = null;
    }

    setCurrentState(state) {
        this.state = state;
    }

    getCurrentState() {
        return this.state;
    }

    getCurrentRoute() {
        return this.routeList.getRoute(this.getCurrentState());
    }
}

RouteState.$name = 'routeState';
RouteState.$inject = ['routeList'];

module.exports = RouteState;
