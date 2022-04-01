import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Error, Footer, Map, User } from '../../components';

const UserDetails = ({ users }) => {
  const { id } = useParams();
  const user = users?.find((user) => user.login.uuid === id) || null;
  if (!user)
    return <Error message='no user data provided, please press "Home"' />;

  return (
    <>
      <main>
        <User user={user} />
        <Map user={user} />
      </main>
      <Footer userDetails />
    </>
  );
};

export default UserDetails;

UserDetails.propTypes = {
  users: PropTypes.array.isRequired,
};
