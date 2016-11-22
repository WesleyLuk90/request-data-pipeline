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
        definedRoutes.sort();
        const expectedRoutes = [
            '/api/my-class/create',
            '/api/my-class/update',
            '/api/my-class/delete',
        ];
        expectedRoutes.sort();
        expect(definedRoutes).toEqual(expectedRoutes);
    });

    describe('with storage', () => {
        let storage;
        let route;
        beforeEach(() => {
            storage = {
                create: jasmine.createSpy('create').and.returnValue(Promise.resolve()),
                update: jasmine.createSpy('update').and.returnValue(Promise.resolve()),
                delete: jasmine.createSpy('delete').and.returnValue(Promise.resolve()),
            };
            const factory = new StorageServiceFactory({});
            spyOn(factory, 'create').and.returnValue(storage);
            route = new CrudRoute(RestMyClass, factory);
        });

        it('should handle create requests', (done) => {
            route.create({ body: {} })
                .then((res) => {
                    expect(res.toJson()).toEqual({ success: true, my_class: {} });
                })
                .catch(fail)
                .then(done);
        });

        it('should handle update requests', (done) => {
            route.update({ body: {} })
                .then((res) => {
                    expect(res.toJson()).toEqual({ success: true, my_class: {} });
                })
                .catch(fail)
                .then(done);
        });

        it('should handle delete requests', (done) => {
            route.delete({ body: {} })
                .then((res) => {
                    expect(res.toJson()).toEqual({ success: true });
                })
                .catch(fail)
                .then(done);
        });
    });
});