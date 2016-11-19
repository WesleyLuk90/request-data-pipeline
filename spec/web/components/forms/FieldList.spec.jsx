const React = require('react');
const { shallow } = require('enzyme');

const FieldList = require('../../../../src/web/components/forms/FieldList');

describe('FieldList', () => {
    it('should display the field list', () => {
        const list = shallow(<FieldList />);
        expect(list.find('.field-list')).toBePresent();
    });

    it('should display the contents', () => {
        const list = shallow(<FieldList>Some Content</FieldList>);
        expect(list.text()).toBe('Some Content');
    });
});
