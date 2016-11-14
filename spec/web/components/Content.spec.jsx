const React = require('react');
const { shallow } = require('enzyme');

const Content = require('../../../src/web/components/Content');

describe('<Content />', () => {
    it('should contain a content container', () => {
        const page = shallow(<Content module={{}} />);
        expect(page.find('.content')).toBePresent();
    });
});
