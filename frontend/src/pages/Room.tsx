import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Photos from '../components/Photos';
import Reserve from '../components/Reserve';
import Description from '../components/Description';
import Reviews from '../components/Reviews';
import Map from '../components/Map';
import Contact from '../components/Contact';
import Topbar from '../components/Topbar';
import { useState } from 'react';
import { getRoom } from '../store/userAction';
import store from '../store';
import { useEffect } from 'react';
import { useParams } from 'react-router';

export default function Room() {
  const dispatch = store.useAppDispatch();
  const room = store.useAppSelector((state) => state.user.room.room);

  const [reviews, setReviews] = useState<boolean>(false);
  const params = useParams();

  useEffect(() => {
    (async () => {
      await dispatch(getRoom(params.id));
    })();
  }, []);

  return (
    <div>
      <Topbar />
      <Navbar />
      <div id="photos">
        <Photos setReviews={setReviews} photos={room && room.host.photos} />
      </div>
      <div className="flex flex-col" id="amenities">
        <div className="flex flex-row justify-center gap-64">
          <Description
            guest={room && room.host.guest}
            title={room && room.host.title}
            description={room && room.host.description}
            amenity={room && room.host.amenity}
          />
          <Reserve price={room && room.host.price} />
        </div>
        <div className="border-gray-400 border-b mt-10 w-[77rem] self-center" />
      </div>
      <div id="reviews">
        <Reviews reviews={reviews} setReviews={setReviews} />
      </div>
      <div className="flex flex-col items-center" id="location">
        <div className="border-gray-400 border-b w-[77rem] self-center" />
        <h1 className="text-xl font-bold mt-10 mb-5">Where you’ll be</h1>
        <div className="self-center justify-self-center mr-[1228px]">
          <Map />
        </div>
      </div>
      <Contact about={room && room.about} />
      <Footer />
    </div>
  );
}
