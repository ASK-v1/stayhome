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
    setMap(
      new window.google.maps.Map(mapRef.current!, {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
      }),
    );
  }, [center]);

  if (map) {
    map.setCenter(center);
    map.setZoom(zoom);
  }

  return (
    <div className=" h-screen absolute w-[70vw] " ref={mapRef} id="map">
      {React.Children.map(children, (child: React.ReactElement) =>
        React.cloneElement(child, { map }),
      )}
    </div>
  );
}
