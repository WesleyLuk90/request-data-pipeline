class AbstractMiddleware {
    load(app) {
        throw new Error("Not implemented");
    }
}

module.exports = AbstractMiddleware;
