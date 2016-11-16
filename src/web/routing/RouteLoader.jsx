const React = require('react');

const DataSources = require('../components/DataSources');

class RouteLoader {
    constructor(routeList, module) {
        this.routeList = routeList;
        this.module = module;
    }

    load() {
        this.routeList.register('data-sources', {
            view: (<DataSources module={this.module} />),
        });
    }
}

RouteLoader.$name = 'routeLoader';
RouteLoader.$inject = ['routeList', 'module'];
module.exports = RouteLoader;
