const Response = require('./Response');
const Check = require('../util/Check');

class RouteWrapper {
    constructor(app) {
        this.app = app;
    }

    get(routeName, route) {
        this.app.get(routeName, this.createRouteHandler(route));
    }

    post(routeName, route) {
        this.app.post(routeName, this.createRouteHandler(route));
    }

    createRouteHandler(route) {
        return (req, res) =>
            Promise.resolve()
            .then(() => route(req, res))
            .then(
                response => this.sendResponse(response, res),
                e => this.errorHandler(e, res));
    }

    errorHandler(error, res) {
        res.json(Response.error(error).toJson());
    }

    checkResponse(response) {
        if (response instanceof Response) {
            return Promise.resolve(response);
        }
        if (typeof response.then !== 'function') {
            throw new Error(/Route must return a Response or a Promised Response/);
        }
        return response.then(res => this.checkResponse(res));
    }

    sendResponse(response, res) {
        Check.notNull(res);
        return this.checkResponse(response)
            .then((checkedResponse) => {
                res.json(checkedResponse.toJson());
            });
    }
}

module.exports = RouteWrapper;
