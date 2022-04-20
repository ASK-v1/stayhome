import { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import store from '../store';

export default function Card({ rooms }) {
  const [value, setValue] = useState<number | null>(4.22);
  const roomId = store.useAppSelector((state) => state.user.roomId);

  useEffect(() => {
    if (roomId) {
      window.location.reload();
      window.scrollTo({
        top: 0,
      });
    }
  }, []);

  const delay = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1);
    });
  };

  useEffect(() => {
    (async () => {
      await delay();
      if (roomId) {
        const location = document.getElementById(roomId).offsetTop;
        window.scrollTo({
          top: location - 10,
          behavior: 'smooth',
        });
      }
    })();
  }, [roomId]);

  return (
    <div>
      {rooms &&
        rooms.map((room) => (
          <div
            key={room._id}
            id={room._id}
            className={
              roomId && roomId === room._id
                ? 'flex flex-col border-2 rounded-2xl border-orange-500 shadow-2xl'
                : 'flex flex-col '
            }
          >
            <div className="border-b border-gray-400 w-[53rem] ml-5" />
            <div className="flex flex-row p-5">
              <a href={`/room/${room._id}`} className="flex group">
                <div className="relative overflow-hidden w-72 h-48">
                  <img
                    src={room.host.photos[0]}
                    className="bg-cover rounded absolute w-full h-full transition-all duration-500 ease-in-out transform group-hover:scale-110"
                    alt="card"
                  />
                </div>

                <div className="flex flex-row w-[35rem] justify-between">
                  <div className="ml-3 flex flex-col gap-1">
                    {room.host.title.length > 40 ? (
                      <h1 className="font-semibold text-lg">{room.host.title.slice(0, 40)}...</h1>
                    ) : (
                      <h1 className="font-semibold text-lg">{room.host.title}</h1>
                    )}
                    <div className="border-t border-gray-400 w-10 my-1" />
                    <div className="flex flex-col mb-[79px]">
                      <div className="flex flex-row gap-1 text-sm text-gray-600">
                        <div className="flex flex-row items-center gap-1">
                          <h1>{room.host.guest.guests}</h1>
                          <h1>guests</h1>
                        </div>
                        <h1>-</h1>
                        <div className="flex flex-row items-center gap-1">
                          <h1>{room.host.guest.bedrooms}</h1>
                          <h1>bedrooms</h1>
                        </div>
                        <h1>-</h1>
                        <div className="flex flex-row items-center gap-1">
                          <h1>{room.host.guest.beds}</h1>
                          <h1>beds</h1>
                        </div>
                        <h1>-</h1>
                        <div className="flex flex-row items-center gap-1">
                          <h1>{room.host.guest.bathrooms}</h1>
                          <h1>baths</h1>
                        </div>
                      </div>
                      <div className="flex flex-row gap-1 text-sm text-gray-600">
                        {room.host.amenity.wifi === true && <h1>Wifi</h1>}
                        {room.host.amenity.washer === true && room.host.amenity.wifi === true && (
                          <h1>-</h1>
                        )}
                        {room.host.amenity.washer === true && <h1>Washer</h1>}
                        {room.host.amenity.kitchen === true && room.host.amenity.wifi === true && (
                          <h1>-</h1>
                        )}
                        {room.host.amenity.kitchen === true && <h1>Kitchen</h1>}
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                      <Rating
                        className="text-xl text-orange-500"
                        name="read-only"
                        value={value}
                        readOnly
                      />
                      <h1 className="font-semibold">{value}</h1>
                    </div>
                  </div>
                  <div className="flex flex-col self-end">
                    <div className="flex flex-row gap-2 self-end">
                      <h1 className="font-black text-xl">${room.host.price}</h1>
                      <h1 className="font-light text-xl">/ night</h1>
                    </div>
                    <h1 className="text-gray-800 underline text-sm">$1330.5 total before taxes</h1>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
    </div>
  );
}
