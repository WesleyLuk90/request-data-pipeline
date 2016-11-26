const CrudRoute = require('../../../src/server/routes/CrudRoute');
const BaseRestClass = require('../../../src/shared/BaseRestClass');
const StorageServiceFactory = require('../../../src/db/StorageServiceFactory');

describe('CrudRoute', () => {
    class RestMyClass extends BaseRestClass {}
    it('should exist', () => {
        expect(CrudRoute).toBeTruthy();
    });

    it('should throw an error if arguments are missing', () => {
        expect(() => new CrudRoute()).toThrow();
        expect(() => new CrudRoute({})).toThrow();
    });

    it('should register routes', () => {
        const factory = new StorageServiceFactory({});
        const route = new CrudRoute(RestMyClass, factory);

        const routeWrapper = { post: jasmine.createSpy('routeWrapper') };

        route.load(routeWrapper);

        const definedRoutes = routeWrapper.post.calls.all().map(call => call.args[0]);
        const expectedRoutes = [
            '/api/my-class/create',
            '/api/my-class/update',
            '/api/my-class/delete',
            '/api/my-class/list',
            '/api/my-class/get',
        ];
        expect(definedRoutes).toEqualInAnyOrder(expectedRoutes);
    });

    describe('with storage', () => {
        let storage;
        let route;
        beforeEach(() => {
            storage = {
                create: jasmine.createSpy('create').and.returnValue(Promise.resolve()),
                update: jasmine.createSpy('update').and.returnValue(Promise.resolve()),
                delete: jasmine.createSpy('delete').and.returnValue(Promise.resolve()),
                list: jasmine.createSpy('list').and.returnValue(Promise.resolve([new RestMyClass(), new RestMyClass()])),
                get: jasmine.createSpy('get').and.returnValue(Promise.resolve(new RestMyClass())),
            };
            const factory = new StorageServiceFactory({});
            spyOn(factory, 'create').and.returnValue(storage);
            route = new CrudRoute(RestMyClass, factory);
        });

        it('should handle create requests', (done) => {
            route.create({ body: { my_class: {} } })
                .then((res) => {
                    expect(res.toJson()).toEqual({ success: true, my_class: {} });
                })
                .catch(fail)
                .then(done);
        });

        it('should handle update requests', (done) => {
            route.update({ body: { my_class: {} } })
                .then((res) => {
                    expect(res.toJson()).toEqual({ success: true, my_class: {} });
                })
                .catch(fail)
                .then(done);
        });

        it('should handle delete requests', (done) => {
            route.delete({ body: { my_class: {} } })
                .then((res) => {
                    expect(res.toJson()).toEqual({ success: true });
                })
                .catch(fail)
                .then(done);
        });

        it('should handle list requests', (done) => {
            route.list({ body: { filters: { my: 'filters' } } })
                .then((res) => {
                    expect(res.toJson()).toEqual({ success: true, my_classes: [{}, {}] });
                    expect(storage.list).toHaveBeenCalledWith({ my: 'filters' });
                })
                .catch(fail)
                .then(done);
        });

        it('should handle get requests', (done) => {
            route.get({ body: { id: 'abc' } })
                .then((res) => {
                    expect(res.toJson()).toEqual({ success: true, my_class: {} });
                    expect(storage.get).toHaveBeenCalledWith('abc');
                })
                .catch(fail)
                .then(done);
        });
    });
});
