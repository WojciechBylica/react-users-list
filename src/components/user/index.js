import PropTypes from 'prop-types';
import UserWrapper from '../user-wrapper';
import './style.css';

const User = ({ user }) => {
  const firstName = user?.name?.first;
  const lastName = user?.name?.last;
  const location = user?.location;
  const email = user?.email;
  const registrationDate = user?.registrationDate;
  const avatar = user?.picture?.thumbnail;

  const formatDate = (date) =>
    new Date(date).toLocaleDateString('en-Us', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

  return (
    <UserWrapper>
      <h2 className="user__header">
        <img
          style={{ borderRadius: '100%' }}
          width={48}
          height={48}
          src={avatar}
          alt="avatar"
        />
        <span style={{ marginLeft: '8px' }}>
          {firstName} {lastName}
        </span>
      </h2>
      <ul style={{ textAlign: 'left' }}>
        <li>
          {firstName && lastName
            ? `${firstName} ${lastName}`
            : 'no first or last name provided'}
        </li>
        <li>
          {location?.street?.name && location?.street?.number && location?.city
            ? `${location.street.name} ${location.street.number} ${location.city}`
            : 'no address provided'}{' '}
        </li>
        <li>{email}</li>
        <li>registered: {formatDate(registrationDate)}</li>
      </ul>
    </UserWrapper>
  );
};

export default User;

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }),
    location: PropTypes.shape({
      street: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
      }),
      city: PropTypes.string.isRequired,
    }),
    email: PropTypes.string.isRequired,
    registered: PropTypes.shape({
      date: PropTypes.string.isRequired,
    }),
    picture: PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
    }),
  }),
};
