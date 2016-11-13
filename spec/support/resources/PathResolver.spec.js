const path = require('path');
const PathResolver = require('../../../src/resources/PathResolver');

describe('PathResolver', () => {
    it('should get the public path', () => {
        const resolver = new PathResolver();
        expect(resolver.getPublicPath()).toBe(path.join(__dirname, '../../../public'));
    });
});
