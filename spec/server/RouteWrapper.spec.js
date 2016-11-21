const RouteWrapper = require('../../src/server/RouteWrapper');
const Response = require('../../src/server/Response');

describe('RouteWrapper', () => {
    it('should exist', () => {
        expect(RouteWrapper).toBeTruthy();
    });

    it('should throw an error if it does not get a response object', (done) => {
        const app = { get: jasmine.createSpy('get') };
        const routeWrapper = new RouteWrapper(app);

        routeWrapper.get('/some-route', () => ({ invalid: 'response' }));

        expect(app.get).toHaveBeenCalled();

        const route = app.get.calls.first().args[1];
        expect(route).toBeDefined();
        route(null, {})
            .then(fail)
            .catch(e => expect(e.message).toMatch(/Route must return a Response or a Promised Response/)).catch(fail)
            .then(done);
    });

    it('should allow promised responses', (done) => {
        const app = { get: jasmine.createSpy('get') };
        const routeWrapper = new RouteWrapper(app);

        routeWrapper.get('/some-route', () => Promise.resolve(new Response()));

        expect(app.get).toHaveBeenCalled();

        const route = app.get.calls.first().args[1];
        expect(route).toBeDefined();
        const res = { json: jasmine.createSpy('jsonResponse') };
        route(null, res)
            .then(() => {
                expect(res.json).toHaveBeenCalled();
                expect(res.json.calls.first().args[0]).toEqual({});
            })
            .catch(fail)
            .then(done);
    });

    it('should allow plain responses', (done) => {
        const app = { get: jasmine.createSpy('get') };
        const routeWrapper = new RouteWrapper(app);

        routeWrapper.get('/some-route', () => new Response());

        expect(app.get).toHaveBeenCalled();

        const route = app.get.calls.first().args[1];
        expect(route).toBeDefined();
        const res = { json: jasmine.createSpy('jsonResponse') };
        route(null, res)
            .then(() => {
                expect(res.json).toHaveBeenCalled();
                expect(res.json.calls.first().args[0]).toEqual({});
            })
            .catch(fail)
            .then(done);
    });

    it('should send an error response if an error occurs processing the request', (done) => {
        const app = { get: jasmine.createSpy('get') };
        const routeWrapper = new RouteWrapper(app);

        const processingError = new Error('Processing Error');

        routeWrapper.get('/some-route', () => {
            throw processingError;
        });

        expect(app.get).toHaveBeenCalled();

        const route = app.get.calls.first().args[1];
        expect(route).toBeDefined();
        const res = { json: jasmine.createSpy('jsonResponse') };
        route(null, res)
            .then(() => {
                expect(res.json).toHaveBeenCalled();
                expect(res.json.calls.first().args[0])
                    .toEqual(Response.error(processingError).toJson());
            })
            .catch(fail)
            .then(done);
    });
});
