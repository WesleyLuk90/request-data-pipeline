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
        const service = new RestService(RestDataSource);
        expect(service.getClass()).toBe(RestDataSource);
    });

    describe('with RestClass', () => {
        let service;
        let mock;
        beforeEach(() => {
            mock = mocker(superagent);
            service = new RestService(RestDataSource);
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

            createCall
                .then((dataSource) => {
                    expect(dataSource instanceof RestDataSource).toBe(true);
                    expect(dataSource).toEqual(new RestDataSource());
                })
                .catch(fail)
                .then(done);
        });
        it('should listing with list', (done) => {
            mock.post('/api/data-source/list', (req) => {
                expect(req.url).toBe('/api/data-source/list');
                return {
                    body: {
                        data_sources: [
                            new RestDataSource().toJsonObject(),
                            new RestDataSource().toJsonObject(),
                        ],
                    },
                };
            });

            const createCall = service.list();

            createCall
                .then((dataSource) => {
                    expect(Array.isArray(dataSource)).toBe(true);
                    expect(dataSource[0] instanceof RestDataSource).toBe(true);
                    expect(dataSource[1] instanceof RestDataSource).toBe(true);
                })
                .catch(fail)
                .then(done);
        });
    });
});
