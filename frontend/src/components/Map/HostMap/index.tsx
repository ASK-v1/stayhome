import GMap from './GMap';
import Marker from './Marker';
import { Wrapper } from '@googlemaps/react-wrapper';

export default function Map({ position }) {
  const zoom = 8;

  return (
    <Wrapper apiKey={''}>
      <GMap zoom={zoom} center={position}>
        <Marker position={position} />
      </GMap>
    </Wrapper>
  );
}
