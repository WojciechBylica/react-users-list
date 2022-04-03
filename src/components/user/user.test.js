import React from 'react';
import { shallow } from 'enzyme';
import User from '.';
import renderer from 'react-test-renderer';
import UserWrapper from '../user-wrapper';

const user = {
  name: {
    first: 'Dominic',
    last: 'Onderwater',
  },
  location: {
    street: {
      number: 7174,
      name: 'Bontekamp',
    },
    city: 'Pieterburen',
    coordinates: {
      latitude: '44.5991',
      longitude: '-37.1930',
    },
  },
  email: 'dominic.onderwater@example.com',
  login: {
    uuid: '387b2ae0-2637-4599-b725-abb168c1241f',
  },
  registered: {
    date: '2014-12-11T04:02:22.729Z',
  },
  picture: {
    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/6.jpg',
  },
};

//jest snapshot
it('renders ok', () => {
  const tree = renderer.create(<User user={user} />);
  expect(tree).toMatchSnapshot();
});

//enzyme
it('should render h1 with name, image and list with data', () => {
  const user = shallow(<User />);
  expect(user.find(UserWrapper).length).toBe(1);
  expect(user.find('h2').length).toBe(1);
  expect(user.find('ul').length).toBe(1);
});

it('should render h1 with name, image and list with data', () => {
  const component = shallow(<User user={user} />);
  expect(component.find(UserWrapper).length).toBe(1);
  expect(component.find('h2').length).toBe(1);
  expect(component.find('ul').length).toBe(1);
});
