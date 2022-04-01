const userAddress = (location) => {
  return location?.street?.name && location?.street?.number && location?.city
    ? `${location.street.name} ${location.street.number} ${location.city}`
    : 'no address provided';
};

export default userAddress;
