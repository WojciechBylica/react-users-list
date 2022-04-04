import React from 'react';
import { HashRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Nav from '.';

it('should render "Home" link', () => {
  const tree = renderer.create(
    <HashRouter>
      <Nav />
    </HashRouter>
  );
  expect(tree).toMatchSnapshot();
});
