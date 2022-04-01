import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import UserWrapper from '../user-wrapper';
import '../user-wrapper/style.css';

const Map = ({ user }) => {
  const latitude = user?.location?.coordinates?.latitude;
  const longitude = user?.location?.coordinates?.longitude;

  return (
    <MapContainer
      className="UserWrapper UserWrapper--map"
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
          {user.name.first} {user.name.last}
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default Map;

Map.propTypes = {
  user: PropTypes.object.isRequired,
};
