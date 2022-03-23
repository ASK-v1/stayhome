import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Map from '../components/Map';
import Card from '../components/Card';
import Filters from '../components/Filters';
import { getRooms } from '../store/userAction';
import store from '../store';
import { useEffect } from 'react';

export default function Rooms() {
  const dispatch = store.useAppDispatch();
  const users = store.useAppSelector((state) => state.user.rooms);

  useEffect(() => {
    (async () => {
      await dispatch(getRooms);
    })();
  }, []);

  return (
    <div>
      <Navbar />
      <Filters />
      <div className="border-b border-gray-400 w-full mt-5" />
      <h1 className="ml-5 text-gray-800 font-semibold my-5">
        {users.rooms.length} stays in map area
      </h1>
      <div className="flex flex-row">
        <Card rooms={users.rooms} />
        <div className="w-4/5">
          <Map />
        </div>
      </div>

      <Footer />
    </div>
  );
}
