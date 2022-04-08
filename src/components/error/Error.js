import PropTypes from 'prop-types';
import './style.css';

const Error = ({ message }) => (
  <p className="error" data-test="error">
    {message}
  </p>
);

export default Error;

Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message:
    'an error has occurred... please check your internet connection and try again...',
};
