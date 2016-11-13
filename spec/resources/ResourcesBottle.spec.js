const resourcesBottle = require('../../src/resources/ResourcesBottle');
const Bottle = require('bottlejs');

describe('ResourcesBottle', () => {
    it('should provide instances', () => {
        const bottle = new Bottle();
        Bottle.config.strict = false;
        resourcesBottle.configure(bottle);
        expect(bottle.container.pathResolver).toBeTruthy();
    });
});
