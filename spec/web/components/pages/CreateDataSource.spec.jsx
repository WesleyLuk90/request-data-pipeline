const React = require('react');
const { shallow } = require('enzyme');

const CreateDataSource = require('../../../../src/web/components/pages/CreateDataSource');
const CreateDataSourceStore = require('../../../../src/web/stores/CreateDataSourceStore');
const RestDataSource = require('../../../../src/shared/RestDataSource');
const Module = require('../../../../src/web/Module');

describe('CreateDataSource', () => {
    it('should use the value from the createDataSourceStore', () => {
        const module = new Module({ createDataSourceStore: new CreateDataSourceStore() });
        const source = shallow(<CreateDataSource module={module} />);

        const newDataSource = new RestDataSource();
        source.instance().componentDidMount();

        module.get('createDataSourceStore').update(newDataSource);

        expect(source.state('dataSource')).toBe(newDataSource);
    });

    it('should set the data source', () => {
        const module = new Module({ createDataSourceStore: new CreateDataSourceStore() });
        const source = shallow(<CreateDataSource module={module} />);

        const newDataSource = new RestDataSource();
        source.instance().setDataSource(newDataSource);

        expect(source.state('dataSource')).toBe(newDataSource);
    });
});
