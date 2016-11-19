const RestDataSource = require('../../src/shared/RestDataSource');

describe('RestDataSource', () => {
    it('should exist', () => {
        expect(RestDataSource).toBeTruthy();
    });

    it('should have defaults', () => {
        const dataSource = new RestDataSource();
        expect(dataSource.getUrl()).toBe('');
    });
});
