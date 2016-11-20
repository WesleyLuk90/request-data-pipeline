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
});
