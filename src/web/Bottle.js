const Bottle = require('bottlejs');

Bottle.config.strict = true;

const bottle = new Bottle();

bottle.register(require('./Module').factory);

bottle.register(require('./App'));
bottle.register(require('./routing/Router'));
bottle.register(require('./routing/RouteState'));
bottle.register(require('./routing/RouteList'));
bottle.register(require('./routing/RouteLoader'));
bottle.register(require('./Bootstrapper'));
bottle.register(require('./stores/CreateDataSourceStore'));

module.exports = bottle;
