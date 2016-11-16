const React = require('react');
const ReactDom = require('react-dom');

const Page = require('./components/Page');

class App {
    constructor(module) {
        this.module = module;
    }

    start(element) {
        ReactDom.render(<Page module={this.module} />, element);
    }
}

App.$name = 'app';
App.$inject = ['module'];

module.exports = App;
