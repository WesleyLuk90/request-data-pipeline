const Bottle = require('bottlejs');

class BottleBuilder {
    static createBottle() {
        Bottle.config.strict = true;
        const bottle = new Bottle();
        return bottle;
    }
}

module.exports = BottleBuilder;
