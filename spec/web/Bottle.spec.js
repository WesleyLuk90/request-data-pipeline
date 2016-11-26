const bottle = require('../../src/web/Bottle');

describe('Bottle', () => {
    it('should contain dependencies', () => {
        expect(bottle.container.app).toBeTruthy();
        expect(bottle.container.router).toBeTruthy();
        expect(bottle.container.routeState).toBeTruthy();
        expect(bottle.container.routeList).toBeTruthy();
        expect(bottle.container.module).toBeTruthy();
        expect(bottle.container.routeLoader).toBeTruthy();
        expect(bottle.container.bootstrapper).toBeTruthy();
        expect(bottle.container.createDataSourceStore).toBeTruthy();
        expect(bottle.container.dataSourceService).toBeTruthy();
        expect(bottle.container.restServiceFactory).toBeTruthy();
        expect(bottle.container.dataSourceListStore).toBeTruthy();
        expect(bottle.container.dataSourceListLoader).toBeTruthy();
        expect(bottle.container.createDataSourceService).toBeTruthy();

        expect(bottle.container.editDataSourceService).toBeTruthy();
        expect(bottle.container.editDataSourceStore).toBeTruthy();
    });
});
