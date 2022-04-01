const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-Us', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};

export default formatDate;
