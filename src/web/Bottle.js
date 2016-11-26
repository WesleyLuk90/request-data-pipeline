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
bottle.register(require('./services/DataSourceService'));
bottle.register(require('./services/RestServiceFactory'));
bottle.register(require('./data-sources/DataSourceListStore'));
bottle.register(require('./data-sources/DataSourceListLoader'));
bottle.register(require('./data-sources/CreateDataSourceService'));
bottle.register(require('./data-sources/EditDataSourceService'));
bottle.register(require('./data-sources/EditDataSourceStore'));

module.exports = bottle;
