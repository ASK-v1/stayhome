import GMap from './GMap';
import Marker from './Marker';
import { Wrapper } from '@googlemaps/react-wrapper';
import store from '../../../store';

export default function Map() {
  const users = store.useAppSelector((state) => state.user.rooms);

  let priceAndId = [];
  let positions = [];
  let zoom = 11;

  if (users.rooms) {
    users.rooms.map((user) => positions.push(user.host.location.coordinate));
    users.rooms.map((user) => priceAndId.push({ price: user.host.price, id: user._id }));
  }

  return (
    <Wrapper apiKey={''}>
      <GMap zoom={zoom} center={positions[0]}>
        <Marker positions={positions} priceAndId={priceAndId} />
      </GMap>
    </Wrapper>
  );
}
