import PropTypes from 'prop-types';
import { formatDate, personName, userAddress } from '../../helpers';
import UserWrapper from '../user-wrapper';
import './style.css';

const User = ({ user, link }) => {
  const firstName = user?.name?.first;
  const lastName = user?.name?.last;
  const location = user?.location;
  const email = user?.email;
  const registrationDate = user?.registered?.date;
  const avatar = user?.picture?.thumbnail;

  return (
    <UserWrapper link={link}>
      <h2 className="user__header">
        <img
          className="user__avatar"
          width={48}
          height={48}
          src={avatar}
          alt="avatar"
        />
        <span className="user__person">{personName(firstName, lastName)}</span>
      </h2>
      <ul className="user__list">
        <li>{personName(firstName, lastName)}</li>
        <li>{userAddress(location)}</li>
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
  link: PropTypes.bool,
};
