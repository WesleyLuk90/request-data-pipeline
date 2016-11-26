const React = require('react');
const { shallow } = require('enzyme');

const CreateDataSource = require('../../../src/web/data-sources/CreateDataSource');
const CreateDataSourceStore = require('../../../src/web/stores/CreateDataSourceStore');
const RestDataSource = require('../../../src/shared/RestDataSource');
const Module = require('../../../src/web/Module');
const Button = require('../../../src/web/elements/Button');

describe('CreateDataSource', () => {
    let module;
    beforeEach(() => {
        module = new Module({
            createDataSourceStore: new CreateDataSourceStore(),
            createDataSourceService: { create: jasmine.createSpy('create') },
        });
    });

    it('should use the value from the createDataSourceStore', () => {
        const source = shallow(<CreateDataSource module={module} />);

        const newDataSource = new RestDataSource();
        source.instance().componentDidMount();

        module.get('createDataSourceStore').update(newDataSource);

        expect(source.state('dataSource')).toBe(newDataSource);
    });

    it('should set the data source', () => {
        const source = shallow(<CreateDataSource module={module} />);

        const newDataSource = new RestDataSource();
        source.instance().setDataSource(newDataSource);

        expect(source.state('dataSource')).toBe(newDataSource);
    });

    it('should call create when the create button is clicked', () => {
        const source = shallow(<CreateDataSource module={module} />);

        source.find(Button).filterWhere(b => b.render().text() === 'Create').simulate('click');
        expect(module.get('createDataSourceService').create).toHaveBeenCalled();
    });
});
