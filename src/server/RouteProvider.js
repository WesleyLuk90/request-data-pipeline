const RouteWrapper = require('./RouteWrapper');

class RouteProvider {
    constructor(container) {
        this.routes = [
            container.dataSourceRoutes,
        ];
    }
    load(app) {
        const routeWrapper = new RouteWrapper(app);

        this.routes.forEach(route => route.load(routeWrapper));
    }
}

function RouteProviderFactory(container) {
    return new RouteProvider(container);
}

RouteProviderFactory.$name = 'routeProvider';
RouteProviderFactory.$type = 'factory';

module.exports = RouteProviderFactory;
