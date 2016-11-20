const RestServiceFactory = require('../../../src/web/services/RestServiceFactory');
const RestService = require('../../../src/web/services/RestService');
const RestDataSource = require('../../../src/shared/RestDataSource');

describe('RestServiceFactory', () => {
    let factory;
    beforeEach(() => {
        factory = new RestServiceFactory();
    });
    it('should exist', () => {
        expect(RestServiceFactory).toBeTruthy();
    });

    it('should throw an error if the class is a BaseRestClass', () => {
        expect(() => factory.create(null)).toThrowError(/Create requires instance of BaseRestClass/);
        expect(() => factory.create({})).toThrowError(/Create requires instance of BaseRestClass/);
    });

    it('should create a RestService', () => {
        const restService = factory.create(RestDataSource);
        expect(restService instanceof RestService).toBe(true);
        expect(restService.getBaseEndpoint()).toBe('/api/data-source');
        expect(restService.getClass()).toBe(RestDataSource);
    });
});
