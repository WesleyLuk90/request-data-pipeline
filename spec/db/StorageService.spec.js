const StorageService = require('../../src/db/StorageService');
const Database = require('../../src/db/Database');
const DbConfig = require('../../src/db/DbConfig');
const NotFoundError = require('../../src/db/NotFoundError');
const BaseRestClass = require('../../src/shared/BaseRestClass');

describe('StorageService', () => {
    class RestTestClass extends BaseRestClass {}
    it('should exist', () => {
        expect(StorageService).toBeTruthy();
    });

    it('should create with a database, table name and class', () => {
        const db = {};
        const table = 'hello';
        const storageService = new StorageService(db, table, RestTestClass);
        expect(storageService.getDatabase()).toBe(db);
        expect(storageService.getTableName()).toBe(table);
        expect(storageService.getModelClass()).toBe(RestTestClass);
    });

    describe('validate parameters', () => {
        let storageService;
        beforeEach(() => {
            const db = {};
            const table = 'hello';
            storageService = new StorageService(db, table, RestTestClass);
        });

        it('should throw an error if invalid create/update/delete parameters are provided', () => {
            expect(() => storageService.create({})).toThrowError(/Expected an instance of 'RestTestClass'/);
            expect(() => storageService.update({})).toThrowError(/Expected an instance of 'RestTestClass'/);
            expect(() => storageService.delete({})).toThrowError(/Expected an instance of 'RestTestClass'/);
        });

        it('should throw an error if create has an id', () => {
            const testClass = new RestTestClass();
            testClass.id = '10';
            expect(() => storageService.create(testClass)).toThrowError(/Expected instance to not have an id/);
        });

        it('should throw an error if update/delete does not have an id', () => {
            const testClass = new RestTestClass();
            expect(() => storageService.update(testClass)).toThrowError(/Expected instance to have an id/);
            expect(() => storageService.delete(testClass)).toThrowError(/Expected instance to have an id/);
        });
    });

    describe('with test database', () => {
        let storageService;
        let database;
        const tableName = 'storage_service_test';

        function withCollection() {
            return database.get()
                .then(db => db.collection(tableName));
        }

        function cleanObjectId(data) {
            return JSON.parse(JSON.stringify(data));
        }

        function assertDatabaseInstance(id, data) {
            return withCollection()
                .then(db => db.findOne({ _id: storageService.wrapId(id) }))
                .then((result) => {
                    expect(cleanObjectId(result)).toEqual(data);
                });
        }

        beforeEach((done) => {
            const config = new DbConfig();
            config.setUrl('mongodb://localhost:51001/test');
            database = new Database(config);
            storageService = new StorageService(database, tableName, RestTestClass);
            withCollection()
                .then(db => db.deleteMany({}))
                .catch(fail)
                .then(done);
        });

        afterEach((done) => {
            withCollection()
                .then(db => db.deleteMany({}))
                .catch(fail)
                .then(done);
        });

        it('should create instances', (done) => {
            const myClass = new RestTestClass();
            myClass.value = 10;
            storageService.create(myClass)
                .then((instance) => {
                    expect(instance).toBe(myClass);
                    expect(instance.id).toBeTruthy();
                    expect(typeof instance.id).toBe('string');
                    expect(instance.id.length).toBe(24);
                    return assertDatabaseInstance(instance.id, { _id: instance.id, value: 10 });
                })
                .catch(fail)
                .then(done);
        });

        it('should update instances', (done) => {
            storageService.create(new RestTestClass())
                .then((instance) => {
                    const modifiedInstance = instance;
                    modifiedInstance.value = 20;
                    return storageService.update(modifiedInstance)
                        .then((updatedInstance) => {
                            expect(updatedInstance).toBe(modifiedInstance);
                            return assertDatabaseInstance(updatedInstance.id, {
                                _id: updatedInstance.id,
                                value: 20,
                            });
                        });
                })
                .catch(fail)
                .then(done);
        });

        it('should get instance', (done) => {
            storageService.create(new RestTestClass())
                .then(instance =>
                    storageService.get(instance.id)
                    .then((foundInstance) => {
                        expect(foundInstance).toEqual(instance);
                        expect(typeof foundInstance.id).toBe('string');
                    }))
                .catch(fail)
                .then(done);
        });

        it('should throw an error if it cant get an instance', (done) => {
            storageService.get('aaaaaaaaaaaaaaaaaaaaaaaa')
                .then(fail)
                .catch((e) => {
                    expect(e.message).toBe('Failed to find instance with id \'aaaaaaaaaaaaaaaaaaaaaaaa\'');
                    expect(e instanceof NotFoundError).toBe(true);
                    expect(e instanceof Error).toBe(true);
                }).then(done);
        });

        it('should delete data', (done) => {
            storageService.create(new RestTestClass())
                .then(instance => storageService.delete(instance)
                    .then(() => storageService.get(instance.id))
                    .then(fail)
                    .catch(error => expect(error instanceof NotFoundError).toBe(true)))
                .catch(fail)
                .then(done);
        });
    });
});
