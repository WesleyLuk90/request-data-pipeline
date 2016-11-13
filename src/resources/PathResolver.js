const path = require('path');

class PathResolver {
    getPublicPath() {
        return path.join(__dirname, '../../public');
    }
}

PathResolver.$name = 'pathResolver';

module.exports = PathResolver;
