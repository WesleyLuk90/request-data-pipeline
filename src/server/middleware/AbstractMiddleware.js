/* eslint-disable no-unused-vars */

class AbstractMiddleware {
    load(app) {
        throw new Error('Not implemented');
    }
}

module.exports = AbstractMiddleware;
