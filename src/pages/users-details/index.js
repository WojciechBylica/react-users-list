import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Error, Map, User } from '../../components';
import { ScrollToTheTop } from '../../helpers';

const UserDetails = ({ users }) => {
  const { id } = useParams();
  const user = users?.find((user) => user.login.uuid === id) || null;
  if (!user)
    return <Error message='no user data provided, please press "Home"' />;

  return (
    <>
      <ScrollToTheTop />
      <User user={user} />
      <Map user={user} />
    </>
  );
};

export default UserDetails;

UserDetails.propTypes = {
  users: PropTypes.array.isRequired,
};
