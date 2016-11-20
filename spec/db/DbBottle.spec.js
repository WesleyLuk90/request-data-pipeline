const dbBottle = require('../../src/db/DbBottle');
const Bottle = require('bottlejs');

describe('DbBottle', () => {
    it('should provide instances', () => {
        const bottle = new Bottle();
        Bottle.config.strict = false;
        dbBottle.configure(bottle);
        expect(bottle.container.database).toBeTruthy();
        expect(bottle.container.storageServiceFactory).toBeTruthy();
        expect(bottle.container.dbConfig).toBeTruthy();
    });
});
