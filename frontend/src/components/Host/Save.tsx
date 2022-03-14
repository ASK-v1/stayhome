import { useNavigate } from 'react-router';

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
  setPage: Function;
  space: string;
  location: object;
  guest: object;
  amenity: object;
  photos: any;
  title: string;
  description: string;
  price: number;
}) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-row">
        <div className="flex items-center h-screen p-20 w-7/12 self-center text-5xl font-black bg-orange-500 text-white">
          <h1>Check out your listing!</h1>
        </div>
        <div className="flex flex-col bg-white w-7/12 self-center">
          <div className="self-center">LISTING</div>
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
              onClick={() => navigate('/')}
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
