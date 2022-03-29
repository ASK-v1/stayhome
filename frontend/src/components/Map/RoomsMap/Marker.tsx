import { useEffect, useState } from 'react';

export default function Marker({
  position,
  map,
}: {
  position: google.maps.LatLngLiteral;
  map?: google.maps.Map;
}) {
  const [marker, setMarker] = useState<google.maps.Marker | null>(null);

  useEffect(() => {
    setMarker(new google.maps.Marker({ position }));
  }, [position]);

  if (marker) {
    marker.setMap(map);
    marker.setPosition(position);
    marker.setIcon({
      path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
      scale: 10,
      fillColor: '#ed8936',
      fillOpacity: 0.8,
      strokeWeight: 1,
    });
  }

  return null;
}
