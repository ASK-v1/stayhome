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
      url: 'https://res.cloudinary.com/dpsbq1odp/image/upload/v1648656025/Webp.net-resizeimage_mnkibw.png',
    });
    marker.setLabel('80$');
  }

  return null;
}
