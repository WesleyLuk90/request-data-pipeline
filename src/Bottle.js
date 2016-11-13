const BottleBuilder = require('./util/BottleBuilder');

const bottle = BottleBuilder.createBottle();
require('./server/ServerBottle').configure(bottle);
require('./resources/ResourcesBottle').configure(bottle);

module.exports = bottle;
