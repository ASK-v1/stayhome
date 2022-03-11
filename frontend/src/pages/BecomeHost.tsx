import Space from '../components/Host/Space';
import Locations from '../components/Host/Location';
import Guest from '../components/Host/Guest';
import Amenity from '../components/Host/Amenity';
import Photos from '../components/Host/Photos';
import Place from '../components/Host/Place';
import Price from '../components/Host/Price';
import Description from '../components/Host/Description';
import Save from '../components/Host/Save';
import { useState } from 'react';

export default function BecomeHost() {
  const [page, setPage] = useState<number>(1);

  return (
    <div>
      {page === 1 && <Space setPage={setPage} />}
      {page === 2 && <Locations setPage={setPage} />}
      {page === 3 && <Guest setPage={setPage} />}
      {page === 4 && <Amenity setPage={setPage} />}
      {page === 5 && <Photos setPage={setPage} />}
      {page === 6 && <Place setPage={setPage} />}
      {page === 7 && <Description setPage={setPage} />}
      {page === 8 && <Price setPage={setPage} />}
      {page === 9 && <Save setPage={setPage} />}
    </div>
  );
}
