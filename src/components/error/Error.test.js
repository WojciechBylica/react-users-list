import React from 'react';
import renderer from 'react-test-renderer';
import Error from '.';
import { shallow } from 'enzyme';

//jest snapshots:
describe('it renders ok', () => {
  it('should has default text if no prop provided', () => {
    const tree = renderer.create(<Error />);
    expect(tree).toMatchSnapshot();
  });
  it('should has text "testing error" if it was provided by props', () => {
    const tree = renderer.create(<Error message="testing error" />);
    expect(tree).toMatchSnapshot();
  });
});

//enzyme:
describe('it renders ok', () => {
  it('should has default text if no prop provided', () => {
    const error = shallow(<Error />);
    const paragraph = error.find('p');
    expect(paragraph.text()).toBe(
      'an error has occurred... please check your internet connection and try again...'
    );
  });
  it('should has text "error message" if provided from props', () => {
    const error = shallow(<Error message="error message" />);
    const paragraph = error.find('p');
    expect(paragraph.text()).toBe('error message');
  });
});
