const React = require('react');
const { shallow } = require('enzyme');

const DataSourcesEditPage = require('../../../src/web/data-sources/DataSourcesEditPage');
const EditDataSourceStore = require('../../../src/web/data-sources/EditDataSourceStore');
const Button = require('../../../src/web/elements/Button');
const Module = require('../../../src/web/Module');
const MockEvent = require('../MockEvent');

describe('DataSourcesEditPage', () => {
    let module;

    beforeEach(() => {
        module = new Module({
            editDataSourceStore: new EditDataSourceStore(),
            editDataSourceService: jasmine.createSpyObj('editDataSourceService', ['load', 'update']),
            router: jasmine.createSpyObj('router', ['getParameter']),
        });
    });

    it('should display', () => {
        const component = shallow(<DataSourcesEditPage module={module} />);
        expect(component).toBeDefined();
    });

    it('should update when save is clicked', () => {
        const component = shallow(<DataSourcesEditPage module={module} />);
        expect(component).toBeDefined();

        component.find(Button).filterWhere(b => b.render().text() === 'Save').simulate('click', new MockEvent());
        expect(module.get('editDataSourceService').update).toHaveBeenCalled();
    });

    it('should load data source from the route', () => {
        const id = 'id123';
        module.get('router').getParameter.and.returnValue(id);

        const component = shallow(<DataSourcesEditPage module={module} />);
        component.instance().componentDidMount();

        expect(module.get('editDataSourceService').load).toHaveBeenCalledWith(id);
    });
});
