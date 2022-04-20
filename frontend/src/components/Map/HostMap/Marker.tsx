import { useEffect, useState } from 'react';
import { setCoordinate } from '../../../store/userAction';
import store from '../../../store';

export default function Marker({
  position,
  map,
}: {
  position: google.maps.LatLngLiteral;
  map?: google.maps.Map;
}) {
  const [marker, setMarker] = useState<google.maps.Marker | null>(null);

  useEffect(() => {
    setMarker(
      new google.maps.Marker({
        position,
        draggable: true,
      }),
    );
  }, [position]);

  const dispatch = store.useAppDispatch();
  let positions: { lat: number; lng: number };

  if (marker) {
    marker.setMap(map);
    marker.setPosition(position);
    marker.setIcon({
      url: 'https://res.cloudinary.com/dpsbq1odp/image/upload/v1648997369/Webp.net-resizeimage_1_w9yney.png',
    });

    // eslint-disable-next-line @typescript-eslint/no-shadow
    google.maps.event.addListener(marker, 'dragend', function (marker) {
      positions = { lat: marker.latLng.lat(), lng: marker.latLng.lng() };
      dispatch(setCoordinate(positions));
    });
  }

  return null;
}
