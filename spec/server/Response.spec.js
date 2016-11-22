const Response = require('../../src/server/Response');
const BaseRestClass = require('../../src/shared/BaseRestClass');

describe('Response', () => {
    it('should exist', () => {
        expect(Response).toBeTruthy();
    });

    it('should have an empty default', () => {
        expect(new Response().toJson()).toEqual({});
    });

    it('should have a success response', () => {
        expect(Response.success().toJson()).toEqual({ success: true });
        expect(Response.success({ key: 'value' }).toJson()).toEqual({ success: true, key: 'value' });
    });

    it('should have a success with model response', () => {
        class RestSomeClass extends BaseRestClass {}
        expect(Response.successWithModel(new RestSomeClass()).toJson())
            .toEqual({ success: true, some_class: {} });
    });

    it('should have a success with model response', () => {
        class RestSomeClass extends BaseRestClass {}
        expect(Response.successWithModels([new RestSomeClass(), new RestSomeClass()], RestSomeClass).toJson())
            .toEqual({ success: true, some_classes: [{}, {}] });
    });

    it('should have a err response', () => {
        const error = new Error();
        expect(Response.error(error).toJson()).toEqual({
            error: true,
        });
    });
});
