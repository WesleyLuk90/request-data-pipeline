const React = require('react');
const { shallow } = require('enzyme');

const RestDataSource = require('../../../src/shared/RestDataSource');
const DataSourceList = require('../../../src/web/data-sources/DataSourceList');
const DataSourceListItem = require('../../../src/web/data-sources/DataSourceListItem');
const DataSourceListStore = require('../../../src/web/data-sources/DataSourceListStore');
const Module = require('../../../src/web/Module');

describe('DataSourceList', () => {
    let module;

    beforeEach(() => {
        module = new Module({
            dataSourceListStore: new DataSourceListStore(),
            dataSourceListLoader: { load: jasmine.createSpy() },
        });
    });

    it('should display', () => {
        const component = shallow(<DataSourceList module={module} />);
        expect(component.find('.data-source-list')).toBeDefined();
    });

    it('should list data-sources', () => {
        const component = shallow(<DataSourceList module={module} />);
        component.instance().componentDidMount();
        module.get('dataSourceListStore').update([new RestDataSource(), new RestDataSource()]);
        expect(component.find(DataSourceListItem).length).toBe(2);
    });

    it('should load data-sources on mount', () => {
        const component = shallow(<DataSourceList module={module} />);
        component.instance().componentDidMount();
        expect(module.get('dataSourceListLoader').load).toHaveBeenCalled();
    });

    it('should dispose of subscriptions', () => {
        const component = shallow(<DataSourceList module={module} />);
        component.instance().componentDidMount();
        expect(component.instance().subscriptions.length).toBe(1);
        component.instance().componentWillUnmount();

        expect(component.instance().subscriptions).toEqual([]);
    });
});
