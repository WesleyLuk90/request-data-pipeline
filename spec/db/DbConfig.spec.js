const DbConfig = require('../../src/db/DbConfig');

describe('DbConfig', () => {
    it('should exist', () => {
        expect(DbConfig).toBeTruthy();
    });

    it('should provide configuration', () => {
        const config = new DbConfig();
        expect(config.getUrl()).toBe('mongodb://localhost:51001/request_config');
    });

    it('should set url', () => {
        const config = new DbConfig();
        config.setUrl('test');
        expect(config.getUrl()).toBe('test');
    });
});
