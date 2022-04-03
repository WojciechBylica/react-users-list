import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '.';

it('should render footer', () => {
  const tree = renderer.create(<Footer />);
  expect(tree).toMatchSnapshot();
});
