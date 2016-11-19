const RestUtils = require('../../src/shared/RestUtils');
const BaseRestClass = require('../../src/shared/BaseRestClass');

describe('RestUtils', () => {
    it('should exist', () => {
        expect(RestUtils).toBeTruthy();
    });

    it('should load rest data', () => {
        const data = {
            value: 'some value',
            camel_case: 10,
            my_object: {
                obj: 'some obj',
            },
        };

        class RestClass extends BaseRestClass {}
        const restClass = new RestClass();

        RestUtils.load(data, restClass);

        expect(restClass.value).toBe('some value');
        expect(restClass.camelCase).toBe(10);
        expect(restClass.myObject).toBe(data.my_object);
    });

    it('should throw an error if invalid data is provided', () => {
        expect(() => RestUtils.load(null)).toThrowError(/Data must be an object/);
    });

    it('should throw an error if invalid class is provided', () => {
        class OtherClass {}
        expect(() => RestUtils.load({}, new OtherClass())).toThrowError(/Class must extend BaseRestClass/);
    });

    it('should throw an error if it tries to overwrite a prototype property', () => {
        class SomeClass extends BaseRestClass { myMethod() {} }
        expect(() => RestUtils.load({ my_method: 'hi' }, new SomeClass())).toThrowError(/Can not reassign value for key 'myMethod'/);
    });
});
