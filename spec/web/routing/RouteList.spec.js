const RouteList = require('../../../src/web/routing/RouteList');

describe('RouteList', () => {
    it('should register routes', () => {
        const routeList = new RouteList();
        routeList.register('some-state', { data: 'some-data' });
        expect(routeList.getRoute('some-state')).toEqual({ data: 'some-data' });
    });

    it('should throw an error for undefined states', () => {
        const routeList = new RouteList();
        expect(() => routeList.getRoute('not defined')).toThrowError(/Unknown state 'not defined'/);
    });
});
