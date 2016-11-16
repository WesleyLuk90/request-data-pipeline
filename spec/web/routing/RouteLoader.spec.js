const RouteLoader = require('../../../src/web/routing/RouteLoader');
const RouteList = require('../../../src/web/routing/RouteList');
const Module = require('../../../src/web/Module');

describe('RouteLoader', () => {
    it('should load routes', () => {
        const routeList = new RouteList();
        const module = new Module({});
        const routeLoader = new RouteLoader(routeList, module);

        routeLoader.load();

        expect(routeList.getRoute('data-sources')).toBeTruthy();
    });
});
