const React = require('react');
const ReactDom = require('react-dom');

const Page = require('./components/Page');

class App {
    start(module, element) {
        ReactDom.render(<Page module={module} />, element);
    }
}

App.$name = 'app';

module.exports = App;
