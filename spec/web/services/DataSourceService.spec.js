const DataSourceService = require('../../../src/web/services/DataSourceService');
const RestDataSource = require('../../../src/shared/RestDataSource');

describe('DataSourceService', () => {
    let restService;
    let restServiceFactory;

    beforeEach(() => {
        restService = {
            create: jasmine.createSpy('create').and.returnValue(Promise.resolve('create value')),
            list: jasmine.createSpy('list').and.returnValue(Promise.resolve('list value')),
        };
        restServiceFactory = {
            create: jasmine.createSpy('RestServiceFactory.create').and.returnValue(restService),
        };
    });
    it('should exist', () => {
        expect(DataSourceService).toBeTruthy();
    });

    it('should create a rest service', () => {
        const dataSourceService = new DataSourceService(restServiceFactory);
        expect(dataSourceService).toBeTruthy();
        expect(restServiceFactory.create).toHaveBeenCalledWith(RestDataSource);
    });

    it('should call create', (done) => {
        const dataSourceService = new DataSourceService(restServiceFactory);
        const dataSource = new RestDataSource();
        const promise = dataSourceService.create(dataSource);
        expect(restService.create).toHaveBeenCalledWith(dataSource);

        promise
            .then(res => expect(res).toBe('create value'))
            .catch(fail)
            .then(done);
    });

    it('should call list', (done) => {
        const dataSourceService = new DataSourceService(restServiceFactory);
        const promise = dataSourceService.list();
        expect(restService.list).toHaveBeenCalled();

        promise
            .then(res => expect(res).toBe('list value'))
            .catch(fail)
            .then(done);
    });
});
