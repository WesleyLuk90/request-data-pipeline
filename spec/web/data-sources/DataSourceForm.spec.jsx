const React = require('react');
const { shallow } = require('enzyme');

const DataSourceForm = require('../../../src/web/data-sources/DataSourceForm');
const RestDataSource = require('../../../src/shared/RestDataSource');

describe('DataSourceForm', () => {
    let dataSource;
    beforeEach(() => {
        dataSource = new RestDataSource();
    });
    it('should display', () => {
        const component = shallow(<DataSourceForm dataSource={dataSource} />);
        expect(component).toBeDefined();
    });
});
