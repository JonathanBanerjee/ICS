// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


test('Move to login page', () => {
    const mockLogin = jest.fn();
    const wrapper = shallow(<Component startLogin={Login}/>);
    wrapper.find('button').at(0).simulate('click');
    expect({Login}).toHaveBeenCalled();
});
