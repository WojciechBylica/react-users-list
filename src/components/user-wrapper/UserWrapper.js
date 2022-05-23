import './style.scss';
import PropTypes from 'prop-types';

const UserWrapper = ({ children, link }) => (
  <div className={link ? 'userWrapper userWrapper--link' : 'userWrapper'}>
    {children}
  </div>
);

export default UserWrapper;

UserWrapper.propTypes = {
  children: PropTypes.node,
  link: PropTypes.bool,
};
