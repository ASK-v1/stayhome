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
  const style = { height: '100vh' };
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    setMap(new window.google.maps.Map(mapRef.current!, {}));
  }, []);

  if (map) {
    map.setCenter(center);
    map.setZoom(zoom);
  }

  return (
    <div ref={mapRef} style={style} id="map">
      {React.Children.map(children, (child: React.ReactElement) =>
        React.cloneElement(child, { map }),
      )}
    </div>
  );
}
