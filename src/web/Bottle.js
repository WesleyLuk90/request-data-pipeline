const Bottle = require('bottlejs');

Bottle.config.strict = true;

const bottle = new Bottle();

bottle.register(require('./App'));
bottle.register(require('./routing/Router'));
bottle.register(require('./routing/RouteState'));
bottle.register(require('./routing/RouteList'));

module.exports = bottle;
