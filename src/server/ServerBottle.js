const Bottle = require('bottlejs');

Bottle.config.strict = true;
const bottle = new Bottle();

bottle.register(require('./Server'));
bottle.register(require('./ServerConfig'));
bottle.register(require('./RouteProvider'));
bottle.register(require('./MiddlewareProvider'));
bottle.register(require('./middleware/StaticFilesMiddleware'));

module.exports = bottle;
