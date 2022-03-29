import GMap from './GMap';
import Marker from './Marker';
import { Wrapper } from '@googlemaps/react-wrapper';

export default function Map() {
  const center = { lat: 37.76307881491264, lng: -122.46658168914468 };
  const zoom = 15;
  const position = { lat: 37.76307881491264, lng: -122.46658168914468 };

  return (
    <Wrapper apiKey={''}>
      <GMap zoom={zoom} center={center}>
        <Marker position={position} />
      </GMap>
    </Wrapper>
  );
}
