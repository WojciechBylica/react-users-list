import formatDate from './format-date';
import personName from './person-name';
import userAddress from './user-address';

it('should return formatted date: weekday, month, day, year', () => {
  expect(formatDate('2014-12-11T04:02:22.729Z')).toBe(
    'Thursday, December 11, 2014'
  );
});

it('should return name and last name if provided from props, or "no first or last name provided"', () => {
  expect(personName('John', 'Doe')).toBe('John Doe');
  expect(personName()).toBe('no first or last name provided');
});

const location = {
  street: { name: 'Wilanowska', number: '8' },
  city: 'Warsaw',
};

it('should return correct adress if provided data from props, or"no address provided"', () => {
  expect(userAddress(location)).toBe('Wilanowska 8 Warsaw');
  expect(userAddress()).toBe('no address provided');
});
