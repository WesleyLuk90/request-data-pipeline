const _ = require('lodash');

const MiddlewareProvider = require('../../src/server/MiddlewareProvider');
const AbstractMiddleware = require('../../src/server/middleware/AbstractMiddleware');
const Bottle = require('../../src/Bottle');

describe('MiddlewareProvider', () => {
    class MockMiddleware extends AbstractMiddleware {

    }
    const mockMiddleware = new MockMiddleware();
    it('should be created with middleware', () => {
        const provider = new MiddlewareProvider.MiddlewareProvider([mockMiddleware]);
        expect(provider.getMiddleware()).toEqual([mockMiddleware]);
    });

    it('should include middleware', () => {
        const container = Bottle.container;

        const provider = container.middlewareProvider;
        const fluentMiddleware = _(provider.getMiddleware());

        expect(fluentMiddleware.includes(container.staticFilesMiddleware)).toBe(true);
    });
});
