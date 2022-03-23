import { useNavigate } from 'react-router';
import Avatar from '@mui/material/Avatar';
import { userHost } from '../../store/userAction';
import store from '../../store';

export default function Save({
  setPage,
  space,
  location,
  guest,
  amenity,
  photos,
  title,
  description,
  price,
}: {
  setPage: (value: number) => void;
  space: string;
  location: object;
  guest: object;
  amenity: object;
  photos: string[];
  title: string;
  description: string;
  price: number;
}) {
  const dispatch = store.useAppDispatch();
  const navigate = useNavigate();

  const user = store.useAppSelector((state) => JSON.parse(state.user.user));

  const roomsGuests = JSON.parse(JSON.stringify(guest));

  let titleCheck = '';
  if (title.length > 22) titleCheck = `${title.slice(0, 22)}...`;

  const save = async () => {
    await dispatch(
      userHost({
        space,
        location,
        guest,
        amenity,
        photos,
        title,
        description,
        price,
        id: user._id,
      }),
    );
    navigate('/');
  };

  return (
    <div>
      <div className="flex flex-row">
        <div className="flex items-center h-screen p-20 w-7/12 text-5xl font-black bg-orange-500 text-white">
          <h1>Check out your listing!</h1>
        </div>
        <div className="flex flex-col bg-white w-7/12 self-center mb-40">
          <div className="flex flex-col shadow-2xl rounded-3xl border border-gray-400 h-[37rem] self-center">
            <img src={photos[0]} className="rounded-t-3xl w-[25rem] h-64" alt="photos" />
            <h1 className="font-bold text-2xl my-5 ml-5">{titleCheck || title}</h1>

            <div className="border-b border-gray-400 mb-5 ml-5 w-[360px]" />

            <div className="flex flex-row gap-3">
              <h1 className="text-lg font-bold ml-5 w-40 text-gray-800">
                {space} Hosted by {user.firstName}
              </h1>
              <Avatar className="p-6 bg-orange-500">{user.firstName}</Avatar>
            </div>

            <div className="border-b border-gray-400 my-5 ml-5 w-[360px]" />

            <div className="flex flex-row gap-1 text-sm text-gray-800 ml-5">
              <div className="flex flex-row items-center gap-1">
                <h1>{roomsGuests.guests}</h1>
                <div>{roomsGuests.guests === 1 ? <h1>guest</h1> : <h1>guests</h1>}</div>
              </div>
              <h1>-</h1>
              <div className="flex flex-row items-center gap-1">
                <h1>{roomsGuests.bedrooms}</h1>
                <div>{roomsGuests.bedrooms === 1 ? <h1>bedroom</h1> : <h1>bedrooms</h1>}</div>
              </div>
              <h1>-</h1>
              <div className="flex flex-row items-center gap-1">
                <h1>{roomsGuests.beds}</h1>
                <div>{roomsGuests.beds === 1 ? <h1>bed</h1> : <h1>beds</h1>}</div>
              </div>
              <h1>-</h1>
              <div className="flex flex-row items-center gap-1">
                <h1>{roomsGuests.bathrooms}</h1>
                <div>{roomsGuests.bathrooms === 1 ? <h1>bath</h1> : <h1>baths</h1>}</div>
              </div>
            </div>

            <div className="border-b border-gray-400 my-5 ml-5 w-[360px]" />

            <div className="flex flex-row gap-4 ml-5">
              <div className="flex flex-row gap-2">
                <h1 className="font-bold text-xl">${price}</h1>
                <h1 className="font-semibold text-xl">Per night</h1>
              </div>
              <h1 className="text-gray-400">|</h1>
              <div className="flex flex-row gap-2">
                <h1 className="font-bold text-xl">
                  {Object.entries(amenity).filter((item) => item[1] === true).length}
                </h1>
                <h1 className="font-semibold text-xl">Amenities</h1>
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate('/')}
            className="absolute top-5 right-5 border w-20 font-semibold text-white p-3 rounded-md duration-300 hover:opacity-90 bg-black shadow-2xl"
          >
            Exit
          </button>
          <div className="z-10 bg-white">
            <div className="absolute bottom-24 w-[50%] border-t-4 border-black" />
            <div className="absolute bottom-24 w-6/12 border-t border-gray-800" />
            <button
              onClick={() => setPage(8)}
              className="absolute bottom-5 ml-5 border w-20 font-semibold border-black text-black p-3 rounded-md duration-300 hover:bg-black hover:text-white"
            >
              Back
            </button>
            <button
              onClick={save}
              className="absolute shadow-2xl bottom-5 right-5 border w-40 font-semibold text-white p-3 rounded-md duration-300 bg-blue-600 hover:bg-blue-500 hover:text-white"
            >
              Save your listing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
