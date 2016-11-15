const bottle = require('../../src/web/Bottle');

describe('Bottle', () => {
    it('should contain dependencies', () => {
        expect(bottle.container.app).toBeTruthy();
        expect(bottle.container.router).toBeTruthy();
        expect(bottle.container.routeState).toBeTruthy();
        expect(bottle.container.routeList).toBeTruthy();
    });
});
