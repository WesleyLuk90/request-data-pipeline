const React = require('react');
const { shallow } = require('enzyme');

const DataSourceListItem = require('../../../src/web/data-sources/DataSourceListItem');

describe('DataSourceListItem', () => {
    it('should display', () => {
        const component = shallow(<DataSourceListItem />);
        expect(component).toBeDefined();
        expect(component.find('.data-source-list-item')).toBeDefined();
    });
});
