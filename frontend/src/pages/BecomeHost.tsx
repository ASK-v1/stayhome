import Space from '../components/Host/Space';
import Locations from '../components/Host/Location';
import Guest from '../components/Host/Guest';
import Amenity from '../components/Host/Amenity';
import Photos from '../components/Host/Photos';
import Title from '../components/Host/Title';
import Price from '../components/Host/Price';
import Description from '../components/Host/Description';
import Save from '../components/Host/Save';
import { useState } from 'react';

export default function BecomeHost() {
  const [page, setPage] = useState<number>(1);

  const [space, setSpace] = useState<string>();
  const [location, setLocation] = useState<object>();
  const [guest, setGuest] = useState<object>();
  const [amenity, setAmenity] = useState<object>();
  const [photos, setPhotos] = useState<any>();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(null);

  console.log(location);

  return (
    <div>
      {page === 1 && <Space setPage={setPage} setSpace={setSpace} />}
      {page === 2 && <Locations setPage={setPage} setLocation={setLocation} />}
      {page === 3 && <Guest setPage={setPage} setGuest={setGuest} />}
      {page === 4 && <Amenity setPage={setPage} setAmenity={setAmenity} />}
      {page === 5 && <Photos setPage={setPage} setPhotos={setPhotos} />}
      {page === 6 && <Title setPage={setPage} setTitle={setTitle} />}
      {page === 7 && <Description setPage={setPage} setDescription={setDescription} />}
      {page === 8 && <Price setPage={setPage} setPrice={setPrice} />}
      {page === 9 && (
        <Save
          setPage={setPage}
          space={space}
          location={location}
          guest={guest}
          amenity={amenity}
          photos={photos}
          title={title}
          description={description}
          price={price}
        />
      )}
    </div>
  );
}
