import Space from '../components/BecomeHost/Space';
import Locations from '../components/BecomeHost/Location';
import Guest from '../components/BecomeHost/Guest';
import Amenity from '../components/BecomeHost/Amenity';
import { useState } from 'react';

export default function BecomeHost() {
  const [page, setPage] = useState<number>(1);

  return (
    <div>
      {page === 1 && <Space setPage={setPage} />}
      {page === 2 && <Locations setPage={setPage} />}
      {page === 3 && <Guest setPage={setPage} />}
      {page === 4 && <Amenity setPage={setPage} />}
    </div>
  );
}
