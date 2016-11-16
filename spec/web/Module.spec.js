const Module = require('../../src/web/Module');

describe('Module', () => {
    it('should get dependencies', () => {
        const container = { someDep: {} };
        const module = new Module(container);
        expect(module.get('someDep')).toBe(container.someDep);
    });

    it('should throw an error if a dependency does not exist', () => {
        const container = {};
        const module = new Module(container);
        expect(() => module.get('not-exist')).toThrowError(/Dependency not-exist does not exist/);
    });
});
