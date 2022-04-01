import PropTypes from 'prop-types';
import './style.css';

const Footer = ({ userDetails }) => (
  <footer className={userDetails ? 'footer footer--userDetails' : 'footer'}>
    <p>Written for learning</p>
  </footer>
);

export default Footer;

Footer.propTypes = {
  userDetails: PropTypes.bool,
};
