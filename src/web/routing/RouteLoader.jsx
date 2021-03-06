const React = require('react');

const DataSources = require('../components/DataSources');
const CreateDataSource = require('../data-sources/CreateDataSource');
const DataSourcesEditPage = require('../data-sources/DataSourcesEditPage');

class RouteLoader {
    constructor(routeList, module) {
        this.routeList = routeList;
        this.module = module;
    }

    load() {
        this.routeList.register('data-sources', {
            view: (<DataSources module={this.module} />),
        });
        this.routeList.register('data-sources.create', {
            view: (<CreateDataSource module={this.module} />),
        });
        this.routeList.register('data-sources.edit', {
            view: (<DataSourcesEditPage module={this.module} />),
        });
    }
}

RouteLoader.$name = 'routeLoader';
RouteLoader.$inject = ['routeList', 'module'];
module.exports = RouteLoader;
