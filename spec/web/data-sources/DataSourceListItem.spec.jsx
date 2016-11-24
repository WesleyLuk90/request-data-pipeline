const React = require('react');
const { shallow } = require('enzyme');

const RestDataSource = require('../../../src/shared/RestDataSource');
const DataSourceListItem = require('../../../src/web/data-sources/DataSourceListItem');
const Module = require('../../../src/web/Module');
const MockEvent = require('../MockEvent');

describe('DataSourceListItem', () => {
    let module;
    let dataSource;
    let component;

    beforeEach(() => {
        module = new Module({ router: jasmine.createSpyObj('router', ['go']) });
        dataSource = new RestDataSource();
        dataSource.id = 'id';
        dataSource.name = 'Name';
        dataSource.url = 'http://url';

        component = shallow(<DataSourceListItem dataSource={dataSource} module={module} />);
    });

    it('should display', () => {
        expect(component).toBeDefined();
        expect(component.find('.data-source-list-item')).toBeDefined();

        expect(component.find('.data-source-list-item__name').text()).toBe(dataSource.name);
        expect(component.find('.data-source-list-item__url').text()).toBe(dataSource.url);
    });

    it('should go to the edit page', () => {
        component.find('.data-source-list-item__edit').simulate('click', new MockEvent());

        expect(module.get('router').go).toHaveBeenCalledWith('data-sources.edit', { id: dataSource.id });
    });
});
