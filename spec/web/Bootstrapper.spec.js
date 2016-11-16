const Bootstrapper = require('../../src/web/Bootstrapper');

describe('Bootstrapper', () => {
    it('should bootstrap', () => {
        const routeLoader = { load: jasmine.createSpy('routeLoader') };
        const bootstrapper = new Bootstrapper(routeLoader);

        bootstrapper.boot();

        expect(routeLoader.load).toHaveBeenCalled();
    });
});
