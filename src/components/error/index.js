import PropTypes from 'prop-types';

const Error = ({ message }) => <p>{message}</p>;

export default Error;

Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message:
    'an error has occurred... please check your internet connection and try again...',
};
