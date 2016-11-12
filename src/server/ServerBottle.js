const Bottle = require('bottlejs');
Bottle.config.strict = true;

const bottle = new Bottle();

bottle.register(require('./Server'));
bottle.register(require('./ServerConfig'));
bottle.register(require('./RouteProvider'));

module.exports = bottle;
