import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Nav from '.';

it('should render "Home" link', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
  expect(tree).toMatchSnapshot();
});
