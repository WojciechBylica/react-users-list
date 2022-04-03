import React from 'react';
import { shallow } from 'enzyme';
import UsersList from '.';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

const users = [
  {
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
  },
  {
    name: {
      first: 'Rosalyn',
      last: 'Steward',
    },
    location: {
      street: {
        number: 4496,
        name: 'Dublin Road',
      },
      city: 'Waterford',
      coordinates: {
        latitude: '-37.7173',
        longitude: '1.0768',
      },
    },
    email: 'rosalyn.steward@example.com',
    login: {
      uuid: 'ddc905ff-8cc6-4141-895a-fcebd72fe652',
    },
    registered: {
      date: '2018-06-30T16:34:15.754Z',
    },
    picture: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/48.jpg',
    },
  },
];
//jest snapshots
describe('should render ok', () => {
  it('should render list of 2 users', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <UsersList
          users={users}
          loading={false}
          hasError={false}
          resultsNumber={2}
        />
      </BrowserRouter>
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render error if empty user array provided', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <UsersList
          users={[]}
          loading={false}
          hasError={false}
          resultsNumber={2}
        />
      </BrowserRouter>
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render "loading" and 2 placeholders if loading is true', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <UsersList
          users={users}
          loading={true}
          hasError={false}
          resultsNumber={2}
        />
      </BrowserRouter>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render error if no props provided', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <UsersList />
      </BrowserRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});

//eznyme
describe('UserList component', () => {
  it('should render 2 components User and no error message, if users array length is 2. Should render no User components and error message if user array is empty', () => {
    const usersList = shallow(
      <UsersList
        users={[]}
        loading={false}
        hasError={false}
        resultsNumber={2}
      />
    );
    expect(usersList.find('[data-test="user"]').length).toBe(0);
    expect(usersList.find('[data-test="usersList--error"]').length).toBe(1);
    usersList.setProps({ users: users });
    expect(usersList.find('[data-test="user"]').length).toBe(2);
    expect(usersList.find('[data-test="usersList--error"]').length).toBe(0);
  });
  it('should render "loading" if loading is true', () => {
    const usersList = shallow(
      <UsersList
        users={users}
        loading={true}
        hasError={false}
        resultsNumber={2}
      />
    );

    let loader = usersList.find('[data-test="usersList--loader"]');
    expect(loader.length).toBe(1);
    usersList.setProps({ loading: false });
    loader = usersList.find('[data-test="usersList--loader"]');
    expect(loader.length).toBe(0);
  });
});
