const serverBottle = require('../../../src/server/ServerBottle');

describe('ServerBottle', () => {
    it('should provide instances', () => {
        expect(serverBottle.container.server).toBeTruthy();
    });
});
