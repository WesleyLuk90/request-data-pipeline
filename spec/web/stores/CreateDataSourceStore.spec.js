const CreateDataSourceStore = require('../../../src/web/stores/CreateDataSourceStore');
const RestDataSource = require('../../../src/shared/RestDataSource');

describe('CreateDataSourceStore', () => {
    it('should exist', () => {
        expect(CreateDataSourceStore).toBeTruthy();
    });

    it('should default to an empty data source', () => {
        const store = new CreateDataSourceStore();
        expect(store.getDataSource() instanceof RestDataSource).toBe(true);
    });

    it('should stream new values', () => {
        const spy = jasmine.createSpy('streamSpy');
        const store = new CreateDataSourceStore();
        store.getStream().subscribe(spy);
        const newDataSource = new RestDataSource();
        store.update(newDataSource);
        expect(spy).toHaveBeenCalledWith(newDataSource);
    });
});
