const React = require('react');
const {
    shallow
} = require('enzyme');

const CreateDataSource = require('../../../../src/web/components/pages/CreateDataSource');
const CreateDataSourceStore = require('../../../../src/web/stores/CreateDataSourceStore');
const RestDataSource = require('../../../../src/shared/RestDataSource');
const DataSourceService = require('../../../../src/web/services/DataSourceService');
const RestServiceFactory = require('../../../../src/web/services/RestServiceFactory');
const Module = require('../../../../src/web/Module');
const Button = require('../../../../src/web/elements/Button');

describe('CreateDataSource', () => {
    let module;
    beforeEach(() => {
        module = new Module({
            createDataSourceStore: new CreateDataSourceStore(),
            dataSourceService: new DataSourceService(new RestServiceFactory()),
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
        const dataSourceService = module.get('dataSourceService');
        const createSpy = spyOn(dataSourceService, 'create');
        const source = shallow(<CreateDataSource module={module} />);

        source.find(Button).filterWhere(b => b.render().text() === 'Create').simulate('click');
        expect(createSpy).toHaveBeenCalledWith(module.get('createDataSourceStore').getDataSource());
    });
});
