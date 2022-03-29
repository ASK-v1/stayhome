import React, { useEffect, useRef, useState } from 'react';

export default function GMap({
  center,
  zoom,
  children,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
  children: React.ReactNode;
}) {
  const mapRef = useRef<HTMLDivElement>();

  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    setMap(new window.google.maps.Map(mapRef.current!, {}));
  }, []);

  if (map) {
    map.setCenter(center);
    map.setZoom(zoom);
  }

  return (
    <div
      ref={mapRef}
      style={{
        display: 'block',
        left: '50%',
        marginRight: '500px',
        height: '37rem',
        width: '77rem',
        borderRadius: '20px',
      }}
      id="map"
    >
      {React.Children.map(children, (child: React.ReactElement) =>
        React.cloneElement(child, { map }),
      )}
    </div>
  );
}
