import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '.';

it('should render text "loading..."', () => {
  const tree = renderer.create(<Loader />);
  expect(tree).toMatchSnapshot();
});
