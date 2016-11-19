const React = require('react');
const { shallow } = require('enzyme');

const TextInput = require('../../../../src/web/components/forms/TextInput');

describe('TextInput', () => {
    it('should display', () => {
        const component = shallow(<TextInput
            label="My Text Input"
            placeholder="Some Placeholder"
        />);
        expect(component.find('label').text()).toBe('My Text Input');
        expect(component.find('label').hasClass('control-label')).toBe(true);
        expect(component.find('input').prop('placeholder')).toBe('Some Placeholder');
    });

    it('should call onChange', () => {
        const onChange = jasmine.createSpy('onChange');
        const component = shallow(<TextInput onChange={onChange} />);
        component.find('input').simulate('change');

        expect(onChange).toHaveBeenCalled();
    });

    it('should pass value in', () => {
        const component = shallow(<TextInput value="hello" />);
        expect(component.find('input').prop('value')).toBe('hello');
    });
});
