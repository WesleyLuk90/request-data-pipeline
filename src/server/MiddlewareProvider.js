class MiddlewareProvider {
    constructor(middleware) {
        this.middleware = middleware;
    }

    load(app) {
        this.getMiddleware().forEach(middleware => middleware.load(app));
    }

    getMiddleware() {
        return this.middleware;
    }
}

function MiddlewareProviderFactory(container) {
    return new MiddlewareProvider([
        container.staticFilesMiddleware,
    ]);
}

MiddlewareProviderFactory.$name = 'middlewareProvider';
MiddlewareProviderFactory.$type = 'factory';

module.exports = MiddlewareProviderFactory;
module.exports.MiddlewareProvider = MiddlewareProvider;
