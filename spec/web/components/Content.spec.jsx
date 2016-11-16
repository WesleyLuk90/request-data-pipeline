const React = require('react');
const { shallow } = require('enzyme');

const Content = require('../../../src/web/components/Content');
const Module = require('../../../src/web/Module');

describe('<Content />', () => {
    it('should contain a content container', () => {
        const page = shallow(<Content module={new Module({})} />);
        expect(page.find('.content')).toBePresent();
    });
});
