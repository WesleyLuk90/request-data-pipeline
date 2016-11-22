const DataSourceListStore = require('../../../src/web/data-sources/DataSourceListStore');
const RestDataSource = require('../../../src/shared/RestDataSource');

describe('DataSourceListStore', () => {
    it('should exist', () => {
        expect(DataSourceListStore).toBeTruthy();
    });

    it('should default to no data sources', () => {
        const store = new DataSourceListStore();
        expect(store.get()).toEqual([]);
    });

    it('should update the data sources', () => {
        const store = new DataSourceListStore();
        const dataSources = [new RestDataSource()];
        store.update(dataSources);
        expect(store.get()).toBe(dataSources);
    });

    it('should provide a data source stream', () => {
        const store = new DataSourceListStore();
        const subscription = jasmine.createSpy('subscription');
        store.getStream().subscribe(subscription);
        const dataSources = [new RestDataSource()];
        store.update(dataSources);

        expect(subscription).toHaveBeenCalledWith(dataSources);
    });
});
