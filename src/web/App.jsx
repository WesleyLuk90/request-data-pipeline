const React = require('react');
const ReactDom = require('react-dom');

const Page = require('./components/Page');

class App {
    constructor(module, bootstrapper) {
        this.module = module;
        this.bootstrapper = bootstrapper;
    }

    start(element) {
        this.bootstrapper.boot();
        ReactDom.render(<Page module={this.module} />, element);
    }
}

App.$name = 'app';
App.$inject = ['module', 'bootstrapper'];

module.exports = App;
