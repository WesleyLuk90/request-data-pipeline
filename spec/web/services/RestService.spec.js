/* eslint-disable no-underscore-dangle */

const superagent = require('superagent');
const mocker = require('superagent-mocker');

const RestService = require('../../../src/web/services/RestService');
const RestDataSource = require('../../../src/shared/RestDataSource');

describe('RestService', () => {
    it('should exist', () => {
        expect(RestService).toBeTruthy();
    });

    it('should be creatable with an endpoint and class', () => {
        const service = new RestService('/api/some-endpoint', RestDataSource);
        expect(service.getBaseEndpoint()).toBe('/api/some-endpoint');
        expect(service.getClass()).toBe(RestDataSource);
    });

    describe('with RestClass', () => {
        let service;
        let mock;
        beforeEach(() => {
            mock = mocker(superagent);
            service = new RestService('/api/data-source', RestDataSource);
            mock.clearRoutes();
        });
        it('should allow creating with get', (done) => {
            mock.post('/api/data-source/create', (req) => {
                expect(req.url).toBe('/api/data-source/create');
                expect(req.body).toEqual(new RestDataSource().toJsonObject());
                return {
                    body: {
                        data_source: new RestDataSource().toJsonObject(),
                    },
                };
            });

            const createCall = service.create(new RestDataSource());

            createCall.then((dataSource) => {
                expect(dataSource instanceof RestDataSource).toBe(true);
                expect(dataSource).toEqual(new RestDataSource());
            }).then(done);
        });
    });
});
