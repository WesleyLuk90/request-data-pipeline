const React = require('react');
const { shallow } = require('enzyme');

const Button = require('../../../src/web/elements/Button');

describe('Button', () => {
    it('should display', () => {
        const button = shallow(<Button type="create" />);
        expect(button.find('.btn.btn-success')).toBePresent();
    });

    it('should display the contents', () => {
        const button = shallow(<Button type="create">Some Text</Button>);
        expect(button.text()).toBe('Some Text');
    });

    it('should call onClick when clicked', () => {
        const onClick = jasmine.createSpy('onClick');
        const button = shallow(<Button onClick={onClick} />);
        button.simulate('click');

        expect(onClick).toHaveBeenCalled();
    });
});
