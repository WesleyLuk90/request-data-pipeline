const express = require('express');

const AbstractMiddleware = require('./AbstractMiddleware');

class StaticFilesMiddleware extends AbstractMiddleware {
    load(app) {
        app.use(express.static('public'));
    }
}

StaticFilesMiddleware.$name = 'staticFilesMiddleware';

module.exports = StaticFilesMiddleware;
