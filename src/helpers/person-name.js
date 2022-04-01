const personName = (firstName, lastName) => {
  return firstName && lastName
    ? `${firstName} ${lastName}`
    : 'no first or last name provided';
};

export default personName;
