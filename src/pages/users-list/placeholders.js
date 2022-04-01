import { MediaBlock } from 'react-placeholder/lib/placeholders';
import { UserWrapper } from '../../components';
import PropTypes from 'prop-types';

const Placeholders = ({ resultsNumber }) =>
  [...Array(resultsNumber)].map((_, index) => (
    <UserWrapper key={`placeholder-${index}`}>
      <MediaBlock rows={6} color="#E0E0E0" />
    </UserWrapper>
  ));

export default Placeholders;

Placeholders.propTypes = {
  resultsNumber: PropTypes.number.isRequired,
};

Placeholders.defaultProps = {
  resultsNumber: 10,
};
