const serverBottle = require('../../../src/server/ServerBottle');
const Bottle = require('bottlejs');

describe('ServerBottle', () => {
    it('should provide instances', () => {
        const bottle = new Bottle();
        Bottle.config.strict = false;
        serverBottle.configure(bottle);
        expect(bottle.container.server).toBeTruthy();
        expect(bottle.container.serverConfig).toBeTruthy();
        expect(bottle.container.routeProvider).toBeTruthy();
        expect(bottle.container.middlewareProvider).toBeTruthy();
        expect(bottle.container.staticFilesMiddleware).toBeTruthy();
    });
});
