const express = require('express');

const AbstractMiddleware = require('./AbstractMiddleware');

class StaticFilesMiddleware extends AbstractMiddleware {
    constructor(pathResolver) {
        super();
        this.pathResolver = pathResolver;
    }
    load(app) {
        app.use(express.static(this.pathResolver.getPublicPath()));
    }
}

StaticFilesMiddleware.$name = 'staticFilesMiddleware';
StaticFilesMiddleware.$inject = ['pathResolver'];

module.exports = StaticFilesMiddleware;
