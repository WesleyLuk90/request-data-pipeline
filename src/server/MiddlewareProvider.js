class MiddlewareProvider {
    constructor(staticFilesMiddleware) {
        this.middleware = [
            staticFilesMiddleware,
        ];
    }

    load(app) {
        this.middleware.forEach((middleware) => middleware.load(app));
    }
}

MiddlewareProvider.$name = 'middlewareProvider';
MiddlewareProvider.$inject = ['staticFilesMiddleware'];

module.exports = MiddlewareProvider;
