const Bottle = require('bottlejs');

Bottle.config.strict = true;

const bottle = new Bottle();

bottle.register(require('./App'));
bottle.register(require('./routing/Router'));

module.exports = bottle;
