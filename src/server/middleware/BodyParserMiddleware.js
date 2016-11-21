const AbstractMiddleware = require('./AbstractMiddleware');
const bodyParser = require('body-parser');

class BodyParserMiddleware extends AbstractMiddleware {
    load(app) {
        app.use(bodyParser.json());
    }
}

BodyParserMiddleware.$name = 'bodyParserMiddleware';

module.exports = BodyParserMiddleware;
