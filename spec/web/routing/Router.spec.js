const Router = require('../../../src/web/routing/Router');
const RouteState = require('../../../src/web/routing/RouteState');
const RouteList = require('../../../src/web/routing/RouteList');

describe('Router', () => {
    it('should set state on the routeState', () => {
        const routeState = new RouteState({ getRoute() { return {}; } });
        spyOn(routeState, 'setCurrentState');
        const router = new Router(routeState);
        router.go('some-state');

        expect(routeState.setCurrentState).toHaveBeenCalledWith('some-state');
    });

    it('should stream the current route', () => {
        const routeList = new RouteList();
        routeList.register('some-state', { some: 'data' });
        const routeState = new RouteState(routeList);
        const router = new Router(routeState);

        const routeStreamSpy = jasmine.createSpy('routeStream');
        router.getRouteStream().subscribe(routeStreamSpy);
        router.go('some-state');

        expect(routeStreamSpy).toHaveBeenCalledWith({ some: 'data' });
    });

    it('should set and get route parameters', () => {
        const routeList = new RouteList();
        routeList.register('some-state', { some: 'data' });
        const routeState = new RouteState(routeList);
        const router = new Router(routeState);

        router.go('some-state', { key: 'value' });

        expect(router.getParameter('key')).toBe('value');

    });
});
