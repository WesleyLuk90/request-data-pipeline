const RouteState = require('../../../src/web/routing/RouteState');

describe('RouteState', () => {
    it('should set and get the current state', () => {
        const routeState = new RouteState();

        routeState.setCurrentState('some-state');
        expect(routeState.getCurrentState()).toBe('some-state');
    });

    it('should get the current route', () => {
        const routeList = {
            getRoute: jasmine.createSpy('getRoute').and.returnValue('some data'),
        };
        const routeState = new RouteState(routeList);
        routeState.setCurrentState('some-state');
        expect(routeState.getCurrentRoute()).toBe('some data');
        expect(routeList.getRoute).toHaveBeenCalledWith('some-state');
    });
});
