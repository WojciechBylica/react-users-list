import { Link } from 'react-router-dom';
import { Error, Footer, Loader, User } from '../../components';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';
import './style.css';
import Placeholders from './placeholders';
import PropTypes from 'prop-types';

const UsersList = ({ users, loading, hasError, resultsNumber }) => {
  if (hasError) return <Error />;

  return (
    <>
      <main>
        {loading && <Loader />}
        <ReactPlaceholder
          ready={!loading}
          customPlaceholder={<Placeholders resultsNumber={resultsNumber} />}
        >
          {users.map((user) => (
            <Link
              to={`/users/${user.login.uuid}`}
              key={user.login.uuid}
              className="usersList__link"
            >
              <User user={user} />
            </Link>
          ))}
        </ReactPlaceholder>
      </main>
      <Footer />
    </>
  );
};

export default UsersList;

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  resultsNumber: PropTypes.number.isRequired,
};

UsersList.defaultProps = {
  resultsNumber: 10,
};
