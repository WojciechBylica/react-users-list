import './style.css';
import PropTypes from 'prop-types';

const UserWrapper = ({ children, link }) => (
  <div className={link ? 'UserWrapper UserWrapper--link' : 'UserWrapper'}>
    {children}
  </div>
);

export default UserWrapper;

UserWrapper.propTypes = {
  children: PropTypes.node,
  link: PropTypes.bool,
};
