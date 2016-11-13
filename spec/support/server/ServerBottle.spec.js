const serverBottle = require('../../../src/server/ServerBottle');

describe('ServerBottle', () => {
    it('should provide instances', () => {
        expect(serverBottle.container.server).toBeTruthy();
        expect(serverBottle.container.serverConfig).toBeTruthy();
        expect(serverBottle.container.routeProvider).toBeTruthy();
        expect(serverBottle.container.middlewareProvider).toBeTruthy();
        expect(serverBottle.container.staticFilesMiddleware).toBeTruthy();
    });
});
