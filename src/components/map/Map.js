import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Error from '../error/Error';
import UserWrapper from '../user-wrapper/UserWrapper';
import '../user-wrapper/style.css';

const Map = ({ user }) => {
  const latitude = Number(user?.location?.coordinates?.latitude);
  const longitude = Number(user?.location?.coordinates?.longitude);

  if (!user?.location?.coordinates)
    return <Error message="no map data provided..." />;

  return (
    <MapContainer
      className="userWrapper userWrapper--map"
      center={[latitude, longitude]}
      zoom={3}
    >
      <UserWrapper></UserWrapper>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          {user?.name?.first} {user?.name?.last}
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default Map;

Map.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }),
    location: PropTypes.shape({
      coordinates: PropTypes.shape({
        latitude: PropTypes.string.isRequired,
        longitude: PropTypes.string.isRequired,
      }),
    }),
  }),
};
