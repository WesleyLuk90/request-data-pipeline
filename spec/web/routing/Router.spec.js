const Router = require('../../../src/web/routing/Router');

describe('Router', () => {
    it('should set state on the routeState', () => {
        const routeState = {
            setCurrentState: jasmine.createSpy('setCurrentState'),
        };
        const router = new Router(routeState);
        router.go('some-state');

        expect(routeState.setCurrentState).toHaveBeenCalledWith('some-state');
    });
});
