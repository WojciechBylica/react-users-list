import React from 'react';
import renderer from 'react-test-renderer';
import Map from '.';

describe('it renders ok', () => {
  it('should render a container with map', () => {
    const tree = renderer.create(
      <Map
        user={{
          user: { name: { first: 'John', last: 'Doe' } },
          location: { coordinates: { latitude: '40', longitude: '50' } },
        }}
      />
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render an error message', () => {
    const tree = renderer.create(<Map />);
    expect(tree).toMatchSnapshot();
  });
});
