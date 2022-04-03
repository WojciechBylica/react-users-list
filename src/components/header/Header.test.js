import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '.';

it('should render ok', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  expect(tree).toMatchSnapshot();
});
