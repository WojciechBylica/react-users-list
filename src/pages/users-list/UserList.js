import { Link } from 'react-router-dom';
import { Error, Loader, User } from '../../components';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';
import './style.scss';
import Placeholders from './Placeholders';
import PropTypes from 'prop-types';

const UsersList = ({ users, loading, hasError, resultsNumber }) => {
  if (hasError || (!!users && users.length === 0 && !loading))
    return <Error data-test="usersList--error" />;

  return (
    <>
      {loading && <Loader data-test="usersList--loader" />}
      <div>
        <ReactPlaceholder
          ready={!loading}
          customPlaceholder={<Placeholders resultsNumber={resultsNumber} />}
        >
          {users &&
            users.map((user) => (
              <Link
                to={`/users/${user.login.uuid}`}
                key={user.login.uuid}
                className="usersList__link"
              >
                <User user={user} link data-test="user" />
              </Link>
            ))}
        </ReactPlaceholder>
      </div>
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
  hasError: true,
};
