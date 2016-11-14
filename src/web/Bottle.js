const Bottle = require('bottlejs');

Bottle.config.strict = true;

const bottle = new Bottle();

bottle.register(require('./App'));

module.exports = bottle;
