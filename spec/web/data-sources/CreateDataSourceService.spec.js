const CreateDataSourceService = require('../../../src/web/data-sources/CreateDataSourceService');
const CreateDataSourceStore = require('../../../src/web/stores/CreateDataSourceStore');

describe('CreateDataSourceService', () => {
    let router;
    let createDataSourceStore;
    let dataSourceService;

    beforeEach(() => {
        router = { go: jasmine.createSpy('go') };
        createDataSourceStore = new CreateDataSourceStore();
        dataSourceService = {
            create: jasmine.createSpy('create').and.returnValue(Promise.resolve('create value')),
        };
    });

    it('should exist', () => {
        expect(CreateDataSourceService).toBeTruthy();
    });

    it('should create then change state', (done) => {
        const service = new CreateDataSourceService(
            router, createDataSourceStore, dataSourceService);
        const oldValue = createDataSourceStore.get();
        service
            .create()
            .then((value) => {
                expect(value).toBe('create value');
                expect(router.go).toHaveBeenCalledWith('data-sources');
                expect(dataSourceService.create).toHaveBeenCalledWith(createDataSourceStore.get());
                expect(createDataSourceStore.get()).not.toBe(oldValue);
            })
            .catch(fail)
            .then(done);
    });
});
