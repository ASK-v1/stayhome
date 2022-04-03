import GMap from './GMap';
import Marker from './Marker';
import { Wrapper } from '@googlemaps/react-wrapper';

export default function Map({ position }: { position: { lat: number; lng: number } }) {
  const zoom = 15;

  return (
    <Wrapper apiKey={''}>
      <GMap zoom={zoom} center={position}>
        <Marker position={position} />
      </GMap>
    </Wrapper>
  );
}
