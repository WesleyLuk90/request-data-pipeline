const Check = require('../../src/util/Check');

describe('Check', () => {
    it('should exist', () => {
        expect(Check).toBeTruthy();
    });

    it('should check for nulls', () => {
        expect(() => Check.notNull(null)).toThrowError('Expected not null');
        expect(() => Check.notNull(undefined)).toThrowError('Expected not null');
        expect(() => Check.notNull()).toThrowError('Expected not null');
        expect(Check.notNull('')).toEqual('');
        expect(Check.notNull({})).toEqual({});
    });

    it('should check for instance of', () => {
        class SomeClass {}
        expect(() => Check.instanceOf(null, null)).toThrowError('Expected not null');
        expect(() => Check.instanceOf({}, null)).toThrowError('Expected not null');
        expect(() => Check.instanceOf(null, SomeClass)).toThrowError('Expected not null');
        expect(() => Check.instanceOf({}, SomeClass)).toThrowError(/Expected an instance of SomeClass/);

        const instance = new SomeClass();
        expect(Check.instanceOf(instance, SomeClass)).toBe(instance);
    });

    it('should check for subclass of', () => {
        class SomeClass {}
        class SubSomeClass extends SomeClass {}
        expect(() => Check.subClassOf(null, null)).toThrowError('Expected not null');
        expect(() => Check.subClassOf({}, null)).toThrowError('Expected not null');
        expect(() => Check.subClassOf(null, SomeClass)).toThrowError('Expected not null');
        expect(() => Check.subClassOf({}, SomeClass)).toThrowError(/Expected a subclass of SomeClass/);
        expect(() => Check.subClassOf(SomeClass, SubSomeClass)).toThrowError(/Expected a subclass of SubSomeClass/);

        expect(Check.subClassOf(SomeClass, SomeClass)).toBe(SomeClass);
        expect(Check.subClassOf(SubSomeClass, SomeClass)).toBe(SubSomeClass);
    });

    it('should check for arrays', () => {
        expect(() => Check.isArray(null)).toThrowError('Expected an array');
        expect(() => Check.isArray({})).toThrowError('Expected an array');
        expect(() => Check.isArray('array')).toThrowError('Expected an array');
        expect(Check.isArray([])).toEqual([]);
    });
});
