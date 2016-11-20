const NotFoundError = require('../../src/db/NotFoundError');

describe('NotFoundError', () => {
    it('should exist', () => {
        expect(NotFoundError).toBeTruthy();
    });

    it('should be an error', () => {
        expect(new NotFoundError() instanceof Error).toBe(true);
        expect(new NotFoundError('my message').message).toBe('my message');
        expect(new NotFoundError().stack).toBeTruthy();
    });
});
