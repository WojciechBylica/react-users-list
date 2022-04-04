import React from 'react';
import { HashRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '.';

it('should render ok', () => {
  const tree = renderer.create(
    <HashRouter>
      <Header />
    </HashRouter>
  );
  expect(tree).toMatchSnapshot();
});
