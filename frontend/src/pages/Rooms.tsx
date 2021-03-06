import Navbar from '../components/Navbar';
import Map from '../components/Map/RoomsMap';
import Card from '../components/Card';
import Filters from '../components/Filters';
import store from '../store';
import { useParams } from 'react-router';
import { useEffect } from 'react';

export default function Rooms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const users = store.useAppSelector((state) => state.user.rooms);
  const param = useParams();
  return (
    <div>
      <div className="flex flex-col w-full fixed z-30">
        <Navbar />
        <Filters />
      </div>
      <div className="border-t border-gray-400 w-full z-30 fixed bg-white mt-[9.8rem] left-5" />
      <div className="flex flex-row w-[50rem]">
        <div className="bg-white z-10 relative mt-[9.8rem]">
          {users.rooms && users.rooms.length ? (
            <h1 className="ml-5 text-gray-800 font-semibold my-5">
              {users && users.rooms.length} stays in {param.city.split('-').join(' ')}
            </h1>
          ) : (
            <h1 className="ml-5 text-gray-800 font-semibold my-5 w-[54.25rem]  mb-[75rem]">
              0 stay in {param.city.split('-').join(' ')}
            </h1>
          )}
          {users.rooms && users.rooms.length < 4 ? (
            users.rooms.length < 2 ? (
              <div className="mb-[70vh]">
                <Card rooms={users.rooms} />
              </div>
            ) : (
              <div className="mb-[55vh]">
                <Card rooms={users.rooms} />
              </div>
            )
          ) : (
            <div className="mb-[10vh]">
              <Card rooms={users.rooms} />
            </div>
          )}
        </div>
        <div className="fixed right-[70vw] top-0">
          <Map />
        </div>
      </div>
    </div>
  );
}
