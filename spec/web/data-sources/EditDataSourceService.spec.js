const EditDataSourceService = require('../../../src/web/data-sources/EditDataSourceService');
const EditDataSourceStore = require('../../../src/web/data-sources/EditDataSourceStore');

describe('EditDataSourceService', () => {
    let service;
    let store;
    let dataSourceService;
    let router;

    beforeEach(() => {
        store = new EditDataSourceStore();
        dataSourceService = jasmine.createSpyObj('dataSourceService', ['get', 'update']);
        router = jasmine.createSpyObj('router', ['go']);
        service = new EditDataSourceService(store, dataSourceService, router);
    });
    it('should exist', () => {
        expect(EditDataSourceService).toBeTruthy();
    });

    it('should load the data source from the service and put it into the store', (done) => {
        const id = 'abc';
        dataSourceService.get.and.returnValue(Promise.resolve('some data source'));
        service.load(id)
            .then(() => {
                expect(dataSourceService.get).toHaveBeenCalledWith(id);
                expect(store.get()).toBe('some data source');
            })
            .catch(fail)
            .then(done);
    });

    it('should send the data source to the service when updated', (done) => {
        dataSourceService.update.and.returnValue(Promise.resolve());
        store.update('some value');

        service.update()
            .then(() => {
                expect(dataSourceService.update).toHaveBeenCalledWith('some value');
                expect(router.go).toHaveBeenCalledWith('data-sources');
            })
            .catch(fail)
            .then(done);
    });
});
