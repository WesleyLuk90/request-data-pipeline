require('../../sass/main.scss');

const bottle = require('./Bottle');

function main() {
    bottle.container.app.start(document.querySelector('.app-container'));
}

function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(main);
