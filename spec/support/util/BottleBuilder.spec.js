const BottleBuilder = require('../../../src/util/BottleBuilder');
const Bottle = require('bottlejs');

describe('BottleBuilder', () => {
    it('should be create bottles', () => {
        const bottle = BottleBuilder.createBottle();
        expect(bottle).toBeTruthy();
        expect(bottle.container).toBeTruthy();
    });

    it('should set strict to true', () => {
        expect(Bottle.config.strict).toBe(true);
    });
});
