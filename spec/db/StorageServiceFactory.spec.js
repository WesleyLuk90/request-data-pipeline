const StorageServiceFactory = require('../../src/db/StorageServiceFactory');
const StorageService = require('../../src/db/StorageService');
const BaseRestClass = require('../../src/shared/BaseRestClass');

describe('StorageServiceFactory', () => {
    it('should exist', () => {
        expect(StorageServiceFactory).toBeTruthy();
    });

    it('should create storage services', () => {
        class RestTestClass extends BaseRestClass {}
        const database = {};
        const factory = new StorageServiceFactory(database);
        const storageService = factory.create(RestTestClass);
        expect(storageService instanceof StorageService).toBe(true);
        expect(storageService.getDatabase()).toBe(database);
        expect(storageService.getTableName()).toBe('test_class');
        expect(storageService.getModelClass()).toBe(RestTestClass);
    });

    it('should throw an error if the base class is not a BaseRestClass', () => {
        class NonRestClass {}
        const factory = new StorageServiceFactory();
        expect(() => factory.create(NonRestClass)).toThrowError(/Expected class 'NonRestClass' to be a subclass of BaseRestClass/);
    });
});
