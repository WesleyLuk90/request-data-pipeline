const DataSourceRoutes = require('../../../src/server/routes/DataSourceRoutes');
const BaseRoute = require('../../../src/server/routes/BaseRoute');

describe('DataSourceRoutes', () => {
    it('should exist', () => {
        expect(DataSourceRoutes).toBeTruthy();
    });

    it('should extend BaseRoute', () => {
        expect(DataSourceRoutes.prototype instanceof BaseRoute).toBe(true);
    });
});
