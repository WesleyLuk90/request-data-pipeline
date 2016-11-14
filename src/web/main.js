require('../../sass/main.scss');
require('bootstrap-sass/assets/stylesheets/_bootstrap.scss');
require('font-awesome/css/font-awesome.css');

const bottle = require('./Bottle');

function main() {
    bottle.container.app.start(bottle.container, document.querySelector('.app-container'));
}

function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(main);
