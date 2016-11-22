const DataSourceListLoader = require('../../../src/web/data-sources/DataSourceListLoader');
const DataSourceListStore = require('../../../src/web/data-sources/DataSourceListStore');
const RestDataSource = require('../../../src/shared/RestDataSource');

describe('DataSourceListLoader', () => {
    it('should exist', () => {
        expect(DataSourceListLoader).toBeTruthy();
    });

    it('should load data sources', (done) => {
        const values = [new RestDataSource()];
        const dataSourceService = {
            list: jasmine.createSpy().and.returnValue(Promise.resolve(values)),
        };
        const store = new DataSourceListStore();
        const loader = new DataSourceListLoader(dataSourceService, store);

        loader.load()
            .then(() => {
                expect(dataSourceService.list).toHaveBeenCalled();
                expect(store.get()).toEqual(values);
            })
            .catch(fail)
            .then(done);
    });
});
