import GMap from './GMap';
import Marker from './Marker';
import { Wrapper } from '@googlemaps/react-wrapper';

export default function Map() {
  const center = { lat: -34.323, lng: 150.644 };
  const zoom = 10;
  const positions = [
    { lat: -34.321, lng: 150.444 },
    { lat: -34.32, lng: 150.544 },
    { lat: -34.323, lng: 150.644 },
  ];

  return (
    <Wrapper apiKey={''}>
      <GMap zoom={zoom} center={center}>
        {positions.map((position, index) => (
          <Marker key={index} position={position} />
        ))}
      </GMap>
    </Wrapper>
  );
}
