const bottle = require('../../src/Bottle');

describe('ServerBottle', () => {
    it('should provide instances', () => {
        expect(bottle.container.server).toBeTruthy();
        expect(bottle.container.serverConfig).toBeTruthy();

        expect(bottle.container.middlewareProvider).toBeTruthy();
        expect(bottle.container.staticFilesMiddleware).toBeTruthy();
        expect(bottle.container.bodyParserMiddleware).toBeTruthy();

        expect(bottle.container.routeProvider).toBeTruthy();
        expect(bottle.container.dataSourceRoutes).toBeTruthy();
    });
});
