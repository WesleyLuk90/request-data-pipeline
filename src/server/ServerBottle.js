function configure(bottle) {
    bottle.register(require('./Server'));
    bottle.register(require('./ServerConfig'));
    bottle.register(require('./RouteProvider'));
    bottle.register(require('./MiddlewareProvider'));
    bottle.register(require('./middleware/StaticFilesMiddleware'));
}

module.exports.configure = configure;
