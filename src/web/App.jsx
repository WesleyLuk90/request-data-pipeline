const React = require('react');
const ReactDom = require('react-dom');

const Page = require('./components/Page');

class App {
    start(container) {
        ReactDom.render(<Page />, container);
    }
}

App.$name = 'app';

module.exports = App;
